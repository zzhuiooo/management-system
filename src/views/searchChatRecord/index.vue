<template>
    <el-card id="main-box">
        <!-- 按条件搜索栏 -->
        <el-form :inline="true" :model="searchValue" label-width="auto" label-position="left" class="search-form">
            <el-row>
                <el-col :span="5">
                    <el-form-item label="所查询编号">
                        <el-input v-model="searchValue.userId" placeholder="请输入需要查询的编号"></el-input>
                    </el-form-item>
                </el-col>
                
                <el-col :span="6">
                    <el-button type="primary" class="search-btn" :loading="loading" icon="el-icon-search">搜索</el-button>
                </el-col>
            </el-row>
        </el-form>
        <!-- 显示记录的table -->
        <el-table :data="tableData" style="width:100%" empty-text="暂无数据" size="medium" class="table-style" :header-cell-style="{background:'#F3F5FB',color:'#5C6987'}">
            <el-table-column prop="userId" label="用户编号" align="center" width="180"></el-table-column>
            <el-table-column prop="userName" label="用户昵称" align="center" width="200"></el-table-column>
            <el-table-column prop="speakWithId" label="聊天对象编号" align="center" width="180"></el-table-column>
            <el-table-column prop="speakWithName" label="聊天对象昵称" align="center" width="200"></el-table-column>
            <el-table-column prop="messageSendTime" label="发送时间" align="center" width="240"></el-table-column>
            <el-table-column prop="messageContent" label="聊天内容" align="center" show-overflow-tooltip></el-table-column>
        </el-table>
        <!-- 页码按钮 -->
        <el-pagination 
        :page-size="paginationParams.pageSize" 
        :pager-count="paginationParams.pagerCount" 
        :hide-on-single-page="true"
        layout="prev, pager, next" 
        :total="paginationParams.total" 
        @current-change="currentChange"
        class="pagination-style"></el-pagination>
        <!-- 
        @prev-click="prevClick"
        @next-click="nextClick" -->
    </el-card>
</template>
<script>
export default {
    name:'SearchChatRecord',
    data(){
        return{
            loading:false,
            paginationParams:{
                pageSize:10,
                pagerCount:5,
                total:0
            },
            searchValue:{
                userId:'',
            },
            tableData:[],
            totalTableData:[],
        }
    },
    mounted(){
        var testData={
            userId:'10001',
            userName:'zgy',
            speakWithId:'200001',
            speakWithName:'lalala',
            messageSendTime:'2020-01-02 23:45:34',
            messageContent:'asdkuhcasuoauoconsadcsasfvhbjccbjdkrhgfvbcnkdeiuyrgfbcnkieruhfncxkieufdjweudhcbcndjiiaosc',
        }
        var totalRecord=105;
        for(var i=0;i<totalRecord;i++){
            this.totalTableData.push(testData)
        }
        this.paginationParams.total=totalRecord
        if(this.totalTableData.length>10){
            this.tableData=this.totalTableData.slice(0,10)
        }else{
            this.tableData=this.totalTableData.slice(0,this.totalTableData.length)
        }
    },
    methods:{
        currentChange(e){
            var startNum=(e-1)*10
            var endNum=e*10
            if(this.totalTableData.length<endNum){
                endNum = this.totalTableData.length
            }
            this.tableData=this.totalTableData.slice(startNum,endNum)
        },
        
    }
}
</script>
<style scoped>
#main-box{
    width: 100%;
    height: 98%;
    margin: 0 auto;
}
.search-form{
    margin: 1.25vh 0;
}
.pagination-style{
    margin-top:3.75vh;
    text-align: center;
}
</style>