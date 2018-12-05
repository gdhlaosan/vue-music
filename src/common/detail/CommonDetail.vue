<template>
	<div class="detail"></div>
</template>

<script>
import { mapState } from 'vuex'
import { getSingerDetail } from '@/api/singer'
export default {
	name: 'CommonDetail',
	computed: {
		singer () {
			return this.singer
		},
		...mapState({
			singer: 'singer'
		})
	},
	mounted () {
		this._getSingerDetail()
	},
	methods: {
		_getSingerDetail () {
			getSingerDetail(this.singer.id).then((res) => {
				console.log(res)
			})
		}
	}
}
</script>

<style lang="stylus" scoped>
.detail
	position fixed
	top 0
	left 0
	bottom 0
	right 0
	z-index 200
	background-color #fff
</style>
