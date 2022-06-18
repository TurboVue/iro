import { createApp } from "vue";
import { createPinia } from "pinia";

import { isRunningOnPWA } from "@src/services/utils";
import App from "@src/App.vue";

import "notyf/notyf.min.css";
import "@src/styles/style.scss";

import router from "@src/router";
import i18n from "@src/i18n";
import OneSignalVuePlugin from "@onesignal/onesignal-vue3";

const app = createApp(App);
const pinia = createPinia();

app
  .use(pinia)
  .use(i18n)
  .use(router)
    .use(OneSignalVuePlugin, {
        appId: '0e2742c8-4370-4441-88f7-8a172a5baa5a',
        allowLocalhostAsSecureOrigin: true
    })

if (isRunningOnPWA()) window.resizeTo(400, 800);

app.mount("#app");
