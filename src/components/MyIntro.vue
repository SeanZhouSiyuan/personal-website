<template>
    <div id="page_intro" class="page flex-container">
        <h1 class="title">Sean Zhou</h1>
        <h2 class="title-secondary">Student, front-end learner, liberal.</h2>
        <nav>
            <div class="nav-item">
                <router-link to="/posts">Blog</router-link>
            </div>
            <div class="nav-item">
                <a href="https://github.com/SeanZhouSiyuan">GitHub</a>
            </div>
            <div class="nav-item">
                <a href="#">About</a>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'MyIntro'
}
</script>

<style lang="scss">
#page_intro {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  nav {
    text-align: center;
    .nav-item {
      margin-bottom: 0.75rem;
      letter-spacing: 1px;
      word-spacing: 1px;
    }
  }
  .title {
    margin-bottom: 1rem;
    // title has double letter and word spacing
    // since it has double font size
    letter-spacing: 2px;
    word-spacing: 2px;
  }
  .title-secondary {
    margin-bottom: 2rem;
    font-size: 1rem;
    font-weight: normal;
    letter-spacing: 1px;
    word-spacing: 1px;
  }
}
</style>


