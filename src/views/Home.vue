<template>
    <div id="mainpage">
        <el-container class="is-vertical el-container-one">
            <header-bar></header-bar>
            <el-container>
                <sider-bar></sider-bar>
                <el-container class="is-vertical">
                    <nav-bar></nav-bar>
                    <app-main></app-main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import HeaderBar from '../components/HeaderBar'
import SiderBar from '../components/SiderBar'
import NavBar from '../components/NavBar'
import AppMain from '../components/AppMain'

export default {
    name:"Home",
    components:{
        HeaderBar,
        SiderBar,
        NavBar,
        AppMain
    }
}
</script>
<style scoped>
#mainpage{
    width:100%;
    height:100%;
}
.el-container-one{
    height: 100%;
    width: 100%;
}
.header-bar{
    height: 20px;
    width: 100%;
}
</style>
