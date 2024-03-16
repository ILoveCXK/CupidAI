// pages/login/components/input.ts
Component({
  options: {
    virtualHost: true,
    styleIsolation: 'shared'
  },
  behaviors: ['wx://form-field'],

  /**
   * 组件的属性列表
   */
  properties: {
    type: String,
    placeholder: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    name: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    focus(e) {
      this.triggerEvent('focus', e.detail)
    },
    blur(e) {
      this.triggerEvent('blur', e.detail)
    },
    setValue(e) {
      this.setData({
        value: e.detail
      })
    }
  }
})
