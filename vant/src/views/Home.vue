<template>
	<div class="home">
		<!-- 搜索框 -->
		<van-search placeholder="请输入搜索关键词" shape="round" v-model="search" @search="onSearch" @cancel="onCancel">
		</van-search>

		<!-- 轮播图 -->
		<van-swipe :autoplay="3000">
			<van-swipe-item v-for="(image, index) in images" :key="index">
				<img :src="image" />
			</van-swipe-item>
		</van-swipe>
		
		<tab-bar></tab-bar>

	</div>
</template>

<script>
	
	import  TabBar from "@/components/TabBar"
	export default {
		data() {
			return {
				search: '',
				tabIndex: 0,
				images: ['https://img.yzcdn.cn/2.jpg',
					'https://img.yzcdn.cn/2.jpg'
				]
			};
		},
		methods: {
			onSearch() {
				console.log(this.search)
			},
			onCancel() {}
		},
		components: {
			TabBar
		}
	}
</script>

<style>
	.van-swipe img {
		width: 100%;
	}
</style>