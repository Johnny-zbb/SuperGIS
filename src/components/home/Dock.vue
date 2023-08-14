<template>
    <div class="dock">
        <div class="dockApp" v-for="(item,index) in dockList" @click="item.function" @mouseenter="haddleMouseEnter" @mouseleave="haddleMouseLeave">
            <n-icon size="30" color="white" :component="item.icon" />
        </div>
    </div>
</template>

<script setup>
import { IosCalendar, IosClock, IosInformationCircle, IosSettings ,IosNavigate} from '@vicons/ionicons4'
import { NIcon } from 'naive-ui'
import anime from 'animejs'
import { reactive } from 'vue';
const dockList = reactive([
{
        icon:IosInformationCircle,
        name:'关于',
        function:()=>{alert('hello!')},
    },
    {
        icon:IosSettings,
        name:'设置',
        function:()=>{alert('hello!')},
    },
    {
        icon:IosNavigate,
        name:'导航',
        function:()=>{alert('hello!')},
    },
])
const haddleMouseEnter = (e) => {
    console.log('haddleMouseEnter',e)
    anime({
        targets: e.target,
        marginLeft: 10,
        marginRight: 10,
        scale: 1.4,
        duration: 600
    });
}
const haddleMouseLeave = (e) => {
    console.log('haddleMouseLeave',e)
    anime({
        targets: e.target,
        scale: 1,
        marginLeft: 5,
        marginRight: 5,
        duration: 600
    });
}

</script>


<style lang="scss" scoped>
.dock {
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 80vw;
    max-height: 60px;
    background-color: rgba(255, 255, 255, 0.5);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    border-radius: 10px;
    padding: 5px;
    display: flex;
    height: auto;
}



.dockApp {
    width: 35px;
    height: 35px;
    border-radius: 5%;
    background-color: rgba(26, 29, 29, 0.521);
    border-radius: 10px;
    margin: 4px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;

}
</style>