<template>
    <nav :class="['header-nav', menu.open ? 'open' : '']">
        <div class="nav-bar">
            <div class="text">Menu</div>
            <div
                @click="toggleNavigation"
                :class="['button', menu.open ? 'active' : '']"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            </div>
        </div>
        <div class="nav-content">
            <div class="items-box">
                <div
                    :class="[
                        'nav-item--expandable',
                        'nav-item',
                        menu.submenu.open ? 'open' : ''
                    ]"
                >
                    <router-link to="/">Home</router-link>
                    <div
                        @click="toggleSubmenu"
                        :class="[
                            'submenu-control',
                            this.menu.submenu.open ? 'active' : ''
                        ]"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                            <path fill="none" d="M0 0h24v24H0V0z"/>
                        </svg>
                    </div>
                    <div class="submenu">
                        <ul>
                            <li>
                                <a href="/#about">About</a>
                            </li>
                            <li>
                                <a href="/#posts">Posts</a>
                            </li>
                            <li>
                                <a href="/#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="nav-item">
                    <router-link to="/posts">Blog</router-link>
                </div>
                <div class="nav-item--external nav-item">
                    <a href="https://github.com/SeanZhouSiyuan">
                        GitHub
                        <svg viewBox="0 0 16 16">
                            <path d="M 9 2 L 9 3 L 12.292969 3 L 6.023438 9.273438 L 6.726563 9.976563 L 13 3.707031 L 13 7 L 14 7 L 14 2 Z M 4 4 C 2.894531 4 2 4.894531 2 6 L 2 12 C 2 13.105469 2.894531 14 4 14 L 10 14 C 11.105469 14 12 13.105469 12 12 L 12 7 L 11 8 L 11 12 C 11 12.550781 10.550781 13 10 13 L 4 13 C 3.449219 13 3 12.550781 3 12 L 3 6 C 3 5.449219 3.449219 5 4 5 L 8 5 L 9 4 Z "/>
                        </svg>
                    </a>
                </div>
            </div>
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
        },
        toggleSubmenu() {
            this.menu.submenu.open = !this.menu.submenu.open;
        }
    }
}
</script>

