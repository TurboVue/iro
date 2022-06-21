<template>
  <div v-if="needRefresh" class="pwa-toast" role="alert">
    <div class="pwa-toast--update" v-if="needRefresh">
      <i class="icon icon-loading"></i>
      <a v-t="'pwa.update_ready'" style="cursor: pointer" @click="onUpdate"></a>
    </div>
  </div>
</template>

<script setup>
import {watch} from 'vue';
import {useI18n} from "vue-i18n";

import { useRegisterSW } from "virtual:pwa-register/vue";

const { t } = useI18n();

// replaced dyanmicaly
const reloadSW = import.meta.env.PROD
const {
  offlineReady,
  needRefresh,
  updateServiceWorker,
} = useRegisterSW({
  immediate: true,
  onRegistered(r) {
    if (reloadSW) {
      r && setInterval(async() => {
        // eslint-disable-next-line no-console
        console.log('Checking for sw update')
        await r.update()
      }, 20000 /* 20s for testing purposes */)
    }
    else {
      // eslint-disable-next-line no-console
      console.log(`SW Registered: ${r}`)
    }
  },
})
const onUpdate = () => {
  navigator.serviceWorker.getRegistration('/prompt-sw.js').then((registration) => {
    if (registration?.waiting?.state === 'installed')
      updateServiceWorker(true)
    else
      window.location.reload()

  })
}
</script>

<style lang="scss">
.pwa-toast {
  position: fixed;
  right: 64px;
  bottom: 142px;
  border-radius: 4px;
  z-index: 1;

  .pwa-toast--offline,
  .pwa-toast--update {
    box-shadow: var(--box-shadow);
    background-color: var(--darken-color);
    color: white;
    display: flex;
    align-items: center;
    border-radius: 1rem;
    padding: 0.8rem;
    margin-bottom: 0.8rem;

    font-size: 0.8rem;
    i.icon {
      display: inline-flex;
      margin-right: 0.4rem;
    }
  }
}

@media only screen and (max-width: 768px) {
  .pwa-toast {
    bottom: unset;
    top: 2rem;
    right: 0;

    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>