<template>
  <div>
    <nav class="p-5 bg-gray-900 text-white flex justify-between">
      <div>
        <nuxt-link to="/" class="pl-5">
          <icon name="home" scale="2" />
        </nuxt-link>
        <nuxt-link to="/articles" class="pl-6">
          <icon name="pencil-alt" scale="1.6" />
        </nuxt-link>
        <nuxt-link to="/activities" class="pl-6">
          <icon name="hand-pointer" scale="1.75" />
        </nuxt-link>
      </div>
      <div>
        <a
          href="https://krutiepatel.com/blog/nuxt-content-module-demo-with-sortable-activity"
          target="_blank"
          class="pr-6 hover:text-red-400"
        >
          <icon name="link" scale="1.5" />
        </a>
        <a
          href="https://github.com/Krutie/nuxt-content-module-demo"
          target="_blank"
          class="pr-6 hover:text-red-400"
        >
          <icon name="brands/github" scale="1.8" />
        </a>
      </div>
    </nav>
    <div
      class="col-span-9 md:max-w-4xl max-w-sm sm:max-w-xl md:max-w-4xl mx-auto p-5"
    >
      <Nuxt />
    </div>
  </div>
</template>

<style>
.nuxt-link-exact-active {
  @apply text-red-400;
}

p > code {
  @apply text-blue-600 p-1 text-sm;
}
pre {
  @apply rounded-md;
}
body {
  @apply text-base text-gray-800 font-normal;
  margin: 0;
  font-family: "Rubik", sans-serif;
}

#nav {
  @apply bg-gray-800 p-5;
}

#nav a {
  @applt text-white pl-5 no-underline;
}

h1 {
  @apply text-3xl;
}
h2 {
  @apply text-2xl;
}
.title {
  @apply text-3xl font-light text-center;
}
.center-flex {
  @apply flex justify-center items-center text-center;
}
.card {
  @apply rounded-lg border-2 text-base tracking-wide;
  /*tracking-wide = letter-spacing: 0.025em*/
}
.draggable {
  @apply absolute m-3 text-white border-2 shadow;
}
.dropped {
  @apply absolute text-white border-2;
}
.draggable,
.dropped {
  /*@apply h-40 w-40;*/
  height: 7rem;
  width: 9rem;
  background: linear-gradient(45deg, #726296 0%, #d65965 100%);
}
.droppable {
  /*@apply h-40 w-40;*/
  height: 7rem;
  width: 9rem;
  @apply text-base font-light;
  @apply flex justify-center items-center border-2 border-red-300 border-dashed bg-gray-100;
  margin: 5px auto;
}
.my-handle {
  cursor: move;
  cursor: -webkit-grabbing;
}
</style>
