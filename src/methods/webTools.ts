// 生成随机颜色的函数
export function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


import * as dayjs from 'dayjs'
import * as isLeapYear from 'dayjs/plugin/isLeapYear' // 导入插件
import 'dayjs/locale/zh-cn' // 导入本地化语言
export function getToday() {
    dayjs.extend(isLeapYear) // 使用插件
    dayjs.locale('zh-cn') // 使用本地化语言
    const formattedDate = dayjs().format('M月D日 周dd HH:mm');
    return formattedDate
}