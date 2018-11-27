<template>
	<div class="singer">
		<div class="wrapper">
			<div class="items-wrapper" v-for="value in singerList" :key="value.title">
				<div class="title">{{value.title}}</div>
				<ul>
					<li class="item" v-for="item in value.items" :key="item.id">
						{{item.name}}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { getSingerList } from '@/api/singer'
import { ERR_OK } from '@/api/config'

const HOT_NAME = '热门'
const HOT_LIST_LEN = 10

export default {
	name: 'HomeSinger',
	data() {
		return {
			singerList: []
		}
	},
	mounted() {
		this._getSingerList()
	},
	methods: {
		_getSingerList() {
			getSingerList().then((res) => {
				if(res.code === ERR_OK) {
					this.singerList = this._normalizeList(res.data.list)
				}
			})
		},
		_normalizeList(list) {
			let map = {
				hot: {
					title: HOT_NAME,
					items: []
				}
			}
			list.forEach((item, index) => {
				//热门归类（取前十条）
				if(index < HOT_LIST_LEN) {
					map.hot.items.push({
						id: item.Fsinger_id,
						name: item.Fsinger_name,
						avatar: `https://y.gtimg.cn/music/photo_new/T001R150x150M000${item.Fsinger_mid}.jpg?max_age=2592000`
					})
				}
				//歌手归类
				let key = item.Findex
				if(!map[key]) {
					map[key] = {
						title: key,
						items: []
					}
				}
				map[key].items.push({
					id: item.Fsinger_id,
					name: item.Fsinger_name,
					avatar: `https://y.gtimg.cn/music/photo_new/T001R150x150M000${item.Fsinger_mid}.jpg?max_age=2592000`
				})
			})
			this.singerList = map
			//对map进行数据处理
			let hot = []
			let ret = []
			for(let key in map) {
				let val = map[key]
				if(val.title.match(/[a-zA-Z]/)) {
					ret.push(val)
				}else if(val.title === HOT_NAME) {
					hot.push(val)
				}
			}
			ret.sort((a, b) => {
				return a.title.charCodeAt(0) - b.title.charCodeAt(0)
			})
			return hot.concat(ret)
		}
	}
}
</script>

<style lang="stylus" scoped>
	.singer
		position fixed
		top 2.1rem
		bottom 0
		width 100%
		.title
			line-height 0.6rem
			background-color #eee
			padding 0 0.2rem
</style>