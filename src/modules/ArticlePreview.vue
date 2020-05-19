<template>
  <div :class="$style.articlePreview" @click="onClick">
    <img :class="$style.picture" :src="picture" alt="picture">
    <div :class="$style.textContainer">
      <h3 class="article-preview-title">{{ title }}</h3>
      <div :class="$style.description">
        <p class="article-preview-description">Le {{ date }}</p>
        <p class="article-preview-description">Écrit par {{ author }}</p>
      </div>
      <p class="article-preview-description">{{ time }}</p>
      <p :class="$style.textContent" v-if="showContent">
        {{ content.substring(0,180) + '[...]' }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticlePreview',
  methods: {
    onClick() {
      this.$router.push({ name: 'Article', params: { id: this.id } })
    },
  },
  props: {
    picture: { type: String, required: true },
    title: { type: String, required: true },
    date: { type: String, required: true },
    author: { type: String, required: true },
    time: { type: String, required: true },
    content: { type: String, required: true },
    id: { type: Number, required: true },
    showContent: { type: Boolean, default: false },
  },
}
</script>

<style module lang="scss">

  .articlePreview {
    background-color: #d2d2d23e;
    margin-bottom: 20px;
    @include little-desktop {
      background-color: unset;
      display: flex;
      cursor: pointer;
      margin-bottom: 40px;
    }
  }

  .textContainer {
    padding: 0 10px 10px;
    @include little-desktop {
      padding: 0 0 0 45px;
      width: 60%;
    }
  }

  .textContent {
    @extend %Roboto-regular;
    display: none;
    @include little-desktop {
      display: block;
      font-size: 20px;
      margin-top: 20px;
    }
  }
  .picture {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    @include little-desktop {
      width: 40%;
    }
  }

  h3 {
    margin-bottom: 10px;
    text-align: justify;
  }

  .description {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 5px;
    p:first-child {
      margin-right: 10px;
    }
    @include little-desktop {
      p:first-child {
        margin-right: 20px;
      }
    }
  }
</style>
