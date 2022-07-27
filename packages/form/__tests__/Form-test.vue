<template>
  <div id="app">
    <LJCForm
      :model="model"
      :rules="rules"
      ref="ruleForm"
      class="demo-form-inline"
    >
      <LJCFormItem label="审批人" prop="user">
        <LJCInput v-model="model.user" placeholder="审批人" />
      </LJCFormItem>
      <LJCFormItem label="活动区域" prop="region">
        <LJCInput v-model="model.region" placeholder="活动区域" />
      </LJCFormItem>
      <LJCFormItem>
        <LJCButton type="primary" @click="onSubmit">查询</LJButton>
      </LJCFormItem>
    </LJCForm>
  </div>
</template>

<script>
import LJCButton from "../../button/src/button.vue";
import LJCInput from "../../input/src/input.vue";
import LJCFormItem from "../../form-item/src/form-item.vue";
import LJCForm from "../src/form.vue";
export default {
  name: "App",
  components: {
    LJCForm,
    LJCFormItem,
    LJCInput,
    LJCButton,
  },
  data() {
    return {
      model: {
        user: "",
        region: "",
      },
      rules: {
        user: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          console.log("submit!");
        } else {
          console.warn("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>


