<template>
  <div
    class="custom-input"
    :class="[
      `custom-input--${getSize}`
    ]"
  >
    <input
      type="text"
      class="custom-input__input"
      :value="value"
    >
  </div>
</template>

<script>
export default {
  model: {
    prop: 'input',
    event: 'update'
  },
  props: {
    input: {
      type: String,
      default: ''
    },
    size: {
      type: String
    }
  },
  data() {
    return {
      value: ''
    };
  },
  inject: ['customForm'],
  computed: {
    getSize() {
      return this.size || this.customForm.size;
    }
  },
  watch: {
    input: {
      handler: function(val) {
        this.value = val;
      },
      immediate: true
    },
    value(val) {
      this.$emit('update', val);
    }
  }
};
</script>

<style lang="scss" scoped>
.custom-input {
  .custom-input__input {
    border: 1px solid #e7e7e7;
    border-radius: 4px;
    font-size: #666;
    text-indent: 10px;
    outline: none;
  }
  &.custom-input--default {
    .custom-input__input {
      height: 30px;
      font-size: 16px;
    }
  }
  &.custom-input--large {
    .custom-input__input {
      height: 40px;
      font-size: 18px;
    }
  }
  &.custom-input--small {
    .custom-input__input {
      height: 24px;
      font-size: 14px;
    }
  }
  &.custom-input--mini {
    .custom-input__input {
      height: 20px;
      font-size: 12px;
    }
  }
}
</style>
