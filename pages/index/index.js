//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },

  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '踏潮微信小程序框架(Water)',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  getUserInfo:function(e){
    wx.navigateTo({
      url: '/pages/water/user/user',
    })
  },
  getLoginInfo:function(e){
    wx.navigateTo({
      url: '/pages/water/login/login',
    })    
  },
  uploadUserInfo:function(e){
    wx.navigateTo({
      url: '/pages/water/upload/user',
    })    
  },
  setStorageSync: function (e) {
    wx.navigateTo({
      url: '/pages/water/storage/set',
    })
  }, 
  getStorageSync: function (e) {
    wx.navigateTo({
      url: '/pages/water/storage/get',
    })
  },  

  onLoad: function () {

  }
})
