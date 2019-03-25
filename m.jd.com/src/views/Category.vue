<template>
	<div id="category">
		<top-bar></top-bar>

		<div class="container flex">

			<div ref="aside" 
				class="left-aside" 
				@touchstart="touchstart"  
				@touchmove="touchmove" 
				@touchend="touchend"
				@touchcancel="touchcancel" >
			
				<ul ref="ul"
					:style="{top:offsetTop+'px'}">
					<li v-for="(item,index) in category" 
						:key="index" 
						v-text="item.title"
						@click="categoryIndex=index;"
						:class="{active:categoryIndex==index}"></li>
				</ul>
			
			</div>

			<div class="content flex-item"></div>

		</div>

		<tab-bar></tab-bar>
	</div>

</template>

<script>
	import TabBar from "@/components/TabBar.vue";
	import TopBar from "@/components/TopBar.vue";
	export default {

		data() {

			return {
				// 
				ulHeight:0,
				asideHeight:0,
				bottomLimit:0,
				startY:0,
				offsetTop:0,
				top:0,
				categoryIndex:0,
				category: [{
					id: 1,
					title: '热门推荐'
				}, {
					id: 2,
					title: '手机数码'
				}, {
					id: 2,
					title: '手机数码'
				}, {
					id: 2,
					title: '手机数码'
				}, {
					id: 2,
					title: '手机数码'
				}, {
					id: 2,
					title: '手机数码'
				}, {
					id: 2,
					title: '手机数码'
				}, {
					id: 2,
					title: '手机数码'
				}, {
					id: 2,
					title: '手机数码'
				}, {
					id: 2,
					title: '手机数码'
				}, {
					id: 2,
					title: '手机数码'
				}, {
					id: 2,
					title: '手机数码'
				}, {
					id: 2,
					title: '手机数码'
				}, {
					id: 2,
					title: '手机数码'
				}, {
					id: 2,
					title: '手机数码'
				}, {
					id: 2,
					title: '手机数码'
				}, {
					id: 2,
					title: '手机数码'
				}, {
					id: 2,
					title: '手机数码'
				}, {
					id: 2,
					title: '手机数码'
				}, {
					id: 2,
					title: '手机数码'
				}, {
					id: 2,
					title: '手机数码'
				}, {
					id: 2,
					title: '手机数码'
				}],
			};

		},
		methods:{
			// 触摸开始-手指按下的时候
			touchstart(e){
				this.startY = e.touches[0].clientY;
			},
			// 滑动中-手指一直动
			touchmove(e){
				let y = e.touches[0].clientY;
				this.offsetTop = (this.top + y-this.startY)>150?150:(this.top + y-this.startY);
				this.offsetTop = this.offsetTop<this.bottomLimit?this.bottomLimit:this.offsetTop;
			},
			// 触摸结束 - 手指移开的时候
			touchend(e){
				let y = e.changedTouches[0].clientY;
				this.top = this.top + y-this.startY;
				
				this.top = this.top>0?0:this.top;
				this.top = this.top<(this.bottomLimit+150)?(this.bottomLimit+150):this.top;
				
				this.offsetTop = this.top;
			},
			touchcancel(e){
				let y = e.changedTouches[0].clientY;
				this.top = this.top + y-this.startY;
			},
		},
		mounted(){
			this.asideHeight = this.$refs['aside'].offsetHeight;
			this.ulHeight = this.$refs['ul'].offsetHeight;
			this.bottomLimit = this.asideHeight -150- this.ulHeight ;
			
			console.log(this.bottomLimit);
			
		},
		components: {
			TabBar,
			TopBar
		}
	}
</script>

<style>
	.container {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 0.9rem 0 1rem;
		box-sizing: border-box;
		/*background-color: red;*/	
	}
	
	.container .left-aside {
		width: 1.72rem;
		height: 100%;
		overflow: hidden;
		position: relative;
	}
	
	.left-aside ul{
		width: 100%;
		margin: 0;
		padding: 0;
		list-style: none;
		position: absolute;
		top: 0;
		left: 0;
	}
	.left-aside ul li{
		text-align: center;
		font-size: 0.28rem;
		line-height: 0.92rem;
	}
	.left-aside ul li.active{
		    color: #e93b3d;
	}
	
	.container .content {
		height: 100%;
		background-color: green;
		overflow-y: auto;
	}
	

	
</style>