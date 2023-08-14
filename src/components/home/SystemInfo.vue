
<template>
    <mac-dialog @close="closeDialog" position="middle">
        <template #header>
            系统说明
        </template>
        <p>您好，这里是GIS宇宙的开源GIS项目，从本科到硕士一直学习地理信息科学，对地图开发也更加深入了，因此想做一个开源项目，
            把自己之前所学都应用起来，很多系统都是基于管理后台的模版开发，没有美感，受到mac的启发，项目将借鉴mac的设计，
            从0带你实战开发一个三维地图项目！</p>
        <p>如果你想成为贡献者，请联系我：</p>
        <p>公众号：GIS宇宙</p>

    </mac-dialog>
</template>
  
<script setup>
import { NTimeline, NTimelineItem, NSelect, NIcon } from 'naive-ui';
import MacDialog from '@/components/macOS/dialog.vue';
import { ref, } from 'vue'
import { useHomeStore } from '@/store/home.ts'
const homeStore = useHomeStore()
let closeDialog = function () {
    homeStore.systemInfoVis(false)
}
//   onMounted(() => {
//     setTimeout(() => {
//         homeStore.systemInfoVis(true)
//     }, 3000);
//   }),
</script>