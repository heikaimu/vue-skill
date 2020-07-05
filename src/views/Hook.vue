<template>
  <div>
    <h2>Hook可以在内部监听生命周期，也可以监听子组件的生命周期</h2>
    <test-hook @hook:mounted="childMounted" />
  </div>
</template>

<script>
import TestHook from '../components/TestHook';
export default {
  name: 'Hook',
  components: {
    TestHook
  },
  pageHidden() {
    console.log('页面隐藏了1');
  },
  pageVisible() {
    console.log('页面展示了1');
  },
  mounted() {
    console.log('进入组件');
    window.addEventListener('resize', this.$_windowResize);
    this.$once('hook:beforeDestroy', () => {
      console.log('组件被销毁');
      window.removeEventListener('resize', this.$_windowResize);
    });
  },
  methods: {
    $_windowResize() {
      console.log(window.innerWidth);
    },
    childMounted() {
      console.log('子组件执行mounted');
    }
  }
};
</script>
