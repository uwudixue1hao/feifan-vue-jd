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
			<el-button style="float: right; padding: 3px 0" type="text">+ 新增</el-button>
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

	</el-card>

</template>

<script>
	import db from "@/assets/js/student";

	export default {
		data() {
			return {
				current: 1,
				size: 10,
				total: 0,
				student: [],
			}
		},
		methods: {
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