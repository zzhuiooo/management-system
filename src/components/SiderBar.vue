<template>
    <el-aside id="siderbar">
        <div class="user-info">
            <el-row class="user-info-icon">
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="70"></el-avatar>
            </el-row>
            <el-row class="user-info-text">
                <span>Hello！XXX</span>
            </el-row>
        </div>
        <el-menu
        :default-active="$route.path" 
        class="el-menu-vertical-demo"
        router
        active-text-color="#409EFF"
        >
        <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
            <!-- 有子项的 -->
            <el-submenu :index="index+''" v-if="!item.leaf" :key="item.name">
                <template slot="title">
                    <i :class="item.icon" class="icon-style"></i>
                    <span slot="title" class="menu-item">{{item.name}}</span>
                </template>
                <el-menu-item
                    v-for="child in item.children"
                    :index="child.path"
                    :key="child.path"
                    v-if="!child.hidden"
                >
                    <!-- <i :class="item.icon" class="icon-style"></i> -->
                    <span slot="title" class="menu-sub-item">{{ child.name }}</span>
                </el-menu-item>
            </el-submenu>
            <!-- 没有子项的 -->
            <el-menu-item
            v-if="item.leaf&&item.children.length>0"
            :index="item.children[0].path"
            :key="item.name"
            >
                <i :class="item.icon" class="icon-style"></i>
                <span slot="title" class="menu-item">{{ item.children[0].name }}</span>
            </el-menu-item>
        </template>
        </el-menu> 
    </el-aside>
</template>
<script>
export default {
    name:'SiderBar',
}
</script>
<style scoped>
#siderbar{
    height: 100%;
    background-color: #fff;
    margin: 0;
}
.user-info{
    width: 100%;
    text-align: center;
}
.user-info-icon{
    margin: 3vh auto;
}
.user-info-text{
    text-align: center;
    color: #409EFF;
    font-size: 0.95vw;
    font-weight: bolder;
    margin-bottom: 3vh;
}
.icon-style{
    font-size: 0.95vw;
    margin-left: 0.95vw;
}
.menu-item{
    font-size: 0.75vw;
    margin-left: 0.45vw;
}
.menu-sub-item{
    margin-left: 1.5vw;
}
</style>
