<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import './assets/normalize';
$font-stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
$black: #24292e;
$white: #ffffff;
* {
  box-sizing: border-box;
}
html {
  font-size: 12px;
}
@media screen and (min-width: 375px) {
  html {
    font-size: 16px;
  }
}
body {
  font-family: $font-stack;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0 0 1em;
}
h6, h5, h4 {
  font-size: 1rem;
}
h3 {
  font-size: 1.25rem;
}
h2 {
  font-size: 1.50rem;
}
h1 {
  font-size: 2.00rem;
}
a {
  color: $black;
  text-decoration: none;
}
@media screen and (min-width: 375px) {
  a {
    &:hover {
      text-decoration: underline;
    }
  }
}

.flex-container {
  display: flex;
}
</style>
