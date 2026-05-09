import kotlinx.browser.window

/**
 * Tiny hand-rolled serializer for [GameState] so we don't need kotlinx.serialization.
 * Format (single line, '|' separated): rows|cols|win|currentPlayer|winner|isDraw|moveCount|grid
 * Grid is row-major, one char per cell: R = RED, Y = YELLOW, . = EMPTY.
 */
object Storage {
    private const val KEY = "connect_four:v1"

    fun save(state: GameState) {
        val sb = StringBuilder()
        sb.append(state.config.rows).append('|')
        sb.append(state.config.cols).append('|')
        sb.append(state.config.winLength).append('|')
        sb.append(state.currentPlayer.encode()).append('|')
        sb.append(state.winner?.encode() ?: "-").append('|')
        sb.append(if (state.isDraw) 1 else 0).append('|')
        sb.append(state.moveCount).append('|')
        for (row in state.grid) for (cell in row) sb.append(cell.encode())
        runCatching { window.localStorage.setItem(KEY, sb.toString()) }
    }

    fun load(): GameState? = runCatching {
        val raw = window.localStorage.getItem(KEY) ?: return null
        val parts = raw.split('|')
        if (parts.size != 8) return null
        val rows = parts[0].toInt()
        val cols = parts[1].toInt()
        val win = parts[2].toInt()
        val current = parts[3].decodeCell() ?: return null
        val winner = if (parts[4] == "-") null else parts[4].decodeCell()
        val isDraw = parts[5] == "1"
        val moveCount = parts[6].toInt()
        val flat = parts[7]
        if (flat.length != rows * cols) return null

        val grid = List(rows) { r ->
            List(cols) { c ->
                flat[r * cols + c].toString().decodeCell() ?: Cell.EMPTY
            }
        }

        // Recompute winning cells if there is a winner — saves serializing the line.
        val winningLine = if (winner != null) {
            findAnyWinningLine(grid, rows, cols, win, winner)
        } else emptyList()

        GameState(
            config = GameConfig(rows, cols, win),
            grid = grid,
            currentPlayer = current,
            winner = winner,
            isDraw = isDraw,
            winningCells = winningLine,
            lastMove = null,
            moveCount = moveCount,
        )
    }.getOrNull()

    fun clear() {
        runCatching { window.localStorage.removeItem(KEY) }
    }

    private fun Cell.encode(): String = when (this) {
        Cell.RED -> "R"; Cell.YELLOW -> "Y"; Cell.EMPTY -> "."
    }

    private fun String.decodeCell(): Cell? = when (this) {
        "R" -> Cell.RED; "Y" -> Cell.YELLOW; "." -> Cell.EMPTY; else -> null
    }

    private fun findAnyWinningLine(
        grid: List<List<Cell>>,
        rows: Int,
        cols: Int,
        winLen: Int,
        player: Cell,
    ): List<Pair<Int, Int>> {
        val dirs = listOf(0 to 1, 1 to 0, 1 to 1, 1 to -1)
        for (r in 0 until rows) for (c in 0 until cols) {
            if (grid[r][c] != player) continue
            for ((dr, dc) in dirs) {
                val line = mutableListOf<Pair<Int, Int>>()
                var rr = r; var cc = c
                while (rr in 0 until rows && cc in 0 until cols && grid[rr][cc] == player) {
                    line += rr to cc
                    rr += dr; cc += dc
                }
                if (line.size >= winLen) return line.take(winLen)
            }
        }
        return emptyList()
    }
}
