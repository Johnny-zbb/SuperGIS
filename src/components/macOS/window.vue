<template>
    <div class="mac-window middle">
        <div class="left-pane">
            <!-- 左侧内容 -->
            <header style="display: flex;align-items: center;overflow: hidden;">
                <div class="optionBtn" @mouseenter="showBtnIcon = true" @mouseleave="showBtnIcon = false">
                    <div class="btn red" @click="close">
                        <n-icon v-show="showBtnIcon" size="15" color="black" :component="IosClose" />
                    </div>
                    <div class="btn green">
                        <n-icon v-show="showBtnIcon" size="15" color="black" :component="IosBuild" />
                    </div>
                </div>
                <!-- 默认的标题 -->
                <div>{{ title }}</div>
            </header>
            <slot name="leftDiv">
                
            </slot>
        </div>
        <div class="right-pane">
            <!-- 右侧内容 -->
            <slot name="rightDiv">
                
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
.mac-window {
    /* background-color: rgba(255, 255, 255, 0.7); */
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    min-width: 580px;
    max-width: 880px;
    min-height: 400px;
    max-height: 600px;
    margin: 0 auto;
    display: flex;
    align-items: stretch;
    /* 让左右两侧的子元素高度保持一致 */
    justify-content: center;
    /* 水平居中内容 */
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
    transform: translate(-50%, -50%);

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
    align-items: center;
    height: 15px;
    margin-right: 50px;
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



.left-pane {
    flex: 1;
    /* 均分左右两侧的宽度 */
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 8px 0 0 8px;
    background-color: #eff1f3c9;

}

.right-pane {
    flex: 2;
    /* 均分左右两侧的宽度 */
    padding: 10px 15px;
    border: 1px solid #ccc;
    background-color: #eff1f3f0;
    border-radius: 0 8px 8px 0px;
    box-shadow: -1px 0px 2px 0px #999;
}

.divider {
    width: 1px;
    background-color: #ccc;
}
</style>
  