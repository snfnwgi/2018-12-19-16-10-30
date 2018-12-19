<template>
	<view class="body">
		<view class="myTeam_list" v-for="(item,index) in 10" :key="index">
			<view class="left">
				<text class="iconfont">&#xe63e;</text>
				<view>
					<view class="teamName">
						<text>朱卫明</text>
					</view>
					<view class="teamLeav">
						<text>普通用户</text>
					</view>
				</view>
			</view>
			<view class="right" @touchend="call">
				<text class="iconfont">&#xe6a3;</text>
				<view class="right_time">
					<text>2018年12月4日17:26:33</text>
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
		},
		onLoad() {

		},
		methods: {
		call(){
			uni.makePhoneCall({
			phoneNumber: '17601233768' //仅为示例
		});
}
		},
	}
</script>

<style>
	.body{
			background: rgb(239,239,239);
			width: 100vw;
			/* height: scale(100vh- var(--status-bar-height)); */
			height: 100vh;	
			// #ifdef H5
				height: scale(100vh-44px);
			// #endif
	}
	.body .myTeam_list .iconfont{
		font-weight: 400;
		font-size: 63.281upx;
	}
	.body .myTeam_list{
		width: 100vw;
		height:132.421upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
/* 		margin-bottom: 17.578upx; */
		border-bottom: 1px solid rgba(221, 221, 221, 0.27);
	}
	.body .myTeam_list .left{
		display: flex;
		align-items: center;
	}
	.body .myTeam_list .left .teamName{
		font-size:30.468upx;
		font-family:Adobe Heiti Std R;
		font-weight:normal;
		color:rgba(0,0,0,1);
		text-align: center;
		font-weight: 700;
		margin-bottom: 7.031upx;
	}
	.body .myTeam_list .left .teamLeav{
		font-size:26.953upx;
		font-family:Adobe Heiti Std R;
		font-weight:normal;
		color:rgba(255,255,255,1);
		background: rgb(245,198,7);
		padding: 9.375upx 23.437upx;
		display: block;
		border-radius: 10%;
	}
	.body .myTeam_list .myTeam_list_font{
		font-size:28.125upx;
		font-family:SimSun;
		font-weight:400;
		color:rgba(0,0,0,1);
	}
	.body .myTeam_list .right{
		margin-right: 51.562upx;
		text-align: left;
	}
	.body .myTeam_list .right .iconfont ,.body .myTeam_list .right .right_time{		display: block;
		text-align: right;
		margin: 0;
		
		
	}
	.body .myTeam_list .right .iconfont {
		font-size:38.671upx;
		line-height: 38.671upx;
		margin: 14.062upx 0;
		font-family:Adobe Heiti Std R;
		font-weight:normal;
		color:rgba(204,204,204,1);
	}
	.body .myTeam_list .right .right_time{
		font-size:23.437upx;
font-family:Adobe Heiti Std R;
font-weight:normal;
color:rgba(204,204,204,1);
	}
</style>
