<script>
	export default {
		onLaunch: function() {
		},
		onShow: function() {	
		},
		onHide: function() {
		}
	}
</script>

<style lang="stylus">
	/*每个页面公共css */
	/* 字体图标 */
	@font-face  
		font-family 'iconfont'      
		src url('https://at.alicdn.com/t/font_946767_wicsd0r5oah.eot')
		src url('https://at.alicdn.com/t/font_946767_wicsd0r5oah.eot?#iefix') format('embedded-opentype'), 
		url('https://at.alicdn.com/t/font_946767_wicsd0r5oah.woff') format('woff'), 
		url('https://at.alicdn.com/t/font_946767_wicsd0r5oah.ttf') format('truetype'), 
		url('https://at.alicdn.com/t/font_946767_wicsd0r5oah.svg#iconfont') format('svg')
	.iconfont 
		font-family "iconfont" !important
		color #E93A26
		font-weight 0
		font-size 50upx
		line-height 92.578upx
		font-style normal
		margin 17.578upx 24.609upx
		-webkit-font-smoothing antialiased
		-webkit-text-stroke-width 0.2px
		-moz-osx-font-smoothing grayscale
	.inputStyle input 
		font-size 24.609upx
		font-family MicrosoftYaHei
		font-weight 400
	.input-placeholder 
		font-size 30.468upx
		font-family MicrosoftYaHei
		font-weight 400
		color rgba(233 58 38 1)
	/* //登陆注册按钮样式 */
	.content .register_input 
		width 615.234upx
		height 92.578upx
		background rgba(255 120 24 0)
		border 1.757upx solid rgba(233 58 38 1)
		border-radius 46.875upx
		margin 0 auto
		margin-bottom 48.046upx
	.register 
		font-size 43.359upx
		font-family MicrosoftYaHei
		font-weight 400
		color rgba(255 255 255 1)
		line-height 92.578upx
		border-radius 35.156upx
	/* 登陆注册input布局 */
	.register_input_body 
		display flex
		align-items center
	.inputStyle 
		width 400upx
		font-size 30.468upx
	/* 获取验证码 */
	.smsInfo 
		font-size 22.265upx
		font-family FZFYSJW--GB1-0
		font-weight 400
		color rgba(233 58 38 1)
		padding-left 26.953upx
	/* 获取验证码竖线 */
	.shuxian 
		color rgba(233 58 38 1)
		font-size 45.703upx
		position relative
		top -1.171upx
	.register_input_bodys .inputStyle 
		width 300upx
		font-size 30.468upx
	.register_input_bodys .input-placeholder 
		font-size 30.468upx
		font-family MicrosoftYaHei
		font-weight 400
		color rgba(233 58 38 1)
	/* 找回密码注册页面logo*/
	.content .register_logo 
		width 155upx
		height 152.343upx
		margin 110.156upx 297.656upx 131.25upx
	.body 
		background rgba(239 239 239 0.4)
		// #ifdef APP-PLUS
		height 100vh
		// #endif
		// #ifdef H5
		height scale(100vh - 44px)
		// #endif
	/* 一些默认组件的样式修改 */
	uni-button , 
	uni-button:after , 
	.bottom_btn uni-button , 
	.bottom_btn uni-button:after 
		border none
		border-radius 0
	.transfer_money .input-placeholder 
		font-size 28.125upx
		font-family SimSun
		font-weight 400
		color rgba(198 194 194 1)
	.task .input-placeholder,
	.task .uni-textarea-placeholder 
		font-size 28.125upx
		font-family SimSun
		font-weight 400
		color rgba(198 194 194 1)
	.submitTask .uni-textarea-placeholder 
		font-size 28.125upx
		font-family SimSun
		font-weight 400
		color rgba(198 194 194 1)
	// 钱包列表页面
	.chongzhi_items
		display flex
		justify-content space-between
		align-content center
		padding 35.156upx 23.437upx 35.156upx 29.296upx
		font-size 23.437upx
		font-family MicrosoftYaHei
		font-weight 400
		color:rgba(79 78 78 1)
		border-bottom 2px solid rgba(221 221 221 0.27)
		.chongzhi_left , .chongzhi_right
			display flex
			flex-direction column
		.chongzhi_right
			text-align right
		.chongzhi_left .title
			font-size 28.125upx
		.mg_bom
			margin-bottom 5.859upx
	// 个人资料&&绑定银行卡
	.personInformation_list ,.personInformation_lists 
		width 750upx
		height 92.578upx
		display flex
		align-items center
		border-bottom 1px solid rgba(221 221 221 0.27)
		background white
		.info
			width 205.078upx
			margin-left 29.296upx
	.infos text 
		font-size 28.125upx
		font-family SimSun
		font-weight 400
		color rgba(34 36 35 1)
	//提现转入
	.transfer .body 
		width 703.125upx
		margin 33.984upx auto 67.968upx auto
		background none
		border 1px solid rgba(250 250 250 1)
		.transfer_title text 
			margin 29.296upx 0 0 28.125upx
			font-size 28.125upx
			font-family MicrosoftYaHeiLight
			font-weight 300
			color rgba(134 130 130 1)
		.transfer_money 
			display flex
			align-items center
			margin 58.593upx 0 94.921upx 26.953upx
		.transfer_money image 
			width 46.875upx
			height 41.01upx
			margin-right 32.812upx
		.transfer_tip text 
			font-size 28.125upx
			font-family SimSun
			font-weight 400
			margin-left 26.953upx
	.transfer_submit
		width 664.453upx
		height 86.718upx
		margin 0 auto
		font-size 35.156upx
		font-family SimSun
		font-weight 400
		color rgba(228 246 242 1)	
</style>
