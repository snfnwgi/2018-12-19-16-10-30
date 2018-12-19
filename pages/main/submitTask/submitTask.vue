<template>
	<view class="submitTask">
		<view>
			<view class="header">
				<text>普通任务(阿胶)</text>
				<view class="content">
					<textarea value="" placeholder="请输入提交任务时备注内容" />
				</view>
				<view class="task_upload">
					<view class="upload" v-if="uploadShow">
						<image src="../../../static/index/upload.png" @tap="chooseImage"></image>
					</view>
					<view class="upload_show">
						<image :src="src1"></image>
						<image :src="src2"></image>
						<image :src="src3"></image>				
					</view>
				</view>
				<view class="taskTip">
					<text>*温馨提示：图片比例最好为4:3,5:3,16:9</text>
				</view>
				<button type="primary">确认提交</button>
				<view class="bottom">
					<text class="imgTip">提交的内容格式如下:</text>
					<image src="../../../static/index/des.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src1:'',
				src2:'',
				src3:'',
				uploadShow:true
			};
		},

		methods:{
			showBig(){
				
			},		
			chooseImage: function () {
				uni.showLoading({});
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					sourceType: ['album'],
					success: (res) => {
						console.log('chooseImage success, temp path is', res.tempFilePaths[0])
						var imageSrc = res.tempFilePaths[0]
						uni.uploadFile({
							url: "https://unidemo.dcloud.net.cn/upload",
							filePath: imageSrc,
							name: 'data',
							success: (res) => {
								console.log('uploadImage success, res is:', res)
								uni.showToast({
									title: '上传成功',
									icon: 'success',
									duration: 1000
								})
								if(this.src1==''){
									this.src1 = imageSrc
								}else if(this.src2==''){
									this.src2 = imageSrc
								}else{
									this.uploadShow=false
									this.src3 = imageSrc
								}
							},
							fail: (err) => {
								console.log('uploadImage fail', err);
								uni.showModal({
									content:err.errMsg,
									showCancel:false
								});
								uni.hideLoading();
							},
							complete: () => {
								console.log("complate")
							}
						})
					},
					fail: (err) => {
						console.log('chooseImage fail', err)
						uni.hideLoading();
					}
				})
			}
		
		
		
		
		
		
		
		}

	}
</script>

<style>
.submitTask .header{
	font-size:29.296upx;
	font-family:SimSun;
	font-weight:400;
	color:rgba(27,26,26,1);
	text-align: center;
	width: 703.125upx;
	height: 533.203upx;
	margin:46.875upx auto ;
}
.submitTask .header .content{
	margin-top: 49.218upx;
	text-align: left;
}
.submitTask image{
	width: 117.187upx;
	height: 94.921upx;
}
.submitTask .task_upload{
	display: flex;
	margin-left: 23.437upx;
}
.submitTask .taskTip{
	text-align: left;
	font-size:23.437upx;
	font-family:SimSun;
	font-weight:400;
	color:rgba(198,194,194,1);
	margin-top: 23.437upx;
	margin-left: 23.437upx;
}
.submitTask button{
	border-radius: 5.859upx;
	width:664.453upx;
	height:86.718upx;
	margin: 0 auto;
	margin-top: 120.703upx;
	line-height: 86.718upx;
}
.submitTask .imgTip{
	text-align: left;
	margin: 36.328upx 0;
}
.submitTask .bottom{
	display: flex;
	margin-left: 23.437upx;
	flex-direction: column;
}
.submitTask .bottom image{
	width: 611.718upx;
	height: 428.906upx;
}
</style>
