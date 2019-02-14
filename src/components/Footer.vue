<template>
    <footer>
        <div class="footer-wrapper wrapper">
            <nav>
                <div
                    v-for="(entry, index) in nav"
                    :key="index"
                    class="nav-item"
                >
                    <div class="title">{{ entry.title }}</div>
                    <ul>
                        <li
                            v-for="(item, index) in entry.items"
                            :key="index"
                        >{{ item.name }}</li>
                    </ul>
                </div>
                <!-- <div>
                    <p>© 2019 Sean Zhou</p>
                </div> -->
            </nav>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'HomeFooter',
    data() {
        return {
            nav: [
                {
                    title: 'About',
                    items: [
                        {
                            name: 'Education',
                            url: '#'
                        }, {
                            name: 'Skills',
                            url: '#'
                        }, {
                            name: 'Experiences',
                            url: '#'
                        }, {
                            name: 'Misc',
                            url: '#'
                        }
                    ]
                }, {
                    title: 'Contact',
                    items: [
                        {
                            name: 'Email',
                            url: '#'
                        }, {
                            name: 'WeChat',
                            url: '#'
                        }, {
                            name: 'Facebook',
                            url: '#'
                        }
                    ]
                }, {
                    title: 'Blog'
                }
            ]
        }
    }
}
</script>
