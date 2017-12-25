//引入基础架构
var water = require("../../../res/lib/water.js");
//引入promise
var Promise = require("../../../res/lib/promise.js");

Page({

  data: {
  
  },
  uploadUserInfo:function(e){
    var that = this;

    var userinfo = null;//获得用户基本信息
    var token = null;//获得用户token

    new Promise((resolved, rejected) => {
      water.uploadUser(resolved, rejected,userinfo,token);
    }).then(function (value) {
      console.log(value)
    }, function (error) {
      console.log(error);
    });
  },

  onLoad: function (options) {
  
  }
})