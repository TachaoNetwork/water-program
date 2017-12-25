//引入基础架构
var water = require("../../../res/lib/water.js");
//引入promise
var Promise = require("../../../res/lib/promise.js");

Page({

  data: {
  
  },
  setStorageSync:function(e){
    water.setStorageSync('wtt', '123456',100);
    wx.showToast({
      title: '设置成功',
      icon: 'success',
      duration: 2000
    })    
  },

  onLoad: function (options) {
  
  }
})