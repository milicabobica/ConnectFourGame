enum class Cell { EMPTY, RED, YELLOW }

data class GameConfig(
    val rows: Int,
    val cols: Int,
    val winLength: Int,
) {
    init {
        require(rows in MIN_DIM..MAX_DIM) { "rows out of range" }
        require(cols in MIN_DIM..MAX_DIM) { "cols out of range" }
        require(winLength in MIN_WIN..MAX_WIN) { "winLength out of range" }
    }

    companion object {
        const val MIN_DIM = 4
        const val MAX_DIM = 20
        const val MIN_WIN = 3
        const val MAX_WIN = 10
        val DEFAULT = GameConfig(rows = 6, cols = 7, winLength = 4) //default golemina
    }
}

data class GameState(
    val config: GameConfig,
    val grid: List<List<Cell>>,
    val currentPlayer: Cell,
    val winner: Cell?,
    val isDraw: Boolean,
    val winningCells: List<Pair<Int, Int>>,
    val lastMove: Pair<Int, Int>?,
    val moveCount: Int,
) {
    val isOver: Boolean get() = winner != null || isDraw

    fun columnIsFull(col: Int): Boolean = grid[0][col] != Cell.EMPTY

    fun dropPiece(col: Int): GameState? {
        if (isOver) return null
        if (col !in 0 until config.cols) return null

        val landingRow = (config.rows - 1 downTo 0).firstOrNull { grid[it][col] == Cell.EMPTY }
            ?: return null

        val newGrid = grid.mapIndexed { r, rowList ->
            if (r != landingRow) rowList
            else rowList.mapIndexed { c, cell -> if (c == col) currentPlayer else cell }
        }

        val winLine = findWinningLine(newGrid, landingRow, col)
        val nextPlayer = if (currentPlayer == Cell.RED) Cell.YELLOW else Cell.RED
        val full = newGrid.all { row -> row.all { it != Cell.EMPTY } }

        return copy(
            grid = newGrid,
            currentPlayer = if (winLine != null) currentPlayer else nextPlayer,
            winner = if (winLine != null) currentPlayer else null,
            isDraw = winLine == null && full,
            winningCells = winLine ?: emptyList(),
            lastMove = landingRow to col,
            moveCount = moveCount + 1,
        )
    }

    private fun findWinningLine(grid: List<List<Cell>>, row: Int, col: Int): List<Pair<Int, Int>>? {
        val player = grid[row][col]
        if (player == Cell.EMPTY) return null

        val directions = listOf(0 to 1, 1 to 0, 1 to 1, 1 to -1)
        for ((dr, dc) in directions) {
            val line = mutableListOf<Pair<Int, Int>>()

            var r = row - dr; var c = col - dc
            while (r in 0 until config.rows && c in 0 until config.cols && grid[r][c] == player) {
                line += r to c
                r -= dr; c -= dc
            }
            line.reverse()
            line += row to col
            r = row + dr; c = col + dc
            while (r in 0 until config.rows && c in 0 until config.cols && grid[r][c] == player) {
                line += r to c
                r += dr; c += dc
            }

            if (line.size >= config.winLength) {
                val anchor = line.indexOf(row to col)
                val start = (anchor - config.winLength + 1).coerceAtLeast(0)
                    .coerceAtMost(line.size - config.winLength)
                return line.subList(start, start + config.winLength).toList()
            }
        }
        return null
    }

    companion object {
        fun new(config: GameConfig, startingPlayer: Cell = Cell.RED): GameState {
            require(startingPlayer != Cell.EMPTY)
            return GameState(
                config = config,
                grid = List(config.rows) { List(config.cols) { Cell.EMPTY } },
                currentPlayer = startingPlayer,
                winner = null,
                isDraw = false,
                winningCells = emptyList(),
                lastMove = null,
                moveCount = 0,
            )
        }
    }
}
