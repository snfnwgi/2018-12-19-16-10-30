<template>
	<view class="body">
		<view class="center_logo">
			<view class="logo">
				<image src="http://116.62.245.5/wallet-static/center/logo@2x.png" mode="widthFix"></image>
				<text>测试用户</text>
			</view>
		</view>


		<view class="center_money">
			<view class="box">
				<view class="top">
					<text>100000.00</text>
				</view>
				<view class="next">
					<text>总收入</text>
				</view>
			</view>
			<view class="box">
				<view class="top">
					<text>800.00</text>
				</view>
				<view class="next">
					<text>今日收入</text>
				</view>
			</view>
			<view class="box">
				<view class="top">
					<text>50000.00</text>
				</view>
				<view class="next">
					<text>已提现</text>
				</view>
			</view>
		</view>



		<view class="center_list">
			<view class="center_list_item" @tap="personalInformation">
				<view style="display: flex;">
					<view class="listIco">
						<image src="http://116.62.245.5/wallet-static/center/geren.png" style="width: 100%;" mode="widthFix"></image>
					</view>
					<view class="listFont">
						<text>个人资料</text>
					</view>
				</view>
				<view class="listIconfont">
					<image src="http://116.62.245.5/wallet-static/center/more.png" mode="widthFix"></image>
				</view>
			</view>


			<view class="center_list_item" @tap="bindingBank">
				<view style="display: flex;">
					<view class="listIco">
						<image src="http://116.62.245.5/wallet-static/center/yhk.png" style="width: 100%;" mode="widthFix"></image>
					</view>
					<view class="listFont">
						<text>绑定银行卡</text>
					</view>
				</view>
				<view class="listIconfont">
					<image src="http://116.62.245.5/wallet-static/center/more.png" mode="widthFix"></image>
				</view>
			</view>
			
			<view class="center_list_item" @tap="wallet">
				<view style="display: flex;">
					<view class="listIco">
						<image src="http://116.62.245.5/wallet-static/center/qb.png" style="width: 100%;" mode="widthFix"></image>
					</view>
					<view class="listFont">
						<text>钱包</text>
					</view>
				</view>
				<view class="listIconfont">
					<image src="http://116.62.245.5/wallet-static/center/more.png" mode="widthFix"></image>
				</view>
			</view>
			
			
			<view class="center_list_item">
				<view style="display: flex;">
					<view class="listIco">
						<image src="http://116.62.245.5/wallet-static/center/cw.png" style="width: 100%;" mode="widthFix"></image>
					</view>
					<view class="listFont">
						<text>财务管理</text>
					</view>
				</view>
				<view class="listIconfont">
					<image src="http://116.62.245.5/wallet-static/center/more.png" mode="widthFix"></image>
				</view>
			</view>
			
			
			
			<view class="center_list_item center_margin">
				<view style="display: flex;">
					<view class="listIco">
						<image src="http://116.62.245.5/wallet-static/center/cw.png" style="width: 100%;" mode="widthFix"></image>
					</view>
					<view class="listFont">
						<text>检查更新</text>
					</view>
				</view>
				<view class="listIconfont">
					<image src="http://116.62.245.5/wallet-static/center/more.png" mode="widthFix"></image>
				</view>
			</view>
			
			

			
			
			
			
			 <!-- #ifdef APP-PLUS -->
			 <view class="center_list_item" @tap="exitApp">
			 	<view style="display: flex;">
			 		<view class="listIco">
			 			<image src="http://116.62.245.5/wallet-static/center/tuichu.png" style="width: 100%;" mode="widthFix"></image>
			 		</view>
			 		<view class="listFont">
			 			<text>退出APP</text>
			 		</view>
			 	</view>
			 	<view class="listIconfont">
			 		<image src="http://116.62.245.5/wallet-static/center/more.png" mode="widthFix"></image>
			 	</view>
			 </view>
			 <!-- #endif -->

			
			
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		onLoad(){
// 			if(uni.getStorage('token')){
// 				console.log('个人中心')
// 				console.log(uni.getStorage('token'))
// 			}
			console.log('onload')
		},
		onReady(){
			// console.log(uni.getStorage('token'))
			console.log('onready')
			},
		created(){
			// console.log(uni.getStorage('token'))
			console.log('created')
			},
		methods: {
			personalInformation() {
				uni.navigateTo({
					url: '../gerenziliao/gerenziliao',
				});
			},
			bindingBank(){
				uni.navigateTo({
					url:'../bindingBank/bindingBank'
				})
			},
			wallet(){
				uni.navigateTo({
					url:'../wallet/wallet'
				})
			},
			exitApp(){
				plus.runtime.quit();
			
			}
		},
	}
</script>

<style>


	.body .center_logo {
		width: 100vw;
		height: 304.687upx;
		background: #E93A26;
		
		// #ifdef H5
		background: linear-gradient(to top left, #eb6117, #e71d2f);
		// #endif
		// #ifdef APP-PLUS
		background: linear-gradient(to top left, #eb6117, #e71d2f);
		// #endif
		padding-top: 45.703upx;
	}

	.body .center_logo .logo {
		width: 219.14upx;

		margin: 0 auto;
		text-align: center;
	}

	.body .center_logo .logo image {
		width: 100%;
		height: 228.515upx;

	}

	.body .center_logo .logo text {
		font-size: 38.671upx;
		line-height: 38.671upx;
		font-family: SimSun;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
	}

	.center_money {
		margin-bottom: 23.437upx;
		height: 145.312upx;
		width: 100vw;
		background: #fff;
		display: flex;
		border-bottom: 1px solid rgba(221, 221, 221, 0.27);
	}

	.center_money .box {
		width: 33.333%;
		padding-top: 29.296upx;
		box-sizing: border-box;
	}

	.center_money .box view {
		text-align: center;
	}

	.center_money .box .top text {
		margin-top: 29.296upx;
		font-size: 29.296upx;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(241, 45, 56, 1);
	}

	.center_money .box .next text {
		font-size: 24.609upx;
		font-family: Adobe Heiti Std R;
		font-weight: normal;
		color: rgba(51, 51, 51, 1);
	}

	.body .center_list .center_list_item {
		height: 92.578upx;
		width: 100vw;
		background: #fff;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid rgba(221, 221, 221, 0.27);
		
	}

	.body .center_list .center_list_item .listIco {
		width: 52.734upx;
		height: 52.734upx;
		margin: 19.921upx 29.296upx 19.921upx 44.531upx;
	}
	.body .center_list .center_list_item .listIco image{
		width: 100%;
		height: 100%;
	}

	.body .center_list .center_list_item .listFont {
		font-size: 25.781upx;
		line-height: 92.578upx;
		font-family: Adobe Heiti Std R;
		font-weight: normal;
		color: rgba(34, 36, 35, 1);
	}

	.listIconfont {
		width: 14.062upx;
		margin: 14.062upx 26.953upx 31.64upx 0;
		color: #999;
	}
	.listIconfont image{
		width: 100%;
		height: 26.953upx;
	}
	.center_margin{
		margin-top: 21.093upx;
	}
</style>
