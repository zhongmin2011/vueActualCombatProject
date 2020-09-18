import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)
// Message 挂载的方法不同，要挂载到他的原型上
Vue.prototype.$Message = Message
