<template>
    <div id="page_posts" class="page">
        <div class="posts-wrapper wrapper">
            <header id="posts_header">
                <h2 class="page-title">I post things about the Web</h2>
                <p>Specifically, I write about web de&shy;sign and devel&shy;op&shy;ment. See lat&shy;est posts below, or view more in my blog.</p>
                <router-link to="/posts" class="link">Go to the blog</router-link>
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
