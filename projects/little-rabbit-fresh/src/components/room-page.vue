<script setup>
import RoomMsgItem from "@/components/room-msg-item.vue";
import {provide, ref} from "vue";
// 组件嵌套关系：
// RoomPage -> RoomMsgItem -> RoomMsgComment

// 1.顶层组件提供数据
provide('data-key', 'this is room data')

const count = ref(0)
// 传递响应式数据
provide('count-key', count)

setTimeout(() => {
    count.value++
}, 1000)

const setCount = () => {count.value++}
// 跨层传递方法(原则：谁的数据谁负责修改，所以要传入方法)
provide('setCount-key', setCount)

</script>

<template>
    <div>
        顶层组件
        <RoomMsgItem style="margin: 20px;"/>
    </div>
</template>