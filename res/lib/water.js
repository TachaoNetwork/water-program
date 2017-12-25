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
                      title: '用户信息未授权',
                      content: '如需正常使用小程序，请点击授权按钮，勾选用户信息并点击确定。',
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
  }
}