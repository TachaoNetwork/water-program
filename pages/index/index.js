//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

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
