<template>
	<div class="cascader">
		
		
		<p>{{address}}</p>
		<el-cascader :options="region" v-model="address" @change="handleChange">
		</el-cascader>

	</div>
</template>

<script>
	
	import region from "@/assets/js/region.json";
	
	export default {
		data() {
			return {
				address: [25, 321, 2706],
				region: [],
			}
		},
		methods: {
			handleChange(val) {
				console.log(val);
			}
		},
		created() {
			this.region = region;
		}
	}
</script>

<style>

</style>