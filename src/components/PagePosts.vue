<template>
    <div id="page_posts" class="page">
        <div class="posts-wrapper wrapper">
            <header id="posts_header">
                <h2>My Posts</h2>
                <p>I write articles about web design and development. See latest posts below, or head to my blog to view more.</p>
                <p id="blog_link_wrapper">
                    <router-link to="/posts">Go to the blog →</router-link>
                </p>
            </header>
            <div id="posts_list">
                <div
                    v-for="post in list"
                    :key="post.id"
                    class="post"
                >
                    <router-link :to="post.path">
                        <p class="date">{{ post.date }}</p>
                        <h3 class="title">{{ post.title }}</h3>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { dateFormatter } from './../plugins/dateFormatter.js';
import { postList } from './../assets/postList.js';
export default {
    name: 'PagePosts',
    data() {
        return {
            list: postList
        }
    },
    beforeMount() {
        this.list.forEach(post => {
            post.date = dateFormatter(post.date);
        });
    }
}
</script>
