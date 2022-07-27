<template>
  <input :type="type" :placeholder="placeholder" @input="handleInput" />
</template>

<script>
export default {
  name: "lj-input",
  props: {
    /**
     * 输入框类型
     */
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
    },
    value: {
      type: String,
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style>
</style>