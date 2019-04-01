<template>

	<el-card class="box-card" id="user-login">
		<div slot="header" class="clearfix">
			<span>用户登录</span>
			<el-button style="float: right; padding: 3px 0" type="text">注册</el-button>
		</div>
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="用户名">
				<el-input v-model="form.user" clearable placeholder="请输入用户名"></el-input>
			</el-form-item>
			<el-form-item label="密码">
				<el-input v-model="form.pwd" clearable placeholder="请输入密码" show-password></el-input>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="onSubmit">登录</el-button>
				<el-button>重置</el-button>
			</el-form-item>
		</el-form>

	</el-card>

</template>

<script>
	export default {

		data() {
			return {
				form: {
					user: '',
					pwd: ''
				}

			}
		},
		methods: {
			onSubmit() {

				if(this.form.user == "admin" && this.form.pwd == "admin") {
					this.$notify({
						title: '成功',
						message: '登录成功！',
						type: 'success'
					});
					this.$router.push("/admin");

				} else {
					this.$notify.error({
						title: '错误',
						message: '用户名或密码错误！'
					});
				}

			}
		}
	}
</script>

<style>
	#user-login {
		width: 400px;
		margin: 50px auto;
	}
</style>