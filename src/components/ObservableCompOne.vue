<template>
  <div>
    组件1展示浏览次数： {{ views }}
  </div>
</template>

<script>
import { state } from '../store/observeable.store';
export default {
  computed: {
    views() {
      return state.views;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
