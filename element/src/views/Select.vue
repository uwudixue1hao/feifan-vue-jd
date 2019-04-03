<template>

	<div id="select">
		<p>{{edu}} </p>
		<el-select v-model="edu" clearable filterable multiple  placeholder="请选择">
			<el-option v-for="item in options"   :key="item.value" :label="item.label" :value="item.value">
				 <span style="float: left">{{ item.label }}</span>
      				<span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
			</el-option>
		</el-select>

	</div>

</template>

<script>
	export default {

		data() {
			return {
				edu:[],
				options: [{
					value: 0,
					label: '小学'
				}, {
					value: 1,
					label: '初学'
				}, {
					value: 2,
					label: '高中'
				}, {
					value: 3,
					label: '大学'
				}, {
					value: 4,
					label: '硕士'
				},{
					value: 5,
					label: '博士'
				}]
			}
		}

	}
</script>

<style>

</style>