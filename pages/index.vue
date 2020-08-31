<template>
  <div>
    <div class="title">Sortable Learning Activity</div>
    <div class="text-xl text-center">with Nuxt content module demo</div>
    <p class="pt-3 font-light">
      Click
      <nuxt-link to="/articles">
        <icon name="pencil-alt" scale="1.3" />
      </nuxt-link>
      to see <strong>Vue component embedded into markdown</strong>.
    </p>
    <p class="font-light">
      Click
      <nuxt-link to="/activities">
        <icon name="hand-pointer" scale="1.3" />
      </nuxt-link>
      to see back to back learning activities
      <strong>fetching data from <code>.json</code> files</strong>.
    </p>

    <GsapSortable :categories="categories" :items="items"> </GsapSortable>
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
        { label: "The Incredibles", name: "incredibles", list: [] },
      ],
      items: [
        { name: "Superman", category: "dc-comics" },
        { name: "The Hulk", category: "marvel" },
        { name: "Green Lantern", category: "dc-comics" },
        { name: "Iron Man", category: "marvel" },
        { name: "The Flash", category: "dc-comics" },
        { name: "Dash", category: "incredibles" },
      ],
    };
  },
};
</script>
