<template>
	<view class="kefuCenter">
		<view class="top">
			<image src="../../../static/center/51@2x.png"></image>
		</view>
		<view class="kefu_body">
			<view class="tops">
				<view class="kefu_items">
					<text>会员客服</text>
					<image src="../../../static/center/message.png"></image>
				</view>
				<view class="kefu_items">
					<text>广告投放客服</text>
					<image src="../../../static/center/message.png"></image>
				</view>
				<view class="kefu_items">
					<text>投诉客服</text>
					<image src="../../../static/center/message.png"></image>
				</view>
			</view>
			<view class="bottom">
				<view class="kefu_items">
					<text>客服工作时间</text>
					<text style="color: #626262;">9:00-11:30;12:30-20:00</text>
				</view>
				<view class="kefu_items">
					<text>咨询热线时间</text>
					<text style="color: #626262;">9:00-11:30;12:30-20:00</text>
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
.top image{
	width: 159.375upx;
	height: 148.828upx;
	margin: 99.609upx 294.14upx;
}
.tops .kefu_items , .bottom .kefu_items{
	display: flex;
	justify-content: space-between;
	margin: 0 11.718upx 0 23.437upx;
	align-items: center;
	padding: 23.437upx 0;
	border-bottom: 1.171upx solid rgba(221, 221, 221, 0.27);
	
} 
.kefu_items text{
	font-size: 29.296upx;
}
.kefu_items image{
	width: 35upx;
	height: 35upx;
}
.kefu_body .bottom{
	margin-top: 58.593upx;
}
</style>
