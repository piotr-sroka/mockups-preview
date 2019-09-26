// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import SlimDialog from 'v-slim-dialog'
import 'v-slim-dialog/dist/v-slim-dialog.css'

Vue.config.productionTip = false

Vue.use(SlimDialog)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
