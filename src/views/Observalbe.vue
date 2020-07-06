<template>
  <div>
    <h2>小型项目中，用Observeable代替Vuex</h2>
    <observable-comp-one />
    <observable-comp-two />
  </div>
</template>

<script>
import ObservableCompOne from '../components/ObservableCompOne';
import ObservableCompTwo from '../components/ObservableCompTwo';
export default {
  name: 'Observalbe',
  components: {
    ObservableCompOne,
    ObservableCompTwo
  }
};
</script>

<style lang="scss" scoped>

</style>
