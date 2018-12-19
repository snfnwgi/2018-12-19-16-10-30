<template>
	<view class="content">
		<image src="http://116.62.245.5/wallet-static/login/login_qt.png" mode="widthFix" class="register_logo"></image>
		<view class="register_input">
			<view class="register_input_body">
				<text>
					<text class="iconfont">&#xe618;</text>
				</text>
				<input style="color: rgba(233, 58, 38, 1);" type="number" class="inputStyle" v-model='userPhone' @blur="verificationPhone"
				 placeholder="请输入手机号码" />
			</view>
		</view>
		<view class="register_input">
			<view class="register_input_body">
				<text>
					<text class="iconfont">&#xe65e;</text>
				</text>
				<input style="color: rgba(233, 58, 38, 1);" type="password" class="inputStyle" v-model='userPWD' placeholder="请输入密码" />
			</view>
		</view>
		<view class="register_input">
			<view class="register_input_body">
				<text>
					<text class="iconfont">&#xe66e;</text>
				</text>
				<input style="color: rgba(233, 58, 38, 1);" type="number" class="inputStyle" v-model='userInvitation' placeholder="请输入邀请码" />
			</view>
		</view>
		<view class="register_input">
			<view class="register_input_body register_input_bodys">
				<text>
					<text class="iconfont">&#xe636;</text>
				</text>
				<input style="color: rgba(233, 58, 38, 1);" type="number" class="inputStyle" v-model='smsCode' placeholder="请输入短信验证码" />
				<text class="shuxian">|</text>
				<text class="smsInfo" @tap="selectCodes" v-if="show">获取验证码</text>
				<text class="smsInfo" v-else>重新获取{{codes}}s</text>
			</view>
		</view>
		<view class="register_input" style="background: #E93A26;text-align: center;">
			<button type="warn" class="register" @tap="userRegister">注&nbsp;&nbsp;&nbsp;册</button>
		</view>
	</view>
</template>

<script>
	const TIME_COUNT = 60;
	export default {
		data() {
			return {
				userPhone: '',
				userPWD: '',
				userInvitation: '',
				smsCode: '',
				show: true,
				timer: null,
				codes: null
			}
		},
		onLoad() {},
		methods: {
			//手机号码验证
			verificationPhone() {
				this.phoneREG(this.userPhone)
			},
			//获取验证码
			selectCodes() {
				this.getSmsCode()
			},
			//注册
			userRegister() {
				if (this.phoneREG(this.userPhone)) {
					if (this.userPWD != '') {
						console.log()
						uni.request({
							url: this.API + '/register',
							method: 'POST',
							dataType: 'json',
							data: {
								"userMobile": this.userPhone,
								"userName": "users",
								"userPassword": this.userPWD,
								"userPasswordConfirm": this.userPWD,
								"type": "0",
								"code": "",
								"parentKey": this.userInvitation,
							},
							success: res => {
								if (res.data.code === 200) {
									uni.showModal({
										title: res.data.msg,
										content: '点击确认跳转登陆',
										success: function(res) {
											if (res.confirm) {
												uni.navigateTo({
													url: '../login/login'
												})
											} else if (res.cancel) {}
										}
									});
								} else {
									uni.showToast({
										title: res.data.msg,
										duration: 1500,
										icon: 'none'
									});
								}
							},
							fail: res => {
								console.log(res)
							}
						})
					}
				} else {
					console.log('1')
				}
			},
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
