export default {
	student: [{
		id: 1,
		name: '小明1',
		sex: '男',
		phone: '13988888888',
		course: '网页前端',
		money: 11,
		wechat: 'xiaoming123',
		qq: '13988888888',
		address: '上海徐家汇',
	}, {
		id: 2,
		name: '小明2',
		sex: '男',
		phone: '13988888888',
		course: '网页前端',
		money: 22,
		wechat: 'xiaoming123',
		qq: '13988888888',
		address: '上海徐家汇',
	}, {
		id: 3,
		name: '小红3',
		sex: '女',
		phone: '13988888888',
		course: '网页前端',
		money: 33,
		wechat: 'xiaoming123',
		qq: '13988888888',
		address: '上海徐家汇',
	}, {
		id: 4,
		name: '小红4',
		sex: '女',
		phone: '13988888888',
		course: '网页前端',
		money: 44,
		wechat: 'xiaoming123',
		qq: '13988888888',
		address: '上海徐家汇',
	}, {
		id: 5,
		name: '小红5',
		sex: '女',
		phone: '13988888888',
		course: '网页前端',
		money: 55,
		wechat: 'xiaoming123',
		qq: '13988888888',
		address: '上海徐家汇',
	}, {
		id: 6,
		name: '小红6',
		sex: '女',
		phone: '13988888888',
		course: '网页前端',
		money: 66,
		wechat: 'xiaoming123',
		qq: '13988888888',
		address: '上海徐家汇',
	}, {
		id: 7,
		name: '小明7',
		sex: '男',
		phone: '13988888888',
		course: '网页前端',
		money: 77,
		wechat: 'xiaoming123',
		qq: '13988888888',
		address: '上海徐家汇',
	}, {
		id: 8,
		name: '小红8',
		sex: '女',
		phone: '13988888888',
		course: '网页前端',
		money: 55,
		wechat: 'xiaoming123',
		qq: '13988888888',
		address: '上海徐家汇',
	}, {
		id: 9,
		name: '小红9',
		sex: '女',
		phone: '13988888888',
		course: '网页前端',
		money: 66,
		wechat: 'xiaoming123',
		qq: '13988888888',
		address: '上海徐家汇',
	}, {
		id: 10,
		name: '小明10',
		sex: '男',
		phone: '13988888888',
		course: '网页前端',
		money: 77,
		wechat: 'xiaoming123',
		qq: '13988888888',
		address: '上海徐家汇',
	},{
		id: 11,
		name: '小明',
		sex: '男',
		phone: '13988888888',
		course: '网页前端',
		money: 11,
		wechat: 'xiaoming123',
		qq: '13988888888',
		address: '上海徐家汇',
	}, {
		id: 12,
		name: '小明',
		sex: '男',
		phone: '13988888888',
		course: '网页前端',
		money: 22,
		wechat: 'xiaoming123',
		qq: '13988888888',
		address: '上海徐家汇',
	}, {
		id: 13,
		name: '小红',
		sex: '女',
		phone: '13988888888',
		course: '网页前端',
		money: 33,
		wechat: 'xiaoming123',
		qq: '13988888888',
		address: '上海徐家汇',
	}, {
		id: 14,
		name: '小红',
		sex: '女',
		phone: '13988888888',
		course: '网页前端',
		money: 44,
		wechat: 'xiaoming123',
		qq: '13988888888',
		address: '上海徐家汇',
	}, {
		id: 15,
		name: '小红',
		sex: '女',
		phone: '13988888888',
		course: '网页前端',
		money: 55,
		wechat: 'xiaoming123',
		qq: '13988888888',
		address: '上海徐家汇',
	}, {
		id: 16,
		name: '小红',
		sex: '女',
		phone: '13988888888',
		course: '网页前端',
		money: 66,
		wechat: 'xiaoming123',
		qq: '13988888888',
		address: '上海徐家汇',
	}, {
		id: 17,
		name: '小明',
		sex: '男',
		phone: '13988888888',
		course: '网页前端',
		money: 77,
		wechat: 'xiaoming123',
		qq: '13988888888',
		address: '上海徐家汇',
	}, {
		id: 18,
		name: '小红',
		sex: '女',
		phone: '13988888888',
		course: '网页前端',
		money: 55,
		wechat: 'xiaoming123',
		qq: '13988888888',
		address: '上海徐家汇',
	}, {
		id: 19,
		name: '小红',
		sex: '女',
		phone: '13988888888',
		course: '网页前端',
		money: 66,
		wechat: 'xiaoming123',
		qq: '13988888888',
		address: '上海徐家汇',
	}, {
		id: 20,
		name: '小明',
		sex: '男',
		phone: '13988888888',
		course: '网页前端',
		money: 77,
		wechat: 'xiaoming123',
		qq: '13988888888',
		address: '上海徐家汇',
	}],
	// 分页获取学生数据
	getStudent(size = 10, page = 1) {
		var arr = [];
		
		for(let i=0;i<size;i++){
			arr.push(this.student[(page-1)*size+i]);
		}
		
		return {total:this.student.length,result:arr};
	}

}