<template>
  <div>
    <h1 class="title">Articles</h1>
    <div class="divide-y-2 divide-gray-500 divide-dashed">
      <div v-for="(article, index) in articles" class="py-2">
        <nuxt-link :to="article.path" class="text-xl">{{
          article.title
        }}</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("articles").fetch();
    return { articles };
  },
};
</script>
