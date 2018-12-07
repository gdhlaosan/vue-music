import * as Types from './mutation-types'

export default {
    [Types.SET_SINGER] (state, singer) {
        state.singer = singer
        localStorage.singer = JSON.stringify(singer)
    }
}
