<template>
    <div id="container">
        <el-card class="login-box">
            <div class="login-title">
                <h2>XXXX后台管理系统</h2>
            </div>
            <div class="login-info-box">
                <el-form ref="form" :model="loginForm" class="login-form" label-width="80px">
                    <el-form-item label="用户名称">
                        <el-input v-model="loginForm.name" placeholder="请输入用户名称"></el-input>
                    </el-form-item>
                    <el-form-item label="用户密码">
                        <el-input v-model="loginForm.password" show-password placeholder="请输入用户密码"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div>
                <el-button type="primary" class="login-btn" @click="loginIn">登陆</el-button>
            </div>

        </el-card>
    </div>
</template>
<script>
export default {
    name:'Login',
    data(){
        return{
            loginForm:{
                name:'',
                password:'',
            }
        }
    },
    methods:{
        loginIn(){
            this.$router.push({ path: '/home'});
        }
    }
}
</script>
<style scoped>
#container{
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 98vh;
    margin: 0;
}
.login-box{
    width: 36vw;      
    height: 48vh;
    /* margin-top:12vh; */
    text-align: center;
    
}
.login-title{
    width: 100%;
    height: 30%;
    text-align: center;
    color: #409EFF;
    font-size: 1.15vw;
}
.login-info-box{
    width: 100%;
    height: 70%;
}
.login-form{
    width: 75%;
    margin: 4vw auto;
}
.login-btn{
    width: 35%;
    margin: 0 auto;
}
</style>
