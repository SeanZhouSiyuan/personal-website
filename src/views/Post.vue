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
import marked from 'marked';
export default {
    name: 'Post',
    data() {
        return {
            post: null,
            compiledMarkdown: null
        }
    },
    created() {
        let id = this.$route.params.id;
        import(`./../assets/posts/${id}.js`).then(data => {
            this.post = data.post;
            document.title = `${this.post.title} - Sean's Blog`;
            this.compiledMarkdown = marked(this.post.body, {sanitize: true});
        });
    }
}
</script>
