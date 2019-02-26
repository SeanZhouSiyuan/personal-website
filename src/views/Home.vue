<template>
  <div id="main_page">
    <home-navigation></home-navigation>
    <home-hero></home-hero>
    <home-about></home-about>
    <home-posts></home-posts>
    <home-contact></home-contact>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeNavigation from '../components/Navigation.vue';
import HomeHero from '../components/Hero.vue';
import HomeAbout from '../components/About.vue';
import HomePosts from '../components/Posts.vue';
import HomeContact from '../components/Contact.vue';
import HomeFooter from '../components/Footer.vue';
export default {
  name: 'Home',
  components: {
    HomeNavigation,
    HomeHero,
    HomeAbout,
    HomePosts,
    HomeContact,
    HomeFooter
  },
  beforeMount() {
    document.title = 'Sean Zhou';
  }
}
</script>