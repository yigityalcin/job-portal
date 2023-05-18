// main.js

import Vue from "vue";
import App from "./App.vue";
import store from "./store";
// eslint-disable-next-line
import firebase from "./firebase/firebase";



Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
