<template>

	<div class="shopping-product flex">

		<div class="select">
			<checkbox :arr="value" :value="id" @input="selectChange" ></checkbox>
		</div>

		<div class="product-image">
			<img :src="image" />
		</div>

		<div class="product-info flex-item">
			<div class="product-title" v-text="title"></div>
			<div class="clear">
				<div class="product-price left">￥<span v-text="price"></span></div>
				<div class="product-count right">
					<span @click="n = n<=1?1:--n;$emit('countChange',n);" >-</span>
					<span v-text="n"></span>
					<span @click="n++;$emit('countChange',id,n);">+</span>
				</div>
			</div>

		</div>

	</div>

</template>

<script>
	import checkbox from "@/components/CheckBox";
	export default {
		data() {
			return {
				n:1
			}
		},
		props: {
			id: {
				type: Number,
				required: true
			},
			title: {
				type: String
			},
			image: {
				type: String
			},
			price:{
				type:Number,
				default:0
			},
			count: {
				type: Number,
				default:1
			},
			value:{
				type:Array,
				defalut:[]
			}
		},
		methods:{
			selectChange(val){
				this.$emit('input',val);
			}
		},
		components: {
			checkbox
		},
		created(){
			this.n = this.count;
			
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