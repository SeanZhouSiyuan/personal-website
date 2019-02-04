<template>
    <div id="page_posts" class="page">
        <div class="posts-wrapper wrapper">
            <header id="posts_header">
                <h2>My Posts</h2>
                <p>I write articles about web design and development. See latest posts below, or head to the <a href="#">blog</a> to view more.</p>
            </header>
            <div id="posts_list">
                <div
                    v-for="post in list"
                    :key="post.id"
                    class="post"
                >
                    <router-link :to="post.path">
                        <h3>{{ post.title }}</h3>
                        <p>{{ post.date }}</p>
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
