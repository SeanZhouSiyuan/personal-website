<template>
    <section id="contact">
        <div class="contact-wrapper wrapper">
            <header class="section-header">
                <h2 class="section-heading">Let's Get in Touch</h2>
                <p class="section-intro">Contact me via the fol&shy;low&shy;ing email, or find me on <a href="https://github.com/SeanZhouSiyuan" target="_blank" class="contact">GitHub</a>, <a href="https://www.facebook.com/seanzhousiyuan" target="_blank" class="contact">Facebook</a>, and <span @click="toggleOverlay" class="contact contact--wechat">WeChat</span>.</p>
                <div :class="['overlay', this.overlay.open ? 'open' : '']">
                    <header class="overlay-header">
                        <div class="title-wrapper">
                            <h2 class="overlay-title">Scan to add me on WeChat</h2>
                        </div>
                    </header>
                    <div class="overlay-body">
                        <div class="overlay-content">
                            <div class="img-container">
                                <img src="./../assets/imgs/qr_code_wechat.jpg" alt="WeChat QR code">
                            </div>
                        </div>
                    </div>
                    <div class="overlay-control">
                        <svg
                            viewBox="0 0 32 32"
                            id="overlay_button"
                            @click="toggleOverlay(-1)">
                            <path d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z "/>
                        </svg>
                    </div>
                </div>
            </header>
            <div class="email-box">
                <a href="mailto:sean.zhou@connect.ust.hk" class="email">sean.zhou@connect.ust.hk</a>
            </div>
        </div>
    </section>
</template>

<script>
import { eventBus } from './../eventBus.js';
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
    beforeMount() {
        eventBus.$on('showCode', () => {
            this.toggleOverlay();
        })
    },
    methods: {
        toggleOverlay() {
            this.overlay.open = !this.overlay.open;
        }
    }
}
</script>

