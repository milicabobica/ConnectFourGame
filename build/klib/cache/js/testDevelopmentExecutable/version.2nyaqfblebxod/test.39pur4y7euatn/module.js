(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './connect-four.js', './kotlin-kotlin-test.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./connect-four.js'), require('./kotlin-kotlin-test.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'connect-four_test'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'connect-four_test'.");
    }
    if (typeof globalThis['connect-four'] === 'undefined') {
      throw new Error("Error loading module 'connect-four_test'. Its dependency 'connect-four' was not found. Please, check whether 'connect-four' is loaded prior to 'connect-four_test'.");
    }
    if (typeof globalThis['kotlin-kotlin-test'] === 'undefined') {
      throw new Error("Error loading module 'connect-four_test'. Its dependency 'kotlin-kotlin-test' was not found. Please, check whether 'kotlin-kotlin-test' is loaded prior to 'connect-four_test'.");
    }
    globalThis['connect-four_test'] = factory(typeof globalThis['connect-four_test'] === 'undefined' ? {} : globalThis['connect-four_test'], globalThis['kotlin-kotlin-stdlib'], globalThis['connect-four'], globalThis['kotlin-kotlin-test']);
  }
}(function (_, kotlin_kotlin, kotlin_connect_four, kotlin_kotlin_test) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var toString = kotlin_kotlin.$_$.j7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var Companion_getInstance = kotlin_connect_four.$_$.f;
  var GameConfig = kotlin_connect_four.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.y8;
  var Cell_RED_getInstance = kotlin_connect_four.$_$.c;
  var assertEquals = kotlin_kotlin_test.$_$.a;
  var Cell_YELLOW_getInstance = kotlin_connect_four.$_$.d;
  var Cell_EMPTY_getInstance = kotlin_connect_four.$_$.b;
  var protoOf = kotlin_kotlin.$_$.h7;
  var assertFalse = kotlin_kotlin_test.$_$.b;
  var to = kotlin_kotlin.$_$.i9;
  var assertTrue = kotlin_kotlin_test.$_$.e;
  var assertNull = kotlin_kotlin_test.$_$.d;
  var assertNotNull = kotlin_kotlin_test.$_$.c;
  var IllegalArgumentException = kotlin_kotlin.$_$.k8;
  var getKClass = kotlin_kotlin.$_$.b;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.z1;
  var Unit_getInstance = kotlin_kotlin.$_$.a2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.s1;
  var createFailure = kotlin_kotlin.$_$.x8;
  var checkResultIsFailure = kotlin_kotlin_test.$_$.f;
  var Companion_getInstance_1 = kotlin_connect_four.$_$.e;
  var initMetadataForClass = kotlin_kotlin.$_$.o6;
  var suite = kotlin_kotlin_test.$_$.g;
  var test = kotlin_kotlin_test.$_$.h;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(GameTest, 'GameTest', GameTest);
  //endregion
  var GameTest$stable;
  function playMoves($this, state, cols) {
    var s = state;
    var inductionVariable = 0;
    var last = cols.length;
    while (inductionVariable < last) {
      var c = cols[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp0_elvis_lhs = s.dropPiece_fokix3_k$(c);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var message = 'illegal move at column ' + c + ' (state=' + s.toString() + ')';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp = tmp0_elvis_lhs;
      }
      s = tmp;
    }
    return s;
  }
  function GameTest() {
  }
  protoOf(GameTest).gravity_pieces_stack_from_bottom_579lf4_k$ = function () {
    var s = Companion_getInstance().new$default_kuyfd0_k$(new GameConfig(6, 7, 4));
    s = ensureNotNull(s.dropPiece_fokix3_k$(3));
    s = ensureNotNull(s.dropPiece_fokix3_k$(3));
    s = ensureNotNull(s.dropPiece_fokix3_k$(3));
    assertEquals(Cell_RED_getInstance(), s.get_grid_womu8f_k$().get_c1px32_k$(5).get_c1px32_k$(3));
    assertEquals(Cell_YELLOW_getInstance(), s.get_grid_womu8f_k$().get_c1px32_k$(4).get_c1px32_k$(3));
    assertEquals(Cell_RED_getInstance(), s.get_grid_womu8f_k$().get_c1px32_k$(3).get_c1px32_k$(3));
    assertEquals(Cell_EMPTY_getInstance(), s.get_grid_womu8f_k$().get_c1px32_k$(2).get_c1px32_k$(3));
  };
  protoOf(GameTest).horizontal_win_classic_ww2gjg_k$ = function () {
    var cfg = new GameConfig(6, 7, 4);
    var s = playMoves(this, Companion_getInstance().new$default_kuyfd0_k$(cfg), new Int32Array([0, 0, 1, 1, 2, 2, 3]));
    assertEquals(Cell_RED_getInstance(), s.get_winner_lds3ew_k$());
    assertEquals(4, s.get_winningCells_u55cru_k$().get_size_woubt6_k$());
    assertFalse(s.get_isDraw_evwl93_k$());
  };
  protoOf(GameTest).vertical_win_82sdkz_k$ = function () {
    var cfg = new GameConfig(6, 7, 4);
    var s = playMoves(this, Companion_getInstance().new$default_kuyfd0_k$(cfg), new Int32Array([0, 1, 0, 1, 0, 1, 0]));
    assertEquals(Cell_RED_getInstance(), s.get_winner_lds3ew_k$());
    assertEquals(4, s.get_winningCells_u55cru_k$().get_size_woubt6_k$());
  };
  protoOf(GameTest).diagonal_win_down_right_h61jb8_k$ = function () {
    var cfg = new GameConfig(6, 7, 4);
    var s = playMoves(this, Companion_getInstance().new$default_kuyfd0_k$(cfg), new Int32Array([0, 1, 1, 2, 3, 2, 2, 3, 6, 3, 3]));
    assertEquals(Cell_RED_getInstance(), s.get_winner_lds3ew_k$());
    assertEquals(4, s.get_winningCells_u55cru_k$().get_size_woubt6_k$());
    assertTrue(s.get_winningCells_u55cru_k$().contains_aljjnj_k$(to(5, 0)));
    assertTrue(s.get_winningCells_u55cru_k$().contains_aljjnj_k$(to(2, 3)));
  };
  protoOf(GameTest).configurable_win_length_five_3mha5u_k$ = function () {
    var cfg = new GameConfig(6, 10, 5);
    var s = playMoves(this, Companion_getInstance().new$default_kuyfd0_k$(cfg), new Int32Array([0, 0, 1, 1, 2, 2, 3, 3, 4]));
    assertEquals(Cell_RED_getInstance(), s.get_winner_lds3ew_k$());
    assertEquals(5, s.get_winningCells_u55cru_k$().get_size_woubt6_k$());
  };
  protoOf(GameTest).win_length_four_does_not_trigger_with_only_three_ys74ji_k$ = function () {
    var cfg = new GameConfig(6, 7, 4);
    var s = playMoves(this, Companion_getInstance().new$default_kuyfd0_k$(cfg), new Int32Array([0, 0, 1, 1, 2]));
    assertNull(s.get_winner_lds3ew_k$());
    assertEquals(Cell_YELLOW_getInstance(), s.get_currentPlayer_yc1fgx_k$());
  };
  protoOf(GameTest).cannot_drop_into_full_column_c6ajfv_k$ = function () {
    var cfg = new GameConfig(4, 4, 4);
    var s = Companion_getInstance().new$default_kuyfd0_k$(cfg);
    s = ensureNotNull(s.dropPiece_fokix3_k$(0));
    s = ensureNotNull(s.dropPiece_fokix3_k$(0));
    s = ensureNotNull(s.dropPiece_fokix3_k$(0));
    s = ensureNotNull(s.dropPiece_fokix3_k$(0));
    assertTrue(s.columnIsFull_38il3r_k$(0));
    assertNull(s.get_winner_lds3ew_k$());
    assertNull(s.dropPiece_fokix3_k$(0));
  };
  protoOf(GameTest).draw_when_board_fills_with_no_winner_a71y5i_k$ = function () {
    var cfg = new GameConfig(4, 4, 10);
    var s = Companion_getInstance().new$default_kuyfd0_k$(cfg);
    // Inline function 'kotlin.repeat' call
    var times = imul(cfg.get_rows_wott7m_k$(), cfg.get_cols_wok858_k$());
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'GameTest.draw_when_board_fills_with_no_winner.<anonymous>' call
        s = ensureNotNull(s.dropPiece_fokix3_k$(index % cfg.get_cols_wok858_k$() | 0));
      }
       while (inductionVariable < times);
    assertTrue(s.get_isDraw_evwl93_k$());
    assertNull(s.get_winner_lds3ew_k$());
    assertTrue(s.get_isOver_ew3p5z_k$());
  };
  protoOf(GameTest).moves_blocked_after_game_over_bw0qta_k$ = function () {
    var cfg = new GameConfig(6, 7, 4);
    var s = playMoves(this, Companion_getInstance().new$default_kuyfd0_k$(cfg), new Int32Array([0, 0, 1, 1, 2, 2, 3]));
    assertNotNull(s.get_winner_lds3ew_k$());
    assertNull(s.dropPiece_fokix3_k$(4));
  };
  protoOf(GameTest).config_validates_inputs_usfqvs_k$ = function () {
    // Inline function 'kotlin.test.assertFailsWith' call
    // Inline function 'kotlin.test.assertFailsWith' call
    var exceptionClass = getKClass(IllegalArgumentException);
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance_0();
      new GameConfig(2, 7, 4);
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
    var tmp$ret$2 = tmp;
    checkResultIsFailure(exceptionClass, null, tmp$ret$2);
    // Inline function 'kotlin.test.assertFailsWith' call
    // Inline function 'kotlin.test.assertFailsWith' call
    var exceptionClass_0 = getKClass(IllegalArgumentException);
    // Inline function 'kotlin.runCatching' call
    var tmp_1;
    try {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance_0();
      new GameConfig(6, 7, 2);
      tmp_1 = _Result___init__impl__xyqfz8(Unit_getInstance());
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        var e_0 = $p;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance_0();
        tmp_2 = _Result___init__impl__xyqfz8(createFailure(e_0));
      } else {
        throw $p;
      }
      tmp_1 = tmp_2;
    }
    var tmp$ret$7 = tmp_1;
    checkResultIsFailure(exceptionClass_0, null, tmp$ret$7);
    // Inline function 'kotlin.test.assertFailsWith' call
    // Inline function 'kotlin.test.assertFailsWith' call
    var exceptionClass_1 = getKClass(IllegalArgumentException);
    // Inline function 'kotlin.runCatching' call
    var tmp_3;
    try {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance_0();
      new GameConfig(6, 7, 99);
      tmp_3 = _Result___init__impl__xyqfz8(Unit_getInstance());
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Error) {
        var e_1 = $p;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance_0();
        tmp_4 = _Result___init__impl__xyqfz8(createFailure(e_1));
      } else {
        throw $p;
      }
      tmp_3 = tmp_4;
    }
    var tmp$ret$12 = tmp_3;
    checkResultIsFailure(exceptionClass_1, null, tmp$ret$12);
  };
  protoOf(GameTest).players_alternate_qkjyal_k$ = function () {
    var cfg = Companion_getInstance_1().get_DEFAULT_wccqmg_k$();
    var s = Companion_getInstance().new$default_kuyfd0_k$(cfg);
    assertEquals(Cell_RED_getInstance(), s.get_currentPlayer_yc1fgx_k$());
    s = ensureNotNull(s.dropPiece_fokix3_k$(0));
    assertEquals(Cell_YELLOW_getInstance(), s.get_currentPlayer_yc1fgx_k$());
    s = ensureNotNull(s.dropPiece_fokix3_k$(1));
    assertEquals(Cell_RED_getInstance(), s.get_currentPlayer_yc1fgx_k$());
  };
  protoOf(GameTest).last_move_tracks_landing_position_ldr377_k$ = function () {
    var cfg = Companion_getInstance_1().get_DEFAULT_wccqmg_k$();
    var s = ensureNotNull(Companion_getInstance().new$default_kuyfd0_k$(cfg).dropPiece_fokix3_k$(3));
    assertEquals(to(cfg.get_rows_wott7m_k$() - 1 | 0, 3), s.get_lastMove_f35oi8_k$());
  };
  function GameTest$stableprop_getter() {
    return GameTest$stable;
  }
  function test_fun_izoufj() {
    suite('GameTest', false, test_fun$GameTest_test_fun_8g0aw6);
  }
  function test_fun$GameTest_test_fun_8g0aw6() {
    test('gravity_pieces_stack_from_bottom', false, test_fun$GameTest_test_fun$gravity_pieces_stack_from_bottom_test_fun_ofs8qv);
    test('horizontal_win_classic', false, test_fun$GameTest_test_fun$horizontal_win_classic_test_fun_dqx1kj);
    test('vertical_win', false, test_fun$GameTest_test_fun$vertical_win_test_fun_g9i8oc);
    test('diagonal_win_down_right', false, test_fun$GameTest_test_fun$diagonal_win_down_right_test_fun_cf6lvz);
    test('configurable_win_length_five', false, test_fun$GameTest_test_fun$configurable_win_length_five_test_fun_65fr0l);
    test('win_length_four_does_not_trigger_with_only_three', false, test_fun$GameTest_test_fun$win_length_four_does_not_trigger_with_only_three_test_fun_t4aad5);
    test('cannot_drop_into_full_column', false, test_fun$GameTest_test_fun$cannot_drop_into_full_column_test_fun_9yur1o);
    test('draw_when_board_fills_with_no_winner', false, test_fun$GameTest_test_fun$draw_when_board_fills_with_no_winner_test_fun_gdzsz3);
    test('moves_blocked_after_game_over', false, test_fun$GameTest_test_fun$moves_blocked_after_game_over_test_fun_u8lyz1);
    test('config_validates_inputs', false, test_fun$GameTest_test_fun$config_validates_inputs_test_fun_m3vrpp);
    test('players_alternate', false, test_fun$GameTest_test_fun$players_alternate_test_fun_o6zbm6);
    test('last_move_tracks_landing_position', false, test_fun$GameTest_test_fun$last_move_tracks_landing_position_test_fun_q5koco);
    return Unit_getInstance();
  }
  function test_fun$GameTest_test_fun$gravity_pieces_stack_from_bottom_test_fun_ofs8qv() {
    var tmp = new GameTest();
    tmp.gravity_pieces_stack_from_bottom_579lf4_k$();
    return Unit_getInstance();
  }
  function test_fun$GameTest_test_fun$horizontal_win_classic_test_fun_dqx1kj() {
    var tmp = new GameTest();
    tmp.horizontal_win_classic_ww2gjg_k$();
    return Unit_getInstance();
  }
  function test_fun$GameTest_test_fun$vertical_win_test_fun_g9i8oc() {
    var tmp = new GameTest();
    tmp.vertical_win_82sdkz_k$();
    return Unit_getInstance();
  }
  function test_fun$GameTest_test_fun$diagonal_win_down_right_test_fun_cf6lvz() {
    var tmp = new GameTest();
    tmp.diagonal_win_down_right_h61jb8_k$();
    return Unit_getInstance();
  }
  function test_fun$GameTest_test_fun$configurable_win_length_five_test_fun_65fr0l() {
    var tmp = new GameTest();
    tmp.configurable_win_length_five_3mha5u_k$();
    return Unit_getInstance();
  }
  function test_fun$GameTest_test_fun$win_length_four_does_not_trigger_with_only_three_test_fun_t4aad5() {
    var tmp = new GameTest();
    tmp.win_length_four_does_not_trigger_with_only_three_ys74ji_k$();
    return Unit_getInstance();
  }
  function test_fun$GameTest_test_fun$cannot_drop_into_full_column_test_fun_9yur1o() {
    var tmp = new GameTest();
    tmp.cannot_drop_into_full_column_c6ajfv_k$();
    return Unit_getInstance();
  }
  function test_fun$GameTest_test_fun$draw_when_board_fills_with_no_winner_test_fun_gdzsz3() {
    var tmp = new GameTest();
    tmp.draw_when_board_fills_with_no_winner_a71y5i_k$();
    return Unit_getInstance();
  }
  function test_fun$GameTest_test_fun$moves_blocked_after_game_over_test_fun_u8lyz1() {
    var tmp = new GameTest();
    tmp.moves_blocked_after_game_over_bw0qta_k$();
    return Unit_getInstance();
  }
  function test_fun$GameTest_test_fun$config_validates_inputs_test_fun_m3vrpp() {
    var tmp = new GameTest();
    tmp.config_validates_inputs_usfqvs_k$();
    return Unit_getInstance();
  }
  function test_fun$GameTest_test_fun$players_alternate_test_fun_o6zbm6() {
    var tmp = new GameTest();
    tmp.players_alternate_qkjyal_k$();
    return Unit_getInstance();
  }
  function test_fun$GameTest_test_fun$last_move_tracks_landing_position_test_fun_q5koco() {
    var tmp = new GameTest();
    tmp.last_move_tracks_landing_position_ldr377_k$();
    return Unit_getInstance();
  }
  //region block: init
  GameTest$stable = 0;
  //endregion
  //region block: tests
  (function () {
    suite('', false, function () {
      test_fun_izoufj();
    });
  }());
  //endregion
  return _;
}));
