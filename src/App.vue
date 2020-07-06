<!--
 * @Description:
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2020-07-06 17:28:58
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2020-07-06 17:29:27
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link
        v-for="item in ViewConfig"
        :key="item.path"
        :to="item.path"
      >{{ item.name }}</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import ViewConfig from './views';
export default {
  data() {
    return {
      ViewConfig
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
