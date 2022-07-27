<template>
  <div class="lj-steps">
    <div class="line"></div>
    <div
      class="circle"
      :style="{
        color: active >= index ? activeColor : defaultColor,
      }"
      v-for="index in count"
      :key="index"
    >
      <span>{{ index }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "lj-steps",
  props: {
    count: {
      type: Number,
      default: 4,
    },
    active: {
      type: Number,
      default: 3,
    },
    activeColor: {
      type: String,
      default: "red",
    },
    defaultColor: {
      type: String,
      default: "green",
    },
  },
};
</script>

<style lang='scss' scope>
$size: 50px;
.lj-steps {
  position: relative;
  display: flex;
  justify-content: space-between;
  .line {
    position: absolute;
    height: 2px;
    z-index: 1;
    top: 50%;
    left: 24px;
    right: 24px;
    transform: translateY(-50%);
    background: rgb(223, 231, 239);
  }
  .circle {
    border: 2px solid;
    border-radius: 50%;
    height: 32px;
    width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    z-index: 2;
    background-color: white;
    box-sizing: border-box;
    transition: color 1s;
  }
}
</style>