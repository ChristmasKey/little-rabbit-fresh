<script setup>
</script>

<template>
    <!--一级路由的出口组件-->
    <router-view/>
    <div class="test">test scss</div>
</template>

<style scoped lang="scss">
.test {
  color: $priceColor;
}
</style>
