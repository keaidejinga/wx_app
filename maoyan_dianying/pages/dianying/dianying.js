// pages/dianying/dianying.js


// 引入SDK核心类
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "imgUrls": ["../../image/1.jpg", "../../image/2.jpg", "../../image/3.jpg", "../../image/4.jpg", "../../image/5.jpg"],

    "images":[],
    "movieList": [
      {
        "id": 343208,
        "haspromotionTag": false,
        "img": "http://p1.meituan.net/w.h/movie/7a2c3acb1bda2baad8df309b046d0872344909.jpg",
        "version": "v3d imax",
        "nm": "蚁人2：黄蜂女现身",
        "preShow": false,
        "sc": 0,
        "globalReleased": true,
        "wish": 319327,
        "star": "保罗·路德,伊万杰琳·莉莉,迈克尔·佩纳",
        "rt": "2018-08-24",
        "showInfo": "今天58家影院放映1171场",
        "showst": 3,
        "wishst": 0
      },
      {
        "id": 1218190,
        "haspromotionTag": false,
        "img": "http://p1.meituan.net/w.h/movie/091f305b0a415080d5cb3a0a470d0763431429.jpg",
        "version": "",
        "nm": "大师兄",
        "preShow": false,
        "sc": 9.5,
        "globalReleased": true,
        "wish": 95461,
        "star": "甄子丹,陈乔恩,喻亢",
        "rt": "2018-08-24",
        "showInfo": "今天57家影院放映478场",
        "showst": 3,
        "wishst": 0
      },
      {
        "id": 341737,
        "haspromotionTag": false,
        "img": "http://p0.meituan.net/w.h/movie/53e39ceee7bfbada4dc89bd93bbd334b198786.jpg",
        "version": "v3d imax",
        "nm": "碟中谍6：全面瓦解",
        "preShow": false,
        "sc": 0,
        "globalReleased": false,
        "wish": 178301,
        "star": "汤姆·克鲁斯,亨利·卡维尔,文·瑞姆斯",
        "rt": "2018-08-31",
        "showInfo": "2018-08-31 下周五上映",
        "showst": 4,
        "wishst": 0
      },
      {
        "id": 1203084,
        "haspromotionTag": false,
        "img": "http://p0.meituan.net/w.h/movie/c6b9bfb37fdb6dc01f700bd3f8d383c92054736.jpg",
        "version": "",
        "nm": "一出好戏",
        "preShow": false,
        "sc": 8.2,
        "globalReleased": true,
        "wish": 411582,
        "star": "黄渤,舒淇,王宝强",
        "rt": "2018-08-10",
        "showInfo": "今天51家影院放映147场",
        "showst": 3,
        "wishst": 0
      },
      {
        "id": 346178,
        "haspromotionTag": false,
        "img": "http://p0.meituan.net/w.h/movie/fb91bf43588aecad953d6df0b2b1218e50396.jpg",
        "version": "v3d imax",
        "nm": "巨齿鲨",
        "preShow": false,
        "sc": 8.8,
        "globalReleased": true,
        "wish": 406648,
        "star": "杰森·斯坦森,李冰冰,雷恩·威尔森",
        "rt": "2018-08-10",
        "showInfo": "今天48家影院放映137场",
        "showst": 3,
        "wishst": 0
      },
      {
        "id": 1218299,
        "haspromotionTag": false,
        "img": "http://p1.meituan.net/w.h/movie/14e56351582b639421099f8270a9a2f42068044.jpg",
        "version": "v3d",
        "nm": "深海历险记",
        "preShow": false,
        "sc": 0,
        "globalReleased": true,
        "wish": 15448,
        "star": "张璐,陈红,张云龙",
        "rt": "2018-08-24",
        "showInfo": "今天52家影院放映136场",
        "showst": 3,
        "wishst": 0
      },
      {
        "id": 569712,
        "haspromotionTag": false,
        "img": "http://p1.meituan.net/w.h/movie/5e167f3334700264f19a1c47ca4a012912655725.jpg",
        "version": "",
        "nm": "黑子的篮球·终极一战",
        "preShow": false,
        "sc": 0,
        "globalReleased": true,
        "wish": 128978,
        "star": "小野贤章,苏尚卿,小野友树",
        "rt": "2018-08-24",
        "showInfo": "今天38家影院放映124场",
        "showst": 3,
        "wishst": 0
      },
      {
        "id": 1216446,
        "haspromotionTag": false,
        "img": "http://p1.meituan.net/w.h/movie/012ad8d605f1983543106f9adeab712b2631588.jpg",
        "version": "",
        "nm": "快把我哥带走",
        "preShow": false,
        "sc": 9,
        "globalReleased": true,
        "wish": 171988,
        "star": "张子枫,彭昱畅,赵今麦",
        "rt": "2018-08-17",
        "showInfo": "今天42家影院放映119场",
        "showst": 3,
        "wishst": 0
      },
      {
        "id": 343070,
        "haspromotionTag": false,
        "img": "http://p0.meituan.net/w.h/movie/830459ae19f5cacac0dd21dba56caf031867206.jpg",
        "version": "v3d",
        "nm": "精灵旅社3：疯狂假期",
        "preShow": false,
        "sc": 8.6,
        "globalReleased": true,
        "wish": 133532,
        "star": "亚当·桑德勒,赛琳娜·戈麦斯,凯瑟琳·哈恩",
        "rt": "2018-08-17",
        "showInfo": "今天32家影院放映61场",
        "showst": 3,
        "wishst": 0
      },
      {
        "id": 892394,
        "haspromotionTag": false,
        "img": "http://p1.meituan.net/w.h/movie/af6eaacabc7928f65a73632d1ecbfa72127713.jpg",
        "version": "",
        "nm": "奇怪的袜子精灵",
        "preShow": false,
        "sc": 0,
        "globalReleased": true,
        "wish": 4025,
        "star": "克里斯托弗·哈德克,马瑞克·塔西里克,Stanislav Zindulka",
        "rt": "2018-08-24",
        "showInfo": "今天15家影院放映39场",
        "showst": 3,
        "wishst": 0
      },
      {
        "id": 1212592,
        "haspromotionTag": false,
        "img": "http://p0.meituan.net/w.h/movie/9cf86d0cbd3861c9dbc3f1e3189b32251042527.jpg",
        "version": "v2d imax",
        "nm": "西虹市首富",
        "preShow": false,
        "sc": 9.2,
        "globalReleased": true,
        "wish": 339761,
        "star": "沈腾,宋芸桦,张一鸣",
        "rt": "2018-07-27",
        "showInfo": "今天16家影院放映31场",
        "showst": 3,
        "wishst": 0
      },
      {
        "id": 439495,
        "haspromotionTag": false,
        "img": "http://p0.meituan.net/w.h/movie/bf72eeacc260d6866ab6bb627cfbfcde4691545.jpg",
        "version": "",
        "nm": "苏丹",
        "preShow": false,
        "sc": 0,
        "globalReleased": false,
        "wish": 22558,
        "star": "萨尔曼·汗,安努舒卡·莎玛,兰迪普·弘达",
        "rt": "2018-08-31",
        "showInfo": "2018-08-31 下周五上映",
        "showst": 4,
        "wishst": 0
      }
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    for (var i = 0, len = this.data.movieList.length;i<len;i++){
      var img = this.data.movieList[i].img
      var IMG=img.replace('w.h','128.180')
 
      this.setData({
          [`movieList[${i}].img`]:IMG
      })
    }
    

    qqmapsdk = new QQMapWX({
      key: 'KDXBZ-V4DCU-TJ4VE-2D7FV-Q7NV3-KLBFS'
    });
    wx.authorize({
      scope: 'scope.userLocation',
      success:function(res) {
        // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
       
        wx.getLocation({
          type: 'wgs84',
          success: function (res) {
            var latitude = res.latitude
            var longitude = res.longitude
            var speed = res.speed
            var accuracy = res.accuracy
            console.log(res)

            qqmapsdk.reverseGeocoder({
              location: {
                latitude: res.latitude,
                longitude: res.longitude
              },
              success:function(res){
                console.log(res)
              }
              
            })
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})