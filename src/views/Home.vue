<template>
  <div class="home">
    <el-container class="container__home">
      <el-header>
        <div class="header__title">
          <img src="@/assets/img/logo.png" alt="">
          <div class="header__title-title">电商后台管理系统</div>
        </div>
        <el-button type="info" @click="logout">退出</el-button>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-col :span="24">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <!-- <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">用户管理</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item> -->
            </el-menu>
          </el-col>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    handleOpen() {
      console.log('1')
    },
    handleClose() {
      console.log('1')
    }
  }
}
</script>
<style scoped>
.home{
  width: 100%;
}
.container__home{
  height: 100%;
  width: 100%;
}
.el-header{
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__title{
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__title-title{
  color: white;
  font-weight: 540;
}
.el-button{
  height: 36px;
}
.el-aside{
  background-color: #333744;
}
.el-main{
  background-color: #eaedf1;
}
</style>
