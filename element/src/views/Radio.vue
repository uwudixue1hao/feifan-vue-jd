<template>
	<div id="radio">

		<el-radio v-model="sex" label="0">保密</el-radio>
		<el-radio v-model="sex" label="1">男</el-radio>
		<el-radio v-model="sex" label="2">女</el-radio>

	</div>

</template>

<script>
	
	export default{
		data(){
			return {
				sex:0
			}
		}
	}
	
</script>

<style>

</style>