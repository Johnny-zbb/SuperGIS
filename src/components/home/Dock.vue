<template>
    <div class="dock">
        <div class="dockApp" v-for="(item, index) in dockList" @click="item.function" @mouseenter="haddleMouseEnter"
            @mouseleave="haddleMouseLeave">
            <n-icon size="30" :color="white" :component="item.icon" />
        </div>
    </div>
</template>

<script setup>
import { IosCalendar, IosClock, IosInformationCircle, IosSettings, IosNavigate, IosApps, IosChatboxes, } from '@vicons/ionicons4'
import { MapMarkedAlt } from '@vicons/fa'
import { NIcon } from 'naive-ui'
import anime from 'animejs'
import { reactive, inject } from 'vue';
import { useHomeStore } from '@/store/home.ts'
import * as Cesium from 'cesium'
const homeStore = useHomeStore()

const dockList = reactive([
    {
        icon: IosInformationCircle,
        name: '关于',
        function: () => {
            homeStore.systemInfoVis(!homeStore.systemInfoVisiable)
        },
    },
    {
        icon: IosSettings,
        name: '设置',
        function: () => { alert('hello!') },
    },
    {
        icon: IosNavigate,
        name: '导航',
        function: () => {
            homeStore.navigatorVis(!homeStore.navigatorVisiable)
        },
    },
    {
        icon: IosApps,
        name: '图层',
        function: () => {
            homeStore.mapLaterVis(!homeStore.mapLayerVisiable)
        },
    },
    {
        icon: MapMarkedAlt,
        name: '定位',
        function: () => {
            console.log(window.viewer)
            // 检查浏览器是否支持 Geolocation API
            if ("geolocation" in navigator) {
                // 请求用户权限
                navigator.geolocation.getCurrentPosition(
                    position => {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

                        // 在这里可以将坐标用于其他操作，如显示在地图上等
                        // 设置自定义图标的 URL
                        const iconUrl = '@vicons/ionicons4/IosClock.svg';

                        // 创建一个带有自定义图标的点实体
                        const pointEntity = viewer.entities.add({
                        position: Cesium.Cartesian3.fromDegrees(longitude, latitude),
                        billboard: {
                            image: iconUrl,
                            width: 30,
                            height: 30,
                        },
                        });

                        // 设置视图中心为点的位置
                        viewer.camera.flyTo({
                        destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, 1000),
                        orientation: {
                            heading: Cesium.Math.toRadians(0),
                            pitch: Cesium.Math.toRadians(-45),
                            roll: 0,
                        },
                        duration: 2,
                        });
                    },
                    error => {
                        console.error("Error getting user's location:", error);
                    }
                );
            } else {
                console.log("Geolocation is not available in this browser.");
            }

        },
    },
    {
        icon: IosChatboxes,
        name: 'AiChat',
        function: () => {
            homeStore.aiChatVis(!homeStore.aiChatVisiable)
        },
    },
])
const haddleMouseEnter = (e) => {
    anime({
        targets: e.target,
        marginLeft: 10,
        marginRight: 10,
        scale: 1.4,
        duration: 600
    });
}
const haddleMouseLeave = (e) => {
    anime({
        targets: e.target,
        scale: 1,
        marginLeft: 5,
        marginRight: 5,
        duration: 600
    });
}
// 生成随机颜色的函数
function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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
    z-index: 999;
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