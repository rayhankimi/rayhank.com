<script setup lang="ts">
import { siteContent } from '~~/sitecontent'

const { contact } = siteContent
</script>

<template>
  <!-- Tampil seperti output perintah `tree`. Garis cabangnya digambar dengan border (CSS), bukan karakter teks. -->
  <section aria-labelledby="contact-title" class="w-full max-w-lg border-2 border-sage p-4 font-body text-base sm:p-8 sm:text-lg lg:p-6 xl:p-8">
    <h2 id="contact-title" class="m-0 font-title text-2xl font-bold text-paper after:font-body after:font-normal after:text-sage after:content-['/'] sm:text-3xl">
      {{ contact.title }}
    </h2>
    <ul class="m-0 mt-4 list-none p-0">
      <li
        v-for="link in contact.links"
        :key="link.label"
        class="relative py-2 pl-6 sm:pl-10 before:absolute before:top-0 before:left-0 before:h-full before:border-l-2 before:border-sage last:before:h-1/2 after:absolute after:top-1/2 after:left-0 after:w-4 after:border-t-2 sm:after:w-8 after:border-sage"
      >
        <MdLink :label="link.label" :detail="link.detail" :href="link.href" :icon="link.icon" />
      </li>
    </ul>
  </section>
</template>
