import React, { Component ,Fragment} from 'react';
import {HashRouter,Switch,Redirect,Route}from 'react-router-dom'
import Admin from  './pages/admin/admin'
import Login from  './pages/login/login'
import Goods from  './pages/goods/goods'
import Line1 from  './pages/echarts/line/line1'
import Line2 from  './pages/echarts/line/line2'
import Pie1 from  './pages/echarts/pie/pie1'
// import Test from './test'
// 所有的路由相关的配置全在 router文件夹里
import App from './App';
class Rrouter extends Component {
  render() {
    return (
     <Fragment>
        <App>
            <HashRouter>
                <Switch>
                    <Redirect exact from='/' to='/login'/>
                    {/* <Route  path="/admin" component={Admin}></Route> */}
                    <Route path='/admin' render={()=>{
                        return(
                        <Admin>
                              <Route path='/admin/goods' component={Goods}></Route> 
                              <Route path='/admin/echars/line/line1' component={Line1}></Route>
                              <Route path='/admin/echars/line/line2' component={Line2}></Route>
                              <Route path='/admin/echars/pie/pie1' component={Pie1}></Route>
                            
                        </Admin>
                        )
                    }}/>
                    <Route exact path='/login'component={Login}></Route>   
                </Switch>
        </HashRouter>
        </App>
     </Fragment>
    );
  }
}

export default Rrouter;
