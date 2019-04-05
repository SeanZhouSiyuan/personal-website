<template>
    <section id="posts" class="section--primary">
        <div class="wrapper">
            <header class="posts-header section-header children-animatable">
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
                    class="post-wrapper"
                >
                    <div class="post">
                        <router-link :to="post.path">
                            <p class="date">{{ post.date }}</p>
                            <h3 class="title">{{ post.title }}</h3>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import dateFormatter from './../utils/dateFormatter.js';
export default {
    name: 'HomePosts',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            list: []
        }
    },
    created() {
        let url = `${this.publicPath}postList.json`;
        fetch(url).then(res => {
            return res.json();
        }).then(data => {
            this.list = data.map(post => {
                post.date = dateFormatter(post.date);
                return post;
            });
        }).catch(err => {
            console.error(err);
        });
    }
}
</script>
