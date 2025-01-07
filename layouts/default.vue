<template>
  <div class="relative min-h-screen">
    <!-- NAVBAR -->
    <NavBar/>

    <!-- WRAPPER UTAMA -->
    <div class="pt-[86px] h-screen box-border flex flex-col">

      <div class="w-full overflow-auto">
        <Marquee title="njirrrr textnya gerak cok"/>
        <slot/>
        <Marquee class= "my-4" title="from drf_spectacular.utils import extend_schema, OpenApiParameter
from rest_framework import (
    viewsets,
    status,
)
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authentication import TokenAuthentication

from core.models import (
    IoTDevice,
    DeviceValue,
)
from iotdevice import serializers
"/>
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
