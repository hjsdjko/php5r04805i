<template>
<div>
	<div :style='{"border":"1px solid #CBCBCB","width":"80%","padding":"25px","margin":"10px auto","borderRadius":"2px","background":"#fff"}' class="breadcrumb-preview">
		<el-breadcrumb :separator="'Ξ'" :style='{"fontSize":"14px","lineHeight":"1","justifyContent":"center","display":"flex"}'>
			<el-breadcrumb-item class="item1" to="/"><a>首页</a></el-breadcrumb-item>
			<el-breadcrumb-item class="item2" v-for="(item, index) in breadcrumbItem" :key="index" :to="'/index/baoxiuziyuan?centerType=' + (centerType?'1':'0')"><a>{{item.name}}</a></el-breadcrumb-item>
			<el-breadcrumb-item class="item3"><a href="javascript:void(0);">详情</a></el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	<div :style='{"border":"1px solid #CBCBCB","width":"80%","padding":"25px","margin":"10px auto","borderRadius":"2px","background":"#fff"}'>
		<el-button size="mini" @click="backClick">返回</el-button>
	</div>
	<div class="detail-preview" :style='{"width":"80%","margin":"10px auto","position":"relative","flexWrap":"wrap","justifyContent":"space-between","display":"flex"}'>
		<div class="attr" :style='{"padding":"0","margin":"0","background":"#fff","display":"flex","width":"65%","position":"relative","order":"1"}'>

			<div class="info" :style='{"border":"1px solid #654B3C","padding":"0","margin":"0","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%"}'>
				<div class="item" :style='{"padding":"10px","margin":"0","alignItems":"center","background":"#FF5852","display":"flex","width":"100%","justifyContent":"space-between"}'>
					<div :style='{"color":"#fff","fontSize":"24px"}'>
                    {{detail.ziyuanmingcheng}}
                    </div>
				</div>
				<div class="item" :style='{"width":"50%","padding":"5px 20px","margin":"0","background":"#fff","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#666","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"40px","height":"40px"}'>资源类型</div>
					<div  :style='{"padding":"8px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#999","flex":"1","height":"auto"}'>{{detail.ziyuanleixing}}</div>
				</div>
				<div class="item" :style='{"width":"50%","padding":"5px 20px","margin":"0","background":"#fff","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#666","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"40px","height":"40px"}'>故障情况</div>
					<div  :style='{"padding":"8px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#999","flex":"1","height":"auto"}'>{{detail.guzhangqingkuang}}</div>
				</div>
				<div class="item" :style='{"width":"50%","padding":"5px 20px","margin":"0","background":"#fff","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#666","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"40px","height":"40px"}'>损坏情况</div>
					<div  :style='{"padding":"8px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#999","flex":"1","height":"auto"}'>{{detail.sunhuaiqingkuang}}</div>
				</div>
				<div class="item" :style='{"width":"50%","padding":"5px 20px","margin":"0","background":"#fff","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#666","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"40px","height":"40px"}'>报修时间</div>
					<div  :style='{"padding":"8px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#999","flex":"1","height":"auto"}'>{{detail.baoxiushijian}}</div>
				</div>
				<div class="item" :style='{"width":"50%","padding":"5px 20px","margin":"0","background":"#fff","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#666","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"40px","height":"40px"}'>用户账号</div>
					<div  :style='{"padding":"8px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#999","flex":"1","height":"auto"}'>{{detail.yonghuzhanghao}}</div>
				</div>
				<div class="item" :style='{"width":"50%","padding":"5px 20px","margin":"0","background":"#fff","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#666","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"40px","height":"40px"}'>姓名</div>
					<div  :style='{"padding":"8px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#999","flex":"1","height":"auto"}'>{{detail.xingming}}</div>
				</div>
				<div class="item" :style='{"width":"50%","padding":"5px 20px","margin":"0","background":"#fff","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#666","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"40px","height":"40px"}'>手机</div>
					<div  :style='{"padding":"8px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#999","flex":"1","height":"auto"}'>{{detail.shouji}}</div>
				</div>
				<div class="item" :style='{"width":"50%","padding":"5px 20px","margin":"0","background":"#fff","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#666","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"40px","height":"40px"}'>维修状态</div>
					<div  :style='{"padding":"8px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#999","flex":"1","height":"auto"}'>{{detail.weixiuzhuangtai}}</div>
				</div>
				<div class="item" :style='{"width":"50%","padding":"5px 20px","margin":"0","background":"#fff","justifyContent":"spaceBetween","display":"flex"}' v-if="centerType">
					<div class="lable" :style='{"padding":"0 10px","color":"#666","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"40px","height":"40px"}'>审核状态</div>
					<div :style='{"padding":"8px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#999","flex":"1","height":"auto"}'>{{detail.sfsh=='是'?'通过':(detail.sfsh=='否'?'不通过':'待审核')}}</div>
				</div>
				<div class="item" :style='{"width":"50%","padding":"5px 20px","margin":"0","background":"#fff","justifyContent":"spaceBetween","display":"flex"}' v-if="centerType">
					<div class="lable" :style='{"padding":"0 10px","color":"#666","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"40px","height":"40px"}'>审核回复</div>
					<div :style='{"padding":"8px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#999","flex":"1","height":"auto"}'>{{detail.shhf}}</div>
				</div>
				<div class="btn" :style='{"width":"100%","padding":"10px 0","flexWrap":"wrap","justifyContent":"center","display":"flex"}'>
					<el-button :style='{"border":"1px solid #654b3c","cursor":"pointer","padding":"0 10px","margin":"0 5px 0 0","outline":"none","color":"#654b3c","borderRadius":"4px","background":"#fff","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="btnAuth('baoxiuziyuan','修改')&&detail.sfsh!='是'&&detail.sfsh!='否' " @click="editClick">修改</el-button>
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"0 5px 0 0","outline":"none","color":"#fff","borderRadius":"4px","background":"#654b3c","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="btnAuth('baoxiuziyuan','删除')" @click="delClick">删除</el-button>
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"0 5px 0 0","outline":"none","color":"#fff","borderRadius":"4px","background":"#654b3c","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="btnAuth('baoxiuziyuan','私聊')&&detail.id!=mid" @click="chatClick">联系TA</el-button>
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"0 5px 0 0","outline":"none","color":"#fff","borderRadius":"4px","background":"#654b3c","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="btnAuth('baoxiuziyuan','取消')" @click="onAcross('quxiaojilu','是','','','')" type="warning">取消</el-button>
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"0 5px 0 0","outline":"none","color":"#fff","borderRadius":"4px","background":"#654b3c","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="btnAuth('baoxiuziyuan','维修')" @click="onAcross('weixiujilu','是','','weixiuzhuangtai','已维修','已维修,待维修'.split(',')[0])" type="warning">维修</el-button>
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"0 5px 0 0","outline":"none","color":"#fff","borderRadius":"4px","background":"#654b3c","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="btnAuth('baoxiuziyuan','更换')" @click="onAcross('genghuanziyuan','是','','','')" type="warning">更换</el-button>
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"0 5px 0 0","outline":"none","color":"#fff","borderRadius":"4px","background":"#654b3c","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="btnAuth('baoxiuziyuan','归还')" @click="onAcross('guihaiziyuan','是','','','')" type="warning">归还</el-button>
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"0 5px 0 0","outline":"none","color":"#fff","borderRadius":"4px","background":"#654b3c","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="btnAuth('baoxiuziyuan','审核') && (detail.sfsh=='待审核'||!detail.sfsh)" @click="onSH" type="warning">审核</el-button>
				</div>
			</div>
		</div>
		
			<div v-if="detailBanner.length" :style='{"width":"33%","background":"#fff","height":"auto","order":"0"}'>
			  <div class="swiper21" :style='{"width":"100%","margin":"0 0 10px","height":"auto"}'>
			    <div class="swiper-container mySwiper21">
			      <div class="swiper-wrapper">
			        <div class="swiper-slide" v-for="item in detailBanner" :key="item.id">
			          <div :style='{"width":"100%","height":"auto"}'>
			            <img :style='{"objectFit":"cover","width":"100%","height":"400px"}' v-if="item.substr(0,4)=='http'" :src="item" class="image">
			            <img :style='{"objectFit":"cover","width":"100%","height":"400px"}' v-else :src="baseUrl + item" class="image">
			          </div>
			        </div>
			      </div>
			      <div class="swiper-button-prev" :style='{"width":"24px","margin":"-12px 0 0","top":"50%","height":"24px"}'>
			        <span class="icon iconfont icon-jiantou39" :style='{"width":"24px","fontSize":"24px","color":"#fff","height":"24px"}'></span>
			      </div>
			      <div class="swiper-button-next" :style='{"width":"24px","margin":"-12px 0 0","top":"50%","height":"24px"}'>
			        <span class="icon iconfont icon-jiantou18" :style='{"width":"24px","fontSize":"24px","color":"#fff","height":"24px"}'></span>
			      </div>
			    </div>
			  </div>
			  <div class="swiper22" :style='{"width":"100%","height":"auto"}'>
			    <div class="swiper-container mySwiper22">
			      <div class="swiper-wrapper">
			        <div class="swiper-slide" v-for="item in detailBanner" :key="item.id">
			          <div>
						<img :style='{"objectFit":"cover","width":"100%","height":"100px"}' v-if="item.substr(0,4)=='http'" :src="item" class="image">
						<img :style='{"objectFit":"cover","width":"100%","height":"100px"}' v-else :src="baseUrl + item" class="image">
			          </div>
			        </div>
			      </div>
			      <div class="swiper-button-prev" :style='{"width":"14px","margin":"-7px 0 0","top":"50%","height":"14px"}'>
			        <span class="icon iconfont icon-jiantou39" :style='{"width":"14px","fontSize":"14px","color":"#fff","height":"14px"}'></span>
			      </div>
			      <div class="swiper-button-next" :style='{"width":"14px","margin":"-7px 0 0","top":"50%","height":"14px"}'>
			        <span class="icon iconfont icon-jiantou18" :style='{"width":"14px","fontSize":"14px","color":"#fff","height":"14px"}'></span>
			      </div>
			    </div>
			  </div>
			</div>


		

		
		<el-tabs class="detail" :style='{"border":"0","boxShadow":"0","margin":"25px 0 0 0","background":"#fff","flex":"1","minWidth":"100%","order":"3"}' v-model="activeName" type="border-card">
		</el-tabs>
		<el-dialog title="审核" :visible.sync="sfshVisiable" width="50%">
			<el-form ref="shForm" :model="shForm" label-width="80px">
				<el-form-item label="审核状态">
					<el-select v-model="shForm.sfsh" placeholder="审核状态">
						<el-option label="通过" value="是"></el-option>
						<el-option label="不通过" value="否"></el-option>
						<el-option label="待审核" value="待审核"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="内容">
					<el-input type="textarea" :rows="8" v-model="shForm.shhf"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="sfshVisiable = false">取 消</el-button>
				<el-button type="primary" @click="shHandler">确 定</el-button>
			</div>
		</el-dialog>
	</div>
	<div class="share_view" :style='{"boxShadow":"0 1px 6px rgba(0,0,0,.3)","position":"fixed","right":"0","bottom":"20%","background":"#fff","zIndex":"11"}'>
	</div>
</div>
</template>

<script>
  import axios from 'axios'
  import Swiper from "swiper";
  
  export default {
    //数据集合
    data() {
      return {
        tablename: 'baoxiuziyuan',
        baseUrl: '',
        breadcrumbItem: [
          {
            name: '报修资源'
          }
        ],
        title: '',
        detailBanner: [],
		userid: localStorage.getItem('frontUserid'),
		id: 0,
        detail: {},
        activeName: 'first',
        total: 1,
        pageSize: 5,
        totalPage: 1,
        buynumber: 1,
        sfshVisiable: false,
        shForm: {
			sfsh: '是',
			shhf: ''
        },
		centerType: false,
		shareUrl: location.href,
      }
    },
    created() {
		if(this.$route.query.centerType) {
			this.centerType = true
		}
		
        this.init();
    },
	mounted() {
		setTimeout(()=>{
			let mySwiper22 = new Swiper(".mySwiper22", {"navigation":{"nextEl":".swiper-button-next","prevEl":".swiper-button-prev"},"freeMode":true,"watchSlidesVisibility":true,"watchSlidesProgress":true,"loopedSlides":5,"slidesPerView":4,"spaceBetween":10})
			let option21 = {...{"navigation":{"nextEl":".swiper-button-next","prevEl":".swiper-button-prev"},"loopedSlides":5,"spaceBetween":10}}
			option21.thumbs = {
				swiper: mySwiper22
			}
			new Swiper(".mySwiper21", option21)
		},100)
	},
    //方法集合
    methods: {
        init() {
		  this.id = this.$route.query.id
          this.baseUrl = this.$config.baseUrl;
          this.$http.get(this.tablename + '/detail/'  + this.id, {}).then(res => {
            if (res.data.code == 0) {
              this.detail = res.data.data;
				this.title = this.detail.ziyuanmingcheng;
				this.detailBanner = this.detail.ziyuantupian ? this.detail.ziyuantupian.split(",") : [];
				this.$forceUpdate();

				if(localStorage.getItem('frontToken')){
				}

            }
          });
        },
      async onAcross(acrossTable,crossOptAudit,crossOptPay,statusColumnName,tips,statusColumnValue,type=1){
		if(crossOptAudit=='是'&&this.detail.sfsh!='是') {
			this.$message({
				message: "请审核通过后再操作",
				type: "error",
				duration: 1500,
				onClose: () => {
				}
			});
			return
		}
        localStorage.setItem('crossTable',`baoxiuziyuan`);
        localStorage.setItem('crossObj', JSON.stringify(this.detail));
        localStorage.setItem('statusColumnName',statusColumnName);
        localStorage.setItem('statusColumnValue',statusColumnValue);
        localStorage.setItem('tips',tips);
        if(statusColumnName!=''&&!statusColumnName.startsWith("[")) {
            var obj = JSON.parse(localStorage.getItem('crossObj'));
            for (var o in obj){
                if(o==statusColumnName && obj[o]==statusColumnValue){
                    this.$message({
                        type: 'error',
                        message: tips,
                        duration: 1500
                    });
                    return
                }
            }
        }
        this.$router.push({path: '/index/' + acrossTable + 'Add', query: {type: 'cross'}});
      },
      onSH() {
        this.sfshVisiable = true;
      },
      shHandler(){
        this.$confirm(`确定操作?`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.detail.sfsh = this.shForm.sfsh;
          this.detail.shhf = this.shForm.shhf;
          this.$http.post(`${this.tablename}/update`, this.detail).then(res => {
            if (res.data.code == 0) {
              this.sfshVisiable = false;
              this.$message({
                message: "操作成功",
                type: "success",
                duration: 1500,
              });
            }
          });
        });
      },
      curChange(page) {
        this.getDiscussList(page);
      },
      prevClick(page) {
        this.getDiscussList(page);
      },
      nextClick(page) {
        this.getDiscussList(page);
      },
      sizeChange(size){
        this.pageSize = size
        this.getDiscussList(1);
      },
		// 返回按钮
		backClick(){
			let params = {}
			if(this.centerType){
				params.centerType = 1
			}
			this.$router.push({path: '/index/baoxiuziyuan', query: params});
		},
		// 下载
		download(file){
			if(!file) {
				this.$message({
				  type: 'error',
				  message: '文件不存在',
				  duration: 1500,
				});
				return;
			}
		  let arr = file.replace(new RegExp('upload/', "g"), "")
		  axios.get(this.baseUrl + '/file/download?fileName=' + arr, {
		  	headers: {
		  		token: localStorage.getItem("frontToken")
		  	},
		  	responseType: "blob"
		  }).then(({
		  	data
		  }) => {
		  	const binaryData = [];
		  	binaryData.push(data);
		  	const objectUrl = window.URL.createObjectURL(new Blob(binaryData, {
		  		type: 'application/pdf;chartset=UTF-8'
		  	}))
		  	const a = document.createElement('a')
		  	a.href = objectUrl
		  	a.download = arr
		  	// a.click()
		  	// 下面这个写法兼容火狐
		  	a.dispatchEvent(new MouseEvent('click', {
		  		bubbles: true,
		  		cancelable: true,
		  		view: window
		  	}))
		  	window.URL.revokeObjectURL(data)
		  },err=>{
			  axios.get((location.href.split(this.$config.name).length>1 ? location.href.split(this.$config.name)[0] :'') + this.$config.name + '/file/download?fileName=' + arr, {
			  	headers: {
			  		token: localStorage.getItem("frontToken")
			  	},
			  	responseType: "blob"
			  }).then(({
			  	data
			  }) => {
			  	const binaryData = [];
			  	binaryData.push(data);
			  	const objectUrl = window.URL.createObjectURL(new Blob(binaryData, {
			  		type: 'application/pdf;chartset=UTF-8'
			  	}))
			  	const a = document.createElement('a')
			  	a.href = objectUrl
			  	a.download = arr
			  	// a.click()
			  	// 下面这个写法兼容火狐
			  	a.dispatchEvent(new MouseEvent('click', {
			  		bubbles: true,
			  		cancelable: true,
			  		view: window
			  	}))
			  	window.URL.revokeObjectURL(data)
			  })
		  })
      },


		// 权限判断
		btnAuth(tableName,key){
			if(this.centerType){
				return this.isBackAuth(tableName,key)
			}else{
				return this.isAuth(tableName,key)
			}
		},
		// 修改
		editClick(){
			this.$router.push(`/index/baoxiuziyuanAdd?type=edit&&id=${this.detail.id}`);
		},
		// 删除
		async delClick(){
			await this.$confirm('是否删除此报修资源？')
			  .then(_ => {
			    this.$http.post('baoxiuziyuan/delete', [this.detail.id]).then(async res => {
					if (res.data.code == 0) {
						this.$message({
							type: 'success',
							message: '删除成功!',
							duration: 1500,
							onClose: () => {
								history.back()
							}
						});
					}
			    });
			  }).catch(_ => {});
		},
    },
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.editor /deep/ .avatar-uploader {
		height: 0;
		line-height: 0;
	}
	
	.detail-preview {
	
	  .attr {
	    .el-carousel /deep/ .el-carousel__indicator button {
	      width: 0;
	      height: 0;
	      display: none;
	    }
	
	    .el-input-number__decrease:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled), .el-input-number__increase:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled) {
	      border-color: none;
	    }
	  }
	
	  .detail {
	    & /deep/ .el-tabs__header .el-tabs__nav-wrap {
	      margin-bottom: 0;
	    }
	
	    & .add .el-textarea {
	      width: auto;
	    }
	  }
	}
	
	.attr .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.attr .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left:hover {
		background: red;
	}
	
	.attr .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.attr .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right:hover {
		background: red;
	}

	.attr .el-carousel /deep/ .el-carousel__indicators {
		padding: 0;
		margin: 0;
		z-index: 2;
		position: absolute;
		list-style: none;
	}
	
	.attr .el-carousel /deep/ .el-carousel__indicators li {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 12px;
		opacity: 0.4;
		transition: 0.3s;
		height: 12px;
	}
	
	.attr .el-carousel /deep/ .el-carousel__indicators li:hover {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 24px;
		opacity: 0.7;
		height: 12px;
	}
	
	.attr .el-carousel /deep/ .el-carousel__indicators li.is-active {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 24px;
		opacity: 1;
		height: 12px;
	}
	
	.attr .el-input-number /deep/ .el-input-number__decrease {
		cursor: pointer;
		z-index: 1;
		display: flex;
		border-color: #DCDFE6;
		border-radius: 4px 0 0 4px;
		top: 1px;
		left: 1px;
		background: #f5f5f5;
		width: 40px;
		justify-content: center;
		border-width: 0 1px 0 0;
		align-items: center;
		position: absolute;
		border-style: solid;
		text-align: center;
		height: 38px;
	}
	
	.attr .el-input-number /deep/ .el-input-number__decrease i {
		color: #666;
		font-size: 14px;
	}

	.attr .el-input-number /deep/ .el-input-number__increase {
		cursor: pointer;
		z-index: 1;
		display: flex;
		border-color: #DCDFE6;
		right: 1px;
		border-radius: 0 4px 4px 0;
		top: 1px;
		background: #f5f5f5;
		width: 40px;
		justify-content: center;
		border-width: 0 0 0 1px;
		align-items: center;
		position: absolute;
		border-style: solid;
		text-align: center;
		height: 38px;
	}
	
	.attr .el-input-number /deep/ .el-input-number__increase i {
		color: #666;
		font-size: 14px;
	}
	
	.attr .el-input-number /deep/ .el-input .el-input__inner {
		border: 1px solid #DCDFE6;
		border-radius: 4px;
		padding: 0 40px;
		outline: none;
		color: #666;
		background: #FFF;
		display: inline-block;
		width: 100%;
		font-size: 14px;
		line-height: 40px;
		text-align: center;
		height: 40px;
	}
	
	.detail-preview .detail.el-tabs /deep/ .el-tabs__header {
		background: #fff;
		border-color: #E4E7ED;
		border-width: 0 0 5px 0;
		border-style: solid;
	}
	
	.detail-preview .detail.el-tabs /deep/ .el-tabs__header .el-tabs__item {
		border: 0;
		padding: 0 20px;
		margin: 0;
		color: #654B3C;
		background: transparent;
		font-weight: 500;
		display: inline-block;
		font-size: 14px;
		line-height: 40px;
		position: relative;
		list-style: none;
		height: 40px;
	}
	
	.detail-preview .detail.el-tabs /deep/ .el-tabs__header .el-tabs__item:hover {
		border: 0;
		color: #654B3C;
		background: #FFF;
	}
	
	.detail-preview .detail.el-tabs /deep/ .el-tabs__header .el-tabs__item.is-active {
		border: 0;
		color: #654B3C;
		background: #FFF;
		border-color: #654B3C;
		border-width: 0 0 5px 0;
		border-style: solid;
	}
	
	.detail-preview .detail.el-tabs /deep/ .el-tabs__content {
		padding: 15px;
	}
	
	.detail-preview .detail.el-tabs .add /deep/ .el-form-item__label {
		padding: 0 10px 0 0;
		color: #666;
		width: 80px;
		font-size: 14px;
		line-height: 40px;
		text-align: right;
	}
	
	.detail-preview .detail.el-tabs .add /deep/ .el-textarea__inner {
	}
	
	.breadcrumb-preview .el-breadcrumb /deep/ .el-breadcrumb__separator {
		margin: 0 9px;
		color: #ccc;
		font-weight: 500;
	}
	
	.breadcrumb-preview .el-breadcrumb .item1 /deep/ .el-breadcrumb__inner a {
		color: #333;
		display: inline-block;
	}
	
	.breadcrumb-preview .el-breadcrumb .item2 /deep/ .el-breadcrumb__inner a {
		color: #666;
		display: inline-block;
	}
		
	.breadcrumb-preview .el-breadcrumb .item3 /deep/ .el-breadcrumb__inner a {
		color: #999;
		display: inline-block;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__total {
		margin: 0 10px 0 0;
		color: #666;
		font-weight: 400;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .btn-prev {
		border: none;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #666;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		min-width: 35px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .btn-next {
		border: none;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #666;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		min-width: 35px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .btn-prev:disabled {
		border: none;
		cursor: not-allowed;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #C0C4CC;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .btn-next:disabled {
		border: none;
		cursor: not-allowed;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #C0C4CC;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pager {
		padding: 0;
		margin: 0;
		display: inline-block;
		vertical-align: top;
	}
	
	#pagination.el-pagination /deep/ .el-pager .number {
		cursor: pointer;
		padding: 0 4px;
		margin: 0 5px;
		color: #666;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 2px;
		background: #f4f4f5;
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pager .number:hover {
		cursor: pointer;
		padding: 0 4px;
		margin: 0 5px;
		color: #654B3C;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 2px;
		background: #f4f4f5;
		text-align: center;
		min-width: 30px;
		height: 28px;
}

#pagination.el-pagination /deep/ .el-pager .number.active {
		cursor: default;
		padding: 0 4px;
		margin: 0 5px;
		color: #FFF;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 2px;
		background: #654B3C;
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes {
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input {
		margin: 0 5px;
		width: 100px;
		position: relative;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__inner {
		border: 1px solid #DCDFE6;
		cursor: pointer;
		padding: 0 25px 0 8px;
		color: #606266;
		display: inline-block;
		font-size: 13px;
		line-height: 28px;
		border-radius: 3px;
		outline: 0;
		background: #FFF;
		width: 100%;
		text-align: center;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input span.el-input__suffix {
		top: 0;
		position: absolute;
		right: 0;
		height: 100%;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
		cursor: pointer;
		color: #C0C4CC;
		width: 25px;
		font-size: 14px;
		line-height: 28px;
		text-align: center;
	}

	#pagination.el-pagination /deep/ .el-pagination__jump {
		margin: 0 0 0 24px;
		color: #606266;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__jump .el-input {
		border-radius: 3px;
		padding: 0 2px;
		margin: 0 2px;
		display: inline-block;
		width: 50px;
		font-size: 14px;
		line-height: 18px;
		position: relative;
		text-align: center;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__jump .el-input .el-input__inner {
		border: 1px solid #DCDFE6;
		cursor: pointer;
		padding: 0 3px;
		color: #606266;
		display: inline-block;
		font-size: 14px;
		line-height: 28px;
		border-radius: 3px;
		outline: 0;
		background: #FFF;
		width: 100%;
		text-align: center;
		height: 28px;
	}
	.share_view{
		position: fixed;
		right:0;
		bottom: 20%;
		background: #fff;
		box-shadow: 0 4px 6px rgba(0,0,0,.1);
		.share{
			width: 40px;
			height: 40px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-bottom: 1px solid #eee;
			cursor: pointer;
		}
		.share:last-of-type{
			border:none;
		}
	}

	.swiper21 .swiper-button-prev:after {
		display:none;
	}
	.swiper21 .swiper-button-next:after {
        display:none;
	}
	.swiper22 .swiper-button-prev:after {
        display:none;
	}
	.swiper22 .swiper-button-next:after {
        display:none;
	}
	
	.swiper22 .swiper-slide div {
				width: 100%;
				opacity: 0.4;
				height: auto;
			}
	.swiper22 .swiper-slide.swiper-slide-thumb-active div {
				opacity: 1;
			}

	.detail-preview .el-rate /deep/ .el-rate__item {
				cursor: pointer;
				display: inline-block;
				vertical-align: middle;
				font-size: 0;
				position: relative;
			}
	
	.detail-preview .el-rate /deep/ .el-rate__item .el-rate__icon {
				margin: 0 3px;
				display: block;
				font-size: 18px;
				position: relative;
				transition: .3s;
			}
</style>
