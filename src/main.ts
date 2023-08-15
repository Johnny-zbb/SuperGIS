import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { createPinia } from "pinia"

const app = createApp(App)
app.use(router)
app.use(createPinia())
//自定义指令，有新元素自动滚动刀底部
app.directive("scrollBottom", {
    updated(el) {
        // 内容（包括滚动）高度-div可视的高度
        el.scrollTo({
            top: el.scrollHeight - el.clientHeight,
            behavior: "smooth"
        })
    }
})

app.mount('#app')