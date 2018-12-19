<template>
	<view class="content body">
		<image src="http://116.62.245.5/wallet-static/login/login_qt.png" mode="widthFix" class="register_logo"></image>
		<view class="register_input">
			<view class="register_input_body">
				<text>
					<text class="iconfont">&#xe618;</text>
				</text>
				<input style="color: rgba(233, 58, 38, 1);" type="number" class="inputStyle" v-model='userPhone' placeholder="请输入手机号码" />
			</view>
		</view>
		<view class="register_input">
			<view class="register_input_body">
				<text>
					<text class="iconfont">&#xe65e;</text>
				</text>
				<input style="color: rgba(233, 58, 38, 1);" type="password" class="inputStyle" v-model='userPassword' placeholder="请输入密码" />
			</view>
		</view>
		<view class="register_input">
			<view class="register_input_body">
				<text>
					<text class="iconfont">&#xe698;</text>
				</text>
				<input style="color: rgba(233, 58, 38, 1);" @blur="confirePWD" type="password" class="inputStyle" v-model='userPasswordConfirm' placeholder="请确认密码" />
			</view>
		</view>
		<view class="register_input">
			<view class="register_input_body register_input_bodys">
				<text>
					<text class="iconfont">&#xe636;</text>
				</text>
				<input style="color: rgba(233, 58, 38, 1);" type="number" class="inputStyle" v-model='code' placeholder="请输入短信验证码" />
				<text class="shuxian">|</text>
				<text class="smsInfo" @tap="selectCodes" v-if="show">获取验证码</text>
				<text class="smsInfo" v-else>重新获取{{codes}}s</text>
			</view>
		</view>
		<view class="register_input" style="background: #E93A26;text-align: center;">
			<button type="warn" class="register" @tap="forgotPWD">确&nbsp;&nbsp;&nbsp;定</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userPhone: '',
				userPassword:'',
				userPasswordConfirm:'',
				code:'',
				show: true,
				timer: null,
				codes: null
			}
		},
		onLoad() {

		},
		methods: {
			//获取短信验证码
			selectCodes() {
				this.getSmsCode()
			},
			//密码确认
			confirePWD(){
				if(this.userPassword!=this.userPasswordConfirm){
					uni.showToast({
						title: '请确认两次密码输入正确',
						duration: 1500,
						icon: 'none'
					});
					this.userPasswordConfirm=""
				}
			},
			//找回密码请求
			forgotPWD() {
				if(this.phoneREG(this.userPhone)){
					return true
				}else{
					if(this.userPassword&&this.userPasswordConfirm&&this.code){
						uni.request({
							url:this.API+'/forget',
							data:{
								  "userMobile": this.userPhone,
								  "userPassword": this.userPassword,
								  "userPasswordConfirm": this.userPasswordConfirm,
								  "code": this.code,
							},
							method:'POST',
							dataType:'json',
							success:res=>{
								console.log(res)
							},
							fail:res=>{
								console.log(res)
							}
						})
					}else{
						uni.showToast({
							title: '请确认信息输入完整',
							duration: 1500,
							icon: 'none'
						});
					}			
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.content 
		width 750upx
		height scale(100vh - 44px)
		background-image url('http://116.62.245.5/wallet-static/login/login_bj.png')
		background-size 100% 100%
</style>
