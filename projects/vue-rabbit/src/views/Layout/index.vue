<script setup>
import LayoutNav from "@/views/Layout/components/LayoutNav.vue"
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue"
import LayoutFooter from "@/views/Layout/components/LayoutFooter.vue"
import LayoutFixed from "@/views/Layout/components/LayoutFixed.vue"
// 触发获取导航列表的action
import {useCategoryStore} from "@/stores/category"
import {onMounted} from "vue"

const categoryStore = useCategoryStore()

onMounted(() => {categoryStore.getCategoryList()})
</script>

<template>
    <div>
        <LayoutFixed/>
        <!--导航-->
        <LayoutNav/>
        <!--页头-->
        <LayoutHeader/>
        <!--二级路由出口-->
        <router-view/>
        <!--页脚-->
        <LayoutFooter/>
    </div>
</template>
