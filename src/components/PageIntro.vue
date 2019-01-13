<template>
    <div id="page_intro" class="page">
        <div class="wrapper">
            <div id="bio">
                <h2 id="bio_heading">About me</h2>
                <p id="bio_content">{{ bio }}</p>
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
            bio: 'I am Sean Zhou, a full-stack web developer and student at HKUST. To learn more about me, click on the issues.',
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
                }, {
                    icon: 'trophy',
                    text: 'Honors'
                }
            ]
        }
    }
}
</script>
