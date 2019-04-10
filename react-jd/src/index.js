import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from "react-router-dom";
import Home from "./views/Home.js";
import User from "./views/User.js";
import "./assets/css/style.css";

// 配置路由器
const RouterView = <BrowserRouter>
						<Route path="/" exact component={Home} ></Route>
						<Route path="/user" exact component={User} ></Route>
			   		</BrowserRouter>;

ReactDOM.render(RouterView,document.getElementById('app'));