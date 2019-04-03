<template>

	<el-menu default-active="0-0" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#20222A" text-color="#fff" active-text-color="#ffd04b">
		<!-- 遍历二维数组 -->
		<el-submenu :index="i+''" v-for="(item,i) in nav">
			<template slot="title">
				<i :class="item.icon"></i>
				<span v-text="item.title"></span>
			</template>
			<el-menu-item-group v-for="(sub,j) in item.submenu">
				<router-link :to="sub.url">
				<el-menu-item :index="i+'-'+j">
					
						<i :class="sub.icon"></i>
						<span v-text="sub.title"></span>
					
				</el-menu-item>
				</router-link>
			</el-menu-item-group>
		</el-submenu>

	</el-menu>

</template>

<script>
	export default {
		data() {
			return {
				nav: [{
					title: '基础样式',
					icon: 'el-icon-menu',
					submenu: [{
						title: '按钮',
						icon: 'el-icon-circle-plus-outline',
						url: '/admin/button'
					}, {
						title: '打卡管理',
						icon: 'el-icon-circle-plus-outline',
						url: ''
					}, {
						title: '成绩管理',
						icon: 'el-icon-circle-plus-outline',
						url: ''
					}]
				},{
					title: '表单',
					icon: 'el-icon-menu',
					submenu: [{
						title: '单选',
						icon: 'el-icon-circle-plus-outline',
						url: '/admin/radio'
					}, {
						title: '复选框',
						icon: 'el-icon-circle-plus-outline',
						url: '/admin/checkbox'
					}, {
						title: '输入框',
						icon: 'el-icon-circle-plus-outline',
						url: '/admin/input'
					}, {
						title: '下拉选择',
						icon: 'el-icon-circle-plus-outline',
						url: '/admin/select'
					}, {
						title: '级联选择',
						icon: 'el-icon-circle-plus-outline',
						url: '/admin/cascader'
					}, {
						title: '开关选择',
						icon: 'el-icon-circle-plus-outline',
						url: '/admin/switch'
					}]
				},{
					title: '学生管理',
					icon: 'el-icon-menu',
					submenu: [{
						title: '学生管理',
						icon: 'el-icon-circle-plus-outline',
						url: '/admin/student'
					}, {
						title: '打卡管理',
						icon: 'el-icon-circle-plus-outline',
						url: ''
					}, {
						title: '成绩管理',
						icon: 'el-icon-circle-plus-outline',
						url: ''
					}]
				}, {
					title: '课程管理',
					icon: 'el-icon-menu',
					submenu: [{
						title: '专业管理',
						icon: 'el-icon-circle-plus-outline',
						url: ''
					}, {
						title: '排课管理',
						icon: 'el-icon-circle-plus-outline',
						url: ''
					}, {
						title: '补课管理',
						icon: 'el-icon-circle-plus-outline',
						url: ''
					}]
				}],
			};
		},
		methods: {
			handleOpen() {},
			handleClose() {},
		}
	}
</script>

<style>
	
	
	

</style>