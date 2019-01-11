<template>
  <div>
    <page-home></page-home>
    <page-intro></page-intro>
  </div>
</template>

<script>
import PageHome from '../components/PageHome.vue';
import PageIntro from '../components/PageIntro.vue';
export default {
  name: 'Home',
  components: {
    PageHome,
    PageIntro
  }
}
</script>