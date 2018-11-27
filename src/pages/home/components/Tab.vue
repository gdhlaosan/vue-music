<template>
	<div class="tab">
		<router-link class="tab-item" tag="div" to="/recommend">
			<span class="tab-item-text">推荐</span>
		</router-link>
		<router-link class="tab-item" tag="div" to="/singer">
			<span class="tab-item-text">歌手</span>
		</router-link>
		<router-link class="tab-item" tag="div" to="/rank">
			<span class="tab-item-text">排行</span>
		</router-link>
		<router-link class="tab-item" tag="div" to="/search">
			<span class="tab-item-text">搜索</span>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'HomeTab'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variable.styl'
.tab
	display flex
	height 0.8rem
	line-height 0.8rem
	font-size 0.3rem
	background-color #fff
	color #333
	border-bottom 0.02rem solid #eee
	.tab-item
		width 25%
		text-align center
		.tab-item-text
			display inline-block
			height 0.8rem
			margin-top -0.1rem
			border-bottom 0.02rem solid #eee
		&.router-link-active
			.tab-item-text
				color $baseColor
				border-bottom 0.02rem solid $baseColor
</style>
