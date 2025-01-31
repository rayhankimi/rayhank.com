<script setup lang="ts">

</script>

<template>
  <div class="flex w-full justify-center place-items-center flex-col  p-6">
    <!-- Card 1 -->
    <div class="flex flex-col w-full md:w-1/3 p-4 m-2  mx-auto">

      <figure class="mb-4 inline-block md:max-w-lg mx-auto ">
        <img
            src="/NDWScroll.png"
            class="mb-4  w-full"
            alt="indexgif"/>
        <figcaption class="text-md text-neutral-600 mx-auto">
          <h1 class="text-2xl p-2 font-semibold "> skill & tech stacks</h1>
        </figcaption>
      </figure>

    </div> <!-- End of Card 1 -->

    <div class="flex flex-col md:flex-row ">
      <div
          class="flex flex-col p-6 bg-[#F5ECD5] m-4 justify-center text-[#3d3d3d] rounded-md border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
        <h1 class="text-2xl md:text-3xl text-center p-6 font-semibold"> Backend & IoT </h1>
        <div>
          <p class="text-sm md:text-md text-center">
            i mostly use django & fastapi and sometime node-red as a backend API to build my IoT projects. <br/> with
            help
            of dockerized mosquitto as a broker i able to make secure IoT protocol with low delay.
          </p>
          <p class="text-md md:text-lg text-center">

          </p>

          <div class="flex flex-wrap gap-4 justify-center mt-6">
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
                src="https://www.virtuozzo.com/company/blog/wp-content/uploads/2017/09/eclipse-mosquitto-logo.png"
                alt="Mosquitto"
                class="h-12 w-12"
            />
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Node-red-icon.png"
                alt="Node-red"
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
          Related Projects (soon)
        </a>
      </span>
        </button>
      </div> <!--- end of second card ---->


      <div
          class="flex flex-col m-4 p-6 bg-[#F5ECD5] justify-center text-[#3d3d3d] rounded-md border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
        <h1 class="text-2xl md:text-3xl text-center p-6 font-semibold"> Microcontrollers </h1>
        <div>
          <p class="text-sm md:text-md text-center">
            ESP32 & STM32 are my favorite development board. i also use arduino and raspberry pi<br/> to build
            my IoT projects i use platformio, STM32CUBEIDE, and ESP-IDF as my development environment.
          </p>
          <p class="text-md md:text-lg text-center">

          </p>

          <div class="flex flex-wrap gap-4 justify-center mt-6">
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
                src="https://w7.pngwing.com/pngs/649/660/png-transparent-arduino-logo-thumbnail-tech-companies-thumbnail.png"
                alt="STM"
                class="h-12 w-12"
            />
            <img
                src="https://www.raspberrypi.com/app/uploads/2020/06/raspberrry_pi_logo.png"
                alt="STM"
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
          Related Projects (soon)
        </a>
      </span>
        </button>
      </div> <!--- end of third card ---->

      <div
          class="flex flex-col m-4 p-6 bg-[#F5ECD5] justify-center text-[#3d3d3d] rounded-md border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
        <h1 class="text-2xl md:text-3xl text-center p-6 font-semibold"> Frontend </h1>
        <div>
          <p class="text-sm md:text-md text-center">
            i also capable to build website to support my IoT projects using vue and nuxt<br/> with help of vite and
            tailwindcss i able to make a fast and scalable website.
          </p>
          <p class="text-md md:text-lg text-center">

          </p>

          <div class="flex flex-wrap gap-4 justify-center mt-6">
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
          Related Projects (soon)
        </a>
      </span>
        </button>
      </div> <!--- end of fourth card ---->

    </div> <!--- end of each stack card ---->
  </div>
  <Marquee title="<Stacks />" class="shadow-[8px_8px_0px_rgba(0,0,0,1)] mb-12"/>
</template>

<style scoped>

</style>