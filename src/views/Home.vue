<template>
  <div class="home">
    <el-container class="container__home">
      <el-header>
        <div class="header__title">
          <img src="@/assets/img/logo.png" alt />
          <div class="header__title-title">电商后台管理系统</div>
        </div>
        <el-button type="info" @click="logout">退出</el-button>
      </el-header>
      <el-container>
        <el-aside :width="isCollapse ? '64px' : '200px'">
          <div class="toggleButton" @click="toggleButton">|||</div>
          <el-col :span="24">
            <el-menu
              :collapse="isCollapse"
              unique-opened
              default-active="2"
              v-for="item in navList"
              :key="item.id"
              @open="handleOpen"
              @close="handleClose"
              background-color="#333744"
              text-color="#fff"
              active-text-color="#409EFF"
              :collapse-transition="false">
              <el-submenu :index="item.id">
                <template slot="title">
                  <i style="margin-right:5px" :class="navIcon[item.id]"></i>
                  <span>{{item.authName}}</span>
                </template>
                <el-submenu :index="itemNav.id" v-for="itemNav in item.children" :key="itemNav.id+''">
                  <template slot="title">{{itemNav.authName}}</template>
                </el-submenu>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-aside>
        <el-main>
          <router-view>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import HomePage from './components/HomePage.vue'
export default {
  name: 'Home',
  // components: {
  //   HomePage
  // },
  data() {
    return {
      isCollapse: false,
      navList: [
        {
          authName: '用户管理',
          path: 'users',
          id: '125',
          children: [
            {
              authName: '用户列表',
              path: 'users',
              id: '125'
            }
          ]
        },
        {
          authName: '权限管理',
          path: 'rights',
          id: '103',
          children: [
            {
              authName: '角色列表',
              id: '104',
              path: 'users'
            },
            {
              authName: '权限列表',
              id: '105',
              path: 'users'
            }
          ]
        },
        {
          authName: '商品管理',
          path: 'goods',
          id: '101',
          children: [
            {
              authName: '商品列表',
              id: '111',
              path: 'users'
            },
            {
              authName: '分类参数',
              id: '121',
              path: 'users'
            },
            {
              authName: '商品参数',
              id: '131',
              path: 'users'
            }
          ]
        },
        { authName: '订单管理', path: 'orders', id: '102', children: [] },
        { authName: '数据统计', path: 'reports', id: '145', children: [] }
      ],
      navIcon: {
        '125': 'el-icon-s-custom',
        '103': 'el-icon-lock',
        '101': 'el-icon-s-goods',
        '102': 'el-icon-s-order',
        '145': 'el-icon-s-claim'
      }
    }
  },
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
    },
    toggleButton() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>
<style scoped>
.home {
  width: 100%;
}
.container__home {
  height: 100%;
  width: 100%;
}
.el-header {
  background-color: #373d41;
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__title {
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__title-title {
  color: white;
  font-weight: 540;
}
.el-button {
  height: 36px;
}
.el-aside {
  background-color: #333744;
}
.el-main {
  background-color: #eaedf1;
}
.el-menu{
  border: 0;
}
.toggleButton{
  height: 36px;
  line-height: 36px;
  color: white;
  background-color: rgb(67, 58, 78);
  margin: 0 auto;
  text-align: center;
  letter-spacing: 0.1em;
  cursor: pointer;
}
</style>
