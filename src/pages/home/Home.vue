<template>
	<div class="home">
		<home-header></home-header>
		<home-tab></home-tab>
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
