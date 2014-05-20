---
layout: post
title: 分享
authors:
  - name: 宫晴
---

---

分享组件建立在原有的SNS分享组件的基础上，但是只包括自定义分享，即只用于活动页面。分享的平台有淘宝、微博、来往、豆瓣、人人、搜狐博客。默认分享到淘宝个人主页，其他平台需要绑定相关账号。

下图是默认分享到淘宝个人主页的样式。

![分享](http://gtms01.alicdn.com/tps/i1/T14TsXFF0bXXX.DX34-447-375.jpg)

若有需要，可设置默认也分享到微博。如果有绑定微博，则微博图标默认点亮，如果没有绑定，则会提示先绑定微博。但是必须说明的是绑定微博和分享到微博是无法强制的。

  ![分享](http://gtms01.alicdn.com/tps/i1/T1y9LaFypcXXbm_V34-450-377.jpg)
  
  ![分享](http://gtms04.alicdn.com/tps/i4/T18KebFqXkXXXSDww6-448-376.jpg)

## 模块引用

```javascript
/**** 需要先引入SNS的核心模块 *****/
<script src="http://a.tbcdn.cn/p/snsdk/core.js" ></script>
KISSY.use("mmcomponents/mamaShare/index",function(S,mmShare){})
```

## 接口
该组件返回一个构造函数，若要调用需先创建一个新的对象

### 初始化
定义公用参数。除了clientId和title，其他参数都是可选的；除了clientId，其他参数也可在show方法里定义，见show方法。

+ 用法

```javascript
var mShare = new mmShare({
  pageUrl : "",
  clientId: "",
  comment : "",
  title   : "",
  pic     : "",
  site    : "",
  success : function(){}
});
```

+ 参数

|  Name      |  Type  |  Introduction  |
| -----------| -------|--------------- |
|  pageUrl  | String | 分享后携带的链接，一般是活动页面的链接 |
|  clientId | Number | 必填，标记布点方，用于回流统计。需要在SNS组件平台上进行申请，申请的时候需要先有活动页面的链接。[点我去申请](http://t.taobao.com/platform/insideShare.htm) |
| title  | String | 必填，页面标题 |
| comment  | String | 分享评论的默认文案，不填则默认为空 |
|  pic | String | 分享带的图片，不填则默认为空 |
|  site |String or Number | 表示分享的平台，不填则默认为1，表示淘宝个人主页。目前还支持新浪微博和来往。<br/>当值为"sina"时，表示新浪微博，依然弹出SNS分享框。此时若已经绑定微博，则微博图标默认点亮；若没绑定，则会提示没有绑定，并提供绑定链接。但是客户依然可以点击取消或让图标变暗，做不了强制。<br/>当值为"laiwang"时，表示来往分享，会新开一个来往分享页面。 |
| success  | Function | 分享成功后调用的方法 |

### show
调用此方法弹出SNS分享框

+ 用法

```javascript
/****参数都在初始化时设置好了****/
mShare.show({});

/****需要单独设置某些属性****/
mShare.show({
  comment: "", 
  pic: "",
  ...
});
```

+ 参数

初始化只是定义一些公用的参数，若页面中要到的分享模块参数都一样，则在初始化时统一定义即可。若有些参数值是动态的，则在share方法中传入。初始化中的所有参数（除了clientId），都可在此方法中定义。

### 示例

```javascript
var mShare = new mmShare({
  pageUrl : "http://www.taobao.com/market/alimama/chowsangsang14214.php",
  clientId: "180568"
});

S.one(".share").on("click", function(){
  mShare.show({
    site   : "sina"
    comment: "宫晴test",
    title  : "gongqing",
    pic    : "http://gtms03.alicdn.com/tps/i3/T12UDkFupcXXXmVhsr-214-214.png",
  });
})
```

## Demo
[分享](http://www.taobao.com/market/alimama/share.php)