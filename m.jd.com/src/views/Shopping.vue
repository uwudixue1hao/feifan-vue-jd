<template>

	<div id="shopping-cart">
		<top-bar>

			<div class="title">购物车</div>

		</top-bar>
		
		
		<div class="product-list">
			
			<shopping-product v-for="n in 10"></shopping-product>
			
			
		</div>
		

		<div class="check-group flex">
			<div class="select-all">
				<checkbox></checkbox>
				<span>全选</span>
			</div>
			<div class="total-price flex-item">
				总价: <span>￥{{sum}}</span>
			</div>
			<div class="pay-btn">去结算 <span>({{count}}件)</span></div>
		</div>

	</div>

</template>

<script>
	import TopBar from "@/components/TopBar.vue";
	import checkbox from "@/components/CheckBox";
	import ShoppingProduct from "@/components/ShoppingProduct";
	export default {
		data() {
			return {
				sum: 0,
				count: 0,
			}
		},
		components: {
			TopBar,
			checkbox,
			ShoppingProduct
		}
	}
</script>

<style>
	#shopping-cart .title {
		text-align: center;
		line-height: 0.88rem;
		font-size: 0.36rem;
		color: #333;
	}
	
	.product-list{
		padding: 0.2rem 0 1.5rem;
	}
	
	.check-group {
		width: 100%;
		height: 1rem;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
		left: 0;
	}
	
	.check-group:before {
		content: "";
		position: absolute;
		z-index: 1;
		pointer-events: none;
		background-color: #ddd;
		height: 1px;
		left: 0;
		right: 0;
		top: 0;
	}
	
	.check-group .select-all {
		width: 0.8rem;
		padding-top: 0.64rem;
		font-size: 0.2rem;
		text-align: center;
		height: 0.3rem;
		color: #999;
		position: relative;
	}
	
	.check-group .check-box {
		font-size: 0.4rem;
		position: absolute;
		top: 0.2rem;
		left: 50%;
		margin-left: -0.2rem;
	}
	
	.check-group .pay-btn {
		width: 2.2rem;
		height: 1rem;
		margin-left: 0.2rem;
		line-height: 1rem;
		font-size: 0.32rem;
		text-align: center;
		font-weight: 700;
		background: #e4393c;
		color: #fff;
	}
	
	.check-group .total-price {
		font-size: 0.32rem;
		font-weight: 700;
		line-height: 1rem;
		text-align: right;
	}
	
	.check-group .total-price span {
		color: #e93b3d;
	}
	
	.check-group .pay-btn span {
		font-weight: 400;
		font-size: 0.24rem;
		font-family: none;
	}
</style>