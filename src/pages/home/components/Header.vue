<template>
	<div class="header">
		<div class="header-logo"></div>
		<div class="header-title">chicken music</div>
	</div>
</template>

<script>
export default {
	name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variable.styl'
.header
	height 1.28rem
	line-height 1.28rem
	text-align center
	font-size 0.5rem
	background-color $baseColor
	color $textColor
</style>
