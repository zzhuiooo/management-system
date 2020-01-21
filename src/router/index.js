import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router';



/**登陆 */
const Login = ()=>import('../views/Login');
/**主页 */
const Home = ()=>import('../views/Home')
/**统计个人活跃度 */
const personalActivity = ()=>import('../views/statisticActivity/personalIndex')
/**统计群活跃度 */
const groupActivity = ()=>import('../views/statisticActivity/groupIndex')
/**查询定制人的聊天记录 */
const searchChatRecord = ()=>import('../views/searchChatRecord/index')
/**统计群间亲密度 */
const statisticGroupIntimacy = ()=>import('../views/statisticGroupIntimacy/index')
/**统计聊天热此频率 */
const statisticWordFrequency = ()=>import('../views/statisticWordFrequency/index')

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path: '/',
      hidden: true,
      redirect: {
        name: 'login'
      }
    },
    {
      path: '/login',
      name: "login",
      component: Login,
      hidden: true,
      meta: {
        title: "登录",
        requireAuth: false
      }
    },
    {
      path: '/home',
      name: "home",
      component: Home,
      hidden: true,
      meta: {
        title: "主页",
        requireAuth: false
      }
    },
    {
      path: '/home',
      component: Home,
      name: "统计活跃度",
      leaf:false,
      icon:"el-icon-s-data",
      meta: {
        title: "统计活跃度"
      },
      children: [
        {
          path: "/home/personalActivity",
          component:personalActivity,
          name: "统计个人活跃度",
          meta: {
            title: "统计个人活跃度"
          }
        },{
          path: "/home/groupActivity",
          component:groupActivity,
          name: "统计群活跃度",
          meta: {
            title: "统计群活跃度"
          }
        }
      ]
    },
    {
      path: '/home',
      component: Home,
      leaf:true,
      icon:"el-icon-search",
      children: [
        {
          path: "/home/searchChatRecord",
          name: "查询定制人的聊天记录",
          component: searchChatRecord,
          meta: {
            title: "查询定制人的聊天记录"
          }
        },
      ]
    },
    {
      path: '/hmoe',
      component: Home,
      leaf:true,
      icon:"el-icon-data-analysis",
      children: [
        {
          path: "/home/statisticGroupIntimacy",
          name: "统计群间亲密度",
          component: statisticGroupIntimacy,
          meta: {
            title: "统计群间亲密度"
          }
        },
      ]
    },
    {
      path: '/hmoe',
      component: Home,
      leaf:true,
      icon:"el-icon-pie-chart",
      children: [
        {
          path: "/home/statisticWordFrequency",
          name: "统计聊天热词频度",
          component: statisticWordFrequency,
          meta: {
            title: "统计聊天热词频度"
          }
        },
      ]
    },
    {
      path: '/',
      leaf:true,
      icon:"el-icon-switch-button",
      children: [
        {
          path: "/",
          name: "退出登陆",
          component: Login,
          meta: {
            title: "退出登陆"
          }
        },
      ]
    }
  ],
  mode:'hash'
})


