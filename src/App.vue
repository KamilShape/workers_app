<template>
  <ul class="nav nav-pills nav-justified">
    <li class="nav-item">
      <router-link class="nav-link" to="/">Add Worker</router-link>  </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/workerslist">Workers List</router-link>
    </li>
  </ul>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 30px;
  width: 50%;
  margin: 0 auto;
  a {
    font-weight: bold;
    color: black;

    &.router-link-exact-active {
      color: white;
      background-color: rgb(13,110,253)
    }
  }
}
</style>
