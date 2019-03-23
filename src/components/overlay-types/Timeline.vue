<template>
<div class="overlay-list overlay-list--timeline">
    <div
        v-for="(item, index) in list"
        :key="index"
        class="list-item"
    >
        <svg class="indicator">
            <circle cx="6" cy="6" r="5" />
        </svg>
        <p class="period">{{ item.period }}</p>
        <h3>{{ item.entity }}</h3>
        <p v-if="item.position">{{ item.position }}</p>
        <p>{{ item.desc }}</p>
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
    name: 'MyTimeline'
}
</script>
