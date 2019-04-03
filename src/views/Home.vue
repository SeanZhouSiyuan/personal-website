<template>
  <div>
    <div id="background">
      <div class="page-body">
        <home-navigation></home-navigation>
        <home-hero></home-hero>
        <home-about></home-about>
        <home-posts></home-posts>
        <home-contact></home-contact>
        <home-footer></home-footer>
      </div>
    </div>
    <home-overlay></home-overlay>
  </div>
</template>

<script>
import Animator from './../animator.js';
import HomeNavigation from '../components/Navigation.vue';
import HomeHero from '../components/Hero.vue';
import HomeAbout from '../components/About.vue';
import HomePosts from '../components/Posts.vue';
import HomeContact from '../components/Contact.vue';
import HomeFooter from '../components/Footer.vue';
import HomeOverlay from '../components/Overlay.vue';
export default {
  name: 'Home',
  components: {
    HomeNavigation,
    HomeHero,
    HomeAbout,
    HomePosts,
    HomeContact,
    HomeFooter,
    HomeOverlay
  },
  data() {
    return {
      animator: null
    }
  },
  beforeMount() {
    document.title = 'Sean Zhou';
  },
  mounted() {
    this.animator = new Animator('self-animatable', 'children-animatable');
    this.animator.setupListener();
  },
  destroyed() {
    this.animator.removeListener();
    this.animator = null;
  }
}
</script>