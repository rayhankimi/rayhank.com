<template>
  <div class="relative min-h-screen">
    <!-- NAVBAR -->
    <NavBar/>

    <!-- WRAPPER UTAMA -->
    <div class="pt-[84px] h-screen box-border flex flex-col">

      <div class="w-full overflow-auto">
        <Marquee title="rayhan kimi nabiel athallah" />
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
