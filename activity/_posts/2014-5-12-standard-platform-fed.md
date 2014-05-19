---
layout: post
title: 平台活动前端规范
authors:
  - name: 宫晴
---

---

## 标准声明
使用html5声明方法
```html
<!doctype html>
```
## 字符编码
使用gbk编码
```html
<meta charset="gbk">
```
## js框架
Js框架建议用淘宝的KISSY，若非要使用jQuery，请不要使用 `$` 字符，而是替换成 `jQuery`，否则会与发布系统冲突

```javascript
function scroll(){
  jQuery(".adward-list li:first").animate({height: 0, opacity: 0}, 'slow', function(){})
}
```


## 编码要求
+ HTML采用div+css布局方式，不要用表格table布局
+ css和js必须写在html里面，css写在head的style标签里，js写在页面底部的body结束标签之前
+ HTML要语义化，HTML文档可读性要强
+ class和id的命名要规范，建议使用驼峰式命名方法，命名最好通用一点，不要跟具体项目挂钩，方便以后扩展到其他项目

## 模板示例
```html
<!doctype html>
<html>
<head>
<meta charset="gbk">
<title>title</title>
<link rel="stylesheet" type="text/css" href="http://g.tbcdn.cn/thx/brix/2.0/brix-min.css">
<script src="http://g.tbcdn.cn/kissy/k/1.4.0/seed-min.js" charset="utf-8"></script>

<style>
body{font-family: 'helvetica neue',tahoma,'hiragino sans gb',stheiti,'wenquanyi micro hei',\5FAE\8F6F\96C5\9ED1,\5B8B\4F53,sans-serif}
#content{width: 100%;}
img{display:block;}
.contain{width:100%;overflow:hidden;position: relative;}
.wrap{width:990px;margin:0 auto;position:relative}
</style>

</head>
<body>
  <div class="contain">
    <div class="wrap">
    	<img src="images/.jpg" />
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
  
  <script></script>
</body>
</html>
```

## 浏览器兼容性
chrome、Firefox、IE8、360、Safari、搜狗、尽量兼容IE7

![浏览器](http://gtms02.alicdn.com/tps/i2/T18QEfFH4bXXaAuyIf-550-88.png)

## 图片要求
保存图片时选择 `存储为web和设备所用格式` 选项，背景能切成小块进行平铺的尽量切成小块，切图时如果是纯文字，或者全是色块的，建议使用png-8的格式进行保存；如果使用jpg格式保存图片的，请将品质压缩在60，个别如果图片不清晰，可以适度加大图片保存品质。如果是必须使用圆角等需要透明背景的情况，才使用png-24格式。png图片请使用tinypng压缩工具进行压缩，地址：[https://tinypng.com/](https://tinypng.com/)

![保存示例](http://gtms04.alicdn.com/tps/i4/T1HQMcFMRcXXcBfSTk-354-463.jpg)

![jpg](http://gtms03.alicdn.com/tps/i3/T1wHUbFN4cXXXim52h-990-240.jpg)


## Tips
+ 尽量还原设计稿，有问题要和设计师沟通
+ 提前3天发布测试