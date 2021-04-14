import { createApp } from 'vue'
import { ActionBar, ActionBarIcon, ActionBarButton, Divider, Popup, Overlay, Loading, Dialog, ContactCard, Form, AddressEdit, AddressList, Field, CellGroup, Cell, SwipeCell, Icon, Stepper, Card, Checkbox, CheckboxGroup, Button, Swipe, SwipeItem, PullRefresh, List, Tab, Tabs, SubmitBar, Toast, Skeleton, Tabbar, TabbarItem, Search, NavBar, Sidebar, SidebarItem, NoticeBar, Empty } from 'vant'
import App from './App.vue'
import router from './router'
import './utils/permission.ts'
import store from './store'
import 'lib-flexible/flexible.js'
import 'vant/lib/index.css'; // 全局引入样式
import 'vant/lib/icon/local.css';//本地
import './style/base.less'
import './mock/index.ts'

const app = createApp(App) // 创建实例

app.use(ActionBarButton)
    .use(ActionBarIcon)
    .use(ActionBar)
    .use(Divider)
    .use(Popup)
    .use(Overlay)
    .use(Loading)
    .use(Dialog)
    .use(Toast)
    .use(ContactCard)
    .use(Form)
    .use(AddressEdit)
    .use(AddressList)
    .use(Field)
    .use(CellGroup)
    .use(Cell)
    .use(SwipeCell)
    .use(Icon)
    .use(Stepper)
    .use(Card)
    .use(Button)
    .use(Swipe)
    .use(SwipeItem)
    .use(PullRefresh)
    .use(List)
    .use(Tab)
    .use(Tabs)
    .use(SubmitBar)
    .use(Checkbox)
    .use(CheckboxGroup)
    .use(Skeleton)
    .use(Tabbar)
    .use(TabbarItem)
    .use(Search)
    .use(NavBar)
    .use(Sidebar)
    .use(SidebarItem)
    .use(NoticeBar)
    .use(Empty)

app.use(store)
app.use(router)
app.mount('#app')
