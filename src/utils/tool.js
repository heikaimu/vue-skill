/*
 * @Description:
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2020-07-06 17:57:17
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2020-07-06 18:30:27
 */

/**
 * 防抖
 * @param {*} fun
 * @param {*} delay
 */
export const debounce = (fun, delay) => {
  let timer;
  return function() {
    const _this = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun.call(_this, args);
    }, delay);
  };
};

/**
 * 节流
 * @param {*} fun
 * @param {*} delay
 */
export const throttle = (fun, delay) => {
  var last = 0;
  return function() {
    var now = new Date();
    if (now - last > delay) {
      fun.call(this, arguments);
      last = now;
    }
  };
};

