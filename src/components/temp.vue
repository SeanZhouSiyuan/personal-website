<template>
    <div id="page_edu" class="page">
        <div class="wrapper">
            <h2 class="heading">Education</h2>
            <div class="content">
                <div class="content-mobile">
                    <my-carousel>
                        <my-slide
                            v-for="item in eduList"
                            :key="item.id"
                        ><edu-item v-bind="item"></edu-item></my-slide>
                    </my-carousel>
                </div>
                <div class="content-desktop">
                    <div class="flex-container">
                        <div
                            v-for="item in eduList"
                            :key="item.id"
                            class="edu-wrapper"
                        ><edu-item v-bind="item"></edu-item></div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
import MyCarousel from './carousel/MyCarousel.vue';
import MySlide from './carousel/MySlide.vue';
import EduItem from './EduItem.vue';
export default {
    name: 'MyEdu',
    components: {
        MyCarousel,
        MySlide,
        EduItem
    },
    data() {
        return {
            eduList: [
                {
                    id: 0,
                    school: 'Shenzhen University',
                    duration: '2014.10-2018.06',
                    details: [
                        {
                            id: 0,
                            text: 'Bachelor of Engineering in Telecommunication'
                        },
                        {
                            id: 1,
                            text: 'GPA: 3.8/4.0, ranked 5 among 160 students'
                        }
                    ]
                },
                {
                    id: 1,
                    school: 'The University of California\nSan Diego',
                    duration: '2017.08-2017.12',
                    details: [
                        {
                            id: 0,
                            text: 'Visiting Student'
                        },
                        {
                            id: 1,
                            text: 'Enrolled in Language and Culture Program'
                        }
                    ]
                },
                {
                    id: 2,
                    school: 'The Hong Kong University of\nScience and Technology',
                    duration: '2018.09-present',
                    details: [
                        {
                            id: 0,
                            text: 'Master of Science in Information Technology'
                        },
                        {
                            id: 1,
                            text: 'Expected 2019.06'
                        }
                    ]
                }
            ]
        }
    }
}
</script>