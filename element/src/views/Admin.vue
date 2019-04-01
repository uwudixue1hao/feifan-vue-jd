<template>

	<el-container id="admin" >
		<el-aside width="200px">
			<Aside/>
		</el-aside>
		<el-container>
			<el-header style='background-color: blue;'>Header</el-header>
			<el-main>
				<router-view/>
			</el-main>
			<el-footer style='background-color: green;'>Footer</el-footer>
		</el-container>
	</el-container>

</template>

<script>
	import Aside from "@/components/Aside";
	export default{
		components:{
			Aside
		}
	}
	
</script>

<style>
	
	#admin{
		height: 100%;
	}
	
	#admin .el-aside{
		background-color: #20222A;
	}
</style>