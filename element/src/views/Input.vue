<template>
	<div id="input">
		
		<el-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="textarea">
</el-input>
		
		<p>{{msg}}</p>
		<el-input v-model="msg" placeholder="请输入内容" clearable></el-input>
		<p>{{pwd}}</p>
		<el-input v-model="pwd" suffix-icon="el-icon-date"  prefix-icon="el-icon-search" placeholder="请输入内容" show-password></el-input>
	
	</div>
</template>

<script>
	
	export default{
		data(){
			return {
				msg:'',
				pwd:'',
				textarea:''
			}
		}
	}
	
</script>

<style>
</style>