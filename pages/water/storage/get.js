//引入基础架构
var water = require("../../../res/lib/water.js");

Page({
  data: {
    storgageVal:null
  },

  getStorageSync:function(e){
    var result = water.getStorageSync('wtt');
    this.setData({
      storgageVal : result
    })
    console.log(result);
  },

  onLoad: function (options) {
  
  }
})