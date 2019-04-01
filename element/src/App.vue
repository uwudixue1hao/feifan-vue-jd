<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<style>
	html,
	body,
	#app {
		height: 100%;
		width: 100%;
	}
	
	body {
		margin: 0;
		padding: 0;
		background-color: #fff;
		color: #333;
	}
	
	a {
		text-decoration: none;
		color: #333;
	}
	
	img {
		border: 0 none;
		vertical-align: top;
	}
	
	.left {
		float: left;
	}
	
	.right {
		float: right;
	}
	
	.clear:after {
		display: block;
		content: "";
		clear: both;
	}
	
	.flex {
		display: -webkit-flex;
		display: flex;
	}
	
	.flex-item {
		-webkit-flex: 1;
		flex: 1;
	}
</style>