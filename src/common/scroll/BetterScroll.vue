<template>
	<div ref="wrapper">
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name: 'BetterScroll',
		props: {
			data: {
					type: Array,
					default: null
				}
		},
		mounted() {
			this._initScroll()
		},
		methods: {
			_initScroll() {
				setTimeout(() => {
					this.scroll = new BScroll(this.$refs.wrapper)
				}, 20)
			},
			_refresh() {
				this.scroll && this.scroll.refresh()
			}
		},
		watch: {
			data() {
				setTimeout(() => {
					this._refresh()
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
	
</style>
