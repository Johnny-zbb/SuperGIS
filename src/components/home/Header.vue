<template>
    <div class="top">
        <div class="systemName">
            SuperGIS
        </div>
        <div class="icon" @click="handleClick">
            <n-icon size="18" color="white" :component="MdAddCircle" />
        </div>
        <div class="icon">
            <n-icon size="18" color="white" :component="IosClock" />
        </div>
        <div class="icon">
            <n-icon size="18" color="white" :component="IosCloudy" />
        </div>
        <div class="icon">
            <n-icon size="18" color="white" :component="IosSettings" />
        </div>
        <div class="icon">
            <span style="cursor: default;">{{ dateString || '8月14日 周一 18:00' }}</span>
        </div>
    </div>
    <n-popover :show="showPopoverRef" :x="xRef" :y="yRef" trigger="manual" :show-arrow="false">
        <template #header>
            <n-text strong depth="1">
                绘制工具
            </n-text>
        </template>
        <div style="
        /* width: 70px; */
        display: flex;
        justify-content: space-around;
        background-color: white;
        transform-origin: inherit;
      ">
            <n-button size="medium" secondary strong>绘制点<n-icon size="18" color="black" :component="IosPin" /></n-button>
            <n-button size="medium" secondary strong>绘制线<n-icon size="18" color="black"
                    :component="IosTrendingUp" /></n-button>
            <n-button size="medium" secondary strong>绘制面<n-icon size="18" color="black"
                    :component="MdCellular" /></n-button>
        </div>
    </n-popover>
</template>

<script setup>
import { MdAddCircle, IosClock, IosCloudy, IosSettings, IosSwitch, IosTrendingUp, IosPin, MdCellular } from '@vicons/ionicons4'
import { NIcon, NPopover, NButton } from 'naive-ui'
import { getToday } from '@/methods/webTools.ts'
import { onMounted, ref, onBeforeUnmount, } from 'vue'
let dateString = ref('')
let timer = null

const xRef = ref(0)
const yRef = ref(0)
const showPopoverRef = ref(false)

const handleClick = (e) => {
    console.log(e)
    if (showPopoverRef.value) {
        showPopoverRef.value = false
    } else {
        showPopoverRef.value = true
        xRef.value = e.clientX
        yRef.value = 30
    }
}

onMounted(() => {
    timer = setInterval(() => {
        dateString.value = getToday()
        console.log(dateString.value)
    }, 1000);
})
onBeforeUnmount(() => {
    clearInterval(timer)
})
</script>

<style lang="scss">
.top {
    width: 100vw;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.1);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    position: fixed;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index: 999;

    .systemName {
        position: absolute;
        font-weight: 600;
        left: 20px;
        cursor: default;
    }


    .icon {
        margin-left: 8px;
        margin-right: 8px;
        display: flex;
        align-items: center;
        cursor: default;
    }
}
</style>