<template>

	<div id="checkbox">

		<div>
			<p>{{agree}}</p>
			<el-checkbox v-model="agree">同意注册协议</el-checkbox>

		</div>

		<div>
			<p>{{hobby}}</p>

			<el-checkbox-group v-model="hobby">
				<el-checkbox label="钓鱼"></el-checkbox>
				<el-checkbox label="跑步"></el-checkbox>
				<el-checkbox label="看电影"></el-checkbox>
				<el-checkbox label="看书" disabled></el-checkbox>
				<el-checkbox label="听音乐" disabled></el-checkbox>
			</el-checkbox-group>
		</div>

	</div>

</template>

<script>
	export default {
		data() {
			return {
				agree: false,
				hobby: []
			}
		}
	}
</script>

<style>

</style>