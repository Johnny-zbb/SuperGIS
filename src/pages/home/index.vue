<template>
    <HeaderVue />
    <BackVue />
    <DockVue />
    <transition enter-active-class="animate__animated animate__slideInLeft animate__fast"
     leave-active-class="animate__animated animate__fadeOut animate__fast">
        <NavigationVue v-show="homeStore.navigatorVisiable" />
    </transition>
    <transition enter-active-class="animate__animated animate__zoomIn animate__fast"
     leave-active-class="animate__animated animate__fadeOut animate__fast">
    <SystemInfoVue v-show="homeStore.systemInfoVisiable" />
    </transition>

</template>

<script setup>
import animate from "animate.css";
import BackVue from '@/components/home/Back.vue'
import DockVue from '@/components/home/Dock.vue'
import HeaderVue from '@/components/home/Header.vue'
import NavigationVue from '@/components/navigation/index.vue';
import SystemInfoVue from '@/components/home/SystemInfo.vue'
import { useHomeStore } from '@/store/home.ts'
const homeStore = useHomeStore()
</script>