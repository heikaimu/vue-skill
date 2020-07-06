<template>
  <div>
    <h2>Provide Inject祖宗传值</h2>
    <custom-form
      size="large"
    >
      <custom-form-item>
        <custom-input
          v-model="text"
          size="mini"
        />
      </custom-form-item>
      <custom-form-item>
        <custom-input
          v-model="text"
          size="small"
          :disabled="false"
        />
      </custom-form-item>
      <custom-form-item>
        <custom-input
          v-model="text"
        />
      </custom-form-item>
    </custom-form>
  </div>
</template>

<script>
import CustomForm from '../components/form/CustomForm';
import CustomFormItem from '../components/form/CustomFormItem';
import CustomInput from '../components/form/CustomInput';
export default {
  name: 'ProvideAndInject',
  components: {
    CustomForm,
    CustomFormItem,
    CustomInput
  },
  data() {
    return {
      text: ''
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
