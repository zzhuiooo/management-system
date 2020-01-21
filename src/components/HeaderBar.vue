<template>
    <el-row id="headerbar">
        <el-col :span="12" class="header-left">
            <div class="left-icon">
                <i class="el-icon-chat-dot-round"></i>
            </div>
            <div class="left-text">
                XXXX后台管理系统
            </div>
        </el-col>
        <!-- <el-col :span="12" class="header-right">
            <div class="right-icon">
                <el-tooltip effect="light" content="退出" placement="bottom-start">
                    <i class="el-icon-switch-button"></i>
                </el-tooltip>
            </div>
        </el-col> -->
    </el-row>
</template>
<script>
export default {
    name:'HeaderBar'
}
</script>
<style scoped>
#headerbar{
    width: 100%;
    height: 6%;
    background-color: #409EFF;
    margin: 0;
}
.header-left{
    height: 100%;
    margin: auto 0;
    display: -webkit-flex;
    display: flex;
    padding-left: 1.25vw;
}
.left-icon{
    font-size: 4.35vh;
    color: #fff;
}
.left-text{
    margin-left: 0.95vw;
    padding-top:1.15vh;
    font-size: 2.85vh;
    color: #fff;
}
.header-right{
    text-align: right;
    padding: 0 1.25vw;
    height: 100%;
}
.right-icon{
    height: 100%;
    padding-top: 1.15vh;
    font-size: 2.75vh;
    color: #fff;
    margin: auto 0;
}
</style>
