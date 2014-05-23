---
layout: post
title: 抽奖概述
authors:
  - name: 宫晴
---

---

## 抽奖列表

+ [无效果抽奖](http://thx.alibaba-inc.com/activity/component-lottery/)
+ [九宫格抽奖](http://thx.alibaba-inc.com/activity/component-lotterynine/)
+ [圆盘抽奖](http://thx.alibaba-inc.com/activity/component-lotterycircle/)

## 抽奖介绍

抽奖模块是建立在抽奖器的基础上，运营配置好抽奖器后，会给到我们抽奖器的配置信息，然后我们就可以请求抽奖器的接口进行抽奖，并返回抽奖结果

抽奖器的配置信息是用在app自定义接口里的，只要配置好就可以调用接口。奖品名单是我们判断抽奖结果的依据，所以一定要与抽奖器里设置的名称一致。不能通过奖品ID来判断，因为运营每次修改抽奖器，奖品ID就会变。

minisite活动中用到的抽奖器一般分为三种，**九宫格抽奖**、 **圆盘抽奖** 以及 **无效果抽奖**。九宫格抽奖与圆盘抽奖的结构是我们这边规定好的，客户只需要设计好抽奖器的皮肤。无效果抽奖则只返回抽奖结果，一般用在直接显示抽奖结果的情况。其实三种抽奖方式的抽奖机制都是一样的，只是为了前端调用的方便，将九宫格和圆盘封装起来。

三种抽奖方式都提供了统一的初始化以及抽奖启动方法，只是初始化阶段的入参类型和值不一样。

![九宫格](http://gtms04.alicdn.com/tps/i4/T1cR3eFKXXXXbecfjX-1024-513.jpg)

![圆盘](http://gtms03.alicdn.com/tps/i3/T1FCcaFKFaXXX7VPsF-1109-584.jpg)
  
  
## 附录一：中奖情况下返回的数据格式

```javascript
{
  "award_id"  : "",
  "errorCode" : "",   //错误码
  "errorMsg"  : "",
  "extra"     : "",
  "iswin"     : false,//是否中奖，true or false
  "level_no"  : "",   //奖品等级，与接口运营配置有关，如有需要可向运营要
  "name"      : "",   //奖品名称
  "resultcode": "",   
  "resultmsg" : "",
  "success"   : true, //是否调用成功，true or false
  "type"      : "",   //奖品类型：0-实物，10 -现金红包，2-抵价券，3-淘金卡,4-店铺优惠券 7-商城积分
  "value"     : ""
}
```

## 附录二：错误码参照表

|  Name  |  Introduction  |
|--------|----------------|
|  E005  |  积分不够  |
|  E007  |  活动未开始  |
|  E008  |  活动已结束  |
|  E011  |  验证码错误，请刷新页面  |
|  E014  |  用户未登录  |
|  E015  |  您今天的抽奖次数已用完  |
|  E016  |  您的抽奖次数已用完  |
|  E019  |  小二账号不能中奖  |
|  EW01  |  用户达到每天中奖次数  |
|  EW02  |  用户达到活动总中奖次数  |
|  ES03  |  用户未绑定支付宝  |