<template>
    <div id='browser' class="browser-wrap">
        <div class="browser-box" :class="{'has-web-bar':openData.showToolBar}">
            <div class="web-bar web-top-bar">
                <input type="text" name="url" v-model.lazy="url" v-show="!webTitleShow" @blur="webTitleShow = true">
                <div class="web-title" v-show="webTitleShow" @click="webTitleShow = false">
                    <i class="v-icon bg-icon"></i>{{webTitle}}</div>
            </div>
            <iframe :src="openData.url" @load="loaded" ref="iframe"></iframe>
            <div class="web-bar web-bottom-bar">
                <span @click="back">
                    <i class="v-icon bg-back"></i>
                </span>
                <span @click="forward">
                    <i class="v-icon bg-forward"></i>
                </span>
                <span @click="reload" class="reload">
                    <i class="v-icon bg-reload"></i>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VBrowser',
    props: {
        openData: {
            default: {
                title: '坚果空间',
                url: 'http://liu-pan.cc',
                showToolBar: 'auto'
            },
            type: Object
        }
    },
    data: function () {
        return {
            loading: false,
            url: '',
            webTitle: '',
            webTitleShow: false
        }
    },
    watch: {
        url: function (val) {
            console.log(val);
            this.webTitleShow = true;
            if (val.indexOf('http://') !== 0 && val.indexOf('https://') !== 0) {
                this.url = 'http://' + val;
            }
        }
    },
    methods: {
        loaded() {
            // this.bindHashchange();
            this.webTitleShow = true;
            this.checkMeta();
            this.getTitle();
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
            if (this.openData.showToolBar === 'auto' && webApp) {
                this.openData.showToolBar = false;
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
        this.webTitle = this.openData.title;
    }
}

</script>

<style>
#vue-phone-model .browser-wrap {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 100;
}

#vue-phone-model .has-web-bar.browser-box {
    padding: 35px 0 35px 0;
    /*padding: 35px 0 0 0;*/
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

#vue-phone-model .browser-box {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #fff;
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
    background-image: url('./img/icons.png');
    background-position: 0px 0px;
}

#vue-phone-model .bg-forward {
    background-image: url('./img/icons.png');
    background-position: 0px -20px;
}

#vue-phone-model .bg-icon {
    background-image: url('./img/icons.png');
    background-position: 0px -40px;
    margin-bottom: -5px;
}

#vue-phone-model .bg-reload {
    background-image: url('./img/icons.png');
    background-position: -3px -83px;
    background-size: 135%;
}

#vue-phone-model .reload {
    float: right;
}
</style>
