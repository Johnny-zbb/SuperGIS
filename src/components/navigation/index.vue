
<template>
  <mac-dialog @close="closeDialog" position="left">
    <template #header>
      地图导航
    </template>
    <n-timeline>

      <n-timeline-item >
        <template #header>
          <n-select size="tiny" style="width: 200px;" v-model:value="value" :options="options" />
        </template>
      </n-timeline-item>

      <n-timeline-item  type="success">
        <template #header>
          <n-select size="tiny" style="width: 200px;" v-model:value="value" :options="options" />
        </template>
      </n-timeline-item>
      
    </n-timeline>
  </mac-dialog>
</template>

<script setup>
import { NTimeline, NTimelineItem, NSelect,NIcon } from 'naive-ui';
import MacDialog from '@/components/macOS/dialog.vue';
import { ref } from 'vue'
import { useHomeStore } from '@/store/home.ts'
const homeStore = useHomeStore()
let closeDialog = function () {
  homeStore.navigatorVis(false)
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