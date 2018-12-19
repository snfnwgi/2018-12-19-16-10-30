import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
import store from './store'
Vue.prototype.$store = store

App.mpType = 'app'
import func from './common/function.js' 
Vue.use(func); 
const app = new Vue({
    store,
    ...App
})
app.$mount()