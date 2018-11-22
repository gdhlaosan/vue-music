<template>
	<div class="tab">
		<router-link class="tab-item" tag="div" to="/">
			<span class="tab-item-text">推荐</span>
		</router-link>
		<router-link class="tab-item" tag="div" to="/">
			<span class="tab-item-text">推荐</span>
		</router-link>
		<router-link class="tab-item" tag="div" to="/">
			<span class="tab-item-text">推荐</span>
		</router-link>
		<router-link class="tab-item" tag="div" to="/">
			<span class="tab-item-text">推荐</span>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'HomeTab'
}
</script>

<style lang="stylus" scoped>
	.tab
		display flex
		height 0.8rem
		line-height 0.8rem
		font-size 0.4rem
		.tab-item
			width 25%
			text-align center
</style>
