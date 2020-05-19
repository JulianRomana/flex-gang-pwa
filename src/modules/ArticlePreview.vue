<template>
  <div :class="$style.articlePreview" @click="onClick">
    <img :class="$style.picture" src="../assets/default.jpg" alt="picture">
    <div :class="$style.textContainer">
      <h3 class="article-preview-title">{{ article.title }}</h3>
      <div :class="$style.description">
        <p class="article-preview-description">Le Lundi</p>
        <p class="article-preview-description">Écrit par bogoss</p>
      </div>
      <p class="article-preview-description">Heure</p>
      <p :class="$style.textContent" v-if="showContent">
        {{ article.body.substring(0,180) + '[...]' }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticlePreview',
  props: {
    article: { type: Object, required: true },
    showContent: { type: Boolean, default: false },
  },
  methods: {
    onClick() {
      this.$router.push({ name: 'Article', params: { id: this.article.id } })
    },
  },
}
</script>

<style module lang="scss">

  .articlePreview {
    background-color: #d2d2d23e;
    margin-bottom: 20px;
    @include desktop-small {
      background-color: unset;
      display: flex;
      cursor: pointer;
      margin-bottom: 40px;
    }
  }

  .textContainer {
    padding: 0 10px 10px;
    @include desktop-small {
      padding: 0 0 0 45px;
      width: 60%;
    }
  }

  .textContent {
    @extend %Roboto-regular;
    display: none;
    @include desktop-small {
      display: block;
      font-size: 20px;
      margin-top: 20px;
    }
  }
  .picture {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    @include desktop-small {
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
    @include desktop-small {
      p:first-child {
        margin-right: 20px;
      }
    }
  }
</style>
