<template>
	<view id="bind" class="body">
		<view class="personInformation_list">
			<view class="info">
				<text>持卡人姓名:</text>
			</view>
			<view class="info_Input">
				<input type="text" v-model="userName" />
			</view>
		</view>
<!--  -->
		<view class="personInformation_lists">
			<view class="left">
				<view class="info">
					<text>银行卡名称:</text>
				</view>
				<view class="info_Input" @tap="showSinglePicker">
					<input type="text" v-model="pickerText" disabled="true"/>
				</view>
			</view>
			<view class="right">
				<image src="http://116.62.245.5/wallet-static/center/more.png" mode="widthFix"></image>
			</view>
		</view>
<!--  -->
		<view class="personInformation_list">
			<view class="info">
				<text>银行卡号:</text>
			</view>
			<view class="info_Input">
				<input type="text" value="11111111" />
			</view>
		</view>

		<view class="personInformation_lists">
			<view class="left">
				<view class="info">
					<text>手机号码:</text>
				</view>
				<view class="info_Input">
					<input type="text" v-model="pickerText"/>
				</view>
			</view>
			<view class="right">
				<!-- <image src="../../static/center/more.png" mode="widthFix"></image> -->
				<text style="position: absolute;">获取</text>
			</view>
		</view>

		<view class="personInformation_list">
			<view class="info">
				<text>验证码:</text>
			</view>
			<view class="info_Input">
				<input type="text" value="xxx小区" />
			</view>
		</view>


		
		
		
		
		<view>
			<view class="infos">
				<text class="tips">*</text><text>请先选择银行卡名称，再输入相应的银行卡号</text>
			</view>
		</view>
		<view class="gerenSubmit" >
			<text>确定</text>
		</view>
		
		
		
		
		<mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
		@onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>

	</view>
</template>

<script>
	import mpvuePicker from '../../components/mpvue-picker/mpvuePicker.vue';
	export default {
		components: {
			mpvuePicker,
		},
		data() {
			return {
				pickerSingleArray: [{
						label: '中国',
						value: 1
					},
					{
						label: '俄罗斯',
						value: 2
					},
					{
						label: '美国',
						value: 3
					},
					{
						label: '日本',
						value: 4
					}
				],
				themeColor: '#E93A26',
				userName:'测试用户',
				pickerText: '请选择银行',
				mode: '',
				deepLength: 1,
				pickerValueDefault: [0],
				pickerValueArray:[],
				pickerValue:''
			};
		},
		methods: {
			showSinglePicker() {
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
		},
		onUnload() {
			if (this.$refs.mpvuePicker.showPicker) {
				this.$refs.mpvuePicker.pickerCancel()

			}
		}
	}
</script>

<style lang="stylus" scoped>

		.personInformation_list .info ,.personInformation_lists .left .info {
			width: 205.078upx;
			margin-left: 29.296upx;
		}
		.personInformation_list .info text ,.personInformation_lists .left .info text {
			font-size: 28.125upx;
			font-family: SimSun;
			font-weight: 400;
			color: rgba(34, 36, 35, 1);
			line-height: 92.578upx;
		}
		.personInformation_list .info_Input input , .personInformation_lists .info_Input input {
			font-size: 28.125upx;
			font-family: SimSun;
			font-weight: 400;
			color: rgba(34, 36, 35, 1);
			margin: auto;
		}
// 		.infos text{
// 			font-size: 28.125upx;
// 			font-family: SimSun;
// 			font-weight: 400;
// 			color: rgba(34, 36, 35, 1);
// 		}
		.infos .tips {
			color: #FC0404;
			margin-left: 29.296upx;
		}
		.gerenSubmit {
			width: 670.312upx;
			height: 85.546upx;
			background: linear-gradient(90deg, rgba(231, 28, 48, 1), rgba(235, 97, 23, 1));
			border-radius: 11.718upx;
			text-align: center;
			line-height: 85.546upx;
			color: #FFFFFF;
			margin: 153.515upx auto 0 auto;
		}
		.personInformation_lists{
			width: 100vw;
			height: 92.578upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.personInformation_lists .left{
			display: flex;
			align-items: center;
		}
		.personInformation_lists .right{
			position: relative;
			right: 49.218upx;
		}
		.personInformation_lists .rights{
			font-size: 28.125upx;
			font-family: SimSun;
			font-weight: 400;
			border-left: 1px solid rgba(34, 36, 35, 1);
			padding-left: 28.125upx;
			color: rgba(34, 36, 35, 1);
			position: relative;
			right: 49.218upx;
		}
		.personInformation_lists .right image{
			width: 14.062upx;
		}
		.personInformation_lists .left text{
			font-size: 28.125upx;
			font-family: SimSun;
			font-weight: 400;
			color: rgba(34, 36, 35, 1);
			line-height: 92.578upx;
			text-align: left;
		}
		.personInformation_lists .right text{
			display: block;
			width: 58.593upx;
			right: 11.718upx;
			top: -15upx;
			font-size: 28.125upx;
			font-family: SimSun;
			font-weight: 400;
			border-left: 1px solid rgba(34, 36, 35, 0.1);
			padding-left: 23.437upx;
	}
</style>
