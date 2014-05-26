---
layout: post
title: 圆盘抽奖
authors:
  - name: 宫晴
---

---

[返回抽奖列表](http://thx.alibaba-inc.com/activity/component-lotterylist/)

## 简介

圆盘抽奖的饼块个数要满足能被360整除，建议分成12块，具体还是根据客户的奖品设置和设计需求来定。

抽奖时指针不动，圆盘逆时针旋转至相应格子中间部位与指针位置重合。若某种奖品对应的格子数比较多，则会随机停在其中一个格子上。对html中抽奖器的结构有比较强的依赖。

![圆盘](http://gtms04.alicdn.com/tps/i4/T1JKajFrtlXXb.RV2r-571-526.jpg)

## HTML结构
这里的HTML和css只是实现圆盘布局的其中一种方案。现在case中一般都用这种结构。

```html
<div class="lottery-plate">
  <!--圆盘的背景图片，class名称一定要是gudxon_rotate-->
  <img src="" class="gudxon_rotate" />
  
  <!--抽奖按钮-->
  <div class="lottery-start">
    <div class="lottery-btn" id="lotteryBtn">
      <!--按钮图片-->
      <img src="" />
      
      <!--抽奖指针-->
      <span class="lottery-icon"></span>
    </div>
  </div>
</div>
```

```css
.lottery-plate{width:px;height:px;}
.lottery-start{position: absolute;top:px;left:px;width:px;height:px;}
.lottery-btn{position: absolute;top: 0px;left:0px;width:px;height:px;cursor: pointer;}
.lottery-icon{position: absolute;width:px;height:px;top:px;left:px;background:url("");}
```

## 模块引用

因为转盘的转动目前使用了jQuery来实现，所以还需要先引用jQuery和rotate组件

```html
<script src="http://a.tbcdn.cn/libs/jquery/1.7.1/jquery.js"></script> 
<script src="http://display.taobao.com/js/danz/rotate.js"></script>
```

```javascript
KISSY.use("mmcomponents/mamaCircleLottery/index", function(S, mmLottery){})
```

## 接口

### 初始化
初始化一个圆盘抽奖模块。

+ 用法：

```javascript
var adwardArray = {
  "奖品名称" :{luckItem: [],popupItem: },
  "谢谢参与" :{luckItem: [],popupItem: },
};

var mLottery = new mmLottery({
  app        :"",
  adwardArray: adwardArray,
  luckNum    : 
})
```

+ 参数

|  Name      |  Type  |  Introduction  |
| -----------| -------|--------------- |
|  app       | String | 必填，活动app名称，由自定义接口配置 |
| adwardArray| Object | 必填，奖品与格子的对应关系<br/>**属性名称**是奖品的名称，必须与抽奖器里配置的一样，由运营提供，如："林志玲签名照"。未中奖的名字必须为"谢谢参与"，一般运营配置抽奖器的时候不会配置未中奖的概率，万一配置了，则流程会走到中奖的情况，若运营配置的名称不是"谢谢参与"，则只需再写一条属性即可。<br/>**属性值**是对象字面量格式，指明与html结构的对应关系。<br/>      **luckItem**：必填，Array类型，指每种奖品分别对应哪些饼块，从0开始；初始化时指针左边的第一个饼块为0，逆时针排列<br/>**popupItem**：Number类型，指该奖品对应的抽奖结果弹窗。这个值是为了方便在返回抽奖结果后弹出相应的弹窗，在抽奖器中并没有用到。所以也可以忽略，或采取其他方式弹出窗口 |
| luckNum    | Number | 必填，圆盘的饼块个数 |

![圆盘](http://gtms01.alicdn.com/tps/i1/T1kIkTFuFjXXX1U2I8-556-529.jpg)

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
|  success  | Function | 中奖回调函数，则先转动圆盘到相应位置再执行回调。此方法返回中奖结果对象。data的格式请参照 [附录一](http://thx.alibaba-inc.com/activity/component-lotterylist/#toc_2) |
|  fail | Function | 未中奖回调函数，执行情况同上 |
| error  | Function | 如果抽奖程序报错，则直接执行此回调，不会再转动圆盘。<br/>此方法返回两个值，第一个是**错误码**，第二个是错误码的**说明文字**。抽奖组件中只对几种错误码进行说明，可将不需要用到的错误码或想特殊处理的错误码进行过滤。抽奖组件没有引用到错误码，则当成未中奖处理。"**用户未登录**"的情况则会直接弹出登陆框，依赖[登录组件](http://thx.alibaba-inc.com/activity/component-login/)。详见 [附录二](http://thx.alibaba-inc.com/activity/component-lotterylist/#toc_3)|

### 示例

```javascript
//奖品
var adwardArray = {
  "4988元杨幂大婚地巴厘岛畅游基金" :{luckItem: [0],popupItem: 0},
  "杨幂亲笔签名迷你柜"             :{luckItem: [9],popupItem: 0},
  "价值88元挂袋"                   :{luckItem: [10],popupItem: 0},
  "价值38元收纳盒"                 :{luckItem: [3],popupItem: 0},
  "10元现金券红包"                 :{luckItem: [6],popupItem: 0},
  "无门槛5元现金券红包"            :{luckItem: [2,4,7],popupItem: 0},
  "谢谢参与"                       :{luckItem: [1,5,8,11],popupItem: 0}
};
//抽奖弹窗，与抽奖器运行无关
var popupBox = $(".luckPopup");

//初始化
var mLottery = new mmLottery({
  app: "chowseng14",
  adwardArray: adwardArray,
  luckNum   : 12
})

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
[圆盘抽奖](http://www.taobao.com/market/alimama/lottery_circle.php)