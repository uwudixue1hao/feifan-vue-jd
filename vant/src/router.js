import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Button from './views/Button.vue'
import Course from './views/Course.vue'
import Goods from './views/Goods.vue'
import User from './views/User.vue'
import Learn from './views/Learn.vue'
import Shopping from './views/Shopping.vue'
import Tcl from './views/TeacherCourseList.vue'
import StudentCourseList from './views/StudentCourseList.vue'
import Leave from './views/Leave.vue'
Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
		path: '/',
		name: 'home',
		component: Home
	}, {
		path: '/course',
		name: 'course',
		component: Course
	}, {
		path: '/goods',
		name: 'goods',
		component: Goods
	}, {
		path: '/learn',
		name: 'learn',
		component: Learn
	}, {
		path: '/user',
		name: 'user',
		component: User
	}, {
		path: '/button',
		name: 'button',
		component: Button
	}, {
		path: '/shopping',
		name: 'shopping',
		component: Shopping
	},{
		path: '/teacher/course',
		name: 'teacherCourse',
		component: Tcl
	},{
		path: '/teacher/course/student',
		name: 'StudentCourseList',
		component: StudentCourseList
	},{
		path: '/student/leave',
		name: 'studentLeave',
		component: Leave
	}]
})