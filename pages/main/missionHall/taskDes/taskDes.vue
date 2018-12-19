<template>
	<view class="taskDes">
		<view class="task_font">
			<view class="title">
				<text>普通VIP任务(阿胶)</text>
			</view>
			<view class="des">
				<text>请将以下文案及图片发布到您的朋友圈</text>
			</view>
			<view class="info">
				<textarea v-model="titleInfo" />
			</view>
		</view>
		<button type="primary" class="tag-read" :data-clipboard-text="titleInfo" @click="copy">复制文案</button>
		<view class="task_font">
			<view class="title">
				<text>图片信息</text>
			</view>
			<view class="des">
				<text>点击图片可保存图片到手机</text>
			</view>
			<view class="info" >
				<image src="../../../../static/center/logo@2x.png" mode="widthFix" @longtap="savePhoto"></image>
			</view>
		</view>
	</view>
</template>

 <script>
	export default {
		data() {
			return {
				titleInfo:'思宏阿胶枣 一斤装哦 是秋天是滋补的季节补起来。阿胶枣含有大量的胶原蛋白、蛋白质以及多种氨基酸，而且富含维生素C、铁、钙、硫、磷、铜等矿物质元素。一袋508克。49.8元两袋包邮@手机号18853971456'
			};
		},
		methods:{
			// 
			  copy() {
				uni.setClipboardData({
					data:this.titleInfo,
					success: function () {
						uni.showToast({
							title: '复制成功',
								mask: false,
								duration: 1500,
								icon:'none'
						});
					}
				});
		      },
		
		savePhoto(){
			
uni.downloadFile({
				url: 'http://116.62.245.5:80/apiupfile/2018/12/11/1072420635734552576.png', //仅为示例，并非真实的资源
				success: (res) => {
					if (res.statusCode === 200) {
						console.log(res.tempFilePath);
						uni.saveImageToPhotosAlbum({
							filePath: res.tempFilePath,
							success: function () {
								uni.showToast({
									title: '成功',
									mask: false,
									duration: 1500
								});
							},
						});
					}
				}
			});
			
			
			
			
			
			
			
			
			
			
			
			
			
		}
		
		
			
			
		}
	}
</script>

<style>
.task_font{
	width: 703.125upx;
	margin: 35.156upx auto;
}
.task_font .title{
	font-size:32.812upx;
	font-family:MicrosoftYaHeiLight;
	font-weight:300;
	color:rgba(104,99,99,1);
	text-align: center;
}
.task_font .des{
	font-size:18.75upx;
	font-family:MicrosoftYaHeiLight;
	font-weight:300;
	color:rgba(178,176,176,1);
	text-align: center;
	margin-top: 15.234upx;
}
.task_font .info{
	font-size:28.125upx;
	font-family:MicrosoftYaHeiLight;
	font-weight:300;
	color:rgba(104,99,99,1);
	width: 703.125upx;
	margin: 0 auto;
}
.task_font .info image{
	width: 100%;
}
.task_font .info textarea{
	width: 618.75upx;
	margin: 58.593upx 41.015upx;
	line-height: 1.4;
}
.tag-read{
	margin-bottom: 99.609upx;
}
.taskDes button{
	width: 664.453upx;
	height: 86.718upx;
	margin: 0 auto;
	line-height: 86.718upx;
	font-size:35.156upx;
	font-family:SimSun;
	font-weight:400;
	color:rgba(228,246,242,1);
}
</style>
