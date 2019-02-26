<template>
    <section id="about" class="section--primary">
        <div class="wrapper">
            <header class="section-header">
                <div class="section-title">
                    <span class="dash">–</span>
                    <span class="text">About Me</span>
                    <span class="dash">–</span>
                </div>
                <h2 class="section-heading">I'm a student and web developer</h2>
                <!-- <div class="info-box">
                    <div v-for="(item, index) in info" :key="index" class="item">
                        <div class="title">{{ item.title }}</div>
                        <div class="desc">{{ item.desc }}</div>
                    </div>
                </div> -->
                <p class="section-intro">Hi there. My name is Sean Zhou. I am a web devel&shy;oper and grad&shy;uate stu&shy;dent at HKUST. To learn more about me, se&shy;lect a category.</p>
                <!-- <a href="#" class="link">Download the resume</a> -->
            </header>
            <div class="categories-box">
                <div
                    v-for="item in categories"
                    :key="item.id"
                    @click="toggleCategory(item.id)"
                    class="category"
                >
                    <div class="category-icon">
                        <img :src="item.icon">
                    </div>
                    <h3 class="category-title">{{ item.title }}</h3>
                </div>
            </div>
            <div class="overlay" :class="{open: overlay.open}">
                <header class="overlay-header">
                    <h2 class="overlay-title">{{ overlay.title }}</h2>
                </header>
                <div class="overlay-body">
                    <div
                        v-for="category in categories"
                        :key="category.id"
                        :class="[
                            'entries-wrapper',
                            'wrapper',
                            category.id === overlay.ref ? 'active' : ''
                        ]">
                        <div
                            :class="[
                                'entries',
                                category.type
                            ]"
                        >
                            <div
                                v-for="(item, index) in category.content"
                                :key="index"
                                class="entry"
                            >
                                <template v-if="category.type === 'timeline'">
                                    <svg class="indicator">
                                        <circle cx="6" cy="6" r="5" />
                                    </svg>
                                    <p class="period">{{ item.period }}</p>
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
                                <template v-else-if="category.type === 'misc'">
                                    <header>
                                        <span>{{item.icon}}</span>
                                        <h3>{{ item.title }}</h3>
                                        <span aria-hidden="true">
                                            {{item.icon}}
                                        </span>
                                    </header>
                                    <p>{{ item.text }}</p>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="overlay-control">
                    <svg
                        viewBox="0 0 32 32"
                        id="overlay_button"
                        @click="toggleCategory(-1)">
                        <path d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z "/>
                    </svg>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { eventBus } from './../eventBus.js';
export default {
    name: 'HomeAbout',
    data() {
        return {
            overlay: {
                ref: null,
                title: '',
                open: false
            },
            // info: [
            //     {
            //         title: 'Oct 23, 1996',
            //         desc: 'Date of Birth'
            //     }, {
            //         title: 'Chinese',
            //         desc: 'Nationality'
            //     }, {
            //         title: 'Hong Kong',
            //         desc: 'Residence'
            //     }
            // ],
            categories: [
                {
                    id: 1,
                    icon: require('./../assets/icons8-university-96.png'),
                    title: 'Education',
                    type: 'timeline',
                    content: [
                        {
                            entity: 'The Hong Kong University of Science and Technology',
                            period: '2018.09–present',
                            desc: 'Master of Science in Information Technology, expected June 2019'
                        }, {
                            entity: 'The University of California San Diego',
                            period: '2017.08–2017.12',
                            desc: 'Visiting student enrolled in Language and American Culture program'
                        }, {
                            entity: 'Shenzhen University',
                            period: '2014.10–2018.06',
                            desc: 'Bachelor of Engineering in Telecommunication, with a GPA of 3.8/4.0'
                        }
                    ]
                }, {
                    id: 2,
                    icon: require('./../assets/icons8-source-code-96.png'),
                    title: 'Skills',
                    type: 'circles',
                    content: [
                        {
                            name: 'HTML',
                            logo: require('./../assets/imgs/html_logo.svg')
                        }, {
                            name: 'CSS',
                            logo: require('./../assets/imgs/css_logo.svg')
                        }, {
                            name: 'JavaScript',
                            logo: require('./../assets/imgs/js_logo.svg')
                        }, {
                            name: 'Vue',
                            logo: require('./../assets/imgs/vue_logo.svg')
                        }, {
                            name: 'Node',
                            logo: require('./../assets/imgs/node_logo.svg')
                        }, {
                            name: 'MongoDB',
                            logo: require('./../assets/imgs/mongo_logo.svg')
                        }
                    ]
                }, {
                    id: 3,
                    icon: require('./../assets/icons8-outline-96.png'),
                    title: 'Experiences',
                    type: 'timeline',
                    content: [
                        {
                            entity: 'Magnum Research Limited',
                            period: '2018.10–present',
                            title: 'Front-end Intern',
                            desc: 'Assists in building an performance visualization website using Vue.js and charting libraries'
                        }, {
                            entity: 'Haituncun Information Technology Limited',
                            period: '2017.05–2017.08',
                            title: 'Front-end Intern',
                            desc: 'Studied asynchronous JavaScript; Assisted in implementing a single-page site with Vue.js'
                        }
                    ]
                }, {
                    id: 4,
                    icon: require('./../assets/icons8-christmas-star-96.png'),
                    title: 'Misc',
                    type: 'misc',
                    content: [
                        {
                            icon: '🎥',
                            title: 'Films',
                            text: 'Star Wars is my favorite movie series. I watched all the titles, including the latest spin-offs.'
                        }, {
                            icon: '⛳',
                            title: 'Sports',
                            text: 'I enjoy swimming the most, but I like running and cycling too.'
                        }, {
                            icon: '🏠',
                            title: 'Places',
                            text: 'I lived in Shenzhen for four years, before moving to Hong Kong for graduate study. Both are great cities.'
                        }
                    ]
                }
            ]
        }
    },
    beforeMount() {
        eventBus.$on('showCategory', id => {
            this.toggleCategory(id);
        });
    },
    methods: {
        toggleCategory(id) {
            let overlay = this.overlay;
            if (id >= 0) {
                overlay.ref = id;
                overlay.title = this.categories.find(el => el.id === id).title;
            }
            overlay.open = !overlay.open;
        }
    }
}
</script>
