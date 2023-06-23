<template>
  <div class="scheme-incomplete-wrapper">
    <p>田信息不完整</p>
    <button @click="skipToMpFieldEditPage"><van-count-down :time="time" format="ss 秒后自动跳转" @finish="onFinish" /></button>
  </div>
</template>

<script>
import { ref, defineProps, reactive } from "vue";
import { showToast } from "vant";
import { navigateTo } from "utils/wxjssdk";

export default {
  name: "schemeIncomplete",
  setup() {
    const props = defineProps({
      fieldId: String,
      default: "",
    });

    const time = ref(5 * 1000);
    const actionStatus = reactive({
      isClick: false,
    });

    const onFinish = () => {
      if (!actionStatus.isClick) skipToMpFieldEditPage();
    };

    const skipToMpFieldEditPage = () => {
      actionStatus.isClick = true;
      // TODO 跳转到小程序田详情编辑页
      // showToast("跳转到小程序田详情编辑页");
      navigateTo({
        url: `/pages/field/fieldEdit?fieldId=${1}`,
      });
    };

    return { time, onFinish, skipToMpFieldEditPage };
  },
};
</script>

<style lang="scss" scoped>
.scheme-incomplete-wrapper {
  width: 100vw;
  height: 100vh;
}
</style>
