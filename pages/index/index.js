//index.js
//获取应用实例
const app = getApp()
//引入基础架构
var water = require("../../res/lib/water.js");
//引入promise
var Promise = require("../../res/lib/promise.js");

Page({
  data: {
    //用户信息
    userInfo:null
  },
  //获取头像
  getUserInfo:function(e){
    var that = this;
    new Promise((resolved, rejected) => {
      water.userInfo(resolved, rejected,true);
    }).then(function (value) {
      that.setData({
        userInfo: value
      });
    }, function (error) {
      //TODO SOMETHING
    });
  },
  onLoad: function () {

  }
})
