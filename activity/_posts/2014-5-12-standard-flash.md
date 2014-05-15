---
layout: post
title: 游戏制作规范
authors:
  - name: 宫晴
---



`规范`

---

## 淘宝接口调用
游戏中需要用到什么接口需与淘宝后端进行协商，后端会根据需要开发相应接口并提供接口文档。一些公用的组件可由前端给到，如登录、分享、收藏、抽奖等。这些功能需要由第三方游戏公司将相应功能做到游戏里面，然后与淘宝前端或后端进行联调。 

与淘宝前端协作方式有两种：

+ 由淘宝直接提供接口，游戏方在flash里面直接请求接口
**优点**：测试简单、方便、快捷
**缺点**：需要游戏方知道如何在flash里面处理跨域json数据以及如何调用接口，沟通成本比较大


+ 由前端用js将功能写在html里面，提供函数名供flash调用
**优点**：游戏方不需要知道具体接口以及组件如何调用
**缺点**：需要游戏方知道如何在flash里面调用页面里的js，测试不方便、耗时，需要占用前端开发时间

## 本地配置
若要在本地测试时调用淘宝组件以及接口，需要以下几个步骤：

1. 启用一个本地服务器

2. **hosts** 绑定淘宝域名 **taobao.com** 或天猫域名 **tmall.com**
本地hosts目录为`C:\Windows\System32\drivers\etc\hosts`
例: `127.0.0.1  gongqing.tmall.com`

3. 将游戏和html放入服务器目录下

4. 在浏览器中通过服务器访问游戏或html
例：`http://gongqing.tmall.com/game.swf`

## html嵌入游戏
flash在页面中的嵌入要采用 **embed** 和 **param** 结合的方式，可参考下面的代码格式，只需改动flash的 **width**、 **height** 以及 **路径**。flash的路径由淘宝前端上传到服务器后生成。若需要从html向flash传参，可以参考KISSY的方法：
[http://docs.kissyui.com/1.3/docs/html/api/component/swf/](http://docs.kissyui.com/1.3/docs/html/api/component/swf/)

```
<object width="700" height="450" id="IEgameSwf" autoplay="1" loop="1" data="***.swf" type="application/x-shockwave-flash" wmode="transparent">
  <param value="transparent" name="wmode">
  <param value="***.swf" name="movie" height="700" width="450">
  <param name="AllowScriptAccess" value="always">

  <embed src="***.swf" width="700" height="450" autoplay="1" loop="1" allowScriptAccess="always" swLiveConnect="true" quality="high" align="middle" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" wmode="transparent" ></embed>
</object>
```

## flash路径
如果有多个flash，那么flash之间的调用必须使用 **绝对路径**。上传的时候会将几个flash放在同一级下，因此只要取到flash所在服务器的路径就可以拼接路径。具体做法如下：

1. 在主调用flash中（如入口flash）使用 `root.loaderInfo.url` 取得所在服务器的路径
2. 将取得的服务器路径拼接上被调用flash的文件名（flash文件名不要使用大写字母和中文），即得到被调用flash的绝对路径

## flash跨域
因为上传时html、flash、图片都是放在不同的服务器上，因此会涉及跨域的问题。接口的访问因为使用了jsonp格式，所以不用考虑。一般跨域问题是出现在flash和html要通信的时候。解决方法如下：

1. html中引入flash时加入属性 `allowScriptAccess="always"`

2. flash中加入语句 `Security.allowInsecureDomain('*')`

## 素材提交
游戏制作完成后要先在本地测试，调通了以后再发给淘宝前端，提交的素材格式是swf，如果有html也要一并提供


## 测试
游戏开发人员应加入项目的旺旺群，方便沟通。游戏方需与淘宝UED联调测试直至发布上线。

游戏上线测试后，大家会将bug公布在旺旺群里，游戏方需及时修正，并统一修改后将新版本发给前端进行发布。测试阶段游戏每天的发布次数最多2次。若是影响测试的重要bug，前端会及时发布，否则则在当天5点进行统一发布
