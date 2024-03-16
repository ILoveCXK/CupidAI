import { observable } from 'mobx'
import { createMpApp } from '@cloudbase/weda-client';
import { createComputed, formatEnum, enumOptions } from '../common/util'
import { generateDatasetQuery } from '../common/query'

import appGlobal from '../app/app-global'
import { createDataset } from '../datasources/index'

import lodashGet from 'lodash.get';
import config from '../common/config';


import state from '../lowcode/state'
import computed from '../lowcode/computed'
const common = {}

const mainAppKey = '__weappsMainApp'




export const app = createGlboalApi()
export const $app = new Proxy({}, { get: function(obj, prop){ return app[prop] }});
export const $w = new Proxy(
  {},
  {
    get(_, prop) {
      return app.__internal__.$w?.[prop];
    },
  },
);

globalThis.__wedaGlobal__ = new Proxy({
  app,
  $w
}, {
  get(_, prop) {
    switch(prop) {
      case 'app':
      case '$app':
        return app
      case '$w':
        return $w
    }
    return undefined
  }
})

function createGlboalApi() {
  const mpApp = createMpApp({
    appConfig: {
      staticResourceDomain: config.domain,
      ...({
  "id": "app-WgFJWtGV",
  "label": "CupidAI",
  "envId": "lowcode-7gho2eje9cf21d16",
  "envVersion": "production",
  "loginConfigVersion": "v1_6067365b5a76446e4022394d4918843d",
  "basename": "",
  "pages": [
    {
      "id": "u81h26k2dho",
      "type": ""
    },
    {
      "id": "index",
      "type": ""
    },
    {
      "id": "u_shang_chuan_zhao_pi",
      "type": ""
    },
    {
      "id": "u_suo_zai_da_xue",
      "type": ""
    },
    {
      "id": "u_tou_xiang_ni_cheng",
      "type": ""
    },
    {
      "id": "u_xing_bie",
      "type": ""
    },
    {
      "id": "u_yong_hu_zhu_ce",
      "type": ""
    }
  ]
})
    },
  });
  const globalAPI = Object.assign(mpApp, {
    domain: config.domain,
    pages: {},
    session: {
      //configure: sdk.configure,
      //request: sdk.request,
      //getSessionId: sdk.getSessionId,
    },
    state: observable(state),
    computed: createComputed(computed),
    common,
    ...mpApp,
    invoke(params) {
      const $page = globalAPI.utils.getCurrentPage();
      return $page.invokeComponentMethod(params)
    },
    // ... other sdk apis & apis from mp
  }) // The global api exposed to lowcode

  globalAPI.__internal__.enumOptions = enumOptions
  globalAPI.utils.formatEnum = formatEnum
  /**
   * @deprecated utils._getConfig
   */
  globalAPI.utils._getConfig = () => {
    return globalAPI.__internal__.getConfig()
  }

  let dataset = createDataset('$global')
  dataset.query = generateDatasetQuery({
  }, {
    $app: globalAPI,
    $w: globalAPI.__internal__.$w,
  })
  globalAPI.dataset = dataset
  globalAPI.state.dataset = dataset
  globalAPI.setState = (userSetState) => {
    Object.keys(userSetState).forEach((keyPath) => {
      globalAPI.utils.set(globalAPI.dataset.state, keyPath, userSetState[keyPath]);
    });
  };

  const subPackageName = ''
  if (subPackageName) {
    // is sub app
    globalAPI.mainApp = appGlobal[mainAppKey]
    const mpApp = getApp()
    mpApp && (mpApp.subApp = globalAPI)
  } else {
    // is mainApp
    appGlobal[mainAppKey] = globalAPI
  }

  // # expose some sdk modules
  /* const sdkModsIncluded = ['flow', 'getPageOptions', 'getLaunchOptions']
  sdkModsIncluded.forEach(key => {
    globalAPI[key] = sdk[key]
  }) */

  return globalAPI
}
