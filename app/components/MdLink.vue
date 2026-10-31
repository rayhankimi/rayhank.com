<script setup lang="ts">
// Tombol link bergaya markdown: [label](detail). Tanda kurung hanya tampilan (CSS), tidak ikut terbaca sebagai teks.
const props = defineProps<{
  label: string
  href: string
  detail?: string
  icon?: string
  download?: boolean
  // Tombol utama (merah), dipakai untuk CV.
  accent?: boolean
}>()

const isExternal = computed(() => /^https?:\/\//.test(props.href))
// Tanpa detail, tampilkan alamatnya tanpa https://, www., mailto:, atau garis miring di depan/belakang.
const shownDetail = computed(() =>
  props.detail || props.href.replace(/^(https?:\/\/(www\.)?|mailto:|\/)/, '').replace(/\/$/, ''),
)

// Detail dipecah setelah "@" supaya alamat email pindah baris di situ, bukan di tengah kata.
const detailParts = computed(() => shownDetail.value.split(/(?<=@)/))

const box = 'inline-flex min-h-11 max-w-full items-center gap-x-2.5 border-2 px-4 py-2 font-body no-underline'
const states = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper active:translate-y-px'
const styles = {
  // Ransom note: potongan merah sedikit miring, sama seperti potongan judul.
  accent: 'border-red bg-red px-5 py-3 font-semibold text-paper -rotate-1 hover:border-paper hover:bg-paper hover:text-red',
  normal: 'border-sage bg-sage text-ink hover:border-paper hover:bg-paper',
}
const brackets = "before:inline-block before:content-['['] after:inline-block after:content-[']']"
const parens = "before:content-['('] after:content-[')']"
</script>

<template>
  <a
    v-if="href"
    :href="href"
    :download="download || undefined"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    :class="[box, states, accent ? styles.accent : styles.normal]"
  >
    <Icon v-if="icon" :name="icon" class="size-5 shrink-0" aria-hidden="true" />
    <span class="flex min-w-0 flex-wrap">
      <span :class="[brackets, 'whitespace-nowrap underline underline-offset-4']">{{ label }}</span>
      <span :class="[parens, 'min-w-0 font-light wrap-break-word']"><template v-for="(part, i) in detailParts" :key="i"><wbr v-if="i">{{ part }}</template></span>
    </span>
  </a>
  <!-- href kosong: latar slate dengan bingkai putus-putus, tidak bisa diklik sampai alamatnya diisi di sitecontent.ts. -->
  <span v-else aria-disabled="true" :class="[box, 'cursor-not-allowed border-dashed border-sage bg-slate text-paper']">
    <Icon v-if="icon" :name="icon" class="size-5 shrink-0" aria-hidden="true" />
    <span :class="brackets">{{ label }}</span>
  </span>
</template>
