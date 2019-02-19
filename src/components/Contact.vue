<template>
    <section id="contact">
        <div class="contact-wrapper wrapper">
            <header class="section-header">
                <h2 class="section-heading">Let's Get in Touch</h2>
                <p class="section-intro">Contact me via the fol&shy;low&shy;ing email, or find me on <span>GitHub</span>, <span>Facebook</span>, and <span>WeChat</span>.</p>
            </header>
            <div class="email-box">
                <span class="email">sean.zhou@connect.ust.hk</span>
            </div>
        </div>
    </section>
</template>

<script>
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
            ]
        }
    }
}
</script>

