<template>

	<div class="category-right" ref="aside" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend" @touchcancel="touchcancel">
		<div ref="ul" :style="{top:offsetTop+'px'}" class="category-ul">

			<div class="category-third">
				<img src="../assets/images/xinrenlibao.png">
			</div>

			<div class="category-div">

				<h4>热门分类</h4>
				<ul class="clear">
					<li class="left" v-for="(item,index) in category" :key="index">
						<router-link to="#">
							<img :src="item.image" />
							<p v-text="item.title"></p>
						</router-link>
					</li>
				</ul>
			</div>

		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				ulHeight: 0,
				asideHeight: 0,
				bottomLimit: 0,
				startY: 0,
				offsetTop: 0,
				top: 0,
				category: [{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
					{
						image: require('@/assets/images/phone.png'),
						title: '手机',
						id: 0
					},
				]
			};
		},
		methods: {
			// 触摸开始-手指按下的时候
			touchstart(e) {
				this.startY = e.touches[0].clientY;
			},
			// 滑动中-手指一直动
			touchmove(e) {
				let y = e.touches[0].clientY;
				this.offsetTop = (this.top + y - this.startY) > 150 ? 150 : (this.top + y - this.startY);
				this.offsetTop = this.offsetTop < this.bottomLimit ? this.bottomLimit : this.offsetTop;
			},
			// 触摸结束 - 手指移开的时候
			touchend(e) {
				let y = e.changedTouches[0].clientY;
				this.top = this.top + y - this.startY;
				this.top = this.top > 0 ? 0 : this.top;
				this.top = this.top < (this.bottomLimit + 150) ? (this.bottomLimit + 150) : this.top;
				this.offsetTop = this.top;
			},
			touchcancel(e) {
				let y = e.changedTouches[0].clientY;
				this.top = this.top + y - this.startY;
			},
			categoryChange(index) {
				// 点击的成为active状态
				this.categoryIndex = index;
				// 点击的时候滚动到顶部的距离
				this.top = this.ulHeight / this.category.length * index * -1;
				// 如果下面超出部分则不动
				this.top = this.top < (this.bottomLimit + 150) ? (this.bottomLimit + 150) : this.top;
				this.offsetTop = this.top;
			}
		},
		mounted() {
			this.asideHeight = this.$refs['aside'].offsetHeight;
			this.ulHeight = this.$refs['ul'].offsetHeight;
			this.bottomLimit = this.asideHeight - 200 - this.ulHeight;
		}

	}
</script>

<style>
	.category-right {
		height: 100%;
		width: 100%;
		position: relative;
	}
	
	.category-ul {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		/*background-color: slateblue;*/
		-webkit-transition: top 0.3s linear;
		transition: top 0.3s linear;
	}
	
	.category-third {
		padding: 0.14rem 0.14rem 0;
	}
	
	.category-third img {
		width: 100%;
	}
	
	.category-div {
		padding: 0.4rem 0.14rem 0;
	}
	
	.category-div h4 {
		font-size: 0.28rem;
		font-weight: 700;
		margin: 0;
		color: #333;
	}
	
	.category-div ul {
		margin: 0.18rem 0 0;
		padding: 0.2rem 0.14rem 0;
	}
	
	.category-div ul li {
		width: 32.8%;
		list-style: none;
		text-align: center;
	}
	
	.category-div ul img {
		width: 1.4rem;
		height: 1.4rem;
	}
	
	.category-div ul p {
		margin: 0.04rem 0 0;
		color: #333;
		height: 0.7rem;
		font-size: 0.24rem;
	}
</style>