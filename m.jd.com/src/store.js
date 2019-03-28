import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	// 所有的状态
	state: {
		isLogin: window.sessionStorage.getItem('isLogin')=='true'?true:false,
	},
	// 状态修改的函数
	mutations: {
		// 修改登录状态
		setLoginState(state, flag = false) {
			state.isLogin = flag;
			// 会话储存
			window.sessionStorage.setItem('isLogin',flag);
		}
	},
	actions: {

	}
})