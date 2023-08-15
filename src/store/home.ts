// stores/counter.js
import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', {
  state: () => {
    return {
      navigatorVisiable: false,
      systemInfoVisiable: true,
      mapLayerVisiable: false,
      aiChatVisiable: false,

    }
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    navigatorVis(params: boolean) {
      this.navigatorVisiable = params
    },
    systemInfoVis(params: boolean) {
      this.systemInfoVisiable = params
    },
    mapLaterVis(params: boolean) {
      this.mapLayerVisiable = params
    },
    aiChatVis(params: boolean) {
      this.aiChatVisiable = params
    },
  },
})