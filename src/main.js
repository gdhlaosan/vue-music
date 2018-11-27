import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'

// require styles
import './assets/styles/reset.css'
import './assets/styles/border.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
	loading: require('@/assets/images/default.png')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
