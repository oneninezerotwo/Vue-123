<<<<<<< HEAD
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
=======
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'lib-flexible/flexible'
Vue.prototype.$axios = axios;
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
Vue.use(VueResource);
Vue.use(VueRouter); 


Vue.config.productionTip = false
>>>>>>> a3c946ec3bc66720be29a54605a05624964a5ec2

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
