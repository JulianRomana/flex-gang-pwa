<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/articles">Articles</router-link> |
      <router-link to="/articles/1">Article</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import 'src/styles/styles.scss';
</style>
