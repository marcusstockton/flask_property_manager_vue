import Vue from "vue";
import Vuex from "vuex";

import { alert } from "./modules/alert.module";
import { authentication } from "./modules/authentication-module";
import { user } from "./modules/user-module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    alert,
    authentication,
    user,
  },
});
