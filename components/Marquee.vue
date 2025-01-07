<script setup lang="ts">
  const props = defineProps({
    title: String,
  });
</script>

<template>
  <div class="relative flex overflow-x-hidden border-y-2 mt-6 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-[#F5ECD5]">
    <div class="py-4 animate-marquee whitespace-nowrap">
      <span class="text-3xl mx-4"> {{ props.title }}</span>
      <span class="text-3xl mx-4"> {{ props.title }}</span>
      <span class="text-3xl mx-4"> {{ props.title }}</span>
      <span class="text-3xl mx-4"> {{ props.title }}</span>
      <span class="text-3xl mx-4"> {{ props.title }}</span>
    </div>

    <div class="absolute top-0 py-4 animate-marquee2 whitespace-nowrap">
      <span class="text-3xl mx-4"> {{ props.title }}</span>
      <span class="text-3xl mx-4"> {{ props.title }}</span>
      <span class="text-3xl mx-4"> {{ props.title }}</span>
      <span class="text-3xl mx-4"> {{ props.title }}</span>
      <span class="text-3xl mx-4"> {{ props.title }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>