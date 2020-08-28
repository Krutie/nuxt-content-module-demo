<template>
  <div>
    <div class="title">Sortable Learning Activity</div>
    <div class="text-xl text-center">with Nuxt content module demo</div>
    <p class="p-3 font-light">
      Click
      <nuxt-link to="/articles">
        <icon name="pencil-alt" scale="1.3" />
      </nuxt-link>
      to see Vue component embedded into markdown.
    </p>
    <p class="p-3 font-light">
      Click
      <nuxt-link to="/activities">
        <icon name="hand-pointer" scale="1.3" />
      </nuxt-link>
      to see back to back learning activities fetching data from
      <code>.json</code> files.
    </p>

    <!-- <GsapSortable :categories="categories" :items="items"> </GsapSortable> -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      categories: [
        { label: "Marvel Universe", name: "marvel", list: [] },
        { label: "DC Comics", name: "dc-comics", list: [] },
      ],
      items: [
        { name: "Superman", category: "dc-comics" },
        { name: "The Hulk", category: "marvel" },
        { name: "Green Lantern", category: "dc-comics" },
        { name: "Iron Man", category: "marvel" },
        { name: "The Flash", category: "dc-comics" },
      ],
    };
  },
};
</script>
