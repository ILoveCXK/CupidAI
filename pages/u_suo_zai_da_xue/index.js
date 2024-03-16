import { observable } from 'mobx';
import { createPage, PAGE_ROOT_SYMBOL } from '../../common/weapp-page'
import { concatClassList, px2rpx } from '../../common/style'
import { app, $app } from '../../app/weapps-api'
import { $2 as handlers } from '../../app/handlers'
const lifecycle = {}
const state = {}
const computed = {}
import { $page, $w } from './api'
import { widgetProps } from './data'





/** widget event listeners **/
const evtListeners = {"onselect1$search": [
      {
          key: 'wrb48ref6iz',
          sourceKey: 'platform:_setStateVal',
          handler: function({args}){ return $app._setStateVal(...args)},
          args: {
  "params": [
    {
      "varPath": "$global.college_name"
    }
  ]
},
          argsBinds: {'params.0.val': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      event.detail.value
    )}}
        }
    ],"onselect1$wrb48ref6iz_success": [
      {
          key: 'wpxh04kc7ga',
          sourceKey: 'platform:cloud.callDataSource',
          handler: function({args}){ return $app.cloud.callDataSource(...args)},
          args: {
  "params": [
    {
      "dataSourceName": "zgdx_0134dpw",
      "methodName": "wedaGetRecordsV2",
      "options": {
        "showToast": false,
        "showLoading": false
      },
      "outputs": "$page.college_possible",
      "params": {
        "select": {
          "$master": true
        }
      }
    }
  ]
},
          argsBinds: {'params.0.params.filter': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      {
 "where": {
  "$and": [
   {
    "$and": [
     {
      "xxmc": {
       "$search": $w.app.dataset.state.college_name
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
    ],"onselect1$wpxh04kc7ga_success": [
      {
          key: 'w49chdv5uas',
          sourceKey: 'platform:_setStateVal',
          handler: function({args}){ return $app._setStateVal(...args)},
          args: {
  "params": [
    {
      "varPath": "$page.college_possible"
    }
  ]
},
          argsBinds: {'params.0.val': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      event && event.detail.records
    )}}
        }
    ],"onuploadImage1$success": [
      {
          key: 'w7r539f3nz9',
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
          argsBinds: {'params.0.params.data.xszzm': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.uploadImage1.value
    )}}
        }
    ],"onuploadImage2$success": [
      {
          key: 'wu4b5rmkptu',
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
          argsBinds: {'params.0.params.data.xszfm': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.uploadImage2.value
    )}}
        }
    ],"onbutton1$tap": [
      {
          key: 'wksjpbz0u25',
          sourceKey: 'platform:showModal',
          handler: function({args}){ return $app.showModal(...args)},
          args: {
  "params": [
    {
      "cancelColor": "#000000",
      "cancelText": "返回",
      "confirmColor": "#576B95",
      "confirmText": "确认",
      "content": "为了确保您能获得最佳的匹配结果，请认真确保您提交的信息真实准确。提供错误或虚假信息可能会影响匹配成功率，甚至导致无法为您提供匹配服务。感谢您的理解和配合。",
      "showCancel": true,
      "title": "温馨提示"
    }
  ]
},
          argsBinds: {}
        }
    ],"onbutton1$wksjpbz0u25_confirm": [
      {
          key: 'w5eic2nyq43',
          sourceKey: 'platform:_setStateVal',
          handler: function({args}){ return $app._setStateVal(...args)},
          args: {
  "params": [
    {
      "varPath": "$global.college_name"
    }
  ]
},
          argsBinds: {'params.0.val': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.select1.value
    )}}
        },{
          key: 'wk3nmocrczg',
          sourceKey: 'platform:cloud.callDataSource',
          handler: function({args}){ return $app.cloud.callDataSource(...args)},
          args: {
  "params": [
    {
      "dataSourceName": "zcyhxx_2y7u8nd",
      "methodName": "wedaBatchUpdateV2",
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
          argsBinds: {'params.0.params.data.dx': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.app.dataset.state.college_name
    )},'params.0.params.data.nj': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.select3.value
    )},'params.0.params.data.xszfm': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.uploadImage2.value
    )},'params.0.params.data.xszzm': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.uploadImage1.value
    )},'params.0.params.data.zy': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.select2.value
    )}}
        },{
          key: 'wx9jt938r6z',
          sourceKey: 'platform:navigateTo',
          handler: function({args}){ return $app.navigateTo(...args)},
          args: {
  "params": [
    {
      "mode": "weDa",
      "pageId": "index",
      "params": {
        "id": ""
      }
    }
  ]
},
          argsBinds: {}
        }
    ],}

const dataBinds = {
  [PAGE_ROOT_SYMBOL]: {
    
  },
  select1: { 'range': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.page.dataset.state.college_possible.map((item) => ({label: item['xxmc'],value: item['value'],}))
    )}
  },
  select2: { 'range': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.page.dataset.state.majors.map((item) => ({label: item['zy'],value: item['value'],}))
    )}
  },
  select3: { 'range': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      $w.page.dataset.state.year_in_school.map((item) => ({label: item['nj'],value: item['value'],}))
    )}
  },
  uploadImage1: { 'callbacks.beforeUpload': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      result => {
  // console.log('beforeUpload', result);
  return true; // 可以通过返回false，禁用默认上传逻辑，自定义上传
  // return false;
}
    )}
  },
  uploadImage2: { 'callbacks.beforeUpload': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      result => {
  // console.log('beforeUpload', result);
  return true; // 可以通过返回false，禁用默认上传逻辑，自定义上传
  // return false;
}
    )}
  },
}

const query = {
  query1: { 
    ...({
  "id": "query1",
  "name": "query1",
  "type": "model",
  "trigger": "manual",
  "description": "",
  "data": {
    "params": [
      {
        "dataSourceName": "zgdx_0134dpw",
        "methodName": "wedaGetItemV2",
        "params": {
          "select": {
            "$master": true
          },
          "orderBy": []
        }
      }
    ]
  }
}),
    handler: (...args) => $app.cloud.callDataSource(...args),
    dataBinds: {'params.0.params.filter': ($page, lists, forItems, event, $context, $w, params) => {const $for = forItems; const $index=lists?.[0]?.currentIndex; return(
      ({
 "where": {
                xxmc: {
                  $search: $w.page.dataset.state.college_name
                },
          },
 "relateWhere": {}
})
    )}},
    eventHandlers: {}
  },
}

const eventFlows = [
]

const datasetProfile = {
  "state": {
    "majors": {
      "name": "majors",
      "label": "",
      "varType": "state",
      "dataType": "array",
      "initialValue": [
        {
          "zy": "哲学"
        },
        {
          "zy": "经济学"
        },
        {
          "zy": "法学"
        },
        {
          "zy": "教育学"
        },
        {
          "zy": "文学"
        },
        {
          "zy": "历史学"
        },
        {
          "zy": "理学"
        },
        {
          "zy": "工学"
        },
        {
          "zy": "农学"
        },
        {
          "zy": "医学"
        },
        {
          "zy": "管理学"
        },
        {
          "zy": "艺术学"
        },
        {
          "zy": "其他"
        }
      ]
    },
    "year_in_school": {
      "name": "year_in_school",
      "label": "",
      "varType": "state",
      "dataType": "array",
      "initialValue": [
        {
          "nj": "大一"
        },
        {
          "nj": "大一"
        },
        {
          "nj": "大二"
        },
        {
          "nj": "大三"
        },
        {
          "nj": "大四"
        },
        {
          "nj": "研一"
        },
        {
          "nj": "研二"
        },
        {
          "nj": "研三"
        },
        {
          "nj": "其他"
        }
      ]
    },
    "college_possible": {
      "name": "college_possible",
      "label": "",
      "varType": "state",
      "dataType": "array",
      "initialValue": []
    }
  }
}

createPage({
  app,
  pageContext: $page,
  id: 'u_suo_zai_da_xue',
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
