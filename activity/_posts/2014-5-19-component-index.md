---
layout: post
title: 组件列表
authors:
  - name: 宫晴
---

---

活动中用到的很多接口都是可复用的，不同的活动只是传入参数不一样。因此将接口封装起来，对外提供统一的接口变得非常有必要，使用者不用考虑具体接口的实现细节，只需做一些初始化以及调用方法即可。以下列表中的组件是活动中最常用到的。

以下组件需在天猫域或淘宝域下才能正常使用，[查看如何绑定域名](http://thx.alibaba-inc.com/activity/standard-flash/#toc_1)

使用前需先引入KISSY 1.3，以及做好包配置。

```html
<script src="http://g.tbcdn.cn/??kissy/k/1.3.0/kissy-min.js"></script>
```

```javascript
KISSY.config({
  debug: true,
  packages: [
    {
      name: "mmcomponents",
      path: "http://g.tbcdn.cn/mm/mamacomponent/0.0.5/",
      combine:false
    }
  ]
});
```

## 组件

+ [登录](http://thx.alibaba-inc.com/activity/component-login/)
+ [分享](http://thx.alibaba-inc.com/activity/component-share/)
+ [收藏](http://thx.alibaba-inc.com/activity/component-store/)
+ [无效果抽奖](http://thx.alibaba-inc.com/activity/component-lottery/)
+ [九宫格抽奖](http://thx.alibaba-inc.com/activity/component-lotterynine/)
+ [圆盘抽奖](http://thx.alibaba-inc.com/activity/component-lotterycircle/)
+ [积分](http://thx.alibaba-inc.com/activity/component-score/)

## 规范
+ [《客户参考规范》](http://thx.alibaba-inc.com/activity/standard-client/)
+ [《前端页面规范》](http://thx.alibaba-inc.com/activity/standard-fed/)
+ [《游戏制作规范》](http://thx.alibaba-inc.com/activity/standard-flash/)
+ [《运营参考规范》](http://thx.alibaba-inc.com/activity/standard-operate/)
+ [《平台活动前端规范》](http://thx.alibaba-inc.com/activity/standard-platform-fed/)

## 其他
[app自定义接口](http://thx.alibaba-inc.com/activity/)