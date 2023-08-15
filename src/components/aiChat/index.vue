
<template>
    <transition enter-active-class="animate__animated animate__zoomIn animate__fast"
        leave-active-class="animate__animated animate__fadeOut animate__fast">
        <MacWindow @close="closeDialog" position="middle" title="AIChat">
        </MacWindow>
    </transition>
</template>
  
<script setup>
import { NTimeline, NTimelineItem, NSelect, NIcon } from 'naive-ui';
import MacWindow from '@/components/macOS/window.vue';
import { ref } from 'vue'
import { useHomeStore } from '@/store/home.ts'
const homeStore = useHomeStore()
let closeDialog = function () {
    homeStore.aiChatVis(false)
}


let value = ref(null)
let options = [
    {
        label: "shang hai road",
        value: 'song0',
        disabled: true
    },
    {
        label: "guang zhou road",
        value: 'song0',
    },]
</script>