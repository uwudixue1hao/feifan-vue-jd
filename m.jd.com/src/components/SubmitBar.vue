<template>

	<div class="submit-bar flex">
		<div class="icon-btn">
			<span class="fa fa-bell"></span>
			<div>联系客服</div>
		</div>
		<div class="icon-btn">
			<span class="fa fa-building"></span>
			<div>进店</div>
		</div>
		<div class="icon-btn">
			<span class="fa fa-shopping-cart"></span>
			<div>购物车</div>
		</div>
		<div class="flex-item btn btn-add" @click="show=true">
			加入购物车
		</div>
		<div class="flex-item btn btn-buy" @click="show=true">
			立即购买
		</div>

		<div class="mask" v-show="show" @click="show=false">
			<transition enter-active-class="animated slideInUp">
				<div class="sku" v-show="show" @click.stop>
					<div class="header">
						<img src="../assets/images/product2.jpg">
						<p class="price">￥<em>109.</em>00</p>
						<p class="prop"> <span>已选：</span> {{color[colorIndex]}} - {{size[sizeIndex]}} - {{count}}个</p>
					</div>
					<div class="body">
						<div class="select color">
							<div class="select-title">颜色</div>
							<div class="select-item">
								<span class="item" :class="{active:colorIndex==index}" v-for="(item,index) in color" :key="index" @click="colorIndex=index;" v-text="item"></span>
							</div>
						</div>
						<div class="select size">
							<div class="select-title">尺码</div>
							<div class="select-item">
								<span class="item" :class="{active:sizeIndex==index}" v-for="(item,index) in size" :key="index" @click="sizeIndex=index;" v-text="item"></span>
							</div>
						</div>
						<div class="select count">
							<div class="select-title">数量

								<div class="count right">
									<span class="minus" @click="count=count<2?1:--count;">-</span>
									<span class="count" v-text="count"></span>
									<span class="plus" @click="count++;">+</span>
								</div>
							</div>
						</div>
					</div>
					<div class="btn-ok" @click="show=false">确定</div>
				</div>
			</transition>
		</div>

	</div>

</template>

<script>
	import "@/assets/css/animate.css"
	export default {

		data() {
			return {
				show: false,
				color: ['黑的', '白的', '红的', '绿的', '紫的'],
				colorIndex: 0,
				size: ['xl', 'xxl', 's', 'm'],
				sizeIndex: 0,
				count: 1,
			};
		}

	}
</script>

<style>
	.submit-bar {
		width: 100%;
		height: 1rem;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 10000;
		background-color: #fff;
	}
	
	.submit-bar .mask {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background-color: rgba(0, 0, 0, .7);
	}
	
	.submit-bar .mask .sku {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		min-height: 7.5rem;
		max-height: 9.5rem;
		background-color: #fff;
	}
	
	.submit-bar .sku .header {
		height: 1.4rem;
		padding: 0 0 0.2rem 2.2rem;
	}
	
	.submit-bar .sku .header p {
		margin: 0;
	}
	
	.submit-bar .sku .header img {
		position: absolute;
		left: 0.2rem;
		top: -0.4rem;
		border-radius: 2px;
		width: 1.8rem;
		height: 1.8rem;
	}
	
	.submit-bar .sku .header .price {
		display: inline-block;
		height: 0.8rem;
		line-height: 0.8rem;
		color: #e4393c;
		font-size: 0.2rem
	}
	
	.submit-bar .sku .header .price em {
		font-size: 0.32rem;
	}
	
	.submit-bar .sku .header .prop {
		word-break: break-all;
		font-size: 0.24rem;
		color: #333;
		line-height: 1.4em;
		padding-right: 0.2rem;
	}
	
	.submit-bar .sku .header .prop span {
		color: #999;
	}
	
	.submit-bar .sku .body {
		box-sizing: border-box;
		max-height: 7.8rm;
		padding-bottom: 1rem;
		overflow-y: auto;
	}
	
	.submit-bar .sku .body .select {}
	
	.submit-bar .sku .body .select-title {
		font-size: 0.24rem;
		color: #999;
		margin: 0 0.2rem;
		height: 0.8rem;
		line-height: 0.8rem;
	}
	
	.submit-bar .sku .body .select-item {
		overflow: hidden;
		margin-bottom: 0.06rem;
	}
	
	.submit-bar .sku .body .item {
		display: inline-block;
		padding: 0 0.2rem;
		min-width: 0.4rem;
		max-width: 5.4rem;
		overflow: hidden;
		height: 0.6rem;
		line-height: 0.6rem;
		float: left;
		text-align: center;
		margin-left: 0.2rem;
		margin-bottom: 0.2rem;
		border-radius: 0.08rem;
		color: #333;
		background-color: #f7f7f7;
		font-size: 0.28rem
	}
	
	.submit-bar .sku .body .item.active {
		background-color: #e4393c;
		color: #fff;
	}
	
	.submit-bar .sku .body .count span {
		display: inline-block;
		max-width: 0.6rem;
		min-width: 0.6rem;
		height: 0.6rem;
		line-height: 0.6rem;
		background: #f7f7f7;
		text-align: center;
	}
	
	.sku .body .minus,
	.sku .body .plus {
		font-size: 0.4rem;
		font-weight: 500;
	}
	
	.submit-bar .sku .btn-ok {
		position: absolute;
		width: 100%;
		bottom: 0;
		left: 0;
		background-color: #e4393c;
		height: 1rem;
		line-height: 1rem;
		color: #fff;
		font-size: 0.32rem;
		text-align: center;
	}
	
	.submit-bar .icon-btn {
		text-align: center;
		width: 14%;
		color: #999;
		font-size: 0.2rem;
		line-height: 0.4rem;
	}
	
	.submit-bar .icon-btn .fa {
		font-size: 0.4rem;
		padding-top: 0.1rem;
	}
	
	.submit-bar .btn {
		line-height: 1rem;
		text-align: center;
		background: #e4393c;
		color: #fff;
		font-size: 0.28rem;
	}
	
	.submit-bar .btn-add {
		background: #ff9600;
	}
</style>