import { observable } from 'mobx';
import { createPage, PAGE_ROOT_SYMBOL } from '../../common/weapp-page'
import { concatClassList, px2rpx } from '../../common/style'
import { app, $app } from '../../app/weapps-api'
import { $5 as handlers } from '../../app/handlers'
const lifecycle = {}
const state = {}
const computed = {}
import { $page, $w } from './api'
import { widgetProps } from './data'





/** widget event listeners **/
const evtListeners = {"onform1$onDataChange": [
      {
          key: '',
          sourceKey: ':',
          handler: ({event})=>{
      if(event.currentTarget) {
        $app.utils.set(event.currentTarget._scope, 'dataContext.data', event?.detail?.data);
        $app.utils.set(event.currentTarget._scope, 'dataContext.state', event?.detail?.state);
      }
    },
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onform1$submit": [
      {
          key: 'w3cfk0dd1',
          sourceKey: 'platform:invoke',
          handler: function({data, $w}){ return $app.invoke({...data, component: $w[data?.component]?._widget});},
          args: {
  "params": [
    {
      "component": "form1",
      "method": "disableSubmit",
      "module": "gsd-h5-react"
    }
  ]
},
          argsBinds: {}
        }
    ],"onform1$w3cfk0dd1_success": [
      {
          key: 'w3e1pahnb',
          sourceKey: 'platform:cloud.callDataSource',
          handler: function({args}){ return $app.cloud.callDataSource(...args)},
          args: {
  "params": [
    {
      "dataSourceName": "zcyhxx_2y7u8nd",
      "methodName": "wedaCreateV2",
      "options": {
        "showToast": false,
        "showLoading": true
      }
    }
  ]
},
          argsBinds: {'params.0.params': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.form1.submitParams
    )}}
        }
    ],"onform1$w3e1pahnb_success": [
      {
          key: 'w3bvdhhsp',
          sourceKey: 'platform:invoke',
          handler: function({data, $w}){ return $app.invoke({...data, component: $w[data?.component]?._widget});},
          args: {
  "params": [
    {
      "component": "form1",
      "method": "enableSubmit",
      "module": "gsd-h5-react"
    }
  ]
},
          argsBinds: {}
        },{
          key: 'wa2m2eydz',
          sourceKey: 'platform:showToast',
          handler: function({args}){ return $app.showToast(...args)},
          args: {
  "params": [
    {
      "icon": "success",
      "title": "提交成功"
    }
  ]
},
          argsBinds: {}
        },{
          key: 'w4k5psjzozt',
          sourceKey: 'u_yong_hu_zhu_ce:function1',
          handler: handlers.function1,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onform1$w3e1pahnb_fail": [
      {
          key: 'wsj0x5612',
          sourceKey: 'platform:invoke',
          handler: function({data, $w}){ return $app.invoke({...data, component: $w[data?.component]?._widget});},
          args: {
  "params": [
    {
      "component": "form1",
      "method": "enableSubmit",
      "module": "gsd-h5-react"
    }
  ]
},
          argsBinds: {}
        },{
          key: 'w499pznql',
          sourceKey: 'platform:showModal',
          handler: function({args}){ return $app.showModal(...args)},
          args: {
  "params": [
    {
      "cancelColor": "#000000",
      "cancelText": "取消",
      "confirmColor": "#576B95",
      "confirmText": "确认",
      "showCancel": false,
      "title": "提交失败"
    }
  ]
},
          argsBinds: {'params.0.content': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      event.detail.message || JSON.stringify(event.detail)
    )}}
        }
    ],"onbutton2$tap": [
      {
          key: 'w66v0ebpieh',
          sourceKey: 'platform:invoke',
          handler: function({data, $w}){ return $app.invoke({...data, component: $w[data?.component]?._widget});},
          args: {
  "params": [
    {
      "component": "modal1",
      "method": "open",
      "params": {
        "info": ""
      },
      "module": "gsd-h5-react"
    }
  ]
},
          argsBinds: {}
        }
    ],"onbutton3$tap": [
      {
          key: 'w3vaxkr3xo6',
          sourceKey: 'platform:invoke',
          handler: function({data, $w}){ return $app.invoke({...data, component: $w[data?.component]?._widget});},
          args: {
  "params": [
    {
      "component": "modal2",
      "method": "open",
      "params": {},
      "module": "gsd-h5-react"
    }
  ]
},
          argsBinds: {}
        }
    ],"onicon1$tap": [
      {
          key: 'wdModal521',
          sourceKey: 'platform:invoke',
          handler: function({data, $w}){ return $app.invoke({...data, component: $w[data?.component]?._widget});},
          args: {
  "params": [
    {
      "component": "modal1",
      "method": "close",
      "params": {
        "info": "icon"
      },
      "module": "gsd-h5-react"
    }
  ]
},
          argsBinds: {}
        }
    ],"onbutton4$tap": [
      {
          key: 'wdModal6008',
          sourceKey: 'platform:invoke',
          handler: function({data, $w}){ return $app.invoke({...data, component: $w[data?.component]?._widget});},
          args: {
  "params": [
    {
      "component": "modal1",
      "method": "close",
      "params": {
        "info": "cancel"
      },
      "module": "gsd-h5-react"
    }
  ]
},
          argsBinds: {}
        }
    ],"onbutton5$tap": [
      {
          key: 'wdModal6964',
          sourceKey: 'platform:invoke',
          handler: function({data, $w}){ return $app.invoke({...data, component: $w[data?.component]?._widget});},
          args: {
  "params": [
    {
      "component": "modal1",
      "method": "close",
      "params": {
        "info": "confirm"
      },
      "module": "gsd-h5-react"
    }
  ]
},
          argsBinds: {}
        }
    ],"onicon2$tap": [
      {
          key: 'wdModal521',
          sourceKey: 'platform:invoke',
          handler: function({data, $w}){ return $app.invoke({...data, component: $w[data?.component]?._widget});},
          args: {
  "params": [
    {
      "component": "modal2",
      "method": "close",
      "params": {
        "info": "icon"
      },
      "module": "gsd-h5-react"
    }
  ]
},
          argsBinds: {}
        }
    ],"onbutton6$tap": [
      {
          key: 'wdModal6008',
          sourceKey: 'platform:invoke',
          handler: function({data, $w}){ return $app.invoke({...data, component: $w[data?.component]?._widget});},
          args: {
  "params": [
    {
      "component": "modal2",
      "method": "close",
      "params": {
        "info": "cancel"
      },
      "module": "gsd-h5-react"
    }
  ]
},
          argsBinds: {}
        }
    ],"onbutton7$tap": [
      {
          key: 'wdModal6964',
          sourceKey: 'platform:invoke',
          handler: function({data, $w}){ return $app.invoke({...data, component: $w[data?.component]?._widget});},
          args: {
  "params": [
    {
      "component": "modal2",
      "method": "close",
      "params": {
        "info": "confirm"
      },
      "module": "gsd-h5-react"
    }
  ]
},
          argsBinds: {}
        }
    ],}

const dataBinds = {
  [PAGE_ROOT_SYMBOL]: {
    
  },
  input6: { 'inputValue': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.auth.currentUser.openId
    )}
  },
  input7: { 'inputValue': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      "1"
    )}
  },
  button1: { 'disabled': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.form1.isDisabledSubmit
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
  id: 'u_yong_hu_zhu_ce',
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
