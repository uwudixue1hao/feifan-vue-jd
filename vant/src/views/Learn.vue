<template>
	<div class="learn">
		<van-nav-bar title="学习中心" left-arrow @click-left="$router.go(-1);" />

		<van-tabs type="card">
			<van-tab title="未学习">

				<div class="course-list">

					<van-card v-for="n in 10" num="1" tag="未学习" price="998.00" desc="网页前端课程的描述内容" title="前端框架交互课程" thumb="http://image.yunduoketang.com/course/67111/20181108/30824626-b2e4-488f-ba89-d43283deb11e.jpg" />

				</div>

			</van-tab>
			<van-tab title="学习中">
				
				<div class="course-list">

					<van-card v-for="n in 2" num="1" tag="学习中" price="998.00" desc="网页前端课程的描述内容" title="前端框架交互课程" thumb="http://image.yunduoketang.com/course/67111/20181108/30824626-b2e4-488f-ba89-d43283deb11e.jpg" />

				</div>
				
			</van-tab>
			<van-tab title="已学完">
				
				<div class="course-list">

					<van-card v-for="n in 4" num="1" tag="已学习" price="998.00" desc="网页前端课程的描述内容" title="前端框架交互课程" thumb="http://image.yunduoketang.com/course/67111/20181108/30824626-b2e4-488f-ba89-d43283deb11e.jpg" />

				</div>
				
				
			</van-tab>
		</van-tabs>

		<tab-bar :index="3" />
	</div>

</template>

<script>
	import TabBar from "@/components/TabBar";
	export default {
		data() {
			return {};
		},
		methods: {},
		components: {
			TabBar
		}
	}
</script>

<style>
	.learn .van-tabs {
		margin-top: 30px;
	}
	
	.learn .course-list{
		margin-top: 20px;
	}
</style>