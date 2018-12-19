<template>
	<view class="content body">
		<image src="http://116.62.245.5/wallet-static/login/loginlogo.png" mode="widthFix" class="login_logo"></image>
		<view class="register_input">
			<view class="register_input_body">
				<text>
					<text class="iconfont">&#xe618;</text>
				</text>
				<input style="color: rgba(233, 58, 38, 1);" type="number" class="inputStyle" v-model='userPhone' placeholder="请输入手机号码"
				 @blur="verificationPhone" />
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
		<view class="register_input" style="background: #E93A26;text-align: center;">
			<button type="warn" class="register" @tap="login">登&nbsp;&nbsp;&nbsp;录</button>
		</view>
		<view class="login_bottom">
			<text class="login" @click="goReg">注册</text>
			<text class="forgot" @click="forget">忘记密码</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userPhone: '',
				userPWD: ''
			}
		},

		methods: {
			//正则验证
			verificationPhone() {
				this.phoneREG(this.userPhone)
			},
			//登陆
			login() {
				if (this.phoneREG(this.userPhone)) {
					
				} else {
					if (this.userPWD != '') {
						uni.request({
							url: this.API + '/login',
							method: 'POST',
							dataType: 'json',
							data: {
								'account': this.userPhone,
								'password': this.userPWD
							},
							success: res => {
								if(res.data.code==200){
									uni.setStorageSync('token', res.data.data.token)
									if (uni.getStorageSync('token')) {
										uni.showModal({
											title: '登陆成功!',
											content: '点击确认跳转首页',
											success: function(res) {
												if (res.confirm) {
													uni.switchTab({
														url: '../main/main'
													})
												} else if (res.cancel) {
	
												}
											}
										});
									}
								}else{
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
				}
			},
			goReg() {
				uni.navigateTo({
					url: '../register/register',
				});
			},
			forget() {
				uni.navigateTo({
					url: '../forget/forget',
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.content 
		width 750upx
		height scale(100vh - 44px)
		background-image url('http://116.62.245.5/wallet-static/login/loginbj.png')
		background-size 100% 100%
		.login_logo 
			width 530.859upx
			margin 66.796upx 108.984upx
		.login_bottom 
			font-size 23.437upx
			font-family MicrosoftYaHei
			font-weight 400
			color rgba(233, 58, 38, 1)
			line-height 29.296upx
			.login 
				margin 0 22.265upx 0 282.421upx
			.forgot 
				margin-left 22.265upx
				
		
	


	/*注册忘记密码样式 */


	
</style>
