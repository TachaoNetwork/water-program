//引入基础架构
var water = require("../../../res/lib/water.js");

Page({
  data: {
  
  },

  getStorageSync:function(e){
    var result = water.getStorageSync('wtt');
    console.log(result);
  },

  onLoad: function (options) {
  
  }
})