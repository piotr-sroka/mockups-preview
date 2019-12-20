// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import SlimDialog from "v-slim-dialog";
import "v-slim-dialog/dist/v-slim-dialog.css";
import Vue2TouchEvents from "vue2-touch-events";

Vue.config.productionTip = false;

Vue.use(SlimDialog);
Vue.use(Vue2TouchEvents);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
