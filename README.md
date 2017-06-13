# vue-phone-model

>一个vuejs的手机模型组件

![image](http://git.oschina.net/liupan520/vue-phone-model/raw/master/p.jpg)

## 演示地址 [DOME](http://liu-pan.cc/phone)

## 使用

目前只能用于 *.vue 开发模式中。

### 安装

``` bash

npm install vue-phone-model

```

``` html

<template>
  <div id="app">
    <v-phone :list="list"></v-phone>
  </div>
</template>

<script>
  import VPhone from 'vue-phone-model';
  import 'vue-phone-model/dist/phone.css';

  import logo from './img/logo.png';

  export default {
    name: 'app',
    components: {
      VPhone
    },
    data() {
      return {
        list: [{
          title: '坚果空间',
          icon: logo,
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

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
