<template>
  <form class="custom-form">
    <slot />
  </form>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'default',
      validator(val) {
        return ['default', 'large', 'small', 'mini'].includes(val);
      }
    }
  },
  provide() {
    return {
      customForm: this
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
