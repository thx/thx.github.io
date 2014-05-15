---
layout: post
title: 前端页面规范
authors:
  - name: 宫晴
---



`规范`

---

## 标准声明
建议使用html5声明方法 

```
<!doctype html>
```


## 字符编码
使用gbk编码

```
<meta charset="gbk">
```

在有些浏览器中使用javascript打印出来的中文（如alert方法）会出现乱码的情况，这时候可以给对应的javascript标签也加上与页面一样的字符编码，如下：

```
<script charset="gbk"></script>
```

## 全站统一的JS和CSS
TMS系统发布时会自动引入天猫或淘宝的顶部，包括全站统一的js和css。本地测试时可先将它们引入进来。

```
/*css*/
<link rel="stylesheet" href="http://g.tbcdn.cn/??mui/global/1.1.9/global.css,mui/header/1.1.3/header.css"/>
```
```
/*js 此js是天猫域下的公共js，但在淘宝域下同样适用，所以测试时可以引用同一个*/
<script src="http://g.tbcdn.cn/??kissy/k/1.3.0/kissy-min.js,mui/seed/1.1.8/seed.js,mui/global/1.0.6/tml.js,mui/global/1.1.9/global.js,mui/header/1.1.9/header.js,kissy/k/1.3.0/suggest-min.js,kissy/k/1.3.0/switchable-min.js,kissy/k/1.3.0/datalazyload-min.js"></script>
```
在新版的TMS系统中可以选择无页头方式，即不需要引入淘宝默认的js和css

## js框架
Js框架建议用淘宝的KISSY，若非要使用jQuery，请不要使用 `$` 字符，而是替换成 `jQuery`，否则会与发布系统冲突

## 图片要求
保存图片时选择 `存储为web和设备所用格式` 选项，背景能切成小块进行平铺的尽量切成小块，切图时如果是纯文字，或者全是色块的，建议使用png-8的格式进行保存；如果使用jpg格式保存图片的，请将品质压缩在60，个别如果图片不清晰，可以适度加大图片保存品质。如果是必须使用圆角等需要透明背景的情况，才使用png-24格式。png图片请使用tinypng压缩工具进行压缩，地址：[https://tinypng.com/](https://tinypng.com/)

## 浏览器兼容性
chrome、360、搜狗等，IE只考虑到IE8，尽量兼容IE7

## 代码规范

+ HTML采用div+css布局方式，不要用表格table布局
+ css和js必须写在html里面，css写在head的style标签里，js写在页面底部的body结束标签之前
+ 页面里所有引用图片的地方，图片路径都必须加上引号，如：

```
background:url("images/bg.jpg")
```

+ 页面中用到的图片都要先传到淘宝服务器，然后再替换成绝对路径。这一步可由淘宝ued传到服务器，再将替换好连接的html发给开发人员，以后都要在这上面进行更改

+ flash在页面中的嵌入要采用 **embed** 和 **param** 结合的方式，可参考下面的代码格式，只需改动flash的 **width**、 **height** 以及 **路径**。flash的路径由淘宝前端上传到服务器后生成。若需要从html向flash传参，可以参考KISSY的方法：
[http://docs.kissyui.com/1.3/docs/html/api/component/swf/](http://docs.kissyui.com/1.3/docs/html/api/component/swf/)

```
<object width="700" height="450" id="IEgameSwf" autoplay="1" loop="1" data="***.swf" type="application/x-shockwave-flash" wmode="transparent">
  <param value="transparent" name="wmode">
  <param value="***.swf" name="movie" height="700" width="450">
  <param name="AllowScriptAccess" value="always">

  <embed src="***.swf" width="700" height="450" autoplay="1" loop="1" allowScriptAccess="always" swLiveConnect="true" quality="high" align="middle" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" wmode="transparent" ></embed>
</object>
```

## Tips
+ 页面可点击的部分（如商品链接）可使用图片热区来实现，比较方便快捷，如下：

```
<img src="images/exp.jpg" usemap="#map-exp" />
<map id="map-exp" name="map-exp">
  <area shape="rect" coords="0,0,0,0" href="#" target="_blank" />
</map>
```


+ 因为现在活动页面主体区域要求是990px，但一般都是宽屏设计，为保证页面居中，可以将超出990的两边分别切割出来，并使用绝对定位。如下：

```
.wrap{width:990px;margin:0 auto;position:relative}
.left{width:250px;height:1200px;position:absolute;top:0;left:-249px;background:url("images/left.jpg") no-repeat}
.right{width:250px;height:1200px;position:absolute;top:0;right:-249px;background:url("images/right.jpg") no-repeat}

/*建议left和right的值比宽度小1个像素，因为经常会出现有1像素白边的情况*/

<div class="wrap">
  <div class="left"></div>
  <div class="right"></div>
</div>
```

+ 因为tms系统发布时会在活动代码外部嵌套默认的容器元素，所以如果要在body标签上设置背景颜色之类的样式可能会失效。建议自行在最外层嵌套一个div，承担body的样式
+ 若页面需要宽屏展示，而且发布在天猫域下，请在样式里加入以下规则，用以覆盖天猫的默认样式

```
#content{width: 100%;}
```


+ 页面发布在天猫域下，底部默认会加上天猫超市的模块，若需要去掉可加入以下代码：

```
  <?php $isNeedRemai= false; ?>
```

+ 页面发布在天猫域下，图片会自动加上延迟加载的效果，如果有些图片或图片所在的容器被设置了"display:none"，然后通过某些事件才把它显示出来，这时候会出现图片显示不出来的情况，需要加入以下代码：

```javascript
/*把以下代码加到设置图片显示的事件处理函数里面，记得加到图片显示的语句后面*/
KISSY.use("datalazyload", function(S) {
    S.DataLazyload();
});
```


    
## 页面模板示例：

```
<!doctype html>
<html>
<head>
<meta charset="gbk">
<title></title>

<link rel="stylesheet" href="http://g.tbcdn.cn/??mui/global/1.1.9/global.css,mui/header/1.1.3/header.css"/>

<script src="http://g.tbcdn.cn/??kissy/k/1.3.0/kissy-min.js,mui/seed/1.1.8/seed.js,mui/global/1.0.6/tml.js,mui/global/1.1.9/global.js,mui/header/1.1.9/header.js,kissy/k/1.3.0/suggest-min.js,kissy/k/1.3.0/switchable-min.js,kissy/k/1.3.0/datalazyload-min.js"></script> 
<script src="http://a.tbcdn.cn/p/snsdk/core.js"></script>

<style>
body{font-family: 'helvetica neue',tahoma,'hiragino sans gb',stheiti,'wenquanyi micro hei',\5FAE\8F6F\96C5\9ED1,\5B8B\4F53,sans-serif}
#content{width: 100%;}
img{display:block;}
area:focus{outline:none;}
.contain{width:100%;overflow:hidden;position: relative;}
.wrap{width:990px;margin:0 auto;position:relative}
.left{width:px;height:px;position:absolute;top:0;left:-px;background:url("") no-repeat}
.right{width:px;height:px;position:absolute;top:0;right:-px;background:url("") no-repeat}
.popup_shade{width:100%;height:100%;position:fixed;top:0;left:0;background-color:#000;opacity:.7;filter:alpha(opacity=70);z-index:110;display:none}
</style>

</head>
<body>
  <div class="contain">
    <div class="wrap">
      <div class=""> 
        <img src="images/.jpg" usemap="#map-" />
        <map id="map-" name="map-">
          <area shape="rect" coords="" href="#" target="_blank" />
        </map>
      </div> 
      <div class="left"></div>
      <div class="right"></div>
      <div class="popup_shade"></div>
    </div>
  </div>
  <script></script>
</body>
</html>

```