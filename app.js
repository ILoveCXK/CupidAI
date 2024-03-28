import lifeCycle from './lowcode/lifecycle'
import { app, $app } from './app/weapps-api';
// 引入数据源管理器并进行初始化
import {
  EXTRA_API,
  createStateDataSourceVar,
  generateParamsParser,
} from './datasources/index';

App({
  onLaunch(){
    wx.cloud.init({
      env:"env-8gg9g2zj0490613d"
    })
  },
  _query: {},
  globaldata: {
    _beforeCustomLaunchPromise: null,
  },
  async beforeCustomLaunch(query) {
    if (!this.globaldata?._beforeCustomLaunchPromise) {
      if (!this.globaldata) {
        this.globaldata = {};
      }
      this.globaldata._beforeCustomLaunchPromise = new Promise(async (resolve) => {
        try {
          EXTRA_API.setParams('$global', query || {});
          await createStateDataSourceVar('$global', generateParamsParser({ app, $page: {}, $w: app.__internal__?.$w }));
        } catch (e) {
          throw e;
        } finally {
          for (const queryId in app.dataset?.query || {}) {
            if (app.dataset.query[queryId]?._schema?.trigger === 'auto') {
              /**
               * query 初始化不阻塞生命周期
               */
              Promise.resolve()
                .then(async () => {
                  await app.dataset?.query?.[queryId]?.initPromise;
                  return app.dataset?.query?.[queryId]?.trigger?.();
                })
                .catch((e) => {
                  console.error(`query ${queryId} 初始化失败：`, e);
                });
            }
          }
          resolve();
        }
      });
    }
    return this.globaldata._beforeCustomLaunchPromise;
  },
  async onLaunch(options) {
    if (wx.onLazyLoadError) {
      wx.onLazyLoadError(({ type, subpackage, errMsg}) => {
        console.log('subpackage')
        if(type === 'subpackage' && subpackage?.find(item=>item === 'materials')) {
          wx.showModal({
            title: '组件包加载失败',
            content: `加载组件包超时：${errMsg}，请退出重新进入。`,
            showCancel: false,
            success (res) {
              return
            }
          })

        }
      })
    }
    this.app = app;
    const onLaunch = lifeCycle.onLaunch || lifeCycle.onAppLaunch;
    let { query = {} } = options;
    this._query = query;

    await this.beforeCustomLaunch(query);
    onLaunch && onLaunch.call(this, options);
    // 初始私有全局数据
    this.$$global = {
      homePageId: '',
    };
  },
  async onShow(options) {
    await this.beforeCustomLaunch(this._query);
    const fn = lifeCycle.onShow || lifeCycle.onAppShow;
    fn && fn.call(this, options);
  },
  onHide() {
    const fn = lifeCycle.onHide || lifeCycle.onAppHide;
    fn && fn.call(this);
  },
  onError(msg) {
    const fn = lifeCycle.onError || lifeCycle.onAppError;
    fn && fn.call(this, msg);
  },
  onPageNotFound() {
    const fn = lifeCycle.onPageNotFound || lifeCycle.onAppPageNotFound;
    fn && fn.call(this);
  },
  onUnhandledRejection() {
    const fn = lifeCycle.onUnhandledRejection || lifeCycle.onAppUnhandledRejection;
    fn && fn.call(this);
  },
});
