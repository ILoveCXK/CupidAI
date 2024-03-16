import { app, $app } from '../../../../app/weapps-api'
import loginByPassword from './methods/loginByPassword'
import loginByWXPhone from './methods/loginByWXPhone'
import { getLoginConfig } from '../../../../common/util'

function decodePageQuery(query) {
  return Object.keys(query).reduce((decoded, key) => {
    decoded[key] = decodeURIComponent(query[key]);
    return decoded;
  }, {});
}

Component({
  data: {
    params: {},
    initing: true,
    error: null,
    settingData: {
      "logo": "",
      "agreement": {
        "items": [],
        "enable": false
      },
      "miniprogram": [],
    },
    pageStyle: '',
    agreement: false,
    wxLoginStatus: '',
    passwordVisible: false,
    enablePassword: false,
    enableMpPhone: false
  },
  methods: {
    async getPhoneCodeNumber(e) {
      if (
        e?.detail?.errMsg?.includes('fail') ||
        e?.detail?.errno ||
        !e?.detail?.code
      ) {
        console.warn(
          '获取手机号授权令牌失败:',
          !e?.detail.code ? { errMsg: '可能基础库版本过低' } : e.detail
        );

        $app.showModal({
          "cancelColor": "#000000",
          "cancelText": "取消",
          "confirmColor": "#576B95",
          "confirmText": "确认",
          "showCancel": true,
          "title": "获取手机号授权令牌失败",
          "content": `获取手机号授权令牌失败: ${e.detail.errno || e.detail?.errMsg || '可能基础库版本过低'}`
        })

        return;
      }

      return loginByWXPhone(this, { event: e })
    },
    async onLoad(options) {
      try {
        const config = await getLoginConfig().catch(() => {
          return getLoginConfig()
        })
        const query = decodePageQuery(options || {});
        let settingData = {
          "logo": app.__internal__.resolveStaticResourceUrl(config.logo)  || "https://sso-1303824488.cos.ap-shanghai.myqcloud.com/logo.svg",
          "agreement": {
            "items": [],
            "enable": false,
            ...config.agreement
          },
          "miniprogram": config.miniprogram || [],
        }
        this.setData({
          params: query,
          settingData,
          enablePassword: this._getEnablePassword(settingData),
          enableMpPhone: this._getEnableMpPhone(settingData),
          pageStyle: `${this.data.pageStyle}; background-color: ${config.backgroundColor || '#fff'};`,
          initing: false
        })
      } catch(e) {
        console.error('获取登录配置失败:', e)
        this.setData({
          initing: false,
          error: {
            message: '获取登录配置失败,' + (e.message || '')
          }
        })
      }
    },
    togglePasswordVisible() {
      this.setData({
        passwordVisible: !this.data.passwordVisible
      })
    },
    loginByPassword(e) {
      const values = e.detail.value

      return loginByPassword(this, { username: values?.username?.value, password: values?.password?.value })
    },
    showAgreement(e) {
      const index = e.currentTarget?.dataset?.index
      const agreementContent = this.data.settingData.agreement.items[index]?.value
      this.setData({
        agreementContent,
        isShowAgreement: !!agreementContent
      })
    },
    checkAgreement(e) {
      if (this.data.settingData.agreement.enable && !this.data.agreement) {
        app.showToast({ title: '请阅读勾选协议', icon: 'error', duartion: 1500 })

        return false;
      }
      return true;
    },
    onAgreementChange(e) {
      this.setData({
        agreement: e.detail.value.length > 0
      })
    },
    _getEnablePassword(settingData) {
      const config = settingData || this.data.settingData
      return config.miniprogram?.find?.(item => item.type === 'password')?.enable ?? false
    },
    _getEnableMpPhone(settingData) {
      const config = settingData || this.data.settingData
      return !!config.miniprogram.find(function (item) { return item.type === 'miniprogram_phone' }
      )
    },
  }
})
