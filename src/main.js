import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

import "vue-flex/dist/vue-flex.css";
import Vuelidate from "vuelidate";
import VueFlex from "vue-flex";

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(Vuelidate);
Vue.use(VueMaterial);
Vue.use(VueFlex);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
