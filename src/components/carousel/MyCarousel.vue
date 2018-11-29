<template>
    <div class="carousel">
        <div class="slide-container">
            <slot></slot>
        </div>
        <slide-control></slide-control>
    </div>
</template>

<script>
import SlideControl from './SlideControl.vue';

export default {
    name: 'MyCarousel',
    components: {
        SlideControl
    }
}
</script>

