<template lang="">
<div class="login">
    <n-card title="登录">
        <n-input round placeholder="用户名" v-model:value="user.username"/>
        <n-input round placeholder="密码" v-model:value="user.password"  @keydown.enter="login"/>
    </n-card>
</div>

</template>
<script setup>
import { IosAppstore } from '@vicons/ionicons4'
import { NCard ,NInput} from 'naive-ui'
import {reactive} from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const user = reactive({
    username:'',
    password:'',
})
let login = function(params) {
    console.log(router)
    router.push('home')
}

</script>
<style lang="scss">
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
.n-input{
    margin-top: 20px;
}
</style>