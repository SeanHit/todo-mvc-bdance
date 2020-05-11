/*
* 发送异步ajax请求函数
* 封装axios库
* 函数的返回值是一个promise对象
*
* 1.优化 统一处理请求异常
* 2.请求成功  reslove (response.date)
* */
import axios from 'axios'
import {message} from "antd";

export default function ajax(url,data={},type='GET') {  //引入模块

    return new Promise((resolve, reject) => {
        let promise;
        //    1.执行异步请求
        if (type === 'GET') {  //发get
            promise = axios.get(url, {
                params: data   //指定请求参数
            });
        } else {
            promise = axios.post(url, data);
        }

        //    2.成功 ,调用 resolve(value)

        promise.then(response => {
            resolve(response.data)
        }).catch(error => {
            message.error('请求出错了' + error.message); //使用的antd
        })
    })

}