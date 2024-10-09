import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import weixiurenyuan from '@/views/modules/weixiurenyuan/list'
    import ziyuanleixing from '@/views/modules/ziyuanleixing/list'
    import weixiujilu from '@/views/modules/weixiujilu/list'
    import ziyuanxinxi from '@/views/modules/ziyuanxinxi/list'
    import quxiaojilu from '@/views/modules/quxiaojilu/list'
    import forum from '@/views/modules/forum/list'
    import yuyueziyuan from '@/views/modules/yuyueziyuan/list'
    import baoxiuziyuan from '@/views/modules/baoxiuziyuan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import guihaiziyuan from '@/views/modules/guihaiziyuan/list'
    import genghuanziyuan from '@/views/modules/genghuanziyuan/list'
    import config from '@/views/modules/config/list'
    import newstype from '@/views/modules/newstype/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公告栏',
        component: news
      }
      ,{
	path: '/weixiurenyuan',
        name: '维修人员',
        component: weixiurenyuan
      }
      ,{
	path: '/ziyuanleixing',
        name: '资源类型',
        component: ziyuanleixing
      }
      ,{
	path: '/weixiujilu',
        name: '维修记录',
        component: weixiujilu
      }
      ,{
	path: '/ziyuanxinxi',
        name: '资源信息',
        component: ziyuanxinxi
      }
      ,{
	path: '/quxiaojilu',
        name: '取消记录',
        component: quxiaojilu
      }
      ,{
	path: '/forum',
        name: '在线论坛',
        component: forum
      }
      ,{
	path: '/yuyueziyuan',
        name: '预约资源',
        component: yuyueziyuan
      }
      ,{
	path: '/baoxiuziyuan',
        name: '报修资源',
        component: baoxiuziyuan
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/guihaiziyuan',
        name: '归还资源',
        component: guihaiziyuan
      }
      ,{
	path: '/genghuanziyuan',
        name: '更换资源',
        component: genghuanziyuan
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/newstype',
        name: '公告栏分类',
        component: newstype
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
