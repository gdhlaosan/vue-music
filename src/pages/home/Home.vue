<template>
	<div class="home">
		<div class="head-wrapper">
			<home-header></home-header>
			<home-tab></home-tab>
		</div>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeTab from './components/Tab'
export default {
	name: 'Home',
	components: {
		HomeHeader,
		HomeTab
	}
}
</script>

<style lang="stylus">
.head-wrapper
	position relative
	z-index 100
</style>
