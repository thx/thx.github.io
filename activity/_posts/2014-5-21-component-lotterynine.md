---
layout: post
title: 九宫格抽奖
authors:
  - name: 宫晴
---

---

[返回抽奖概述](http://thx.alibaba-inc.com/activity/component-lotterylist/)

## 简介

九宫格抽奖的格子不限制在9个，根据客户的奖品设置和设计需求来定。

抽奖时九宫格会被遮层挡住，按照设定的顺序依次点亮每个格子，最后停在中奖的格子上。若某种奖品对应的格子数比较多，则会**随机**停在其中一个格子上。对HTML中抽奖器的结构有比较强的依赖。

![九宫格](http://gtms01.alicdn.com/tps/i1/T1HNhrFR8fXXbosoYa-877-363.jpg)

## HTML结构
这里的HTML和css只是实现九宫格布局的其中一种方案。现在case中一般都用这种结构。

```html
<div class="lotteryBox">
  <!--遮层-->
  <div class="luck-shade"></div>
  
  <!--span的个数和排列与设计稿上的一致-->
  <div class="lotteryBox-row">
    <span class="lottery-luck" id="lottery-luck0"></span>
    <span class="lottery-luck" id="lottery-luck1"></span>
    <span class="lottery-luck" id="lottery-luck2"></span>
    <span class="lottery-luck" id="lottery-luck3"></span>     
  </div>
  <div class="lotteryBox-row">
    <span class="lottery-luck" id="lottery-luck4"></span>
    <!--抽奖按钮-->
    <span class="lotteryBtn"></span>
    <span class="lottery-luck" id="lottery-luck5"></span>
  </div>
  <div class="lotteryBox-row">
    <span class="lottery-luck" id="lottery-luck6"></span>
    <span class="lottery-luck" id="lottery-luck7"></span>
    <span class="lottery-luck" id="lottery-luck8"></span>
    <span class="lottery-luck" id="lottery-luck9"></span>
  </div> 
</div>
```

```css
.lotteryBox{width:px;height: px;}
.lotteryBox .lottery-luck{display: block;float:left;width: px;height: px;position: relative;}
#lottery-luck0{background: url("") no-repeat;}
#lottery-luck1{background: url("") no-repeat;}
#lottery-luck2{background: url("") no-repeat;}
#lottery-luck3{background: url("") no-repeat;}
#lottery-luck4{background: url("") no-repeat;}
#lottery-luck5{background: url("") no-repeat;}
#lottery-luck6{background: url("") no-repeat;}
#lottery-luck7{background: url("") no-repeat;}
#lottery-luck8{background: url("") no-repeat;}
#lottery-luck9{background: url("") no-repeat;}
/*格子点亮*/
.lotteryBox .luck-active{z-index: 30;} 
.lotteryBox .lotteryBtn{display: block;float:left;width: px;height: px;background: url("") no-repeat;cursor: pointer}
/*遮层样式，背景颜色和透明值可自己设置*/
.luck-shade{position: absolute;top: 0;left: 0;width: px;height: px;background-color: #999;opacity: 0.7;filter:alpha(opacity=70);z-index: 15;display:none;}
```

## 模块引用

```javascript
KISSY.use("mmcomponents/mamaNineLottery/index", function(S, mmLottery){})
```

## 接口

### 初始化
初始化一个九宫格抽奖模块。

+ 用法：

```javascript
var adwardArray = {
  "奖品名称" :{luckItem: [],popupItem: },
  "谢谢参与" :{luckItem: [],popupItem: },
};

var mLottery = new mmLottery({
  app        : '',
  luckName   : "",
  luckNum    : ,
  adwardArray: adwardArray,
  luckShade  : "",
  rollRule   : [], 
  luckActive : ""
});
```

+ 参数

|  Name      |  Type  |  Introduction  |
| -----------| -------|--------------- |
|  app       | String | 必填，活动app名称，由自定义接口配置 |
|  luckName  | String | 必填，指九宫格中每个格子的id名称的公共前缀<br/>如"lottery-luck0"和"lottery-luck1"的公共前缀就是"lottery-luck"<br/>要求html中的格子排列数**从0开始**，比如第一个格子的id名称是"lottery-luck0" |
| luckNum    | Number | 必填，九宫格的格子个数 |
| adwardArray| Object | 必填，奖品与格子的对应关系<br/>**属性名称**是奖品的名称，必须与抽奖器里配置的一样，由运营提供，如："林志玲签名照"。未中奖的名字必须为"谢谢参与"，一般运营配置抽奖器的时候不会配置未中奖的概率，万一配置了，则流程会走到中奖的情况，若运营配置的名称不是"谢谢参与"，则只需再写一条属性即可。<br/>**属性值**是对象字面量格式，指明与html结构的对应关系。<br/>      **luckItem**：必填，Array类型，指每种奖品分别对应哪些格子，从0开始；<br/>**popupItem**：Number类型，指该奖品对应的抽奖结果弹窗。这个值是为了方便在返回抽奖结果后弹出相应的弹窗，在抽奖器中并没有用到。所以也可以忽略，或采取其他方式弹出窗口 |
| luckShade | String | 抽奖时九宫格遮层的class名称 |
| luckActive| String | 抽奖时被选中格子亮起来的class名称 |
| rollRule  | Array  | 抽奖时的循环顺序，默认为每行轮流循环，即0123456789。若要顺时针或逆时针循环，须指定，如[0,1,2,3,5,9,8,7,6,4]，具体排列规则依赖于html结构 |

![九宫格](http://gtms04.alicdn.com/tps/i4/T1uhtOFPNfXXan9Zfy-574-359.jpg)

### run
抽奖启动方法。三种抽奖方式的启动方法都是一样的。

+ 用法

```javascript
mLottery.run({
  success: function(data){},
  fail: function(){},
  error: function(error, value){}
})
```

+ 参数

|  Name      |  Type  |  Introduction  |
| -----------| -------|--------------- |
|  success  | Function | 中奖回调函数，则先执行九宫格循环到中奖格子后执行回调。此方法返回中奖结果对象。data的格式请参照 [附录一](http://thx.alibaba-inc.com/activity/component-lotterylist/#toc_2) |
|  fail | Function | 未中奖回调函数，执行情况同上 |
| error  | Function | 如果抽奖程序报错，则直接执行此回调，不会再执行九宫格循环。<br/>此方法返回两个值，第一个是**错误码**，第二个是错误码的**说明文字**。抽奖组件中只对几种错误码进行说明，可将不需要用到的错误码或想特殊处理的错误码进行过滤。抽奖组件没有引用到错误码，则当成未中奖处理。"**用户未登录**"的情况则会直接弹出登陆框，依赖[登录组件](http://thx.alibaba-inc.com/activity/component-login/)。详见 [附录二](http://thx.alibaba-inc.com/activity/component-lotterylist/#toc_3)|

### 示例

```javascript
//奖品
var adwardArray = {
  "IPADair"    :{luckItem: [0],popupItem: 7},
  "空气净化器"  :{luckItem: [9],popupItem: 6},
  "林志玲签名照":{luckItem: [7],popupItem: 4},
  "666返现特权" :{luckItem: [2],popupItem: 5},
  "222返现特权" :{luckItem: [6],popupItem: 1},
  "99返现特权"  :{luckItem: [3],popupItem: 2},
  "30返现特权"  :{luckItem: [8],popupItem: 3},
  "谢谢参与"    :{luckItem: [1, 4, 5],popupItem: 0},
};
//抽奖弹窗，与抽奖器运行无关
var popupBox = $(".luckPopup");

//初始化
var mLottery = new mmLottery({
  app        : 'sanyang14',
  luckName   : "lottery-luck",
  luckNum    : 10,
  adwardArray: adwardArray,
  luckShade  : "luck-shade",
  rollRule   : [0,1,2,3,5,9,8,7,6,4], 
  luckActive : "luck-active"
});

//抽奖
mLottery.run({
  success: function(data){
    //中奖
    $(popupBox[adwardArray[data.name].popupItem]).show();//弹窗，仅供参考
  },
  fail: function(){
    //未中奖
    $(popupBox[adwardArray["谢谢参与"].popupItem]).show();//同上
  },
  error: function(error, value){
    //出错
    if(error == "EW01"){
      //过滤错误码
      //达到每天中奖次数
      $(popupBox[adwardArray["谢谢参与"].popupItem]).show();//同上
    }else{
      alert(value);
    }
  }
})
```

## Demo
[九宫格抽奖](http://www.taobao.com/market/alimama/lottery_nine.php)