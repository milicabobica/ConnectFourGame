(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'connect-four'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'connect-four'.");
    }
    globalThis['connect-four'] = factory(typeof globalThis['connect-four'] === 'undefined' ? {} : globalThis['connect-four'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var to = kotlin_kotlin.$_$.i9;
  var listOf = kotlin_kotlin.$_$.d4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var reverse = kotlin_kotlin.$_$.p4;
  var coerceAtLeast = kotlin_kotlin.$_$.k7;
  var coerceAtMost = kotlin_kotlin.$_$.l7;
  var toList = kotlin_kotlin.$_$.b5;
  var toString = kotlin_kotlin.$_$.j7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var emptyList = kotlin_kotlin.$_$.s3;
  var protoOf = kotlin_kotlin.$_$.h7;
  var VOID = kotlin_kotlin.$_$.d;
  var initMetadataForCompanion = kotlin_kotlin.$_$.p6;
  var downTo = kotlin_kotlin.$_$.n7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.l3;
  var checkIndexOverflow = kotlin_kotlin.$_$.k3;
  var Collection = kotlin_kotlin.$_$.i2;
  var isInterface = kotlin_kotlin.$_$.a7;
  var toString_0 = kotlin_kotlin.$_$.h9;
  var hashCode = kotlin_kotlin.$_$.n6;
  var getBooleanHashCode = kotlin_kotlin.$_$.j6;
  var THROW_CCE = kotlin_kotlin.$_$.p8;
  var equals = kotlin_kotlin.$_$.h6;
  var initMetadataForClass = kotlin_kotlin.$_$.o6;
  var THROW_IAE = kotlin_kotlin.$_$.q8;
  var enumEntries = kotlin_kotlin.$_$.z5;
  var Unit_getInstance = kotlin_kotlin.$_$.a2;
  var Enum = kotlin_kotlin.$_$.h8;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(GameState, 'GameState');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(GameConfig, 'GameConfig');
  initMetadataForClass(Cell, 'Cell', VOID, Enum);
  //endregion
  var GameConfig$stable;
  var GameState$stable;
  function findWinningLine($this, grid, row, col) {
    var player = grid.get_c1px32_k$(row).get_c1px32_k$(col);
    if (player.equals(Cell_EMPTY_getInstance()))
      return null;
    var directions = listOf([to(0, 1), to(1, 0), to(1, 1), to(1, -1)]);
    var _iterator__ex2g4s = directions.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.next_20eer_k$();
      var dr = _destruct__k2r9zo.component1_7eebsc_k$();
      var dc = _destruct__k2r9zo.component2_7eebsb_k$();
      // Inline function 'kotlin.collections.mutableListOf' call
      var line = ArrayList_init_$Create$();
      var r = row - dr | 0;
      var c = col - dc | 0;
      while ((0 <= r ? r < $this.config_1.rows_1 : false) && (0 <= c ? c < $this.config_1.cols_1 : false) && grid.get_c1px32_k$(r).get_c1px32_k$(c).equals(player)) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element = to(r, c);
        line.add_utx5q5_k$(element);
        r = r - dr | 0;
        c = c - dc | 0;
      }
      reverse(line);
      // Inline function 'kotlin.collections.plusAssign' call
      var element_0 = to(row, col);
      line.add_utx5q5_k$(element_0);
      r = row + dr | 0;
      c = col + dc | 0;
      while ((0 <= r ? r < $this.config_1.rows_1 : false) && (0 <= c ? c < $this.config_1.cols_1 : false) && grid.get_c1px32_k$(r).get_c1px32_k$(c).equals(player)) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_1 = to(r, c);
        line.add_utx5q5_k$(element_1);
        r = r + dr | 0;
        c = c + dc | 0;
      }
      if (line.get_size_woubt6_k$() >= $this.config_1.winLength_1) {
        var anchor = line.indexOf_si1fv9_k$(to(row, col));
        var start = coerceAtMost(coerceAtLeast((anchor - $this.config_1.winLength_1 | 0) + 1 | 0, 0), line.get_size_woubt6_k$() - $this.config_1.winLength_1 | 0);
        return toList(line.subList_xle3r2_k$(start, start + $this.config_1.winLength_1 | 0));
      }
    }
    return null;
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).new_xxcftf_k$ = function (config, startingPlayer) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!startingPlayer.equals(Cell_EMPTY_getInstance())) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = config.rows_1;
    var list = ArrayList_init_$Create$_0(size);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'Companion.new.<anonymous>' call
        // Inline function 'kotlin.collections.List' call
        // Inline function 'kotlin.collections.MutableList' call
        var size_0 = config.cols_1;
        var list_0 = ArrayList_init_$Create$_0(size_0);
        // Inline function 'kotlin.repeat' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < size_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlin.collections.MutableList.<anonymous>' call
            // Inline function 'Companion.new.<anonymous>.<anonymous>' call
            var tmp$ret$1 = Cell_EMPTY_getInstance();
            list_0.add_utx5q5_k$(tmp$ret$1);
          }
           while (inductionVariable_0 < size_0);
        list.add_utx5q5_k$(list_0);
      }
       while (inductionVariable < size);
    return new GameState(config, list, startingPlayer, null, false, emptyList(), null, 0);
  };
  protoOf(Companion).new$default_kuyfd0_k$ = function (config, startingPlayer, $super) {
    startingPlayer = startingPlayer === VOID ? Cell_RED_getInstance() : startingPlayer;
    return $super === VOID ? this.new_xxcftf_k$(config, startingPlayer) : $super.new_xxcftf_k$.call(this, config, startingPlayer);
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function GameState(config, grid, currentPlayer, winner, isDraw, winningCells, lastMove, moveCount) {
    Companion_getInstance();
    this.config_1 = config;
    this.grid_1 = grid;
    this.currentPlayer_1 = currentPlayer;
    this.winner_1 = winner;
    this.isDraw_1 = isDraw;
    this.winningCells_1 = winningCells;
    this.lastMove_1 = lastMove;
    this.moveCount_1 = moveCount;
  }
  protoOf(GameState).get_config_c0698r_k$ = function () {
    return this.config_1;
  };
  protoOf(GameState).get_grid_womu8f_k$ = function () {
    return this.grid_1;
  };
  protoOf(GameState).get_currentPlayer_yc1fgx_k$ = function () {
    return this.currentPlayer_1;
  };
  protoOf(GameState).get_winner_lds3ew_k$ = function () {
    return this.winner_1;
  };
  protoOf(GameState).get_isDraw_evwl93_k$ = function () {
    return this.isDraw_1;
  };
  protoOf(GameState).get_winningCells_u55cru_k$ = function () {
    return this.winningCells_1;
  };
  protoOf(GameState).get_lastMove_f35oi8_k$ = function () {
    return this.lastMove_1;
  };
  protoOf(GameState).get_moveCount_pr6mfp_k$ = function () {
    return this.moveCount_1;
  };
  protoOf(GameState).get_isOver_ew3p5z_k$ = function () {
    return !(this.winner_1 == null) || this.isDraw_1;
  };
  protoOf(GameState).columnIsFull_38il3r_k$ = function (col) {
    return !this.grid_1.get_c1px32_k$(0).get_c1px32_k$(col).equals(Cell_EMPTY_getInstance());
  };
  protoOf(GameState).dropPiece_fokix3_k$ = function (col) {
    if (this.get_isOver_ew3p5z_k$())
      return null;
    if (!(0 <= col ? col < this.config_1.cols_1 : false))
      return null;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var progression = downTo(this.config_1.rows_1 - 1 | 0, 0);
      var inductionVariable = progression.get_first_irdx8n_k$();
      var last = progression.get_last_wopotb_k$();
      var step = progression.get_step_woujh1_k$();
      if (step > 0 && inductionVariable <= last || (step < 0 && last <= inductionVariable))
        do {
          var element = inductionVariable;
          inductionVariable = inductionVariable + step | 0;
          // Inline function 'GameState.dropPiece.<anonymous>' call
          var it = element;
          if (this.grid_1.get_c1px32_k$(it).get_c1px32_k$(col).equals(Cell_EMPTY_getInstance())) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
         while (!(element === last));
      tmp$ret$1 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var landingRow = tmp;
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_0 = this.grid_1;
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var index = 0;
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'GameState.dropPiece.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp_0;
      if (!(checkIndexOverflow(tmp1) === landingRow)) {
        tmp_0 = item;
      } else {
        // Inline function 'kotlin.collections.mapIndexed' call
        // Inline function 'kotlin.collections.mapIndexedTo' call
        var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(item, 10));
        var index_0 = 0;
        var tmp0_iterator_0 = item.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var item_0 = tmp0_iterator_0.next_20eer_k$();
          // Inline function 'GameState.dropPiece.<anonymous>.<anonymous>' call
          var tmp1_0 = index_0;
          index_0 = tmp1_0 + 1 | 0;
          var tmp$ret$2 = checkIndexOverflow(tmp1_0) === col ? this.currentPlayer_1 : item_0;
          destination_0.add_utx5q5_k$(tmp$ret$2);
        }
        tmp_0 = destination_0;
      }
      var tmp$ret$5 = tmp_0;
      destination.add_utx5q5_k$(tmp$ret$5);
    }
    var newGrid = destination;
    var winLine = findWinningLine(this, newGrid, landingRow, col);
    var nextPlayer = this.currentPlayer_1.equals(Cell_RED_getInstance()) ? Cell_YELLOW_getInstance() : Cell_RED_getInstance();
    var tmp$ret$8;
    $l$block_3: {
      // Inline function 'kotlin.collections.all' call
      var tmp_1;
      if (isInterface(newGrid, Collection)) {
        tmp_1 = newGrid.isEmpty_y1axqb_k$();
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp$ret$8 = true;
        break $l$block_3;
      }
      var tmp0_iterator_1 = newGrid.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_1.next_20eer_k$();
        // Inline function 'GameState.dropPiece.<anonymous>' call
        var tmp$ret$9;
        $l$block_2: {
          // Inline function 'kotlin.collections.all' call
          var tmp_2;
          if (isInterface(element_0, Collection)) {
            tmp_2 = element_0.isEmpty_y1axqb_k$();
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            tmp$ret$9 = true;
            break $l$block_2;
          }
          var tmp0_iterator_2 = element_0.iterator_jk1svi_k$();
          while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
            var element_1 = tmp0_iterator_2.next_20eer_k$();
            // Inline function 'GameState.dropPiece.<anonymous>.<anonymous>' call
            if (!!element_1.equals(Cell_EMPTY_getInstance())) {
              tmp$ret$9 = false;
              break $l$block_2;
            }
          }
          tmp$ret$9 = true;
        }
        if (!tmp$ret$9) {
          tmp$ret$8 = false;
          break $l$block_3;
        }
      }
      tmp$ret$8 = true;
    }
    var full = tmp$ret$8;
    var tmp_3 = !(winLine == null) ? this.currentPlayer_1 : nextPlayer;
    var tmp_4 = !(winLine == null) ? this.currentPlayer_1 : null;
    var tmp_5 = winLine == null && full;
    return this.copy$default_ei82nh_k$(VOID, newGrid, tmp_3, tmp_4, tmp_5, winLine == null ? emptyList() : winLine, to(landingRow, col), this.moveCount_1 + 1 | 0);
  };
  protoOf(GameState).component1_7eebsc_k$ = function () {
    return this.config_1;
  };
  protoOf(GameState).component2_7eebsb_k$ = function () {
    return this.grid_1;
  };
  protoOf(GameState).component3_7eebsa_k$ = function () {
    return this.currentPlayer_1;
  };
  protoOf(GameState).component4_7eebs9_k$ = function () {
    return this.winner_1;
  };
  protoOf(GameState).component5_7eebs8_k$ = function () {
    return this.isDraw_1;
  };
  protoOf(GameState).component6_7eebs7_k$ = function () {
    return this.winningCells_1;
  };
  protoOf(GameState).component7_7eebs6_k$ = function () {
    return this.lastMove_1;
  };
  protoOf(GameState).component8_7eebs5_k$ = function () {
    return this.moveCount_1;
  };
  protoOf(GameState).copy_f15rnb_k$ = function (config, grid, currentPlayer, winner, isDraw, winningCells, lastMove, moveCount) {
    return new GameState(config, grid, currentPlayer, winner, isDraw, winningCells, lastMove, moveCount);
  };
  protoOf(GameState).copy$default_ei82nh_k$ = function (config, grid, currentPlayer, winner, isDraw, winningCells, lastMove, moveCount, $super) {
    config = config === VOID ? this.config_1 : config;
    grid = grid === VOID ? this.grid_1 : grid;
    currentPlayer = currentPlayer === VOID ? this.currentPlayer_1 : currentPlayer;
    winner = winner === VOID ? this.winner_1 : winner;
    isDraw = isDraw === VOID ? this.isDraw_1 : isDraw;
    winningCells = winningCells === VOID ? this.winningCells_1 : winningCells;
    lastMove = lastMove === VOID ? this.lastMove_1 : lastMove;
    moveCount = moveCount === VOID ? this.moveCount_1 : moveCount;
    return $super === VOID ? this.copy_f15rnb_k$(config, grid, currentPlayer, winner, isDraw, winningCells, lastMove, moveCount) : $super.copy_f15rnb_k$.call(this, config, grid, currentPlayer, winner, isDraw, winningCells, lastMove, moveCount);
  };
  protoOf(GameState).toString = function () {
    return 'GameState(config=' + this.config_1.toString() + ', grid=' + toString(this.grid_1) + ', currentPlayer=' + this.currentPlayer_1.toString() + ', winner=' + toString_0(this.winner_1) + ', isDraw=' + this.isDraw_1 + ', winningCells=' + toString(this.winningCells_1) + ', lastMove=' + toString_0(this.lastMove_1) + ', moveCount=' + this.moveCount_1 + ')';
  };
  protoOf(GameState).hashCode = function () {
    var result = this.config_1.hashCode();
    result = imul(result, 31) + hashCode(this.grid_1) | 0;
    result = imul(result, 31) + this.currentPlayer_1.hashCode() | 0;
    result = imul(result, 31) + (this.winner_1 == null ? 0 : this.winner_1.hashCode()) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isDraw_1) | 0;
    result = imul(result, 31) + hashCode(this.winningCells_1) | 0;
    result = imul(result, 31) + (this.lastMove_1 == null ? 0 : this.lastMove_1.hashCode()) | 0;
    result = imul(result, 31) + this.moveCount_1 | 0;
    return result;
  };
  protoOf(GameState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GameState))
      return false;
    var tmp0_other_with_cast = other instanceof GameState ? other : THROW_CCE();
    if (!this.config_1.equals(tmp0_other_with_cast.config_1))
      return false;
    if (!equals(this.grid_1, tmp0_other_with_cast.grid_1))
      return false;
    if (!this.currentPlayer_1.equals(tmp0_other_with_cast.currentPlayer_1))
      return false;
    if (!equals(this.winner_1, tmp0_other_with_cast.winner_1))
      return false;
    if (!(this.isDraw_1 === tmp0_other_with_cast.isDraw_1))
      return false;
    if (!equals(this.winningCells_1, tmp0_other_with_cast.winningCells_1))
      return false;
    if (!equals(this.lastMove_1, tmp0_other_with_cast.lastMove_1))
      return false;
    if (!(this.moveCount_1 === tmp0_other_with_cast.moveCount_1))
      return false;
    return true;
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.MIN_DIM_1 = 4;
    this.MAX_DIM_1 = 20;
    this.MIN_WIN_1 = 3;
    this.MAX_WIN_1 = 10;
    this.DEFAULT_1 = new GameConfig(6, 7, 4);
  }
  protoOf(Companion_0).get_MIN_DIM_ur7enm_k$ = function () {
    return this.MIN_DIM_1;
  };
  protoOf(Companion_0).get_MAX_DIM_r4cdfo_k$ = function () {
    return this.MAX_DIM_1;
  };
  protoOf(Companion_0).get_MIN_WIN_ur7squ_k$ = function () {
    return this.MIN_WIN_1;
  };
  protoOf(Companion_0).get_MAX_WIN_r4criw_k$ = function () {
    return this.MAX_WIN_1;
  };
  protoOf(Companion_0).get_DEFAULT_wccqmg_k$ = function () {
    return this.DEFAULT_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function GameConfig(rows, cols, winLength) {
    Companion_getInstance_0();
    this.rows_1 = rows;
    this.cols_1 = cols;
    this.winLength_1 = winLength;
    // Inline function 'kotlin.require' call
    var containsArg = this.rows_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(4 <= containsArg ? containsArg <= 20 : false)) {
      // Inline function 'GameConfig.<anonymous>' call
      var message = 'rows out of range';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var containsArg_0 = this.cols_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(4 <= containsArg_0 ? containsArg_0 <= 20 : false)) {
      // Inline function 'GameConfig.<anonymous>' call
      var message_0 = 'cols out of range';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    var containsArg_1 = this.winLength_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(3 <= containsArg_1 ? containsArg_1 <= 10 : false)) {
      // Inline function 'GameConfig.<anonymous>' call
      var message_1 = 'winLength out of range';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
  }
  protoOf(GameConfig).get_rows_wott7m_k$ = function () {
    return this.rows_1;
  };
  protoOf(GameConfig).get_cols_wok858_k$ = function () {
    return this.cols_1;
  };
  protoOf(GameConfig).get_winLength_6leqpz_k$ = function () {
    return this.winLength_1;
  };
  protoOf(GameConfig).component1_7eebsc_k$ = function () {
    return this.rows_1;
  };
  protoOf(GameConfig).component2_7eebsb_k$ = function () {
    return this.cols_1;
  };
  protoOf(GameConfig).component3_7eebsa_k$ = function () {
    return this.winLength_1;
  };
  protoOf(GameConfig).copy_6of2tf_k$ = function (rows, cols, winLength) {
    return new GameConfig(rows, cols, winLength);
  };
  protoOf(GameConfig).copy$default_9f6vyn_k$ = function (rows, cols, winLength, $super) {
    rows = rows === VOID ? this.rows_1 : rows;
    cols = cols === VOID ? this.cols_1 : cols;
    winLength = winLength === VOID ? this.winLength_1 : winLength;
    return $super === VOID ? this.copy_6of2tf_k$(rows, cols, winLength) : $super.copy_6of2tf_k$.call(this, rows, cols, winLength);
  };
  protoOf(GameConfig).toString = function () {
    return 'GameConfig(rows=' + this.rows_1 + ', cols=' + this.cols_1 + ', winLength=' + this.winLength_1 + ')';
  };
  protoOf(GameConfig).hashCode = function () {
    var result = this.rows_1;
    result = imul(result, 31) + this.cols_1 | 0;
    result = imul(result, 31) + this.winLength_1 | 0;
    return result;
  };
  protoOf(GameConfig).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GameConfig))
      return false;
    var tmp0_other_with_cast = other instanceof GameConfig ? other : THROW_CCE();
    if (!(this.rows_1 === tmp0_other_with_cast.rows_1))
      return false;
    if (!(this.cols_1 === tmp0_other_with_cast.cols_1))
      return false;
    if (!(this.winLength_1 === tmp0_other_with_cast.winLength_1))
      return false;
    return true;
  };
  var Cell_EMPTY_instance;
  var Cell_RED_instance;
  var Cell_YELLOW_instance;
  function values() {
    return [Cell_EMPTY_getInstance(), Cell_RED_getInstance(), Cell_YELLOW_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'EMPTY':
        return Cell_EMPTY_getInstance();
      case 'RED':
        return Cell_RED_getInstance();
      case 'YELLOW':
        return Cell_YELLOW_getInstance();
      default:
        Cell_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Cell_entriesInitialized;
  function Cell_initEntries() {
    if (Cell_entriesInitialized)
      return Unit_getInstance();
    Cell_entriesInitialized = true;
    Cell_EMPTY_instance = new Cell('EMPTY', 0);
    Cell_RED_instance = new Cell('RED', 1);
    Cell_YELLOW_instance = new Cell('YELLOW', 2);
  }
  var $ENTRIES;
  function Cell(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Cell_EMPTY_getInstance() {
    Cell_initEntries();
    return Cell_EMPTY_instance;
  }
  function Cell_RED_getInstance() {
    Cell_initEntries();
    return Cell_RED_instance;
  }
  function Cell_YELLOW_getInstance() {
    Cell_initEntries();
    return Cell_YELLOW_instance;
  }
  var Storage$stable;
  //region block: init
  GameConfig$stable = 0;
  GameState$stable = 8;
  Storage$stable = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = GameConfig;
  _.$_$.b = Cell_EMPTY_getInstance;
  _.$_$.c = Cell_RED_getInstance;
  _.$_$.d = Cell_YELLOW_getInstance;
  _.$_$.e = Companion_getInstance_0;
  _.$_$.f = Companion_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=connect-four.js.map
