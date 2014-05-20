---
layout: post
title: 登录
authors:
  - name: 宫晴
---

---

登录组件分为三种：

+ 天猫域登录（需要引入天猫吊顶）
+ 淘宝域登录（需要引入淘宝吊顶）
+ SNS登录（无需吊顶）

目前发布页面一般有两种方式，一种是使用旧版TMS发布天猫页面；一种是使用新版TMS发布淘宝页面，新版TMS是没有淘宝吊顶的，所以这种情况下要使用SNS登录方式

## 模块引用
```javascipt
/**** 天猫 *****/
KISSY.use("mmcomponents/mamaTmallLogin/index",function(S,mmLogin){})

/**** SNS ，需要先引入SNS的核心模块 *****/
<script src="http://a.tbcdn.cn/p/snsdk/core.js" ></script>
KISSY.use("mmcomponents/mamaTmallLogin/index",function(S,mmLogin){})

/**** 淘宝 *****/
KISSY.use("mmcomponents/mamaTmallLogin/index",function(S,mmLogin){})
```

## 接口
三种登录方式对外提供的接口都是一样的。两个方法都是直接注册到window对象的，所以可以直接调用

### login
该方法用于在执行某些操作前需要先检测是否登录，如果没有登录则弹出登陆框，如果已经登录则直接执行回调函数的情况

+ 用法
```javascript
login(callback, force)
```

+ 参数
|  Name      |  Type  |  Introduction  |
| -----------| -------|--------------- |
|  callback  | Function | 登录后执行的回调 |
|  force | Boolean | 不填则默认为false，表示根据登录状态来判断是否弹出；为true则表示强制弹出登陆框，不管是否登录。由于原生的SNS登录或天猫登录在判断登录状态时取得的cookie值可能已经过期，所以有时会失效，这时候就需要在某些接口返回“login”的时候强制弹出登陆框 |


+ 示例

```javascript
login(function(){
    alert("这里是登录后的回调函数");
})
```

### isLogin
该方法用于处理登录或未登录状态下要执行的操作

+ 用法
```javascript
isLogin({
  have: function(nick){}, 
  no: function(){}
})
```

+ 参数
|  Name      |  Type  |  Introduction  |
| -----------| -------|--------------- |
|  have  | Function | 如果已登录则执行此回调。该方法有一个参数，为当前登录用户的旺旺ID，所以此方法也可用于取得用户名 |
|  no    | Function | 如果未登录则执行此回调 |


+ 示例

```javascript
isLogin({
  have: function(nick){
    alert("用户名： " + nick);
  }, 
  no: function(){
    //没登录的时候强制弹出登陆框
    login(function(){}, true)
  }
})
```

## Demo
[天猫登录](http://www.tmall.com/go/act/sale/login_tmall.php)
[SNS登录](http://www.taobao.com/market/alimama/login_sns.php)
[淘宝登录](http://www.taobao.com/market/alimama/login_taobao.php)