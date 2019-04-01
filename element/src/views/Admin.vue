<template>

	<el-container id="admin" >
		<el-aside width="200px" style="background-color: red;">
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
	
	
</script>

<style>
	
	#admin{
		height: 100%;
	}

</style>