<template>
    <div>
        <div id="post_wrapper" class="wrapper">
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
        this.post = require(`./../assets/posts/${id}.js`);
        document.title = `${this.post.title} - Sean's Blog`;
        this.compiledMarkdown = marked(this.post.body, {sanitize: true});
    }
}
</script>
