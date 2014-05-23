---
layout: post
title: 九宫格抽奖
authors:
  - name: 宫晴
---

---

[返回抽奖概述](http://thx.alibaba-inc.com/activity/component-lotterylist/)

## 简介

相比九宫格抽奖和圆盘抽奖，无效果抽奖则简单很多，因为它只负责抽奖程序，不处理抽奖结果，只返回给你。对html结构没有依赖。

## 模块引用

```javascript
KISSY.use("mmcomponents/mamaLottery/index", function(S, mmLottery){})
```

## 接口

### 初始化
初始化一个无效果抽奖模块。

+ 用法：

```javascript
var lottery = new mmLottery({
  app: "sanyang14"
});
```

+ 参数

|  Name      |  Type  |  Introduction  |
| -----------| -------|--------------- |
|  app       | String | 必填，活动app名称，由自定义接口配置 |

### run
抽奖启动方法。三种抽奖方式的启动方法都是一样的。

+ 用法

```javascript
lottery.run({
  success: function(data){},
  fail: function(){},
  error: function(error, value){}
})
```

+ 参数

|  Name      |  Type  |  Introduction  |
| -----------| -------|--------------- |
|  success  | Function | 中奖回调函数，则先执行九宫格循环到中奖格子后执行回调。此方法返回中奖结果对象。data的格式请参照 [附录一](http://thx.alibaba-inc.com/activity/component-lotterylist/) |
|  fail | Function | 未中奖回调函数，执行情况同上 |
| error  | Function | 如果抽奖程序报错，则直接执行此回调，不会再执行九宫格循环。<br/>此方法返回两个值，第一个是**错误码**，第二个是错误码的**说明文字**。抽奖组件中只对几种错误码进行说明，可将不需要用到的错误码或想特殊处理的错误码进行过滤。抽奖组件没有引用到错误码，则当成未中奖处理。"**用户未登录**"的情况则会直接弹出登陆框。详见 [附录二](http://thx.alibaba-inc.com/activity/component-lotterylist/)|

### 示例

```javascript
//初始化
var lottery = new mmLottery({
  app: "sanyang14"
});

//抽奖
lottery.run({
  success: function(data){
    //中奖
    alert(data.name);
  },
  fail: function(){
    //未中奖
    alert("谢谢参与");
  },
  error: function(error, value){
    //出错
    if(error == "EW01"){
      //过滤错误码
      //达到每天中奖次数
      alert("谢谢参与");
    }else{
      alert(value);
    }
  }
})
```

## Demo
[无效果抽奖](http://www.taobao.com/market/alimama/lottery.php)