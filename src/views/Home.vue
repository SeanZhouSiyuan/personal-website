<template>
  <div>
    <my-intro></my-intro>
    <my-edu></my-edu>
  </div>
</template>

<script>
import MyIntro from '../components/MyIntro.vue';
import MyEdu from '../components/MyEdu.vue';
export default {
  name: 'Home',
  components: {
    MyIntro,
    MyEdu
  }
}
</script>