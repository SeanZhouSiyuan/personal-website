<template>
    <footer>
        <div class="wrapper">
            <div class="navigation">
                <nav>
                    <div class="single-list">
                        <h4 class="title">About</h4>
                        <ul>
                            <li class="list-item">
                                <span @click="callOverlay(1)">Education</span>
                            </li>
                            <li class="list-item">
                                <span @click="callOverlay(2)">Skills</span>
                            </li>
                            <li class="list-item">
                                <span @click="callOverlay(3)">Experiences</span>
                            </li>
                            <li class="list-item">
                                <span @click="callOverlay(4)">Misc</span>
                            </li>
                        </ul>
                    </div>
                    <div class="single-list">
                        <h4 class="title">Contact</h4>
                        <ul>
                            <li class="list-item">
                                <a href="mailto:sean.zhou@connect.ust.hk">Email</a>
                            </li>
                            <li class="list-item">
                                <a href="https://github.com/SeanZhouSiyuan" target="_blank">GitHub</a>
                            </li>
                            <li class="list-item">
                                <a href="https://www.facebook.com/seanzhousiyuan" target="_blank">Facebook</a>
                            </li>
                            <li class="list-item">
                                <span @click="callOverlay(5)">WeChat</span>
                            </li>
                        </ul>
                    </div>
                    <div class="single-list">
                        <h4 class="title">Articles</h4>
                        <ul>
                            <li class="list-item list-item--link">
                                <router-link to="/posts">Latest posts</router-link>
                            </li>
                            <li class="list-item list-item--link">
                                <router-link to="/posts">Tags</router-link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div class="copyright">
                <span class="text">© 2019 Sean Zhou</span>
            </div>
        </div>
    </footer>
</template>

<script>
import { eventBus } from './../eventBus.js';
export default {
    name: 'HomeFooter',
    methods: {
        callOverlay(id) {
            eventBus.$emit('showOverlay', id);
        }
    }
}
</script>
