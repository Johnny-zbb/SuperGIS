<template>
    <HeaderVue />
    <BackVue />
    <DockVue />

    <NavigationVue v-show="homeStore.navigatorVisiable" />
    <SystemInfoVue v-show="homeStore.systemInfoVisiable" />
    <AiChatVue v-show="homeStore.aiChatVisiable" />
</template>

<script setup>
import animate from "animate.css";
import BackVue from '@/components/home/Back.vue'
import DockVue from '@/components/home/Dock.vue'
import HeaderVue from '@/components/home/Header.vue'
import NavigationVue from '@/components/navigation/index.vue';
import SystemInfoVue from '@/components/home/SystemInfo.vue'
import AiChatVue from '@/components/aiChat/index.vue'

import { useHomeStore } from '@/store/home.ts'
const homeStore = useHomeStore()
</script>