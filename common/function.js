exports.install = function(Vue, options) {
	Vue.prototype.API = 'http://116.62.245.5/api',
	Vue.prototype.phoneREG = function(a) {
		let myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
		if (!myreg.test(a)) {
			uni.showToast({
				title: '请确认手机号码格式正确',
				duration: 1500,
				icon: 'none'
			});
			a = false
		}
	},
	Vue.prototype.getSmsCode=function(){
		const TIME_COUNT = 60;
		if (!this.timer) {
			this.codes = TIME_COUNT;
			this.show = false;
			this.timer = setInterval(() => {
			if (this.codes > 0 && this.codes <= TIME_COUNT) {
				this.codes--;
			} else {
				this.show = true;
				clearInterval(this.timer);
				this.timer = null;
			}
			}, 1000)
		}
	}
}




