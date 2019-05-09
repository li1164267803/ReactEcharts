import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { Menu, Icon } from 'antd';
import './navleft.less'
import menuData from './rootMenu.js'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
console.log(menuData)

export default withRouter (class NavLeft extends Component {
  
  jump(path){
      console.log(this,path)
      this.props.history.push(path)
  }
  renderMenu(data){
    //   let data=menuData.menuData
      console.log(data)
      return data.map((item,index)=>{
          //根据是否有children  判断是1级还是多级
          if(item.children){
             return (
                <SubMenu key={index} title={item.name}>
                {this.renderMenu(item.children)}
               </SubMenu> 
             )
          }else{
              return (
                <Menu.Item key={index} onClick={this.jump.bind(this,item.path)}>
                   <span>{item.name}</span>
                </Menu.Item>
              )
          }
      })
  }
  render() {
    return (
      <div className="NavLeft">
        <Menu  mode="vertical" theme='dark'>
          {this.renderMenu(menuData.menuData)}
        {/* <Menu.Item  >
        
                <span>用户管理</span>
          
        </Menu.Item>
        <SubMenu title='图标管理'>
              <Menu.Item key="9">柱状图</Menu.Item>
              <Menu.Item key="9">饼状图</Menu.Item>
        </SubMenu> */}

        </Menu>
      </div>
    );
  }
})
// const newNav=withRouter(NavLeft)
// export default newNav;
