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
    let animatableItems = document.getElementsByClassName('self-animatable');
    let animatableContainers = document.getElementsByClassName('children-animatable');
    
    this.animator = new Animator(animatableItems, animatableContainers);
    this.animator.setup();
  },
  destroyed() {
    this.animator.remove();
    this.animator = null;
  }
}
</script>