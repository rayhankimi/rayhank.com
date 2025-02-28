<template>
  <div class="relative min-h-screen">
    <!-- NAVBAR -->
    <NavBar/>

    <!-- WRAPPER UTAMA -->
    <div class="pt-[84px] h-auto box-border flex flex-col">

      <div class="w-full overflow-auto">
        <Marquee title="rayhan kimi nabiel athallah" class="mb-24" />
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import Marquee from "~/components/Marquee.vue";

export default defineComponent({
  components: {Marquee}
})

definePageMeta({
  favicon: "/favicon.ico",
})
</script>

<style scoped>


@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}


</style>
