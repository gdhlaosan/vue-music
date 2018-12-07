<template>
    <div class="detail">
        <div class="header">
            <div class="back icon-back"></div>
            <div class="title">{{title}}</div>
        </div>
        <div class="bgImgWrapper" :style="bgImg"></div>
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
            return `background-img: url(${this.avatar})`
        }
    }
}
</script>

<style lang="stylus" scoped>
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
    .bgImgWrapper
        position absolute
        top 0
        z-index 205
        width 100%
</style>
