<template>
  <div id="vue-phone-model">
    <div class="phone-wrap" :class="phone">
      <div class="phone-box" :class="{'has-web-bar':ToolBarShow}">
        <div class="phone-receiver-wrap">
          <i class="phone-camera"></i>
          <div class="phone-receiver"></div>
        </div>
        <div class="phone-button"></div>
        <div class="phone-tool-bar">
          <span class="time">{{time}}</span>
          <span class="network">4G
            <i class="power"></i>
          </span>
        </div>
        <div class="v-phone">
          <div class="web-bar web-top-bar">
            <input type="text" name="url" v-model.lazy="url" v-show="!webTitleShow" @blur="webTitleShow = true">
            <div class="web-title" v-show="webTitleShow" @click="webTitleShow = false">
              <i class="v-icon bg-icon"></i>{{webTitle}}</div>
          </div>
          <iframe :src="url" @load="loaded" ref="iframe"></iframe>
          <div class="web-bar web-bottom-bar">
            <span @click="back">
              <i class="v-icon bg-back"></i>
            </span>
            <span @click="forward">
              <i class="v-icon bg-forward"></i>
            </span>
            <span @click="reload">
              <i class="v-icon bg-reload"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'v-phone',
    props: {
      openUrl: {
        default: 'http://liu-pan.cc',
        type: String,
        required: true
      },
      showToolBar: {
        default: 'auto',
        type: [Boolean, String]
      },
      phone: {
        default: 'i5',
        type: String
      }
    },
    data: function () {
      return {
        loading: false,
        time: ':',
        url: '',
        ToolBarShow: 'auto',
        webTitle: '',
        webTitleShow: false
      }
    },
    watch: {
      openUrl: function (val) {
        console.log(val);
        this.url = val;
      },
      url: function (val) {
        console.log(val);
        this.webTitleShow = true;
        if (val.indexOf('http://') !== 0 && val.indexOf('https://') !== 0) {
          this.url = 'http://' + val;
        }
        this.$emit('input', val);
      }
    },
    methods: {
      loaded() {
        // this.bindHashchange();
        this.webTitleShow = true;
        this.checkMeta();
        this.getTitle();
      },
      checkTime(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      },
      timer() {
        let now = new Date();
        let h = this.checkTime(now.getHours());
        let m = this.checkTime(now.getMinutes());
        this.time = h + ":" + m;
        setTimeout(() => {
          this.timer();
        }, 1000 * 60);
      },
      back() {
        let F = this.$refs.iframe;
        let FW = F.contentWindow;
        FW.history.back();
      },
      forward() {
        let FW = this.getFw();
        FW.history.forward();
      },
      reload() {
        let FW = this.getFw();
        FW.location.reload();
      },
      bindHashchange() {
        let FW = this.getFw();
        FW.addEventListener('hashchange', () => {
          console.log(FW.location)
          this.url = FW.location.href;
        });
      },
      checkMeta() {
        let FW = this.getFw();
        let webApp = FW.document.querySelector('head meta[name="apple-mobile-web-app-capable"]');
        // console.log(webApp);
        if (this.ToolBarShow === 'auto' && webApp) {
          this.ToolBarShow = false;
        }
      },
      getFw() {
        let F = this.$refs.iframe;
        let FW = F.contentWindow;
        return FW;
      },
      getTitle() {
        let F = this.$refs.iframe;
        this.webTitle = F.contentWindow.document.title;
      }
    },
    created() {
      this.timer();
      this.url = this.openUrl;
      this.ToolBarShow = this.showToolBar;
    },
    mounted() {}

  }

</script>

<style>
  #vue-phone-model .phone-wrap {
    border-bottom: 75px solid #383735;
    border-top: 50px solid #383735;
    border-left: 15px solid #383735;
    border-right: 15px solid #383735;
    border-radius: 50px;
    width: 320px;
    height: 568px;
  }

  #vue-phone-model .phone-wrap.i6 {
    width: 375px;
    height: 667px;
  }

  #vue-phone-model .phone-receiver-wrap {
    position: absolute;
    width: 100%;
    z-index: 5;
    top: -25px;
    text-align: center;
  }

  #vue-phone-model .phone-camera {
    width: 6px;
    height: 6px;
    border-radius: 30px;
    background: #92969f;
    float: left;
    margin-left: 40%;
    margin-top: 1px;
    vertical-align: middle;
  }

  #vue-phone-model .phone-receiver {
    background: #1c1d22;
    width: 52px;
    height: 6px;
    float: left;
    margin-left: 6px;
    border-radius: 50px;
    box-shadow: 1px 2px #52514e;
  }

  #vue-phone-model .phone-button {
    position: absolute;
    width: 50px;
    height: 50px;
    background: #464646;
    border: 2px solid #2f2f2f;
    border-radius: 50%;
    bottom: -70px;
    left: 135px;
    z-index: 9;
    box-shadow: inset 0px 0px 2px 1px rgba(111, 111, 111, 0.4);
  }

  #vue-phone-model .phone-tool-bar {
    width: 100%;
    height: 20px;
    background: #000;
    color: #fff;
    font-size: 12px;
    overflow: hidden;
    line-height: 20px;
    padding: 0 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-top: 2px solid #282828;
    border-bottom: none;
    margin-top: -20px;
  }

  #vue-phone-model .phone-tool-bar .time {
    float: left;
  }

  #vue-phone-model .phone-tool-bar .network {
    float: right;
  }

  #vue-phone-model .phone-tool-bar .power {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 7px;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid #fff;
  }

  #vue-phone-model .phone-tool-bar .power::before {
    content: '';
    display: inline-block;
    width: 80%;
    height: 100%;
    background: #fff;
    position: absolute;
    top: 0;
    right: -1px;
  }

  #vue-phone-model .phone-box {
    position: relative;
    width: 100%;
    height: 100%;
    background: #fff;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding-top: 20px;
    border: 2px solid #282828;
    border-top: none;
  }

  #vue-phone-model .has-web-bar .v-phone {
    padding: 35px 0 35px 0;
    /*padding: 35px 0 0 0;*/
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  #vue-phone-model .has-web-bar .web-bar {
    display: block;
  }

  #vue-phone-model .web-bar {
    display: none;
    width: 100%;
    height: 35px;
    background: #fbfbfb;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  #vue-phone-model .web-top-bar {
    border-bottom: 1px solid #ccc;
    margin-top: -35px;
    padding: 3px 5px;
  }

  #vue-phone-model .web-top-bar .web-title {
    font-size: 12px;
    line-height: 30px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-indent: 5px;
  }

  #vue-phone-model .web-top-bar input,
  #vue-phone-model .web-top-bar .web-title {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0 5px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #ccc;
    color: #92969f;
    font-weight: 300;
  }

  #vue-phone-model input:focus,
  #vue-phone-model input:active {
    outline: none;
  }

  #vue-phone-model .web-bottom-bar {
    border-top: 1px solid #ccc;
    margin-bottom: -35px;
  }

  #vue-phone-model .web-bottom-bar span {
    display: inline-block;
    width: 45px;
    text-align: center;
    margin-top: 5px;
    cursor: pointer;
  }

  #vue-phone-model .v-phone {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #fff;
  }

  #vue-phone-model iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  #vue-phone-model .v-icon {
    width: 20px;
    height: 20px;
    display: inline-block;
    background-size: 100%;
    background-repeat: no-repeat;
  }

  #vue-phone-model .bg-back {
    background-image: url('./icons.png');
    background-position: 0px 0px;
  }

  #vue-phone-model .bg-forward {
    background-image: url('./icons.png');
    background-position: 0px -20px;
  }

  #vue-phone-model .bg-icon {
    background-image: url('./icons.png');
    background-position: 0px -40px;
    margin-bottom: -5px;
  }

  #vue-phone-model .bg-reload {
    background-image: url('./icons.png');
    background-position: 0px -60px;
  }

</style>
