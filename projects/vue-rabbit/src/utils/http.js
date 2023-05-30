// axios基础的封装
// 1.引入axios
import axios from 'axios'

// 2.创建axios实例
const httpInstance = axios.create({
    // http://pcapi-xiaotuxian-front-devtest.iteheima.net
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net', //根域名
    timeout: 5000, //请求超时时间
})

// 3.配置axios拦截器

// axios请求拦截器
httpInstance.interceptors.request.use(
    config => {
        return config
    },
    e => Promise.reject(e)
)

// axios响应拦截器
httpInstance.interceptors.response.use(
    res => res.data,
    e => Promise.reject(e)
)

// 4.暴露axios实例
export default httpInstance