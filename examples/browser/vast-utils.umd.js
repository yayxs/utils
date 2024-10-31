(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.vastUtils = {}));
}(this, (function (exports) { 'use strict';

  var utilName = "vastUtils";
  var version = "0.1.0";

  /**
   *
   * @desc 判断一个元素是否是数组
   * @param {} targetArr
   * @return {Boolean}
   */
  function isArray(targetArr) {
    return true;
  }

  var isHttpsMailtoTel = function isHttpsMailtoTel(path) {
    return /^(https?:mailto:|tel)/.test(path);
  };
  var isStart = function isStart(target) {
    var regexp = /^\d\d:\d\d$/;
    return regexp.test(target);
  };
  var isGuoNeiCall = function isGuoNeiCall(target) {
    // 0370-3731666 或者 021-87888822
    var regexp = /\d{3}-\d{8}|\d{4}-\d{7}/;
    return regexp.test(target);
  };

  exports.isArray = isArray;
  exports.isGuoNeiCall = isGuoNeiCall;
  exports.isHttpsMailtoTel = isHttpsMailtoTel;
  exports.isStart = isStart;
  exports.utilName = utilName;
  exports.version = version;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
