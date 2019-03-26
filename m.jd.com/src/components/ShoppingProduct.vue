<template>

	<div class="shopping-product flex">

		<div class="select">
			<checkbox></checkbox>
		</div>

		<div class="product-image">

			<img src="../assets/images/product3.jpg" />
		</div>

		<div class="product-info flex-item">

			<div class="product-title">回力帆布鞋女2019春季新款学生小白鞋百搭平底板鞋韩版潮鞋子 经典黑 低帮 37 [女生选小一码 男生标准码]</div>

			<div class="clear">

				<div class="product-price left">￥<span>12.25</span></div>

				<div class="product-count right">
					<span>-</span>
					<span>1</span>
					<span>+</span>

				</div>
			</div>

		</div>

	</div>

</template>

<script>
	import checkbox from "@/components/CheckBox";
	export default {
		data() {
			return {}
		},
		components: {
			checkbox
		}
	}
</script>

<style>
	.shopping-product {
		padding: 0.1rem 0.2rem 0.3rem 0;
	}
	
	.shopping-product .select {
		width: 0.8rem;
		font-size: 0.4rem;
		padding-top: 0.55rem;
	}
	
	.shopping-product .check-box {
		position: relative;
		left: 50%;
		margin-left: -0.2rem;
	}
	
	.shopping-product .product-image {
		width: 1.5rem;
		height: 1.5rem;
		padding-right: 0.2rem;
	}
	
	.shopping-product .product-image img {
		width: 1.5rem;
		height: 1.5rem;
	}
	
	.shopping-product .product-info {
		height: auto;
	}
	
	.shopping-product .product-info .product-title {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-break: break-word;
		font-size: 0.28rem;
		line-height: 0.32rem;
		height: 0.64rem;
		margin-top: 0;
		margin-bottom: 0.1rem;
		word-break: break-all;
	}
	
	.shopping-product .clear {
		margin-top: 0.1rem;
	}
	
	.shopping-product .product-price {
		
		color: #e93b3d;
		font-size: 0.2rem;
	}
	
	.shopping-product .product-price span {
		font-size: 0.32rem;
	}
	
	.shopping-product .product-count span {
		display: inline-block;
		width: 0.6rem;
		height: 0.6rem;
		line-height: 0.6rem;
		text-align: center;
		background-color: #f7f7f7;
	}
</style>