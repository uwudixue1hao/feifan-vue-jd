<template>

	<div class="check-box" :class="{checked:check}" @click="change"></div>

</template>

<script>
	export default {

		data() {
			return {
				check: false,
				array: []
			}
		},
		model: {
			prop: "arr",
			event: 'input'
		},
		props: {
			arr: {
				type: [Boolean, Array],
				default: false
			},
			value: {
				type: [String, Number],
				default: ''
			}
		},
		watch: {
			arr(val) {
				if((typeof val) == 'boolean') {
					this.check = val;
				} else if((typeof this.arr) == 'object') {
					this.array = this.arr;
					let flag = false;
					this.arr.forEach(item => {
						if(item == this.value) {
							flag = true;
						}
					});

					this.check = flag;
				}
			}
		},
		methods: {
			change() {
				this.check = !this.check;

				if(this.check) {
					// 添加
					this.array.push(this.value);
				} else {
					// 移除
					let index = 0;
					this.array.forEach((item, inx) => {
						if(item == this.value) {
							index = inx;
						}
					});
					this.array.splice(index, 1);
				}

				if((typeof this.arr) == 'boolean') {
					this.$emit("input", this.check);
				} else if((typeof this.arr) == 'object') {
					this.$emit("input", this.array);
				}
			}
		},
		created() {
			if((typeof this.arr) == 'boolean') {
				this.check = this.arr;
			} else if((typeof this.arr) == 'object') {
				this.array = this.arr;
				this.arr.forEach(item => {
					if(item == this.value) {
						this.check = true;
					}
				});
			}

		}

	}
</script>

<style>
	.check-box {
		display: inline-block;
		width: 1em;
		height: 1em;
		margin-right: 4px;
		line-height: inherit;
		background-image: url(../assets/check.png);
		background-size: contain;
	}
	
	.checked {
		background-image: url(../assets/checked.png);
	}
</style>