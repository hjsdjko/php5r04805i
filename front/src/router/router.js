import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import weixiurenyuanList from '../pages/weixiurenyuan/list'
import weixiurenyuanDetail from '../pages/weixiurenyuan/detail'
import weixiurenyuanAdd from '../pages/weixiurenyuan/add'
import ziyuanleixingList from '../pages/ziyuanleixing/list'
import ziyuanleixingDetail from '../pages/ziyuanleixing/detail'
import ziyuanleixingAdd from '../pages/ziyuanleixing/add'
import ziyuanxinxiList from '../pages/ziyuanxinxi/list'
import ziyuanxinxiDetail from '../pages/ziyuanxinxi/detail'
import ziyuanxinxiAdd from '../pages/ziyuanxinxi/add'
import yuyueziyuanList from '../pages/yuyueziyuan/list'
import yuyueziyuanDetail from '../pages/yuyueziyuan/detail'
import yuyueziyuanAdd from '../pages/yuyueziyuan/add'
import baoxiuziyuanList from '../pages/baoxiuziyuan/list'
import baoxiuziyuanDetail from '../pages/baoxiuziyuan/detail'
import baoxiuziyuanAdd from '../pages/baoxiuziyuan/add'
import guihaiziyuanList from '../pages/guihaiziyuan/list'
import guihaiziyuanDetail from '../pages/guihaiziyuan/detail'
import guihaiziyuanAdd from '../pages/guihaiziyuan/add'
import genghuanziyuanList from '../pages/genghuanziyuan/list'
import genghuanziyuanDetail from '../pages/genghuanziyuan/detail'
import genghuanziyuanAdd from '../pages/genghuanziyuan/add'
import weixiujiluList from '../pages/weixiujilu/list'
import weixiujiluDetail from '../pages/weixiujilu/detail'
import weixiujiluAdd from '../pages/weixiujilu/add'
import quxiaojiluList from '../pages/quxiaojilu/list'
import quxiaojiluDetail from '../pages/quxiaojilu/detail'
import quxiaojiluAdd from '../pages/quxiaojilu/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'weixiurenyuan',
					component: weixiurenyuanList
				},
				{
					path: 'weixiurenyuanDetail',
					component: weixiurenyuanDetail
				},
				{
					path: 'weixiurenyuanAdd',
					component: weixiurenyuanAdd
				},
				{
					path: 'ziyuanleixing',
					component: ziyuanleixingList
				},
				{
					path: 'ziyuanleixingDetail',
					component: ziyuanleixingDetail
				},
				{
					path: 'ziyuanleixingAdd',
					component: ziyuanleixingAdd
				},
				{
					path: 'ziyuanxinxi',
					component: ziyuanxinxiList
				},
				{
					path: 'ziyuanxinxiDetail',
					component: ziyuanxinxiDetail
				},
				{
					path: 'ziyuanxinxiAdd',
					component: ziyuanxinxiAdd
				},
				{
					path: 'yuyueziyuan',
					component: yuyueziyuanList
				},
				{
					path: 'yuyueziyuanDetail',
					component: yuyueziyuanDetail
				},
				{
					path: 'yuyueziyuanAdd',
					component: yuyueziyuanAdd
				},
				{
					path: 'baoxiuziyuan',
					component: baoxiuziyuanList
				},
				{
					path: 'baoxiuziyuanDetail',
					component: baoxiuziyuanDetail
				},
				{
					path: 'baoxiuziyuanAdd',
					component: baoxiuziyuanAdd
				},
				{
					path: 'guihaiziyuan',
					component: guihaiziyuanList
				},
				{
					path: 'guihaiziyuanDetail',
					component: guihaiziyuanDetail
				},
				{
					path: 'guihaiziyuanAdd',
					component: guihaiziyuanAdd
				},
				{
					path: 'genghuanziyuan',
					component: genghuanziyuanList
				},
				{
					path: 'genghuanziyuanDetail',
					component: genghuanziyuanDetail
				},
				{
					path: 'genghuanziyuanAdd',
					component: genghuanziyuanAdd
				},
				{
					path: 'weixiujilu',
					component: weixiujiluList
				},
				{
					path: 'weixiujiluDetail',
					component: weixiujiluDetail
				},
				{
					path: 'weixiujiluAdd',
					component: weixiujiluAdd
				},
				{
					path: 'quxiaojilu',
					component: quxiaojiluList
				},
				{
					path: 'quxiaojiluDetail',
					component: quxiaojiluDetail
				},
				{
					path: 'quxiaojiluAdd',
					component: quxiaojiluAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
