<script setup lang="ts">
import { siteContent } from '~~/sitecontent'

const { shell } = siteContent.about
const swatches = Object.values(siteContent.colors)

const cursor = 'inline-block h-[1.15em] w-[0.6em] translate-y-[0.2em] bg-paper'
</script>

<template>
  <div class="min-w-0 border-2 border-sage p-4 font-body text-sm sm:p-6 sm:text-base">
    <p class="m-0 wrap-break-word">
      <span class="text-sage">{{ shell.user }}</span><span class="text-paper">@{{ shell.host }}</span>
      <span class="text-sage"> ~&gt; </span>
      <span class="text-paper">{{ shell.command }}</span>
    </p>

    <div>
      <div
        v-for="group in shell.groups"
        :key="group.title"
        class="relative mt-7 rounded-l-md border-y-2 border-l-2 border-sage py-3 pl-3 sm:pl-4"
      >
        <p class="absolute -top-[0.8em] left-3 m-0 bg-charcoal px-2 leading-normal text-sage">
          {{ group.title }}
        </p>
        <dl class="m-0 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
          <template v-for="row in group.rows" :key="row.key">
            <dt class="text-sage">{{ row.key }}</dt>
            <dd class="m-0 min-w-0 wrap-break-word text-paper">{{ row.value }}</dd>
          </template>
        </dl>
      </div>

      <!-- Blok warna seperti di bawah output fastfetch, diambil dari palette situs. -->
      <div class="mt-6 flex" aria-hidden="true">
        <span v-for="hex in swatches" :key="hex" class="h-5 w-8 sm:w-10" :style="{ background: hex }" />
      </div>

      <p class="m-0 mt-6">
        <span class="text-sage">{{ shell.user }}</span><span class="text-paper">@{{ shell.host }}</span>
        <span class="text-sage"> ~&gt; </span>
        <!-- Satu-satunya animasi di shell: kursor berkedip (berhenti kalau pengguna memilih kurangi animasi). -->
        <span :class="[cursor, 'animate-blink']" aria-hidden="true" />
      </p>
    </div>
  </div>
</template>
