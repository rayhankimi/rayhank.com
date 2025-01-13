<script setup lang="ts">

</script>

<template>
  <div class="flex w-full justify-center place-items-center p-6">
    <div class="flex flex-col p-6 bg-[#F5ECD5] justify-center text-[#3d3d3d] rounded-md border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
      <h1 class="text-3xl md:text-5xl text-center p-6 font-semibold"> Stacks </h1>
      <div>
        <p class="text-md md:text-lg text-center">
          here's some tech stack that i usually use
        </p>
        <p class="text-md md:text-lg text-center">
          strong believer that language and fw just a tool
          and the best things are creativity and holistic mindset that lies in one's mind
        </p>

        <!--- Div of List --->
        <div class="flex flex-row gap-8 md:gap-12 mx-6 mt-4 justify-center ">
          <div class="space-y-2 md:space-y-4">
            <ul class="list-disc list-inside">
              <li>Python</li>
              <li>Django Rest</li>
              <li>FastAPI</li>
              <li>Espressif</li>
            </ul>
          </div>
          <div class="space-y-2">
            <ul class="list-disc list-inside">
              <li>STM32</li>
              <li>Nuxt</li>
              <li>Vue</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
        </div><!--- End Div of List ---->
        <div class="flex flex-wrap gap-4 justify-center mt-6">
          <!-- Contoh logo, ganti src & alt sesuai kebutuhan -->
          <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
              alt="Python"
              class="h-12 w-12"
          />
          <img
              src="https://www.svgrepo.com/show/353657/django-icon.svg"
              alt="Django Rest"
              class="h-12 w-12"
          />
          <img
              src="https://icon.icepanel.io/Technology/svg/FastAPI.svg"
              alt="FastAPI"
              class="h-12 w-12"
          />
          <img
              src="https://static.cdnlogo.com/logos/e/41/espressif-systems.svg"
              alt="Espressif"
              class="h-12 w-12"
          />
          <img
              src="https://cdn.worldvectorlogo.com/logos/st-microelectronics.svg"
              alt="STM"
              class="h-12 w-12"
          />
          <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg"
              alt="Nuxt"
              class="h-12 w-12"
          />
          <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
              alt="Vue"
              class="h-12 w-12"
          />
          <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
              alt="TailwindCSS"
              class="h-12 w-12"
          />
        </div>
      </div>
      <button class="rounded-md bg-black mx-auto my-8 max-w-64 ">
      <span
          class="block -translate-x-2 -translate-y-2 rounded-md border-2 border-black text-white bg-[#578E7E] p-1.5 text-md md:text-xl hover:-translate-y-3
        active:translate-x-0 active:translate-y-0 transition-all"
      >
        <a href="/">
          Back to Home
        </a>
      </span>
      </button>
    </div>
  </div>
  <Marquee title="<Stacks />" class="shadow-[8px_8px_0px_rgba(0,0,0,1)] mb-12" />
</template>

<style scoped>

</style>