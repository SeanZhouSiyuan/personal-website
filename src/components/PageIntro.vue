<template>
    <div id="page_intro" class="page">
        <div class="wrapper">
            <div id="bio">
                <h2 id="bio_heading">About Me</h2>
                <p id="bio_content">{{ bio }}</p>
                <p id="bio_tip">To learn more about me, click on the issues.</p>
            </div>
            <div id="issues_box">
                <div
                    v-for="(item, index) in issues"
                    :key="index"
                    class="issue"
                >
                    <div class="issue-icon">
                        <span :class="['fas', `fa-${item.icon}`]"></span>
                    </div>
                    <h3 class="issue-text">{{ item.text }}</h3>
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
            bio: 'I\'m Sean Zhou, a student and web developer. I study computer science at HKUST, and previously went to Shenzhen University for undergraduate degree. I have been learning front-end as well as back-end, mainly Node.js. I like swimming, running, and Cantonese food. I believe in love.',
            issues: [
                {
                    icon: 'book-open',
                    text: 'Education'
                }, {
                    icon: 'code',
                    text: 'Skills'
                }, {
                    icon: 'cogs',
                    text: 'Experiences'
                }
            ]
        }
    }
}
</script>
