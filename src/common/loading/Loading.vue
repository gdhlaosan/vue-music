<template>
	<div class="commonLoading">
		<img class="load-img" src="../../assets/images/loading.gif">
		<div class="load-title">{{title}}</div>
	</div>
</template>

<script>
	export default {
		name: 'CommonLoading',
		props: {
			title: {
				type: String,
				default: '正在载入...'
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.commonLoading
		width 100%
		text-align center
		.load-img
			width 0.48rem
			height 0.48rem
		.load-title
			font-size 0.24rem
</style>
