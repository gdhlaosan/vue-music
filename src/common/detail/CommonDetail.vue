<template>
	<detail-list :songs="songs" :title="singer.name" :avatar="singer.avatar"></detail-list>
</template>

<script>
import { mapGetters } from 'vuex'
import { getSingerDetail } from '@/api/singer'
import { ERR_OK } from '@/api/config'
import { createSong } from '@/assets/class/song'

import DetailList from '@/common/detailList/DetailList'

export default {
	name: 'CommonDetail',
	data () {
		return {
			songs: []
		}
	},
	components: {
		DetailList
	},
	computed: {
		...mapGetters({
			singer: 'setSinger'
		})
	},
	mounted () {
		this._getSingerDetail()
	},
	methods: {
		_getSingerDetail () {
			getSingerDetail(this.singer.id).then((res) => {
				if (res.code === ERR_OK) {
					this.songs = this._normalizeSongs(res.data.list)
				}
			})
		},
		_normalizeSongs (list) {
			let ret = []
			list.forEach((item, index) => {
				ret.push(createSong(item.musicData))
			})
			return ret
		}
	}
}
</script>

<style lang="stylus" scoped>

</style>
