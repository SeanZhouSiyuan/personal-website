<template>
    <section id="about" class="section--primary">
        <div class="wrapper">
            <header class="section-header children-animatable">
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
            <div class="categories-box self-animatable">
                <div
                    v-for="item in categories"
                    :key="item.id"
                    @click="callOverlay(item.id)"
                    class="category-wrapper"
                >
                    <div class="category">
                        <div
                            class="category-icon"
                            :style="{ backgroundImage: `url(${item.icon})` }">
                        </div>
                        <h3 class="category-title">{{ item.title }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { eventBus } from './../utils/eventBus.js';
export default {
    name: 'HomeAbout',
    data() {
        return {
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
    methods: {
        callOverlay(id) {
            eventBus.$emit('showOverlay', id);
        }
    }
}
</script>
