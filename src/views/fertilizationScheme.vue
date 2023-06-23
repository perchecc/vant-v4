<template>
  <div class="scheme-wrapper">
    <!-- <component :is="componentName" :fieldId="fieldId"></component> -->
    <schemeDisplayVue v-if="componentName == 'schemeDisplayVue'" :fieldId="field.fieldId"></schemeDisplayVue>
    <schemeIncompleteVue v-else="componentName == 'schemeIncompleteVue'" :fieldId="field.fieldId"></schemeIncompleteVue>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref } from "vue";
import schemeDisplayVue from "./schemeDisplay.vue";
import schemeIncompleteVue from "./schemeIncomplete.vue";
import { useRoute } from "vue-router";

export default {
  components: {
    schemeDisplayVue,
    schemeIncompleteVue,
  },
  setup() {
    const field = reactive({
      fieldInfo: "",
      fieldId: "",
    });

    // 获取田详情信息
    function getFieldInfo(fieldId) {
      // TODO 模拟fetch
      // console.log(fieldId);
      field.fieldInfo = Math.random() > 0.1 ? "" : "1231231";
    }

    onMounted(() => {
      console.log("加载时间---" + new Date().toString());
      // const route = useRoute();
      // field.fieldId = route.query.fieldId;
      getFieldInfo();
    });

    // 计算属性 展示的组件名称
    // 如果有田详情信息，就直接展示施肥方案组件；
    // 若田详情信息不完整，就展示跳转倒计时页
    const componentName = computed(() => {
      return field.fieldInfo != "" ? "schemeDisplayVue" : "schemeIncompleteVue";
    });

    return {
      field,
      componentName,
    };
  },
};
</script>

<style lang="scss" scoped></style>
