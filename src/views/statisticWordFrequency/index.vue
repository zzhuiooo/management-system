<template>
    <el-card id="main-box">
        <el-radio-group v-model="showPeriod" style="margin-bottom: 30px;" @change="periodChange">
            <el-radio-button label="oneWeek">近一周</el-radio-button>
            <el-radio-button label="oneMonth">近一月</el-radio-button>
            <el-radio-button label="threeMonth">近三月</el-radio-button>
        </el-radio-group>
        <el-row>
            <el-col :span="12">
                <div  class="chart-left" id="barChartContainer"></div>
            </el-col>
            <el-col :span="12">
                <div  class="chart-right" id="pieChartContainer"></div>
            </el-col>
        </el-row>
    </el-card>
</template>
<script>
var echarts = require('echarts');
export default {
    name:'StatisticWordFrequency',
    data(){
        return{
            showPeriod:'oneWeek',
            barXData:[],
            barYData:[],
            pieData:[],
            oneWeekData:[{
                word:'aaa',
                frequency:98
            },{
                word:'bbb',
                frequency:89
            },{
                word:'ccc',
                frequency:86
            },{
                word:'ddd',
                frequency:81
            },{
                word:'eee',
                frequency:78
            },{
                word:'fff',
                frequency:72
            },{
                word:'ggg',
                frequency:71
            },{
                word:'hhh',
                frequency:68
            },{
                word:'iii',
                frequency:67
            },{
                word:'jjj',
                frequency:61
            }
            ],
            oneMonthData:[{
                word:'aaa',
                frequency:198
            },{
                word:'bbb',
                frequency:289
            },{
                word:'ccc',
                frequency:186
            },{
                word:'ddd',
                frequency:181
            },{
                word:'eee',
                frequency:152
            },{
                word:'fff',
                frequency:142
            },{
                word:'ggg',
                frequency:132
            },{
                word:'hhh',
                frequency:128
            },{
                word:'iii',
                frequency:126
            },{
                word:'jjj',
                frequency:116
            }
            ],
            threeMonthData:[{
                word:'aaa',
                frequency:584
            },{
                word:'bbb',
                frequency:549
            },{
                word:'ccc',
                frequency:486
            },{
                word:'ddd',
                frequency:481
            },{
                word:'eee',
                frequency:352
            },{
                word:'fff',
                frequency:342
            },{
                word:'ggg',
                frequency:332
            },{
                word:'hhh',
                frequency:228
            },{
                word:'iii',
                frequency:226
            },{
                word:'jjj',
                frequency:216
            }
            ],
            statisticData:[]
        }
    },
    mounted(){
        this.statisticData=this.oneWeekData
        this.init();
    },
    methods:{
        init(){
            //条形数据
            this.barXData=[],
            this.barYData=[],
            this.pieData=[]
            this.statisticData.forEach(item=>{
                this.barXData.push(item.word)
                this.barYData.push(item.frequency)
            })
            //饼图数据
            for(var i=0;i<5;i++){
                this.pieData.push({
                    value:this.statisticData[i].frequency,
                    name:this.statisticData[i].word
                })
            }
            // 前十的条状图
            var myBarChart = echarts.init(document.getElementById('barChartContainer'));
            // 绘制图表
            myBarChart.setOption({
                barWidth: 40,
                title: {
                    text: '聊天前十热词条状图',
                    left:320,
                },
                grid:{x:'14%',y:'14%',x2:'14%',y2:'14%'},
                tooltip: {},
                xAxis: {
                    data: this.barXData
                },
                yAxis: {},
                series: [{
                    name: '热词频率',
                    type: 'bar',
                    data: this.barYData,
                    itemStyle:{
                        normal:{
                            color:'#27727B'
                        }
                    }
                }]
            });
            // 前五的饼状图
            var myPieChart = echarts.init(document.getElementById('pieChartContainer'));
            // 绘制图表
            myPieChart.setOption({
                title: {
                    text: '聊天前五热词饼状图',
                    left:320,
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '64%',
                        roseType: 'angle',
                        data:this.pieData,
                        itemStyle: {
                            shadowBlur: 200,// 阴影的大小
                            shadowOffsetX: 0,// 阴影水平方向上的偏移
                            shadowOffsetY: 0,// 阴影垂直方向上的偏移
                            shadowColor: 'rgba(0, 0, 0, 0.2)'// 阴影颜色
                        },
                        label:{
                            fontSize: 18,
                            formatter: '{b}: {c}({d}%)'
                        }
                    }
                ]
            });
        },

        periodChange(){
            console.log('this.showPeriod',this.showPeriod)
            if(this.showPeriod=='oneWeek'){
                this.statisticData=this.oneWeekData
                this.init()
            }else if(this.showPeriod=='oneMonth'){
                this.statisticData=this.oneMonthData
                this.init()
            }else if(this.showPeriod=='threeMonth'){
                this.statisticData=this.threeMonthData
                this.init()
            }
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
.chart-left,.chart-right{
    width: 39.77vw;
    height: 65vh;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: center;
}
.chart-left{
    width: 39.77vw;
    height: 65vh;
    border-right: 0.15vh solid rgb(0, 0, 0,0.2);
}
</style>
