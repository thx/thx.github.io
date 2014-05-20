---
layout: post
title: 积分
authors:
  - name: 宫晴
---

---

积分一般用于游戏、抽奖、排名等。积分组件封装了获取积分、推送积分、使用积分。积分的获取、推送和使用都只能对当前登录的用户（即自己）进行操作，不能对他人使用。

## 模块引用

```javascript
KISSY.use("mmcomponents/mamaScore/index",function(S,mmScore){})
```

## 接口
该组件返回一个构造函数，若要调用需先创建一个新的对象。除了初始化以外的其他方法在调用时，如果当前没有登录，会弹出登录窗口，依赖 [登录组件](http://thx.alibaba-inc.com/activity/component-login/)。

### 初始化
实例化一个积分对象

+ 用法

```javascript
var mScore = new mmScore({
  app: "gongqing"
});
```

+ 参数

对象字面量类型

|  name      |  type    |  introduction  |
| -----------| -------  |--------------- |
|  app       |  String  |必填。活动app名称，在自定义接口中设置 |

### get
获取积分

+ 用法

```javascript
mScore.get(function(score){})
```

+ 参数

|  name      |  type    |  introduction  |
| -----------| -------  |--------------- |
|  callback  | Function |获取积分成功后的回调函数，在回调中会返回积分值 |

### add
推送积分。积分是累加的，而且一般每天添加的积分会有一个上限值（在自定义app接口里设置）

+ 用法

```javascript
mScore.add(score, {
  success: function(){},
  limit  : function(){}
})
```

+ 参数

|  name      |  type    |  introduction  |
| -----------| -------  |--------------- |
|  score     | Number   |必填，要推送的积分值，大于0 |
|  object    | Object   |回调函数对象，包括两个方法<br/>1. **success**: function类型，添加成功后的回调；<br/>2. **limit**: 若设置了每天添加积分上限，则当积分添加达到上限时回调此函数 |

### use
使用积分

+ 用法

```javascript
mScore.use(score, function(){})
```

+ 参数

|  name      |  type    |  introduction  |
| -----------| -------  |--------------- |
|  score     | Number   |必填，要使用掉的积分值，大于0 |
|  callback  | Function |使用积分成功后的回调函数 |

### 示例

```javascript
var mScore = new mmScore({
  app: "gongqing"
});

//获取积分
mScore.get(function(score){
  if(score >= 500){
    alert(score);
  }else{
    alert("积分不够哦！");
  }            
})

//添加积分
mScore.add(500, {
  success: function(){
    mScore.get(function(score){
      alert(score);
    })
  },
  limit: function(){
    alert("积分已达上限");
  }
})

//使用积分
mScore.use(100, function(){
  mScore.get(function(score){
    alert(score);
  })
})
```

## Demo
[积分](http://www.taobao.com/market/alimama/score.php)