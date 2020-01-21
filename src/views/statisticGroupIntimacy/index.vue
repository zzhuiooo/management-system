<template>
    <el-card id="main-box">
        <!-- 按条件搜索栏 -->
        <el-form :inline="true" :model="searchValue" label-width="auto" label-position="left" class="search-form">
            <el-row>
                <el-col :span="6">
                    <el-form-item label="聊天群一编号">
                        <el-input v-model="searchValue.groupOneId" placeholder="请输入聊天群一编号"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="聊天群二编号">
                        <el-input v-model="searchValue.groupTwoId" placeholder="请输入聊天群二编号"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-button type="primary" class="search-btn" :loading="loading" icon="el-icon-search" @click="testIntimacy">亲密度查询</el-button>
                </el-col>
            </el-row>
            <el-row v-if="showResult">
                <el-col :span="14">
                    <div  class="chart-left" id="chartContainer"></div>
                </el-col>
                <el-col :span="10">
                    <div  class="chart-right">
                        <!-- 两个群基本信息 -->
                        <span class="table-title">所查询亲密度群信息</span>
                        <el-table :data="tableGroupData" border style="width: 100%" empty-text="暂无数据">
                            <el-table-column prop="groupId" label="群聊编号"></el-table-column>
                            <el-table-column prop="groupName"  label="群聊名称"></el-table-column>
                            <el-table-column prop="groupUserNum"  label="群聊人数" ></el-table-column>
                            <el-table-column prop="groupNote"  label="群聊标签"></el-table-column>
                        </el-table>
                        <div class="height-box"></div>
                        <!-- 两个群亲密的指标得分信息 -->
                        <span class="table-title">所查询亲密度群信息</span>
                        <el-table :data="tableIndexData" border show-summary style="width: 100%" empty-text="暂无数据">
                            <el-table-column prop="intimacyIndex" label="亲密度指标"></el-table-column>
                            <el-table-column prop="indexNote"  label="指标说明"></el-table-column>
                            <el-table-column prop="indexScore"  label="指标得分" sortable></el-table-column>
                            <el-table-column prop="indexLevel"  label="亲密度水平"></el-table-column>
                        </el-table>
                    </div>
                </el-col>
            </el-row>
            <el-row v-else class="group-intim-tips">
                <span>请先选取所需测试的聊天群</span>
            </el-row>
        </el-form>
    </el-card>
</template>
<script>
var echarts = require('echarts');

export default {
    name:'GroupIntimacy',
    data(){
        return{
            searchValue:{
                groupOneId:'',
                groupTwoId:''
            },
            loading:false,
            showResult:false,
            tableGroupData:[{
                groupId:'1000001',
                groupName:'groupOne',
                groupUserNum:322,
                groupNote:'dasasd'
            },{
                groupId:'1000002',
                groupName:'groupTwo',
                groupUserNum:232,
                groupNote:'dasasd'
            } 
            ],
            tableIndexData:[{
                intimacyIndex:'indexOne',
                indexNote:'lalala',
                indexScore:98,
                indexLevel:'很高'
            },{
                intimacyIndex:'indexTwo',
                indexNote:'lalala',
                indexScore:88,
                indexLevel:'高'
            },{
                intimacyIndex:'indexThree',
                indexNote:'lalala',
                indexScore:78,
                indexLevel:'较高'
            },{
                intimacyIndex:'indexFour',
                indexNote:'lalala',
                indexScore:48,
                indexLevel:'很低'
            },{
                intimacyIndex:'indexFive',
                indexNote:'lalala',
                indexScore:68,
                indexLevel:'较低'
            }

            ]
        }
    },
    methods:{
        initChart(){
            var radarData=[]
            var indexScore=[]
            this.tableIndexData.forEach(item=>{
                radarData.push({
                    name:item.intimacyIndex,
                    max:100
                })
                indexScore.push(item.indexScore)
            })
            var myChart = echarts.init(document.getElementById('chartContainer'));
            myChart.setOption({
                title: {
                    text: '亲密度得分',
                    left:390,
                },
                tooltip: {},
                grid:{x:'14%',y:'14%',x2:'14%',y2:'14%'},
                radar: {
                    name: {
                        textStyle: {
                            color: 'black',
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    },
                    indicator: radarData
                },
                series: [{
                    name: '得分',
                    type: 'radar',
                    areaStyle: {normal: {}},
                    data: [
                        {name: "亲密度值", value: indexScore}
                    ],
                    itemStyle:{
                        normal:{
                            color:'#27727B'
                        }
                    }
                }]
            });
        },

        testIntimacy(){
            this.showResult = true;
            setTimeout(()=>{
                this.initChart();
            })
        }
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
    margin: 1.25vh 2vh;
}

.chart-left{
    width: 100%;
    height: 65vh;
    /* border: 0.15vh solid rgb(0, 0, 0,0.2); */
}
.chart-right{
    width: 100%;
    height: 65vh;
    /* border: 0.15vh solid rgb(0, 0, 0,0.2); */
    text-align: center;
}
.table-title{
    display: block;
    font-size: 1.65vh;
    color: rgb(0, 0, 0,0.5);
    font-weight: bolder;
    margin: 1.85vh auto;
}
.height-box{
    width: 100%;
    height: 1vh;;
    margin: 0.75vh auto;
}
.group-intim-tips{
    color: #c8c8c8;
    text-align: center;
    margin: 10vh auto;
    font-size: 3.25vh;
}

</style>
