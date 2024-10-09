<template>
<div class="content" :style='{"padding":"30px"}'>
	<!-- notice -->
	<!-- title -->
	<div class="text" :style='{"margin":"30px auto","fontSize":"34px","color":"#385d86","textAlign":"center","fontWeight":"bold"}'>欢迎使用 {{this.$project.projectName}}</div>
	

	<!-- 日历 -->
	<div class="calendar" :style='{"boxShadow":"0 2px 8px rgba(0,0,0,.1)","margin":"30px auto","borderRadius":"16px","background":"#eaecf3","display":"block","width":"100%","height":"auth"}'>
	  <div :style='{"width":"100%","padding":"20px","flexWrap":"wrap","justifyContent":"space-between","display":"flex","height":"auto"}'>
	    <div @click="pyear" :style='{"cursor":"pointer","padding":"0 12px","alignItems":"center","color":"#fff","borderRadius":"4px","background":"linear-gradient(rgb(93, 129, 166), rgb(67, 102, 140))","display":"flex","width":"auto","fontSize":"14px","justifyContent":"center","height":"40px"}'><span class="icon iconfont icon-fanhui" :style='{"color":"#fff","margin":"0 2px","fontSize":"16px"}'></span>上一年</div>
	    <div @click="pmonth" :style='{"cursor":"pointer","padding":"0 12px","alignItems":"center","color":"#fff","borderRadius":"4px","background":"linear-gradient(rgb(93, 129, 166), rgb(67, 102, 140))","display":"flex","width":"auto","fontSize":"14px","justifyContent":"center","height":"40px"}'><span class="icon iconfont icon-fanhui" :style='{"color":"#fff","margin":"0 2px","fontSize":"16px"}'></span>上一月</div>
	    <div :style='{"padding":"0 10px","alignItems":"center","justifyContent":"center","display":"flex"}'>
	      <div :style='{"margin":"0 2px","fontSize":"24px","color":"#333","fontWeight":"600"}'>{{this.year}}年</div>
	      <div :style='{"margin":"0 2px","fontSize":"24px","color":"#333","fontWeight":"600"}'>{{this.month}}月</div>
	    </div>
	    <div @click="nmonth" :style='{"cursor":"pointer","padding":"0 12px","alignItems":"center","color":"#fff","borderRadius":"4px","background":"linear-gradient(rgb(93, 129, 166), rgb(67, 102, 140))","display":"flex","width":"auto","fontSize":"14px","justifyContent":"center","height":"40px"}'>下一月<span class="icon iconfont icon-jinru" :style='{"color":"#fff","margin":"0 2px","fontSize":"16px"}'></span></div>
	    <div @click="nyear" :style='{"cursor":"pointer","padding":"0 12px","alignItems":"center","color":"#fff","borderRadius":"4px","background":"linear-gradient(rgb(93, 129, 166), rgb(67, 102, 140))","display":"flex","width":"auto","fontSize":"14px","justifyContent":"center","height":"40px"}'>下一年<span class="icon iconfont icon-jinru" :style='{"color":"#fff","margin":"0 2px","fontSize":"16px"}'></span></div>
	  </div>
	  <table :style='{"width":"100%","padding":"0 0 10px","heith":"auto","borderRadius":"12px","background":"#fff"}' v-if="this.weeks.length">
	    <thead :style='{"width":"100%","heith":"auto"}'>
	      <tr :style='{"width":"100%","heith":"auto","alignItems":"center","justifyContent":"center","display":"flex"}'>
	        <th :style='{"alignItems":"center","color":"#666","flex":1,"display":"flex","lineHeight":"60px","fontSize":"16px","justifyContent":"center"}' v-for="item,index in this.heads" :key="index">{{item}}</th>
	      </tr>
	    </thead>
	    <tbody :style='{"width":"100%","heith":"auto"}'>
	      <tr :style='{"width":"100%","heith":"auto","alignItems":"center","justifyContent":"center","display":"flex"}' v-for="week,index in this.weeks" :key="index">
	        <td :style='{"cursor":"pointer","padding":"6px 15px","flex":1,"display":"flex","height":"78px"}' v-for="day,key in week.days" :key="key" :class="{other: day.isOther, festival: day.isFestival, today: day.isToday, rest: day.isRest}">
	          <div class="text">
	            <div class="new">{{day.day}}</div>
	            <div class="old">{{day.text}}</div>
	          </div>
	        </td>
	      </tr>
	    </tbody>
	  </table>
	</div>
	
	<!-- echarts -->
</div>
</template>
<script>
//0
import router from '@/router/router-static'
import * as echarts from 'echarts'
export default {
	data() {
		return {
			// 日历
			year: 2023,
			month: 6,
			heads: ['一', '二', '三', '四', '五', '六', '日'],
			weeks: [],
			now: Solar.fromDate(new Date()),
		};
	},
	mounted(){
		this.init();
	},
	methods:{
		init(){
			if(this.$storage.get('Token')){
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code != 0) {
				router.push({ name: 'login' })
				}
			});
			}else{
				router.push({ name: 'login' })
			}
			this.$nextTick(() => {
				// --- 日历 ---
				this.year = this.now.getYear()
				this.month = this.now.getMonth()
				this.weeks = this.render(this.year, this.month);
			})
		},
		// 日历
		nyear() {
			this.year = this.year + 1
			this.weeks = this.render(this.year, this.month)
		},
		pyear() {
			this.year = this.year - 1
			this.weeks = this.render(this.year, this.month)
		},
		nmonth() {
			this.month = this.month + 1
			if (this.month > 12) {
				this.month = 1
				this.year = this.year + 1
			}
			this.weeks = this.render(this.year, this.month)
		},
		pmonth() {
			this.month = this.month - 1
			if (this.month < 1) {
				this.month = 12
				this.year = this.year - 1
			}
			this.weeks = this.render(this.year, this.month)
		},
		// 日历
		render(year, month, weekStart = 1) {
			let months = SolarMonth.fromYm(year, month)
			let weeks = []
		
			months.getWeeks(weekStart).forEach(w => {
				let week = {
					index: 0,
					days: []
				}
				week.index = w.getIndexInYear()
				let days = []
				w.getDays().forEach(d => {
					days.push(this.buildDay(d, month))
				})
				week.days = days
				weeks.push(week)
			})
			return weeks
		},
		buildDay(d, month) {
			let lunar = d.getLunar()
			let day = {
				day: 0,
				text: '',
				isFestival: false,
				isToday: false,
				isOther: false,
				isHoliday: false,
				isRest: false
			}
			day.day = d.getDay()
			let text = lunar.getDayInChinese()
			if (1 === d.getDay()) {
				text = lunar.getMonthInChinese() + '月'
			}
			// let otherFestivals = d.getOtherFestivals()
			// if (otherFestivals.length > 0) {
			// 	text = otherFestivals[0]
			// 	day.isFestival = true
			// }
			// otherFestivals = lunar.getOtherFestivals()
			// if (otherFestivals.length > 0) {
			// 	text = otherFestivals[0]
			// 	day.isFestival = true
			// }
			let festivals = d.getFestivals()
			if (festivals.length > 0) {
				text = festivals[0]
				day.isFestival = true
			}
			festivals = lunar.getFestivals()
			if (festivals.length > 0) {
				text = festivals[0]
				day.isFestival = true
			}
			let jq = lunar.getJieQi()
			if (jq) {
				text = jq
				day.isFestival = true
			}
			day.text = text
			if (d.toYmd() === this.now.toYmd()) {
				day.isToday = true
			}
			if (d.getMonth() !== month) {
				day.isOther = true
			}
			let h = HolidayUtil.getHoliday(d.getYear(), d.getMonth(), d.getDay())
			if (h) {
				day.isHoliday = true
				day.isRest = !h.isWork()
			}
			return day
		},
		// 日历
  }
};
</script>
<style lang="scss" scoped>
    .cardView {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .cards {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 10px;
            justify-content: center;
            .card {
                width: calc(25% - 20px);
                margin: 0 10px;
                /deep/.el-card__body{
                    padding: 0;
                }
            }
        }
    }
	
	// 日历
	.calendar td .text {
				border-radius: 12px;
				flex-direction: column;
				background: #fff;
				display: flex;
				width: 100%;
				justify-content: center;
				align-items: center;
				height: 100%;
			}
	.calendar td .text:hover {
				background: rgba(78,110,242,.1);
			}
	.calendar td .text .new {
				color: #000;
				font-size: 24px;
				line-height: 1.4;
			}
	.calendar td .text .old {
				color: #666;
				font-size: 16px;
				line-height: 1.4;
			}
	.calendar td.festival .text {
				border-radius: 12px;
				flex-direction: column;
				background: rgba(235,51,51,.05);
				display: flex;
				width: 100%;
				justify-content: center;
				align-items: center;
				height: 100%;
			}
	.calendar td.festival .text:hover {
				background: rgba(78,110,242,.1);
			}
	.calendar td.festival .text .new {
				color: #000;
				font-size: 24px;
				line-height: 1.4;
			}
	.calendar td.festival .text .old {
				color: #666;
				font-size: 16px;
				line-height: 1.4;
			}
	.calendar td.other .text {
				border-radius: 12px;
				flex-direction: column;
				background: #fff;
				display: flex;
				width: 100%;
				justify-content: center;
				align-items: center;
				opacity: 0.3;
				height: 100%;
			}
	.calendar td.other .text:hover {
				background: rgba(78,110,242,.1);
			}
	.calendar td.other .text .new {
				color: #000;
				font-size: 24px;
				line-height: 1.4;
			}
	.calendar td.other .text .old {
				color: #666;
				font-size: 16px;
				line-height: 1.4;
			}
	.calendar td.today .text {
				border-radius: 12px;
				flex-direction: column;
				color: #fff;
				background: linear-gradient(rgb(93, 129, 166), rgb(67, 102, 140));
				display: flex;
				width: 100%;
				justify-content: center;
				align-items: center;
				height: 100%;
			}
	.calendar td.today .text:hover {
				background: linear-gradient(rgb(93, 129, 166), rgb(67, 102, 140));
			}
	.calendar td.today .text .new {
				color: inherit;
				font-size: 24px;
				line-height: 1.4;
			}
	.calendar td.today .text .old {
				color: inherit;
				font-size: 16px;
				line-height: 1.4;
			}
	
	// echarts1
	.type1 .echarts1 {
				border: 1px solid #355749;
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.9);
				width: 100%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type1 .echarts1:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(56,93,134,0.3);
			}
	// echarts2
	.type2 .echarts1 {
				border: 1px solid #355749;
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.9);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type2 .echarts1:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(56,93,134,0.3);
			}
	.type2 .echarts2 {
				border: 1px solid #355749;
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.9);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type2 .echarts2:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(56,93,134,0.3);
			}
	// echarts3
	.type3 .echarts1 {
				border: 1px solid #355749;
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.9);
				width: 100%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type3 .echarts1:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(56,93,134,0.3);
			}
	.type3 .echarts2 {
				border: 1px solid #355749;
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.9);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type3 .echarts2:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(56,93,134,0.3);
			}
	.type3 .echarts3 {
				border: 1px solid #355749;
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.9);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type3 .echarts3:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(56,93,134,0.3);
			}
	// echarts4
	.type4 .echarts1 {
				border: 1px solid #355749;
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.9);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type4 .echarts1:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(56,93,134,0.3);
			}
	.type4 .echarts2 {
				border: 1px solid #355749;
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.9);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type4 .echarts2:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(56,93,134,0.3);
			}
	.type4 .echarts3 {
				border: 1px solid #355749;
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.9);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type4 .echarts3:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(56,93,134,0.3);
			}
	.type4 .echarts4 {
				border: 1px solid #355749;
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.9);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type4 .echarts4:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(56,93,134,0.3);
			}
	// echarts5
	.type5 .echarts1 {
				border: 1px solid #355749;
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.9);
				width: 100%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type5 .echarts1:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(56,93,134,0.3);
			}
	.type5 .echarts2 {
				border: 1px solid #355749;
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.9);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type5 .echarts2:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(56,93,134,0.3);
			}
	.type5 .echarts3 {
				border: 1px solid #355749;
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.9);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type5 .echarts3:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(56,93,134,0.3);
			}
	.type5 .echarts4 {
				border: 1px solid #355749;
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.9);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type5 .echarts4:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(56,93,134,0.3);
			}
	.type5 .echarts5 {
				border: 1px solid #355749;
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.9);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type5 .echarts5:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(56,93,134,0.3);
			}
	
	.echarts-flag-2 {
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: space-between;
	  padding: 10px 20px;
	  background: rebeccapurple;
	
	  &>div {
	    width: 32%;
	    height: 300px;
	    margin: 10px 0;
	    background: rgba(255,255,255,.1);
	    border-radius: 8px;
	    padding: 10px 20px;
	  }
	}
</style>
