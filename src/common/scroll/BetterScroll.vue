<template>
	<div class="scrollWrapper" ref="wrapper">
		<slot></slot>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name: 'BetterScroll',
		props: {
			probeType: {
				type: Number,
				default: 1
			},
			click: {
				type: Boolean,
				default: true
			},
			data: {
				type: Array,
				default: null
			},
			listenScroll: {
				type: Boolean,
				default: false
			}
		},
		mounted () {
			setTimeout(() => {
				this._initScroll()
			}, 20)
		},
		methods: {
			_initScroll () {
				if (!this.$refs.wrapper) {
					return
				}
				this.scroll = new BScroll(this.$refs.wrapper, {
					probeType: this.probeType,
					click: this.click
				})
				if (this.listenScroll) {
					let that = this
					this.scroll.on('scroll', (pos) => {
						that.$emit('scroll', pos)
					})
				}
			},
			_refresh () {
				this.scroll && this.scroll.refresh()
			}
		},
		watch: {
			data () {
				setTimeout(() => {
					this._refresh()
				}, 20)
			}
		}
	}
</script>

<style lang="stylus" scoped>

</style>
