import httpInstance from "@/utils/http";

// 获取banner
export function getBannerAPI() {
    return httpInstance({
        url: '/home/banner',
        method: 'get'
    })
}

// 获取新鲜好物
export function getNewAPI() {
    return httpInstance({
        url: '/home/new',
        method: 'get'
    })
}

// 获取人气推荐
export function getHotAPI() {
    return httpInstance({
        url: '/home/hot',
        method: 'get'
    })
}

// 获取产品列表
export function getGoodsAPI() {
    return httpInstance({
        url: '/home/goods',
        method: 'get'
    })
}