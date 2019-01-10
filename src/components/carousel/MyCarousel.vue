<template>
    <div class="carousel">
        <div class="slide-container">
            <div
                :style="styleObj"
                class="slide-track"
            ><slot></slot></div>
        </div>
        <slide-control @slidechange="changeSlide"></slide-control>
    </div>
</template>

<script>
import SlideControl from './SlideControl.vue';

export default {
    name: 'MyCarousel',
    components: {
        SlideControl
    },
    data() {
        return {
            currentIndex: 0,
            length: this.$slots.default.length
        }
    },
    computed: {
        styleObj() {
            let index = this.currentIndex;
            let length = this.length;
            return {
                width: `${length * 100}%`,
                transform: `translateX(${- 100 * index / length}%)`
            }
        }
    },
    methods: {
        changeSlide(n) {
            let newIndex = this.currentIndex + n;
            if (newIndex < 0) {
                newIndex = this.length - 1;
            }
            if (newIndex > this.length - 1) {
                newIndex = 0;
            }
            this.currentIndex = newIndex;
        }
    }
}
</script>

<style lang="less" scoped>
.carousel {
    .slide-container {
        width: 100%;
        overflow: hidden;
    }
    .slide-track {
        display: flex;
        transition: transform ease 500ms;
    }
}
</style>


