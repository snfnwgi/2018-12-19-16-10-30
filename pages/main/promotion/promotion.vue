<template>
	<view class="promotion" style="background: #FEE1B9;">
		<image src="../../../static/index/tuiguang/banner@2x.png" mode="widthFix"></image>
		<view class="promotion_register">
			<image src="../../../static/index/tuiguang/bpsccode@2x.png" mode="widthFix"></image>
		</view>
		<view class="promotion_btn">
			<text>复制邀请链接地址</text>
		</view>
		<view class="promotion_friends">
			<image src="../../../static/index/tuiguang/20@2x.png" mode="widthFix"></image>
		</view>
		<view class="promotions">
			<view v-for="(item,index) in promotions" :key="index">
				<text>{{item}}</text>

			</view>
		</view>
		<view class="promotion_bottom" @tap="fenxiang">
			<image src="../../../static/index/tuiguang/btn.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				promotions: ['A', 'A', 'A', 'A', 'A', 'A'],
			};
		},
		methods:{
			fenxiang(){
				uni.share({
					provider: "weixin",
					scene: "WXSenceTimeline",
					type: 0,
					href: "http://www.baidu.com",
					title: "分享测试",
					imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
					success: function (res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function (err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
			}
		}
	}
</script>

<style>
	.promotion {
		width: 100%;
	}

	.promotion image {
		width: 100%;
		height: 385.546upx;
	}

	.promotion_register {
		width: 407.812upx;
		height: 393.75upx;
		background: url('http://116.62.245.5/wallet-static/index/tuiguang/19@2x.png');
		background-size: 100%;
		margin: 23.437upx auto;
		text-align: center;
	}

	.promotion_register image {
		width: 269.531upx;
		height: 266.015upx;
		margin-top: 52.734upx;
	}

	.promotion_btn {
		width: 412.5upx;
		height: 78.515upx;
		background: rgba(231, 21, 52, 1);
		margin: 23.437upx auto;
		text-align: center;
	}

	.promotion_btn text {
		font-size: 29.296upx;
		font-family: SimSun;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		line-height: 78.515upx;
	}

	.promotion_friends {
		width: 288.281upx;
		height: 31.64upx;
		margin: 35.156upx auto;
	}

	.promotions {
		width: 407.812upx;
		height: 67.968upx;
		margin: 0 auto;
		padding-bottom: 48.046upx;

	}

	.promotions view {
		display: inline-flex;
		width: 56.25upx;
		height: 67.968upx;
		font-size: 29.296upx;
		font-family: MicrosoftYaHei-Bold;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		background: rgba(231, 21, 52, 1);
		text-align: center;
		line-height: 67.968upx;
		border-radius: 20%;
		margin-left: 14.062upx;
	}

	.promotion view:nth-child(1) {
		margin-left: 0;
	}

	.promotions view text {
		display: block;
		margin: 0 auto;
	}

	.promotion_bottom {
		width: 332.812upx;
		height: 75upx;
		margin: 0 auto;
		padding-bottom: 35.156upx;
	}

	.promotion_bottom img {
		width: 332.812upx;
		height: 75upx;
	}
</style>
