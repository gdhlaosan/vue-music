<template>
	<div>
		<scroll
		:data="singerList"
		class="singer"
		ref="scrollWrapper"
		:listenScroll="listenScroll"
		@scroll="scroll"
	>
			<div class="wrapper">
				<div class="items-wrapper" v-for="value in singerList" :key="value.title" ref="itemsGroup">
					<div class="title">{{value.title}}</div>
					<ul>
						<li class="item"
							v-for="item in value.items"
							:key="item.id"
							@click="slectSinger(item)"
						>
							<img v-lazy="item.avatar" alt="">
							<span class="item-name">{{item.name}}</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="shortCut">
				<ul @touchstart.stop.prevent="shortCutTouchStart" @touchmove.stop.prevent="shortCutTouchMove">
					<li class="shortCutItem"
						v-for="(key, index) in shortCutList"
						:key="key"
						:data-index="index"
						:class="{heightLight: isHeightLightIndex == index}"
					>{{key}}</li>
				</ul>
			</div>
		</scroll>
		<transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
import { getSingerList } from '@/api/singer'
import { ERR_OK } from '@/api/config'
import Singer from '@/assets/class/index'
import Scroll from '@/common/scroll/BetterScroll'
import { mapMutations } from 'vuex'

const HOT_NAME = '热门'
const HOT_LIST_LEN = 10

export default {
	name: 'HomeSinger',
	data () {
		return {
			singerList: [], // 歌手列表
			touch: {},
			heightArr: [], // 高度列表
			listenScroll: true, // scroll是否滚动
			isHeightLightIndex: 0
		}
	},
	components: {
		Scroll
	},
	computed: {
		shortCutList () {
			return this.singerList.map((item, index) => {
				return item.title.substring(0, 1)
			})
		}
	},
	mounted () {
		this._getSingerList()
		this._countHeights()
	},
	watch: {
		singerList () {
			this._countHeights()
		}
	},
	methods: {
		_getSingerList () {
			getSingerList().then((res) => {
				if (res.code === ERR_OK) {
					this.singerList = this._normalizeList(res.data.list)
				}
			})
		},
		_normalizeList (list) {
			let map = {
				hot: {
					title: HOT_NAME,
					items: []
				}
			}
			list.forEach((item, index) => {
				// 热门归类（取前十条）
				if (index < HOT_LIST_LEN) {
					map.hot.items.push(new Singer({
						id: item.Fsinger_mid,
						name: item.Fsinger_name
					}))
				}
				// 歌手归类
				let key = item.Findex
				if (!map[key]) {
					map[key] = {
						title: key,
						items: []
					}
				}
				map[key].items.push(new Singer({
						id: item.Fsinger_mid,
						name: item.Fsinger_name
					}))
			})
			this.singerList = map
			// 对map进行数据处理
			let hot = []
			let ret = []
			for (let key in map) {
				let val = map[key]
				if (val.title.match(/[a-zA-Z]/)) {
					ret.push(val)
				} else if (val.title === HOT_NAME) {
					hot.push(val)
				}
			}
			ret.sort((a, b) => {
				return a.title.charCodeAt(0) - b.title.charCodeAt(0)
			})
			return hot.concat(ret)
		},
		shortCutTouchStart (e) {
			let target = e.target
			let index = target.getAttribute('data-index')
			this.touch.targetStartPageY = e.touches[0].pageY
			this.touch.deltaIndex = index
			this.$refs.scrollWrapper.scroll.scrollToElement(this.$refs.itemsGroup[index], 200)

			this.isHeightLightIndex = index
		},
		shortCutTouchMove (e) {
			let target = e.target
			var targetMovePageY = e.touches[0].pageY
			let index = parseInt(this.touch.deltaIndex) + Math.floor((targetMovePageY - this.touch.targetStartPageY) / (target.clientHeight))
			this.$refs.scrollWrapper.scroll.scrollToElement(this.$refs.itemsGroup[index], 200)
		},
		// 累计高度
		_countHeights () {
			this.$nextTick(() => {
				let list = this.$refs.itemsGroup
				if (list) {
					for (let i = 0; i < list.length; i++) {
						let height = list[i].offsetHeight
						if (this.heightArr[i - 1]) {
							height = this.heightArr[i - 1] + height
						}
						this.heightArr.push(height)
					}
					this.heightArr.unshift(0)
				}
			})
		},
		// 监听滚动时间
		scroll (pos) {
			let scrollY = -(pos.y)
			this.heightArr.forEach((item, index, arr) => {
				if (scrollY > item && scrollY < arr[index + 1]) {
					this.isHeightLightIndex = index
				}
			})
		},
		// 选择歌手跳转歌手歌单列表页
		slectSinger (singer) {
			this.$router.push({
				path: `singer/${singer.id}`
			})
			this.emitSinger(singer)
		},
		...mapMutations({
			emitSinger: 'slectSinger'
		})
	}
}
</script>

<style lang="stylus" scoped>
.singer
	position fixed
	top 2.1rem
	bottom 0
	width 100%
	.items-wrapper
		padding-bottom 0.3rem
		.title
			line-height 0.6rem
			background-color #eee
			padding 0 0.2rem
		.item
			padding 0.3rem 0 0 0.4rem
			img
				width 1.0rem
				height 1.0rem
				border-radius 100%
			.item-name
				font-size 0.32rem
				margin-left 0.2rem
	.list-fixed
		position absolute
		top 0
		left 0
		width 100%
		padding-bottom 0.3rem
		.title
			line-height 0.6rem
			background-color #eee
			padding 0 0.2rem
.shortCut
	position absolute
	width 0.3rem
	top 50%
	right 0
	transform translateY(-50%)
	color #d43c33
	border-radius 0.2rem
	.shortCutItem
		text-align center
		line-height 0.30rem
		font-size 0.24rem
	.heightLight
		color blue
.animated
	animation-duration 0.3s
</style>
