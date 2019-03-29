<template>
	<div class="leave">

		<van-nav-bar title="学生请假" left-text="返回" left-arrow @click-left="$router.go(-1);" />

		<van-cell-group>
			<van-field v-model="name" type="text" label="姓名" placeholder="请输入密码" required />

			<van-field @click="reasonShow=true" v-model="reason" type="text" label="理由" placeholder="请选择请假理由" />
			<van-field @click=";" v-model="start" type="text" label="开始时间" placeholder="请选择请假理由" />
			<van-field @click=";" v-model="end" type="text" label="结束时间" placeholder="请选择请假理由" />

		</van-cell-group>

		<van-popup v-model="reasonShow" position="bottom" :overlay="false">
			<van-picker show-toolbar title="请假理由" :columns="reasonArr" @cancel="reasonShow=false;" @confirm="reasonConfirm" />
		</van-popup>

	</div>

</template>

<script>
	export default {

		data() {
			return {
				name: '',
				reason: '',
				reasonArr: ['事假', '病假', '其他'],
				reasonShow: false,
			};
		},
		methods: {
			reasonConfirm(e) {
				this.reasonShow = false;
				this.reason = e;
			}
		}

	}
</script>

<style>

</style>