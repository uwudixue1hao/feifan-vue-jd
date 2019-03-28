<template>

	<!-- 底部导航 -->
	<van-tabbar v-model="tabIndex">
		<van-tabbar-item icon="home-o" url="/">首页</van-tabbar-item>
		<van-tabbar-item icon="search" url="/course" dot>课程</van-tabbar-item>
		<van-tabbar-item icon="search" url="" dot>打卡</van-tabbar-item>
		<van-tabbar-item icon="friends-o" url="/learn" info="5">学习中心</van-tabbar-item>
		<van-tabbar-item icon="user-o" url="/user" info="20">我的</van-tabbar-item>
	</van-tabbar>

</template>

<script>
	export default {
		data() {
			return {
				tabIndex: 0,
			}
		},
		props: {
			index: {
				type: Number,
				default: 0
			}
		},
		created() {
			this.tabIndex = this.index;
		}
	}
</script>

<style>

</style>