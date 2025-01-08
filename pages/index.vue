<script setup lang="ts">
import Card from "~/components/Card.vue";
</script>

<template>
  <div class="flex w-full justify-center items-center py-6 px-6">
    <!-- Gunakan flex-col pada mobile, flex-row di layar md ke atas -->
    <div class="flex flex-col md:flex-row justify-center ">
      <!-- Card 1 -->
      <div class="flex flex-col w-full md:w-1/3 p-4 m-2 space-y-4 ">

        <figure class="mb-4 inline-block max-w-sm md:max-w-lg mx-auto">
          <img
              width=""
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTA4YmM5dXpmOTJlN2NnZzFqOGowNnBnY3lwcmlyMXRhNG1uYXdtaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3ohjUOUjEK1TXCQRva/giphy.gif"
              class="mb-4  w-full rounded-lg shadow-lg"
              alt="9/11"/>
          <figcaption class="text-md text-neutral-600">
            Picture of twin tower before crash
          </figcaption>
        </figure>

      </div> <!-- End of Card 1 -->

      <div
          class="flex flex-col w-full md:w-2/3 p-4 my-4 space-y-4 md:justify-center bg-[#F5ECD5] p-5 text-[#3d3d3d] rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)]"
      >
        <h1 class="text-4xl xl:text-5xl font-semibold mb-4">
          Hello! , I'm Rayhank! (Rayhan Kimi)
        </h1>

        <p class="text-2xl xl:text-3xl mb-6">
          I'm Electrical Engineer student at Udayana University,
          <br/>
          an IoT Engineer. that loves to connect everything into cloud!
        </p>

        <!-- Container untuk semua button -->
        <div class="flex flex-wrap items-center gap-4">
          <!-- Button 1 -->
          <button class="rounded-md bg-black">
      <span
          class="block -translate-x-2 -translate-y-2 rounded-md border-2 border-black text-white bg-[#578E7E] p-3 text-xl hover:-translate-y-3
        active:translate-x-0 active:translate-y-0 transition-all"
      >
        Check my skill
      </span>
          </button>

          <!-- Button 2 -->
          <button class="rounded-md bg-black">
      <span
          class="block -translate-x-2 -translate-y-2 rounded-md border-2 border-black text-white bg-[#578E7E] p-3 text-xl hover:-translate-y-3
        active:translate-x-0 active:translate-y-0 transition-all"
      >
        Also my projects
      </span>
          </button>

          <!-- Button 3 -->
          <button class="rounded-md bg-black">
      <span
          class="block -translate-x-2 -translate-y-2 rounded-md border-2 border-black text-white bg-[#578E7E] p-3 text-xl hover:-translate-y-3
        active:translate-x-0 active:translate-y-0 transition-all"
      >
        perhaps, contact?
      </span>
          </button>
        </div>
      </div>


    </div>
  </div>
</template>


<style scoped>

</style>
