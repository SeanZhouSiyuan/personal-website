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
            <div id="intro_overlay">
                <div id="overlay_wrapper" class="wrapper">
                    <div id="entries_box">
                        <div class="timeline">
                            <div
                                v-for="(item, index) in edu"
                                :key="index"
                                class="entry"
                            >
                                <svg class="indicator">
                                    <circle cx="6" cy="6" r="5" />
                                </svg>
                                <p>{{ item.period }}</p>
                                <h3>{{ item.entity }}</h3>
                                <p>{{ item.desc }}</p>
                            </div>
                        </div>
                    </div>
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
            ],
            edu: [
                {
                    entity: 'The Hong Kong University of Science and Technology',
                    period: '2018.09-present',
                    desc: 'Master of Science in Information Technology, expected June 2019'
                }, {
                    entity: 'The University of California San Diego',
                    period: '2017.08-2017.12',
                    desc: 'Visiting student enrolled in Language and American Culture program'
                }, {
                    entity: 'Shenzhen University',
                    period: '2014.10-2018.06',
                    desc: 'Bachelor of Engineering in Telecommunication, with a GPA of 3.8/4.0'
                }
            ],
            skills: [
                'HTML',
                'CSS',
                'JavaScript',
                'Node.js',
                'MongoDB'
            ],
            experiences: [
                {
                    entity: 'Magnum Research Limited',
                    period: '2018.10 - present',
                    title: 'Front-end Intern',
                    desc: 'Assists in building an performance visualization website using Vue.js and charting libraries'
                }, {
                    entity: 'Haituncun Information Technology Limited',
                    period: '2017.05 - 2017.08',
                    title: 'Front-end Intern',
                    desc: 'Studied asynchronous JavaScript; Assisted in implementing a single-page site with Vue.js'
                }
            ]
        }
    }
}
</script>
