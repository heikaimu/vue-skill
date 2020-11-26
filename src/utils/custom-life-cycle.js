/*
 * @Description:
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2020-07-06 17:28:58
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2020-07-06 18:31:26
 */
import Vue from 'vue';
import { throttle } from '../utils/tool';

/**
 * 窗口显示或隐藏
 * pageHidden,pageVisible
 * @param {*} vm
 * @param {*} lifeCycleName
 */
const notifyVisibilityChange = (vm, lifeCycleName) => {
  const lifeCycles = vm.$options[lifeCycleName];

  if (lifeCycles && lifeCycles.length) {
    lifeCycles.forEach(lifecycle => {
      lifecycle.call(vm);
    });
  }
  if (vm.$children && vm.$children.length) {
    vm.$children.forEach(child => {
      notifyVisibilityChange(child, lifeCycleName);
    });
  }
};

/**
 * 窗口尺寸变化
 * windowResize
 * @param {*} vm
 * @param {*} lifeCycleName
 */
const notifyWindowResize = (vm, lifeCycleName, windowWidth) => {
  const lifeCycles = vm.$options[lifeCycleName];

  if (lifeCycles && lifeCycles.length) {
    lifeCycles.forEach(lifecycle => {
      lifecycle.call(vm, windowWidth);
    });
  }
  if (vm.$children && vm.$children.length) {
    vm.$children.forEach(child => {
      notifyWindowResize(child, lifeCycleName, windowWidth);
    });
  }
};

/**
 * 添加新的生命周期钩子函数
 */
export const init = () => {
  const optionMergeStrategies = Vue.config.optionMergeStrategies;
  // 添加窗口隐藏、显示的生命周期钩子函，合并策略同其他生命周期钩子函数一致
  optionMergeStrategies.pageHidden = optionMergeStrategies.created;
  optionMergeStrategies.pageVisible = optionMergeStrategies.created;
  // 添加窗口尺寸变化生命周期钩子
  optionMergeStrategies.windowResize = optionMergeStrategies.created;
};

/**
 * 事件触发后从根结点开始通知
 * @param {*} rootVm 根节点
 */
export const bind = (rootVm) => {
  // 判断窗口是否显示
  window.addEventListener('visibilitychange', () => {
    let lifeCycleName;
    if (document.visibilityState === 'hidden') {
      lifeCycleName = 'pageHidden';
    } else if (document.visibilityState === 'visible') {
      lifeCycleName = 'pageVisible';
    }

    if (lifeCycleName) {
      notifyVisibilityChange(rootVm, lifeCycleName);
    }
  });

  // 窗口变化，添加节流函数
  window.addEventListener('resize', throttle(function() {
    notifyWindowResize(rootVm, 'windowResize', window.innerWidth);
  }, 300));
};

