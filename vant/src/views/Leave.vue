<template>
	<div class="leave">

		<van-nav-bar title="学生请假" left-text="返回" left-arrow @click-left="$router.go(-1);" />

		<van-cell-group>
			<van-field v-model="name" type="text" label="姓名" placeholder="请输入密码" required />

			<van-field @click="reasonShow=true" v-model="reason" type="text" label="理由" placeholder="请选择请假理由" />
			<van-field @click="dateShow=true;flag=0;" :value="formateDate(start)" type="text" label="开始时间" placeholder="请选择请假理由" />
			<van-field @click="dateShow=true;flag=1;" :value="formateDate(end)" type="text" label="结束时间" placeholder="请选择请假理由" />

		</van-cell-group>

		<van-popup v-model="reasonShow" position="bottom" :overlay="false">
			<van-picker show-toolbar title="请假理由" :columns="reasonArr" @cancel="reasonShow=false;" @confirm="reasonConfirm" />
		</van-popup>

		<van-popup v-model="dateShow" position="bottom" :overlay="false">
			<van-datetime-picker v-model="currentDate" type="datetime" @confirm="confirmDate" @cancel="cancelDate" />
		</van-popup>

		<div style="margin-top: 30px; padding: 0px 20px;">

			<van-button type="primary" size="large" @click="onSubmit">确定</van-button>

		</div>

	</div>

</template>

<script>
	import { Toast } from 'vant';
	export default {

		data() {
			return {
				name: '',
				reason: '',
				start: 0,
				end: 0,
				reasonArr: ['事假', '病假', '其他'],
				reasonShow: false,
				dateShow: false,
				currentDate: new Date(),
				flag: 0,
			};
		},
		methods: {
			reasonConfirm(e) {
				this.reasonShow = false;
				this.reason = e;
			},
			confirmDate(e) {
				if(this.flag == 0) {
					var now = new Date();
					this.start = e.getTime();
				} else if(this.flag == 1) {
					this.end = e.getTime()
				}
				this.dateShow = false;
			},
			cancelDate() {
				this.dateShow = false;
			},
			formateDate(timestamp) {
				var d = new Date(timestamp);
				var Y = d.getFullYear();
				var M = d.getMonth() + 1;
				var D = d.getDate();
				var h = d.getHours();
				var m = d.getMinutes();
				var s = d.getSeconds();
				return Y + "/" + (M < 10 ? '0' + M : M) + "/" + (D < 10 ? '0' + D : D) + " " + (h < 10 ? '0' + h : h) + ":" + (m < 10 ? '0' + h : h) + ":" + (s < 10 ? '0' + s : s);
			},
			onSubmit() {
				Toast.loading({
					mask: true,
					message: '提交中...'
				});
				setTimeout(()=>{
					Toast.clear();
					Toast('提交成功！');
				},3000);
			}
		}

	}
</script>

<style>

</style>