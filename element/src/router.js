import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Admin from './views/Admin.vue'
import Button from './views/Button.vue'
import Radio from './views/Radio.vue'
import CheckBox from './views/CheckBox.vue'
import Input from './views/Input.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
		path: '/',
		name: 'home',
		component: Home
	}, {
		path: '/admin',
		name: 'admin',
		component: Admin,
		children: [{
			path: 'button',
			name: 'button',
			component: Button
		}, {
			path: 'radio',
			name: 'radio',
			component: Radio
		}, {
			path: 'checkbox',
			name: 'checkbox',
			component: CheckBox
		}, {
			path: 'input',
			name: 'input',
			component: Input
		}]
	}, {
		path: '/login',
		name: 'login',
		component: Login
	}, ]
})