<template>
	<view style="position: relative; height: 100vh">
		<view class="wallet_title">
			<view class="wallet_fonts">
				<text>昨日收益(元)</text>
				<text class="wallet_money">200.00</text>
				<text>余额 61060.09元</text>
			</view>
			<view class="wallet_title_bottom">
				<view class="item">
					<text class="title">累计收益(元)</text>
					<text>560.09</text>
				</view>
				<view class="item">
					<text class="title">佣金收益(元)</text>
					<text>500.00</text>
				</view>
				<view class="item">
					<text class="title">推荐收益(元)</text>
					<text>0.00</text>
				</view>
			</view>
		</view>

		<view class="wallet_body">
			<view class="wallet_body_items" @tap="chongzhiMX">
				<image src="http://116.62.245.5/wallet-static/wallet/1.png" mode="widthFix"></image>
				<text>充值查询</text>
			</view>
			<view class="wallet_body_items" @tap="shouyiMX">
				<image src="http://116.62.245.5/wallet-static/wallet/2.png" mode="widthFix"></image>
				<text>收益明细</text>
			</view>
			<view class="wallet_body_items" @tap="yongjinMX">
				<image src="http://116.62.245.5/wallet-static/wallet/3.png" mode="widthFix"></image>
				<text>佣金明细</text>
			</view>
			<view class="wallet_body_items" @tap="tixianJL">
				<image src="http://116.62.245.5/wallet-static/wallet/4.png" mode="widthFix"></image>
				<text>提现记录</text>
			</view>
			<view class="wallet_body_items">
				<image src="http://116.62.245.5/wallet-static/wallet/5.png" mode="widthFix"></image>
				<text>收益预估</text>
			</view>
			<view class="wallet_body_items" @tap="tuiguangMX">
				<image src="http://116.62.245.5/wallet-static/wallet/6.png" mode="widthFix"></image>
				<text>推广明细</text>
			</view>
			<view class="wallet_body_items">
				<image src="http://116.62.245.5/wallet-static/wallet/7.png" mode="widthFix"></image>
				<text>我的资料</text>
			</view>
		</view>

		<view style="position: absolute;bottom: 0;" class="bottom_btn">
			<button type="default" style="color: #108EEF;" @tap="withdraw">提现</button>
			<button type="primary" @tap="transfer">转入</button>
			
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
			
		},
		methods: {
			transfer() {
				uni.navigateTo({
					url: './transfer/transfer',
				});
			},
			withdraw(){
				uni.navigateTo({
					url: './withdraw/withdraw',
				});
			},
			chongzhiMX(){
				uni.navigateTo({
					url: './chongzhiMX/chongzhiMX',
				});
			},
			shouyiMX(){
				uni.navigateTo({
					url: './shouyiMX/shouyiMX',
				});
			},
			yongjinMX(){
				uni.navigateTo({
					url: './yongjinMX/yongjinMX',
				});
			},
			tixianJL(){
				uni.navigateTo({
					url: './tixianJL/tixianJL',
				});
			},
			tuiguangMX(){
				uni.navigateTo({
					url: './tuiguangMX/tuiguangMX',
				});
			}
			
		},
	}
</script>

<style>
	.wallet_title {
		position: relative;
		width: 100vw;
		height: 302.343upx;
		background: linear-gradient(to top left, #eb6117, #e71d2f);
		// #ifdef H5
		background: linear-gradient(to top left, #eb6117, #e71d2f);
		// #endif
		// #ifdef APP-PLUS
		background: linear-gradient(to top left, #eb6117, #e71d2f);
		// #endif
		padding-top: 50upx;
	}

	.wallet_fonts {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: MicrosoftYaHei-Bold;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		font-size: 25.781upx;
	}

	.wallet_fonts .wallet_money {
		font-size: 58.593upx;
		font-family: MicrosoftYaHei-Bold;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
	}

	.wallet_title_bottom {
		width: 100vw;
		height: 107.812upx;
		background: linear-gradient(to top left, #e71d2f, #eb6117);
		// #ifdef H5
		background: linear-gradient(to top left, #e71d2f, #eb6117);
		// #endif
		// #ifdef APP-PLUS
		background: linear-gradient(to top left, #e71d2f, #eb6117);
		// #endif
		position: absolute;
		bottom: 0;
		display: flex;
	}

	.wallet_title_bottom .item {
		width: 33.333%;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 28.125upx;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
	}

	.wallet_title_bottom .item .title {
		font-size: 21.093upx;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(228, 225, 225, 1);
		margin-top: 28.125upx;
	}

	.wallet_body {
		display: flex;
		flex-flow:wrap;
		/* border-bottom: 1px solid rgba(221, 221, 221, 0.27); */
	}

	.wallet_body .wallet_body_items {
		width: 249.999upx;
		height: 201.562upx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.wallet_body .wallet_body_items:nth-child(3n-1){
		border: 1px solid rgba(221, 221, 221, 0.27);
		border-top: none;
	}
	.wallet_body .wallet_body_items:nth-child(1),.wallet_body .wallet_body_items:nth-child(3),.wallet_body .wallet_body_items:nth-child(4),.wallet_body .wallet_body_items:nth-child(6),.wallet_body .wallet_body_items:nth-child(7){
		border-bottom: 1px solid rgba(221,221,221,0.27);
	}
	.wallet_body .wallet_body_items:nth-child(7){
		border-right: 1px solid rgba(221,221,221,0.27);
		
	}

	.wallet_body .wallet_body_items image {
		width: 64.453upx;
		margin-top: 59.765upx;
		margin-bottom: 18.75upx;
	}

	.wallet_body .wallet_body_items text {
		font-size: 22.265upx;
		font-family: Adobe Heiti Std R;
		font-weight: normal;
		color: rgba(46, 48, 56, 1);
	}
	.bottom_btn{
		height: 99.609upx;
		width: 100vw;
		display: flex;
	}
	.bottom_btn button{
		width: 50%;
		border: none;
		line-height: 99.609upx;
		border-radius: none;
	}
</style>
