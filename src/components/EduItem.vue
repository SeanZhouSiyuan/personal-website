<template>
    <div class="edu-item">
        <h4 class="item-duration">{{ duration }}</h4>
        <h3 class="item-school">{{ school }}</h3>
        <div class="item-details">
            <p v-for="item in details" :key="item.id">
                {{ item.text }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EduItem',
    props: {
        duration: String,
        school: String,
        details: Array
    }
}
</script>
