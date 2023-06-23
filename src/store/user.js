import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user", // id必填，且需要唯一
  state: () => {
    return {
      name: "perchecc",
      fieldInfo: ''
    };
  },
  actions: {
    updateName(name) {
      this.name = name;
    },
    updateFieldInfo(fieldInfo) {
      this.fieldInfo = fieldInfo
    },
  },
  getters: {
    getterFullName: (state) => {
      return state.name + "丰";
    },
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [
      {
        key: "vant-v4-user",
        storage: localStorage,
      },
    ],
  },
});
