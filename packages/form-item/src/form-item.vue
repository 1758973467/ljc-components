<template>
  <div class="ljc-form-item">
    <label :for="prop">{{ label }}</label>
    <div>
      <p v-if="errmessage">{{ errmessage }}</p>
      <slot />
    </div>
  </div>
</template>

<script>
import Schema from "async-validator";

export default {
  name: "ljc-form-item",
  props: {
    label: {
      type: String,
    },
    prop: {
      type: String,
    },
  },
  inject: ["form"],
  data() {
    return {
      errmessage: "",
    };
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
  },
  beforeDestroy() {
    this.$off("validate");
  },
  methods: {
    validate() {
      if (!this.prop) {
        return true;
      }
      const validator = new Schema({
        [this.prop]: this.form.rules[this.prop],
      });
      return validator
        .validate({ [this.prop]: this.form.model[this.prop] })
        .then(() => {
          this.errmessage = "";
          return Promise.resolve();
        })
        .catch(({ errors }) => {
          this.errmessage = errors[0].message;
          return Promise.reject();
        });
    },
  },
};
</script>

<style>
</style>