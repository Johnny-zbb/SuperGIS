<template lang="">
<div class="login">
    <n-card title="登录">
        <n-input round placeholder="用户名" v-model:value="user.username"/>
        <n-input round placeholder="密码" v-model:value="user.password"  @keydown.enter="login"/>
        <a class="forget" href="javascript:void()">忘记密码？</a>
    </n-card>
</div>

</template>
<script setup>
import { IosAppstore } from '@vicons/ionicons4'
import { NCard ,NInput} from 'naive-ui'
import {reactive} from 'vue'
import { useRouter } from 'vue-router'
import { useLoadingBar } from 'naive-ui'
const loadingBar = useLoadingBar()
const router = useRouter()
const user = reactive({
    username:'',
    password:'',
})
let login = function(params) {
    console.log(router)
    loadingBar.start()
    setTimeout(() => {
        loadingBar.finish()
        router.push('home')
    }, 1000);
}

</script>
<style lang="scss" scoped>
.login {
    height: 100%;
    background: url('@/assets/beams.jpg');
    background-repeat: round;
    position: relative;
}

.n-card {
    max-width: 450px;
    background-color: rgba(255, 255, 255, 0.46);
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.n-input:nth-child(2){
    margin-top: 10px;
    margin-bottom: 10px;
}
.forget{
    position: relative;
    float: right;
    margin-top: 15px;
    text-decoration: none;
}
</style>