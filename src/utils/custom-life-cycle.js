import Vue from 'vue';

const notifyVisibilityChange = (lifeCycleName, vm) => {
  const lifeCycles = vm.$options[lifeCycleName];
  if (lifeCycles && lifeCycles.length) {
    // 遍历所有生命周期，然后依次执行
    lifeCycles.forEach(lifecycle => {
      lifecycle.call(vm);
    });
  }

  // 遍历子组件
  if (vm.$children && vm.$children.length) {
    vm.$children.forEach(child => {
      notifyVisibilityChange(lifeCycleName, child);
    });
  }
};

/**
 * 添加生命周期钩子函数
 */
export const init = () => {
  const optionMergeStrategies = Vue.config.optionMergeStrategies;
  // 表示合并方策略和其他生命周期钩子函数一样
  optionMergeStrategies.pageVisible = optionMergeStrategies.created;
  optionMergeStrategies.pageHidden = optionMergeStrategies.created;
};

/**
 * 给vm根节点绑定visibility事件
 * @param {*} rootVm
 */
export const bind = (rootVm) => {
  window.addEventListener('visibilitychange', () => {
    let lifeCycleName;
    if (document.visibilityState === 'hidden') {
      lifeCycleName = 'pageHidden';
    } else if (document.visibilityState === 'visible') {
      lifeCycleName = 'pageVisible';
    }
    if (lifeCycleName) {
      notifyVisibilityChange(lifeCycleName, rootVm);
    }
  });
};
