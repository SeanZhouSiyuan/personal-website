<template>
    <nav :class="['header-nav', menu.open ? 'open' : '']">
        <div class="nav-bar-wrapper">
            <div :class="['nav-bar', menu.open ? 'active' : '']">
                <div class="text">Menu</div>
                <div
                    @click="toggleNavigation"
                    class="button"
                >
                    <svg viewBox="0 0 24 24">
                        <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="nav-body">
            <div class="items-box">
                <div class="nav-item">
                    <router-link to="/">Home</router-link>
                </div>
                <div class="nav-item">
                    <router-link to="/posts">Blog</router-link>
                </div>
                <div class="nav-item--external nav-item">
                    <a href="https://github.com/SeanZhouSiyuan" target="_blank">
                        GitHub
                        <svg viewBox="0 0 16 16">
                            <path d="M 9 2 L 9 3 L 12.292969 3 L 6.023438 9.273438 L 6.726563 9.976563 L 13 3.707031 L 13 7 L 14 7 L 14 2 Z M 4 4 C 2.894531 4 2 4.894531 2 6 L 2 12 C 2 13.105469 2.894531 14 4 14 L 10 14 C 11.105469 14 12 13.105469 12 12 L 12 7 L 11 8 L 11 12 C 11 12.550781 10.550781 13 10 13 L 4 13 C 3.449219 13 3 12.550781 3 12 L 3 6 C 3 5.449219 3.449219 5 4 5 L 8 5 L 9 4 Z "/>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="copyright">© 2019 Sean Zhou</div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'HomeNavigation',
    data() {
        return {
            menu: {
                open: false,
                submenu: {
                    open: false
                }
            }
        }
    },
    methods: {
        toggleNavigation() {
            this.menu.open = !this.menu.open;
        }
    }
}
</script>

