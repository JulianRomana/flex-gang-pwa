<template>
  <header
    :class="[$style.wrapper,
      {
        [$style.hasScrolled]: hasScrolled
    }]"
  >
    <router-link to="/">
      <div :class="$style.logoContainer">
        <span  class="article-preview-title span">Fight.</span>
        <img :class="$style.logo" src="../../assets/controller.svg" alt="controller logo">
      </div>
    </router-link>
    <router-link :class="$style.articleLink" to="/articles">articles</router-link>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({ hasScrolled: false }),
  created() {
    window.addEventListener('scroll', this.scrollDetect)
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollDetect)
  },
  methods: {
    scrollDetect() {
      this.hasScrolled = window.scrollY > 10
    },
  },
}
</script>

<style module lang="scss">
  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100vw;
    padding: 20px;
    transition: all .2s ease-in-out;
    align-items: center;
    max-width: calc(100% - 40px);
  }

  .logo {
    width: 40px;
    margin-left: 10px;
    margin-right: 70px;
  }

  .logoContainer{
    display: flex;
    align-items: center;
  }

  .hasScrolled {
    background-color: white;
    box-shadow: 1px 2px 2px grey;
  }

  .span {
    vertical-align: center;
  }

  .articleLink {
    font-family: 'Grotesk';
    cursor: pointer;
  }
</style>
