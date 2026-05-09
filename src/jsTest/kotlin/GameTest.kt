import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertNull
import kotlin.test.assertTrue

class GameTest {
    private fun playMoves(state: GameState, vararg cols: Int): GameState {
        var s = state
        for (c in cols) {
            s = s.dropPiece(c) ?: error("illegal move at column $c (state=$s)")
        }
        return s
    }

    @Test
    fun gravity_pieces_stack_from_bottom() {
        var s = GameState.new(GameConfig(rows = 6, cols = 7, winLength = 4))
        s = s.dropPiece(3)!!  // RED at bottom of col 3
        s = s.dropPiece(3)!!  // YELLOW above RED
        s = s.dropPiece(3)!!  // RED above YELLOW

        assertEquals(Cell.RED, s.grid[5][3])
        assertEquals(Cell.YELLOW, s.grid[4][3])
        assertEquals(Cell.RED, s.grid[3][3])
        assertEquals(Cell.EMPTY, s.grid[2][3])
    }

    @Test
    fun horizontal_win_classic() {
        val cfg = GameConfig(rows = 6, cols = 7, winLength = 4)
        // R drops cols 0..3, Y drops cols 0..2 just above to fill rows
        val s = playMoves(GameState.new(cfg), 0, 0, 1, 1, 2, 2, 3)
        assertEquals(Cell.RED, s.winner)
        assertEquals(4, s.winningCells.size)
        assertFalse(s.isDraw)
    }

    @Test
    fun vertical_win() {
        val cfg = GameConfig(rows = 6, cols = 7, winLength = 4)
        // R: col 0 four times, Y: col 1 three times in between
        val s = playMoves(GameState.new(cfg), 0, 1, 0, 1, 0, 1, 0)
        assertEquals(Cell.RED, s.winner)
        assertEquals(4, s.winningCells.size)
    }

    @Test
    fun diagonal_win_down_right() {
        val cfg = GameConfig(rows = 6, cols = 7, winLength = 4)
        // Build a staircase. Sequence chosen so RED gets a /-diagonal at (5,0)(4,1)(3,2)(2,3).
        val s = playMoves(
            GameState.new(cfg),
            0,        // R (5,0)
            1,        // Y (5,1)
            1,        // R (4,1)
            2,        // Y (5,2)
            3,        // R (5,3) — filler
            2,        // Y (4,2)
            2,        // R (3,2)
            3,        // Y (4,3)
            6,        // R filler (5,6)
            3,        // Y (3,3)
            3,        // R (2,3) — completes /-diagonal: (5,0)(4,1)(3,2)(2,3)
        )
        assertEquals(Cell.RED, s.winner)
        assertEquals(4, s.winningCells.size)
        assertTrue((5 to 0) in s.winningCells)
        assertTrue((2 to 3) in s.winningCells)
    }

    @Test
    fun configurable_win_length_five() {
        val cfg = GameConfig(rows = 6, cols = 10, winLength = 5)
        // RED needs 5 in a row. Same pattern as horizontal win but extended.
        val s = playMoves(
            GameState.new(cfg),
            0, 0, 1, 1, 2, 2, 3, 3, 4,
        )
        assertEquals(Cell.RED, s.winner)
        assertEquals(5, s.winningCells.size)
    }

    @Test
    fun win_length_four_does_not_trigger_with_only_three() {
        val cfg = GameConfig(rows = 6, cols = 7, winLength = 4)
        val s = playMoves(GameState.new(cfg), 0, 0, 1, 1, 2)  // R has three in a row
        assertNull(s.winner)
        assertEquals(Cell.YELLOW, s.currentPlayer)
    }

    @Test
    fun cannot_drop_into_full_column() {
        val cfg = GameConfig(rows = 4, cols = 4, winLength = 4)
        var s = GameState.new(cfg)
        // Alternating colors → no vertical streak, column fills cleanly.
        s = s.dropPiece(0)!!  // R (3,0)
        s = s.dropPiece(0)!!  // Y (2,0)
        s = s.dropPiece(0)!!  // R (1,0)
        s = s.dropPiece(0)!!  // Y (0,0)

        assertTrue(s.columnIsFull(0))
        assertNull(s.winner)
        assertNull(s.dropPiece(0))
    }

    @Test
    fun draw_when_board_fills_with_no_winner() {
        // 4x4 with winLength=10 (impossible to win) → must end in a draw when full.
        val cfg = GameConfig(rows = 4, cols = 4, winLength = 10)
        var s = GameState.new(cfg)
        repeat(cfg.rows * cfg.cols) { i ->
            s = s.dropPiece(i % cfg.cols)!!
        }
        assertTrue(s.isDraw)
        assertNull(s.winner)
        assertTrue(s.isOver)
    }

    @Test
    fun moves_blocked_after_game_over() {
        val cfg = GameConfig(rows = 6, cols = 7, winLength = 4)
        val s = playMoves(GameState.new(cfg), 0, 0, 1, 1, 2, 2, 3)
        assertNotNull(s.winner)
        assertNull(s.dropPiece(4)) // any further move is rejected
    }

    @Test
    fun config_validates_inputs() {
        assertFailsWith<IllegalArgumentException> { GameConfig(rows = 2, cols = 7, winLength = 4) }
        assertFailsWith<IllegalArgumentException> { GameConfig(rows = 6, cols = 7, winLength = 2) }
        assertFailsWith<IllegalArgumentException> { GameConfig(rows = 6, cols = 7, winLength = 99) }
    }

    @Test
    fun players_alternate() {
        val cfg = GameConfig.DEFAULT
        var s = GameState.new(cfg)
        assertEquals(Cell.RED, s.currentPlayer)
        s = s.dropPiece(0)!!
        assertEquals(Cell.YELLOW, s.currentPlayer)
        s = s.dropPiece(1)!!
        assertEquals(Cell.RED, s.currentPlayer)
    }

    @Test
    fun last_move_tracks_landing_position() {
        val cfg = GameConfig.DEFAULT
        val s = GameState.new(cfg).dropPiece(3)!!
        assertEquals(cfg.rows - 1 to 3, s.lastMove)
    }
}
