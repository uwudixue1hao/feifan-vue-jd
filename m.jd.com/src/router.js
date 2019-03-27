import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Category from './views/Category.vue'
import Pin from './views/Pin.vue'
import Shopping from './views/Shopping.vue'

import User from './views/User.vue'
import Login from './views/Login.vue'
import Product from './views/Product.vue'
import UserInfo from './views/UserInfo.vue'
import UserShop from './views/UserShop.vue'
import UserLike from './views/UserLike.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/category',
			name: 'category',
			component: Category
		}, {
			path: '/pin',
			name: 'pin',
			component: Pin
		}, {
			path: '/shopping',
			name: 'shopping',
			component: Shopping
		},
		{
			path: '/user',
			name: 'user',
			component: User,
			children: [{
				path: "info",
				name: "info",
				component: UserInfo
			}, {
				path: "shop",
				name: "usershop",
				component: UserShop
			}, {
				path: "like",
				name: "like",
				component: UserLike
			}]
		},
		{
			path: '/product/:id',
			name: 'product',
			component: Product
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		}
	]
})