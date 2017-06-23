<template>
  <div id="app">
    <v-phone :list="list"></v-phone>
  </div>
</template>

<script>
// import VPhone from './Phone.vue';
import logo from './img/mi_logo.jpg';
import VPhone from '../dist/phone.js';
import '../dist/phone.css';
// console.log(VPhone);
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
        url: 'http://liu-pan.cc',
        showToolBar: false,
        open: false
      }, {
        title: '小米商城',
        icon: logo,
        url: 'http://liu-pan.cc/example/mi_app/index.html',
        showToolBar: false,
        open: false
      }]
    }
  }
}

</script>

<style>

</style>
