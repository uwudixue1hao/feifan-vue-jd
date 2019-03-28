<template>

	<div class="user">

		<van-nav-bar title="个人中心" left-text="返回"  left-arrow @click-left="onClickLeft" @click-right="onClickRight">
			<van-icon name="weapp-nav" slot="right" />
		</van-nav-bar>
		
		<!--
			
			https://youzan.github.io/vant/#/zh-CN/demo
			
		-->
		
	</div>

</template>

<script>
	export default {
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			},
			onClickRight() {}
		}
	}
</script>

<style>

</style>