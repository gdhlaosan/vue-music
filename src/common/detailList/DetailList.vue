<template>
    <div class="detail">
        <div class="header">
            <div class="back iconfont" @click="goBack">&#xe624;</div>
            <div class="title">{{title}}</div>
        </div>
        <div class="bgImgWrapper" :style="bgImg"></div>
        <div class="songsListWrapper">
            <div class="handlePlay">
                <div class="randomPalyBtn">随机播放全部</div>
            </div>
            <div class="songsList">asdfasdf</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailList',
    props: {
        songs: {
            type: Array,
            default () {
                return []
            }
        },
        title: {
            type: String,
            default: ''
        },
        avatar: {
            type: String,
            default: ''
        }
    },
    computed: {
        bgImg () {
            return `background-image: url(${this.avatar})`
        }
    },
    methods: {
        goBack () {
            this.$router.back()
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variable.styl'
.detail
    position fixed
    left 0
    top 0
    right 0
    bottom 0
    z-index 200
    background-color #ffffff
    .header
        position absolute
        left 0
        top 0
        z-index 210
        width 100%
        line-height .8rem
        font-size .36rem
        text-align center
        color #ffffff
        .back
            position absolute
            left .2rem
            top 0
    .bgImgWrapper
        position absolute
        top 0
        z-index 205
        width 100%
        height 0
        padding-bottom 100%
        overflow hidden
        background-size cover
    .songsListWrapper
        position absolute
        left 0
        top .8rem
        bottom 0
        right 0
        z-index 210
        .handlePlay
            position relative
            height 5rem
            text-align center
            .randomPalyBtn
                position absolute
                padding .1rem .2rem
                color $baseColor
                border .02rem solid $baseColor
                border-radius .32rem
                bottom .4rem
                left 2.55rem
        .songsList
            min-height 7.5rem
            background-color #ffffff
</style>
