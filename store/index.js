import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		openUrl:null
	},
    mutations: {
		openWebview(state, a) {
			this.state.openUrl = a
		},		
	},
})

export default store