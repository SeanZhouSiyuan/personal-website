<template>
    <div id="blog">
        <div class="alert">
            <div class="wrapper">
                <p><strong>Work in progress.</strong> Con&shy;tent may change as new ver&shy;sions are being rolled out.</p>
            </div>
        </div>
        <header>
            <div class="wrapper">
                <h1 class="title">Sean Zhou</h1>
                <!-- <p class="intro">Student, developer, citizen.</p> -->
                <nav class="navigation">
                    <div class="nav-item">
                        <router-link to="/">Home</router-link>
                    </div>
                    <!-- <div class="nav-item">
                        <router-link to="/posts">Blog</router-link>
                    </div> -->
                    <div class="nav-item--external nav-item">
                        <a href="https://github.com/SeanZhouSiyuan" target="_blank">
                            GitHub
                            <svg viewBox="0 0 16 16">
                                <path d="M 9 2 L 9 3 L 12.292969 3 L 6.023438 9.273438 L 6.726563 9.976563 L 13 3.707031 L 13 7 L 14 7 L 14 2 Z M 4 4 C 2.894531 4 2 4.894531 2 6 L 2 12 C 2 13.105469 2.894531 14 4 14 L 10 14 C 11.105469 14 12 13.105469 12 12 L 12 7 L 11 8 L 11 12 C 11 12.550781 10.550781 13 10 13 L 4 13 C 3.449219 13 3 12.550781 3 12 L 3 6 C 3 5.449219 3.449219 5 4 5 L 8 5 L 9 4 Z "/>
                            </svg>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
        <div class="wrapper">
            <main class="posts-box">
                <div
                    v-for="post in list"
                    :key="post.id"
                    class="post"
                >
                    <p class="date">{{ post.date }}</p>
                    <router-link :to="post.path" class="link">
                        <h2 class="title">{{ post.title }}</h2>
                    </router-link>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import postList from './../assets/postList.js';
export default {
    name: 'Posts',
    data() {
        return {
            list: postList
        }
    },
    beforeMount() {
        document.title = 'Sean\'s Blog';
    }
}
</script>