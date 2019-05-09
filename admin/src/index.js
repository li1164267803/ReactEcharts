import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
import './common/style/index.less'
import RouterComponent from './router'
import  Axios  from './axios'
// import 'antd/dist/antd.css'//全局引入antd样式
import * as serviceWorker from './serviceWorker';
Component.prototype.$axios=Axios
ReactDOM.render(<RouterComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
