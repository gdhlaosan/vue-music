<template>
	<div class="home">
		<home-header></home-header>
		<home-tab></home-tab>
		<!-- <keep-alive> -->
			<router-view></router-view>
		<!-- </keep-alive> -->
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
  
</style>
