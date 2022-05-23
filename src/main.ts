import { createApp } from "vue";
import { router } from "@/router";
import App from "@/App.vue";
import "@unocss/reset/tailwind.css";
import "uno.css";

const app = createApp(App);
app.use(router);

router.isReady().then(() => {
    app.mount("#app");
});
