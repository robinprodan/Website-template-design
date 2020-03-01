<template>
  <div>
    <v-app>
      <app-toolbar
        style="z-index: 9999999;
    position: relative;"
      >
      </app-toolbar>
      <router-view> </router-view>
      <app-footer> </app-footer>
    </v-app>
  </div>
</template>
<script>
import AppToolbar from "./components/AppToolbar";
import AppFooter from "./components/AppFooter";

export default {
  name: "App",
  components: {
    AppToolbar,
    AppFooter
  },

  data: () => ({})
};
</script>
