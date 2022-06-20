<template>
  <AppHeader />
  
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" :key="$route.name"/>
    </keep-alive>
  </router-view>

  <ReloadPrompt />
</template>

<script>
import { Notyf } from 'notyf';
import AppHeader from "@src/components/AppHeader.vue";
import ReloadPrompt from "@src/components/ReloadPrompt.vue";

const NotfyProvider = new Notyf({
  duration: 2000,
  position: {
    x: 'center',
    y: 'bottom'
  }
})

export default {
  name: "App",
  components: {
    AppHeader,
    ReloadPrompt
  },
  provide: {
    notyf: NotfyProvider
  },
  mounted() {
    let Notification = window.Notification || window.webkitNotifications
    if (Notification.permission === 'granted') {

    } else {
      Notification.requestPermission().then( (permission)=>{
        if(permission === 'granted'){
          // 弹出消息
        }
      })
    }
    this.$OneSignal.showSlidedownPrompt();
    this.$OneSignal.registerForPushNotifications();
    // this.$OneSignal.showNativePrompt();
    this.$OneSignal.on("permissionPromptDisplay", (e) => {
      console.warn("permissionPromptDisplay", e)
    })
    this.$OneSignal.on("subscriptionChange", e => {
      console.warn("subscriptionChange", e);
    })
    this.$OneSignal.on("notificationDisplay", e => {
      console.warn("notificationDisplay", e);
    })
    this.$OneSignal.on("notificationDismiss", e => {
      console.warn("notificationDismiss", e);
    })
    this.$OneSignal.isPushNotificationsEnabled(function(isEnabled) {
      if (isEnabled)
        console.log("Push notifications are enabled!");
      else
        console.log("Push notifications are not enabled yet.");
    })
    this.$OneSignal.getNotificationPermission(function(permission) {
      console.log("Site Notification Permission:", permission);
      // (Output) Site Notification Permission: default
    })
    this.$OneSignal.on('notificationPermissionChange', function(permissionChange) {
      var currentPermission = permissionChange.to;
      console.log('New permission state:', currentPermission);
    });
  }
}
</script>
