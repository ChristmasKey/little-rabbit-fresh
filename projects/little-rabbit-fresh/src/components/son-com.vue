<script setup>

import {ref} from "vue";

const name = ref('test name')
const setName = () => {
    name.value = 'test new name'
}

// 通过defineExpose编译器宏指定哪些东西要暴露给外部
defineExpose({
    name,
    setName
})
</script>

<template>
    <div>我是son组件</div>
</template>