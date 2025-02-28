<script setup lang="ts">
import StacksCard from "~/components/StacksCard.vue";
import Card from "~/components/Card.vue";


useSeoMeta({
  title: 'Rayhank Stack',
  ogTitle: 'Rayhank Stack',
  description: 'Rayhan Kimi Nabiel Athallah tech stack',
  ogDescription: 'Rayhan Kimi Nabiel Athallah tech stack',
  ogImage: '/NDWScroll.png',
  ogUrl: 'https://rayhank.com/stacks',
})

</script>

<template>
  <div ref="target" class="flex w-full justify-center place-items-center flex-col  p-6">
    <Card data-aos="fade-zoom" title="Tech Stacks" image="/NDWScroll.png" description="technologies i mostly used in my projects." />

    <div class="flex flex-col md:flex-row ">
      <StacksCard
          data-aos="fade-up"
          title="Backend & IoT"
          description="I mostly use Django & FastAPI and sometimes Node-Red as a backend API to build my IoT projects. With the help of Dockerized Mosquitto as a broker, I am able to make a secure IoT protocol with low delay."
          :technologies="[
    { name: 'Django', icon: 'https://www.svgrepo.com/show/353657/django-icon.svg' },
    { name: 'FastAPI', icon: 'https://icon.icepanel.io/Technology/svg/FastAPI.svg' },
    { name: 'Mosquitto', icon: 'https://www.virtuozzo.com/company/blog/wp-content/uploads/2017/09/eclipse-mosquitto-logo.png' },
    { name: 'Node-Red', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Node-red-icon.png' }
    ]"/>

      <StacksCard
          data-aos="fade-up"
          title="Microcontroller Boards"
          description="ESP32 & STM32 are my favorite development board. i also use arduino and raspberry pi. to build my IoT projects i use platformio, STM32CUBEIDE, and ESP-IDF as my development environment."
          :technologies="[
    { name: 'Espressif', icon: 'https://static.cdnlogo.com/logos/e/41/espressif-systems.svg' },
    { name: 'STM32', icon: 'https://companieslogo.com/img/orig/STM-4f4a0bab.png?t=1720244494' },
    { name: 'Arduino', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/1200px-Arduino_Logo.svg.png' },
    { name: 'Raspberry Pi', icon: 'https://www.raspberrypi.com/app/uploads/2020/06/raspberrry_pi_logo.png'}
        ]"/>

      <StacksCard
          data-aos="fade-up"
          title="Frontend"
          description="i also capable to build website to support my IoT projects using vue and nuxt.  with help of vite and tailwindcss i able to make a fast and scalable website."
          :technologies="[
    { name: 'Vue', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' },
    { name: 'Nuxt', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg' },
    { name: 'TailwindCSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' }
    ]"/>
    </div> <!-- first row of stack card ---->

    <div class="flex flex-col md:flex-row">
      <StacksCard
          data-aos="fade-up"
          title="Database"
          description="i utilize mongodb, postgresql, mariadb, and influxdb for most of my projects. althought i did'nt have much experience with querying but i can utilizing ORM for each DB i ever used."
          :technologies="[
    { name: 'MongoDB', icon: 'https://www.svgrepo.com/show/331488/mongodb.svg' },
    { name: 'PostgreSQL', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/800px-Postgresql_elephant.svg.png' },
    { name: 'InfluxDB', icon: 'https://www.niagaramarketplace.com/media/catalog/product/cache/8ec2f9f1aafbe7f04b9376f56dd1d327/m/a/marketplace_icons_13_.png' },
    { name: 'MariaDB', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPoCbzVEn661DAd2DsRM-Ybx-CRCwKQ5StYw&s' }
          ]"
      />
      <StacksCard
          data-aos="fade-up"
          title="API & Others"
          description="i utilize some api and services to support my projects. i capable to build projects with firebase authentication, utilizing docker images, using dockerized grafana for quick dashboard page, and deploy my projects to vercel or AWS EC2."
          :technologies="[
    { name: 'Firebase', icon: 'https://img.icons8.com/color/512/google-firebase-console.png' },
    { name: 'Docker', icon: 'https://img.icons8.com/fluent/512/docker.png' },
    { name: 'Grafana', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Grafana_logo.svg/1200px-Grafana_logo.svg.png' },
    { name: 'Vercel', icon: 'https://static-00.iconduck.com/assets.00/vercel-icon-512x449-3422jidz.png' },
    { name: 'AWS EC2', icon: 'https://img.icons8.com/color/512/amazon-web-services.png' }
          ]"
      />
      <StacksCard
          data-aos="fade-up"
          title="Language"
          description="every language i ever used on my projects, which leftmost is the most used one and rightmost is the least used one."
          :technologies="[
    { name: 'Python', icon: 'https://www.cdnlogo.com/logos/p/3/python.svg' },
    { name: 'C', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png' },
    { name: 'JavaScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { name: 'Kotlin', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png' }
          ]"
      />
    </div>


  </div> <!--- end of each stack card ---->
  <Marquee title="<Stacks />" class="shadow-[8px_8px_0px_rgba(0,0,0,1)] mb-12"/>
</template>

<style scoped>

</style>