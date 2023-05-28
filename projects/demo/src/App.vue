<template>
    <button @click="addCount">{{ count }}</button>
</template>

<script setup>
//Vue3的组合式api
import { ref } from 'vue'
const count = ref(0)
const addCount = () => count.value++

//Vue2的代码
// export default {
//     name: 'App',
//     data() {
//         return {
//             count: 0
//         }
//     },
//     methods: {
//         addCount() {
//             this.count++
//         }
//     }
// }
</script>