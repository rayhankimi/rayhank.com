<script setup lang="ts">
import { siteContent } from '~~/sitecontent'

const { footer, contact } = siteContent
const year = new Date().getFullYear()
</script>

<template>
  <footer aria-labelledby="footer-title">
    <!-- Bagian teks: latar polos, jadi kontras teks tidak bergantung pada foto. Padding sama dengan section lain. -->
    <div class="p-3 pb-0 sm:p-6 sm:pb-0 lg:p-10 lg:pb-0">
      <div class="mx-auto max-w-[1600px] p-6 pb-0 sm:p-10 sm:pb-0 lg:p-14 lg:pb-0">
        <h2 id="footer-title" class="m-0 max-w-[16ch] font-title text-[clamp(2.5rem,7vw,6rem)] leading-[1.05] font-extrabold text-paper">
          {{ footer.title }}
        </h2>
        <p class="m-0 mt-6 max-w-[60ch] text-base leading-relaxed font-light text-paper sm:text-lg">
          {{ footer.text }}
        </p>
        <ul class="m-0 mt-8 flex list-none flex-wrap gap-3 p-0">
          <li v-for="link in contact.links" :key="link.label" class="max-w-full">
            <MdLink :label="link.label" :detail="link.detail" :href="link.href" :icon="link.icon" />
          </li>
        </ul>
      </div>
    </div>

    <!-- Foto: tinggi mengikuti rasio foto (4:3) supaya tidak terpotong berlebihan, dibatasi minimal 320px dan maksimal setinggi layar.
         Bagian atasnya ditutup gradasi dari warna latar ke transparan, jadi foto muncul perlahan. -->
    <div class="relative aspect-4/3 max-h-svh min-h-80 w-full overflow-hidden">
      <img
        src="/footer-1280.webp"
        srcset="/footer-1280.webp 1280w, /footer-2560.webp 2560w"
        sizes="100vw"
        width="1280"
        height="960"
        alt=""
        loading="lazy"
        decoding="async"
        class="absolute inset-0 size-full object-cover"
      >
      <div class="absolute inset-x-0 top-0 h-1/2 bg-linear-to-b sm:h-3/4 from-charcoal via-charcoal/60 via-40% to-transparent" aria-hidden="true" />
      <!-- Hak cipta (kiri) dan lokasi foto (kanan) di atas potongan kertas, supaya tetap terbaca di bagian foto yang terang. -->
      <div class="absolute inset-x-0 bottom-6 px-3 sm:px-6 lg:bottom-10 lg:px-10">
        <div class="mx-auto flex max-w-[1600px] flex-wrap items-end justify-between gap-3 px-6 text-sm sm:px-10 sm:text-base lg:px-14">
          <p class="m-0 inline-block -rotate-1 bg-paper px-3 py-1 text-ink">
            © {{ year }} {{ footer.owner }}
          </p>
          <p class="m-0 ml-auto inline-flex rotate-1 items-center gap-1.5 bg-paper px-3 py-1 text-ink">
            <Icon name="mdi:map-marker-outline" class="size-4 shrink-0" aria-hidden="true" />
            <span class="sr-only">{{ footer.photoLocationLabel }}</span>
            {{ footer.photoLocation }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
