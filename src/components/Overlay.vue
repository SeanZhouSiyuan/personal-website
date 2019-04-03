<template>
    <div class="overlay" :class="{open: overlay.open}" :style="overlay.style">
        <header class="overlay-header">
            <div class="title-wrapper">
                <h2 class="overlay-title">{{ overlay.title }}</h2>
            </div>
        </header>
        <div class="overlay-body">
            <div
                v-for="category in categories"
                :key="category.id"
                :class="[
                    'overlay-content',
                    category.id === overlay.ref ? 'active' : ''
                ]"
            >
                <template v-if="category.type === 'general_list'">
                    <my-general-list :list="category.content"></my-general-list>
                </template>
                <template v-if="category.type === 'timeline'">
                    <my-timeline :list="category.content"></my-timeline>
                </template>
                <template v-if="category.type === 'circular_cards'">
                    <my-circular-cards :list="category.content"></my-circular-cards>
                </template>
                <template v-if="category.type === 'image'">
                    <my-image :image="category.content"></my-image>
                </template>
            </div>
        </div>
        <div class="overlay-control">
            <svg
                viewBox="0 0 32 32"
                id="overlay_button"
                @click="hideOverlay">
                <path d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z "/>
            </svg>
        </div>
    </div>
</template>

<script>
import MyCircularCards from './overlay-types/CircularCards.vue';
import MyTimeline from './overlay-types/Timeline.vue';
import MyGeneralList from './overlay-types/GeneralList.vue';
import MyImage from './overlay-types/Image.vue';

import { eventBus } from './../utils/eventBus.js';
import ScrollToggler from './../utils/scrollToggler.js';
export default {
    name: 'HomeOverlay',
    components: {
        MyGeneralList,
        MyTimeline,
        MyCircularCards,
        MyImage
    },
    data() {
        return {
            overlay: {
                ref: null,
                title: '',
                open: false,
                style: {}
            },
            categories: [
                {
                    id: 1,
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
                    title: 'Skills',
                    type: 'circular_cards',
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
                    title: 'Experiences',
                    type: 'timeline',
                    content: [
                        {
                            entity: 'Magnum Research Limited',
                            period: '2018.10–2019.03',
                            position: 'Front-end Intern',
                            desc: 'Helped build and debug an data visualization website using Vue.js and charting libraries; Assisted in building the new website of the company.'
                        }, {
                            entity: 'Haituncun Information Technology Limited',
                            period: '2017.05–2017.08',
                            position: 'Front-end Intern',
                            desc: 'Studied asynchronous JavaScript; Assisted in implementing a single-page site with Vue.js'
                        }
                    ]
                }, {
                    id: 4,
                    title: 'Misc',
                    type: 'general_list',
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
                }, {
                    id: 5,
                    title: 'Scan to add me on WeChat',
                    type: 'image',
                    content: {
                        src: require('./../assets/imgs/qr_code_wechat.jpg'),
                        alt: 'WeChat QR code'
                    }
                }
            ],
            scrollToggler: null
        }
    },
    mounted() {
        this.scrollToggler = new ScrollToggler();
        eventBus.$on('showOverlay', this.showOverlay);
    },
    destroyed() {
        eventBus.$off('showOverlay', this.showOverlay);
        this.scrollToggler = null;
    },
    methods: {
        showOverlay(id) {
            this.scrollToggler.disableScroll();
            let overlay = this.overlay;

            // reset overlay position
            overlay.style = {
                position: 'absolute',
                top: '0'
            };

            overlay.ref = id;
            overlay.title = 
                this.categories.find(el => el.id === id) ?
                this.categories.find(el => el.id === id).title : '';
            overlay.open = true;
        },
        hideOverlay() {
            let overlay = this.overlay;
            // get current viewport scroll position
            let scrollY = window.pageYOffset || document.documentElement.scrollTop;

            overlay.style = {
                position: 'fixed',
                top: `-${scrollY}px`
            };

            overlay.open = false;
            this.scrollToggler.enableScroll();
        }
    }
}
</script>
