<script setup lang="ts">
import { siteContent } from '~~/sitecontent'

const { hero } = siteContent

// Dua kata terakhir digabung jadi satu potongan dan turun ke baris baru.
const words = hero.title.split(' ')
const leadWords = words.slice(0, -2)
const tailWords = words.slice(-2).join(' ')

// Ransom note: tiga gaya potongan kertas bergantian, miring statis tanpa animasi.
const scrapStyles = [
  'bg-paper text-ink -rotate-2',
  'bg-sage text-ink font-body font-normal rotate-[1.5deg]',
  'bg-slate text-paper -rotate-1',
]
const scrapClass = (i: number) =>
  `inline-block max-w-full px-[0.2em] wrap-anywhere ${scrapStyles[i % scrapStyles.length]}`
</script>

<template>
  <section class="flex min-h-svh p-3 sm:p-6 lg:p-10">
    <div class="mx-auto flex w-full max-w-[1600px] flex-col lg:flex-row">
      <!-- Intro: ukuran teks mengikuti lebar kolom ini sendiri (cqi), bukan lebar layar. -->
      <div class="@container flex flex-1 flex-col justify-center p-6 sm:p-10 lg:flex-none lg:basis-3/5 lg:p-14">
        <h1 class="m-0 font-title text-[clamp(2.25rem,12.5cqi,9rem)] leading-[1.25] font-extrabold text-sage">
          <template v-for="(word, i) in leadWords" :key="i">
            <span :class="scrapClass(i)">{{ word }}</span>{{ ' ' }}
          </template>
          <br v-if="leadWords.length">
          <span :class="scrapClass(leadWords.length)">{{ tailWords }}</span>
        </h1>
        <hr class="my-[clamp(1.5rem,4cqi,3rem)] w-full border-0">
        <p class="m-0 max-w-[60ch] text-[clamp(1rem,2.7cqi,1.5rem)] leading-relaxed font-light text-paper">
          {{ hero.intro }}
        </p>
        <MdLink
          :label="hero.cvButton.label"
          :href="hero.cvButton.href"
          :icon="hero.cvButton.icon"
          download
          accent
          class="mt-8 self-start text-base sm:text-lg"
        />
      </div>

      <!-- Kontak -->
      <div class="flex min-w-0 items-center justify-center p-6 pt-0 sm:p-10 sm:pt-0 lg:flex-1 lg:basis-2/5 lg:p-14 lg:pl-0">
        <ContactCard />
      </div>
    </div>
  </section>
</template>
