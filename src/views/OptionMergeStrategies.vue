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
  }
};
</script>

<style lang="scss" scoped>
</style>
