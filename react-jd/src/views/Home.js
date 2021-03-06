// 引入 react 和组件 类
import  React ,{ Component } from "react";
import TabBar from "../components/TabBar";
import SearchBar from "../components/SearchBar";
import Swiper from "../components/Swiper";


// 创建一个Home的类 并集成component 
export default class Home extends Component{
	
	// 构造函数
	constructor(props){
		super(props);
		
		this.state = {};
	}
	
	
	// 渲染
	render(){
		return (<div id="home">
					<SearchBar/>
					<Swiper/>
					<div style={{height:'1000px'}}></div>	
					
					<TabBar index={0} />
				</div>);
	}
	
	
}


