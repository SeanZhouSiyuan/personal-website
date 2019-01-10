<template>
    <div class="slide-item">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'MySlide'
}
</script>

<style lang="less" scoped>
.slide-item {
    // on small screen, this makes sure
    // content fills container
    display: flex;
    // gives equal size to slide items
    flex: 1;
}
</style>


