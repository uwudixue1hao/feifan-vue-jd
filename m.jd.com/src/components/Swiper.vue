<template>
	
	<!-- Swiper -->
		<div class="swiper-container" id="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide"><img src="@/assets/images/1.jpg" /> </div>
				<div class="swiper-slide"><img src="@/assets/images/2.jpg" /> </div>
				<div class="swiper-slide"><img src="@/assets/images/3.jpg" /> </div>
				<div class="swiper-slide"><img src="@/assets/images/4.jpg" /> </div>
			</div>
			<!-- Add Pagination -->
			<div class="swiper-pagination"></div>
		</div>
</template>

<script>
	import Swiper from "swiper";
	import "swiper/dist/css/swiper.css";
	
	export default{
		mounted() {
			/**
			 * 1. cnpm install --save swiper
			 * 2. 引入css 、Swiper
			 * 3. 复制这个html结构
			 * 4. 实例化Swiper
			 * 5. 优化样式
			 * 参考例子：https://www.swiper.com.cn/demo/100-space-between.html
			 * **/

			new Swiper('#swiper-container', {
				spaceBetween: 0,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				autoplay: true,
				loop: true
			});
		}
		
		
	}
	
</script>

<style>
</style>