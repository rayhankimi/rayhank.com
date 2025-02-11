<template>
  <div
      class="flex flex-col p-6 bg-[#F5ECD5] m-4 justify-center text-[#3d3d3d] rounded-md border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]"
  >
    <h1 class="text-3xl md:text-4xl text-center p-6 font-semibold">{{ title }}</h1>
    <div>
      <p class="text-md md:text-lg text-center">
        {{ description }}
      </p>

      <div class="flex flex-wrap gap-4 justify-center mt-6">
        <img
            v-for="tech in technologies"
            :key="tech.name"
            :src="tech.icon"
            :alt="tech.name"
            class="h-12 w-13"
        />
      </div>
    </div>
    <button class="rounded-md bg-black mx-auto my-8 max-w-64">
      <span
          class="block -translate-x-2 -translate-y-2 rounded-md border-2 border-black text-white bg-[#578E7E] p-1.5 text-md md:text-xl hover:-translate-y-3
          active:translate-x-0 active:translate-y-0 transition-all"
      >
        <a :href="buttonLink">
          {{ buttonText }}
        </a>
      </span>
    </button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologies: {
    type: Array,
    required: true,
  },
  buttonText: {
    type: String,
    default: "Related Projects (soon)",
  },
  buttonLink: {
    type: String,
    default: "/",
  },
});
</script>

<style scoped>
/* Add any additional styling here */
</style>
