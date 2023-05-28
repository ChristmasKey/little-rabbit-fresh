<script setup>
import Edit from './components/Edit.vue'
import axios from "axios";
import {onMounted, ref} from "vue";

// 列表渲染
// 思路：声明响应式list -> 调用接口获取数据 -> 后端数据赋值给list -> 绑定到table组件
const dataList = ref([])
const getList = async () => {
    // 接口调用
    const res = await axios.get('/list')
    dataList.value = res.data
}

onMounted(() => getList())

// 删除功能
// 思路：获取当前行的id -> 通过id调用删除接口 -> 更新最新的列表
const onDelete = async id => {
    await axios.delete(`/del/${id}`)
    await getList()
}


// 编辑功能
// 思路：打开弹窗 -> 回填数据 -> 更新数据
const editRef = ref(null)
const onEdit = r => {
    editRef.value.open(r)
}
</script>

<template>
    <div class="app">
        <el-table :data="dataList">
            <el-table-column label="ID" prop="id"></el-table-column>
            <el-table-column label="姓名" prop="name" width="150"></el-table-column>
            <el-table-column label="籍贯" prop="place"></el-table-column>
            <el-table-column label="操作" width="150">
                <template #default="{ row }">
                    <el-button type="primary" link @click="onEdit(row)">编辑</el-button>
                    <el-button type="danger" link @click="onDelete(row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
    <Edit ref="editRef" @on-update="getList"/>
</template>

<style scoped>
.app {
    width: 980px;
    margin: 100px auto 0;
}
</style>
