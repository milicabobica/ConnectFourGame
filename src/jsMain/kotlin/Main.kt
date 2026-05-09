import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import org.jetbrains.compose.web.attributes.max
import org.jetbrains.compose.web.attributes.min
import org.jetbrains.compose.web.dom.Button
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.H1
import org.jetbrains.compose.web.dom.Label
import org.jetbrains.compose.web.dom.NumberInput
import org.jetbrains.compose.web.dom.P
import org.jetbrains.compose.web.dom.Span
import org.jetbrains.compose.web.dom.Text
import org.jetbrains.compose.web.renderComposable

fun main() {
    renderComposable(rootElementId = "root") { App() }
}

@Composable
fun App() {
    val saved = remember { Storage.load() }
    var state by remember { mutableStateOf(saved) }
    var inSetup by remember { mutableStateOf(saved == null) }

    Div({ classes("app") }) {
        Header()
        if (inSetup) {
            SetupPanel(initial = state?.config ?: GameConfig.DEFAULT) { config ->
                val ns = GameState.new(config)
                state = ns
                Storage.save(ns)
                inSetup = false
            }
        } else {
            val s = state!!
            GamePanel(
                state = s,
                onMove = { col ->
                    s.dropPiece(col)?.let {
                        state = it
                        Storage.save(it)
                    }
                },
                onRestart = {
                    val ns = GameState.new(s.config)
                    state = ns
                    Storage.save(ns)
                },
                onNewGame = {
                    Storage.clear()
                    inSetup = true
                },
            )
        }
    }
}

@Composable
private fun Header() {
    Div({ classes("panel") }) {
        H1 { Text("Connect Four") }
        P({ classes("subtitle") }) {
            Text(" The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of N number of one's own tokens. ")
        }
    }
}

@Composable
private fun SetupPanel(initial: GameConfig, onStart: (GameConfig) -> Unit) {
    var rows by remember { mutableStateOf(initial.rows) }
    var cols by remember { mutableStateOf(initial.cols) }
    var win by remember { mutableStateOf(initial.winLength) }

    val maxBoardDim = maxOf(rows, cols)
    val maxAllowedWin = minOf(GameConfig.MAX_WIN, maxBoardDim)
    val effectiveWin = win.coerceIn(GameConfig.MIN_WIN, maxAllowedWin)

    Div({ classes("panel") }) {
        Div({ classes("row") }) {
            NumField("Rows", rows, GameConfig.MIN_DIM, GameConfig.MAX_DIM) { rows = it }
            NumField("Columns", cols, GameConfig.MIN_DIM, GameConfig.MAX_DIM) { cols = it }
            NumField("Win Condition", effectiveWin, GameConfig.MIN_WIN, maxAllowedWin) { win = it }
        }
        Div({
            classes("row")
            style { property("margin-top", "16px") }
        })
        {
            Preset("Connect 4", 6, 7, 4) { r, c, w -> rows = r; cols = c; win = w }
            Preset("Connect 5", 10, 10, 5) { r, c, w -> rows = r; cols = c; win = w }
            Preset("Connect 10", 15, 15, 10) { r, c, w -> rows = r; cols = c; win = w }
        }
        Div({
            classes("row")
            style { property("margin-top", "20px"); property("justify-content", "flex-end") }
        }) {
            Button({
                onClick {
                    val cfg = runCatching { GameConfig(rows, cols, effectiveWin) }.getOrNull()
                    if (cfg != null) onStart(cfg)
                }
            }) { Text("Start game") }
        }
    }
}

@Composable
private fun NumField(label: String, value: Int, minVal: Int, maxVal: Int, onChange: (Int) -> Unit) {
    Div({ classes("field") }) {
        Label { Text(label) }
        NumberInput(value) {
            min(minVal.toString())
            max(maxVal.toString())
            onInput { e ->
                val v = e.value?.toInt() ?: return@onInput
                if (v in minVal..maxVal) onChange(v)
            }
        }
    }
}

@Composable
private fun Preset(label: String, r: Int, c: Int, w: Int, onPick: (Int, Int, Int) -> Unit) {
    Button({
        classes("ghost")
        onClick { onPick(r, c, w) }
    }) { Text(label) }
}
@Composable
private fun GamePanel(
    state: GameState,
    onMove: (Int) -> Unit,
    onRestart: () -> Unit,
    onNewGame: () -> Unit,
) {
    var bannerDismissed by remember(state.moveCount) { mutableStateOf(false) }

    Div({ classes("panel") }) {
        StatusBar(state, onRestart, onNewGame)
        Div({
            classes("board-wrap")
            style { property("margin-top", "14px") }
        }) {
            Board(state, onMove)
        }
        if (!bannerDismissed) {
            ResultBanner(state, onDismiss = { bannerDismissed = true })
        }
    }
}

@Composable
private fun StatusBar(state: GameState, onRestart: () -> Unit, onNewGame: () -> Unit) {
    Div({ classes("status") }) {
        Div {
            val label = when {
                state.winner != null -> "Winner"
                state.isDraw -> "Draw"
                else -> "Turn"
            }
            Span { Text("$label  ") }
            val pillFor = state.winner ?: state.currentPlayer
            Span({ classes("turn-pill") }) {
                Span({ classes("dot", if (pillFor == Cell.RED) "red" else "yellow") })
                Text(if (pillFor == Cell.RED) "Red" else "Yellow")
            }
            Span({ style { property("margin-left", "10px"); property("color", "var(--muted)") } }) {
                Text("Connect ${state.config.winLength} on ${state.config.rows}×${state.config.cols}")
            }
        }
        Div({ classes("actions") }) {
            Button({ classes("ghost"); onClick { onRestart() } }) { Text("Restart") }
            Button({ onClick { onNewGame() } }) { Text("New game") }
        }
    }
}

@Composable
private fun Board(state: GameState, onMove: (Int) -> Unit) {
    Div({
        classes("board")
        style {
            property("grid-template-columns", "repeat(${state.config.cols}, 1fr)")
        }
    }) {
        for (r in 0 until state.config.rows) {
            for (c in 0 until state.config.cols) {
                BoardSlot(state, r, c, onMove)
            }
        }
    }
}

@Composable
private fun BoardSlot(state: GameState, row: Int, col: Int, onMove: (Int) -> Unit) {
    val cell = state.grid[row][col]
    val disabled = state.isOver || state.columnIsFull(col)
    val isLast = state.lastMove == (row to col)
    val isWinning = (row to col) in state.winningCells

    Div({
        classes("cell")
        if (disabled) classes("disabled")
        onClick { if (!disabled) onMove(col) }
    }) {
        if (!disabled && cell == Cell.EMPTY) {
            Div({ classes("col-hover", if (state.currentPlayer == Cell.RED) "red" else "yellow") })
        }
        if (cell != Cell.EMPTY) {
            Div({
                val pieceClass = if (cell == Cell.RED) "red" else "yellow"
                classes("piece", pieceClass)
                if (isLast) classes("dropping")
                if (isWinning) classes("winning")
            })
        }
    }
}

@Composable
private fun ResultBanner(state: GameState, onDismiss: () -> Unit) {
    val (text, cls) = when {
        state.winner == Cell.RED    -> "Red wins!"    to "win-red"
        state.winner == Cell.YELLOW -> "Yellow wins!" to "win-yellow"
        state.isDraw                -> "It's a draw." to "draw"
        else                        -> return
    }
    Div({
        classes("banner-overlay")
        onClick { onDismiss() }
    }) {
        Div({
            classes("banner", cls)
            onClick { it.stopPropagation() }
        }) {
            Div({ classes("banner-text") }) { Text(text) }
            Div({ classes("banner-sub") }) {
                Text(when (cls) {
                    "win-red"    -> "Red player takes the round"
                    "win-yellow" -> "Yellow player takes the round"
                    else         -> "Nobody wins this time"
                })
            }
            Div({ classes("banner-hint") }) { Text("tap anywhere to dismiss") }
        }
    }
}