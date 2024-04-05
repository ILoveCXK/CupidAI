// pages/login/login.ts
const app = getApp()
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
Page({

    /**
    * 页面的初始数据
    */
    data: {
      theme:wx.getSystemInfoSync().theme,
      // 用户信息
      userInfo: {
        // 头像(链接是默认头像)
        avatarUrl: defaultAvatarUrl,
        // 昵称
        nickname: '',
        age: 0,
        // 性别
        gender:0,
      }
    },
     /**
      * 生命周期函数--监听页面加载
      */
    onLoad() {
      wx.onThemeChange((result) => {
        this.setData({
          theme: result.theme
        })
      })
    },
    /**
     * 获取用户头像
     * @description 当用户选择"使用微信头像"后触发
     * @param {Object} e - 用户头像
     * @return void
     */
    onChooseAvatar(e) {
      // 获取头像临时路径(并设置显示到本地)
      const { avatarUrl } = e.detail 
      this.setData({
        'userInfo.avatarUrl': avatarUrl,
      })
      // 拿到的是"临时路径",需要配合后端上传保存用户头像
      // 示例: wxfile://tmp_324324
    },
  
    /**
     * 获取用户昵称
     * @description 实际上就是普通输入框,双向绑定而已
     * @param {Object} e - 输入框的内容
     * @return void
     */
    getNickname(e) {
      // 设置到本地显示
      console.log(e.detail.value)
      this.setData({
        'userInfo.nickname': e.detail.value
      })
    },
    getAge(e) {
      // 设置到本地显示
      console.log(e.detail.value)
      this.setData({
        'userInfo.age': e.detail.value
      })
    },
    getGender(e) {
      // 设置到本地显示
      console.log(e.detail.value)
      this.setData({
        'userInfo.gender': e.detail.value
      })
    },
  register(){
    console.log(Date.now())
    const db = wx.cloud.database({
      env:"env-8gg9g2zj0490613d"
    })
    db.collection('chat_users').add({
      data:{
        num: Date.now(),
        faceImg: this.data.userInfo.avatarUrl,
        nickName: this.data.userInfo.nickname,
        age:this.data.userInfo.age,
        gender:this.data.userInfo.gender,
      },
      success(res){
        console.log(res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})