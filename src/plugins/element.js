import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Col,
  Submenu,
  MenuItem,
  MenuItemGroup
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Col)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
// Message 挂载的方法不同，要挂载到他的原型上
Vue.prototype.$Message = Message
