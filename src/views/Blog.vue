<template>
    <div id="blog">
        <header>
            <div class="wrapper">
                <h1 class="title">Sean Zhou</h1>
                <nav class="navigation">
                    <div class="nav-item">
                        <router-link to="/">Home</router-link>
                    </div>
                    <div class="nav-item--external nav-item">
                        <a href="https://github.com/SeanZhouSiyuan" target="_blank">GitHub</a>
                    </div>
                </nav>
            </div>
        </header>
        <div class="posts-wrapper">
            <main class="posts-box">
                <div
                    v-for="post in list"
                    :key="post.id"
                    class="post"
                >
                    <router-link :to="post.path" class="link">
                        <div class="meta">
                            <div class="date">{{ post.date }}</div>
                            <div class="divider">·</div>
                            <!-- <div class="tags-box">
                                <div
                                    v-for="(tag, index) in post.tags"
                                    :key="index"
                                    class="single-tag"
                                >
                                    {{ tag }}
                                </div>
                            </div> -->
                            <div class="category">{{ post.category }}</div>
                        </div>
                        <h2 class="title">{{ post.title }}</h2>
                        <p class="intro">{{ post.intro }}</p>
                        <!-- <p class="date">{{ post.date }}</p> -->
                    </router-link>
                </div>
            </main>
        </div>
        <footer>
            <div class="copyright">© 2019 Sean Zhou</div>
        </footer>
    </div>
</template>

<script>
import dateFormatter from './../utils/dateFormatter.js';
export default {
    name: 'Blog',
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
                let date = post.date;
                let intro = post.intro;
                post.date = dateFormatter(date);
                if (intro.length > 140) {
                    let temp = intro.slice(0, 140);
                    let i = temp.lastIndexOf(' ');
                    temp = temp.slice(0, i);
                    intro = temp + '…';
                }
                post.intro = intro;
                return post;
            });
        }).catch(err => {
            console.error(err);
        });
    },
    beforeMount() {
        document.title = 'Sean\'s Blog';
    }
}
</script>