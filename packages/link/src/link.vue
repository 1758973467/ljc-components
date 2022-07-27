<template>
  <a
    :href="disabled ? null : href"
    :class="[disabled && 'disabled', !underline && 'no-underline']"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: "lj-Link",
  props: {
    href: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    underline: {
      type: Boolean,
      default: false,
    },
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
.disabled {
  cursor: not-allowed;
}

.no-underline {
  text-decoration: none;
}
</style>