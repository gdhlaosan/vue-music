<template>
	<div class="recommendList">
		<div class="listTitle">热门歌单推荐</div>
		<div class="listWrapper">
			<ul class="list-items">
				<li v-for="item in discList" :key="item.dissid" class="item">
					<div class="item-img">
						<img :src="item.imgurl" alt="">
					</div>
					<div class="item-disc">
						<div class="item-info">{{item.dissname}}</div>
						<div class="item-title">{{item.creator.name}}</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'RecommendList',
		props: {
			discList: Array
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~@/assets/styles/variable.styl'
	.listTitle
		line-height 0.8rem
		font-size 0.32rem
		text-align center
		font-weight bold
		color $baseColor
	.listWrapper
		padding 0 0.1rem
		.list-items
			display flex
			flex-direction row
			flex-wrap wrap
			.item
				position relative
				width 50%
				box-sizing border-box
				padding 0.1rem 0.1rem 0.48rem 0.1rem
				.item-img
					overflow hidden
					height 0
					width 100%
					padding-bottom 100%
					background-color #eee
					img
						width 100%
				.item-disc
					margin-top 0.1rem
					.item-info
						line-height 0.36rem
						color #333
					.item-title
						position absolute
						line-height 0.48rem
						font-size 0.24rem
						color #666
						bottom 0
</style>
