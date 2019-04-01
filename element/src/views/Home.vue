<template>
	<div class="home">
		<el-row :gutter="20">
			<el-col :span="8">
				<div class="grid-content bg-purple">1</div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple-light">2</div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple">3</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'home',
		components: {}
	}
</script>

<style>
	
	.grid-content{
		height: 50px;
		background-color: red;
	}
	
	
</style>