/*
发送ajax请求
封装axios库

1.优化:统一处理请求异常
    在外层定义一个promise
*/
import axios from 'axios'
import {message} from 'antd'


export default function ajax(url, data = {}, type = 'GET') {
    
    return new Promise((resolve, reject) => {
        let promise
        // 执行ajax异步请求
        if (type === 'GET') {
        promise =  axios.get(url, {
            // 配置对象
            params:data //当前指定请求参数
        })
        } else {
            promise = axios.post(url,data)
        }
        // 成功了，调用resolve(value)
        promise.then(response => {
            resolve(response)
            // 失败了，不调用reject，而是提示异常

        }).catch(error => {
            message.error('请求出错了：'+error.message)
        })
    })

    
}

// 请求登录接口
ajax('/login',{username:'',password:''},'POST').then()