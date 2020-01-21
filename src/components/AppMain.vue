<template>
    <el-main id="appmain">
        <router-view></router-view>
    </el-main>
</template>
<script>
export default {
    name:'AppMain'
}
</script>
<style scoped>
#appmain{
    height: 92%;
    width: 100%;
    background-color: #ebebeb;
}
</style>
