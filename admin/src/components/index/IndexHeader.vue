<template>
	<div class="navbar">
		<div class="title" :style='{"display":"block","margin-right":"auto"}'>
			<el-image v-if="false" class="title-img" :style='{"width":"34px","objectFit":"cover","borderRadius":"100%","float":"left","height":"34px"}' src="http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg" fit="cover" />
			<span class="title-name" :style='{"padding":"0 0 0 12px","lineHeight":"44px","fontSize":"22px","color":"#f6f5ec","float":"left"}'>{{this.$project.projectName}}</span>
		</div>
		<!-- 天气 -->
		<div class="weather" :style='{"padding":"0 20px","alignItems":"center","justifyContent":"center","display":"flex"}'>
		  <div :style='{"padding":"0 4px","fontSize":"16px","lineHeight":"44px","color":"#fff"}'>{{weather.city}}</div>
		  <div :style='{"padding":"0 4px","fontSize":"16px","lineHeight":"44px","color":"#fff"}'>{{weather.tem}}°</div>
		  <div :style='{"padding":"0 4px","fontSize":"16px","lineHeight":"44px","color":"#fff"}'>{{weather.wea}}</div>
		  <div :style='{"padding":"0 4px","fontSize":"16px","lineHeight":"44px","color":"#fff"}'>{{weather.win}}</div>
		  <div :style='{"padding":"0 4px","fontSize":"16px","lineHeight":"44px","color":"#fff"}'>{{weather.win_speed}}</div>
		</div>
		<!-- 时间 -->
		<div :style='{"padding":"0 4px","fontSize":"16px","lineHeight":"44px","color":"#fff"}'>{{times}}</div>
		<!--
		<div class="right" :style='{"position":"absolute","right":"20px","top":"8px","display":"flex"}'>
			<div :style='{"cursor":"pointer","margin":"0 5px","lineHeight":"44px","color":"#333"}' class="nickname">{{this.$storage.get('role')}} {{this.$storage.get('adminName')}}</div>
			<div :style='{"cursor":"pointer","margin":"0 5px","lineHeight":"44px","color":"#666"}' v-if="this.$storage.get('role')!='管理员'" class="logout" @click="onIndexTap">退出到前台</div>
			<div :style='{"cursor":"pointer","margin":"0 5px","lineHeight":"44px","color":"#666"}' class="logout" @click="onLogout">退出登录</div>
		</div>
		-->
		
		<el-dropdown @command="handleCommand" trigger="click" :style='{"color":"#fff","fontSize":"14px","display":"flex"}'>
		  <div class="el-dropdown-link" :style='{"alignItems":"center","display":"block"}'>
		    <el-image v-if="user" :style='{"width":"32px","margin":"8px 10px 0","objectFit":"cover","borderRadius":"100%","display":"inline-block","height":"32px"}' :src="avatar?this.$base.url + avatar : require('@/assets/img/avator.png')" fit="cover"></el-image>
		    <span :style='{"lineHeight":"32px","fontSize":"14px","color":"#fff","display":"none"}'>{{this.$storage.get('adminName')}}</span>
		    <span class="icon iconfont icon-xiala" :style='{"margin":"0 0 0 5px","fontSize":"14px","color":"#fff","display":"none"}'></span>
		  </div>
		  <div class="top-el-dropdown-menu-2" :style='{"alignItems":"center","justifyContent":"center","display":"flex"}'>
		    <div class="item1" @click="handleCommand('')">首页</div>
		    <div class="item2" @click="handleCommand('center')">个人中心</div>
		    <div class="item3" v-if="this.$storage.get('role')!='管理员'" @click="handleCommand('front')">退出到前台</div>
		    <div class="item4" @click="handleCommand('logout')">退出登录</div>
		  </div>
		</el-dropdown>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				dialogVisible: false,
				ruleForm: {},
				user: null,
				// 时间
				times: '',
				// 天气
				weather: {},
			};
		},
		created() {
			this.$nextTick(() => {
				// 获取时间
				this.setTimes()
			})
			// 获取天气
			this.getWeather()
		},
		computed: {
			avatar(){
				return this.$storage.get('headportrait')?this.$storage.get('headportrait'):''
			},
		},
		mounted() {
			let sessionTable = this.$storage.get("sessionTable")
			this.$http({
				url: sessionTable + '/session',
				method: "get"
			}).then(({
				data
			}) => {
				if (data && data.code === 0) {
					if(sessionTable == 'yonghu') {
						this.$storage.set('headportrait',data.data.touxiang)
					}
					if(sessionTable == 'weixiurenyuan') {
						this.$storage.set('headportrait',data.data.touxiang)
					}
					if(sessionTable == 'users') {
						this.$storage.set('headportrait',data.data.image)
					}
					this.$storage.set('userForm',JSON.stringify(data.data))
					this.user = data.data;
					this.$storage.set('userid',data.data.id);
				} else {
					let message = this.$message
					message.error(data.msg);
				}
			});
		},
		methods: {
			// 获取当前时间
			setTimes() {
				setInterval(()=>{
					let d = new Date()
					this.times = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
				},1000)
			},
			// 获取当前城市天气
			getWeather(){
				axios({
					method: 'get',
					url: 'http://v0.yiketianqi.com/free/day?appid=69475998&appsecret=rldbX1Zl'
				}).then(res => {
					this.weather = res.data
				})
			},
			handleCommand(name) {
				if (name == 'front') {
					this.onIndexTap()
				} else if (name == 'logout') {
					this.onLogout()
				} else if (name == 'board'){
					this.toBoard()
				} else if (name == 'backUp'){
					this.backUp()
				} 
				else {
					let router = this.$router
					name = '/'+name
					router.push(name)
				}
			},
			onLogout() {
				let storage = this.$storage
				let router = this.$router
				storage.clear()
				this.$store.dispatch('tagsView/delAllViews')
				router.replace({
					name: "login"
				});
			},
			onIndexTap(){
				window.location.href = `${this.$base.indexUrl}`
			},
		}
	};
</script>


<style lang="scss" scoped>
	.top-el-dropdown-menu-2 div.item1 {
				cursor: pointer;
				padding: 0 10px;
				color: #fff;
				font-size: 14px;
				line-height: 32px;
			}

	.top-el-dropdown-menu-2 div.item1:hover {
				color: #fff;
			}
	
	.top-el-dropdown-menu-2 div.item2 {
				cursor: pointer;
				padding: 0 10px;
				color: #fff;
				font-size: 14px;
				line-height: 32px;
			}
	
	.top-el-dropdown-menu-2 div.item2:hover {
				color: #fff;
			}
	
	.top-el-dropdown-menu-2 div.item3 {
				cursor: pointer;
				padding: 0 10px;
				color: #fff;
				font-size: 14px;
				line-height: 32px;
			}
	
	.top-el-dropdown-menu-2 div.item3:hover {
				color: #fff;
			}
	
	.top-el-dropdown-menu-2 div.item4 {
				cursor: pointer;
				padding: 0 10px;
				color: #fff;
				font-size: 14px;
				line-height: 32px;
			}
	
	.top-el-dropdown-menu-2 div.item4:hover {
				color: #fff;
			}
	.top-el-dropdown-menu-2 div.item5 {
				cursor: pointer;
				padding: 0 10px;
				color: #fff;
				font-size: 14px;
				line-height: 32px;
			}
	
	.top-el-dropdown-menu-2 div.item5:hover {
			}
	.top-el-dropdown-menu-2 div.item6 {
				cursor: pointer;
				padding: 0 10px;
				color: #fff;
				font-size: 14px;
				line-height: 32px;
			}
	
	.top-el-dropdown-menu-2 div.item6:hover {
			}
</style>
