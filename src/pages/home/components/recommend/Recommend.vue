<template>
	<div class="recommend">
		<better-scroll :data="discList">
			<common-swiper :sliderList="sliderList"></common-swiper>
			<recommend-list :discList="discList"></recommend-list>
		</better-scroll>
	</div>
</template>

<script>
	import { getRecommendInfo, getDiscList } from '@/api/recommend'
	import { ERR_OK } from '@/api/config'

	import BetterScroll from '@/common/scroll/BetterScroll'
	import CommonSwiper from '@/common/swiper/CommonSwiper'
	import RecommendList from './components/RecommendList'

	export default {
		name: 'HomeRecommend',
		components: {
			CommonSwiper,
			RecommendList,
			BetterScroll
		},
		data() {
			return {
				sliderList: [],
				discList: []
			}
		},
		created() {
			this._getRecommendInfo()
			this._getDiscList()
		},
		methods: {
			//获取轮播图数据
			_getRecommendInfo() {
				getRecommendInfo().then((res) => {
					if (res.code === ERR_OK) {
						this.sliderList = res.data.slider
					}
				})
			},
			//获取歌单数据
			_getDiscList() {
				getDiscList().then((res) => {
					if (res.code === ERR_OK) {
						this.discList = res.data.list
						console.log(res.data.list)
					}
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>

</style>
