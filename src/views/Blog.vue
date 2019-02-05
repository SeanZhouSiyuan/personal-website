<template>
    <div id="blog">
        <div id="blog_wrapper" class="wrapper">
            <header>
                <h1>Sean Zhou's Blog</h1>
                <p>Hi there, and welcome to my blog. I am a web developer and student at HKUST. To learn more about me, feel free to visit my portfolio site.</p>
                <p id="portfolio_link_wrapper">
                    <router-link to="/">Go to the portfolio →</router-link>
                </p>
            </header>
            <div id="posts">
                <div
                    v-for="post in list"
                    :key="post.id"
                    class="post"
                >
                    <router-link :to="post.path">
                        <p class="date">{{ post.date }}</p>
                        <h2 class="title">{{ post.title }}</h2>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { postList } from './../assets/postList.js';
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