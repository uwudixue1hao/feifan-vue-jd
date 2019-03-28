<template>
	<div class="home">
		<van-search placeholder="请输入搜索关键词" shape="round" v-model="search" @search="onSearch" @cancel="onCancel">
		</van-search>

		<van-swipe :autoplay="3000">
			<van-swipe-item v-for="(image, index) in images" :key="index">
				<img :src="image" />
			</van-swipe-item>
		</van-swipe>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				search: '',
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
		components: {}
	}
</script>

<style>
	.van-swipe img {
		width: 100%;
	}
</style>