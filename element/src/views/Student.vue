<template>

	<!-- 
		预习table组件
		
		做一个学生管理页面
		
		姓名 手机号  地址   课程   价格 微信  QQ 管理功能（删除/修改）
		
		预习分页效果
		
		
		做一个添加学生的功能 
			1.要求有弹窗
			
		做一个排课的页面
			1. 选择课程
			2. 选择教室
			3. 选择时间
			4. 添加学生到这个排课下面
			5. 要用到table 列出所有的排课
	-->

	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>学生管理</span>
			<el-button style="float: right; padding: 3px 0" type="text" @click="addStudentDialog = true">+ 新增</el-button>
		</div>
		<el-table :data="student" size="small" stripe border :row-class-name="tableRowClassName" style="width: 100%" @selection-change="handleSelectionChange">
			<el-table-column type="selection" width="55" fixed> </el-table-column>
			<el-table-column type="index" width="55" fixed></el-table-column>
			<el-table-column prop="name" sortable fixed label="姓名" width="180" align="center"></el-table-column>
			<el-table-column prop="sex" sortable label="性别" :filters="[{ text: '男', value: '男' }, { text: '女', value: '女' }]" :filter-method="filterData" filter-placement="bottom-end" width="180" align="center"></el-table-column>
			<el-table-column prop="phone" label="手机号" width="180" align="center"></el-table-column>
			<el-table-column prop="course" sortable label="课程" width="180" align="center"></el-table-column>
			<el-table-column prop="money" sortable label="价格" width="180" align="center"></el-table-column>
			<el-table-column prop="wechat" label="微信" width="180" align="center"></el-table-column>
			<el-table-column prop="qq" label="QQ" width="180" align="center"></el-table-column>
			<el-table-column prop="address" label="地址" align="center"></el-table-column>

			<el-table-column fixed="right" label="操作" align="center" width="150">
				<template slot-scope="scope">
					<el-button type="primay" size="small">查看</el-button>
					<el-button type="success" size="small">编辑</el-button>
				</template>
			</el-table-column>
		</el-table>

		<div class="pages" style="margin-top: 20px; text-align: center;">
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="current" :page-sizes="[5,10,20]" :page-size="size" layout="total, sizes, prev, pager, next, jumper" :total="total">
			</el-pagination>
		</div>

		<el-dialog title="添加学生" :visible.sync="addStudentDialog" width="500px" :before-close="handleClose">

			<el-form ref="form" :model="form" label-width="80px">

				<el-row :gutter="0">
					<el-col :span="12">
						<el-form-item prop="name" label="姓名" :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]">
							<el-input v-model="form.name"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item prop="sex" label="性别">
							<el-radio-group v-model="form.sex">
								<el-radio label="男" value='0'></el-radio>
								<el-radio label="女" value='1'></el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="0">
					<el-col :span="12">
						<el-form-item prop="phone" label="手机号" :rules="checkPhoneRule">
							<el-input v-model="form.phone" ></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item prop="course" label="课程">
							<el-select v-model="form.course" placeholder="请选择课程">
								<el-option v-for="(item,index) in courses" :label="item.label" :value="item.value" :key="index"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="0">
					<el-col :span="24">
						<el-form-item prop="address" label="省市区县">
							<el-cascader style="width:100%" :options="region" v-model="form.address">
							</el-cascader>
						</el-form-item>
					</el-col>

					<el-col :span="24">
						<el-form-item prop="street" label="详细地址">
							<el-input type="textarea" v-model="form.street"></el-input>
						</el-form-item>
					</el-col>

				</el-row>

				<el-form-item>
					<el-button type="primary" @click="submitForm('form');">添加</el-button>
					<el-button @click="resetForm('form');">取消</el-button>
				</el-form-item>

			</el-form>

		</el-dialog>

	</el-card>

</template>

<script>
	import db from "@/assets/js/student";
	import region from "@/assets/js/region.json";
	export default {
		data() {
			var checkPhone = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入手机号'));
				} else {
					if(/^1[3578]\d{9}$/.test(value)){
						callback();
					}else{
						callback(new Error('手机号格式错误！'));
					}
				}
			};

			return {
				checkPhoneRule: [{
					required: true,
					validator: checkPhone,
					trigger: 'blur'
				}],
				form: {
					name: '',
					sex: 0,
					phone: '',
					course: 0,
					address: [1, 1, 1],
					satreet: ''
				},
				region: [],
				courses: [{
					label: '网页前端',
					value: '1'
				}, {
					label: '室内',
					value: '2'
				}, {
					label: 'UI',
					value: '3'
				}, {
					label: '模具',
					value: '4'
				}],
				current: 1,
				size: 10,
				total: 0,
				student: [],
				addStudentDialog: false
			}
		},
		methods: {

			handleClose() {
				this.addStudentDialog = false;
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},

			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			handleSizeChange(val) {
				this.size = val;
				let res = db.getStudent(this.size, this.current);
				this.total = res.total;
				this.student = res.result;
				console.log(val);
			},
			handleCurrentChange(val) {
				this.current = val;
				let res = db.getStudent(this.size, this.current);
				this.total = res.total;
				this.student = res.result;
				console.log(val);
			},
			tableRowClassName({
				row,
				rowIndex
			}) {
				//				if(rowIndex % 2 == 0) {
				//					return "table-danger";
				//				} else {
				//					return "table-success";
				//				}
				return "";
			},
			handleSelectionChange(row) {
				//				console.log(row);
			},
			filterData(value, row) {
				console.log(value);
				console.log(row);
				return row.sex == value;
			}
		},
		created() {

			let res = db.getStudent(10, 2);
			this.total = res.total;
			this.student = res.result;
			this.region = region;
			console.log(res);
		}
	}
</script>

<style>
	.table-danger {
		background-color: red!important;
		color: #fff;
	}
	
	.table-success {
		/*background-color: green!important;
		color: #fff;*/
	}
</style>