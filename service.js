//1.引入express
const express = require('express');
//2.创建应用对象
const app = express();
//3.创建路由规则
//request是请求报文的封装
//responses是响应报文的封装
app.get('/service',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('ajaxcGET请求发送成功-10')
});
app.post('/service',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('ajaxpost请求发送成功')
});
app.get('/ie',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('hello ie')
//    跨域问题 百度解决不了
});
app.get('/delay',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
setTimeout(()=>{
                response.send('网络延迟,请稍后再试')
            },3000)
});
// app.get('/jQuery-sever',(request,response)=>{
//     response.setHeader('Access-Control-Allow-Origin','*');
//     response.send('jQuery-get');
// });
// app.post('/jQuery-sever',(request,response)=>{
//     response.setHeader('Access-Control-Allow-Origin','*');
//     response.send('jQuery-post');
// });
app.all('/jQuery-sever',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    const data = {
        name : '张三',
        ID : 10
    }
    response.send(JSON.stringify(data));

});
app.all('/axios-sever',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    const data = {name : '张三', age : 10}
    response.send(JSON.stringify(data));
});
app.all('/josn-sever',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Header','*');
    //响应一个数据
    const data = {
        name:'zhangsan',
        id:'1'
    }
    //将数据转换为字符串数据类型
    let str = JSON.stringify(data);
    //设置响应体
    response.send(str);

});
app.all('/check-username',(request,response)=>{
    // response.setHeader('Access-Control-Allow-Origin','*');
    // response.setHeader('Access-Control-Allow-Headers','*'); 设置headers解决跨域
    const data = {exist : 1 , msg : '用户名已经存在'};
    let str = JSON.stringify(data);
    response.end(`handle(${str})`);
});
app.listen(8000,()=>{
    console.log("服务已经启动,8000端口监听中");
})
