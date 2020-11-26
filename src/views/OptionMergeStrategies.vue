<!--
 * @Description:
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2020-07-06 17:28:58
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2020-07-06 17:55:38
-->
<template>
  <div>
    <h2>Vue合并策略实现自定义生命周期</h2>
  </div>
</template>

<script>
export default {
  name: 'OptionMergeStrategies',
  pageHidden() {
    console.log('页面隐藏了2');
  },
  pageVisible() {
    console.log('页面展示了2');
  },
  windowResize(val) {
    console.log(val);
  }
};
</script>

<style lang="scss" scoped>
</style>
