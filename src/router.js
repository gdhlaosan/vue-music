import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Recommend from '@/pages/home/components/recommend/Recommend'
import Singer from '@/pages/home/components/singer/Singer'
import Rank from '@/pages/home/components/rank/Rank'
import Search from '@/pages/home/components/search/Search'
import CommonDetail from '@/common/detail/CommonDetail'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/',
			redirect: '/recommend'
		}, {
			path: '/',
			component: Home,
			children: [{
				path: '/recommend',
				component: Recommend
			}, {
				path: '/singer',
				component: Singer,
				children: [{
					path: ':id',
					component: CommonDetail
				}]
			}, {
				path: '/rank',
				component: Rank
			}, {
				path: '/search',
				component: Search
			}]
		}]
})
