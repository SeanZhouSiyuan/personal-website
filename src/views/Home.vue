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
  },
  mounted() {
    let animatableBoxes = Array.from(document.querySelectorAll('.content-animatable:not(.hero-container)'));
    let heroBox = document.querySelector('.hero-container');
    let animatableItems = Array.from(document.querySelectorAll('.self-animatable'));
    
    let heroItems = Array.from(heroBox.children);
    heroItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('visible');
      }, (index + 1) * 300);
    });
    
    window.addEventListener('scroll', () => {
      animatableBoxes.forEach(box => {
        let items = Array.from(box.children);
        let isBoxInViewport = this.isElementInViewport(box);
        if (isBoxInViewport === true ) {
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('visible');
            }, (index + 1) * 300);
          });
        }
      });
      animatableItems.forEach(item => {
        let isInViewport = this.isElementInViewport(item);
        if (isInViewport === true) {
          setTimeout(() => {
            item.classList.add('visible');
          }, 300);
        }
      });
    });
  },
  methods: {
    isElementInViewport(el) {
      // reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
      const rect = el.getBoundingClientRect();

      const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
      const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

      // const verInView = ((rect.top + 16) <= windowHeight) && ((rect.top - 16 + rect.height) >= 0);
      // const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
      const verInView = (rect.top + 16) <= windowHeight;
      const horInView = rect.left <= windowWidth;

      return (verInView && horInView);
    }
  }
}
</script>