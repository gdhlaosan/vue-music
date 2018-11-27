<template>
	<div class="wrapper">
		<swiper :options="swiperOption" v-if="sliderList.length">
		    <swiper-slide 
		    	v-for="item in sliderList" 
		    	:key="item.id"
		    >
		    	<a :href="item.linkUrl">
		    		<img class="item-img" :src="item.picUrl">
		    	</a>
		    </swiper-slide>
	    	<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
export default {
	name: 'CommonSwiper',
	props: {
		sliderList: Array
	},
	data() {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				loop: true,
				autoplay: 2000,
				autoplayDisableOnInteraction: false
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
	width 0.32rem
	border-radius 0.16rem
	background #fff
.wrapper
	overflow hidden
	height 0
	width 100%
	padding-bottom 40%
	background-color #eee
	.item-img
		width 100%
</style>