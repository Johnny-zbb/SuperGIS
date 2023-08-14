<template lang="">
    <div class="bg">
        <CesiumVue/>
    </div>
</template>

<script setup>
import CesiumVue from "@/components/map/cesium/index.vue"
</script>
<style>
.bg {
    background-image: url("@/assets/bg.png");
    height: 100vh;
    width: 100%;
    z-index: 1;
}
</style>