# vue-phone-model

>一个vuejs的手机模型组件

![image](https://git.oschina.net/liupan520/vue-phone-model/raw/master/p1.jpg)
![image](https://git.oschina.net/liupan520/vue-phone-model/raw/master/p2.jpg)

## 演示地址 [DOME](http://liu-pan.cc/production)

## 使用

#### 安装

``` bash
//需要vue.js 2.1.5 以上版本
npm install vue-phone-model

```

### 用于 *.vue 组件化开发模式中


``` html

<template>
  <div id="app">
    <v-phone :list="list" :type="phoneType" :background="phoneBackground"></v-phone>
  </div>
</template>

<script>
  import VPhone from 'vue-phone-model';
  import 'vue-phone-model/dist/phone.css';

  import logo from './img/mi_logo.jpg';

  export default {
    name: 'app',
    components: {
      VPhone
    },
    data() {
      return {
        phoneType:'i6',//手机的大小，默认为iphone5的尺寸，可调为 i6 或 ipad，以后会支持自定义尺寸。
        phoneBackground:'red',//可自定义桌面背景，用法与定义元素的 background 属性一样。
        list: [{
          title: '坚果空间',
          icon: logo,//设置一个桌面图标，如果不传，刚默认取title字段的第一个字作为图标内容
          url: 'http://liu-pan.cc',//需要打开的链接 
          showToolBar: true,//是否显示工具栏，可传入 true false 'auto'默认为 'auto',组件会根据打开网页的 meta属性决定
          open: false//是否默认打开这个页面 -只会有一个默认打开生效
        }, {
          title: '小米商城',
          icon: logo,
          url: 'http://liu-pan.cc/example/mi_app/index.html',
          showToolBar: true,
          open: false
        }]
      }
    }
  }

</script>

```
### script 引入 

``` html

<script src="vue/dist/vue.js"></script>
<script src="vue-phone-model/dist/phone.js"></script>

```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
