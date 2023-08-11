<script setup lang="ts">
import { NLoadingBarProvider} from 'naive-ui'
</script>

<template>
  <n-loading-bar-provider>
    <router-view></router-view>
  </n-loading-bar-provider>
</template>

<style scoped>
</style>
