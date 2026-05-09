(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './html-internal-html-core-runtime.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-html-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./html-internal-html-core-runtime.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-html-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'connect-four'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'connect-four'.");
    }
    if (typeof globalThis['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'connect-four'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'connect-four'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'connect-four'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'connect-four'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'connect-four'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'connect-four'.");
    }
    globalThis['connect-four'] = factory(typeof globalThis['connect-four'] === 'undefined' ? {} : globalThis['connect-four'], globalThis['kotlin-kotlin-stdlib'], globalThis['html-internal-html-core-runtime'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['html-html-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_html_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var THROW_IAE = kotlin_kotlin.$_$.f9;
  var enumEntries = kotlin_kotlin.$_$.f6;
  var Unit_getInstance = kotlin_kotlin.$_$.b2;
  var Enum = kotlin_kotlin.$_$.w8;
  var protoOf = kotlin_kotlin.$_$.r7;
  var initMetadataForClass = kotlin_kotlin.$_$.x6;
  var VOID = kotlin_kotlin.$_$.d;
  var initMetadataForCompanion = kotlin_kotlin.$_$.y6;
  var toString = kotlin_kotlin.$_$.t7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a1;
  var THROW_CCE = kotlin_kotlin.$_$.e9;
  var to = kotlin_kotlin.$_$.y9;
  var listOf = kotlin_kotlin.$_$.h4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var reverse = kotlin_kotlin.$_$.t4;
  var coerceAtLeast = kotlin_kotlin.$_$.u7;
  var coerceAtMost = kotlin_kotlin.$_$.v7;
  var toList = kotlin_kotlin.$_$.g5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var emptyList = kotlin_kotlin.$_$.w3;
  var downTo = kotlin_kotlin.$_$.y7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o3;
  var checkIndexOverflow = kotlin_kotlin.$_$.n3;
  var Collection = kotlin_kotlin.$_$.j2;
  var isInterface = kotlin_kotlin.$_$.j7;
  var toString_0 = kotlin_kotlin.$_$.x9;
  var hashCode = kotlin_kotlin.$_$.w6;
  var getBooleanHashCode = kotlin_kotlin.$_$.r6;
  var equals = kotlin_kotlin.$_$.p6;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.e;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var coerceIn = kotlin_kotlin.$_$.w7;
  var Button = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var H1 = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var P = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var initMetadataForObject = kotlin_kotlin.$_$.c7;
  var KMutableProperty0 = kotlin_kotlin.$_$.b8;
  var THROW_ISE = kotlin_kotlin.$_$.g9;
  var getLocalDelegateReference = kotlin_kotlin.$_$.s6;
  var ensureNotNull = kotlin_kotlin.$_$.o9;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.a2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.s1;
  var createFailure = kotlin_kotlin.$_$.n9;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.v1;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.u1;
  var numberToInt = kotlin_kotlin.$_$.p7;
  var min = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var max = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var Label = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var NumberInput = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var Span = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.q9;
  var take = kotlin_kotlin.$_$.e5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.v;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.q1;
  var charArrayOf = kotlin_kotlin.$_$.k6;
  var split = kotlin_kotlin.$_$.m8;
  var toInt = kotlin_kotlin.$_$.p8;
  var charSequenceGet = kotlin_kotlin.$_$.l6;
  var toString_1 = kotlin_kotlin.$_$.r1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Cell, 'Cell', VOID, Enum);
  initMetadataForCompanion(Companion);
  initMetadataForClass(GameConfig, 'GameConfig');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(GameState, 'GameState');
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  initMetadataForObject(Storage, 'Storage');
  //endregion
  var GameConfig$stable;
  var GameState$stable;
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
  function Companion() {
    Companion_instance = this;
    this.MIN_DIM_1 = 4;
    this.MAX_DIM_1 = 20;
    this.MIN_WIN_1 = 3;
    this.MAX_WIN_1 = 10;
    this.DEFAULT_1 = new GameConfig(6, 7, 4);
  }
  protoOf(Companion).get_MIN_DIM_ur7enm_k$ = function () {
    return this.MIN_DIM_1;
  };
  protoOf(Companion).get_MAX_DIM_r4cdfo_k$ = function () {
    return this.MAX_DIM_1;
  };
  protoOf(Companion).get_MIN_WIN_ur7squ_k$ = function () {
    return this.MIN_WIN_1;
  };
  protoOf(Companion).get_MAX_WIN_r4criw_k$ = function () {
    return this.MAX_WIN_1;
  };
  protoOf(Companion).get_DEFAULT_wccqmg_k$ = function () {
    return this.DEFAULT_1;
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function GameConfig(rows, cols, winLength) {
    Companion_getInstance_1();
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
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).new_xxcftf_k$ = function (config, startingPlayer) {
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
  protoOf(Companion_0).new$default_kuyfd0_k$ = function (config, startingPlayer, $super) {
    startingPlayer = startingPlayer === VOID ? Cell_RED_getInstance() : startingPlayer;
    return $super === VOID ? this.new_xxcftf_k$(config, startingPlayer) : $super.new_xxcftf_k$.call(this, config, startingPlayer);
  };
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function GameState(config, grid, currentPlayer, winner, isDraw, winningCells, lastMove, moveCount) {
    Companion_getInstance_2();
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
  function GameConfig$stableprop_getter() {
    return GameConfig$stable;
  }
  function GameState$stableprop_getter() {
    return GameState$stable;
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
  function main() {
    renderComposable('root', ComposableSingletons$MainKt_getInstance().lambda_1_r8sbbp_1);
  }
  function App($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1979705052);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1979705052, $changed, -1, 'App (Main.kt:22)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(63499068);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'App.<anonymous>' call
        var value = Storage_getInstance().load_1zbae_k$();
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var saved = tmp0_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(63500515);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'App.<anonymous>' call
        var value_0 = mutableStateOf(saved);
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var state$delegate = tmp1_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(63502251);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'App.<anonymous>' call
        var value_1 = mutableStateOf(saved == null);
        this_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var inSetup$delegate = tmp2_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(63503891);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_3.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (false || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'App.<anonymous>' call
        var value_2 = App$lambda_3;
        this_3.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'App.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(2071079523, true, App$lambda_4(inSetup$delegate, state$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (invalid || it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'App.<anonymous>.<anonymous>' call
        var value_3 = ComposableLambda$invoke$ref_7(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp3_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp4_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp4_safe_receiver == null)
      null;
    else {
      tmp4_safe_receiver.updateScope_t8jcf_k$(App$lambda_5($changed));
    }
  }
  function Header($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1886780716);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1886780716, $changed, -1, 'Header (Main.kt:61)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(-1050556703);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'Header.<anonymous>' call
        var value = Header$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      Div(tmp0_group, ComposableSingletons$MainKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(Header$lambda_0($changed));
    }
  }
  function SetupPanel(initial, onStart, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1765222725);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(initial) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onStart) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1765222725, $dirty, -1, 'SetupPanel (Main.kt:71)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(1469845936);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'SetupPanel.<anonymous>' call
        var value = mutableStateOf(initial.get_rows_wott7m_k$());
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var rows$delegate = tmp0_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(1469847792);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'SetupPanel.<anonymous>' call
        var value_0 = mutableStateOf(initial.get_cols_wok858_k$());
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var cols$delegate = tmp1_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(1469849621);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'SetupPanel.<anonymous>' call
        var value_1 = mutableStateOf(initial.get_winLength_6leqpz_k$());
        this_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var win$delegate = tmp2_group;
      // Inline function 'kotlin.comparisons.maxOf' call
      var a = SetupPanel$lambda(rows$delegate);
      var b = SetupPanel$lambda_1(cols$delegate);
      var maxBoardDim = Math.max(a, b);
      // Inline function 'kotlin.comparisons.minOf' call
      var maxAllowedWin = Math.min(10, maxBoardDim);
      var effectiveWin = coerceIn(SetupPanel$lambda_3(win$delegate), 3, maxAllowedWin);
      $composer_0.startReplaceGroup_5hh8aj_k$(1469856987);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_3.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (false || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'SetupPanel.<anonymous>' call
        var value_2 = SetupPanel$lambda_5;
        this_3.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'SetupPanel.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1165183142, true, SetupPanel$lambda_6(effectiveWin, maxAllowedWin, rows$delegate, cols$delegate, win$delegate, onStart), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (invalid || it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'SetupPanel.<anonymous>.<anonymous>' call
        var value_3 = ComposableLambda$invoke$ref_11(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp3_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp4_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp4_safe_receiver == null)
      null;
    else {
      tmp4_safe_receiver.updateScope_t8jcf_k$(SetupPanel$lambda_7(initial, onStart, $changed));
    }
  }
  function NumField(label, value, minVal, maxVal, onChange, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(2065548716);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(label) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(value) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(minVal) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(maxVal) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onChange) ? 16384 : 8192);
    if (!(($dirty & 9363) === 9362) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(2065548716, $dirty, -1, 'NumField (Main.kt:110)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(-1670637656);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'NumField.<anonymous>' call
        var value_0 = NumField$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'NumField.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(650319949, true, NumField$lambda_0(value, minVal, maxVal, onChange, label), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'NumField.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_13(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_1 = value_1;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(NumField$lambda_1(label, value, minVal, maxVal, onChange, $changed));
    }
  }
  function Preset(label, r, c, w, onPick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(708888181);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(label) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(r) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(c) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(w) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onPick) ? 16384 : 8192);
    if (!(($dirty & 9363) === 9362) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(708888181, $dirty, -1, 'Preset (Main.kt:125)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(-1211880957);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = !!(!!(!!(($dirty & 57344) === 16384 | ($dirty & 112) === 32) | ($dirty & 896) === 256) | ($dirty & 7168) === 2048);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'Preset.<anonymous>' call
        var value = Preset$lambda(onPick, r, c, w);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'Preset.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1751799761, true, Preset$lambda_0(label), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'Preset.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_14(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Button(tmp0_group, tmp0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(Preset$lambda_1(label, r, c, w, onPick, $changed));
    }
  }
  function GamePanel(state, onMove, onRestart, onNewGame, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-373430215);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(state) : $composer_0.changedInstance_s1wkiy_k$(state)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onMove) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onRestart) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onNewGame) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-373430215, $dirty, -1, 'GamePanel (Main.kt:137)');
      }
      var tmp0_remember$arg$0 = state.get_moveCount_pr6mfp_k$();
      $composer_0.startReplaceGroup_5hh8aj_k$(737400677);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.changed_kpusro_k$(tmp0_remember$arg$0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'GamePanel.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var bannerDismissed$delegate = tmp1_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(737402598);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'GamePanel.<anonymous>' call
        var value_0 = GamePanel$lambda_1;
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'GamePanel.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1046434138, true, GamePanel$lambda_2(state, onRestart, onNewGame, bannerDismissed$delegate, onMove), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_0 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'GamePanel.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_16(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp2_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp3_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.updateScope_t8jcf_k$(GamePanel$lambda_3(state, onMove, onRestart, onNewGame, $changed));
    }
  }
  function StatusBar(state, onRestart, onNewGame, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(119415927);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(state) : $composer_0.changedInstance_s1wkiy_k$(state)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onRestart) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onNewGame) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(119415927, $dirty, -1, 'StatusBar (Main.kt:155)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(749490710);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'StatusBar.<anonymous>' call
        var value = StatusBar$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'StatusBar.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1589203672, true, StatusBar$lambda_0(state, onRestart, onNewGame), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'StatusBar.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_22(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(StatusBar$lambda_1(state, onRestart, onNewGame, $changed));
    }
  }
  function Board(state, onMove, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1986548963);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(state) : $composer_0.changedInstance_s1wkiy_k$(state)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onMove) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1986548963, $dirty, -1, 'Board (Main.kt:181)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(1716807443);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 14) === 4 || (!(($dirty & 8) === 0) && $composer_0.changedInstance_s1wkiy_k$(state));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'Board.<anonymous>' call
        var value = Board$lambda(state);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'Board.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1337141054, true, Board$lambda_0(state, onMove), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'Board.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_23(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(Board$lambda_1(state, onMove, $changed));
    }
  }
  function BoardSlot(state, row, col, onMove, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(67785785);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(state) : $composer_0.changedInstance_s1wkiy_k$(state)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(row) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(col) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onMove) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(67785785, $dirty, -1, 'BoardSlot (Main.kt:197)');
      }
      var cell = state.get_grid_womu8f_k$().get_c1px32_k$(row).get_c1px32_k$(col);
      var disabled = state.get_isOver_ew3p5z_k$() || state.columnIsFull_38il3r_k$(col);
      var isLast = equals(state.get_lastMove_f35oi8_k$(), to(row, col));
      var isWinning = state.get_winningCells_u55cru_k$().contains_aljjnj_k$(to(row, col));
      $composer_0.startReplaceGroup_5hh8aj_k$(-54726404);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = !!(!!($composer_0.changed_jpyyrz_k$(disabled) | ($dirty & 7168) === 2048) | ($dirty & 896) === 256);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'BoardSlot.<anonymous>' call
        var value = BoardSlot$lambda(disabled, onMove, col);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'BoardSlot.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1347442982, true, BoardSlot$lambda_0(disabled, cell, state, isLast, isWinning), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'BoardSlot.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_24(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(BoardSlot$lambda_1(state, row, col, onMove, $changed));
    }
  }
  function ResultBanner(state, onDismiss, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1422348545);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(state) : $composer_0.changedInstance_s1wkiy_k$(state)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onDismiss) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1422348545, $dirty, -1, 'ResultBanner (Main.kt:223)');
      }
      var tmp;
      if (equals(state.get_winner_lds3ew_k$(), Cell_RED_getInstance())) {
        tmp = to('Red wins!', 'win-red');
      } else if (equals(state.get_winner_lds3ew_k$(), Cell_YELLOW_getInstance())) {
        tmp = to('Yellow wins!', 'win-yellow');
      } else if (state.get_isDraw_evwl93_k$()) {
        tmp = to("It's a draw.", 'draw');
      } else {
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
        if (tmp1_safe_receiver == null)
          null;
        else {
          tmp1_safe_receiver.updateScope_t8jcf_k$(ResultBanner$lambda(state, onDismiss, $changed));
        }
        return Unit_getInstance();
      }
      var _destruct__k2r9zo = tmp;
      var text = _destruct__k2r9zo.component1_7eebsc_k$();
      var cls = _destruct__k2r9zo.component2_7eebsb_k$();
      $composer_0.startReplaceGroup_5hh8aj_k$(-951208238);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 112) === 32;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ResultBanner.<anonymous>' call
        var value = ResultBanner$lambda_0(onDismiss);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ResultBanner.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1451260862, true, ResultBanner$lambda_1(cls, text), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ResultBanner.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_28(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(ResultBanner$lambda_2(state, onDismiss, $changed));
    }
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($this$renderComposable, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1521502105, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (Main.kt:18)');
    }
    App($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk($this$H1, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1753357392, $changed, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous> (Main.kt:63)');
    }
    Text('Connect Four', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_3$lambda_ezu85n($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(271633711, $changed, -1, 'ComposableSingletons$MainKt.lambda-3.<anonymous> (Main.kt:65)');
    }
    Text(" The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of N number of one's own tokens. ", $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_4$lambda_r7ncra($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1181028467, $changed, -1, 'ComposableSingletons$MainKt.lambda-4.<anonymous> (Main.kt:63)');
    }
    H1(null, ComposableSingletons$MainKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 48, 1);
    $composer_0.startReplaceGroup_5hh8aj_k$(885673505);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'ComposableSingletons$MainKt.lambda-4.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$MainKt$lambda_4$lambda$lambda_tu4lbz;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    P(tmp0_group, ComposableSingletons$MainKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 54, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_4$lambda$lambda_tu4lbz($this$P) {
    $this$P.classes_ayghm2_k$(['subtitle']);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_5$lambda_1lz4ax($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(985287241, $changed, -1, 'ComposableSingletons$MainKt.lambda-5.<anonymous> (Main.kt:104)');
    }
    Text('Start game', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_6$lambda_uflld4($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1396134372, $changed, -1, 'ComposableSingletons$MainKt.lambda-6.<anonymous> (Main.kt:174)');
    }
    Text('Restart', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_7$lambda_brvzjt($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1918326597, $changed, -1, 'ComposableSingletons$MainKt.lambda-7.<anonymous> (Main.kt:175)');
    }
    Text('New game', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_8$lambda_h1qhie($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1485230668, $changed, -1, 'ComposableSingletons$MainKt.lambda-8.<anonymous> (Main.kt:246)');
    }
    Text('tap anywhere to dismiss', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-1521502105, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(1753357392, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(271633711, false, ComposableSingletons$MainKt$lambda_3$lambda_ezu85n));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(-1181028467, false, ComposableSingletons$MainKt$lambda_4$lambda_r7ncra));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(985287241, false, ComposableSingletons$MainKt$lambda_5$lambda_1lz4ax));
    var tmp_4 = this;
    tmp_4.lambda_6_r8sbbk_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-1396134372, false, ComposableSingletons$MainKt$lambda_6$lambda_uflld4));
    var tmp_5 = this;
    tmp_5.lambda_7_r8sbbj_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(1918326597, false, ComposableSingletons$MainKt$lambda_7$lambda_brvzjt));
    var tmp_6 = this;
    tmp_6.lambda_8_r8sbbi_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(-1485230668, false, ComposableSingletons$MainKt$lambda_8$lambda_h1qhie));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda_1_1vftt0_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_2_c3c4uz_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_3_q243iy_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_4_v07zs7_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_5_h1g148_k$ = function () {
    return this.lambda_5_r8sbbl_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_6_32o2g9_k$ = function () {
    return this.lambda_6_r8sbbk_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_7_aw3w7q_k$ = function () {
    return this.lambda_7_r8sbbj_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_8_ouvuvp_k$ = function () {
    return this.lambda_8_r8sbbi_1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function App$lambda($state$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('state', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $state$delegate.get_value_j01efc_k$();
  }
  function App$lambda_0($state$delegate, _set____db54di) {
    getLocalDelegateReference('state', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $state$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_1($inSetup$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('inSetup', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $inSetup$delegate.get_value_j01efc_k$();
  }
  function App$lambda_2($inSetup$delegate, _set____db54di) {
    getLocalDelegateReference('inSetup', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $inSetup$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function SetupPanel$lambda($rows$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('rows', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $rows$delegate.get_value_j01efc_k$();
  }
  function SetupPanel$lambda_0($rows$delegate, _set____db54di) {
    getLocalDelegateReference('rows', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $rows$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function SetupPanel$lambda_1($cols$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('cols', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $cols$delegate.get_value_j01efc_k$();
  }
  function SetupPanel$lambda_2($cols$delegate, _set____db54di) {
    getLocalDelegateReference('cols', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $cols$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function SetupPanel$lambda_3($win$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('win', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $win$delegate.get_value_j01efc_k$();
  }
  function SetupPanel$lambda_4($win$delegate, _set____db54di) {
    getLocalDelegateReference('win', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $win$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function GamePanel$lambda($bannerDismissed$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('bannerDismissed', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $bannerDismissed$delegate.get_value_j01efc_k$();
  }
  function GamePanel$lambda_0($bannerDismissed$delegate, _set____db54di) {
    getLocalDelegateReference('bannerDismissed', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $bannerDismissed$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function App$lambda_3($this$Div) {
    $this$Div.classes_ayghm2_k$(['app']);
    return Unit_getInstance();
  }
  function App$lambda$lambda($state$delegate, $inSetup$delegate) {
    return function (config) {
      var ns = Companion_getInstance_2().new$default_kuyfd0_k$(config);
      App$lambda_0($state$delegate, ns);
      Storage_getInstance().save_wqcelb_k$(ns);
      App$lambda_2($inSetup$delegate, false);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_0($s, $state$delegate) {
    return function (col) {
      var tmp0_safe_receiver = $s.dropPiece_fokix3_k$(col);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        App$lambda_0($state$delegate, tmp0_safe_receiver);
        Storage_getInstance().save_wqcelb_k$(tmp0_safe_receiver);
      }
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_1($s, $state$delegate) {
    return function () {
      var ns = Companion_getInstance_2().new$default_kuyfd0_k$($s.get_config_c0698r_k$());
      App$lambda_0($state$delegate, ns);
      Storage_getInstance().save_wqcelb_k$(ns);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_2($inSetup$delegate) {
    return function () {
      Storage_getInstance().clear_j9egeb_k$();
      App$lambda_2($inSetup$delegate, true);
      return Unit_getInstance();
    };
  }
  function App$lambda_4($inSetup$delegate, $state$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(2071079523, $changed, -1, 'App.<anonymous> (Main.kt:28)');
      }
      Header($composer_0, 0);
      if (App$lambda_1($inSetup$delegate)) {
        $composer_0.startReplaceGroup_5hh8aj_k$(981151692);
        var tmp0_safe_receiver = App$lambda($state$delegate);
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_config_c0698r_k$();
        var tmp = tmp1_elvis_lhs == null ? Companion_getInstance_1().get_DEFAULT_wccqmg_k$() : tmp1_elvis_lhs;
        $composer_0.startReplaceGroup_5hh8aj_k$(-522537052);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'App.<anonymous>.<anonymous>.<anonymous>' call
          var value = App$lambda$lambda($state$delegate, $inSetup$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        SetupPanel(tmp, tmp0_group, $composer_0, 48);
        $composer_0.endReplaceGroup_ek144q_k$();
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(981412278);
        var s = ensureNotNull(App$lambda($state$delegate));
        $composer_0.startReplaceGroup_5hh8aj_k$(-522527928);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changedInstance_s1wkiy_k$(s);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'App.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = App$lambda$lambda_0(s, $state$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        $composer_0.startReplaceGroup_5hh8aj_k$(-522521620);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_0.changedInstance_s1wkiy_k$(s);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid_0 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'App.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = App$lambda$lambda_1(s, $state$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_4 = value_1;
        } else {
          tmp_4 = it_1;
        }
        var tmp_5 = tmp_4;
        var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        $composer_0.startReplaceGroup_5hh8aj_k$(-522516230);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (false || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'App.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = App$lambda$lambda_2($inSetup$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_2);
          tmp_6 = value_2;
        } else {
          tmp_6 = it_2;
        }
        var tmp_7 = tmp_6;
        var tmp3_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        GamePanel(s, tmp1_group, tmp2_group, tmp3_group, $composer_0, 3072);
        $composer_0.endReplaceGroup_ek144q_k$();
      }
      var tmp_8;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_8 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function App$lambda_5($$changed) {
    return function ($composer, $force) {
      App($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Header$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$(['panel']);
    return Unit_getInstance();
  }
  function Header$lambda_0($$changed) {
    return function ($composer, $force) {
      Header($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SetupPanel$lambda_5($this$Div) {
    $this$Div.classes_ayghm2_k$(['panel']);
    return Unit_getInstance();
  }
  function SetupPanel$lambda$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$(['row']);
    return Unit_getInstance();
  }
  function SetupPanel$lambda$lambda$lambda($rows$delegate) {
    return function (it) {
      SetupPanel$lambda_0($rows$delegate, it);
      return Unit_getInstance();
    };
  }
  function SetupPanel$lambda$lambda$lambda_0($cols$delegate) {
    return function (it) {
      SetupPanel$lambda_2($cols$delegate, it);
      return Unit_getInstance();
    };
  }
  function SetupPanel$lambda$lambda$lambda_1($win$delegate) {
    return function (it) {
      SetupPanel$lambda_4($win$delegate, it);
      return Unit_getInstance();
    };
  }
  function SetupPanel$lambda$lambda_0($effectiveWin, $maxAllowedWin, $rows$delegate, $cols$delegate, $win$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1962938937, $changed, -1, 'SetupPanel.<anonymous>.<anonymous> (Main.kt:82)');
      }
      var tmp = SetupPanel$lambda($rows$delegate);
      $composer_0.startReplaceGroup_5hh8aj_k$(-641382926);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'SetupPanel.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = SetupPanel$lambda$lambda$lambda($rows$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      NumField('Rows', tmp, 4, 20, tmp0_group, $composer_0, 28038);
      var tmp_2 = SetupPanel$lambda_1($cols$delegate);
      $composer_0.startReplaceGroup_5hh8aj_k$(-641379982);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'SetupPanel.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = SetupPanel$lambda$lambda$lambda_0($cols$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      NumField('Columns', tmp_2, 4, 20, tmp1_group, $composer_0, 28038);
      $composer_0.startReplaceGroup_5hh8aj_k$(-641376751);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (false || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'SetupPanel.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = SetupPanel$lambda$lambda$lambda_1($win$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_5 = value_1;
      } else {
        tmp_5 = it_1;
      }
      var tmp_6 = tmp_5;
      var tmp2_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      NumField('Win Condition', $effectiveWin, 3, $maxAllowedWin, tmp2_group, $composer_0, 24966);
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SetupPanel$lambda$lambda_1($this$Div) {
    $this$Div.classes_ayghm2_k$(['row']);
    $this$Div.style_xwwy6r_k$(SetupPanel$lambda$lambda$lambda_2);
    return Unit_getInstance();
  }
  function SetupPanel$lambda$lambda$lambda_2($this$style) {
    $this$style.property_wcrait_k$('margin-top', '16px');
    return Unit_getInstance();
  }
  function SetupPanel$lambda$lambda$lambda_3($rows$delegate, $cols$delegate, $win$delegate) {
    return function (r, c, w) {
      SetupPanel$lambda_0($rows$delegate, r);
      SetupPanel$lambda_2($cols$delegate, c);
      SetupPanel$lambda_4($win$delegate, w);
      return Unit_getInstance();
    };
  }
  function SetupPanel$lambda$lambda$lambda_4($rows$delegate, $cols$delegate, $win$delegate) {
    return function (r, c, w) {
      SetupPanel$lambda_0($rows$delegate, r);
      SetupPanel$lambda_2($cols$delegate, c);
      SetupPanel$lambda_4($win$delegate, w);
      return Unit_getInstance();
    };
  }
  function SetupPanel$lambda$lambda$lambda_5($rows$delegate, $cols$delegate, $win$delegate) {
    return function (r, c, w) {
      SetupPanel$lambda_0($rows$delegate, r);
      SetupPanel$lambda_2($cols$delegate, c);
      SetupPanel$lambda_4($win$delegate, w);
      return Unit_getInstance();
    };
  }
  function SetupPanel$lambda$lambda_2($rows$delegate, $cols$delegate, $win$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1308820656, $changed, -1, 'SetupPanel.<anonymous>.<anonymous> (Main.kt:91)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(-641370993);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'SetupPanel.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = SetupPanel$lambda$lambda$lambda_3($rows$delegate, $cols$delegate, $win$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      Preset('Connect 4', 6, 7, 4, tmp0_group, $composer_0, 28086);
      $composer_0.startReplaceGroup_5hh8aj_k$(-641368241);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'SetupPanel.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = SetupPanel$lambda$lambda$lambda_4($rows$delegate, $cols$delegate, $win$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      Preset('Connect 5', 10, 10, 5, tmp1_group, $composer_0, 28086);
      $composer_0.startReplaceGroup_5hh8aj_k$(-641365425);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'SetupPanel.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = SetupPanel$lambda$lambda$lambda_5($rows$delegate, $cols$delegate, $win$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      Preset('Connect 10', 15, 15, 10, tmp2_group, $composer_0, 28086);
      var tmp_5;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_5 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SetupPanel$lambda$lambda_3($this$Div) {
    $this$Div.classes_ayghm2_k$(['row']);
    $this$Div.style_xwwy6r_k$(SetupPanel$lambda$lambda$lambda_6);
    return Unit_getInstance();
  }
  function SetupPanel$lambda$lambda$lambda_6($this$style) {
    $this$style.property_wcrait_k$('margin-top', '20px');
    $this$style.property_wcrait_k$('justify-content', 'flex-end');
    return Unit_getInstance();
  }
  function SetupPanel$lambda$lambda$lambda$lambda($this_Button, $effectiveWin, $onStart, $rows$delegate, $cols$delegate) {
    return function (it) {
      // Inline function 'kotlin.Result.getOrNull' call
      // Inline function 'kotlin.runCatching' call
      var tmp;
      try {
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance_0();
        // Inline function 'SetupPanel.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = new GameConfig(SetupPanel$lambda($rows$delegate), SetupPanel$lambda_1($cols$delegate), $effectiveWin);
        tmp = _Result___init__impl__xyqfz8(value);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance_0();
          tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var this_0 = tmp;
      var tmp_1;
      if (_Result___get_isFailure__impl__jpiriv(this_0)) {
        tmp_1 = null;
      } else {
        var tmp_2 = _Result___get_value__impl__bjfvqg(this_0);
        tmp_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      }
      var cfg = tmp_1;
      if (!(cfg == null))
        $onStart(cfg);
      return Unit_getInstance();
    };
  }
  function SetupPanel$lambda$lambda$lambda_7($effectiveWin, $onStart, $rows$delegate, $cols$delegate) {
    return function ($this$Button) {
      $this$Button.onClick_q9cds6_k$(SetupPanel$lambda$lambda$lambda$lambda($this$Button, $effectiveWin, $onStart, $rows$delegate, $cols$delegate));
      return Unit_getInstance();
    };
  }
  function SetupPanel$lambda$lambda_4($effectiveWin, $onStart, $rows$delegate, $cols$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1004984561, $changed, -1, 'SetupPanel.<anonymous>.<anonymous> (Main.kt:99)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(-641358223);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.changed_kpusro_k$($effectiveWin) | $composer_0.changed_ga7h3f_k$($onStart));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'SetupPanel.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = SetupPanel$lambda$lambda$lambda_7($effectiveWin, $onStart, $rows$delegate, $cols$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      Button(tmp0_group, ComposableSingletons$MainKt_getInstance().lambda_5_r8sbbl_1, $composer_0, 48, 0);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SetupPanel$lambda_6($effectiveWin, $maxAllowedWin, $rows$delegate, $cols$delegate, $win$delegate, $onStart) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1165183142, $changed, -1, 'SetupPanel.<anonymous> (Main.kt:81)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(-1108614952);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'SetupPanel.<anonymous>.<anonymous>.<anonymous>' call
        var value = SetupPanel$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'SetupPanel.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1962938937, true, SetupPanel$lambda$lambda_0($effectiveWin, $maxAllowedWin, $rows$delegate, $cols$delegate, $win$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'SetupPanel.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_8(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      $composer_0.startReplaceGroup_5hh8aj_k$(-1108604479);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'SetupPanel.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = SetupPanel$lambda$lambda_1;
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'SetupPanel.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(1308820656, true, SetupPanel$lambda$lambda_2($rows$delegate, $cols$delegate, $win$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid_0 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'SetupPanel.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_9(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Div(tmp1_group, tmp0_0, $composer_0, 54, 0);
      $composer_0.startReplaceGroup_5hh8aj_k$(-1108592182);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (false || it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'SetupPanel.<anonymous>.<anonymous>.<anonymous>' call
        var value_3 = SetupPanel$lambda$lambda_3;
        $composer_0.updateRememberedValue_l1wh71_k$(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp2_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'SetupPanel.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_1 = rememberComposableLambda(-1004984561, true, SetupPanel$lambda$lambda_4($effectiveWin, $onStart, $rows$delegate, $cols$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_1);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = $composer_3.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (invalid_1 || it_4 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'SetupPanel.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_4 = ComposableLambda$invoke$ref_10(dispatchReceiver_1);
        $composer_3.updateRememberedValue_l1wh71_k$(value_4);
        tmp_9 = value_4;
      } else {
        tmp_9 = it_4;
      }
      var tmp_10 = tmp_9;
      var tmp0_1 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_3);
      Div(tmp2_group, tmp0_1, $composer_0, 54, 0);
      var tmp_11;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_11 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SetupPanel$lambda_7($initial, $onStart, $$changed) {
    return function ($composer, $force) {
      SetupPanel($initial, $onStart, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function NumField$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$(['field']);
    return Unit_getInstance();
  }
  function NumField$lambda$lambda($label) {
    return function ($this$Label, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1075239532, $changed, -1, 'NumField.<anonymous>.<anonymous> (Main.kt:112)');
      }
      Text($label, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function NumField$lambda$lambda$lambda($minVal, $maxVal, $onChange) {
    return function (e) {
      var tmp0_safe_receiver = e.get_value_j01efc_k$();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : numberToInt(tmp0_safe_receiver);
      var tmp;
      if (tmp1_elvis_lhs == null) {
        return Unit_getInstance();
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var v = tmp;
      if ($minVal <= v ? v <= $maxVal : false)
        $onChange(v);
      return Unit_getInstance();
    };
  }
  function NumField$lambda$lambda_0($minVal, $maxVal, $onChange) {
    return function ($this$NumberInput) {
      min($this$NumberInput, $minVal.toString());
      max($this$NumberInput, $maxVal.toString());
      $this$NumberInput.onInput_qzb0am_k$(NumField$lambda$lambda$lambda($minVal, $maxVal, $onChange));
      return Unit_getInstance();
    };
  }
  function NumField$lambda_0($value, $minVal, $maxVal, $onChange, $label) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(650319949, $changed, -1, 'NumField.<anonymous> (Main.kt:112)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'NumField.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1075239532, true, NumField$lambda$lambda($label), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'NumField.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_12(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Label(null, null, tmp0, $composer_0, 384, 3);
      $composer_0.startReplaceGroup_5hh8aj_k$(-1221937507);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!(!!($composer_0.changed_kpusro_k$($minVal) | $composer_0.changed_kpusro_k$($maxVal)) | $composer_0.changed_ga7h3f_k$($onChange));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'NumField.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = NumField$lambda$lambda_0($minVal, $maxVal, $onChange);
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      NumberInput($value, null, null, tmp0_group, $composer_0, 0, 6);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function NumField$lambda_1($label, $value, $minVal, $maxVal, $onChange, $$changed) {
    return function ($composer, $force) {
      NumField($label, $value, $minVal, $maxVal, $onChange, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Preset$lambda$lambda($onPick, $r, $c, $w) {
    return function (it) {
      $onPick($r, $c, $w);
      return Unit_getInstance();
    };
  }
  function Preset$lambda($onPick, $r, $c, $w) {
    return function ($this$Button) {
      $this$Button.classes_ayghm2_k$(['ghost']);
      $this$Button.onClick_q9cds6_k$(Preset$lambda$lambda($onPick, $r, $c, $w));
      return Unit_getInstance();
    };
  }
  function Preset$lambda_0($label) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1751799761, $changed, -1, 'Preset.<anonymous> (Main.kt:129)');
      }
      Text($label, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function Preset$lambda_1($label, $r, $c, $w, $onPick, $$changed) {
    return function ($composer, $force) {
      Preset($label, $r, $c, $w, $onPick, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function GamePanel$lambda_1($this$Div) {
    $this$Div.classes_ayghm2_k$(['panel']);
    return Unit_getInstance();
  }
  function GamePanel$lambda$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$(['board-wrap']);
    $this$Div.style_xwwy6r_k$(GamePanel$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function GamePanel$lambda$lambda$lambda($this$style) {
    $this$style.property_wcrait_k$('margin-top', '14px');
    return Unit_getInstance();
  }
  function GamePanel$lambda$lambda_0($state, $onMove) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(216223803, $changed, -1, 'GamePanel.<anonymous>.<anonymous> (Main.kt:146)');
      }
      Board($state, $onMove, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function GamePanel$lambda$lambda_1($bannerDismissed$delegate) {
    return function () {
      GamePanel$lambda_0($bannerDismissed$delegate, true);
      return Unit_getInstance();
    };
  }
  function GamePanel$lambda_2($state, $onRestart, $onNewGame, $bannerDismissed$delegate, $onMove) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1046434138, $changed, -1, 'GamePanel.<anonymous> (Main.kt:141)');
      }
      StatusBar($state, $onRestart, $onNewGame, $composer_0, 0);
      $composer_0.startReplaceGroup_5hh8aj_k$(49471635);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'GamePanel.<anonymous>.<anonymous>.<anonymous>' call
        var value = GamePanel$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'GamePanel.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(216223803, true, GamePanel$lambda$lambda_0($state, $onMove), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'GamePanel.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_15(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      if (!GamePanel$lambda($bannerDismissed$delegate)) {
        $composer_0.startReplaceGroup_5hh8aj_k$(49478635);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_0.changed_ga7h3f_k$($bannerDismissed$delegate);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid_0 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'GamePanel.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = GamePanel$lambda$lambda_1($bannerDismissed$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_3 = value_1;
        } else {
          tmp_3 = it_1;
        }
        var tmp_4 = tmp_3;
        var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        ResultBanner($state, tmp1_group, $composer_0, 0);
      }
      var tmp_5;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_5 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function GamePanel$lambda_3($state, $onMove, $onRestart, $onNewGame, $$changed) {
    return function ($composer, $force) {
      GamePanel($state, $onMove, $onRestart, $onNewGame, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function StatusBar$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$(['status']);
    return Unit_getInstance();
  }
  function StatusBar$lambda$lambda$lambda($label) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1538234149, $changed, -1, 'StatusBar.<anonymous>.<anonymous>.<anonymous> (Main.kt:163)');
      }
      Text($label + '  ', $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function StatusBar$lambda$lambda$lambda_0($this$Span) {
    $this$Span.classes_ayghm2_k$(['turn-pill']);
    return Unit_getInstance();
  }
  function StatusBar$lambda$lambda$lambda$lambda($pillFor) {
    return function ($this$Span) {
      $this$Span.classes_ayghm2_k$(['dot', $pillFor.equals(Cell_RED_getInstance()) ? 'red' : 'yellow']);
      return Unit_getInstance();
    };
  }
  function StatusBar$lambda$lambda$lambda_1($pillFor) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1716691388, $changed, -1, 'StatusBar.<anonymous>.<anonymous>.<anonymous> (Main.kt:166)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(1683101278);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_ga7h3f_k$($pillFor);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'StatusBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = StatusBar$lambda$lambda$lambda$lambda($pillFor);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      Span(tmp0_group, null, $composer_0, 0, 2);
      Text($pillFor.equals(Cell_RED_getInstance()) ? 'Red' : 'Yellow', $composer_0, 0);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function StatusBar$lambda$lambda$lambda_2($this$Span) {
    $this$Span.style_xwwy6r_k$(StatusBar$lambda$lambda$lambda$lambda_0);
    return Unit_getInstance();
  }
  function StatusBar$lambda$lambda$lambda$lambda_0($this$style) {
    $this$style.property_wcrait_k$('margin-left', '10px');
    $this$style.property_wcrait_k$('color', 'var(--muted)');
    return Unit_getInstance();
  }
  function StatusBar$lambda$lambda$lambda_3($state) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-2132018205, $changed, -1, 'StatusBar.<anonymous>.<anonymous>.<anonymous> (Main.kt:170)');
      }
      Text('Connect ' + $state.get_config_c0698r_k$().get_winLength_6leqpz_k$() + ' on ' + $state.get_config_c0698r_k$().get_rows_wott7m_k$() + '\xD7' + $state.get_config_c0698r_k$().get_cols_wok858_k$(), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function StatusBar$lambda$lambda($state) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1868347655, $changed, -1, 'StatusBar.<anonymous>.<anonymous> (Main.kt:158)');
      }
      var label = !($state.get_winner_lds3ew_k$() == null) ? 'Winner' : $state.get_isDraw_evwl93_k$() ? 'Draw' : 'Turn';
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'StatusBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1538234149, true, StatusBar$lambda$lambda$lambda(label), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'StatusBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_17(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Span(null, tmp0, $composer_0, 48, 1);
      var tmp0_elvis_lhs = $state.get_winner_lds3ew_k$();
      var pillFor = tmp0_elvis_lhs == null ? $state.get_currentPlayer_yc1fgx_k$() : tmp0_elvis_lhs;
      $composer_0.startReplaceGroup_5hh8aj_k$(-962583401);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'StatusBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = StatusBar$lambda$lambda$lambda_0;
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'StatusBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(-1716691388, true, StatusBar$lambda$lambda$lambda_1(pillFor), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_0 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'StatusBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_18(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Span(tmp0_group, tmp0_0, $composer_0, 54, 0);
      $composer_0.startReplaceGroup_5hh8aj_k$(-962576529);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (false || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'StatusBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = StatusBar$lambda$lambda$lambda_2;
        $composer_0.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp1_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'StatusBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_1 = rememberComposableLambda(-2132018205, true, StatusBar$lambda$lambda$lambda_3($state), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_1);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_3.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (invalid_1 || it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'StatusBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_3 = ComposableLambda$invoke$ref_19(dispatchReceiver_1);
        $composer_3.updateRememberedValue_l1wh71_k$(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp0_1 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_3);
      Span(tmp1_group, tmp0_1, $composer_0, 54, 0);
      var tmp_9;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_9 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function StatusBar$lambda$lambda_0($this$Div) {
    $this$Div.classes_ayghm2_k$(['actions']);
    return Unit_getInstance();
  }
  function StatusBar$lambda$lambda$lambda$lambda_1($onRestart) {
    return function (it) {
      $onRestart();
      return Unit_getInstance();
    };
  }
  function StatusBar$lambda$lambda$lambda_4($onRestart) {
    return function ($this$Button) {
      $this$Button.classes_ayghm2_k$(['ghost']);
      $this$Button.onClick_q9cds6_k$(StatusBar$lambda$lambda$lambda$lambda_1($onRestart));
      return Unit_getInstance();
    };
  }
  function StatusBar$lambda$lambda$lambda$lambda_2($onNewGame) {
    return function (it) {
      $onNewGame();
      return Unit_getInstance();
    };
  }
  function StatusBar$lambda$lambda$lambda_5($onNewGame) {
    return function ($this$Button) {
      $this$Button.onClick_q9cds6_k$(StatusBar$lambda$lambda$lambda$lambda_2($onNewGame));
      return Unit_getInstance();
    };
  }
  function StatusBar$lambda$lambda_1($onRestart, $onNewGame) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1954112738, $changed, -1, 'StatusBar.<anonymous>.<anonymous> (Main.kt:174)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(-962567988);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_ga7h3f_k$($onRestart);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'StatusBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = StatusBar$lambda$lambda$lambda_4($onRestart);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      Button(tmp0_group, ComposableSingletons$MainKt_getInstance().lambda_6_r8sbbk_1, $composer_0, 48, 0);
      $composer_0.startReplaceGroup_5hh8aj_k$(-962565254);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_0.changed_ga7h3f_k$($onNewGame);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'StatusBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = StatusBar$lambda$lambda$lambda_5($onNewGame);
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      Button(tmp1_group, ComposableSingletons$MainKt_getInstance().lambda_7_r8sbbj_1, $composer_0, 48, 0);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function StatusBar$lambda_0($state, $onRestart, $onNewGame) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1589203672, $changed, -1, 'StatusBar.<anonymous> (Main.kt:157)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'StatusBar.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1868347655, true, StatusBar$lambda$lambda($state), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'StatusBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_20(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(null, tmp0, $composer_0, 48, 1);
      $composer_0.startReplaceGroup_5hh8aj_k$(-1206884074);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'StatusBar.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = StatusBar$lambda$lambda_0;
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'StatusBar.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(1954112738, true, StatusBar$lambda$lambda_1($onRestart, $onNewGame), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_0 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'StatusBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_21(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Div(tmp0_group, tmp0_0, $composer_0, 54, 0);
      var tmp_5;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_5 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function StatusBar$lambda_1($state, $onRestart, $onNewGame, $$changed) {
    return function ($composer, $force) {
      StatusBar($state, $onRestart, $onNewGame, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Board$lambda$lambda($state) {
    return function ($this$style) {
      $this$style.property_wcrait_k$('grid-template-columns', 'repeat(' + $state.get_config_c0698r_k$().get_cols_wok858_k$() + ', 1fr)');
      return Unit_getInstance();
    };
  }
  function Board$lambda($state) {
    return function ($this$Div) {
      $this$Div.classes_ayghm2_k$(['board']);
      $this$Div.style_xwwy6r_k$(Board$lambda$lambda($state));
      return Unit_getInstance();
    };
  }
  function Board$lambda_0($state, $onMove) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1337141054, $changed, -1, 'Board.<anonymous> (Main.kt:188)');
      }
      var inductionVariable = 0;
      var last = $state.get_config_c0698r_k$().get_rows_wott7m_k$();
      if (inductionVariable < last)
        do {
          var r = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          $composer_0.startReplaceGroup_5hh8aj_k$(-1004402328);
          var inductionVariable_0 = 0;
          var last_0 = $state.get_config_c0698r_k$().get_cols_wok858_k$();
          if (inductionVariable_0 < last_0)
            do {
              var c = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              BoardSlot($state, r, c, $onMove, $composer_0, 0);
            }
             while (inductionVariable_0 < last_0);
          $composer_0.endReplaceGroup_ek144q_k$();
        }
         while (inductionVariable < last);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function Board$lambda_1($state, $onMove, $$changed) {
    return function ($composer, $force) {
      Board($state, $onMove, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function BoardSlot$lambda$lambda($disabled, $onMove, $col) {
    return function (it) {
      if (!$disabled)
        $onMove($col);
      return Unit_getInstance();
    };
  }
  function BoardSlot$lambda($disabled, $onMove, $col) {
    return function ($this$Div) {
      $this$Div.classes_ayghm2_k$(['cell']);
      var tmp;
      if ($disabled) {
        $this$Div.classes_ayghm2_k$(['disabled']);
        tmp = Unit_getInstance();
      }
      $this$Div.onClick_q9cds6_k$(BoardSlot$lambda$lambda($disabled, $onMove, $col));
      return Unit_getInstance();
    };
  }
  function BoardSlot$lambda$lambda_0($state) {
    return function ($this$Div) {
      $this$Div.classes_ayghm2_k$(['col-hover', $state.get_currentPlayer_yc1fgx_k$().equals(Cell_RED_getInstance()) ? 'red' : 'yellow']);
      return Unit_getInstance();
    };
  }
  function BoardSlot$lambda$lambda_1($cell, $isLast, $isWinning) {
    return function ($this$Div) {
      var pieceClass = $cell.equals(Cell_RED_getInstance()) ? 'red' : 'yellow';
      $this$Div.classes_ayghm2_k$(['piece', pieceClass]);
      var tmp;
      if ($isLast) {
        $this$Div.classes_ayghm2_k$(['dropping']);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if ($isWinning) {
        $this$Div.classes_ayghm2_k$(['winning']);
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function BoardSlot$lambda_0($disabled, $cell, $state, $isLast, $isWinning) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1347442982, $changed, -1, 'BoardSlot.<anonymous> (Main.kt:208)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(1709706647);
      if (!$disabled && $cell.equals(Cell_EMPTY_getInstance())) {
        $composer_0.startReplaceGroup_5hh8aj_k$(1709708341);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changedInstance_s1wkiy_k$($state);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp;
        if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'BoardSlot.<anonymous>.<anonymous>.<anonymous>' call
          var value = BoardSlot$lambda$lambda_0($state);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        Div(tmp0_group, null, $composer_0, 0, 2);
      }
      $composer_0.endReplaceGroup_ek144q_k$();
      if (!$cell.equals(Cell_EMPTY_getInstance())) {
        $composer_0.startReplaceGroup_5hh8aj_k$(1709713100);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = !!(!!($composer_0.changed_ga7h3f_k$($cell) | $composer_0.changed_jpyyrz_k$($isLast)) | $composer_0.changed_jpyyrz_k$($isWinning));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'BoardSlot.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = BoardSlot$lambda$lambda_1($cell, $isLast, $isWinning);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = it_0;
        }
        var tmp_2 = tmp_1;
        var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        Div(tmp1_group, null, $composer_0, 0, 2);
      }
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function BoardSlot$lambda_1($state, $row, $col, $onMove, $$changed) {
    return function ($composer, $force) {
      BoardSlot($state, $row, $col, $onMove, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ResultBanner$lambda($state, $onDismiss, $$changed) {
    return function ($composer, $force) {
      ResultBanner($state, $onDismiss, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ResultBanner$lambda$lambda($onDismiss) {
    return function (it) {
      $onDismiss();
      return Unit_getInstance();
    };
  }
  function ResultBanner$lambda_0($onDismiss) {
    return function ($this$Div) {
      $this$Div.classes_ayghm2_k$(['banner-overlay']);
      $this$Div.onClick_q9cds6_k$(ResultBanner$lambda$lambda($onDismiss));
      return Unit_getInstance();
    };
  }
  function ResultBanner$lambda$lambda$lambda(it) {
    it.stopPropagation_5qf8uy_k$();
    return Unit_getInstance();
  }
  function ResultBanner$lambda$lambda_0($cls) {
    return function ($this$Div) {
      $this$Div.classes_ayghm2_k$(['banner', $cls]);
      $this$Div.onClick_q9cds6_k$(ResultBanner$lambda$lambda$lambda);
      return Unit_getInstance();
    };
  }
  function ResultBanner$lambda$lambda$lambda_0($this$Div) {
    $this$Div.classes_ayghm2_k$(['banner-text']);
    return Unit_getInstance();
  }
  function ResultBanner$lambda$lambda$lambda_1($text) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1307024380, $changed, -1, 'ResultBanner.<anonymous>.<anonymous>.<anonymous> (Main.kt:238)');
      }
      Text($text, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ResultBanner$lambda$lambda$lambda_2($this$Div) {
    $this$Div.classes_ayghm2_k$(['banner-sub']);
    return Unit_getInstance();
  }
  function ResultBanner$lambda$lambda$lambda_3($cls) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-781367693, $changed, -1, 'ResultBanner.<anonymous>.<anonymous>.<anonymous> (Main.kt:240)');
      }
      var tmp0_subject = $cls;
      Text(tmp0_subject === 'win-red' ? 'Red player takes the round' : tmp0_subject === 'win-yellow' ? 'Yellow player takes the round' : 'Nobody wins this time', $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ResultBanner$lambda$lambda$lambda_4($this$Div) {
    $this$Div.classes_ayghm2_k$(['banner-hint']);
    return Unit_getInstance();
  }
  function ResultBanner$lambda$lambda_1($text, $cls) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1031243075, $changed, -1, 'ResultBanner.<anonymous>.<anonymous> (Main.kt:238)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(-1585020383);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ResultBanner.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ResultBanner$lambda$lambda$lambda_0;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ResultBanner.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1307024380, true, ResultBanner$lambda$lambda$lambda_1($text), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ResultBanner.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_25(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      $composer_0.startReplaceGroup_5hh8aj_k$(-1585018496);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ResultBanner.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ResultBanner$lambda$lambda$lambda_2;
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ResultBanner.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(-781367693, true, ResultBanner$lambda$lambda$lambda_3($cls), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid_0 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ResultBanner.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_26(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Div(tmp1_group, tmp0_0, $composer_0, 54, 0);
      $composer_0.startReplaceGroup_5hh8aj_k$(-1585008735);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (false || it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ResultBanner.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_3 = ResultBanner$lambda$lambda$lambda_4;
        $composer_0.updateRememberedValue_l1wh71_k$(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp2_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      Div(tmp2_group, ComposableSingletons$MainKt_getInstance().lambda_8_r8sbbi_1, $composer_0, 54, 0);
      var tmp_9;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_9 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ResultBanner$lambda_1($cls, $text) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1451260862, $changed, -1, 'ResultBanner.<anonymous> (Main.kt:234)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(2129067651);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_ga7h3f_k$($cls);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ResultBanner.<anonymous>.<anonymous>.<anonymous>' call
        var value = ResultBanner$lambda$lambda_0($cls);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ResultBanner.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1031243075, true, ResultBanner$lambda$lambda_1($text, $cls), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ResultBanner.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_27(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 48, 0);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ResultBanner$lambda_2($state, $onDismiss, $$changed) {
    return function ($composer, $force) {
      ResultBanner($state, $onDismiss, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function mainWrapper() {
    main();
  }
  var Storage$stable;
  function _get_KEY__e5qd6a($this) {
    return $this.KEY_1;
  }
  function encode(_this__u8e3s4, $this) {
    var tmp;
    switch (_this__u8e3s4.get_ordinal_ip24qg_k$()) {
      case 1:
        tmp = 'R';
        break;
      case 2:
        tmp = 'Y';
        break;
      case 0:
        tmp = '.';
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function decodeCell(_this__u8e3s4, $this) {
    switch (_this__u8e3s4) {
      case 'R':
        return Cell_RED_getInstance();
      case 'Y':
        return Cell_YELLOW_getInstance();
      case '.':
        return Cell_EMPTY_getInstance();
      default:
        return null;
    }
  }
  function findAnyWinningLine($this, grid, rows, cols, winLen, player) {
    var dirs = listOf([to(0, 1), to(1, 0), to(1, 1), to(1, -1)]);
    var inductionVariable = 0;
    if (inductionVariable < rows)
      do {
        var r = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < cols)
          $l$loop: do {
            var c = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            if (!grid.get_c1px32_k$(r).get_c1px32_k$(c).equals(player))
              continue $l$loop;
            var _iterator__ex2g4s = dirs.iterator_jk1svi_k$();
            while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
              var _destruct__k2r9zo = _iterator__ex2g4s.next_20eer_k$();
              var dr = _destruct__k2r9zo.component1_7eebsc_k$();
              var dc = _destruct__k2r9zo.component2_7eebsb_k$();
              // Inline function 'kotlin.collections.mutableListOf' call
              var line = ArrayList_init_$Create$();
              var rr = r;
              var cc = c;
              while ((0 <= rr ? rr < rows : false) && (0 <= cc ? cc < cols : false) && grid.get_c1px32_k$(rr).get_c1px32_k$(cc).equals(player)) {
                // Inline function 'kotlin.collections.plusAssign' call
                var element = to(rr, cc);
                line.add_utx5q5_k$(element);
                rr = rr + dr | 0;
                cc = cc + dc | 0;
              }
              if (line.get_size_woubt6_k$() >= winLen)
                return take(line, winLen);
            }
          }
           while (inductionVariable_0 < cols);
      }
       while (inductionVariable < rows);
    return emptyList();
  }
  function Storage() {
    Storage_instance = this;
    this.KEY_1 = 'connect_four:v1';
  }
  protoOf(Storage).save_wqcelb_k$ = function (state) {
    var sb = StringBuilder_init_$Create$();
    sb.append_uppzia_k$(state.get_config_c0698r_k$().get_rows_wott7m_k$()).append_am5a4z_k$(_Char___init__impl__6a9atx(124));
    sb.append_uppzia_k$(state.get_config_c0698r_k$().get_cols_wok858_k$()).append_am5a4z_k$(_Char___init__impl__6a9atx(124));
    sb.append_uppzia_k$(state.get_config_c0698r_k$().get_winLength_6leqpz_k$()).append_am5a4z_k$(_Char___init__impl__6a9atx(124));
    sb.append_22ad7x_k$(encode(state.get_currentPlayer_yc1fgx_k$(), this)).append_am5a4z_k$(_Char___init__impl__6a9atx(124));
    var tmp0_safe_receiver = state.get_winner_lds3ew_k$();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : encode(tmp0_safe_receiver, this);
    sb.append_22ad7x_k$(tmp1_elvis_lhs == null ? '-' : tmp1_elvis_lhs).append_am5a4z_k$(_Char___init__impl__6a9atx(124));
    sb.append_uppzia_k$(state.get_isDraw_evwl93_k$() ? 1 : 0).append_am5a4z_k$(_Char___init__impl__6a9atx(124));
    sb.append_uppzia_k$(state.get_moveCount_pr6mfp_k$()).append_am5a4z_k$(_Char___init__impl__6a9atx(124));
    var _iterator__ex2g4s = state.get_grid_womu8f_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var row = _iterator__ex2g4s.next_20eer_k$();
      var _iterator__ex2g4s_0 = row.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var cell = _iterator__ex2g4s_0.next_20eer_k$();
        sb.append_22ad7x_k$(encode(cell, this));
      }
    }
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance_0();
      window.localStorage.setItem('connect_four:v1', sb.toString());
      tmp = _Result___init__impl__xyqfz8(Unit_getInstance());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance_0();
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
  };
  protoOf(Storage).load_1zbae_k$ = function () {
    // Inline function 'kotlin.Result.getOrNull' call
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance_0();
      // Inline function 'Storage.load.<anonymous>' call
      var tmp0_elvis_lhs = window.localStorage.getItem('connect_four:v1');
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        return null;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var raw = tmp_0;
      var parts = split(raw, charArrayOf([_Char___init__impl__6a9atx(124)]));
      if (!(parts.get_size_woubt6_k$() === 8))
        return null;
      var rows = toInt(parts.get_c1px32_k$(0));
      var cols = toInt(parts.get_c1px32_k$(1));
      var win = toInt(parts.get_c1px32_k$(2));
      var tmp1_elvis_lhs = decodeCell(parts.get_c1px32_k$(3), this);
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        return null;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var current = tmp_1;
      var winner = parts.get_c1px32_k$(4) === '-' ? null : decodeCell(parts.get_c1px32_k$(4), this);
      var isDraw = parts.get_c1px32_k$(5) === '1';
      var moveCount = toInt(parts.get_c1px32_k$(6));
      var flat = parts.get_c1px32_k$(7);
      if (!(flat.length === imul(rows, cols)))
        return null;
      // Inline function 'kotlin.collections.List' call
      // Inline function 'kotlin.collections.MutableList' call
      var list = ArrayList_init_$Create$_0(rows);
      // Inline function 'kotlin.repeat' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < rows)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.collections.MutableList.<anonymous>' call
          // Inline function 'Storage.load.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.collections.List' call
          // Inline function 'kotlin.collections.MutableList' call
          var list_0 = ArrayList_init_$Create$_0(cols);
          // Inline function 'kotlin.repeat' call
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < cols)
            do {
              var index_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              // Inline function 'kotlin.collections.MutableList.<anonymous>' call
              // Inline function 'Storage.load.<anonymous>.<anonymous>.<anonymous>' call
              var tmp0_elvis_lhs_0 = decodeCell(toString_1(charSequenceGet(flat, imul(index, cols) + index_0 | 0)), this);
              var tmp$ret$0 = tmp0_elvis_lhs_0 == null ? Cell_EMPTY_getInstance() : tmp0_elvis_lhs_0;
              list_0.add_utx5q5_k$(tmp$ret$0);
            }
             while (inductionVariable_0 < cols);
          list.add_utx5q5_k$(list_0);
        }
         while (inductionVariable < rows);
      var grid = list;
      var tmp_2;
      if (!(winner == null)) {
        tmp_2 = findAnyWinningLine(this, grid, rows, cols, win, winner);
      } else {
        tmp_2 = emptyList();
      }
      var winningLine = tmp_2;
      var value = new GameState(new GameConfig(rows, cols, win), grid, current, winner, isDraw, winningLine, null, moveCount);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance_0();
        tmp_3 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_3;
    }
    var this_0 = tmp;
    var tmp_4;
    if (_Result___get_isFailure__impl__jpiriv(this_0)) {
      tmp_4 = null;
    } else {
      var tmp_5 = _Result___get_value__impl__bjfvqg(this_0);
      tmp_4 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
    }
    return tmp_4;
  };
  protoOf(Storage).clear_j9egeb_k$ = function () {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance_0();
      window.localStorage.removeItem('connect_four:v1');
      tmp = _Result___init__impl__xyqfz8(Unit_getInstance());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance_0();
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
  };
  var Storage_instance;
  function Storage_getInstance() {
    if (Storage_instance == null)
      new Storage();
    return Storage_instance;
  }
  function Storage$stableprop_getter() {
    return Storage$stable;
  }
  //region block: init
  GameConfig$stable = 0;
  GameState$stable = 8;
  Storage$stable = 0;
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=connect-four.js.map
