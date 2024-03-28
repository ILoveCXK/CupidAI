import { observable } from 'mobx';
import { createPage, PAGE_ROOT_SYMBOL } from '../../common/weapp-page'
import { concatClassList, px2rpx } from '../../common/style'
import { app, $app } from '../../app/weapps-api'
import { $3 as handlers } from '../../app/handlers'
import lifecycle from '../../lowcode/u_tou_xiang_ni_cheng/lifecycle'
const state = {}
const computed = {}
import { $page, $w } from './api'
import { widgetProps } from './data'





/** widget event listeners **/
const evtListeners = {"onbutton1$tap": [
      {
          key: 'wrz6oz58kz3',
          sourceKey: 'platform:_setStateVal',
          handler: function({args}){ return $app._setStateVal(...args)},
          args: {
  "params": [
    {
      "varPath": "$global.nickname"
    }
  ]
},
          argsBinds: {'params.0.val': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.input1.value
    )}}
        },{
          key: 'web09ukp44f',
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
      $w.uploadImage1.value
    )}}
        },{
          key: 'wqzbymrtwyf',
          sourceKey: 'platform:navigateTo',
          handler: function({args}){ return $app.navigateTo(...args)},
          args: {
  "params": [
    {
      "mode": "weDa",
      "pageId": "u_suo_zai_da_xue",
      "params": {}
    }
  ]
},
          argsBinds: {}
        }
    ],"onbutton1$wrz6oz58kz3_success": [
      {
          key: 'w76usek357a',
          sourceKey: 'platform:cloud.callDataSource',
          handler: function({args}){ return $app.cloud.callDataSource(...args)},
          args: {
  "params": [
    {
      "dataSourceName": "zcyhxx_2y7u8nd",
      "methodName": "wedaUpdateV2",
      "options": {
        "showToast": false,
        "showLoading": false
      },
      "outputs": {},
      "params": {
        "data": {},
        "select": {
          "$master": true
        }
      }
    }
  ]
},
          argsBinds: {'params.0.params.data.wxnc': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.app.dataset.state.nickname
    )},'params.0.params.filter': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {
 "where": {
  "$and": [
   {
    "$and": [
     {
      "openid": {
       "$eq": $w.auth.currentUser.openId
      }
     }
    ]
   }
  ]
 },
 "relateWhere": {}
}
    )}}
        }
    ],"onbutton1$web09ukp44f_success": [
      {
          key: 'wi6pdi9d94e',
          sourceKey: 'platform:cloud.callDataSource',
          handler: function({args}){ return $app.cloud.callDataSource(...args)},
          args: {
  "params": [
    {
      "dataSourceName": "zcyhxx_2y7u8nd",
      "methodName": "wedaUpdateV2",
      "options": {
        "showToast": false,
        "showLoading": false
      },
      "outputs": {},
      "params": {
        "data": {},
        "select": {
          "$master": true
        }
      }
    }
  ]
},
          argsBinds: {'params.0.params.data.wxtx': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.app.dataset.state.headImageUrl
    )},'params.0.params.filter': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {
 "where": {
  "$and": [
   {
    "$and": [
     {
      "openid": {
       "$eq": $w.auth.currentUser.openId
      }
     }
    ]
   }
  ]
 },
 "relateWhere": {}
}
    )}}
        }
    ],}

const dataBinds = {
  [PAGE_ROOT_SYMBOL]: {
    
  },
  uploadImage1: { 'callbacks.beforeUpload': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      result => {
  // console.log('beforeUpload', result);
  return true; // 可以通过返回false，禁用默认上传逻辑，自定义上传
  // return false;
}
    )}
  },
}

const query = {
}

const eventFlows = [
]

const datasetProfile = {
  "state": {}
}

createPage({
  app,
  pageContext: $page,
  id: 'u_tou_xiang_ni_cheng',
  widgetProps,
  lifecycle,
  state,
  computed,
  evtListeners,
  dataBinds,
  handlers,
  query,
  eventFlows,
  pageAttributes: {},
  resetShare: false,
  datasetProfile
})
