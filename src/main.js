import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "reset-css";
import "./assets/js/rem.js";
import "./assets/sass/global.scss";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
