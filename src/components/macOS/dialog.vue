<template>
    <div :class="[baseClass, position]">
        <div class="mac-dialog-header">
            <slot name="header">
                <!-- 默认的标题 -->
                <h2>{{ title }}</h2>
            </slot>
            <div class="optionBtn" @mouseenter="showBtnIcon = true" @mouseleave="showBtnIcon = false">
                <div class="btn green">
                    <n-icon v-show="showBtnIcon" size="15" color="black" :component="IosBuild" />
                </div>
                <div class="btn yellow">
                    <n-icon v-show="showBtnIcon" size="15" color="black" :component="MdRemove" />
                </div>
                <div class="btn red" @click="close">
                    <n-icon v-show="showBtnIcon" size="15" color="black" :component="IosClose" />
                </div>
            </div>
        </div>
        <div class="mac-dialog-content">
            <slot></slot>
        </div>
        <div class="mac-dialog-footer">
            <slot name="footer">
                <!-- 默认的按钮 -->
                <!-- <button @click="close">Close</button> -->
            </slot>
        </div>
    </div>
</template>
  
<script setup>
import { IosClose, MdRemove, IosBuild } from '@vicons/ionicons4'
import { NIcon } from 'naive-ui';
import { ref } from 'vue';
defineProps({
    title: String,
    position: String,
})
const baseClass = ref('mac-dialog')
const showBtnIcon = ref(false)
const emit = defineEmits(['close'])

let close = function () {
    // 触发关闭对话框的事件或方法
    emit('close');
}
</script>
  
<style scoped>
.mac-dialog {
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 480px;
    margin: 0 auto;
    padding: 10px 15px;
}

.left {
    position: fixed;
    left: 10px;
    top: 45px;
}

.right {
    position: fixed;
    right: 10px;
    top: 45px;
}

.middle {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

}

.mac-dialog-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.mac-dialog-footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}

.optionBtn {
    display: flex;

    .btn {
        width: 12px;
        height: 12px;
        background-color: black;
        border-radius: 50%;
        margin: 0px 2px;
        border: rgba(0, 0, 0, 0.16) 1px solid;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .red {
        background-color: #FF5F57;
    }

    .yellow {
        background-color: #FFBC2E;
    }

    .green {
        background-color: #2BC840;
    }
}

/* 可根据实际需要进行样式调整 */</style>
  