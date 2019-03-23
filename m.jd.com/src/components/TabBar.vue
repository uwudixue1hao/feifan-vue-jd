<template>

	<div class="tab-bar-bottom">
		<ul class="clear">
			<li :class="{active:navIndex==index}"  v-for="(item,index) in nav" :key="index">
				<router-link :to="{name:item.name,params:{index:index}}">
					<span class="iconfont" :class="item.icon"></span>
					<div class="title" v-text="item.title"></div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import "@/assets/css/iconfont.css";
	export default {
		data() {
			return {
				navIndex:0,
				nav: [{
						icon: 'iconfont icon-home',
						title: '首页',
						name: 'home'
					},
					{
						icon: 'iconfont icon-fenlei',
						title: '分类',
						name: 'category'
					},
					{
						icon: 'iconfont icon-pingou',
						title: '拼购',
						name: 'pin'
					},
					{
						icon: 'iconfont icon-shopping-cart',
						title: '购物车',
						name: 'shopping'
					},
					{
						icon: 'iconfont icon-user',
						title: '未登录',
						name: 'user'
					}
				]
			}
		},
		created(){
			this.navIndex = this.$route.params.index>0?this.$route.params.index:0;
		}
	}
</script>

<style>
	.tab-bar-bottom {
		height: 1rem;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 31;
		box-sizing: border-box;
		width: 100%;
		list-style: none;
		background-color: #fff;
		box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
		-webkit-box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
		-moz-box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
	}
	
	.tab-bar-bottom ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	.tab-bar-bottom ul li {
		padding-top: 0.05rem;
		float: left;
		width: 20%;
		text-align: center;
	}
	
	.tab-bar-bottom a{
		color: #7e7f88;
	}
	
	.tab-bar-bottom .active a{
		color: #f23030;
	}
	
	.tab-bar-bottom span.iconfont {
		font-size: 0.50rem;
		
	}
	
	.tab-bar-bottom .title {
		font-size: 0.18rem;
		
	}
	
	
	
</style>