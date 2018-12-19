<template>
	<view class="main body">
		<!-- 轮播 -->
		<view>
			<swiper class="hello" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"
			 indicator-active-color="#EEEEEE" indicator-color="#B3B3B3">
				<swiper-item v-for="(item,index) in bannerArray" :key="index">
					<view class="Harley_swiper_view">
						<image :src="item.bannerImg" lazy-load style="width: 100%;height: 100%;" mode="widthFix"
						 :data-bannerOpen="item.bannerUrl" @tap="getFun"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 公告 -->
		<view style="background: white;">
			<view class="uni-swiper-msg">
				<view class="uni-swiper-msg-icon">
					<image src="http://116.62.245.5/wallet-static/index/16@2x.png" lazy-load mode="widthFix" style="width: 176.953upx;height: 28.125upx;"></image>
				</view>
				<swiper autoplay="true" vertical circular="true" interval="3000">
					<swiper-item v-for="(item, index) in msg" :key="index">
						<text>&nbsp;{{item.noticeContent}}</text>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="main_itemList" style="background: white;">
			<view class="main_itemList_Items  " @tap="makeMoney">
				<image src="http://116.62.245.5/wallet-static/index/Coins@2x.png" mode="widthFix" lazy-load></image>
				<text>如何赚佣</text>
			</view>
			<view class="main_itemList_Items  " @tap="promotion">
				<image src="http://116.62.245.5/wallet-static/index/08@2x.png" mode="widthFix" lazy-load></image>
				<text>推广二维码</text>
			</view>
			<view class="main_itemList_Items  " @tap="vip">
				<image src="http://116.62.245.5/wallet-static/index/09@2x.png" mode="widthFix" lazy-load></image>
				<text>会员</text>
			</view>
			<view class="main_itemList_Items " @tap="publishTask">
				<image src="http://116.62.245.5/wallet-static/index/10.png" mode="widthFix" lazy-load></image>
				<text>发布任务</text>
			</view>
			<view class="main_itemList_Items  " @tap="missionHall">
				<image src="http://116.62.245.5/wallet-static/index/40@2x.png" mode="widthFix" lazy-load></image>
				<text>任务大厅</text>
			</view>
			<view class="main_itemList_Items  " @tap="submitTask">
				<image src="http://116.62.245.5/wallet-static/index/42@2x.png" mode="widthFix" lazy-load></image>
				<text>提交任务</text>
			</view>
			<view class="main_itemList_Items  ">
				<image src="http://116.62.245.5/wallet-static/index/41@2x.png" mode="widthFix" lazy-load></image>
				<text>任务记录</text>
			</view>
			<view class="main_itemList_Items " @tap="kefuCenter">
				<image src="http://116.62.245.5/wallet-static/index/iconfont-kefushenhe@2x.png" mode="widthFix" lazy-load></image>
				<text>客服中心</text>
			</view>
		</view>
		<!-- 收益 -->
		<view class="Harley_Profit" style="background: white;">
			<view class="top">
				<image class="top_img" src="http://116.62.245.5/wallet-static/index/sysj.png" lazy-load mode="widthFix"></image>
				<view class="top_text">
					<text class="top_texts" :class="{top_text_bg:numIndex==1}" @tap="numIndex=1">本月</text>
					<text class="top_texts" :class="{top_text_bg:numIndex==2}" @tap="numIndex=2">本周</text>
					<text :class="{top_text_bg:numIndex==3}" @tap="numIndex=3">昨日</text>
				</view>
			</view>
			<!-- 收益金额 -->
			<view>
				<view class="money">
					<text class="money_font">收益总额(元)</text>
					<view class="money_nums">
						<text class="money_num">4246500,73</text>
					</view>
				</view>
				<view style="display: flex;">
					<view class="money_bt">
						<view class="money_items">
							<view class="fonts">
								<text>任务佣金(元)</text>
							</view>
							<view class="moneys">
								<text>5000.32</text>
							</view>
						</view>
					</view>
					<view class="money_bt">
						<view class="money_items">
							<view class="fonts">
								<text>任务佣金(元)</text>
							</view>
							<view class="moneys">
								<text>5000.32</text>
							</view>
						</view>
					</view>
					<view class="money_bt">
						<view class="money_items">
							<view class="fonts">
								<text>任务佣金(元)</text>
							</view>
							<view class="moneys">
								<text>5000.32</text>
							</view>
						</view>
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
				msg: ["asfasfa", "asdfadf"],
				numIndex: 1,
				bannerArray:null
			};
		},
		created() {
			//获取banner 未完成
			if (uni.getStorageSync('token')) {
				//获取banner 未完成
				uni.request({
					url: this.API + '/banner',
					method: 'POST',
					dataType: 'json',
					data: {
						"token": uni.getStorageSync('token'),
						"pageNum": 1,
						"pageSize": 5
					},
					success: res => {
						this.bannerArray=res.data.data.content
					},
					fail: (res) => {
						console.log(res)
					}
				})
				//获取公告
				uni.request({
					url: this.API + '/app/notice?token='+uni.getStorageSync('token'),
					method: 'POST',
					dataType: 'json',
					data: {
						"pageNum":1, 		
						"pageSize":5       
					},
					success: res => {	
						this.msg=res.data.data.content
					},
					fail: (res) => {				
						console.log(res)
					}
				})
			}
		},
		methods: {
			makeMoney() {
				uni.navigateTo({
					url: './makeMoney/makeMoney',
				});
			},
			promotion() {
				uni.navigateTo({
					url: './promotion/promotion',
				})
			},
			vip() {
				uni.navigateTo({
					url: './vip/vip'
				})
			},
			publishTask() {
				uni.navigateTo({
					url: './publishTask/publishTask'
				})
			},
			missionHall() {
				uni.navigateTo({
					url: './missionHall/missionHall'
				})
			},
			kefuCenter() {
				uni.navigateTo({
					url: './kefuCenter/kefuCenter'
				})
			},
			submitTask() {
				uni.navigateTo({
					url: './submitTask/submitTask'
				})
			},
			//打开banner链接
			getFun(e) {
				this.$store.commit('openWebview',e.target.dataset.banneropen)
				if(this.$store.state.openUrl){
					uni.navigateTo({
						url:'./openWebView/openWebView'
					})
				}
			},
			//打开公告链接
		},
	}
</script>
<style lang="stylus" scoped>
	.uni-swiper-msg 
		width 100%
		height 69.14upx
		display flex
		flex-wrap nowrap
	.uni-swiper-msg-icon 
		width 199.218upx
		height 69.14upx
		line-height 69.14upx
	.uni-swiper-msg-icon image 
		width 176.953upx
		margin 0 8.203upx 0 22.265upx
	.uni-swiper-msg swiper 
		width 100%
		height 50upx
	.uni-swiper-msg swiper-item 
		line-height 69.14upx
		font-size 28.125upx
		font-family Adobe Heiti Std R
		font-weight normal
		color rgba(102 100 100 1)
		padding-left 2.343upx
	

	.Harley_list 
		display flex
		flex-flow row
	.Harley_index_items 
		display flex
		flex-flow row wrap
		justify-content center
		align-items center
		width 20%
		padding-left 4%
		box-sizing border-box
	.Harley_index_items image 
		width 89.062upx
		height 80.859upx
		margin 24.609upx 0 17.578upx 0
	.Harley_index_items text 
		font-size 22.265upx
		font-family FZFYSJW--GB1-0
		font-weight 400
		color rgba(51 51 51 1)
		display block
		width 100%
		text-align center
	#Harley_swiper .uni-swiper-wrapper .uni-swiper-dots-horizontal 
		bottom 11.718upx ! !important
	uni-image 
		width 750upx
		height 356.25upx
	.hello,
	.Harley_swiper_view 
		width 100vw
		height 267.843upx
	.Harley_Profit 
		width 100vw
		height 389.062upx
	.Harley_Profit .top 
		display flex
		justify-content space-between
	.Harley_Profit .top .top_img 
		width 188.671upx
		height 44.531upx
		margin 17.578upx 0 0 30.468upx
	.Harley_Profit .top .top_text 
		margin 32.812upx 25.781upx 0 0
		display flex
	.Harley_Profit .top .top_text text 
		display inline-block
		height 41.015upx
		width 90.234upx
		text-align center
		font-size 26.953upx
		font-family PingFang-SC-Medium
		font-weight 500
		color rgba(206 206 206 1)
		line-height 41.015upx
	.Harley_Profit .top .top_text .top_text_bg 
		border-radius 19.921upx
		background rgba(223 239 255 1)
		color #108EEF
	.Harley_Profit .top .top_text .top_texts 
		margin-right 12.89upx
	.money 
		text-align center
		margin-top 50.39upx
	.money .money_font 
		font-size 30.468upx
		font-family Adobe Heiti Std R
		font-weight normal
		color rgba(102 102 102 1)
		margin 0 auto
	.money .money_num 
		font-size 59.765upx
		font-family DIN-Bold
		font-weight bold
		color rgba(16 142 239 1)
	.money_bt 
		display flex
		width 33.33%
		text-align center
		margin-top 17.578upx
	.money_bt:nth-child(2)
		border-left 1px solid rgba(221 221 221 0.27)
		border-right 1px solid rgba(221 221 221 0.27)
	.money_bt .money_items 
		width: 100%
	.money_bt .money_items .fonts text 
		font-size 26.953upx
		font-family Adobe Heiti Std R
		font-weight normal
		color rgba(153 153 153 1)
	.money_bt .money_items .moneys 
		margin-top 23.437upx
	.money_bt .money_items .moneys text 
		font-size 26.953upx
		font-family DIN-Medium
		font-weight 400
		color rgba(255, 150, 0, 1)
	.money_bt .money_items .fonts,
	.money_bt .money_items .moneys 
		margin: 0 auto
	.main_itemList 
		display flex
		flex-wrap wrap
		border-top 1px solid rgba(221 221 221 0.27)
		border-bottom 1px solid rgba(221 221 221 0.27)
	.main_itemList .main_itemList_Items image 
		width: 87.89upx
		height: 80.859upx
		margin: 17.578upx auto
	.main_itemList .main_itemList_Items text 
		margin-bottom 15.234upx
	.main_itemList .main_itemList_Items 
		width 25%
		display flex
		flex-direction column
		text-align center
		font-size 22.265upx
		font-family FZFYSJW--GB1-0
		font-weight 400
		color rgba(51, 51, 51, 1)
		box-sizing border-box
</style>
