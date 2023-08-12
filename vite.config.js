import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
import postCssPxToRem from "postcss-pxtorem";
import { defineConfig, loadEnv } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite 配置
    define: {
      PROXY_NAME: env.VITE_PROXY_NAME,
    },
    plugins: [
      vue(),
      Components({
        resolvers: [VantResolver()],
      }),
      vueJsx()
    ],
    // envPrefix: "APP_", // 自定义环境变量前缀
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
        PROXY_NAME: {
          target: env.VITE_API_HOST, // 接口的域名
          secure: false, // 如果是https接口，需要配置这个参数
          changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
          rewrite: (path) => {
            return path.replace(/^\/api/, "/")
          },
        },
      },
    },
  }
})