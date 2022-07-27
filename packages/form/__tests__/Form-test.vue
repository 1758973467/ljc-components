<template>
  <div id="app">
    <LJForm
      :model="model"
      :rules="rules"
      ref="ruleForm"
      class="demo-form-inline"
    >
      <LJFormItem label="审批人" prop="user">
        <LJInput v-model="model.user" placeholder="审批人" />
      </LJFormItem>
      <LJFormItem label="活动区域" prop="region">
        <LJInput v-model="model.region" placeholder="活动区域" />
      </LJFormItem>
      <LJFormItem>
        <LJButton type="primary" @click="onSubmit">查询</LJButton>
      </LJFormItem>
    </LJForm>
  </div>
</template>

<script>
import LJButton from "../../button/src/button.vue";
import LJInput from "../../input/src/input.vue";
import LJFormItem from "../../form-item/src/form-item.vue";
import LJForm from "../src/form.vue";
export default {
  name: "App",
  components: {
    LJForm,
    LJFormItem,
    LJInput,
    LJButton,
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


