<!--
 * @Description:
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2020-07-06 18:21:44
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2020-07-06 18:25:17
-->
<template>
  <div>
    <h2>节流与防抖</h2>
    <input
      type="text"
      @input="inputChange"
    >
  </div>
</template>

<script>
import { debounce } from '../utils/tool';
export default {
  name: 'DebounceAndThrottle',
  methods: {
    inputChange: debounce(function() {
      console.log('开始搜索');
    }, 500)
  }
};
</script>

<style lang="scss" scoped>

</style>
