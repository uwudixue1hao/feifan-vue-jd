<template>
	<div class="teacher-course-list">
		<van-cell-group title="我的班级">
			<van-cell :value="item.count" is-link v-for="(item,index) in  course" >
				<template slot="title">
					<span class="custom-text">{{item.title}} </span> 
					<van-tag type="danger"> {{item.tag}}</van-tag>
				</template>
			</van-cell>
		</van-cell-group>
	</div>

</template>

<script>
	
	export default{
		
		data(){
			return {
				course:[
				{id:1,title:'Vue.js前端课程',tag:'进行中',count:12},
				{id:2,title:'javaScript',tag:'进行中',count:12},
				{id:3,title:'html',tag:'已完结',count:20},
				{id:4,title:'css',tag:'未开课',count:30},
				{id:5,title:'PHP',tag:'进行中',count:40},
				]
			};
		}
		
	}
	
	
</script>

<style lang="less">
	.teacher-course-list {}
</style>