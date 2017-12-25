const app = getApp()
module.exports = {
  userInfo: function (resolved, rejected){
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userInfo']) {
          wx.authorize({
            scope: 'scope.userInfo',
            success() {
              wx.getUserInfo({
                success(res) {
                  resolved(res.userInfo);
                }
              })
            }, fail() {
              //再授权
              wx.openSetting({
                success: (res) => {
                  if (res.authSetting["scope.userInfo"] === true) {
                    wx.getUserInfo({
                      success: res => {
                        resolved(res.userInfo);
                      }
                    })
                  }
                  else {
                    wx.showModal({
                      title: app.globalData.water.auth.prompt.title,
                      content: app.globalData.water.auth.prompt.msg,
                      showCancel: false,
                      success: function (res) {
                        if (res.confirm) {
                          rejected(res);
                        }
                      }
                    })
                  }
                }
              })
            }
          })
        } else {
          wx.getUserInfo({
            success(res) {
              resolved(res.userInfo);
            }
          })
        }
      }
    })
  }, loginInfo: function (resolved, rejected) {
    wx.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: app.globalData.host + app.globalData.water.url.login,
            method:'POST',
            header:{
              'WATERCODE': app.globalData.water.code
            },
            data: {
              code: res.code
            }, success: function (res) {
              resolved(res);
            },fail:function(res){
              rejected(res);
            }
          })
        } else {
          rejected("未获取到code");
        }
      },fail:function(res){
        rejected(res);
      }
    });    
  }, uploadUser: function (resolved, rejected,userInfo,token) {
    //发起网络请求
    wx.request({
      url: app.globalData.host + app.globalData.water.url.uploaduser,
      method: 'POST',
      header: {
        'WATERCODE': app.globalData.water.code,
        'Cookie': app.globalData.water.user.tokenname + "=" + token
      },
      data: {
        userInfo: userInfo
      }, success: function (res) {
        resolved(res);
      }, fail: function (res) {
        rejected(res);
      }
    })
  }, setStorageSync: function (key,value,time) {
    if (((typeof time) == 'number') && (time > 0 || time == -1)){
      var expireDate = new Date();
      var storeTime = time;
      if(time > 0){
        storeTime = expireDate.getTime() + Math.ceil(time) * 1000;
      }
      var data = {
        value: value,
        time: storeTime
      }
      wx.setStorageSync(key, data);
    }else{
      wx.showModal({
        title: "提示",
        content: "时间参数不正确",
        showCancel: false,
        success: function (res) {
          
        }
      })      
    }
  }, getStorageSync: function (key) {
    var result = null;
    var data = wx.getStorageSync(key);
    if(null != data && "" != data && undefined != data){
      if (null != data.value && data.time > 0){
        var curDate = new Date();
        var curTime = curDate.getTime();
        if (data.time >= curTime){
          result = data.value;
        }else{
          wx.removeStorageSync(key);
        }
      }else{
        result = data.value;
      }
    }
    return result;
  }
}