<template>
<div class="overlay-list overlay-list--general">
    <div
        v-for="(item, index) in list"
        :key="index"
        class="list-item"
    >
        <header>
            <span>{{item.icon}}</span>
            <h3>{{ item.title }}</h3>
            <span aria-hidden="true">
                {{item.icon}}
            </span>
        </header>
        <p>{{ item.text }}</p>
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
    name: 'MyGeneralList'
}
</script>
