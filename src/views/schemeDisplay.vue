<template>
  <div class="scheme-display-wrapper">
    <p>展示页</p>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from "vue";

export default {
  name: "schemeDisplay",
  setup() {
    const time = ref(10 * 1000);
    return { time };
  },
};
</script>

<style lang="scss" scoped>
.scheme-display-wrapper {
  width: 100vw;
  height: 100vh;
}
</style>
