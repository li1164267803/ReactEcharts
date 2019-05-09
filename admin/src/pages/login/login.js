import React,{Component} from 'react'
import './login.less'
import {
   Form, Icon, Input, Button, Checkbox,Card,message
 } from 'antd';
 
 class NormalLoginForm extends React.Component {
   handleSubmit = (e) => {
       
     e.preventDefault();
     this.props.form.validateFields((err, values) => {
       if (!err) {
            this.$axios.get('/login',{query:{name:'wangyi',ps:456}})
            .then((data)=>{
               console.log(data)
               if(data.err==0){
                  message.success('登录成功，1秒自动跳转',1,()=>{
                     this.props.history.push('/admin')
                  })
               }else{
                  message.error(data.msg,1)
               }
            })
            .catch((err)=>{

            })
         // setTimeout(()=>{
         //    // message.success('登录成功，3秒自动跳转',3,()=>{
         //    //    this.props.history.push('/admin')
         //    // })
         //    message.error('登录失败请重试',1)
           
         // },1000)
       }
     });
   }
 
   render() {
     const { getFieldDecorator } = this.props.form;
     return (
        <Card 
         title='LOGIN IN '
        className='login'>
       <Form onSubmit={this.handleSubmit} className="login-form">
         <Form.Item>
           {getFieldDecorator('userName', {
             rules: [{ required: true, message: 'Please input your username!' }],
           })(
             <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
           )}
         </Form.Item>
         <Form.Item>
           {getFieldDecorator('password', {
             rules: [{ required: true, message: 'Please input your Password!' }],
           })(
             <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
           )}
         </Form.Item>
         <Form.Item>
           {getFieldDecorator('remember', {
             valuePropName: 'checked',
             initialValue: true,
           })(
             <Checkbox>Remember me</Checkbox>
           )}
           <a className="login-form-forgot" href="">Forgot password</a>
           <Button type="primary" htmlType="submit" className="login-form-button">
             Log in
           </Button>
           Or <a href="">register now!</a>
         </Form.Item>
       </Form>
       </Card>
     );
   }
 }
 
export default Form.create({ name: 'normal_login' })(NormalLoginForm);
 
 