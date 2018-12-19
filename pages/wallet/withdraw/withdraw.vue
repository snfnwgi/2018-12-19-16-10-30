<template>
	<view class="transfer">
		<view class="body">
			<view class="transfer_title">
				<text>提现金额(元)</text>
			</view>
			<view class="transfer_money">
				<image src="../../../static/wallet/10.png" mode="widthFix"></image><input type="text" placeholder="请输入提现金额">
			</view>
			<view class="transfer_money">
				<image src="../../../static/wallet/11.png" mode="widthFix"></image><input type="text" placeholder="请输入转账账号">
			</view>
			<view class="transfer_money">
				<image src="../../../static/wallet/12.png" mode="widthFix"></image><input type="text" placeholder="请输入转账人的名称">
			</view>
			<view class="transfer_tip">
				<text>备注信息(可输入详细的联系方式，地址等信息)</text>
			</view>
		</view>
		<view>
			<button type="primary" disabled="true" class="transfer_submit">确认提现</button>
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
		height: 584.765upx;	
	}
	.transfer_tip text {
		color: #C6C2C2;
	}

</style>
