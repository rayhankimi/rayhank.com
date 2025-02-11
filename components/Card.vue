<script setup lang="ts">
  import { defineProps } from 'vue';
  const prop = defineProps({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
  })
</script>

<template>
  <div class="bg-[#F5ECD5] flex flex-col md:flex-row py-4 px-4 md:px-24 mx-4 md:mx-8 my-4 border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
    <figure class="w-full md:w-1/2 p-4 mx-auto flex justify-center ">
      <img
          :src="image"
          class="bg-white w-3/4 sm:max-w-3/4 md:w-full h-auto border-2 rounded-md border-black border-2  shadow-[8px_8px_0px_rgba(0,0,0,1)]"
          alt="indexgif"
      />
    </figure>

    <div class="flex flex-col justify-center md:w-1/2 px-4 text-center md:text-left">
      <h1 class="text-2xl md:text-3xl font-semibold"> {{ title }}</h1>
      <p class="text-lg md:text-2xl mt-2 mb-2 ">
        {{ description }}
      </p>
      <button class="rounded-md bg-black my-2 max-w-64">
      <span
          class="block -translate-x-2 -translate-y-2 rounded-md border-2 border-black text-white bg-[#578E7E] p-1.5 text-md md:text-xl hover:-translate-y-3
          active:translate-x-0 active:translate-y-0 transition-all"
      >
        <a href="/">
          Back to home
        </a>
      </span>
      </button>
    </div>
  </div>
</template>


<style scoped>

</style>