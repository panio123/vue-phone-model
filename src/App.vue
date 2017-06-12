<template>
  <div id="app">
    <v-phone :open-url="url" :show-tool-bar="showToolBar"></v-phone>
  </div>
</template>

<script>
  // import VPhone from './Phone.vue';
  import VPhone from '../dist/phone.js';
  console.log(VPhone);
  export default {
    name: 'app',
    components: {
      VPhone
    },
    data() {
      return {
        url: 'http://liu-pan.cc/example/mi_app/index.html',
        url2: 'http://liu-pan.cc',
        showToolBar: true
      }
    }
  }

</script>

<style>


</style>
