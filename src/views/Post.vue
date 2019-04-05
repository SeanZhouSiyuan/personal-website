<template>
    <div>
        <div class="alert">
            <div class="wrapper">
                <p><strong>Work in progress.</strong> Con&shy;tent may change as new ver&shy;sions are being rolled out.</p>
            </div>
        </div>
        <div id="post">
            <div class="wrapper">
                <div class="post-nav">
                    <router-link to="/posts">← Back</router-link>
                </div>
                <h1 class="post-title">{{ post.title }}</h1>
                <div class="post-meta">
                    <div class="date">{{ post.date }}</div>
                    <!-- <div class="tags-box">
                        <div
                            v-for="(tag, index) in post.tags"
                            :key="index"
                            class="single-tag"
                        >{{ tag }}</div>
                    </div> -->
                    <div class="category">{{ post.category }}</div>
                </div>
                <div class="post-body" v-html="post.compiledBody"></div>
            </div>
        </div>
        <footer>
            <div class="copyright">© 2019 Sean Zhou</div>
        </footer>
    </div>
</template>

<script>
import dateFormatter from './../utils/dateFormatter.js';
import marked from 'marked';
export default {
    name: 'Post',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            post: {}
        }
    },
    created() {
        let id = this.$route.params.id;
        let url = `${this.publicPath}posts/${id}.json`;
        fetch(url).then(res => {
            return res.json();
        }).then(data => {
            this.post = {
                title: data.title,
                date: dateFormatter(new Date(data.date)),
                modifiedDate: dateFormatter(new Date(data.modifiedDate)),
                tags: data.tags,
                category: data.category,
                compiledBody: marked(data.body, {sanitize: true})
            };
            document.title = `${data.title} - Sean's Blog`;
        }).catch(err => {
            console.error(err);
        });
    }
}
</script>
