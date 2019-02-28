<template>
    <section id="posts" class="section--primary">
        <div class="wrapper">
            <header class="posts-header section-header content-animatable">
                <div class="section-title">
                    <span class="dash">–</span>
                    <span class="text">My Articles</span>
                    <span class="dash">–</span>
                </div>
                <h2 class="section-heading">I post things about the Web</h2>
                <p class="section-intro">Specifically, I write about web de&shy;sign and devel&shy;op&shy;ment. See lat&shy;est posts below, or view more in my blog.</p>
                <div><router-link to="/posts" class="link">Go to the blog</router-link></div>
            </header>
            <div class="posts-box self-animatable">
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
    </section>
</template>

<script>
import { dateFormatter } from './../plugins/dateFormatter.js';
import postList from './../assets/postList.js';
export default {
    name: 'HomePosts',
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
