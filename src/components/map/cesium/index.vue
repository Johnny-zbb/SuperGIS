<script setup>
import { onMounted, ref ,provide} from 'vue'
import * as Cesium from 'cesium'

//cesium初始化必须写在mounted生命周期里面，否则会报错"Element with id "cesiumContainer" does not exist in the document."
onMounted(() => {
     const viewer = new Cesium.Viewer('cesiumContainer', {
        animation: false, //是否创建动画小器件，左下角仪表
        baseLayerPicker: false, //是否显示图层选择器
        fullscreenButton: false, //是否显示全屏按钮
        geocoder: false, //是否显示geocoder小器件，右上角查询按钮
        homeButton: false, //是否显示Home按钮
        infoBox: false, //是否显示信息框
        sceneModePicker: false, //是否显示3D/2D选择器
        selectionIndicator: false, //是否显示选取指示器组件
        timeline: false, //是否显示时间轴
        sceneMode: Cesium.SceneMode.SCENE3D, //设定3维地图的默认场景模式:Cesium.SceneMode.SCENE2D、Cesium.SceneMode.SCENE3D、Cesium.SceneMode.MORPHING
        navigationHelpButton: false, //是否显示右上角的帮助按钮
        scene3DOnly: true, //如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
        navigationInstructionsInitiallyVisible: false,
        showRenderLoopErrors: false, //是否显示渲染错误
        //设置背景透明
        orderIndependentTranslucency: false,
        contextOptions: {
            webgl: {
                alpha: true
            }
        },
    })
    //Enable lighting based on the sun position
    viewer.scene.globe.enableLighting = true;

    //Enable depth testing so things behind the terrain disappear.
    // 关闭可以解决点半圆显示，但是可能导致底下的东西展现
    viewer.scene.globe.depthTestAgainstTerrain = false;

    viewer._cesiumWidget._creditContainer.style.display = "none"; //隐藏图标
    viewer._container.style.cursor = "default";

    const TianDikey  = ''
    viewer.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
        url: "http://t{s}.tianditu.gov.cn/ibo_w/wmts?tk=" + TianDikey,
        layer: "ibo",
        style: "default",
        tileMatrixSetID: "w",
        format: "tiles",
        maximumLevel: 18,
        subdomains: ['0', '1', '2', '3', '4', '5', '6', '7']
    }))
    viewer.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
        url: "http://t0.tianditu.gov.cn/cva_w/wmts?tk=" + TianDikey,
        layer: "cva",
        style: "default",
        tileMatrixSetID: "w",
        format: "tiles",
        maximumLevel: 18
    }))
    window.viewer = viewer
})
</script>

<template>
    <div id="cesiumContainer"></div>
</template>


<style scoped>
#cesiumContainer {
    width: 100vw;
    height: 100vh;
}
</style>
