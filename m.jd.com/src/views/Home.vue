<template>
	<div class="home">
		<search-bar></search-bar>
		
		<swiper></swiper>
		
		<quick-nav></quick-nav>

		<div class="product-list clear">

			<product v-for="(item,index) in products"
					 :id="item.id"
					 :image="item.image"
					 :title="item.title"
					 :price="item.price"></product>

		</div>
		
		<tab-bar :index="0"></tab-bar>
		
		<div style="height: 1000px;"></div>
	</div>
</template>

<script>
	import SearchBar from "@/components/SearchBar.vue";
	import QuickNav from "@/components/QuickNav.vue";
	import Product from "@/components/Product.vue";
	import TabBar from "@/components/TabBar.vue";
	import Swiper from "@/components/Swiper";
	
	export default {
		name: 'home',
		data() {
			return {
				products: [{
					id: 1,
					image: require("@/assets/images/product1.jpg"),
					title: "TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器",
					price: 115
				}, {
					id: 2,
					image: require("@/assets/images/product2.jpg"),
					title: "满199减120三只松鼠 夏威夷果160g 零食坚果炒货孕妇坚果每日坚果干果休闲零食送开口器 160g",
					price: 35.8
				},{
					id: 3,
					image: require("@/assets/images/product1.jpg"),
					title: "TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器",
					price: 205
				}, {
					id: 4,
					image: require("@/assets/images/product2.jpg"),
					title: "满199减120三只松鼠 夏威夷果160g 零食坚果炒货孕妇坚果每日坚果干果休闲零食送开口器 160g",
					price: 38.8
				}]
			}
		},
		components: {
			SearchBar,
			QuickNav,
			Product,
			TabBar,
			Swiper
		}
		
	}
</script>

<style>
	body {
		/*background-color: yellow!important;*/
	}
	
	#swiper-container {
		width: 100%;
	}
	
	#swiper-container img {
		width: 100%;
	}
</style>