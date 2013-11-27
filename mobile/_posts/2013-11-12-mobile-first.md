---
layout: post
title: 移动优先
authors:
  - name: 逸才
    homepage: http://cyj.me
---

移动优先（Mobile First）是个很笼统的词，不理解其意有何指之前，容易听过就算。但是无线很重要，
我们还落下太多功课，所以必须拿这个词来说事，讲移动怎么优先。

首先，这个提法，产品、运营在说，设计师在说，前端工程师也在说，但意义是有差别的。

## 产品意义

诸位阿里同僚都知道厂长、老厂长表的态了，阿里要无线 All In，把所有筹码都压上，车间主任超凡
也和大家说过，要移动优先。那么，对产品而言，移动优先意味着：

- 成长带来机遇
- 功能激发创新
- 限制促使专注

### 成长带来机遇

对于产品、运营而言，移动优先是因为移动有更多可能性。列几项有趣的数据，引自
[Luke Wroblewski 的 Mobile First Slides](http://static.lukew.com/MobileFirst_LukeW.pdf)：

- 2013年，手机将超越 PC 成为最常用的 Web 访问设备
- 2010年，移动网站的访问量增长了 600%

这是2010年的数据，有些旧了，我们看2013年的：

- 目前有12亿用户使用移动设备访问互联网
- 全球的互联网访问量中有 15% 来自移动设备
- 61% 的用户因在移动设备体验良好而对品牌留下更好印象
- 60% 的用户在逛商店时使用移动设备，50% 的用户在前往商店的路上使用
- 2013与2014年将有5亿部平板电脑发货
- 平板电脑用户比桌面电脑用户多愿意花50%的钱

引自 [13 Stats to Convince Your Boss to Invest in Mobile in 2013](http://www.mobify.com/blog/13-stats-to-convince-your-boss-to-invest-in-mobile-in-2013/)。

### 功能激发创新

其次，尤其对产品而言，移动有更多可玩性。感谢 iPhone，现今的移动设备，不能触屏的都不好意思
跟人打招呼，于是，因为触屏，我们可以：

- tap 单击
- double tap 双击
- drag 拖拽
- flick 快速翻动
- pinch 缩小
- spread 放大
- press 按下
- press & tap 按下同时单击
- press & drag 按下同时拖拽
- rotate 翻转

同样的，以前用鼠标玩的那些鼠标手势，我们现在可以用真正的手势更自然地玩出来。

屏幕之外，移动设备还搭载：

- 陀螺仪
- 前后摄像头
- GPS 定位
- 话筒

利用这些扩展单元做出来的 app 有多少个，就不用我在此赘述了。

### 限制促使专注

最后，对于产品而言，移动设备给产品设计带来挑战：

- 屏幕更小
- 网络更差
- 使用场景更多样

换个角度来说，挑战以为着机遇，这三项限制，都要求我们的设计更加专注，使得用户保持注意力，
也使得产品核心功能突出，省却桌面电脑时的眼花缭乱。

## 设计角度

设计师也在说移动优先，写全了应该是移动优先的设计（Mobile First Design）：

- 从小屏幕设备开始
- 从低性能设备开始

本章节参考 [An Experiment in Going Mobile First](http://kathrynjamesfaulkner.com/mobile-first/index.html)。
在该文中，作者以一项手机 app 设计为引子，讲述他们的移动优先设计思路。

该 app 叫做“线下（Offline）”，是个线上交友应用，但重心放在线下的互动。用户使用这款 app
可以看到附近都有哪些活动，跑去参加。

前端工程师可能注意到了，对于产品经理、设计师而言，是不分 app 是原生、Hybrid 还是 Web 的，
从设计角度看，移动优先是从产品本质上更加专注，实现核心功能，在往外衍生。所以首先我们需要理解
Offline 的项目背景。

### 项目背景

> Offline is an online social discovery platform that facilitates real-life
> social interaction through the creation of casual group activities, such as
> bar nights, dinner parties and sporting events.

Offlinee 是个线上社交平台，用来发现真实生活中的社交活动，通过类似酒吧迷醉、晚餐腐败、
挥汗运动等集体休闲活动交流。

所以用户的所在位置变得非常重要，通过当前位置，找到附近的活动。

### 信息结构

定位明确之后，开始设计产品的信息架构，有点像软件开发时做的需求文档，分出主要的数据类型，
可能的属性、状态，将内容组织好。

我们将主要数据分为：

- 活动
- 用户

### 交互设计

从这两项基本数据出发，开始交互设计，主要有：

- 活动列表
- 活动检索
- 活动详情
- 用户列表
- 用户详情
- 我的活动

这一步，列出需要设计的页面，画出页面线框图，推演用户行为，确保操作流畅。

### 样式与品牌

接着，是视觉层面的东西，设计品牌标识、颜色盘、图标、按钮、文字风格等等。

作者设计了一款复古风格的标识，采用明亮色彩以凸显舒适、写意的气氛。文字风格采用灰度设计，
作者说这样会给人一种高大上的感觉，也不易过时。

作者创建了样式盘（Style Tile），将需要明确的视觉元素在一个区块中详细列了出来，以便快速迭代。

### 实际设计

利用之前的交互设计与样式盘，设计出手机上的版本，再利用设计过程中细化出来的内容，设计大屏幕
（包括桌面电脑与平板电脑）上的响应式效果。在此过程中，贯彻：

- 限制促使简洁
- 内容优先
- 推敲而非复制

作者举了许多不错的例子，感兴趣的设计师一定要看
[原文](http://kathrynjamesfaulkner.com/mobile-first/index.html)。

## 实现角度

站在前端工程师的角度，移动优先则意味着移动优先的实现，我们和设计师的思路一样，在开发时，
先从小屏幕开始，完成核心功能，到大屏幕时，再堆砌更多功能。

### One Codebase

移动版本与桌面版本采用同一套代码？听起来像程序员的圣杯，每个人都梦想这么干，真正做到的并不多，
更何况是在应用场景更显复杂的电子商务领域。

[Velocity New York 2013](http://cyj.me/conf/velocity-new-york-2013) 时，承玉老师
问了 Sencha 老板一个问题，怎么达成 Once Codebase to
[Rule Them All](http://en.wikipedia.org/wiki/One_Ring) 这一目标。显然没有
银弹，Sencha 老板，Michael Mullany，的意见是移动优先，从小处着眼，再一点点往上增补。

### 媒体查询

简单而言，就是把现在的媒体查询掉个个，把小屏幕相关样式放前面，大屏幕的样式则在后头，对于
不支持媒体查询的低版本 IE，直接通过 HTML 条件注释引入一个额外的样式是完全可以接受的。
引用一丝老师的说法，没有谁会在移动设备上还使用低版本 IE 访问你的网站的。虽然这句话与响应式
设计万能金句“你无法知道用户会用什么设备访问你的网站”有出入，但我仍以为然。

```html
<head>
  <link rel="stylesheet" type="text/css" href="/assets/style.css">
  <!--[if lte IE 8]>
  <link rel="stylesheet" type="text/css" href="/assets/ie.css">
  <![endif]-->
</head>
```

CSS 则分成如下内容：

```scss
/* 各个模块的样式，不涉及布局内容 */
article {
  h1 {
    font-size: 200%;
  }
  a:link {
    color: #555;
    border-bottom: 1px transparent;
  }
  a:hover {
    color: #333;
    border-bottom: 1px solid #333;
  }
}

/* 小屏幕时的布局 */
@media (max-width: 799px) {
  #page {
    height: 100%;
    position: relative;
  }

  #aside {
    position: absolute;
    left: -200px;
    top: 0;
    width: 200px;
    height: 100%;
  }

  #content {
    overflow: auto;
    height: 100%;
  }
}

/* 大屏幕时的布局 */
@media (min-width: 800px) {
  #aside {
    float: left;
    width: 200px;
  }

  #content {
    float: left;
    margin-left: 220px;
  }
}
```

如果样式文件巨大，我们还可以把大屏部分的样式抽离，采用按需加载的方式，请看下文。

### 鱼与熊掌

以个人主页为例，在传统页面中，通常会有侧边栏（`#aside`）与评论区（`#comments`），
评论区随着用户评论变大，侧边栏则塞满相关博文链接、交换链接、导航、甚至广告，人家写博客的
也希望赚点外快不是。

到了移动设备，因为移动网络不稳定，也因为 3G、4G 的不普及，无线热点的缺乏，网页的加载速度
不可预测，我们希望页面相关性较低的内容越少越好，于是，我们把 `#aside` 与 `#comments`
换成连接：

```html
<div id="page">
  <div id="content">
    <article><!-- You should read http://cyj.me --></article>
    <div id="comment"><a href="/comments"></a></div>
  </div>
  <div id="aside"><a href="/aside"></a></div>
</div>
```

可是到了大屏幕上，光有光秃秃的主内容确实太寒碜了，我买这么大显示器，付这么多钱包宽带，不是
为了只看你这么几行字的！

我们可以用这个办法，兼得鱼与熊掌：

```html
<div id="page">
  <div id="content">
    <article><!-- You should read http://cyj.me --></article>
    <div id="comment"><a href="/comments" data-remote></a></div>
  </div>
  <div id="aside"><a href="/aside" data-remote></a></div>
  <script>
  KISSY.use('node,ajax', function(S, Node, IO) {
    KISSY.ready(function(S) {
      // 判断是否屏幕比较大
      if (matchMedia('min-width: 1024px').matches) {
        // 确实挺大，那我们把可以加载进来的区块搞进来吧
        S.all('[data-remote]').each(function(a, i) {
          IO.get(a.attr('href') + '?xhr', function(markup) {
            a.parent().html(markup)
          })
        })
        // 延迟加载为大屏幕提供的样式
        S.use('assets/screen.css')
      }
    })
  })
  </script>
</div>
```

### 主内容优先

从2008年 Chrome 发布到现在，随着 Velocity 大会、W3C 性能小组等组织的努力，现代浏览器的
资源加载策略已经非常先进、复杂了，在可以预见的日子里，还会有更多用来调优你的网站的技巧出现，
比如 `rel="prefetch"`，`rel="prerender"`，可以去看 Steve Souders 的演讲视频，标题
Prebrowsing。

但是在移动设备领域，好吧，其实也不止是在移动设备领域，许多性能优化的最佳实践并不一定妥当，
比如浏览器加载网页时，会把 JS 的下载优先级提高，把图片押后，因为 JS 中很可能有影响当前 DOM
树的操作，某些图片，可能等 JS 加载、执行完后，就不用下载了。

但是，那些关键图片，比如淘宝首页的焦点图，我的 [404 页面的豆豆](http://cyj.me/404)，
可不希望等着几十k甚至上百k的脚本加载、执行完才去请求。

提高主要内容的展示速度，就成了一个重要问题，尤其在网络情况复杂的移动领域。我们可以有很多办法，
比如延迟加载大部分脚本：

```html
<body>
  <!-- 很长一段代码 -->
  <script src="/assets/kissy/seed-min.js"></script>
  <script src="/assets/app.js"></script>
</body>
```

再在后者里做加载：

```js
// app.js
KISSY.use('mux/app', function(app) {
  // 业务代码
})
```

或者在 HTML 头部预加载图片：

```html
<head>
  <script>
  new Image().src = '/assets/critical-image.jpg'
  </script>
</head>
```

更有甚者， 直接将首屏幕（AFT，Above The Fold）的样式内联，放在 `<head>` 里面：

```html
<head>
  <style>
  #aft {
    /* 首屏幕样式 */
  }
  </style>
</head>
```

## 跋

本文拼拼凑凑，依照了参加
[Velocity New York 2013](http://cyj.me/conf/velocity-new-york-2013)
时听的前端大拿们的演讲，和最近搜索的一些还算有料的内容。

设计的部分，在前部门时已有不少积累，如今大家各奔前程，专注无线的同学应该更加有料。前端的部分，
大家都在摸索，标准也日新月异，许多讨论内容，因为篇幅原因，我都没放到这里。比如图片如何响应式，
比如 tap 事件的 300ms 延迟，它们都是技术细节，而 [Mobile](/mobile) 将是
THX 讨论这些技术细节的前头堡。

