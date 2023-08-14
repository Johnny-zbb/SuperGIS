<template>
    <div class="top">
        <div class="systemName">
            SuperGIS
        </div>
        <div class="icon">
            <n-icon size="18" color="white" :component="IosCalendar" />
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
            <span style="cursor: default;">8月14日 星期一 18:00</span>
        </div>
    </div>
</template>

<script setup>
import { IosCalendar ,IosClock,IosCloudy,IosSettings,IosSwitch} from '@vicons/ionicons4'
import { NIcon } from 'naive-ui'

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