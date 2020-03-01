<template>
  <div>
    <v-toolbar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link to="/">
        <v-toolbar-title>Template</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-badge right class="mr-3">
        <span slot="badge">6</span>
        <v-icon color="grey lighten-1">mdi-cart-outline</v-icon>
      </v-badge>
      <div class="hidden-sm-and-down">
        <router-link to="/">
          <v-btn flat class="ml-3">Home</v-btn>
        </router-link>
        <router-link to="/contact">
          <v-btn flat class="ml-3 mr-3">Contact</v-btn>
        </router-link>
        <router-link to="/login">
          <v-btn flat>Login</v-btn>
        </router-link>
      </div>
      <div class="hidden-md-and-up">
        <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
          height="300px"
          width="100%"
        >
          <v-list-item>
            <v-list-item-avatar>
              <img src="./me1.jpg" alt="" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Robin</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
              router
              :to="item.route"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </div>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-home", route: "/" },
        { title: "Contact", icon: "mdi-comment-multiple", route: "/contact" },
        { title: "Login", icon: "mdi-login-variant", route: "/login" }
      ]
    };
  }
};
</script>
<style scoped>
.v-application a {
  text-decoration: none;
  color: black !important;
}
</style>
