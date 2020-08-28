<template>
  <div>
    <header class="p-2">
      <h1 class="title text-gray-800">{{ article.title }}</h1>
    </header>
    <nuxt-content :document="article" class="pb-10" />
    <hr />
    <prev-next :prev="prev" :next="next" name="articles-slug" />
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    const [prev, next] = await $content("articles")
      .only(["title"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    return { article, prev, next };
  },
};
</script>
