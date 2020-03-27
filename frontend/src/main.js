import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "./i18n";

/**
 * FORM VALIDATION
 */
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize
} from "vee-validate";
import { required, email, min, is } from "vee-validate/dist/rules";
import de from "vee-validate/dist/locale/de.json";

extend("required", required);
extend("email", email);
extend("is", is);
extend("min", min);
localize("de", de);
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

/**
 * SERVER REQUEST HTTPC CLIENT
 */
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = "http://localhost:3000";
} else {
  axios.defaults.baseURL = "https://api.hausmeister.com";
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
