---
layout: post
title: 前端页面规范
authors:
  - name: 宫晴
---



## &#167; 标准声明
<p>建议使用html5声明方法 </p>
<pre><code>&lt;!doctype html&gt;</code></pre>

## &#167; 字符编码
<p>使用gbk编码</p>
<pre><code>&lt;meta charset="gbk"&gt;</code></pre>

## &#167; 全站统一的JS和CSS
<p>TMS系统发布时会自动引入天猫或淘宝的顶部，包括全站统一的js和css。本地测试时可先将它们引入进来</p>
<pre><code>/*css*/
&lt;link rel="stylesheet" href="http://g.tbcdn.cn/??mui/global/1.1.9/global.css,mui/header/1.1.3/header.css"/&gt;</code></pre>
<pre><code>/*js 此js是天猫域下的公共js，但在淘宝域下同样适用，所以测试时可以引用同一个*/
&lt;script src="http://g.tbcdn.cn/??kissy/k/1.3.0/kissy-min.js,mui/seed/1.1.8/seed.js,mui/global/1.0.6/tml.js,mui/global/1.1.9/global.js,mui/header/1.1.9/header.js,kissy/k/1.3.0/suggest-min.js,kissy/k/1.3.0/switchable-min.js,kissy/k/1.3.0/datalazyload-min.js"&gt;&lt;/script&gt;</code></pre>

## &#167; js框架
<p>Js框架建议用淘宝的KISSY，若非要使用jQuery，请不要使用”$”字符，而是替换成”jQuery”，否则会与发布系统冲突</p>

## &#167; 图片要求
<p>保存图片时选择“存储为web和设备所用格式”选项，背景能切成小块进行平铺的尽量切成小块，切图时如果是纯文字，或者全是色块的，建议使用png-8的格式进行保存；如果使用jpg格式保存图片的，请将品质压缩在60，个别如果图片不清晰，可以适度加大图片保存品质。如果是必须使用圆角等需要透明背景的情况，才使用png-24格式。png图片请使用tinypng压缩工具进行压缩，地址：<a href="#">https://tinypng.com/</a></p>

## &#167; 浏览器兼容性
<p>chrome、360、搜狗等，IE只考虑到IE8，尽量兼容IE7</p>

## &#167; 代码规范
<p>1）HTML不要采用表格table布局，而采用div+css布局方式。</p>
<p>2）css和js必须写在html里面，css写在head的style标签里，js写在页面底部的body结束标签之前。</p>
<p>3）页面里所有引用图片的地方，图片路径都必须加上引号，如：
  <pre><code>background:url("images/bg.jpg")</code></pre>
</p>
<p>4）页面中用到的图片都要先传到淘宝服务器，然后再替换成绝对路径。</p>
<p>5）flash在页面中的嵌入要采用embed和param结合的方式，可参考下面的代码格式，只需改动flash的width、height以及路径。flash的路径由淘宝前端上传到服务器后生成。若需要从html向flash传参，可以参考KISSY的方法：<a href="http://docs.kissyui.com/1.3/docs/html/api/component/swf/">http://docs.kissyui.com/1.3/docs/html/api/component/swf/</a>
<pre><code>&lt;object width="700" height="450" id="IEgameSwf" autoplay="1" loop="1" data="***.swf" type="application/x-shockwave-flash" wmode="transparent"&gt;
  &lt;param value="transparent" name="wmode"&gt;
  &lt;param value="***.swf" name="movie" height="700" width="450"&gt;
  &lt;param name="AllowScriptAccess" value="always"&gt;

  &lt;embed src="***.swf" width="700" height="450" autoplay="1" loop="1" allowScriptAccess="always" swLiveConnect="true" quality="high" align="middle" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" wmode="transparent" &gt;&lt;/embed&gt;
&lt;/object&gt;</code></pre>
</p>

## &#167; Tips
<p>1）页面商品链接可使用图片热区的方式，比较方便快捷，如下：
  <pre><code>&lt;img src="images/exp.jpg" usemap="#map-exp" /&gt;
&lt;map id="map-exp" name="map-exp"&gt;
  &lt;area shape="rect" coords="0,0,0,0" href="#" target="_blank" /&gt;
&lt;/map&gt;</code></pre>
</p>
<p>2）因为现在活动页面主体区域要求是990px，但一般都是宽屏设计，为保证页面居中，可以将超出990的两边分别切割出来，并使用绝对定位。如下：
  <pre><code>.wrap{width:990px;margin:0 auto;position:relative}
.left{width:250px;height:1200px;position:absolute;top:0;left:-250px;background:url("images/left.jpg") no-repeat}
.right{width:250px;height:1200px;position:absolute;top:0;right:-250px;background:url("images/right.jpg") no-repeat}

&lt;div class="wrap"&gt;
  &lt;div class="left"&gt;&lt;/div&gt;
  &lt;div class="right"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
</p>
<p>3）因为tms系统发布时会在活动代码外部嵌套默认的容器元素，所以如果要在body标签上设置背景颜色之类的样式可能会失效。建议自行在最外层嵌套一个div，承担body的样式</p>
<p>4）若页面需要宽屏展示，而且发布在天猫域下，请在样式里加入以下一条规则，用以覆盖天猫的默认样式
  <pre><code>#content{width: 100%;}</code></pre>
</p>
<p>5）页面发布在天猫域下，底部默认会加上天猫超市的模块，若需要去掉可加入以下代码：
  <pre><code>&lt;?php $isNeedRemai= false; ?&gt;</code></pre>
</p>
<p>6）页面发布在天猫域下，图片会自动加上延迟加载的效果，如果有些图片或图片所在的容器被设置了"display:none"，然后通过某些事件才把它显示出来，这时候会出现图片显示不出来的情况，需要加入以下代码：
  <pre><code>/*把以下代码加到设置图片显示的事件处理函数里面，记得加到图片显示的语句后面*/
KISSY.use("datalazyload", function(S) {
    S.DataLazyload();
});</code></pre>
</p>
    
## &#167; 页面模板示例：
<pre><code>&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset="gbk"&gt;
&lt;title&gt;&lt;/title&gt;

&lt;link rel="stylesheet" href="http://g.tbcdn.cn/??mui/global/1.1.9/global.css,mui/header/1.1.3/header.css"/&gt;

&lt;script src="http://g.tbcdn.cn/??kissy/k/1.3.0/kissy-min.js,mui/seed/1.1.8/seed.js,mui/global/1.0.6/tml.js,mui/global/1.1.9/global.js,mui/header/1.1.9/header.js,kissy/k/1.3.0/suggest-min.js,kissy/k/1.3.0/switchable-min.js,kissy/k/1.3.0/datalazyload-min.js"&gt;&lt;/script&gt; 
&lt;script src="http://a.tbcdn.cn/p/snsdk/core.js"&gt;&lt;/script&gt;

&lt;style&gt;
body{font-family: 'helvetica neue',tahoma,'hiragino sans gb',stheiti,'wenquanyi micro hei',\5FAE\8F6F\96C5\9ED1,\5B8B\4F53,sans-serif}
#content{width: 100%;}
img{display:block;}
area:focus{outline:none;}
.contain{width:100%;overflow:hidden;position: relative;}
.wrap{width:990px;margin:0 auto;position:relative}
.left{width:px;height:px;position:absolute;top:0;left:-px;background:url("") no-repeat}
.right{width:px;height:px;position:absolute;top:0;right:-px;background:url("") no-repeat}
.popup_shade{width:100%;height:100%;position:fixed;top:0;left:0;background-color:#000;opacity:.7;filter:alpha(opacity=70);z-index:110;display:none}
&lt;/style&gt;

&lt;/head&gt;
&lt;body&gt;
  &lt;div class="contain"&gt;
    &lt;div class="wrap"&gt;
      &lt;div class=""&gt; 
        &lt;img src="images/.jpg" usemap="#map-" /&gt;
        &lt;map id="map-" name="map-"&gt;
          &lt;area shape="rect" coords="" href="#" target="_blank" /&gt;
        &lt;/map&gt;
      &lt;/div&gt; 
      &lt;div class="left"&gt;&lt;/div&gt;
      &lt;div class="right"&gt;&lt;/div&gt;
      &lt;div class="popup_shade"&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;script&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
