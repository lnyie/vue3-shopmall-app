import {
  ImagesItem,
  Images2Item,
  TabListItem,
  GoodsList,
  TabslabelItem,
  CategoryDataItem,
  GoodsDetailInterface
} from '@/utils/type'

interface IHomeImgList {
  status: number,
  images: ImagesItem[],
  images2: Images2Item[],
  tabList: TabListItem[],
  goodsList: GoodsList
}

interface IcategoryData {
  status: number,
  tabslabel: TabslabelItem[],
  categoryData: CategoryDataItem[]
}

const Mock = require('mockjs')
const jwt = require('jsonwebtoken')

const homeImgList: IHomeImgList = {
  status: 0,
  images: [{
    imgUrl: require('@/assets/images/home/banner1.jpg'),
    categoryId: 100018
  }, {
    imgUrl: require('@/assets/images/home/banner4.jpg'),
    categoryId: 100035
  }],
  images2: [{
    imgUrl: require('@/assets/images/home/nav1.png'),
    name: '网上超市',
    navId: 1001
  }, {
    imgUrl: require('@/assets/images/home/nav2.png'),
    name: '潮流新衣',
    navId: 1002
  }, {
    imgUrl: require('@/assets/images/home/nav3.png'),
    name: '旅游出行',
    navId: 1003
  }, {
    imgUrl: require('@/assets/images/home/nav4.png'),
    name: '每日生鲜',
    navId: 1004
  }, {
    imgUrl: require('@/assets/images/home/nav5.png'),
    name: '配送到家',
    navId: 1005
  }, {
    imgUrl: require('@/assets/images/home/nav6.png'),
    name: '充值缴费',
    navId: 1006
  }, {
    imgUrl: require('@/assets/images/home/nav7.png'),
    name: '低价拼团',
    navId: 1007
  }, {
    imgUrl: require('@/assets/images/home/nav8.png'),
    name: '领券中心',
    navId: 1008
  }, {
    imgUrl: require('@/assets/images/home/nav9.png'),
    name: '钱包',
    navId: 1009
  }, {
    imgUrl: require('@/assets/images/home/nav10.png'),
    name: '更多',
    navId: 1010
  }],
  tabList: [{
    title: '精选',
    name: '猜你喜欢',
    list: [{
      name: '美妆护肤品',
      img: require('@/assets/images/goods/美妆-1.png'),
      title: '限量套装 新品上市',
      forceValue: 0.5,
      price: '¥ 525'
    }, {
        name: '美妆护肤品',
        img: require('@/assets/images/goods/美妆-2.png'),
        title: '限量套装 新品上市',
        forceValue: 1.3,
        price: '¥ 525'
    }, {
        name: '美妆护肤品',
        img: require('@/assets/images/goods/美妆-3.png'),
        title: '限量套装 新品上市',
        forceValue: 1.9,
        price: '¥ 525'
    }, {
        name: '美妆护肤品',
        img: require('@/assets/images/goods/美妆-4.png'),
        title: '限量套装 新品上市',
        forceValue: 1.6,
        price: '¥ 525'
    }, {
        name: '美妆护肤品',
        img: require('@/assets/images/goods/美妆-5.png'),
        title: '限量套装 新品上市',
        forceValue: 2.3,
        price: '¥ 525'
    }, {
        name: '美妆护肤品',
        img: require('@/assets/images/goods/美妆-6.png'),
        title: '限量套装 新品上市',
        forceValue: 2.7,
        price: '¥ 525'
    }, {
        name: '多功能料理机',
        img: require('@/assets/images/home/test1.png'),
        title: '限量套装 新品上市',
        forceValue: 0.5,
        price: '¥ 125'
    }, {
        name: '遥控制空调扇',
        img: require('@/assets/images/home/test2.png'),
        title: '限量套装 新品上市',
        forceValue: 1.3,
        price: '¥ 245'
    }, {
        name: '时尚双肩包',
        img: require('@/assets/images/home/test3.png'),
        title: '限量套装 新品上市',
        forceValue: 0.5,
        price: '¥ 21'
    }, {
        name: '商务行李箱',
        img: require('@/assets/images/home/test4.png'),
        title: '限量套装 新品上市',
        forceValue: 2.7,
        price: '¥ 218'
    }, {
        name: '无线消噪耳机',
        img: require('@/assets/images/home/test5.png'),
        title: '限量套装 新品上市',
        forceValue: 0.5,
        price: '¥ 218'
    }, {
        name: '无线蓝牙耳机',
        img: require('@/assets/images/home/test6.png'),
        title: '限量套装 新品上市',
        forceValue: 1.3,
        price: '¥ 218'
      }
    ]
  },
    {
      title: '时尚',
      name: '潮流百搭',
      list: [{
        name: '活力运动装',
        img: require('@/assets/images/goods/运动装备-1.png'),
        title: '限量套装 新品上市',
        forceValue: 1.3,
        price: '¥ 125'
      }, {
          name: '瑞士手表',
          img: require('@/assets/images/goods/钟表-1.png'),
          title: '限量套装 新品上市',
          forceValue: 0.5,
          price: '¥ 245'
      }, {
          name: '男鞋',
          img: require('@/assets/images/goods/男鞋1.png'),
          title: '限量套装 新品上市',
          forceValue: 2.7,
          price: '¥ 21'
      }, {
          name: '商务行李箱',
          img: require('@/assets/images/home/test4.png'),
          title: '限量套装 新品上市',
          forceValue: 0.5,
          price: '¥ 218'
      }, {
          name: '无线消噪耳机',
          img: require('@/assets/images/home/test5.png'),
          title: '限量套装 新品上市',
          forceValue: 2.3,
          price: '¥ 218'
      }, {
          name: '箱包',
          img: require('@/assets/images/goods/箱包1.png'),
          title: '限量套装 新品上市',
          forceValue: 2.3,
          price: '¥ 218'
      }, {
          name: '水杯',
          img: require('@/assets/images/goods/水杯0.png'),
          title: '限量套装 新品上市',
          forceValue: 2.7,
          price: '¥ 218'
      }, {
          name: '无线蓝牙耳机',
          img: require('@/assets/images/home/test6.png'),
          title: '限量套装 新品上市',
          forceValue: 1.6,
          price: '¥ 218'
        }
      ]
    },
    {
      title: '数码',
      name: '3C数码',
      list: [{
        name: '轻薄本',
        img: '//img13.360buyimg.com/focus/s140x140_jfs/t11071/195/2462134264/9117/cd0688bf/5a17ba79N18b9f3d4.png',
        title: '限量套装 新品上市',
        forceValue: 2.3,
        price: '¥ 6666'
      }, {
          name: '游戏本',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t11155/36/2330310765/10690/eb6754c3/5a17ba96N49561fea.png',
          title: '限量套装 新品上市',
          forceValue: 0.5,
          price: '¥ 8888'
      }, {
          name: '多功能手机',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t11503/241/2246064496/4783/cea2850e/5a169216N0701c7f1.jpg',
          title: '限量套装 新品上市',
          forceValue: 2.7,
          price: '¥ 1250'
      }, {
          name: '全面屏手机',
          img: '//img30.360buyimg.com/focus/s140x140_jfs/t18955/187/1309277884/11517/fe100782/5ac48d27N3f5bb821.jpg',
          title: '限量套装 新品上市',
          forceValue: 1.3,
          price: '¥ 2450'
      }, {
          name: '游戏手机',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t12022/66/917351804/2257/7ddc58e5/5a169232Ndf76f53c.jpg',
          title: '限量套装 新品上市',
          forceValue: 1.6,
          price: '¥ 2188'
      }, {
          name: '拍照手机',
          img: '//img20.360buyimg.com/focus/s140x140_jfs/t12022/66/917351804/2257/7ddc58e5/5a169232Ndf76f53c.jpg',
          title: '限量套装 新品上市',
          forceValue: 1.9,
          price: '¥ 2188'
      }, {
          name: '老年机',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
          title: '限量套装 新品上市',
          forceValue: 1.3,
          price: '¥ 588'
      }, {
          name: '女性手机',
          img: '//img12.360buyimg.com/focus/s140x140_jfs/t15790/6/2311892256/2742/5ed77924/5a9fa728Nbff29ad2.jpg',
          title: '限量套装 新品上市',
          forceValue: 1.3,
          price: '¥ 5180'
        }
      ]
    },
    {
      title: '超市',
      name: '百货生鲜',
      list: [{
        name: '休闲零食',
        img: '//img10.360buyimg.com/focus/s140x140_jfs/t19789/191/2614150696/17735/d2db9aca/5b02411eNb44a03f7.jpg',
        title: '限量套装 新品上市',
        forceValue: 1.9,
        price: '¥ 125'
      }, {
          name: '牛奶',
          img: '//img13.360buyimg.com/focus/s140x140_jfs/t17479/1/2588472716/22795/d676e57a/5b024117N06151eba.jpg',
          title: '限量套装 新品上市',
          forceValue: 1.6,
          price: '¥ 245'
      }, {
          name: '时尚双肩包',
          img: require('@/assets/images/home/test3.png'),
          title: '限量套装 新品上市',
          forceValue: 2.7,
          price: '¥ 21'
      }, {
          name: '酒水饮料',
          img: '//img14.360buyimg.com/focus/s140x140_jfs/t19432/178/2607825443/22589/446a22a2/5b023705N12de0824.jpg',
          title: '限量套装 新品上市',
          forceValue: 1.6,
          price: '¥ 21'
      }, {
          name: '商务行李箱',
          img: require('@/assets/images/home/test4.png'),
          title: '限量套装 新品上市',
          forceValue: 1.3,
          price: '¥ 218'
      }, {
          name: '无线消噪耳机',
          img: require('@/assets/images/home/test5.png'),
          title: '限量套装 新品上市',
          forceValue: 1.3,
          price: '¥ 218'
      }, {
          name: '无线蓝牙耳机',
          img: require('@/assets/images/home/test6.png'),
          title: '限量套装 新品上市',
          forceValue: 1.3,
          price: '¥ 218'
        }
      ]
    },
    {
      title: '生活',
      name: '居家日用',
      list: [{
        name: '实木餐桌',
        img: '//img13.360buyimg.com/focus/s140x140_jfs/t12772/3/1793374412/9705/e633967a/5a28e6c9N8aaaea3f.jpg',
        title: '限量套装 新品上市',
        forceValue: 2.7,
        price: '¥ 125'
      }, {
          name: '椅子',
          img: '//img10.360buyimg.com/focus/s140x140_jfs/t13888/280/1737354934/3036/f94ecdf8/5a28e0d6N80f30096.jpg',
          title: '限量套装 新品上市',
          forceValue: 1.3,
          price: '¥ 245'
      }, {
          name: '杯子',
          img: require('@/assets/images/goods/水杯3.png'),
          title: '限量套装 新品上市',
          forceValue: 2.3,
          price: '¥ 21'
      }, {
          name: '商务行李箱',
          img: require('@/assets/images/home/test4.png'),
          title: '限量套装 新品上市',
          forceValue: 1.9,
          price: '¥ 218'
      }, {
          name: '无线消噪耳机',
          img: require('@/assets/images/home/test5.png'),
          title: '限量套装 新品上市',
          forceValue: 1.3,
          price: '¥ 218'
      }, {
          name: '杯子',
          img: require('@/assets/images/goods/水杯0.png'),
          title: '限量套装 新品上市',
          forceValue: 1.6,
          price: '¥ 218'
        }
      ]
    }
  ],
  goodsList: {
    newgoods: [
      {
        goodsId: 10909,
        goodsName: "HUAWEI Mate 40 Pro+ 5G 全网通 12G...",
        goodsIntro: "5nm麒麟9000旗舰芯片 | 超感光徕卡电...",
        goodsCoverImg: require('@/assets/images/home/goodsList/newgoods-1.png'),
        sellingPrice: 7988,
        tag: "跃见非凡"
      }, {
        goodsId: 10908,
        goodsName: "HUAWEI Mate 40 Pro 全网通5G手机 8GB...",
        goodsIntro: "5nm麒麟9000旗舰芯片 | 超感光徕卡电...",
        goodsCoverImg: require('@/assets/images/home/goodsList/newgoods-2.png'),
        sellingPrice: 6488,
        tag: "跃见非凡"
      }, {
        goodsId: 10902,
        goodsName: "华为 HUAWEI P40 冰霜银 全网通5G手机",
        goodsIntro: "麒麟990 5G SoC芯片 5000万超感...",
        goodsCoverImg: require('@/assets/images/home/goodsList/newgoods-3.png'),
        sellingPrice: 4299,
        tag: "超感知影像"
      }, {
        goodsId: 10907,
        goodsName: "HUAWEI Mate 40 Pro 全网通5G手机 8GB...",
        goodsIntro: "5nm麒麟9000旗舰芯片 | 超感光徕卡电...",
        goodsCoverImg: require('@/assets/images/home/goodsList/newgoods-4.png'),
        sellingPrice: 6488,
        tag: "跃见非凡"
      }
    ],
    hotgoods: [
      {
        goodsId: 10902,
        goodsName: "华为 HUAWEI P40 冰霜银 全网通5G手机",
        goodsIntro: "麒麟990 5G SoC芯片 5000万超感...",
        goodsCoverImg: require('@/assets/images/home/goodsList/hotgoods-1.png'),
        sellingPrice: 4299,
        tag: "超感知影像"
      }, {
        goodsId: 10894,
        goodsName: "HUAWEI Mate 30 Pro",
        goodsIntro: "超曲面OLED环幕屏 8GB+128GB 全...",
        goodsCoverImg: require('@/assets/images/home/goodsList/hotgoods-2.png'),
        sellingPrice: 5399,
        tag: "重构想象"
      }, {
        goodsId: 10284,
        goodsName: "Apple iPhone XR (A2108)",
        goodsIntro: "128GB 黑色 移动联通电信4G手机 双卡...",
        goodsCoverImg: require('@/assets/images/home/goodsList/hotgoods-3.jpg'),
        sellingPrice: 5099,
        tag: ""
      }, {
        goodsId: 10250,
        goodsName: "Apple 2019款 Macbook Pro 13.3",
        goodsIntro: "【带触控栏】八代i5 8G 256G RP6...",
        goodsCoverImg: require('@/assets/images/home/goodsList/hotgoods-4.jpg'),
        sellingPrice: 10699,
        tag: ""
      }
    ],
    recommend: [
      {
        goodsId: 10233,
        goodsName: "纪梵希高定香榭天鹅绒唇膏306#",
        goodsIntro: "(小羊皮口红 法式红 雾面哑光 持久锁色）新...",
        goodsCoverImg: require('@/assets/images/home/goodsList/recommendgoods-1.jpg'),
        sellingPrice: 355,
        tag: "雾面哑光 持久锁色"
      }, {
        goodsId: 10195,
        goodsName: "索尼 WH-1000XM3 头戴式耳机",
        goodsIntro: "高解析度无线蓝牙降噪（触控面板 智能降噪 长...",
        goodsCoverImg: require('@/assets/images/home/goodsList/recommendgoods-2.jpg'),
        sellingPrice: 2599,
        tag: "智能降噪 长久续航"
      }, {
        goodsId: 10180,
        goodsName: "Apple AirPods 配充电盒",
        goodsIntro: "苹果蓝牙耳机",
        goodsCoverImg: require('@/assets/images/home/goodsList/recommendgoods-3.jpg'),
        sellingPrice: 1246,
        tag: "妙出新境界"
      }, {
        goodsId: 10894,
        goodsName: "HUAWEI Mate 30 Pro",
        goodsIntro: "超曲面OLED环幕屏 8GB+128GB 全...",
        goodsCoverImg: require('@/assets/images/home/goodsList/recommendgoods-4.png'),
        sellingPrice: 5399,
        tag: "重构想象"
      }, {
        goodsId: 10237,
        goodsName: "MAC 雾面丝绒哑光子弹头口红",
        goodsIntro: "磨砂系列 3g 316 devoted to...",
        goodsCoverImg: require('@/assets/images/home/goodsList/recommendgoods-5.jpg'),
        sellingPrice: 165,
        tag: "雾面丝绒哑光"
      }, {
        goodsId: 10907,
        goodsName: "HUAWEI Mate 40 Pro 全网通5G手机 8GB...",
        goodsIntro: "5nm麒麟9000旗舰芯片 | 超感光徕卡电...",
        goodsCoverImg: require('@/assets/images/home/goodsList/recommendgoods-6.png'),
        sellingPrice: 6488,
        tag: "跃见非凡"
      }, {
        goodsId: 10254,
        goodsName: "Apple 2019款 MacBook Air 13.3 ",
        goodsIntro: "Retina屏 八代i5 8G 128G S...",
        goodsCoverImg: require('@/assets/images/home/goodsList/recommendgoods-7.jpg'),
        sellingPrice: 8499,
        tag: "再次倾心"
      }, {
        goodsId: 10154,
        goodsName: "无印良品 MUJI 塑料浴室座椅",
        goodsIntro: "原色",
        goodsCoverImg: require('@/assets/images/home/goodsList/recommendgoods-8.jpg'),
        sellingPrice: 85,
        tag: "无印良品"
      }, {
        goodsId: 10147,
        goodsName: "MUJI 羽毛 靠垫",
        goodsIntro: "白色",
        goodsCoverImg: require('@/assets/images/home/goodsList/recommendgoods-9.jpg'),
        sellingPrice: 65,
        tag: "悠享惬意"
      }, {
        goodsId: 10158,
        goodsName: "无印良品 女式粗棉线条纹长袖T恤",
        goodsIntro: "黑*横条 L",
        goodsCoverImg: require('@/assets/images/home/goodsList/recommendgoods-10.jpg'),
        sellingPrice: 70,
        tag: "无印良品"
      }
    ]
  }
}

const categoryData: IcategoryData = {
  status: 0,
  tabslabel: [{
    label: '热门推荐',
    active: true
  },
    {
      label: '手机数码',
      active: false
    },
    {
      label: '电脑办公',
      active: false
    },
    {
      label: '计生情趣',
      active: false
    },
    {
      label: '美妆护肤',
      active: false
    },

    {
      label: '个人清洁',
      active: false
    },
    {
      label: '汽车生活',
      active: false
    },
    {
      label: '男装',
      active: false
    },
    {
      label: '女装',
      active: false
    },
    {
      label: '超市',
      active: false
    },
    {
      label: '户外运动',
      active: false
    },
    {
      label: '男装',
      active: false
    },
    {
      label: '女装',
      active: false
    },
    {
      label: '超市',
      active: false
    },
    {
      label: '户外运动',
      active: false
    },
    {
      label: '其他',
      active: false
    }],
  categoryData: [{
    name: '手机数码',
    mainImgUrl: '//img20.360buyimg.com/mcoss/jfs/t16273/143/46476745/45673/cba0840c/5a28ef10N82ab81d3.jpg',
    list: [{
      title: '手机通讯',
      productList: [{
        title: '手机',
        imgUrl: '//img10.360buyimg.com/focus/s140x140_jfs/t11503/241/2246064496/4783/cea2850e/5a169216N0701c7f1.jpg'
      },
        {
          title: '全面屏手机',
          imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t18955/187/1309277884/11517/fe100782/5ac48d27N3f5bb821.jpg'
        },
        {
          title: '游戏手机',
          imgUrl: '//img11.360buyimg.com/focus/s140x140_jfs/t11470/45/2362968077/2689/fb36d9a0/5a169238Nc8f0882b.jpg'
        },
        {
          title: '拍照手机',
          imgUrl: '//img20.360buyimg.com/focus/s140x140_jfs/t12022/66/917351804/2257/7ddc58e5/5a169232Ndf76f53c.jpg'
        },
        {
          title: '老年机',
          imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg'
        },
        {
          title: '女性手机',
          imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t15790/6/2311892256/2742/5ed77924/5a9fa728Nbff29ad2.jpg'
        }
      ]
    },
      {
        title: '手机配件',
        productList: [{
          title: '数据线',
          imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t18055/312/1342501458/9462/4699ed8a/5ac48672N11cf61fe.jpg'
        },
          {
            title: '手机壳',
            imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t18502/160/1284774717/9251/feb8a496/5ac4878cN658cbb07.jpg'
          },
          {
            title: '充电宝',
            imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t19537/23/1276961949/9676/f4b5be0d/5ac48791Nb224f939.jpg'
          },
          {
            title: '手机贴膜',
            imgUrl: '//img11.360buyimg.com/focus/s140x140_jfs/t17548/288/1331085893/6458/52545456/5ac486c6N0c8a93dc.jpg'
          },
          {
            title: '耳机',
            imgUrl: '//img10.360buyimg.com/focus/s140x140_jfs/t17284/353/1280266808/3696/32c00915/5ac486ccN2d8031c1.jpg'
          },
          {
            title: '充电器',
            imgUrl: '//img11.360buyimg.com/focus/s140x140_jfs/t16774/124/1318736793/3884/cb658723/5ac4874fN6bc007b0.jpg'
          }
        ]
      },
      {
        title: '摄影摄像',
        productList: [{
          title: '单反相机',
          imgUrl: '//img14.360buyimg.com/focus/s140x140_jfs/t13765/295/926307178/7966/3228af24/5a1679f2Nc2f659b6.jpg'
        },
          {
            title: '数码相机',
            imgUrl: '//img20.360buyimg.com/focus/s140x140_jfs/t12814/251/897168610/8107/60a873f/5a1679caNada7f827.jpg'
          },
          {
            title: '镜头',
            imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t12154/164/880046972/2880/86b45b51/5a1679b9N42a5f8e5.jpg'
          },
          {
            title: '户外器材',
            imgUrl: '//img10.360buyimg.com/focus/s140x140_jfs/t12586/176/939117172/2550/d16b4b6c/5a1679c3N67e2b3f1.jpg'
          }
        ]
      }

    ]
  },
    {
      name: '电脑办公',
      mainImgUrl: '//img30.360buyimg.com/mcoss/jfs/t14743/292/279117506/48503/9b7d9f2c/5a28ea97N36cb4d16.jpg',
      list: [{
        title: '热门分类',
        productList: [{
          title: '轻薄本',
          imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t11071/195/2462134264/9117/cd0688bf/5a17ba79N18b9f3d4.png'
        },
          {
            title: '游戏本',
            imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t11155/36/2330310765/10690/eb6754c3/5a17ba96N49561fea.png'
          },
          {
            title: '机械键盘',
            imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t12304/245/965858782/6481/37cb5a9b/5a17ba5aN0406a1b5.jpg'
          },
          {
            title: '组装电脑',
            imgUrl: '//img10.360buyimg.com/focus/s140x140_jfs/t14101/325/978287093/8836/e142aa53/5a17ba73N07b12f0c.jpg'
          },
          {
            title: '移动硬盘',
            imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t13228/333/989759736/4764/2a312c2e/5a17ba7fN0740c051.jpg'
          },
          {
            title: '曲屏显示器',
            imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t13798/322/988648789/3644/1adc5615/5a17ba6dNafc95373.jpg'
          }
        ]
      },
        {
          title: '外设产品',
          productList: [{
            title: '鼠标',
            imgUrl: '//img20.360buyimg.com/focus/s140x140_jfs/t11881/31/2355374158/3676/22da94de/5a16a5f0Nc6b32dda.jpg'
          },
            {
              title: 'U盘',
              imgUrl: '//img20.360buyimg.com/focus/s140x140_jfs/t12112/355/904591745/4308/6201dffe/5a16a5aaNdac2fe89.jpg'
            },
            {
              title: '插座',
              imgUrl: '//img14.360buyimg.com/focus/s140x140_jfs/t12031/206/932335399/3567/d6d59ad9/5a16a578N283a0f75.jpg'
            },
            {
              title: '电脑工具',
              imgUrl: '//img11.360buyimg.com/focus/s140x140_jfs/t12292/173/915309013/5554/78f4ab5e/5a16a560Nc7626d33.jpg'
            },
            {
              title: '摄像头',
              imgUrl: '//img20.360buyimg.com/focus/s140x140_jfs/t12499/54/910206832/5998/f91002f8/5a16a588Nff477d9d.jpg'
            },
            {
              title: '手写板',
              imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t11734/189/2377033150/4145/b78bfcf/5a16a594Ncb41c95a.jpg'
            }
          ]
        }
      ]
    },
    {
      name: '家用电器',
      mainImgUrl: require('@/assets/images/home/test10.png'),
      list: [{
        title: '家用电器',
        productList: [{
          title: '电饭煲',
          imgUrl: '//img11.360buyimg.com/focus/s140x140_jfs/t14185/134/950962305/3800/eb1bafb8/5a17f224Nea1d3f59.jpg'
        },
          {
            title: '豆浆机',
            imgUrl: '//img11.360buyimg.com/focus/s140x140_jfs/t14065/132/988058896/1688/99cd0a3d/5a17f229Nc4c681fb.jpg'
          },
          {
            title: '冰箱',
            imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t13153/44/964603695/1011/21d660d2/5a17f6aeN280056ea.jpg'
          },
          {
            title: '双开门冰箱',
            imgUrl: '//img20.360buyimg.com/focus/s140x140_jfs/t13588/266/943842715/1088/c4ae40e4/5a17f6c5Ne56d7e26.jpg'
          },
          {
            title: '冷柜',
            imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t12928/273/1007467483/3549/52dad666/5a17f69eN1d10e257.jpg'
          },
          {
            title: '洗衣机',
            imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t12481/129/1018625238/1840/43d49869/5a17f6eaN9ec936de.jpg'
          },
          {
            title: '电热水器',
            imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t11053/246/2459202669/4318/fd6bd8d1/5a17f356Nd692ab74.jpg'
          },
          {
            title: '电视',
            imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t11842/356/2416901099/2164/ab77fbaa/5a17f71eN25360979.jpg'
          },
          {
            title: '4K超清电视',
            imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t11386/179/2470866031/2353/dfc7d933/5a17f72cN97075084.jpg'
          },
          {
            title: '音箱',
            imgUrl: require('@/assets/images/goodsCategory/商品详情1-1.png')
          },
          {
            title: '音箱',
            imgUrl: require('@/assets/images/goodsCategory/商品详情1-2.png')
          },
          {
            title: '音箱',
            imgUrl: require('@/assets/images/goodsCategory/商品详情1-3.png')
          },
          {
            title: '音箱',
            imgUrl: require('@/assets/images/goodsCategory/商品详情1-4.png')
          }
        ]
      }]
    },
    {
      name: '美妆护肤',
      mainImgUrl: require('@/assets/images/home/test11.png'),
      list: [{
        title: '美妆护肤',
        productList: [{
          title: '美白',
          imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t19531/110/2538137867/14848/c3ec84ac/5afd3cc5N8aa4b7c8.jpg'
        },
          {
            title: '防晒',
            imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t17560/320/2504739891/10347/f04150c4/5afd3cbeN77d00886.jpg'
          },
          {
            title: '美妆',
            imgUrl: require('@/assets/images/goodsCategory/美妆-1.png')
          },
          {
            title: '美妆',
            imgUrl: require('@/assets/images/goodsCategory/美妆-2.png')
          },
          {
            title: '美妆',
            imgUrl: require('@/assets/images/goodsCategory/美妆-3.png')
          },
          {
            title: '美妆',
            imgUrl: require('@/assets/images/goodsCategory/美妆-4.png')
          },
          {
            title: '美妆',
            imgUrl: require('@/assets/images/goodsCategory/美妆-5.png')
          },
          {
            title: '美妆',
            imgUrl: require('@/assets/images/goodsCategory/美妆-6.png')
          },
          {
            title: '美妆',
            imgUrl: require('@/assets/images/goodsCategory/美妆-7.png')
          },
          {
            title: '美妆',
            imgUrl: require('@/assets/images/goodsCategory/美妆-8.png')
          },
          {
            title: '美妆',
            imgUrl: require('@/assets/images/goodsCategory/美妆-9.png')
          },
          {
            title: '美妆',
            imgUrl: require('@/assets/images/goodsCategory/美妆-10.png')
          },
          {
            title: '美妆',
            imgUrl: require('@/assets/images/goodsCategory/美妆-11.png')
          },
          {
            title: '控油',
            imgUrl: '//img14.360buyimg.com/focus/s140x140_jfs/t19291/98/2577005836/12222/7107fb29/5afd3cc9N3add85ae.jpg'
          },
          {
            title: '去黑头',
            imgUrl: require('@/assets/images/goodsCategory/护理-1.png')
          },
          {
            title: '护肤',
            imgUrl: require('@/assets/images/goodsCategory/护理-2.png')
          },
          {
            title: '护肤',
            imgUrl: require('@/assets/images/goodsCategory/护理-3.png')
          },
          {
            title: '护肤',
            imgUrl: require('@/assets/images/goodsCategory/护理-4.png')
          },
          {
            title: '护肤',
            imgUrl: require('@/assets/images/goodsCategory/护理-5.png')
          },
          {
            title: '护肤',
            imgUrl: require('@/assets/images/goodsCategory/护理-6.png')
          },
          {
            title: '护肤',
            imgUrl: require('@/assets/images/goodsCategory/护理-7.png')
          },
          {
            title: '护肤',
            imgUrl: require('@/assets/images/goodsCategory/护理-9.png')
          },
          {
            title: '护肤',
            imgUrl: require('@/assets/images/goodsCategory/护理-10.png')
          },
          {
            title: '护肤',
            imgUrl: require('@/assets/images/goodsCategory/护理-11.png')
          },
          {
            title: '护肤',
            imgUrl: require('@/assets/images/goodsCategory/护理-12.png')
          },
          {
            title: '护肤',
            imgUrl: require('@/assets/images/goodsCategory/商品详情-1.png')
          },
          {
            title: '护肤',
            imgUrl: require('@/assets/images/goodsCategory/商品详情-2.png')
          },
          {
            title: '护肤',
            imgUrl: require('@/assets/images/goodsCategory/商品详情-3.png')
          },
          {
            title: '护肤',
            imgUrl: require('@/assets/images/goodsCategory/商品详情-4.png')
          }
        ]
      }]
    },
    {
      name: '钟表珠宝',
      mainImgUrl: '',
      list: [{
        title: '钟表珠宝',
        productList: [{
          title: '瑞士手表',
          imgUrl: '//img10.360buyimg.com/focus/s140x140_jfs/t14155/271/890296038/3841/f1adee7f/5a166fe1Nc6bd2f12.jpg'
        },
          {
            title: '瑞士手表',
            imgUrl: require('@/assets/images/goodsCategory/钟表-1.png')
          },
          {
            title: '瑞士手表',
            imgUrl: require('@/assets/images/goodsCategory/钟表-2.png')
          },
          {
            title: '瑞士手表',
            imgUrl: require('@/assets/images/goodsCategory/钟表-3.png')
          },
          {
            title: '瑞士手表',
            imgUrl: require('@/assets/images/goodsCategory/钟表-4.png')
          },
          {
            title: '瑞士手表',
            imgUrl: require('@/assets/images/goodsCategory/钟表-5.png')
          },
          {
            title: '手表',
            imgUrl: require('@/assets/images/goodsCategory/手表-1.png')
          },
          {
            title: '手表',
            imgUrl: require('@/assets/images/goodsCategory/手表-2.png')
          },
          {
            title: '手表',
            imgUrl: require('@/assets/images/goodsCategory/手表-3.png')
          },
          {
            title: '手表',
            imgUrl: require('@/assets/images/goodsCategory/手表-4.png')
          },
          {
            title: '手表',
            imgUrl: require('@/assets/images/goodsCategory/手表-5.png')
          },
          {
            title: '手表',
            imgUrl: require('@/assets/images/goodsCategory/手表-6.png')
          },
          {
            title: '瑞士手表',
            imgUrl: require('@/assets/images/goodsCategory/钟表-6.png')
          },
          {
            title: '瑞士手表',
            imgUrl: require('@/assets/images/goodsCategory/钟表-7.png')
          },
          {
            title: '瑞士手表',
            imgUrl: require('@/assets/images/goodsCategory/钟表-8.png')
          },
          {
            title: '瑞士手表',
            imgUrl: require('@/assets/images/goodsCategory/钟表-9.png')
          },
          {
            title: '瑞士手表',
            imgUrl: require('@/assets/images/goodsCategory/钟表-10.png')
          },
          {
            title: '瑞士手表',
            imgUrl: require('@/assets/images/goodsCategory/钟表-11.png')
          }
        ]
      }]
    },
    {
      name: '户外运动',
      mainImgUrl: '',
      list: [{
        title: '户外运动',
        productList: [{
          title: '跑步鞋',
          imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t13993/246/156269250/8757/12386c/5a1fb5e7N12a676b6.jpg'
        },
          {
            title: '体育用品',
            imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t12313/239/1414060687/10293/ca8ad748/5a1fb5e1Nd80abbc2.jpg'
          },
          {
            title: '运动鞋',
            imgUrl: require('@/assets/images/goodsCategory/运动装备-1.png')
          },
          {
            title: '运动鞋',
            imgUrl: require('@/assets/images/goodsCategory/运动装备-2.png')
          },
          {
            title: '运动鞋',
            imgUrl: require('@/assets/images/goodsCategory/运动装备-3.png')
          },
          {
            title: '运动鞋',
            imgUrl: require('@/assets/images/goodsCategory/运动装备-4.png')
          },
          {
            title: '运动鞋',
            imgUrl: require('@/assets/images/goodsCategory/运动装备-5.png')
          },
          {
            title: '运动鞋',
            imgUrl: require('@/assets/images/goodsCategory/运动装备-6.png')
          },
          {
            title: '运动鞋',
            imgUrl: require('@/assets/images/goodsCategory/运动装备-7.png')
          },

          {
            title: '运动鞋',
            imgUrl: require('@/assets/images/goodsCategory/运动装备-9.png')
          },
          {
            title: '运动鞋',
            imgUrl: require('@/assets/images/goodsCategory/运动装备-10.png')
          },
          {
            title: '运动鞋',
            imgUrl: require('@/assets/images/goodsCategory/运动装备-11.png')
          },
          {
            title: '运动鞋',
            imgUrl: require('@/assets/images/goodsCategory/运动装备-12.png')
          }
        ]
      }]
    },

    {
      name: '男装男鞋',
      mainImgUrl: '',
      list: [{
        title: '男装男鞋',
        productList: [{
          title: '夹克',
          imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t12514/85/571462957/6214/29cdf637/5a0e9496Necd5bd0e.jpg'
        },
          {
            title: '风衣',
            imgUrl: '//img11.360buyimg.com/focus/s140x140_jfs/t11590/82/2013872051/5874/83b5772d/5a0e947eN67f0e537.jpg'
          },
          {
            title: '西服',
            imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t13489/68/552491077/2495/7b517e4b/5a0e9483Na6231535.jpg'
          },
          {
            title: '男鞋',
            imgUrl: require('@/assets/images/goodsCategory/男鞋0.png')
          },
          {
            title: '男鞋',
            imgUrl: require('@/assets/images/goodsCategory/男鞋1.png')
          },
          {
            title: '男鞋',
            imgUrl: require('@/assets/images/goodsCategory/男鞋2.png')
          },
          {
            title: '男鞋',
            imgUrl: require('@/assets/images/goodsCategory/男鞋3.png')
          },
          {
            title: '男鞋',
            imgUrl: require('@/assets/images/goodsCategory/男鞋4.png')
          }
        ]
      }]
    },

    {
      name: '女装女鞋',
      mainImgUrl: '',
      list: [{
        title: '家用电器',
        productList: [{
          title: '风衣',
          imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t15313/145/2476673176/2856/879136d7/5a9fc012N86f3fb22.jpg'
        },
          {
            title: '长袖T恤',
            imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t16750/238/698160610/5156/5b1f25b/5a9fbfccN574cba12.jpg'
          },
          {
            title: '卫衣',
            imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t11953/286/2195921828/5728/75b86d5b/5a127fbaN2780918c.jpg'
          }
        ]
      }]
    },
    {
      name: '母婴童装',
      mainImgUrl: '',
      list: [{
        title: '母婴童装',
        productList: [{
          title: '套装',
          imgUrl: '//img14.360buyimg.com/focus/s140x140_jfs/t18790/111/673564180/2396/3d27d79a/5a9f94c1N5b0c8724.jpg'
        }]
      }]
    },
    {
      name: '图书音像',
      mainImgUrl: '',
      list: [{
        title: '图书音像',
        productList: [{
          title: '文学',
          imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t19882/234/705045012/17917/e840651a/5b07dfddN7d635871.jpg'
        },
          {
            title: '童书',
            imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t18520/109/1790543750/23751/a98be11f/5ad82a1cN400c11d1.jpg'
          }
        ]
      }]
    },

    {
      name: '食品生鲜',
      mainImgUrl: '',
      list: [{
        title: '家用电器',
        productList: [{
          title: '休闲零食',
          imgUrl: '//img10.360buyimg.com/focus/s140x140_jfs/t19789/191/2614150696/17735/d2db9aca/5b02411eNb44a03f7.jpg'
        },
          {
            title: '牛奶',
            imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t17479/1/2588472716/22795/d676e57a/5b024117N06151eba.jpg'
          }
        ]
      }]
    },
    {
      name: '酒水饮料',
      mainImgUrl: '',
      list: [{
        title: '酒水饮料',
        productList: [{
          title: '酒品馆',
          imgUrl: '//img14.360buyimg.com/focus/s140x140_jfs/t19432/178/2607825443/22589/446a22a2/5b023705N12de0824.jpg'
        }]
      }]
    },
    {
      name: '家居家装',
      mainImgUrl: '',
      list: [{
        title: '家居家装',
        productList: [{
          title: '实木餐桌',
          imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t12772/3/1793374412/9705/e633967a/5a28e6c9N8aaaea3f.jpg'
        },
          {
            title: '椅子',
            imgUrl: '//img10.360buyimg.com/focus/s140x140_jfs/t13888/280/1737354934/3036/f94ecdf8/5a28e0d6N80f30096.jpg'
          },
          {
            title: '杯子',
            imgUrl: require('@/assets/images/goodsCategory/水杯0.png')
          },
          {
            title: '杯子',
            imgUrl: require('@/assets/images/goodsCategory/水杯1.png')
          },
          {
            title: '杯子',
            imgUrl: require('@/assets/images/goodsCategory/水杯2.png')
          },
          {
            title: '杯子',
            imgUrl: require('@/assets/images/goodsCategory/水杯3.png')
          },
          {
            title: '杯子',
            imgUrl: require('@/assets/images/goodsCategory/水杯4.png')
          }
        ]
      }]
    },
    {
      name: '箱包手袋',
      mainImgUrl: '',
      list: [{
        title: '箱包手袋',
        productList: [{
          title: '箱子',
          imgUrl: '//img20.360buyimg.com/focus/s140x140_jfs/t12364/153/835832532/6803/5b58b137/5a152fb3Nb9f571ea.jpg'
        },
          {
            title: '箱包',
            imgUrl: require('@/assets/images/goodsCategory/箱包0.png')
          },
          {
            title: '箱包',
            imgUrl: require('@/assets/images/goodsCategory/箱包1.png')
          },
          {
            title: '箱包',
            imgUrl: require('@/assets/images/goodsCategory/箱包2.png')
          },
          {
            title: '箱包',
            imgUrl: require('@/assets/images/goodsCategory/箱包3.png')
          },
          {
            title: '箱包',
            imgUrl: require('@/assets/images/goodsCategory/箱包4.png')
          }
        ]
      }]
    },

    {
      name: '玩具乐器',
      mainImgUrl: '',
      list: [{
        title: '家用电器',
        productList: [{
          title: '遥控车',
          imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t17575/123/2617650159/16720/74c14629/5b02a0c6N3f2770d9.jpg'
        }]
      }]
    }
  ]
}

const goodsDetailList: GoodsDetailInterface = {
  '10909': {
    goodsId: 10909,
    goodsName: "HUAWEI Mate 40 Pro+ 5G 全网通 12GB+256GB（陶瓷白）",
    goodsIntro: "5nm麒麟9000旗舰芯片 | 超感光徕卡电影影象",
    goodsCoverImg: require('@/assets/images/home/goodsList/newgoods-1.png'),
    sellingPrice: 7988,
    tag: "跃见非凡",
    goodsCarouselList: [require('@/assets/images/home/goodsList/newgoods-1.png')],
    originalPrice: 7988,
    goodsDetailContent: [require('@/assets/images/goodsDetail/10909.png')]
  },
  '10908': {
    goodsId: 10908,
    goodsName: "HUAWEI Mate 40 Pro 全网通5G手机 8GB+512GB（黄色）",
    goodsIntro: "5nm麒麟9000旗舰芯片 | 超感光徕卡电影影象",
    goodsCoverImg: require('@/assets/images/home/goodsList/newgoods-2.png'),
    sellingPrice: 6488,
    tag: "跃见非凡",
    goodsCarouselList: [require('@/assets/images/home/goodsList/newgoods-2.png')],
    originalPrice: 6488,
    goodsDetailContent: [require('@/assets/images/goodsDetail/10908.png')]
  },
  '10902': {
    goodsId: 10902,
    goodsName: "华为 HUAWEI P40 冰霜银 全网通5G手机",
    goodsIntro: "麒麟990 5G SoC芯片 5000万超感知徕卡三摄 30倍数字变焦 6GB+128GB",
    goodsCoverImg: require('@/assets/images/home/goodsList/newgoods-3.png'),
    sellingPrice: 4299,
    tag: "超感知影像",
    goodsCarouselList: [require('@/assets/images/home/goodsList/newgoods-3.png')],
    originalPrice: 4399,
    goodsDetailContent: [require('@/assets/images/goodsDetail/10902.jpg')]
  },
  '10907': {
    goodsId: 10907,
    goodsName: "HUAWEI Mate 40 Pro 全网通5G手机 8GB+512GB（秘银色）",
    goodsIntro: "5nm麒麟9000旗舰芯片 | 超感光徕卡电影影象",
    goodsCoverImg: require('@/assets/images/home/goodsList/newgoods-4.png'),
    sellingPrice: 6488,
    tag: "跃见非凡",
    goodsCarouselList: [require('@/assets/images/home/goodsList/newgoods-4.png')],
    originalPrice: 6488,
    goodsDetailContent: [require('@/assets/images/goodsDetail/10907.png')]
  },
  '10894': {
    goodsId: 10894,
    goodsName: "HUAWEI Mate 30 Pro",
    goodsIntro: "超曲面OLED环幕屏 8GB+128GB 全网通4G版（翡冷翠）",
    goodsCoverImg: require('@/assets/images/home/goodsList/hotgoods-2.png'),
    sellingPrice: 5399,
    tag: "重构想象",
    goodsCarouselList: [require('@/assets/images/home/goodsList/hotgoods-2.png')],
    originalPrice: 5399,
    goodsDetailContent: [require('@/assets/images/goodsDetail/10894-1.jpg'), require('@/assets/images/goodsDetail/10894-2.jpg')]
  },
  '10284': {
    goodsId: 10284,
    goodsName: "Apple iPhone XR (A2108)",
    goodsIntro: "128GB 黑色 移动联通电信4G手机 双卡双待",
    goodsCoverImg: require('@/assets/images/home/goodsList/hotgoods-3.jpg'),
    sellingPrice: 5099,
    tag: "",
    goodsCarouselList: [require('@/assets/images/home/goodsList/hotgoods-3.jpg')],
    originalPrice: 5599,
    goodsDetailContent: "<p>商品介绍加载中...</p>"
  },
  '10250': {
    goodsId: 10250,
    goodsName: "Apple 2019款 Macbook Pro 13.3",
    goodsIntro: "【带触控栏】八代i5 8G 256G RP645显卡 银色 苹果笔记本电脑 MUHR2CH/A",
    goodsCoverImg: require('@/assets/images/home/goodsList/hotgoods-4.jpg'),
    sellingPrice: 10699,
    tag: "",
    goodsCarouselList: [require('@/assets/images/home/goodsList/hotgoods-4.jpg')],
    originalPrice: 11499,
    goodsDetailContent: "商品介紹頁面素材由Apple提供"
  },
  '10233': {
    goodsId: 10233,
    goodsName: "纪梵希高定香榭天鹅绒唇膏306#",
    goodsIntro: "(小羊皮口红 法式红 雾面哑光 持久锁色）新老包装随机发货",
    goodsCoverImg: require('@/assets/images/home/goodsList/recommendgoods-1.jpg'),
    sellingPrice: 355,
    tag: "雾面哑光 持久锁色",
    goodsCarouselList: [require('@/assets/images/home/goodsList/recommendgoods-1.jpg')],
    originalPrice: 355,
    goodsDetailContent: "详情加载中..."
  },
  '10195': {
    goodsId: 10195,
    goodsName: "索尼 WH-1000XM3 头戴式耳机",
    goodsIntro: "高解析度无线蓝牙降噪（触控面板 智能降噪 长久续航）黑色",
    goodsCoverImg: require('@/assets/images/home/goodsList/recommendgoods-2.jpg'),
    sellingPrice: 2599,
    tag: "智能降噪 长久续航",
    goodsCarouselList: [require('@/assets/images/home/goodsList/recommendgoods-2.jpg')],
    originalPrice: 2899,
    goodsDetailContent: "详情加载中..."
  },
  '10180': {
    goodsId: 10180,
    goodsName: "Apple AirPods 配充电盒",
    goodsIntro: "苹果蓝牙耳机",
    goodsCoverImg: require('@/assets/images/home/goodsList/recommendgoods-3.jpg'),
    sellingPrice: 1246,
    tag: "妙出新境界",
    goodsCarouselList: [require('@/assets/images/home/goodsList/recommendgoods-3.jpg')],
    originalPrice: 1246,
    goodsDetailContent: "详情加载中..."
  },
  '10237': {
    goodsId: 10237,
    goodsName: "MAC 雾面丝绒哑光子弹头口红",
    goodsIntro: "磨砂系列 3g 316 devoted to chili 泫雅色",
    goodsCoverImg: require('@/assets/images/home/goodsList/recommendgoods-5.jpg'),
    sellingPrice: 165,
    tag: "雾面丝绒哑光",
    goodsCarouselList: [require('@/assets/images/home/goodsList/recommendgoods-5.jpg')],
    originalPrice: 249,
    goodsDetailContent: "详情加载中..."
  },
  '10254': {
    goodsId: 10254,
    goodsName: "Apple 2019款 MacBook Air 13.3 ",
    goodsIntro: "Retina屏 八代i5 8G 128G SSD 银色 笔记本电脑 轻薄本 MVFK2CH/A",
    goodsCoverImg: require('@/assets/images/home/goodsList/recommendgoods-7.jpg'),
    sellingPrice: 8499,
    tag: "再次倾心",
    goodsCarouselList: [require('@/assets/images/home/goodsList/recommendgoods-7.jpg')],
    originalPrice: 8899,
    goodsDetailContent: "商品介紹頁面素材由Apple提供"
  },
  '10154': {
    goodsId: 10154,
    goodsName: "无印良品 MUJI 塑料浴室座椅",
    goodsIntro: "原色",
    goodsCoverImg: require('@/assets/images/home/goodsList/recommendgoods-8.jpg'),
    sellingPrice: 85,
    tag: "无印良品",
    goodsCarouselList: [require('@/assets/images/home/goodsList/recommendgoods-8.jpg')],
    originalPrice: 85,
    goodsDetailContent: "<p>商品介绍加载中...</p>"
  },
  '10147': {
    goodsId: 10147,
    goodsName: "MUJI 羽毛 靠垫",
    goodsIntro: "白色",
    goodsCoverImg: require('@/assets/images/home/goodsList/recommendgoods-9.jpg'),
    sellingPrice: 65,
    tag: "悠享惬意",
    goodsCarouselList: [require('@/assets/images/home/goodsList/recommendgoods-9.jpg')],
    originalPrice: 65,
    goodsDetailContent: "<p>商品介绍加载中...</p>"
  },
  '10158': {
    goodsId: 10158,
    goodsName: "无印良品 女式粗棉线条纹长袖T恤",
    goodsIntro: "黑*横条 L",
    goodsCoverImg: require('@/assets/images/home/goodsList/recommendgoods-10.jpg'),
    sellingPrice: 70,
    tag: "无印良品",
    goodsCarouselList: [require('@/assets/images/home/goodsList/recommendgoods-10.jpg')],
    originalPrice: 198,
    goodsDetailContent: "<p>商品介绍加载中...</p>"
  }
}

Mock.mock('http://shopmall.com/home/homeImgList', homeImgList) // 首页banner
Mock.mock('http://shopmall.com/category/categoryData', categoryData) // 分类
Mock.mock('http://shopmall.com/goodsDetail', 'get', (config: any) => {
  const params = JSON.parse(config.body)
  if (params) {
    return {
      status: 0,
      msg: 'ok',
      goodsDetail: goodsDetailList[params.id]
    }
  } else {
    return {
      status: -1,
      msg: '没有商品id',
      goodsDetail: null
    }
  }
}) // 商品详情
Mock.mock('http://shopmall.com/login', 'post', (config: any) => {
  const params = JSON.parse(config.body)
  let secret = 'LNYIE'
  if (params.username === '15523322110' && params.password === '123456') {
    let token = jwt.sign(params, secret, {})
    return {
      status: 0,
      msg: 'ok',
      token
    }
  } else {
    return {
      status: -1,
      msg: '用户名或密码错误'
    }
  }
})
