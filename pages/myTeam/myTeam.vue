<template>
	<view class="body">
		<view class="myTeam_list" v-for="(item,index) in 10" :key="index" @tap="goIteam">
			<view class="left">
				<text class="iconfont">&#xe63e;</text>
				<text class="myTeam_list_font">{{index}}级会员</text>
			</view>
			<view class="right">
				<text>{{index}}人</text>
				<image src="../../static/center/more.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		onLoad() {

		},
		methods: {
			goIteam() {
				uni.navigateTo({
					url: '../teamInfo/teamInfo',
				});
			}
		},
	}
</script>

<style>
	.body .myTeam_list .iconfont{
		font-weight: 400;
		font-size: 30.468upx;
	}
	.body .myTeam_list{
		width: 100vw;
		height:97.265upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		margin-bottom: 17.578upx;
	}
	.body .myTeam_list .left{
		display: flex;
		align-items: center;
	}
	.body .myTeam_list .myTeam_list_font{
		font-size:28.125upx;
		font-family:SimSun;
		font-weight:400;
		color:rgba(0,0,0,1);
	}
	.body .myTeam_list .right{
		margin-right: 46.875upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 93.75upx;
	}
	.body .myTeam_list .right text{
		font-size:35.156upx;
		/* font-family:SimSun; */
		font-weight:100;
		color:red;
		padding-right: 5.859upx;
	}
	.body .myTeam_list .right image{
		width: 14.062upx;
		height: 28.125upx;
		margin-right: 5.859upx;
	}

</style>
