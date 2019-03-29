<template>
	<div class="shopping-cart">
		<van-checkbox-group class="card-goods" v-model="selected">
			<van-checkbox class="card-goods__item" v-for="item in goods" :key="item.id" :name="item.id">
				<van-card :title="item.title" :desc="item.desc" :num="item.num" :price="item.price" :thumb="item.thumb" />
			</van-checkbox>
		</van-checkbox-group>

		<van-submit-bar :price="price" button-text="提交订单" @submit="onSubmit">
			<van-checkbox v-model="all">全选</van-checkbox>
			<span slot="tip" v-if="tip!=''">{{tip}}</span>
		</van-submit-bar>

	</div>

</template>

<script>
	export default {

		data() {
			return {
				all: false,
				tip: '',
				goods: [{
					id: 1,
					title: '商品标题',
					desc: '描述',
					num: 1,
					price: 12,
					thumb: "https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"
				}, {
					id: 2,
					title: '商品标题',
					desc: '描述',
					num: 1,
					price: 12,
					thumb: "https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"
				}, {
					id: 3,
					title: '商品标题',
					desc: '描述',
					num: 1,
					price: 12,
					thumb: "https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"
				}],
				selected: []
			};
		},
		watch: {
			selected(val) {
				if(val.length == this.goods.length) {
					this.all = true;
				} else {
					this.all = false;
				}
			},
			all(val) {
				if(val) {
					this.selected = [];
					this.goods.forEach(item => {
						this.selected.push(item.id);
					});
				} else if(this.selected.length == this.goods.length) {
					this.selected = [];
				}
			}
		},
		computed: {
			price() {
				let sum = 0;
				this.selected.forEach(id => {
					this.goods.forEach(good => {
						if(good.id == id) {
							sum += good.num * good.price;
						}
					});
				});
				return sum * 100;
			}
		},
		methods: {
			onSubmit() {}
		}

	}
</script>

<style lang="less">
	.card-goods {
		padding: 10px 0;
		background-color: #fff;
		&__item {
			position: relative;
			background-color: #fafafa;
			.van-checkbox__label {
				width: 100%;
				height: auto;
				padding: 0 10px 0 15px;
				box-sizing: border-box;
			}
			.van-checkbox__icon {
				top: 50%;
				left: 10px;
				z-index: 1;
				position: absolute;
				margin-top: -10px;
			}
			.van-card__price {
				color: #f44;
			}
		}
	}
</style>