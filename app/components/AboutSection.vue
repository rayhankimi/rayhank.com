<script setup lang="ts">
import { siteContent } from '~~/sitecontent'

const { about } = siteContent

// Judul box: font judul dengan garis miring sage di belakang, sama seperti "My Contact/".
const boxTitle = "m-0 font-title text-2xl font-bold text-paper after:font-body after:font-normal after:text-sage after:content-['/'] sm:text-3xl"
</script>

<template>
  <!-- Padding luar dan dalam sama dengan hero, supaya tepi kirinya sejajar. -->
  <section id="about" aria-labelledby="about-title" class="p-3 sm:p-6 lg:p-10">
    <div class="mx-auto max-w-[1600px] p-6 sm:p-10 lg:p-14">
      <h2 id="about-title" class="m-0 font-title text-[clamp(2rem,5vw,3.5rem)] leading-tight font-extrabold">
        <span class="inline-block -rotate-1 bg-paper px-[0.2em] text-ink">{{ about.title }}</span>
      </h2>

      <!-- Desktop: kiri 3/5 (dua box), kanan 2/5 (shell). Di bawah 1024px semua box bertumpuk. -->
      <div class="mt-10 grid gap-6 lg:grid-cols-5">
        <div class="flex min-w-0 flex-col gap-6 lg:col-span-3">
          <section aria-labelledby="about-intro-title" class="border-2 border-sage p-4 sm:p-8">
            <h3 id="about-intro-title" :class="boxTitle">{{ about.intro.title }}</h3>
            <p
              v-for="(paragraph, i) in about.intro.paragraphs"
              :key="i"
              class="m-0 mt-4 max-w-[70ch] text-base leading-relaxed font-light text-paper sm:text-lg"
            >
              {{ paragraph }}
            </p>
          </section>

          <section aria-labelledby="about-skills-title" class="border-2 border-sage p-4 sm:p-8">
            <h3 id="about-skills-title" :class="boxTitle">{{ about.skills.title }}</h3>
            <!-- Bukan tombol: bingkai slate tanpa isi, beda dengan tombol yang berlatar sage. -->
            <ul class="m-0 mt-5 flex list-none flex-wrap gap-3 p-0">
              <li
                v-for="skill in about.skills.items"
                :key="skill.label"
                class="inline-flex items-center gap-2 border-2 border-slate px-3 py-2 text-paper"
              >
                <Icon :name="skill.icon" class="size-5 shrink-0 text-sage" aria-hidden="true" />
                {{ skill.label }}
              </li>
            </ul>
          </section>
        </div>

        <FetchShell class="lg:col-span-2" />
      </div>
    </div>
  </section>
</template>
