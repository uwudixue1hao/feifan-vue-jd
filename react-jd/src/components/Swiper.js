import React, {
	Component
} from "react";
import swiper from "swiper";
import "swiper/dist/css/swiper.css";
import "../assets/css/Swiper.css";

export default class Swiper extends Component {

	constructor(props) {
		super(props);
		this.state = {
			images: [require('../assets/images/1.jpg'), require('../assets/images/2.jpg'), require('../assets/images/3.jpg'), require('../assets/images/4.jpg')]
		};
	}

	render() {
		return(<div className="swiper-container" id="swiper-container">
					<div className="swiper-wrapper">
						{
							this.state.images.map((item,index)=>{
								return (
									<div className="swiper-slide" key={index} >
										<img alt=" " src={item} /> 
									</div>
								);
							})
						}
					</div>
					<div className="swiper-pagination"></div>
				</div>);
	}

	// 等效于created
	componentWillMount() {}
	// 等效于 mounted
	componentDidMount() {
		new swiper('#swiper-container', {
			spaceBetween: 0,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			autoplay: true,
			loop: true
		});
	}

}