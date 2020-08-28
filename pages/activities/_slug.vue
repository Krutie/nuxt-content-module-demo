<template>
  <div>
    <header class="p-2">
      <h1 class="title">{{ activity.title }}</h1>
      <p class="font-light text-gray-600">{{ activity.description }}</p>
    </header>
    <GsapSortable :categories="activity.categories" :items="activity.items">
    </GsapSortable>
    <prev-next :prev="prev" :next="next" name="activities-slug" />
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const activity = await $content("activities", params.slug).fetch();
    const [prev, next] = await $content("activities")
      .only(["title"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    return { activity, prev, next };
  },
};
</script>
