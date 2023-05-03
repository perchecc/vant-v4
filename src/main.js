import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "assets/style/main.css";

// 计算设置rem的基准值，即html的font-size
import "amfe-flexible";

const app = createApp(App);

// Toast
import "vant/es/toast/style";
// Dialog
import "vant/es/dialog/style";
// Notify
import "vant/es/notify/style";
// ImagePreview
import "vant/es/image-preview/style";

app.use(router);
// app.use(showToast);
// app.use(showDialog);
// app.use(showNotify);
// app.use(showImagePreview);

app.mount("#app");
