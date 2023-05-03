<template>
  <div class="demo">我是十四</div>
  <van-button type="primary" size="large" @click="showHello"
    >大号按钮</van-button
  >
</template>

<script>
import { reactive, toRefs } from "vue";
import { showToast } from "vant";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    const showHello = () => {
      //   alert("nihao");
      showToast("nihao");
    };

    return {
      ...toRefs(state),
      showHello,
    };
  },
};
</script>

<style scoped lang="scss">
.demo {
  width: 100px;
  height: 100px;
  background-color: aquamarine;
}

div {
  /*就是如此简单*/
  background-color: $color-green;
}
</style>
