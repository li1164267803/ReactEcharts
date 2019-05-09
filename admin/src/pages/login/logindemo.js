import React, { Component } from 'react';
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';

import './login.less'

class Login extends Component {
  login(e){
    let data=this.props.form.getFieldValue('username')
    console.log(data)
    // e.preventDefault();
    // this.props.form.validateFields((err, values) => {
    //   //所有的表单元素  满足验证 err 假  
    //   console.log(err,'err')
    //   console.log(values,'value')
    //   if (!err) {
       
    //     this.props.history.push('/admin')
    //   }
    // });
  }
  render() {
    console.log(this)
    const { getFieldDecorator } = this.props.form //表单的过滤
    return (
      <div className="login">
        <Form>
           <Form.Item>
              {
               getFieldDecorator(
                  //配置信息
                  'username',
                  {
                   rules:[{required:true,message:'用户名不能为空'},
                           {min:3,message:'不能少于5位'},
                           {max:10,message:'不能超过10位'},
                           {pattern:/^[a-zA-Z]/g,message:'首字母英文开头'}
                    ] 
                  }
               )(
                  // 要处理的组件
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
               ) 
              }
           </Form.Item>
           <Form.Item>
              {
               getFieldDecorator(
                  //配置信息
                  'password',
                  {
                   rules:[{required:true,message:'用户名不能为空'},
                           {min:3,message:'不能少于5位'},
                           {max:10,message:'不能超过10位'},
                           {pattern:/^[a-zA-Z]/g,message:'首字母英文开头'}
                    ] 
                  }
               )(
                  // 要处理的组件
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
               ) 
              }
           </Form.Item>
           <Form.Item>
              <Button onClick={this.login.bind(this)}>登录</Button>
           </Form.Item>
        </Form>
      </div>
    );
  }
}
const WrappedNormalLoginForm = Form.create()(Login);
export default WrappedNormalLoginForm;
