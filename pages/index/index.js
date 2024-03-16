import { observable } from 'mobx';
import { createPage, PAGE_ROOT_SYMBOL } from '../../common/weapp-page'
import { concatClassList, px2rpx } from '../../common/style'
import { app, $app } from '../../app/weapps-api'
import { $0 as handlers } from '../../app/handlers'
const lifecycle = {}
const state = {}
const computed = {}
import { $page, $w } from './api'
import { widgetProps } from './data'





/** widget event listeners **/
const evtListeners = {"ontextarea1$change": [
      {
          key: 'w3p49i1wvf4',
          sourceKey: 'platform:_setStateVal',
          handler: function({args}){ return $app._setStateVal(...args)},
          args: {
  "params": [
    {
      "varPath": "$page.text"
    }
  ]
},
          argsBinds: {'params.0.val': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.textarea1.value
    )}}
        }
    ],"onbutton1$tap": [
      {
          key: 'wkiv0yhvwq4',
          sourceKey: 'platform:_setStateVal',
          handler: function({args}){ return $app._setStateVal(...args)},
          args: {
  "params": [
    {
      "varPath": "$page.scrollTop"
    }
  ]
},
          argsBinds: {'params.0.val': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      999999999 + Math.floor(Math.random() * 10)
    )}}
        },{
          key: 'wpkpjgprcu2',
          sourceKey: 'platform:_setStateVal',
          handler: function({args}){ return $app._setStateVal(...args)},
          args: {
  "params": [
    {
      "varPath": "$page.chatList"
    }
  ]
},
          argsBinds: {'params.0.val': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      [...$page.dataset.state.chatList, {req: $page.dataset.state.text}]
    )}}
        },{
          key: 'w146aocnhl7',
          sourceKey: 'platform:_setStateVal',
          handler: function({args}){ return $app._setStateVal(...args)},
          args: {
  "params": [
    {
      "val": "false",
      "varPath": "$page.loading"
    }
  ]
},
          argsBinds: {}
        },{
          key: 'w97b56wxl4j',
          sourceKey: 'index:textarea1_clear',
          handler: handlers.textarea1_clear,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onindex$load": [
      {
          key: 'wvh1ldimkuo',
          sourceKey: 'platform:utils.If',
          handler: function({args}){ return $app.utils.If(...args)},
          args: {
  "params": [
    {
      "alternate": false,
      "consequent": true,
      "outputs": "",
      "target": ""
    }
  ]
},
          argsBinds: {'params.0.condition': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex;const {If} = $app.utils || {}; return(
      If(app.auth.currentUser.openId, true, false)
    )}}
        }
    ],"onindex$wvh1ldimkuo_success": [
      {
          key: 'wvef4q787ig',
          sourceKey: 'platform:cloud.callDataSource',
          handler: function({args}){ return $app.cloud.callDataSource(...args)},
          args: {
  "params": [
    {
      "dataSourceName": "dlyhb_pc7zmvv",
      "methodName": "wedaGetItem",
      "options": {
        "showToast": false,
        "showLoading": false
      },
      "outputs": "",
      "params": {}
    }
  ]
},
          argsBinds: {'params.0.params.where': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
       [{
    key: "xcxopenid",//根据openid查询是否有数据
    rel: "eq",
    val: app.auth.currentUser.openId,
}]
    )}}
        }
    ],"onindex$wvef4q787ig_success": [
      {
          key: 'wkc7telrqbg',
          sourceKey: 'platform:utils.If',
          handler: function({args}){ return $app.utils.If(...args)},
          args: {
  "params": [
    {
      "alternate": false,
      "consequent": true
    }
  ]
},
          argsBinds: {'params.0.condition': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex;const {If} = $app.utils || {}; return(
      If(!event.detail||!event.detail.xcxopenid, true, false)
    )}}
        }
    ],"onindex$wkc7telrqbg_success": [
      {
          key: 'wkpphcptcig',
          sourceKey: 'platform:cloud.callDataSource',
          handler: function({args}){ return $app.cloud.callDataSource(...args)},
          args: {
  "params": [
    {
      "dataSourceName": "dlyhb_pc7zmvv",
      "methodName": "wedaCreate",
      "options": {
        "showToast": false,
        "showLoading": false
      },
      "outputs": {
        "_id": "$global.weda_id"
      },
      "params": {}
    }
  ]
},
          argsBinds: {'params.0.params.xcxopenid': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      app.auth.currentUser.openId
    )}}
        }
    ],"onindex$wkc7telrqbg_fail": [
      {
          key: 'wauvipqv8jg',
          sourceKey: 'platform:_setStateVal',
          handler: function({args}){ return $app._setStateVal(...args)},
          args: {
  "params": [
    {
      "varPath": "$global.weda_id"
    }
  ]
},
          argsBinds: {'params.0.val': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      event.detail._id
    )}}
        },{
          key: 'w3832f1rc6g',
          sourceKey: 'platform:hideLoading',
          handler: function({args}){ return $app.hideLoading(...args)},
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        },{
          key: 'wlnfed49ceo',
          sourceKey: 'platform:_setStateVal',
          handler: function({args}){ return $app._setStateVal(...args)},
          args: {
  "params": [
    {
      "varPath": "$global.headImageUrl"
    }
  ]
},
          argsBinds: {'params.0.val': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      event.detail.yhtx
    )}}
        },{
          key: 'w48dm5k3cag',
          sourceKey: 'platform:_setStateVal',
          handler: function({args}){ return $app._setStateVal(...args)},
          args: {
  "params": [
    {
      "varPath": "$global.nickName"
    }
  ]
},
          argsBinds: {'params.0.val': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      event.detail.yhnc
    )}}
        },{
          key: 'wcqtcmuusc',
          sourceKey: 'platform:_setStateVal',
          handler: function({args}){ return $app._setStateVal(...args)},
          args: {
  "params": [
    {
      "varPath": "$global.getPhoneNumber"
    }
  ]
},
          argsBinds: {'params.0.val': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      event.detail.yhsjh
    )}}
        }
    ],"onindex$wvh1ldimkuo_fail": [
      {
          key: 'w1bsui9baro',
          sourceKey: 'platform:hideLoading',
          handler: function({args}){ return $app.hideLoading(...args)},
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onindex$wkpphcptcig_success": [
      {
          key: 'we6bur19mg',
          sourceKey: 'platform:_setStateVal',
          handler: function({args}){ return $app._setStateVal(...args)},
          args: {
  "params": [
    {
      "varPath": "$global.weda_id"
    }
  ]
},
          argsBinds: {'params.0.val': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      event && event.detail && event.detail._id
    )}}
        }
    ],}

const dataBinds = {
  [PAGE_ROOT_SYMBOL]: {
    
  },
  scrollView1: { 'scrollTop': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.page.dataset.state.scrollTop
    )}
  },
  repeater1: { 'data': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.page.dataset.state.chatList
    )}
  },
  repeater1_item: { '_waFor': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.page.dataset.state.chatList
    )}
  },
  text1: { 'text': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.req.replace(/[\r|\n]/g,"")
    )}
  },
  image1: { 'src': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.app.dataset.state.headImageUrl
    )}
  },
  text2: { 'text': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.item_repeater1.res.replace(/[\r|\n]/g,"")
    )}
  },
}

const query = {
}

const eventFlows = [
]

const datasetProfile = {
  "state": {
    "text": {
      "name": "text",
      "label": "",
      "varType": "state",
      "dataType": "string",
      "initialValue": ""
    },
    "loading": {
      "name": "loading",
      "label": "",
      "varType": "state",
      "dataType": "boolean",
      "initialValue": false
    },
    "chatList": {
      "name": "chatList",
      "label": "chatList",
      "varType": "state",
      "dataType": "array",
      "initialValue": [
        {
          "req": "nibbo",
          "res": "sup boy",
          "index": 1
        },
        {
          "req": "hehe",
          "res": "gang shit",
          "index": 2
        }
      ]
    },
    "scrollTop": {
      "name": "scrollTop",
      "label": "",
      "varType": "state",
      "dataType": "number",
      "initialValue": 9999
    }
  },
  "params": {
    "id": {
      "name": "id",
      "varType": "params",
      "initialValue": "yourmom"
    }
  }
}

createPage({
  app,
  pageContext: $page,
  id: 'index',
  widgetProps,
  lifecycle,
  state,
  computed,
  evtListeners,
  dataBinds,
  handlers,
  query,
  eventFlows,
  pageAttributes: {"appShareMessage":{"title":"","enable":true,"pageId":"","imageUrl":"","packageName":""}},
  resetShare: true,
  datasetProfile
})
