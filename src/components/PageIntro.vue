<template>
    <div id="page_intro" class="page">
        <div id="intro_wrapper" class="wrapper">
            <header id="intro_header" class="intro-column">
                <h2>About me</h2>
                <p>Hi there. My name is Sean Zhou. I am a web developer and graduate student at HKUST. To learn more about me, select a category.</p>
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
