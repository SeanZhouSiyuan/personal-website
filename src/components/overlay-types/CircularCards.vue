<template>
<div class="overlay-list overlay-list--circular-cards">
    <div
        v-for="(item, index) in list"
        :key="index"
        class="list-item"
    >
        <div
            :class="[
                'single-card',
                item.name.toLowerCase()
            ]">
            <img
                :src="item.logo"
                :alt="item.name">
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            required: true
        }
    },
    name: 'MyCircularCards'
}
</script>

