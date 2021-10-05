<template>
    <div class="wrapper">
        <img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="" class="wrapper__img">
        <div class="wrapper__content">
            <input type="text" class="wrapper__content__input" v-model="data.username" placeholder="请输入用户名">
        </div>
        <div class="wrapper__content">
            <input type="password" class="wrapper__content__input" v-model="data.password" placeholder="请输入密码">
        </div>
        <div class="wrapper__login__button" @click="handleLogin">登录</div>
        <div class="wrapper__login__link" @click="handleRegisterLink">立即注册</div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
export default {
  name: 'Login',
  setup () {
    const data = {
      username: '',
      password: ''
    }
    const route = useRouter()
    const handleLogin = async () => {
      try {
        const result = await post('/api/user/login', {
          username: data.username,
          password: data.password
        })
        if (result?.errno === 0) {
          localStorage.isLogin = true
          route.push({ name: 'Home' })
        } else {
          alert('登录失败！')
        }
      } catch {
        alert('请求失败!')
      }

    //   localStorage.isLogin = true
    //   route.push({ name: 'Home' })
    }
    const handleRegisterLink = () => {
      route.push({ name: 'Register' })
      console.log(1111111)
    }
    return { handleLogin, handleRegisterLink, data }
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    &__img{
        display: block;
        height: .66rem;
        width: .66rem;
        border-radius: 50%;
        margin: 0 auto .40rem auto;
    }
    &__content{
        width: 2.95rem;
        height: .48rem;
        background: #F9F9F9;
        border: 1px solid rgba(0,0,0,0.10);
        border-radius: .06rem;
        margin: 0 auto .16rem auto;
        font-size: .16rem;
        letter-spacing: 0;
        &__input{
            box-sizing: border-box;
            width: 100%;
            line-height: .48rem;
            border: none;
            background: none;
            padding: 0 .16rem;
            &::placeholder{
                color: rgba(0,0,0,0.50);
            }
        }
    }
    &__login__button{
        width: 2.95rem;
        height: .48rem;
        margin: .32rem auto .16rem auto;
        background: #0091FF;
        box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
        border-radius: .04rem;
        font-size: .16rem;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
        line-height: .48rem;
    }
    &__login__link{
        font-size: 14px;
        color: rgba(0,0,0,0.50);
        letter-spacing: 0;
        text-align: center;
        margin: 0 auto;
    }
}
</style>
