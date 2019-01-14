<template>
    <div id="page_intro" class="page">
        <div id="intro_wrapper" class="wrapper">
            <header id="intro_header" class="intro-column">
                <h2>About me</h2>
                <p>I am Sean Zhou, a full-stack web developer and student at HKUST. To learn more about me, click on a category.</p>
            </header>
            <div id="intro_categories" class="intro-column">
                <div
                    v-for="(item, index) in categories"
                    :key="index"
                    class="category"
                >
                    <div class="category-icon">
                        <span :class="['fas', `fa-${item.icon}`]"></span>
                    </div>
                    <h3 class="category-text">{{ item.text }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageIntro',
    data() {
        return {
            categories: [
                {
                    icon: 'book',
                    text: 'Education'
                }, {
                    icon: 'code',
                    text: 'Skills'
                }, {
                    icon: 'cogs',
                    text: 'Experiences'
                }, {
                    icon: 'trophy',
                    text: 'Honors'
                }
            ]
        }
    }
}
</script>
