import React, {
	Component
} from "react";
import "../assets/css/SearchBar.css";

export default class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isFixed: false
		};
	}

	render() {
		return(<div className={"search-bar flex "+ (this.state.isFixed?'isFixed':'') }>
					<div className="category">
						<span className="icon"></span>
					</div>
					<div className="search-from  flex-item">
						<span className="icon"></span>
						<input type="" name="" id="" />
					</div>
					<div className="login">
						<span>登录</span>
					</div>
				</div>);
	}

	// 等效于created
	componentWillMount() {
		console.log('html没有渲染');
	}
	// 等效于 mounted
	componentDidMount() {
		console.log('html已经渲染');
		window.addEventListener('scroll',()=>{
			// 获取滚动的高度
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			if(scrollTop > 40) {
				this.setState({isFixed:true});
			} else {
				this.setState({isFixed:false});
			}
		});

	}

}