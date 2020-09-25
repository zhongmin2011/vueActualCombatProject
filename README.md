# vueactualcombat

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## 新增知识点记录


### 登录成功后获取 token 值
1，将登录成功过后的 token 保存到客户端的 sessionStorage 中
    1.1  项目中出了登录之外的其他 API 接口，必须在登录后才能访问
    1.2  token 只应在当前网站打开期间生效，所以讲 token 保存在 sessionStorage中
         window.sessionStorage.setItem('token', loginToken)

2，通过编程是导航跳转到后台的主页，路由地址是 xxx

3，为什么不把 token 保存到 localStorage 中，而保存在 sessionStorage中
localStorage：是持久话的存储机制，一旦关闭了该项目，token还是一直保存，不适用
sessionStorage：会话期间的存储机制，一旦关闭了该项目，token就失效了

详情请看 login.vue 文件




### 使用路由导航守卫控制访问权限
这一块操作的是在 route.js 中进行操作的

1，如果用户没有登录，直接通过url访问特定页面，需要重新导航到登录页面
router.beforeEach((to, from, next) => {
   1, to 将要访问的路径
   2, from 代表从哪个路径跳转而来
   3, next 是一个放行即将执行的函数
      3.1, next() 直接放行
      3.2，next('/login') 强制页面跳转到 登录页面

      这里判断 to.path 是否要去登录页 是的话 直接 next() 放行
      从本地获取token值，window.sessionStorage.getItem('token')
      如果 token 值存在的话，可以直接放行，如果不存在的话
      if(!token) return next('/login') token不存在，就强制性的返回登录页
      否则 直接放行 next()
})

详情请看 router 下 index.js 文件


### 退出功能
实现原理：销毁本地token集客，后续请求不会携带token，必须重新登录生成一个新的 token 值才可以访问页面

清空token： window.sessionStorage.clear()
跳转页面：this.$router.push('/login')

详情请看 home.vue 文件


### 设置格式化，不进行替换操作
例如：格式化时，js中，不把单引号 改为双引号，
     js结尾不添加封号

操作：在文件中新建一个文件 .prettierrc，里面格式是 json 格式，写上配置
{
    "semi": false, 封号去掉
    "singleQuote": true,  不把单引号改为双引号
}

详情请看 .prettierrc 文件


### 去掉Slint报错的不必要校验
在文件.eslintrc.js中，rules对象中，加上校验的名称，改为0即可
例如：{'space-before-function-paren': 0}

详情请看 .eslintrc.js 文件



### 优化组件导入
优化 plugins 下文件 element.js
统一导入



### 刷新时，就获取左侧的菜单栏
给左侧菜单栏点击时，添加事件，获取当前的路径，当刷新时，在created中，获取存储的路径，给绑定的左侧菜单栏




### 

### 

### 

### 

### 

### 

### 