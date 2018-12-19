<template>
	<view class="transfer">
		<view class="body">
			<view class="transfer_title">
				<text>转入金额(元)</text>
			</view>
			<view class="transfer_money">
				<image src="../../../static/wallet/10.png" mode="widthFix"></image><input type="text" placeholder="请输入转入金额">
			</view>
			<view class="transfer_tip">
				<text>预计收益到账时间</text><text style="color: #FF0000;">11月26日</text>
			</view>
		</view>
		<view>
			<button type="primary" disabled="true" class="transfer_submit">确认转入</button>
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

<style scoped>
	.transfer .body {
		height: 302.343upx;
	}
	.transfer_tip text {
		color: rgba(1, 1, 1, 1);
	}

</style>
