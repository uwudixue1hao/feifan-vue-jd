import React, {
	Component
} from "react";
import "../assets/css/TabBar.css";

export default class TabBar extends Component {

	// 构造函数
	constructor(props) {
		super(props);

		this.state = {};
	}

	// 渲染
	render() {
		return(<div className='tab-bar'> 
					 <ul>
					 	<li>首页</li>
					 	<li>分类</li>
					 	<li>拼购</li>
					 	<li>购物车</li>
					 	<li>我的</li>
					 </ul>
				</div>);
	}
}