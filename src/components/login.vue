<template>
  <div id="login">
    <div class="circular">
      <img src="@/assets/logo.png" alt="">
    </div>
    <div class="content">
      <div class="content__input">
        <el-form ref="useInforRef" :model="useInfor" :rules="useInforRuls" class="demo-ruleForm">
          <el-form-item prop="userName">
            <el-input v-model="useInfor.userName" prefix-icon="el-icon-user-solid"></el-input>
          </el-form-item>
          <el-form-item prop="passWord">
            <el-input type="password"  v-model="useInfor.passWord"  prefix-icon="el-icon-lock"></el-input>
          </el-form-item>
          <el-form-item class="content__btn">
            <el-button type="primary" @click="reset">重置</el-button>
            <el-button type="success" @click="submit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      useInfor: {
        passWord: '123456',
        userName: 'admin'
      },
      useInforRuls: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        passWord: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    reset() {
      this.$refs.useInforRef.resetFields()
    },
    submit() {
      let loginToken
      this.$refs.useInforRef.validate(valid => {
        if (!valid) return this.$Message.error('登录失败')
        this.$Message.success('登录成功')
        loginToken = '1234567890'
        window.sessionStorage.setItem('token', loginToken)
        // this.$http.post('login', this.useInfor)
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style scoped>
#login {
  background-color: #2b4b6b;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.circular{
  border-radius: 50%;
  border: 10px rgb(241, 241, 241) solid;
  overflow: hidden;
  background-color: rgb(221, 221, 221);
  position: absolute;
  top: 20%;
  z-index: 1;
}
.content {
  position: absolute;
  top: 34%;
  width: 300px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 60px;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
}
.content__input {
  margin-top: 100px;
  width: 280px;
}
.content__btn{
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>
