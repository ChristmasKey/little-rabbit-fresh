import {defineStore} from "pinia"
import {computed, ref} from "vue";
import axios from "axios";

const API_URL = 'http://geek.itheima.net/v1_0/channels'
// 写法二
export const useCounterStore = defineStore('counter', () => {
    // 数据（state）
    const count = ref(0)
    // 修改数据的方法（action 支持同步+异步）
    const increment = () => {
        count.value++
    }
    // getter 定义
    const doubleCount = computed(() => count.value * 2)
    // 定义异步action
    const list = ref([])
    const getList = async () => {
        const res = await axios.get(API_URL)
        list.value = res.data.data.channels
    }

    // 以对象形式返回
    return {count, increment, doubleCount, list, getList}
})