//app.js
App({
  onLaunch: function () {

  },
  globalData: {
    host:'http://127.0.0.1:8080',
    water:{
      code:'water',
      user:{
        tokenname:'wtd',
      },
      auth:{
        prompt:{
          title:'用户信息未授权',
          msg:'如需正常使用小程序，请点击授权按钮，勾选用户信息并点击确定。'
        }
      },
      url:{
        login:'/',
        uploaduser:'/'
      }
    },
    userInfo: null
  }
})