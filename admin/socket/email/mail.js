"use strict";
const nodemailer = require("nodemailer");

//创建发送邮件的对象
//nodemodules/nodemailer/well-know/service.josn //邮箱服务器信息
let transporter = nodemailer.createTransport({
host: "smtp.qq.com",
port: 465,
secure: true, // true for 465, false for other ports
auth: {
    user: 'xxxxx', // 发送方邮箱
    pass: 'xxxxxxx' // smtp授权码
}
});


  function sendMail(mail,code){
      return new Promise((resolve,reject)=>{
          if(!mail||!code){
            reject('参数错误')
          }
        //邮件信息
        let mailOptions = {
            from: '"Fred Foo 👻" <352186537@qq.com>', // sender address
            to: `${mail}`, // list of receivers
            subject: "随机科技注册验证码", // Subject line
            text: `欢迎注册您的验证码是,有效期${code}分钟，请注意安全`, // plain text body
            // html: "<h1>欢迎注册您的验证码是xxxxx,有效期5分钟，请注意安全</h1>" // html body
        };
        transporter.sendMail(mailOptions,(err,data)=>{
            if(err){
                reject('验证码发送失败')
            }else{
                resolve('验证码发送ok')
            }
        })
      })

  }
  module.exports={sendMail}



 