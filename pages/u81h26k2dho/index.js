import { observable } from 'mobx';
import { createPage, PAGE_ROOT_SYMBOL } from '../../common/weapp-page'
import { concatClassList, px2rpx } from '../../common/style'
import { app, $app } from '../../app/weapps-api'
import { $6 as handlers } from '../../app/handlers'
const lifecycle = {}
const state = {}
const computed = {}
import { $page, $w } from './api'
import { widgetProps } from './data'





/** widget event listeners **/
const evtListeners = {"onbutton1$tap": [
      {
          key: 'wpex2vinuis',
          sourceKey: 'platform:navigateTo',
          handler: function({args}){ return $app.navigateTo(...args)},
          args: {
  "params": [
    {
      "mode": "weDa",
      "pageId": "u_yong_hu_zhu_ce",
      "params": {}
    }
  ]
},
          argsBinds: {}
        }
    ],"onbutton3$tap": [
      {
          key: 'w98fafjdsa0',
          sourceKey: 'u81h26k2dho:login',
          handler: handlers.login,
          args: {
  "params": [
    {}
  ]
},
          argsBinds: {}
        }
    ],"onbutton4$tap": [
      {
          key: 'wrbe0gzpkyr',
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
    ],"onbutton5$tap": [
      {
          key: 'wao9zu16rzf',
          sourceKey: 'platform:invoke',
          handler: function({data, $w}){ return $app.invoke({...data, component: $w[data?.component]?._widget});},
          args: {
  "params": [
    {
      "component": "modal2",
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
    ],"onicon1$tap": [
      {
          key: 'wdModal7835',
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
    ],"onbutton6$tap": [
      {
          key: 'wdModal7450',
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
    ],"onbutton7$tap": [
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
          key: 'wdModal7835',
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
    ],"onbutton8$tap": [
      {
          key: 'wdModal7450',
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
    ],"onbutton9$tap": [
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
  id: 'u81h26k2dho',
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
