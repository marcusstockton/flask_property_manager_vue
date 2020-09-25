<template>
  <div id="app">
    <md-tabs md-sync-route>
      <md-tab id="tab-home" md-icon="home" to="/" exact> </md-tab>
      <md-tab id="tab-pages" md-label="About" to="/about"> </md-tab>
      <md-tab id="tab-posts" md-label="Portfolios" to="/portfolios"> </md-tab>
      <md-tab v-if="!isLoggedIn" id="tab-login" md-label="Login" to="/login">
      </md-tab>
      <md-tab
        v-if="!isLoggedIn"
        id="tab-favorites"
        md-label="Register"
        to="/register"
      >
      </md-tab>
      <md-tab
        v-if="isLoggedIn"
        id="tab-favorites"
        md-label="Logout"
        v-on:click="logout"
      >
      </md-tab>
    </md-tabs>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "app",
  computed: {
    ...mapState({
      isLoggedIn: state => state.authentication.status.loggedIn
    }),
    alert() {
      return this.$store.state.alert;
    }
  },
  watch: {
    $route() {
      // clear alert on location change
      this.$store.dispatch("alert/clear");
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("authentication/logout");
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
