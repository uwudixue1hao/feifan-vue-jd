<template>

	<div class="student-course-list">

		<van-checkbox-group v-model="selected">
			<van-cell-group title="未操作">
				<van-cell v-for="(item, index) in student" clickable :key="item.id" :title="item.name" @click="toggle(index)">
					<van-checkbox :name="item.id" ref="checkboxes" />
				</van-cell>
			</van-cell-group>
		</van-checkbox-group>

		<div class="setting" @click="show=true;">
			<van-icon name="edit" />
		</div>

		<div>{{selected}}</div>

		<van-actionsheet v-model="show" :actions="actions" @select="onSelect" />

		<van-dialog title="点评学生" v-model="dialogShow" show-cancel-button :before-close="beforeClose">
			

			<van-cell-group>
				<div class="van-cell van-field">
					<div class="van-cell__title van-field__label">
						<span>课堂表现</span>
					</div>
					<div class="van-cell__value">
						<div class="van-field__body">
							<van-rate v-model="rate.a" />
						</div>
					</div>
				</div>
				
				<div class="van-cell van-field">
					<div class="van-cell__title van-field__label">
						<span>出勤表现</span>
					</div>
					<div class="van-cell__value">
						<div class="van-field__body">
							<van-rate v-model="rate.b" />
						</div>
					</div>
				</div>
				
				<div class="van-cell van-field">
					<div class="van-cell__title van-field__label">
						<span>作业表现</span>
					</div>
					<div class="van-cell__value">
						<div class="van-field__body">
							<van-rate v-model="rate.c" />
						</div>
					</div>
				</div>
				
				<van-field v-model="rate.desc" label="点评备注" type="textarea" placeholder="请输入留言" rows="2" autosize />
			</van-cell-group>
		</van-dialog>

	</div>

</template>

<script>
	export default {
		data() {
			return {
				student: [{
					id: 1,
					name: '张三'
				}, {
					id: 2,
					name: '李四'
				}, {
					id: 3,
					name: '王五'
				}, {
					id: 4,
					name: '赵六'
				}],
				selected: [],
				show: false,
				actions: [{
					name: '点评'
				}, {
					name: '已到'
				}, {
					name: '迟到'
				}, {
					name: '请假'
				}, {
					name: '旷课'
				}],
				rate: {
					a: 0,
					b: 0,
					c: 0,
					desc:''
				},
				dialogShow: true
			}
		},
		methods: {
			toggle(index) {
				this.$refs.checkboxes[index].toggle();
			},
			onSelect(item) {
				console.log(item);
				this.show = false;
				if(item.name == "点评") {
					this.dialogShow = true;
				}
			},
			beforeClose(e) {
				console.log(e);
				this.dialogShow = false;
			}
		}
	}
</script>

<style>
	.setting {
		width: 50px;
		height: 50px;
		font-size: 30px;
		background-color: red;
		color: #ffffff;
		text-align: center;
		line-height: 50px;
		position: fixed;
		right: 20px;
		bottom: 100px;
		border-radius: 50%;
	}
</style>