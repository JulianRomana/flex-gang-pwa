<template :class="$style.container">
  <div :class="$style.homepage">
    <router-link to="/articles">
      <div :class="$style.button">
        <span>DÉCOUVRIR LES ARTICLES</span>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style module lang="scss">

  .homepage {
    width: 100vw;
    height: calc(100vh - 70px);
    background-image: url("../assets/bg-image.jpg");
    background-position: center;
    &::after {
      content:"";
      position: absolute;
      bottom:0;
      width: 100%;
      height: calc(100% - 70px);
      background-color: rgba(0, 0, 0, 0.29);
    }
  }

  .button {
    @extend %Roboto-bold;
    position: absolute;
    bottom: 200px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
    width: 300px;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.728);
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    transition-duration: 0.4s;

    span {
      position: absolute;
      top: 50%;
      transform: translate(-50%,-50%);
      width: 100%;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 1);
    }
  }

</style>
