// 封装分类数据业务相关的代码

import {onBeforeRouteUpdate, useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import {getCategoryAPI} from "@/apis/category";

export function useCategory() {
    const route = useRoute()
    const categoryData = ref([])

    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id)
        categoryData.value = res.result
    }

    onMounted(() => getCategory())

    onBeforeRouteUpdate(to => {
        getCategory(to.params.id)
    })

    return {
        categoryData
    }
}