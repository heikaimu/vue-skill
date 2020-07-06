<template>
  <div>
    组件2操作浏览次数： <button @click="addOne">+1</button>
  </div>
</template>

<script>
import { state, mutations } from '../store/observeable.store';
export default {
  computed: {
    views() {
      return state.views;
    }
  },
  methods: {
    addOne() {
      mutations.setViews(this.views + 1);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
