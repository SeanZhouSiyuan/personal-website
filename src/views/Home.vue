<template>
  <div>
    <page-home></page-home>
    <page-intro></page-intro>
    <page-posts></page-posts>
  </div>
</template>

<script>
import PageHome from '../components/PageHome.vue';
import PageIntro from '../components/PageIntro.vue';
import PagePosts from '../components/PagePosts.vue';
export default {
  name: 'Home',
  components: {
    PageHome,
    PageIntro,
    PagePosts
  }
}
</script>