<template>
	<view class="missionHall">
		<view class="miss_topbar">
			<view class="list" @tap="showTime">
				<view >
					<text>时间</text>
					<image src="../../../static/index/xia.png" ></image>
				</view>
			</view>
			<view class="list" @tap="showClass">
				<view>
					<text>分类</text>
					<image src="../../../static/index/xia.png"></image>
				</view>
			</view>
			<view class="list" @tap="showPrice">
				<view>
					<text>价格</text>
					<image src="../../../static/index/xia.png"></image>
				</view>
			</view>
		</view>
		
		
		
		<view class="miss_content">
			<view class="miss_content_items" @tap="taskDes" v-for="item in 4">
				<view class="logo">
					<image src="../../../static/center/cw.png" mode=""></image>
				</view>
				<view class="title_des">
					<text>普通VIP任务(阿胶)</text>
					<text style="color: #999999;">未领取(还剩:10个)</text>
				</view>
				<view class="items_price">
					<text>￥4元</text>
					<text style="color: #999999;">2018-11-22</text>
				</view>
				<image class="mores" src="../../../static/center/more.png" mode=""></image>
			</view>
		</view>
		
		
		
		
		<mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
		@onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
		
		
		
	</view>
</template>

<script>
	import mpvuePicker from '../../../components/mpvue-picker/mpvuePicker.vue';
	export default {
		components: {
			mpvuePicker,
		},
		data() {
			return {
				themeColor: '#E93A26',
				mode: '',
				deepLength: 1,
				pickerValueDefault: [0],
				pickerValueArray:[],
				
			}
		},
		methods:{
			showTime() {
				this.pickerValueArray = this.pickerSingleArray
				this.mode = 'selector'
				this.deepLength = 1
				this.pickerValueDefault = [0]
				this.$refs.mpvuePicker.show()
			},
			showClass() {
				this.pickerValueArray = this.pickerSingleArray
				this.mode = 'selector'
				this.deepLength = 1
				this.pickerValueDefault = [0]
				this.$refs.mpvuePicker.show()
			},
			showPrice() {
				this.pickerValueArray = this.pickerSingleArray
				this.mode = 'selector'
				this.deepLength = 1
				this.pickerValueDefault = [0]
				this.$refs.mpvuePicker.show()
			},
			onConfirm(e) {
				this.pickerValue = e.label
			},
			onCancel(e) {
			},
			taskDes(){
				uni.navigateTo({
					url: './taskDes/taskDes',
				});
			}
		}
	}
</script>

<style>
.miss_topbar{
	display: flex;
	height: 84.375upx;
	width: 100%;
	border-bottom:1px solid rgba(225,225,225,1);
}
.miss_topbar .list{
	width: 33.333%;
	height: 84.375upx;
}


.miss_topbar image{
	height: 14.062upx;
	width: 24.609upx;
}
.list view{
	width: 100%;
	height: 30.468upx;
	border-right: 1px solid #ccc;
}
.list text{
	margin-right: 23.437upx;
	text-align: center;
	font-size:28.125upx;
	font-family:MicrosoftYaHei;
	font-weight:400;
	color:rgba(51,51,51,1);
}
.list view{
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top:30.468upx;
}
.miss_content_items{
	width: 100%;
	height: 120.703upx;
	padding-top: 17.578upx;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid rgba(221, 221, 221, 0.27);
	
}
.miss_content_items .logo image{
	width: 89.062upx;
	height: 77.343upx;
	margin-left: 33.984upx;
}
.miss_content_items .title_des{
	width: 377.343upx;
	font-size:22.265upx;
	font-family:MicrosoftYaHei;
	font-weight:400;
	color:rgba(102,102,102,1);
	display: flex;
	flex-direction: column;
	margin-left: 23.437upx;
}
.items_price{
	font-size:22.265upx;
	font-family:MicrosoftYaHei;
	font-weight:400;
	color:#FF0000;
	display: flex;
	flex-direction: column;
	text-align: center;
}
.mores{
	width: 19.921upx;
	height: 39.843upx;
	margin-left: 33.984upx;
}
</style>
