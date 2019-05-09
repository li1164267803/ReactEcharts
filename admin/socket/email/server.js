/*
1.邮箱占用
2.发送验证码接口
  1.前端传递一邮箱
  2.向指定邮箱发送验证码
3.注册接口
  验证邮箱验证码是否正确
*/
const express=require('express')
const app=express()
const mail=require('./mail')
//获取验证码
let auth={}
//radis memche 数据库
app.get('/getEmilCode',(req,res)=>{
    let email=req.query.email
    let code=parseInt(Math.random()*10000)
    auth[email]=code
    mail.sendMail(email,code)
    .then((data)=>{
        console.log(data)
        res.send({err:0,msg:' 验证码发送ok'})
    })
    .catch((err)=>{
        console.log(err)
        res.send({err:-1,msg:err})
    })
})

app.get('/reg',(req,res)=>{
    let {email,code,pass}=req.query
    // 验证邮箱和验证码是否匹配
    if(auth[email]&&auth[email]==code){
        //走注册逻辑
        res.send({err:0,msg:'注册ok'})
    }else{
        res.send({err:-1,msg:'验证码错误'})
    }
})
app.listen(3000,()=>{
    console.log('服务器启动')
})