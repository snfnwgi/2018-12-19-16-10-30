<template>
	<view>
		<!-- <web-view :src="this.$store.state.openUrl"></web-view> -->
		<web-view :src="openUrl"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				openUrl:null
			};
		},
		created() {
			this.openUrl = this.$store.state.openUrl
		}
	}
</script>

<style>

</style>
