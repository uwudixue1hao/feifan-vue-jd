<template>

	<div>
		<p>{{value1}}</p>
		<el-switch v-model="value1" active-color="#13ce66" inactive-color="#ff4949"></el-switch>

	</div>

</template>

<script>
	
	export default{
		data(){
			return {
				value1:false
			};
		}
	}
	
</script>

<style>

</style>