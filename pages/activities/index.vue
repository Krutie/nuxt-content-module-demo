<template>
  <div>
    <h1 class="title">Learning Activities</h1>
    <div class="divide-y-2 divide-gray-500 divide-dashed">
      <div v-for="(activity, index) in activities" class="py-2">
        <nuxt-link :to="activity.path" class="text-xl">{{
          activity.title
        }}</nuxt-link>
        <p class="font-light text-gray-500">{{ activity.description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const activities = await $content("activities").fetch();
    return { activities };
  },
};
</script>
