<template>
    <div id="page_home" class="page">
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
    name: 'PageHome'
}
</script>