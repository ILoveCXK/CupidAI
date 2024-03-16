import { observable } from 'mobx';
import { createPage, PAGE_ROOT_SYMBOL } from '../../common/weapp-page'
import { concatClassList, px2rpx } from '../../common/style'
import { app, $app } from '../../app/weapps-api'
import { $4 as handlers } from '../../app/handlers'
import lifecycle from '../../lowcode/u_xing_bie/lifecycle'
import state from '../../lowcode/u_xing_bie/state'
import computed from '../../lowcode/u_xing_bie/computed'
import { $page, $w } from './api'
import { widgetProps } from './data'





/** widget event listeners **/
const evtListeners = {}

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
  id: 'u_xing_bie',
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
