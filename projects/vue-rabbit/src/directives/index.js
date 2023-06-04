import {useIntersectionObserver} from "@vueuse/core"

export const imgLazyPlugin = {
    install(app) {
        // 懒加载指令逻辑
        app.directive('img-lazy', {
            mounted(el, binding) {
                // el：指令绑定的那个元素 img
                // binding：binding.value 指令等于号后面绑定的表达式的值 图片url
                const {stop} = useIntersectionObserver(el, ([{isIntersecting}]) => {
                    if (isIntersecting) {
                        // 图片进入视线区域，为其附上src属性
                        el.src = binding.value
                        // 调用stop停止监听
                        stop()
                    }
                })
            }
        })
    }
}