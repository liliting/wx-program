//index.js
//获取应用实例
import { getLocation} from '../../utils/util.js'
const app = getApp()

Page({
  data: {
     markers: [{
       iconPath: "/images/location.png",
       id: 0,
       latitude: 23.099994,
       longitude: 113.324520,
       width: 50,
       height: 50,
       title: '中山大学'
     }],
     polyline: [{
       points: [{
         longitude: 113.3245211,
         latitude: 23.10229
       }, {
         longitude: 113.324520,
         latitude: 23.21229
       }],
       color: "#FF0000DD",
       width: 2,
       dottedLine: true
     }],
     controls: [{
       id: 1,
       iconPath: '/images/location.png',
       position: {
         left: 0,
         top: 300 - 50,
         width: 50,
         height: 50
       },
       clickable: true
     }],
     location:''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  regionChange: function(e){
    console.log(e);
  },
  markertap: function(e){
    console.log(e);
    
  },
  onLoad: function () {
    getLocation();
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
