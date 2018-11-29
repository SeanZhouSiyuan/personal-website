<template>
    <div id="page_edu" class="page">
        <div class="wrapper">
            <h2 class="heading">Education</h2>
            <div class="content">
                <div class="carousel-wrapper">
                    <!-- following content can overflow -->
                    <div
                        :style="{ transform: carouselTransform }"
                        class="carousel flex-container"
                    >
                        <div
                            v-for="item in eduList"
                            :key="item.id"
                            class="slide flex-item"
                        ><edu-item v-bind="item"></edu-item></div>
                    </div>
                    <div class="carousel-control">
                        <button @click="changeSlide(-1)">Prev</button>
                        <button @click="changeSlide(1)">Next</button>
                    </div>       
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EduItem from './EduItem.vue';
export default {
    name: 'MyEdu',
    components: {
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
            ],
            currentSlide: 0,
            carouselTransform: 'translateX(0px)'
        }
    },
    methods: {
        changeSlide(n) {
            var vm = this;
            var length = vm.eduList.length;
            if (n === 1) {
                if (vm.currentSlide === length - 1) {
                    vm.currentSlide = 0;
                } else {
                    vm.currentSlide++;
                }
            } else if (n === -1) {
                if (vm.currentSlide === 0) {
                    vm.currentSlide = length - 1;
                } else {
                    vm.currentSlide--;
                }
            }
            this.carouselTransform = `translateX(${ - 100 * vm.currentSlide / length }%)`;
        }
    }
}
</script>