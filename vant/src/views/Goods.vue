<template>
	<div class="goods">

		<van-swipe class="goods-swipe" :autoplay="3000">
			<van-swipe-item v-for="thumb in images" :key="thumb">
				<img :src="thumb">
			</van-swipe-item>
		</van-swipe>

		<van-cell-group>
			<van-cell>
				<div class="goods-title">{{title }}</div>
				<div class="goods-price">{{ price }}</div>
			</van-cell>
			<van-cell class="goods-express">
				<van-col span="10">运费：{{ express }}</van-col>
				<van-col span="14">剩余：{{ remain }}</van-col>
			</van-cell>
		</van-cell-group>

		<van-cell-group class="goods-cell-group">
			<van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
				<template slot="title">
					<span class="van-cell-text">有赞的店</span>
					<van-tag class="goods-tag" type="danger">官方</van-tag>
				</template>
			</van-cell>
			<van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
		</van-cell-group>

		<van-cell-group class="goods-cell-group">
			<van-cell title="查看商品详情" is-link @click="sorry" />
		</van-cell-group>

		<van-goods-action>
			<van-goods-action-mini-btn icon="chat-o" text="客服" />
			<van-goods-action-mini-btn icon="shop-o" text="店铺" />
			<van-goods-action-mini-btn info="5" icon="cart-o" text="购物车" />
			<van-goods-action-big-btn text="加入购物车" />
			<van-goods-action-big-btn primary text="立即报名" />
		</van-goods-action>
	</div>

</template>

<script>
	export default {

		data() {
			return {
				title: '商品标题',
				price: 12.65,
				express: 12,
				remain: 1000,
				images: ['https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
					'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
				]
			};
		}

	}
</script>

<style lang="less">
	.goods {
		padding-bottom: 50px;
		&-swipe {
			img {
				width: 100%;
				display: block;
			}
		}
		&-title {
			font-size: 16px;
		}
		&-price {
			color: #f44;
		}
		&-express {
			color: #999;
			font-size: 12px;
			padding: 5px 15px;
		}
		&-cell-group {
			margin: 15px 0;
			.van-cell__value {
				color: #999;
			}
		}
		&-tag {
			margin-left: 5px;
		}
	}
</style>