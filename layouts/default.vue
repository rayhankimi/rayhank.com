<template>
  <div class="relative min-h-screen">
    <!-- NAVBAR -->
    <NavBar/>

    <!-- WRAPPER UTAMA -->
    <div class="pt-[84px] h-screen box-border flex flex-col">

      <div class="w-full overflow-auto">
        <Marquee title="rayhan kimi nabiel athallah" />
        <slot/>
        <Marquee title="< index page >" class="shadow-[8px_8px_0px_rgba(0,0,0,1)] mb-12" />
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
