# vue-phone-model

>一个vuejs的手机模型组件

![image](http://git.oschina.net/liupan520/vue-phone-model/raw/master/p.jpg)

##使用

目前只能用于 *.vue 开发模式中。

###安装

``` bash

npm install vue-phone-model

```

``` html

<template>
  <div id="app">
    <v-phone :open-url="url" :show-tool-bar="showToolBar"></v-phone>
  </div>
</template>

<script>
  import VPhone from './Phone.vue';

  export default {
    name: 'app',
    components: {
      VPhone
    },
    data() {
      return {
        url: 'http://liu-pan.cc/example/mi_app/index.html',//需要打开的链接 
        url2: 'http://liu-pan.cc',
        showToolBar: true//是否显示工具栏，可传入 true false 'auto'默认为 'auto',即根据打开网页的 meta属性决定
      }
    }
  }

</script>

```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
