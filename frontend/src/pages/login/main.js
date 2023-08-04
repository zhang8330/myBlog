import {createApp} from "vue";
import App from "@/pages/login/App.vue";
import router from "@/pages/login/router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount("#app");