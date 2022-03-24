import { createApp } from "vue";
import { router } from "@/router";
import App from "@/App.vue";
import "virtual:windi.css";
import "virtual:windi-devtools";

const app = createApp(App);
app.use(router);

router.isReady().then(() => {
    app.mount("#app");
});
