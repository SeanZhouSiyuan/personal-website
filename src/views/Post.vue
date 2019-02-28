<template>
    <div>
        <div id="post_wrapper" class="wrapper">
            <div id="post_nav">
                <router-link to="/posts">← Back</router-link>
            </div>
            <div v-html="compiledMarkdown"></div>
        </div>
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
