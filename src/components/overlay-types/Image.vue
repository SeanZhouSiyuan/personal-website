<template>
<div class="overlay-list overlay-list--image">
    <div class="img-container">
        <img :src="image.src" :alt="image.alt">
    </div>
</div>
</template>

<script>
export default {
    props: {
        image: {
            type: Object,
            required: true
        }
    },
    name: 'MyImage'
}
</script>
