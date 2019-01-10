<template>
    <div class="slide-control">
        <button @click="change(-1)">Prev</button>
        <button @click="change(1)">Next</button>
    </div>
</template>

<script>
export default {
    name: 'SlideControl',
    methods: {
        change(n) {
            this.$emit('slidechange', n);
        }
    }
}
</script>

<style lang="less" scoped>
.slide-control {
    display: flex;
    justify-content: space-between;
}
</style>
