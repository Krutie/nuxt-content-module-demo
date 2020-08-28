<template>
  <div class="flex justify-between py-3">
    <NuxtLink
      v-if="prev"
      :to="{ name: name, params: { slug: prev.slug } }"
      class="hover:text-red-500"
    >
      <div class="flex items-center">
        <icon name="angle-left" scale="4" class="text-red-500" />
        <span class="pl-2">
          PREV
          <!-- {{ prev.title }} -->
        </span>
      </div>
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: name, params: { slug: next.slug } }"
      class="hover:text-red-500"
    >
      <div class="flex items-center">
        <span class="pr-2">
          NEXT
          <!-- {{ next.title }} -->
        </span>
        <icon name="angle-right" scale="4" class="text-red-500" />
      </div>
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
    name: {
      type: String,
      default: () => null,
    },
  },
};
</script>
