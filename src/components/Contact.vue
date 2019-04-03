<template>
    <section id="contact">
        <div class="contact-wrapper wrapper">
            <header class="section-header">
                <h2 class="section-heading">Let's Get in Touch</h2>
                <p class="section-intro">Contact me via the fol&shy;low&shy;ing email, or find me on <a href="https://github.com/SeanZhouSiyuan" target="_blank" class="contact">GitHub</a>, <a href="https://www.facebook.com/seanzhousiyuan" target="_blank" class="contact">Facebook</a>, and <span @click="callOverlay(5)" class="contact contact--wechat">WeChat</span>.</p>
            </header>
            <div class="email-box">
                <a href="mailto:sean.zhou@connect.ust.hk" class="email">sean.zhou@connect.ust.hk</a>
            </div>
        </div>
    </section>
</template>

<script>
import { eventBus } from './../utils/eventBus.js';
export default {
    name: 'HomeContact',
    data() {
        return {
            contacts: [
                {
                    method: 'E-mail',
                    value: 'seanzhousiyuan@outlook.com',
                }, {
                    method: 'WeChat',
                    value: 'MRZSY1023'
                }, {
                    method: 'Messenger',
                    value: 'seanzhousiyuan'
                }, {
                    method: 'Instagram',
                    value: 'seanzhousiyuan'
                }
            ],
            overlay: {
                open: false
            }
        }
    },
    methods: {
        callOverlay(id) {
            eventBus.$emit('showOverlay', id);
        }
    }
}
</script>

