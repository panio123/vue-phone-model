<template>
  <div id="app">
    <button @click="changeType('i5')">iPhone 5</button>
    <button @click="changeType('i6')">iPhone 6</button>
    <button @click="changeType('ipad')">ipad</button>
    <button @click="changeBg('red')">红色背景</button>
    <button @click="changeBg('green')">绿色背景</button>
    <button @click="changeBg('')">重置</button>
    <button @click="pushItme">新增</button>
    <v-phone :list="list" :background='background' :type="phoneType"></v-phone>
  </div>
</template>

<script>
// import VPhone from './Phone.vue';
import logo from './img/mi_logo.jpg';
import VPhone from '../dist/phone.js';
import '../dist/phone.css';
let item = {
  title: '小米商城',
  icon: logo,
  url: 'http://liu-pan.cc/example/mi_app/index.html',
  open: false
};
export default {
  name: 'app',
  components: {
    VPhone
  },
  data() {
    return {
      phoneType: 'i5',
      background: '',
      list: [{
        title: '坚果空间',
        url: 'http://liu-pan.cc',
        showToolBar: true,
        open: false
      }, {
        title: '小米商城',
        icon: logo,
        url: 'http://liu-pan.cc/example/mi_app/index.html',
        open: false
      }]
    }
  },
  methods: {
    changeType(type) {
      this.phoneType = type || 'i5';
    },
    pushItme() {
      this.list.push(item);
    },
    changeBg(color) {
      this.background = color || '';
    }
  }
}

</script>

<style>
button {
  margin: 10px;
}
</style>
