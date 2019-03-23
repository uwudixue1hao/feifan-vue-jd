<template>

	<div class="product-detail">
		<top-bar>
			<ul class="flex top-bar-list">
				<li class="flex-item" :class="{active:navIndex==index}" v-for="(item,index) in nav" :key="index" @click="navChange(index)">
					<span v-text="item.title"></span>
				</li>
			</ul>
		</top-bar>
		<div id="product" ref="product"></div>
		<!-- 1.轮播图展示效果 -->
		<product-swiper></product-swiper>

		<div id="comment" ref="comment" style="height: 800px;background-color: red;"></div>

		<div id="detail" ref="detail" style="height: 800px;background-color: green;"></div>

		<div id="recommend" ref="recommend" style="height: 800px;background-color: blue;"></div>

		<!-- 2.底部的加入购物车  & 立即购买 -->
		<submit-bar></submit-bar>
		<!--https://item.m.jd.com/product/3668211.html?pps=reclike.FO4O605%3AFOFO4O37F8F33O13O6%3ACOF0416O443O2FO8O7FFF5021813FOFO005A1A845807D13FE3-->

	</div>

</template>

<script>
	import TopBar from "@/components/TopBar";
	import SubmitBar from "@/components/SubmitBar";
	import ProductSwiper from "@/components/ProductSwiper";
	export default {

		data() {
			return {
				navIndex: 0,
				nav: [{
					title: '商品',
					top: 0
				}, {
					title: '评价',
					top: 0
				}, {
					title: '详情',
					top: 0
				}, {
					title: '推荐',
					top: 0
				}],
			};
		},
		methods:{
			navChange(index){
				this.navIndex=index; 
//				let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//				let count = 100;
//				const step = (this.nav[this.navIndex].top-scrollTop)/100;
//				let t = setInterval(()=>{
//					document.body.scrollTop += step;
//					document.documentElement.scrollTop += step;
//					count--;
//					if(count<=0){
//						clearInterval(t);
//						this.navIndex=index; 
//					}
//				},10);
				document.body.scrollTop = this.nav[this.navIndex].top;
				document.documentElement.scrollTop = this.nav[this.navIndex].top;
			}
		},
		components: {
			TopBar,
			ProductSwiper,
			SubmitBar
		},
		created() {
			// 当前路由
			console.log(this.$route);
			console.log(this.$router);
		},
		mounted() {

			// 通过ref获取页面中的元素标签
			// 获取每一块元素距离顶部的大小
			this.nav[0].top = this.$refs['product'].offsetTop;
			this.nav[1].top = this.$refs['comment'].offsetTop;
			this.nav[2].top = this.$refs['detail'].offsetTop;
			this.nav[3].top = this.$refs['recommend'].offsetTop;

			// 监听滚动事件
			window.onscroll = () => {
				// 获取滚动的高度
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				// 循环遍历
				this.nav.forEach((item, index) => {
					// 判断是否是在某一块区域的附近
					if(Math.abs(scrollTop - item.top) < 20) {
						this.navIndex = index;
					}
				});
			}
		},
		updated() {
			// 通过ref获取页面中的元素标签
			// 获取每一块元素距离顶部的大小
			this.nav[0].top = this.$refs['product'].offsetTop;
			this.nav[1].top = this.$refs['comment'].offsetTop;
			this.nav[2].top = this.$refs['detail'].offsetTop;
			this.nav[3].top = this.$refs['recommend'].offsetTop;
		}

	}
</script>

<style>
	.top-bar-list {
		margin: 0;
		padding: 0;
		list-style: none;
		text-align: center;
		line-height: 0.9rem;
	}
	
	.top-bar-list li {
		font-size: 0.28rem;
	}
	
	.top-bar-list li.active span {
		color: #e4393c;
		padding-left: 0.26rem;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYBAMAAAABjmA/AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURek7PUdwTO49Peg6Peo6Puc6Pek6POk6POg6POg7PeY8POg6POk6PApBjXgAAAANdFJOU/8ADttQPYvEqJYqW/KuifCQAAAAjklEQVQI10XOsRGCQBAF0D8eA6Imn4ERMh0tgDE2UDqgA2Ij7UA6gA6MjCnB0vzLBlxw92Z379+B/F7DgwQraI3C05AQc0ElfBCac40NOlzIE2LUuJM5gtpHMtPxc+yW1tuH15j8+hYHD1yhdPQoHO3yKG+GSNgbXsI81AocgNS+qlgLFwrrGNjFdFS9tj82HhIeoIR1QQAAAABJRU5ErkJggg==) no-repeat 0;
		background-size: 0.16rem;
	}
</style>