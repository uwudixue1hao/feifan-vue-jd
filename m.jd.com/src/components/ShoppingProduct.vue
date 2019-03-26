<template>

	<div class="shopping-product">

		<div class="select">
			<checkbox></checkbox>
		</div>

		<div class="product-image"></div>

		<div class="product-info">

			<div class="product-title"></div>

			<div class="product-count"></div>

		</div>

	</div>

</template>

<script>
	import checkbox from "@/components/CheckBox";
	export default {
		data() {
			return {}
		},
		components: {
			checkbox
		}
	}
</script>

<style>
	.shopping-product {
		height: 200px;
		background-color: yellow;
		margin-bottom: 2px;
	}
</style>