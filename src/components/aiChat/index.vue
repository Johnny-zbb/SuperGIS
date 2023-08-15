
<template>
    <transition enter-active-class="animate__animated animate__zoomIn animate__fast"
        leave-active-class="animate__animated animate__fadeOut animate__fast">
        <MacWindow @close="closeDialog" position="middle" title="">
            <template #leftDiv>
                <n-button color="#8a2be2" size="tiny" style="width: 100%;margin-top: 10px;">
                    新增对话
                </n-button>
                <div class="whiteDiv" v-for="(item, index) in textList">
                    <n-icon size="20" color="white" :component="item.icon" />
                    <span>{{ item.text }}</span>
                </div>
            </template>

            <template #rightDiv>
                <n-row gutter="12">
                    <n-col :span="24">
                        <n-space justify="center">
                            <div>AIChat 3.0</div>
                        </n-space>
                    </n-col>
                    <div style="position: absolute;right: 12px;"><n-icon size="20" color="black" :component="MdShareAlt" />
                    </div>
                </n-row>
                <div class="chatContent" ref="chatContent"  v-scrollBottom>
                    <div :class="[item.type]" v-for="(item, index) in textArea">
                        <n-icon size="20" color="white" :component="item.icon" />
                        <span>{{ item.html }}</span>
                    </div>
                </div>
                <div class="chatDiv">
                    <n-input round placeholder="搜索" v-model:value="chatTxt" @keydown.enter="chat">
                        <template #suffix>
                            <n-icon :component="MdFlash" />
                        </template>
                    </n-input>
                </div>
            </template>
        </MacWindow>
    </transition>
</template>
  
<script setup>
import { NIcon, NButton, NRow, NCol, NSpace, NInput, } from 'naive-ui';
import { IosChatboxes, MdShareAlt, MdFlash } from '@vicons/ionicons4'
import {useHomeStore} from '@/store/home.ts'
import MacWindow from '@/components/macOS/window.vue';
import { reactive, ref } from 'vue'
const homeStore = useHomeStore()
let closeDialog = function () {
    homeStore.aiChatVis(false)
}
const chatContent = ref()
let chatTxt = ref('')
let textList = ref([
    {
        icon: IosChatboxes,
        text: 'JS捡石头问题，要求时间',
        html: '',
    },
])
let textArea = reactive([
    { type: 'reply', html: 'JS捡石头问题，要求时间' },
    { type: 'chat', html: 'JS捡石头问题，要求时间' },
    { type: 'reply', html: 'JS捡石头问题，要求时间' },
    { type: 'reply', html: 'JS捡石头问题，要求时间JS捡石头问题，要求时间JS捡石头问题，要求时间JS捡石头问题，要求时间JS捡石头问题，要求时间JS捡石头问题，要求时间' },
    { type: 'chat', html: 'JS捡石头问题，要求时间' },
    { type: 'chat', html: 'JS捡石头问题，要求时间' },
    { type: 'reply', html: 'JS捡石头问题，要求时间JS捡石头问题，要求时间JS捡石头问题，要求时间JS捡石头问题，要求时间JS捡石头问题，要求时间JS捡石头问题，要求时间' },
    { type: 'reply', html: 'JS捡石头问题，要求时间JS捡石头问题，要求时间JS捡石头问题，要求时间JS捡石头问题，要求时间JS捡石头问题，要求时间JS捡石头问题，要求时间' },
    { type: 'reply', html: 'JS捡石头问题，要求时间JS捡石头问题，要求时间JS捡石头问题，要求时间JS捡石头问题，要求时间JS捡石头问题，要求时间JS捡石头问题，要求时间' },
])
let chat = function(){
    let string =chatTxt.value
    textArea.push({ type: 'chat', html: string })
    chatContent.value.scrollTop = chatContent.value.scrollHeight;
}
</script>

<style lang="scss" scoped>
.whiteDiv {
    background-color: #343541;
    height: 35px;
    border-radius: 4px;
    margin-top: 10px;
    color: white;
    display: flex;
    align-items: center;
    padding: 0px 5px;
    cursor: pointer;

    span {
        margin-left: 5px;
        font-size: .5rem;
    }
}

.whiteDiv:hover {
    background-color: #5259ad;
}

.chatContent {
    width: 450px;
    height: calc(100% - 60px);
    overflow-y: scroll;

    .chat {
        max-height: 600px;
        background-color: rgb(132, 123, 177);
        border-radius: 8px;
        margin: 10px 10px 10px 0px;
        padding: 10px 12px;

    }

    .reply {
        max-height: 600px;
        background-color: #818181;
        border-radius: 8px;
        margin: 10px 10px 10px 0px;
        padding: 10px 12px;
        color: white;
    }
}

.chatDiv {
    width: 450px;
    height: 45px;
    display: flex;
    align-items: center;
    // background-color: rgba(255, 255, 255, 0.47);
    position: absolute;
    bottom: 0px;
}

::-webkit-scrollbar {
    background-color: transparent;
    border-radius: 10px;
    width: 8px;
    /* 添加圆角 */
}

/* Webkit 浏览器滚动条轨道 */
::-webkit-scrollbar-track {
    background-color: transparent;
}

/* Webkit 浏览器滚动条滑块 */
::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 10px;
    /* 添加圆角 */
}

/* Webkit 浏览器滚动条滑块悬停效果 */
::-webkit-scrollbar-thumb:hover {
    background-color: #aaa;
}
</style>