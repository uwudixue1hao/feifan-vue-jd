<template>

	<div id="shopping-cart">
		<top-bar>

			<div class="title">购物车</div>

		</top-bar>

		<div class="product-list">

			<shopping-product v-for="(item,index) in products" :id="item.id" :count="item.count" :title="item.title" :image="item.image" :price="item.price" v-model="selected" @countChange="countChange"></shopping-product>

			<div>{{selected}}</div>

			<div>{{products}}</div>

			<p>{{all}}</p>

		</div>

		<div class="check-group flex">
			<div class="select-all">
				<checkbox v-model="all"></checkbox>
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
				all: false,
				selected: [1, 3],
				products: [{
						id: 1,
						image: require("@/assets/images/product1.jpg"),
						title: '商品标题',
						price: 12,
						count: 1
					},
					{
						id: 2,
						image: require("@/assets/images/product1.jpg"),
						title: '商品标题',
						price: 12.32,
						count: 1
					},
					{
						id: 3,
						image: require("@/assets/images/product1.jpg"),
						title: '商品标题',
						price: 12.32,
						count: 1
					},
				],
			}
		},
		methods: {
			countChange(id, n) {
				this.products.forEach((item, index) => {
					if(item.id == id) {
						this.products[index].count = n;
					}
				});
			}
		},
		watch: {

			selected(val) {
				if(val.length == this.products.length) {
					this.all = true;
				} else {
					this.all = false;
				}
			},
			all(val) {
				if(val) {
					this.selected = [];
					// 全部的ID都要加入到selected。
					this.products.forEach(item => {
						this.selected.push(item.id);
					});

				} else if(this.selected.length == this.products.length){
					this.selected = [];
				}
			},
		},
		//计算属性
		computed: {
			// 总数
			count() {
				let n = 0;
				this.selected.forEach(item => {
					this.products.forEach(pro => {
						if(pro.id == item) {
							n += pro.count;
						}
					});
				});
				return n;
			},
			// 总价
			sum() {
				let n = 0;
				this.selected.forEach(item => {
					this.products.forEach(pro => {
						if(pro.id == item) {
							n += pro.count * pro.price;
						}
					});
				});
				return n.toFixed(2);
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
	
	.product-list {
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