<template>
	<view>
		<view class="vip_body">
			<image src="../../../static/index/126.png" mode="widthFix"></image>
			<view class="vip_tip">
				<text>挖掘朋友圈上面的财富，开启躺赚人生</text>
			</view>
			<view class="vip_allItems">
				<view class="vip_items">
					<text>普通vip</text>
					<view class="vip_info">
						<view class="vip_info_title">
							<text>特权</text>
						</view>
						<view class="vip_info_des">
							<text>任务奖励+5%</text>
							<text>任务奖励+5%</text>
							<text style="margin-bottom: 0;">任务奖励+5%</text>
						</view>
					</view>
					<view class="KT_vip">
						<text>立即开通</text>
					</view>
				</view>
				<view class="vip_items">
					<text>高级vip</text>
					<view class="vip_info">
						<view class="vip_info_title">
							<text>特权</text>
						</view>
						<view class="vip_info_des">
							<text>任务奖励+5%</text>
							<text>任务奖励+5%</text>
							<text style="margin-bottom: 0;">任务奖励+5%</text>
						</view>
					</view>
					<view class="KT_vip">
						<text>立即开通</text>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style>
	.vip_body {
		width: 750upx;
		height: 1228.125upx;
		background: url('http://116.62.245.5/wallet-static/index/124.png');
		background-size: 100% 100%;
		text-align: center;
	}

	.vip_body>image {
		width: 450upx;
		height: 84.375upx;
		margin-top: 80.859upx;
	}

	.vip_tip {
		font-size: 28.125upx;
		font-family: MicrosoftYaHei-Bold;
		font-weight: bold;
		color: rgba(82, 55, 9, 1);
	}
	.vip_allItems{
		margin-top:198.046upx ;
	}
	.vip_items{
		width: 650.39upx;
		height: 315.234upx;
		margin: 0 auto;
		background: url(http://116.62.245.5/wallet-static/index/125.png);
		background-size: 100% 100%;
		margin-top: 69.14upx;
	}
	.vip_items>text{
		font-size:35.156upx;
		font-family:FZFYSJW--GB1-0;
		font-weight:400;
		color:rgba(170,39,33,1);
	}
	.vip_info{
		display: flex;
		font-size:24.609upx;
		font-family:Adobe Heiti Std R;
		font-weight:normal;
		color:rgba(103,103,103,1);
		margin: 0;
		padding: 0;
	}
	.vip_info .vip_info_title{
		width: 25.781upx;
		height: 73.828upx;
		margin: 57.421upx 93.75upx 35.156upx 93.75upx;
		writing-mode:lr-tb
	}
	.vip_info_des{
		margin-top: 46.875upx;
		width: 100%;
		text-align: left;
	}
	.vip_info_des text{
		display: inline-block;
		width: 50%;
		margin-bottom: 17.578upx;

	}
	.KT_vip{
		width: 522.656upx;
		height: 82.031upx;
		background: url(http://116.62.245.5/wallet-static/index/123.png);
		background-size: 100% 100%;
		margin: 0 auto;
		line-height: 82.031upx;
		
	}

</style>
