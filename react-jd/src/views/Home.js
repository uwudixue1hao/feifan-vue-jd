// 引入 react 和组件 类
import  React ,{ Component } from "react";
import TabBar from "../components/TabBar";


// 创建一个Home的类 并集成component 
export default class Home extends Component{
	
	// 构造函数
	constructor(props){
		super(props);
		
		this.state = {
			msg:'hello ',
			time:new Date()
		};
	}
	
	changeTime(){
		// 改变time
		this.setState({
			time:new Date()
		});
	}
	
	// jsx = js + html;
	// js return一个html 要用return ();
	// html 插入js部分要用一个 {}
	
	// 渲染
	render(){
		return (<div onClick={this.changeTime.bind(this)}> 
					{ this.state.msg + this.props.name  } 
					<div>{ this.state.time.toLocaleTimeString()}</div>
					<TabBar/>
				</div>);
	}
	
	
}


