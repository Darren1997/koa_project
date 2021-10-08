<template>
    <div class="wrapper">
        <img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="" class="wrapper__img">
        <div class="wrapper__content">
            <input type="text" class="wrapper__content__input" v-model="data.username" placeholder="请输入用户名">
        </div>
        <div class="wrapper__content">
            <input type="password" class="wrapper__content__input" v-model="data.password" placeholder="请输入密码">
        </div>
        <div class="wrapper__content">
            <input type="password" class="wrapper__content__input" v-model="data.repass" placeholder="确认密码">
        </div>
        <div class="wrapper__register__button" @click="handleRegisterClick">注册</div>
        <div class="wrapper__register__link" @click="handleLoginLink">已有账号去登陆</div>
    </div>
    <Toast v-if="toastData.toastShow" :message="toastData.message" />
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import Toast, { useToastEffect } from '../../components/Toast'
import { post } from '../../utils/request'
export default {
  name: 'Register',
  components: { Toast },
  setup () {
    const data = reactive({
      username: '',
      password: '',
      repass: ''
    })
    const router = useRouter()
    const { toastData, showToast } = useToastEffect()
    const handleRegisterClick = async () => {
      if (data.password !== data.repass) {
        showToast('密码不一致！')
      } else {
        try {
          const result = await post('/api/user/register', {
            username: data.username,
            password: data.password
          })
          if (result?.errno === 0) {
            router.push({ name: 'Login' })
          } else {
            showToast('注册失败！')
          }
        } catch {
          showToast('请求失败！')
        }
      }
    }
    const handleLoginLink = () => {
      router.push({ name: 'Login' })
    }
    return { handleRegisterClick, handleLoginLink, data, toastData }
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
    &__register__button{
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
    &__register__link{
        font-size: 14px;
        color: rgba(0,0,0,0.50);
        letter-spacing: 0;
        text-align: center;
        margin: 0 auto;
    }
}
</style>
