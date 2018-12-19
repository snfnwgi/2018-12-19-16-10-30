<template>
	<view class="body">
		<view class="personInformation_list">
			<view class="info">
				<text>真实姓名:</text>
			</view>
			<view class="info_Input">
				<input type="text" value="测试用户" />
			</view>
		</view>

		<view class="personInformation_list">
			<view class="info">
				<text>手机号码:</text>
			</view>
			<view class="info_Input">
				<input type="text" value="11111111" />
			</view>
		</view>

		<view class="personInformation_list">
			<view class="info">
				<text>所属区域:</text>
			</view>
			<view class="info_Input" >
				<input type="text" disabled @tap="showMulLinkageThreePicker"  v-model="pickerText" />
			</view>
		</view>

		<view class="personInformation_list">
			<view class="info">
				<text>详细地址:</text>
			</view>
			<view class="info_Input">
				<input type="text" value="xxx小区" />
			</view>
		</view>

		<view class="personInformation_list">
			<view class="info">
				<text>注册码:</text>
			</view>
			<view class="info_Input">
				<input type="text" value="11111111" />
			</view>
		</view>
		<view>
			<view class="infos">
				<text class="tips">*</text><text>资料一旦提交无法修改,请谨慎提交</text>
			</view>
		</view>
		<view class="gerenSubmit" >
			<text>确定</text>
		</view>



		<!--  -->


		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue'
	import cityData from '../../common/city.data.js'
	export default {
		components: {
			mpvueCityPicker
		},
		data() {
			return {
				pickerText:'',
				themeColor: '#E93A26',
			};
		},
		methods: {
			showMulLinkageThreePicker() {
				console.log()
				this.$refs.mpvueCityPicker.show()
			},
			onConfirm(e) {
				this.pickerText = e.label
			},
			onCancel(e) {
			},
			myfun(){
				console.log('1')
			}

		},
	}
</script>

<style lang="stylus">
	.personInformation_list .info text {
		font-size: 28.125upx;
		font-family: SimSun;
		font-weight: 400;
		color: rgba(34, 36, 35, 1);
		line-height: 92.578upx;
	}
	.personInformation_list .info_Input input {
		font-size: 28.125upx;
		font-family: SimSun;
		font-weight: 400;
		color: rgba(34, 36, 35, 1);
		margin: auto;
	}
	.infos text {
		font-size: 28.125upx;
		font-family: SimSun;
		font-weight: 400;
		color: rgba(34, 36, 35, 1);
	}
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
</style>
