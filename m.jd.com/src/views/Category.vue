<template>
	<div id="category">
		<top-bar></top-bar>
		
		<div class="container flex">
		
		
		<div class="left-aside"></div>
		
		<div class="content flex-item"></div>
		
		
		</div>
		
		
		
		<tab-bar></tab-bar>
	</div>
	
</template>

<script>
	import TabBar from "@/components/TabBar.vue";
	import TopBar from "@/components/TopBar.vue";
	export default{
		components:{
			TabBar,
			TopBar
		}
	}
	
</script>

<style>
	
	.container{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 0.9rem 0 1rem; 
		box-sizing: border-box;
		background-color: red;
	}
	.container .left-aside{
		width: 1.72rem;
		height: 100%;
		background-color: blue;
		overflow-y: auto;
	}
	.container .content{
		height: 100%;
		background-color: green;
		overflow-y: auto;
	}
	/*.container .left-aside{
		width: 1.72rem;
		height: 100%;
		background-color: blue;
		overflow-y: auto;
	}
	.container .content{
		position: absolute;
		top: 0px;
		right: 0px;
		width: 100%;
		height: 100%;
		z-index: -1;
		padding-left: 1.72rem;
		box-sizing: border-box;
		background-color: green;
		overflow-y: auto;
	}*/

</style>