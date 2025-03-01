<script setup lang="ts">
import Card from "~/components/Card.vue";
import IndexHero from "~/components/IndexHero.vue";

useSeoMeta({
  title: 'Rayhan Kimi | Main - Personal Website',
  ogTitle: 'Rayhan Kimi Nabiel Athallah personal page',
  description: 'Rayhan Kimi Nabiel Athallah - IoT Developer and Cloud Enthusiast',
  ogDescription: 'Rayhan Kimi Nabiel Athallah - IoT Developer and Cloud Enthusiast. Electronic Engineering Udayana University Student, passionate with cross-learning and exploring new things.',
  ogImage: '/logo.png',
  ogUrl: 'https://rayhank.com',
  robots: 'index, follow',
})
</script>

<template>
  <div class="flex w-full flex-col justify-center items-center py-2 px-6">

    <IndexHero />


    <div class="flex flex-col md:flex-row justify-center mt-6 ">
      <div
          data-aos="fade-left"
          class="flex flex-col w-full md:w-4/5 p-4 my-4 space-y-4 md:justify-center bg-[#F5ECD5] p-5 text-[#3d3d3d]  border-2 border-black shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_0.8)]"
      >
        <div class="flex flex-col md:flex-row">
          <div class="flex flex-col md:w-4/5">
            <h3 class="text-lg md:text-3xl font-semibold my-3"> More About Me</h3>
            <hr/>
            <p class="text-md md:text-2xl my-3">
              for short call me rayhank, i was born at denpasar 25th july 2003. i have big interest in computer
              since i was child and wondering how it works. increasing trend in automation and cloud drives me to
              further my knowledge in the field of IoT, concept of everything can be controlled and monitored via internet.
            </p>
            <p class="text-md md:text-2xl font-semibold"> education history :</p>
            <ul>
              <li class="text-md md:text-2xl "> SMP Muhammadiyah 2 Denpasar (2015 - 2018)</li>
              <li class="text-md md:text-2xl "> SMA Negeri 1 Kuta (2018 - 2021)</li>
              <li class="text-md md:text-2xl "> Universitas Udayana (2021 - now) </li>
            </ul>
          </div>

          <div
              class="flex flex-col w-full md:w-1/2 p-4 m-2  mx-auto">

            <figure data-aos="fade-top" class="mb-4 inline-block md:max-w-lg mx-auto  ">
              <img
                  src="/rayhan.jpg"
                  class="mb-4  w-[80%]  mx-auto border-2 border-black bg-white shadow-[8px_8px_0px_rgba(0,0,0,1)]"
                  alt="indexgif"/>
              <figcaption class="text-md text-neutral-600 mx-auto">
                <p></p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row justify-center mt-6 ">
      <div
          data-aos="fade-right"
          class="flex flex-col w-full md:w-4/5 p-4 my-4 space-y-4 md:justify-center bg-[#F5ECD5] p-4 text-[#3d3d3d]  border-2 border-black shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_0.8)]"
      >
        <div class="flex flex-col md:flex-row">
          <div
              class="flex flex-col w-full md:w-1/2 p-4 m-2  mx-auto">

            <figure data-aos="fade-top" class="mb-4 inline-block md:max-w-lg mx-auto  ">
              <img
                  src="/logo.png"
                  class="mb-4  w-[80%]  border-2 border-black bg-white shadow-[8px_8px_0px_rgba(0,0,0,1)]"
                  alt="indexgif"/>
              <figcaption class="text-md text-neutral-600 mx-auto">
                <p></p>
              </figcaption>
            </figure>
          </div>
          <div class="flex flex-col">
            <h3 class="text-2xl md:text-3xl font-semibold my-3"> My Capability</h3>
            <hr/>
            <p class="text-xl md:text-2xl my-3"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              cupiditate, delectus, ea ipsam maxime nisi porro quae quasi quisquam sequi veniam veritatis? Excepturi
              laborum maiores maxime optio quam sint totam?</p>
          </div>


        </div>
      </div>
    </div>
  </div>
  <Marquee :title="`© ${new Date().getFullYear()} Rayhan Kimi `"
           class="shadow-[8px_8px_0px_rgba(0,0,0,1)] mb-12"/>
</template>


<style scoped>

</style>
