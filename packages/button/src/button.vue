<template>
  <button @click="handleClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: "ljc-button",
  props: {},
  methods: {
    handleClick(e) {
      e.preventDefault();
      this.$emit("click", e);
    },
  },
};
</script>

<style>
</style>