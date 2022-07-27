<template>
  <form>
    <slot />
  </form>
</template>

<script>
export default {
  name: "ljc-form",
  props: {
    model: {
      type: Object,
    },
    rules: {
      type: Object,
    },
  },
  provide() {
    return {
      form: this,
    };
  },
  methods: {
    validate(cb) {
      const tasks = this.$children
        .filter((child) => child.prop)
        .map((item) => item.validate());
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    },
  },
};
</script>

<style>
</style>