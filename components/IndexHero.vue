<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col min-h-[60vh] xl:min-h-[85%] md:flex-row justify-center items-center ">
    <!-- Card 1 -->
    <div>
      <div class="flex flex-col  md:flex-row">
        <div data-aos="fade-right" class="flex justify-center w-full md:w-1/3 p-2 m-2 mx-auto">
          <figure class="md:mb-4 inline-block md:max-w-lg mx-auto flex justify-center items-center">
            <img
                src="/profile.png"
                class="md:mb-4 mx-auto w-[45%] md:w-[80%]  border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]"
                alt="indexgif"/>

          </figure>

        </div> <!-- End of Card 1 -->

        <div
            data-aos="fade-left"
            class="flex flex-col w-full md:w-2/3 p-2 md:p-4 my-2 md:my-4 space-y-2 md:space-y-4 md:justify-center bg-[#F5ECD5] px-4  text-[#3d3d3d]  border-2 border-black shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_0.8)]"
        >
          <h1 class="text-2xl md:text-3xl xl:text-5xl my-2 font-semibold">
            Rayhan Kimi Nabiel Athallah
          </h1>
          <h2 class="text-sm md:text-lg xl:text-2xl">i'm electronic engineering student and an iot developer, </h2>
          <p class="text-sm md:text-lg xl:text-2xl ">
            and a long life learner enjoying the exploration of various fields of knowledge,
            that allows me to uncover diverse solutions to everyday challenges!
          </p>

          <!-- Container untuk semua button -->
          <div class="flex flex-wrap items-center gap-4 py-2 md:py-4">
            <!-- Button 1 -->
            <button class="rounded-md bg-black">
      <span
          class="block -translate-x-2 -translate-y-2 rounded-md border-2 border-black text-white bg-[#578E7E] p-1 md:p-1.5 text-md md:text-xl hover:-translate-y-3
        active:translate-x-0 active:translate-y-0 transition-all"
      >
        <a href="/stacks">
          stacks
        </a>
      </span>
            </button>

            <!-- Button 2 -->
            <button class="rounded-md bg-black">
      <span
          class="block -translate-x-2 -translate-y-2 rounded-md border-2 border-black text-white bg-[#578E7E] p-1 md:p-1.5 text-md md:text-xl hover:-translate-y-3
        active:translate-x-0 active:translate-y-0 transition-all"
      >
        <a href="/projects">
          projects
        </a>
      </span>
            </button>

            <!-- Button 3 -->
            <button class="rounded-md bg-black">
      <span
          class="block -translate-x-2 -translate-y-2 rounded-md border-2 border-black text-white bg-[#578E7E] p-1 md:p-1.5 text-md md:text-xl hover:-translate-y-3
        active:translate-x-0 active:translate-y-0 transition-all"
      >
        <a href="/contacts">
          contacts
        </a>
      </span>
            </button>
          </div>


          <div class="flex flex-wrap items-center gap-4 mt-2">

            <!-- LinkedIn -->
            <a
                href="https://www.linkedin.com/in/rayhan-kimi-nabiel-athallah-897721245/"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-md bg-black"
            >
  <span
      class="flex items-center gap-2 -translate-x-2 -translate-y-2
           rounded-md border-2 border-black text-white bg-[#578E7E]
           p-1.5 text-md md:text-xl hover:-translate-y-3
           active:translate-x-0 active:translate-y-0 transition-all"
  >
    <!-- Ikon SVG LinkedIn -->
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        viewBox="0 0 448 512"
        fill="currentColor"
    >
      <path
          d="M100.28 448H7.4V148h92.88zM53.79 108.1A53.8 53.8 0 11107.59 54
           a53.8 53.8 0 01-53.8 54.1zM447.9 448h-92.68V302.4c0-34.7-.7-79.3-48.26-79.3
           -48.31 0-55.72 37.7-55.72 76.6V448h-92.84V148h89.1v40.9h1.28c12.4-23.5
           42.6-48.26 87.8-48.26 94 0 111.2 61.9 111.2 142.3V448z"
      />
    </svg>
  </span>
            </a>

            <!-- Instagram -->
            <a href="https://www.instagram.com/rayhankimi/"
               target="_blank"
               rel="noopener noreferrer"
               class="rounded-md bg-black">
      <span
          class="flex items-center gap-2 -translate-x-2 -translate-y-2 rounded-md border-2 border-black text-white bg-[#578E7E] p-1.5 text-md md:text-xl hover:-translate-y-3
          active:translate-x-0 active:translate-y-0 transition-all"
      >
        <!-- Contoh ikon SVG Instagram -->
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 448 512"
            fill="currentColor"
        >
          <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255 287.7 141 224.1 141zm0 189.6a74.7 74.7 0 1174.7-74.7 74.8 74.8 0 01-74.7 74.7zm146.4-194.3a26.6 26.6 0 11-26.6-26.6 26.6 26.6 0 0126.6 26.6zM398.8 80H49.2A49.2 49.2 0 000 129.2v249.6A49.2 49.2 0 0049.2 428h349.6A49.2 49.2 0 00448 378.8V129.2A49.2 49.2 0 00398.8 80zM224.1 338.6a83.6 83.6 0 1183.6-83.6 83.7 83.7 0 01-83.6 83.6zm166.5-173.8a54 54 0 01-54 54h-16.2a54 54 0 01-54-54v-16.2a54 54 0 0154-54h16.2a54 54 0 0154 54z"
          />
        </svg>
      </span>
            </a>

            <!-- GitHub -->
            <a
                href="https://github.com/rayhankimi"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-md bg-black">
      <span
          class="flex items-center gap-2 -translate-x-2 -translate-y-2 rounded-md border-2 border-black text-white bg-[#578E7E] p-1.5 text-md md:text-xl hover:-translate-y-3
          active:translate-x-0 active:translate-y-0 transition-all"
      >
        <!-- Contoh ikon SVG GitHub -->
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 496 512"
            fill="currentColor"
        >
          <path
              d="M165.9 397.4c0 2-2.3 3.5-5.2 3-29-7-53.2-24.1-69.3-47.6-2.6-4.1-1-9.3 3.1-11.9 4.2-2.6 9.6-1 12.3 3.1 13.7 21.3 34.8 35.6 58.1 41.5 4.8 1.3 8.5 5.5 8.5 10.3zm89.5-37.4c-23.2 0-44.2-8.2-61.1-21.7-2.9-2.3-3.5-6.4-1.2-9.3 2.3-2.9 6.4-3.5 9.3-1.2 14.2 11.3 31.8 17.5 52.9 17.5 21.1 0 38.7-6.2 52.9-17.5 2.9-2.3 7-1.7 9.3 1.2 2.3 2.9 1.7 7-1.2 9.3-16.9 13.5-37.9 21.7-61.1 21.7zM496 256c0 114.7-78.8 211-186.3 236.2-3.4.6-4.7-1.5-4.7-3.3v-38.7c0-13.2-4.8-21.6-10.2-26 62.7-7 128.5-31.3 128.5-140.5 0-31.1-11-56.4-29-76.2 2.9-7.2 12.5-35.3-2.9-73.6 0 0-23.4-7.5-76.7 29-22.3-6.2-46.2-9.3-70-9.4-23.7.1-47.7 3.2-70 9.4-53.2-36.6-76.6-29-76.6-29-15.4 38.3-5.8 66.4-2.9 73.6-18 19.8-29 45.1-29 76.2 0 109.2 65.8 133.5 128.5 140.5-5.2 4.6-10 13-10 26v38.7c0 1.8-1.3 4-4.8 3.3C78.8 467 0 370.7 0 256 0 114.6 114.6 0 256 0s256 114.6 256 256z"
          />
        </svg>
      </span>
            </a>
          </div>

        </div> <!--- End of Card 2 --->
      </div>
      <Scroll/>
    </div>
  </div>
</template>

<style scoped>

</style>