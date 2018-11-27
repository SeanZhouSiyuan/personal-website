<template>
    <div id="page_edu" class="page">
        <div class="wrapper">
            <h2 class="heading">Education</h2>
            <div class="content">
                <div class="edu-group flex-container">
                    <div class="edu-item">
                        <h3>Shenzhen University</h3>
                        <div>
                            <p>Bachelor of Engineering in Telecommunication</p>
                            <p>GPA: 3.8/4.0, ranked 5 among 160 students</p>
                        </div>
                    </div>
                    <div class="edu-item">
                        <h3>
                            The University of California<br>
                            San Diego
                        </h3>
                        <div>
                            <p>Visiting Student</p>
                            <p>Enrolled in Language and Culture Program</p>
                        </div>
                    </div>
                    <div class="edu-item">
                        <h3>
                            The Hong Kong University of<br>
                            Science and Technology
                        </h3>
                        <div>
                            <p>Master of Science in Information Technology</p>
                            <p>Expected 2019.06</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyEdu'
}
</script>

<style lang="scss">
%box-shadow {
    // offset-x | offset-y | blur-radius | spread-radius | color
    // 1st: umbra
    // 2nd: penumbra
    // 3rd: ambient
    // reference:
    //   1. elevation: https://github.com/material-components/material-components-web/tree/master/packages/mdc-elevation
    //   2. cards: https://material.io/design/components/cards.html
    box-shadow: 0 2px 1px -1px rgba(0,0,0,0.2),
        0 1px 1px 0 rgba(0,0,0,0.14),
        0 1px 3px 0 rgba(0,0,0,0.12);
    transition: box-shadow 0.25s ease-in-out;
    &:hover {
        box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),
            0 8px 10px 1px rgba(0,0,0,0.14),
            0 3px 14px 2px rgba(0,0,0,0.12);
    }
}
#page_edu {
    .flex-container {
        flex-wrap: wrap;
    }
    .edu-item {
        padding: 1rem 1rem 0;
        border-radius: 0.25rem;
        margin-bottom: 1.25rem;
        width: 100%;
        @extend %box-shadow;
    }
}
@media screen and (min-width: 768px) {
    #page_edu {
        .flex-container {
            justify-content: space-between;
        }
        .edu-item {
            width: calc(50% - 10px);
        }
    }
}
</style>


