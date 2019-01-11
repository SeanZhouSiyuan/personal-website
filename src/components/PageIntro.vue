<template>
    <div id="page_intro" class="page">
        <div id="bio">
            <h2 id="bio-heading">About Me</h2>
            <p id="bio-content">I'm Sean Zhou, a student and web developer. I study Information Technology at the Hong Kong University of Science and Technology, and previously went to Shenzhen University for undergraduate degree. I have been learning front-end as well as back-end, mainly Node.js and its friends. I like swimming, running, and Cantonese food. I believe in love.</p>
        </div>
        <div id="issues-box">
            <div
                v-for="(item, index) in issues"
                :key="index"
                class="single-issue"
            >
                <h3>{{ item }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageIntro',
    data() {
        return {
            issues: [
                'Education',
                'Skills',
                'Experiences',
                'Honors'
            ]
        }
    }
}
</script>
