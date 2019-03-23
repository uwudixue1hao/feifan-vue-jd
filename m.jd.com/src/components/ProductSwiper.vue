<template>
	<div class="swiper-container" :class="{preview:preview}" id="product-swiper" @click="preview=!preview;">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(item,index) in images" :key="index">
				<img :src="item" />
			</div>

		</div>
		<!-- Add Pagination -->
		<div class="swiper-pagination"></div>
	</div>

</template>

<script>
	import Swiper from "swiper";
	import "swiper/dist/css/swiper.css";
	export default {
		data() {
			return {
				preview: false,
				images: [require("@/assets/images/product1.jpg"), require("@/assets/images/product2.jpg"), require("@/assets/images/product3.jpg"), require("@/assets/images/product4.jpg")]
			};
		},
		mounted() {
			new Swiper('#product-swiper', {
				spaceBetween: 0,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				autoplay: false,
				loop: true
			});
		}

	}
</script>

<style>
	#product-swiper img {
		width: 100%;
	}
	/*轮播图预览样式*/
	
	.preview {
		padding-top: 3.2rem;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		position: fixed;
		background-color: #000;
		z-index: 99999;
	}
</style>