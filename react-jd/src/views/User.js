// 引入 react 和组件 类
import  React ,{ Component } from "react";
import TabBar from "../components/TabBar";


// 创建一个Home的类 并集成component 
export default class User extends Component{
	
	// 构造函数
	constructor(props){
		super(props);
		
		this.state = {};
	}
	
	
	
	// 渲染
	render(){
		return (<div> 
					<h1>User</h1>
					<TabBar index={4} />
				</div>);
	}
	
	
}


