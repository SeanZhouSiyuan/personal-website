<template>
    <footer>
        <div class="wrapper">
            <!-- <nav>
                <div
                    v-for="(entry, index) in nav"
                    :key="index"
                    class="single-list"
                >
                    <h4 class="title">{{ entry.title }}</h4>
                    <ul>
                        <li
                            @click="handleNavigation(entry.title, item.name)"
                            v-for="(item, index) in entry.items"
                            :key="index"
                        >{{ item.name }}</li>
                    </ul>
                </div>
            </nav> -->
            <div class="copyright">
                <span class="text">© 2019 Sean Zhou</span>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'HomeFooter',
    // data() {
    //     return {
    //         nav: [
    //             {
    //                 title: 'About',
    //                 items: [
    //                     {
    //                         name: 'Education'
    //                     }, {
    //                         name: 'Skills'
    //                     }, {
    //                         name: 'Experiences'
    //                     }, {
    //                         name: 'Misc'
    //                     }
    //                 ]
    //             }, {
    //                 title: 'Contact',
    //                 items: [
    //                     {
    //                         name: 'Email'
    //                     }, {
    //                         name: 'GitHub'
    //                     }, {
    //                         name: 'Facebook'
    //                     }, {
    //                         name: 'WeChat'
    //                     }
    //                 ]
    //             }, {
    //                 title: 'Articles',
    //                 items: [
    //                     {
    //                         name: 'Latest posts'
    //                     }, {
    //                         name: 'Tags'
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // }
}
</script>
