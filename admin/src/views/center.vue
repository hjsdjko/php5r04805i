<template>
  <div :style='{"padding":"30px"}'>
    <el-form
	  :style='{"borderRadius":"6px","padding":"30px"}'
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      label-width="180px"
    >  
     <el-row>
        <el-form-item :style='{"margin":"0 0 20px 0"}'   v-if="flag=='yonghu'"  label="用户账号" prop="yonghuzhanghao">
          <el-input v-model="ruleForm.yonghuzhanghao" readonly              placeholder="用户账号" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 20px 0"}'   v-if="flag=='yonghu'"  label="姓名" prop="xingming">
          <el-input v-model="ruleForm.xingming"               placeholder="姓名" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 20px 0"}' v-if="flag=='yonghu'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie"  placeholder="请选择性别">
            <el-option
                v-for="(item,index) in yonghuxingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 20px 0"}'   v-if="flag=='yonghu'"  label="手机" prop="shouji">
          <el-input v-model="ruleForm.shouji"               placeholder="手机" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 20px 0"}' v-if="flag=='yonghu'" label="头像" prop="touxiang">
          <file-upload
          tip="点击上传头像"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
          @change="yonghutouxiangUploadChange"
          ></file-upload>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 20px 0"}'   v-if="flag=='weixiurenyuan'"  label="维修账号" prop="weixiuzhanghao">
          <el-input v-model="ruleForm.weixiuzhanghao" readonly              placeholder="维修账号" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 20px 0"}'   v-if="flag=='weixiurenyuan'"  label="维修姓名" prop="weixiuxingming">
          <el-input v-model="ruleForm.weixiuxingming"               placeholder="维修姓名" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 20px 0"}' v-if="flag=='weixiurenyuan'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie"  placeholder="请选择性别">
            <el-option
                v-for="(item,index) in weixiurenyuanxingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 20px 0"}'   v-if="flag=='weixiurenyuan'"  label="联系方式" prop="lianxifangshi">
          <el-input v-model="ruleForm.lianxifangshi"               placeholder="联系方式" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 20px 0"}' v-if="flag=='weixiurenyuan'" label="头像" prop="touxiang">
          <file-upload
          tip="点击上传头像"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
          @change="weixiurenyuantouxiangUploadChange"
          ></file-upload>
        </el-form-item>
		<el-form-item :style='{"margin":"0 0 20px 0"}' v-if="flag=='users'" label="用户名" prop="username">
			<el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
		</el-form-item>
		<el-form-item :style='{"margin":"0 0 20px 0"}' v-if="flag=='users'" label="头像" prop="image">
		  <file-upload
		  tip="点击上传头像"
		  action="file/upload"
		  :limit="1"
		  :multiple="false"
		  :fileUrls="ruleForm.image?ruleForm.image:''"
		  @change="usersimageUploadChange"
		  ></file-upload>
		</el-form-item>
		<el-form-item :style='{"padding":"0","margin":"0"}'>
			<el-button class="btn3" :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"4px","outline":"none","color":"#fff","borderRadius":"4px","background":"#385d86","width":"auto","fontSize":"14px","height":"40px"}' type="primary" @click="onUpdateHandler">
				<span class="icon iconfont " :style='{"margin":"0 2px","fontSize":"14px","color":"#fff","height":"40px"}'></span>
				提交
			</el-button>
		</el-form-item>
      </el-row>
    </el-form>
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isMobile,isPhone,isURL,checkIdCard } from "@/utils/validate";

export default {
  data() {
    return {
      ruleForm: {},
      flag: '',
      usersFlag: false,
      yonghuxingbieOptions: [],
      weixiurenyuanxingbieOptions: [],
    };
  },
  mounted() {
    var table = this.$storage.get("sessionTable");
    this.flag = table;
    this.$http({
      url: `${this.$storage.get("sessionTable")}/session`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.ruleForm = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.yonghuxingbieOptions = "男,女".split(',')
    this.weixiurenyuanxingbieOptions = "男,女".split(',')
  },
  methods: {
    yonghutouxiangUploadChange(fileUrls) {
        this.ruleForm.touxiang = fileUrls;
    },
    weixiurenyuantouxiangUploadChange(fileUrls) {
        this.ruleForm.touxiang = fileUrls;
    },
	usersimageUploadChange(fileUrls) {
		this.ruleForm.image = fileUrls;
	},
    onUpdateHandler() {
      if((!this.ruleForm.yonghuzhanghao)&& 'yonghu'==this.flag){
        this.$message.error('用户账号不能为空');
        return
      }


      if((!this.ruleForm.xingming)&& 'yonghu'==this.flag){
        this.$message.error('姓名不能为空');
        return
      }


      if((!this.ruleForm.mima)&& 'yonghu'==this.flag){
        this.$message.error('密码不能为空');
        return
      }





      if( 'yonghu' ==this.flag && this.ruleForm.shouji&&(!isMobile(this.ruleForm.shouji))){
        this.$message.error(`手机应输入手机格式`);
        return
      }


        if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
        }
      if((!this.ruleForm.weixiuzhanghao)&& 'weixiurenyuan'==this.flag){
        this.$message.error('维修账号不能为空');
        return
      }


      if((!this.ruleForm.weixiuxingming)&& 'weixiurenyuan'==this.flag){
        this.$message.error('维修姓名不能为空');
        return
      }


      if((!this.ruleForm.mima)&& 'weixiurenyuan'==this.flag){
        this.$message.error('密码不能为空');
        return
      }





      if( 'weixiurenyuan' ==this.flag && this.ruleForm.lianxifangshi&&(!isMobile(this.ruleForm.lianxifangshi))){
        this.$message.error(`联系方式应输入手机格式`);
        return
      }


        if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
        }
      if('users'==this.flag && this.ruleForm.username.trim().length<1) {
	this.$message.error(`用户名不能为空`);
        return	
      }
	  if(this.flag=='users'){
	  	this.ruleForm.image = this.ruleForm.image.replace(new RegExp(this.$base.url,"g"),"")
	  }
      this.$http({
        url: `${this.$storage.get("sessionTable")}/update`,
        method: "post",
        data: this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "修改信息成功",
            type: "success",
            duration: 1500,
            onClose: () => {
				if(this.flag=='users'){
					this.$storage.set('headportrait',this.ruleForm.image)
				}
            }
          });
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: #666;
	  	  white-space: nowrap;
	  	  font-weight: 500;
	  	  width: 180px;
	  	  font-size: 14px;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 180px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border: 1;
	  	  border-radius: 4px;
	  	  padding: 0 12px;
	  	  outline: none;
	  	  color: #333;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border: 1;
	  	  border-radius: 4px;
	  	  padding: 0 10px;
	  	  outline: none;
	  	  color: #333;
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border: 1;
	  	  border-radius: 4px;
	  	  padding: 0 10px 0 30px;
	  	  outline: none;
	  	  color: #333;
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 1px dashed #385d86;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #385d86;
	  	  width: 200px;
	  	  font-size: 32px;
	  	  line-height: 200px;
	  	  text-align: center;
	  	  height: 200px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 1px dashed #385d86;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #385d86;
	  	  width: 200px;
	  	  font-size: 32px;
	  	  line-height: 200px;
	  	  text-align: center;
	  	  height: 200px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 1;
	  	  border-radius: 4px;
	  	  padding: 12px;
	  	  outline: none;
	  	  color: #333;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 120px;
	  	}
	
	.add-update-preview .btn3 {
				border: 0;
				cursor: pointer;
				border-radius: 4px;
				padding: 0 24px;
				margin: 4px;
				outline: none;
				color: #fff;
				background: #385d86;
				width: auto;
				font-size: 14px;
				height: 40px;
			}
	
	.add-update-preview .btn3:hover {
				opacity: 0.8;
			}
	
	.editor>.avatar-uploader {
		line-height: 0;
		height: 0;
	}
</style>
