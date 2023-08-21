import * as Cesium from 'cesium'
/**
 * 获取个人位置
 * @param {Cesium.viewer} viewer 
 */
export function getMyLocation(viewer: Cesium.Viewer,success:Function) {
    // 检查浏览器是否支持 Geolocation API
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position)
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

                const iconUrl = '@vicons/ionicons4/IosClock.svg';

                const pointEntity = viewer.entities.add({
                    position: Cesium.Cartesian3.fromDegrees(longitude, latitude),
                    point: {
                        color: Cesium.Color.SKYBLUE, // default: WHITE
                        pixelSize: 10, // default: 1
                        outlineColor: Cesium.Color.YELLOW, // default: BLACK
                        outlineWidth: 5, // default: 0
                    },
                });

                viewer.camera.flyTo({
                    destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, 1000),
                    orientation: {
                        heading: Cesium.Math.toRadians(0),
                        pitch: Cesium.Math.toRadians(-90),
                        roll: 0,
                    },
                    duration: 2,
                });
                success()
            },
            error => {
                console.error("Error getting user's location:", error);
            }
        );
    } else {
        console.log("Geolocation is not available in this browser.");
    }
}