<template>
	<view class="task">
		<view>
			<view class="title">
				<text>标题</text>
				<input type="text" v-model="title" placeholder="请输入任务标题" />
			</view>
			<view class="task_content">
				<textarea v-model="content" placeholder="请输入任务内容" />
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
			<view class="titles">
				<text>单笔广告费</text>
				<input type="text" v-model="gPrice" placeholder="请输入任务标题" />
			</view>
			<view class="titles">
				<text>发布数量</text>
				<input type="text" v-model="num" placeholder="请输入任务标题" />
			</view>
			<view class="titles">
				<text>广告总价</text>
				<input type="text" v-model="price" placeholder="请输入任务标题" />
			</view>
		</view>
		<button type="primary" disabled="true">确认发布</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'',
				content:'',
				src1:'',
				src2:'',
				src3:'',
				gPrice:'',
				num:'',
				price:'',
				uploadShow:true
			};
		},
		methods:{
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
							url: this.API + "/app/uploadFile",
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
.task{
	width: 703.125upx;
	height: 807.421upx;
	padding: 0 auto;
	padding-left: 23.437upx;
	box-sizing: border-box;
	/* padding-top: 46.875upx; */
}
.task .title ,.titles{
	display: flex;
	align-items: center;
	font-size:29.296upx;
	font-family:SimSun;
	font-weight:400;
	color:rgba(27,26,26,1);
	border-bottom: 1px solid rgba(221, 221, 221, 0.27);
	
}
.titles,.title{
	margin-top: 35upx;
	box-sizing: border-box;
	padding-bottom: 20upx;
}
.titles text{
	display: block;
	width: 175.781upx;
}
.task .title input{
	margin-left: 119.531upx;
}
.task .task_content{
	margin-top: 43.359upx;
}
.task .task_content textarea{
	width: 100%;
	height: 180upx;
}
.task_upload .upload image{
	width: 117.187upx;
	height: 94.921upx;
}
.task_upload{
	display: flex;
	height: 94.921upx;
}
.upload_show{
	display: flex;
}
.upload_show image{
	width: 117.187upx;
	height: 94.921upx;
}
.taskTip text{
	font-size:23.437upx;
	font-family:SimSun;
	font-weight:400;
	color:rgba(198,194,194,1);
}
.task button{
	width:664.453upx;
	height:86.718upx;
	line-height: 86.718upx;
	margin-top: 84.375upx;
}
</style>
