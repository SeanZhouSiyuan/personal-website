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
                    @click="toggleOverlay(index)"
                    class="category"
                >
                    <div class="category-icon">
                        <i :class="['fas', `fa-${item.icon}`]"></i>
                    </div>
                    <h3 class="category-text">{{ item.title }}</h3>
                </div>
            </div>
            <div id="intro_overlay" :class="{open: overlay.IsOpen}">
                <div class="overlay-wrapper wrapper">
                    <div
                        v-for="(category, index) in categories"
                        :key="index"
                        :class="{
                            'entries-wrapper': true,
                            'active': category.active
                        }"
                    >
                        <div :class="['entries', category.type]">
                            <div
                                v-for="(item, index) in category.content"
                                :key="index"
                                class="entry"
                            >
                                <template v-if="category.type === 'timeline'">
                                    <svg class="indicator">
                                        <circle cx="6" cy="6" r="5" />
                                    </svg>
                                    <p>{{ item.period }}</p>
                                    <h3>{{ item.entity }}</h3>
                                    <p v-if="item.title">{{ item.title }}</p>
                                    <p>{{ item.desc }}</p>
                                </template>
                                <template v-else-if="category.type === 'circles'">
                                    <div
                                        :class="[
                                            'single-skill',
                                            item.name.toLowerCase()
                                        ]">
                                        <img
                                            :src="item.logo"
                                            :alt="item.name">
                                    </div>
                                </template>
                                <template v-else>
                                    <h3>{{ item.title }}</h3>
                                    <p>{{ item.text }}</p>
                                </template>
                            </div>
                        </div>
                    </div>
                    <svg
                        viewBox="0 0 32 32"
                        id="entries_close"
                        @click="toggleOverlay(-1)">
                        <path d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z "/>
                    </svg>
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
            overlay: {
                IsOpen: false
            },
            categories: [
                {
                    icon: 'book',
                    title: 'Education',
                    type: 'timeline',
                    active: false,
                    content: [
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
                    ]
                }, {
                    icon: 'code',
                    title: 'Skills',
                    type: 'circles',
                    active: false,
                    content: [
                        {
                            name: 'HTML',
                            logo: require('./../assets/html_logo.svg')
                        }, {
                            name: 'CSS',
                            logo: require('./../assets/css_logo.svg')
                        }, {
                            name: 'JavaScript',
                            logo: require('./../assets/js_logo.svg')
                        }, {
                            name: 'Vue',
                            logo: require('./../assets/vue_logo.svg')
                        }, {
                            name: 'Node',
                            logo: require('./../assets/node_logo.svg')
                        }, {
                            name: 'MongoDB',
                            logo: require('./../assets/mongo_logo.svg')
                        }
                    ]
                }, {
                    icon: 'cogs',
                    title: 'Experiences',
                    type: 'timeline',
                    active: false,
                    content: [
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
                }, {
                    icon: 'trophy',
                    title: 'More',
                    type: '',
                    active: false,
                    content: [
                        {
                            title: 'Films',
                            text: '🌌Star Wars, watched all the titles'
                        }, {
                            title: 'Sports',
                            text: '🏊Swimming, 🏃running, and 🚴cycling'
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        toggleOverlay(index) {
            let overlay = this.overlay;
            let categories = this.categories;
            if (index >= 0) {
                categories.forEach((category, i) => {
                    if (i === index) {
                        category.active = true;
                    } else {
                        category.active = false;
                    }
                });
            }
            overlay.IsOpen = !overlay.IsOpen;
        }
    }
}
</script>
