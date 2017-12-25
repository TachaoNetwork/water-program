//引入基础架构
var water = require("../../../res/lib/water.js");
//引入promise
var Promise = require("../../../res/lib/promise.js");

Page({
  data: {
    baseInfo:null,
  }, getLoginInfo: function (e){
    var that = this;
    new Promise((resolved, rejected) => {
      water.loginInfo(resolved, rejected);
    }).then(function (value) {
      console.log(value)
      that.setData({
        baseInfo: value
      });
    }, function (error) {
      console.log(error)
    });
  }
})