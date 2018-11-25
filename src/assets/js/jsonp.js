//用Promise重新封装一次jsonp

import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
	url += (url.indexOf('?') > 0 ? '&' : '?') + Param(data)
	return new Promise((resolve, reject) => {
		originJSONP(url, option, (err, data) => {
			if(!err) {
				resolve(data)
			}else {
				reject(err)
			}
		})
	})
}

function Param(data) {
	let url = ''
	for(let k in data) {
		let value = data[k] !== undefined ? data[k] : ''
		url += `&${k}=${encodeURIComponent(value)}`
	}
	return url ? url.substring(1) : ''
}
