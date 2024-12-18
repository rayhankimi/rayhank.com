<script setup lang="ts">
import Card from "~/components/Card.vue";
</script>

<template>
  <div class="container">
    <div class="flex flex-col-reverse md:flex-row">
      <!-- LeftSection -->
      <div class="left-section w-full md:w-3/5 px-5 md:px-8">
        <div class="space-y-4">
          <Card />
          <Card />
        </div>
      </div>

      <!-- RightSection -->
      <div class="right-section w-full md:w-2/5 p-8 md:px-8">
        <p class="text-left text-lg font-bold"> Under Construction!</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  min-height: calc(100vh - 64px);
}
</style>
