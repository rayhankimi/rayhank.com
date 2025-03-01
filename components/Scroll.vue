<script setup lang="ts">

</script>

<template>
  <div class="flex justify-center items-center xl:mb-24">
    <div class="flex flex-col items-center space-y-2">
      <span class="text-md md:text-xl font-semibold">Scroll Me !</span>
      <div class="relative flex items-center">
        <div class="absolute -left-6 animate-bounce">
          <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>

        <div class="w-6 h-10 border-2 border-gray-600 rounded-full flex items-center justify-center">
          <div class="w-1 h-2 bg-gray-600 animate-bounce rounded-full"></div>
        </div>

        <div class="absolute -right-6 animate-bounce">
          <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>