import jsonp from '@/assets/js/jsonp'
import {commonParam, options} from './config'

export function getRecommendInfo() {
	let url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

	let data = Object.assign({}, commonParam, {
		platform: 'h5',
		uin: 0,
		needNewCode: 1
	})

	return jsonp(url, data, options)
}