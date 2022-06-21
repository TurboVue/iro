import { createApp } from "vue";
import { createPinia } from "pinia";

import { isRunningOnPWA } from "@src/services/utils";
import App from "@src/App.vue";

import "notyf/notyf.min.css";
import "@src/styles/style.scss";

import router from "@src/router";
import i18n from "@src/i18n";
// import OneSignalVuePlugin from "@onesignal/onesignal-vue3";

const app = createApp(App);
const pinia = createPinia();

app
  .use(pinia)
  .use(i18n)
  .use(router)
    // .use(OneSignalVuePlugin, {
    //     appId: import.meta.env.DEV ? 'c7083d7c-fb82-4711-a01f-81efe58f727e' :'a1ef5439-43f2-453e-8200-fc5400a92e92',
    //     allowLocalhostAsSecureOrigin: true,
    //     persistNotification: true,
    // })

if (isRunningOnPWA()) window.resizeTo(400, 800);

app.mount("#app");
