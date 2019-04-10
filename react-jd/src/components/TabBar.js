import React, {
	Component
} from "react";
import "../assets/css/TabBar.css";
import "../assets/css/iconfont.css";
import { Link } from "react-router-dom";

export default class TabBar extends Component {

	// 构造函数
	constructor(props) {
		super(props);
		this.state = {
			nav: [{
					icon: 'iconfont icon-home',
					title: '首页',
					url: '/'
				},
				{
					icon: 'iconfont icon-fenlei',
					title: '分类',
					url: '/category'
				},
				{
					icon: 'iconfont icon-pingou',
					title: '拼购',
					url: '/pin'
				},
				{
					icon: 'iconfont icon-shopping-cart',
					title: '购物车',
					url: '/shopping'
				},
				{
					icon: 'iconfont icon-user',
					title: '未登录',
					url: '/user'
				}
			]
		};
	}

	// 渲染
	render() {
		return(<div className="tab-bar-bottom">
					<ul className="clear">
					
					{
						this.state.nav.map((item,index)=>{
							return (<li className = {this.props.index === index?'active':''}  key={index}>
										<Link to={item.url}>
											<span className={'iconfont '+item.icon}></span>
											<div className="title">{item.title}</div>
										</Link>
									</li>);
						})
					}
						
					</ul>
				</div>);
	}
}