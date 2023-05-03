import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";

import postCssPxToRem from "postcss-pxtorem";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      assets: "@/assets",
      utils: "@/utils",
      api: "@/api",
      components: "@/components",
    },
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          // rootValue: 37.5,
          rootValue({ file }) {
            return file.indexOf("vant") !== -1 ? 37.5 : 75;
          },
          propList: ["*"],
        }),
      ],
    },
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 引入 mixin.scss 这样就可以在全局中使用 mixin.scss中预定义的变量了
        // 给导入的路径最后加上 ;
        additionalData: '@import "@/assets/style/mixin.scss";',
      },
    },
  },
  server: {
    proxy: {
      "/v1": {
        target: "http://localhost:8001",
      },
    },
  },
});
