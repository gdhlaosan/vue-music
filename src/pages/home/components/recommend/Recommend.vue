<template>
	<div class="recommend">
		<common-swiper :sliderList="sliderList"></common-swiper>
	</div>
</template>

<script>
import { getRecommendInfo, getDiscList } from '@/api/recommend'
import { ERR_OK } from '@/api/config'

import CommonSwiper from '@/common/swiper/CommonSwiper'

export default {
	name: 'HomeRecommend',
	components: {
		CommonSwiper
	},
	data() {
		return {
			sliderList: []
		}
	},
	created () {
		this._getRecommendInfo()
		this._getDiscList()
	},
	methods: {
		//获取轮播图数据
		_getRecommendInfo() {
			getRecommendInfo().then((res) => {
				if(res.code === ERR_OK) {
					this.sliderList = res.data.slider
					console.log(this.sliderList)
				}
			})
		},
		//获取歌单数据
		_getDiscList() {
			getDiscList()
		}
	}
}
</script>

<style lang="stylus" scoped>
	
</style>
