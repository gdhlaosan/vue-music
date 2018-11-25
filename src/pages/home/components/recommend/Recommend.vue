<template>
	<div class="recommend">
		<common-swiper :sliderList="sliderList"></common-swiper>
	</div>
</template>

<script>
import { getRecommendInfo } from '@/api/recommend'
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
	},
	methods: {
		_getRecommendInfo() {
			getRecommendInfo().then((res) => {
				if(res.code === ERR_OK) {
					this.sliderList = res.data.slider
					console.log(this.sliderList)
				}
			})
		}
	}
}
</script>

<style lang="stylus" scoped>
	
</style>
