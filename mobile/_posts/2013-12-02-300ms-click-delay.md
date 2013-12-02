---
layout: post
title: 300 毫秒点击延迟的来龙去脉
authors:
  - name: 凌征
    homepage: http://yehao.diandian.com
---

原文地址：[What Exactly Is..... The 300ms Click Delay](http://www.icenium.com/blog/icenium-team-blog/2013/11/21/what-exactly-is.....-the-300ms-click-delay)

快速响应是所有 UI 实现的重中之重。研究表明，当[延迟超过 100 毫秒](http://www.nngroup.com/articles/response-times-3-important-limits/)，用户就能感受到界面的卡顿。
然而，出于对手指触摸滑动的区分，移动端页面对于触摸事件会有 300 毫秒的延迟，导致多数用户感觉移动设备上基于 HTML 的 web 应用界面响应速度慢。
本文主要讨论上述延时的来历，浏览器生产商的考虑，以及我们作为开发者，当前应该如何处理这个问题。

## 300 毫秒延迟的来历

这要追溯至 2007 年初。苹果公司在发布首款 iPhone 前夕，遇到一个问题 —— 当时的网站都是为大屏幕设备所设计的。于是苹果的工程师们做了一些约定，应对 iPhone 这种小屏幕浏览**桌面端**站点的问题。

这当中最出名的，当属双击缩放(double tap to zoom)。这也是会有上述 300 毫秒延迟的主要原因。

### 双击缩放

双击缩放，顾名思义，即用手指在屏幕上快速点击两次，iOS 自带的 Safari 浏览器会将网页缩放至原始比例。

下面以这篇[网站响应时间的文章](http://www.nngroup.com/articles/website-response-times/)页面为例，刚一打开页面，除了文章本身，我们还看到顶部通栏、菜单等非关键性要素。

![iPhone 上展现被缩小的文章页面](http://gtms01.alicdn.com/tps/i1/T13cIFFn0iXXcosBEo-320-568.png)

我们进入这个页面的目的显然是为了阅读这篇文章。所以当我们双击屏幕时，Safari 会相当智能地缩放至主体文章。

![同一张页面在 iPhone 上双击放大后的效果，聚焦在文章主体内容](http://gtms01.alicdn.com/tps/i1/T14qc7FoxbXXcosBEo-320-568.png)

上述例子表明，iOS Safari 在双击后**准确**地定位到页面主体文章，并将其缩放至适合比例展现。这也相当符合个人使用习惯。

那么这和 300 毫秒延迟有什么联系呢？

假定这么一个场景。用户在 iOS Safari 里边点击了一个链接。由于用户可以进行双击缩放或者双击滚动的操作，当用户一次点击屏幕之后，浏览器并不能立刻判断用户是确实要打开这个链接，还是想要进行双击操作。因此，iOS Safari 就等待 300 毫秒，以判断用户是否再次点击了屏幕。

于是，300 毫秒延迟就这么诞生了。

### 后 iPhone 时代的 300 毫秒延迟

鉴于 iPhone 的成功，其他移动浏览器都复制了 iPhone Safari 浏览器的多数约定，包括双击缩放。几乎现在所有的移动端浏览器都有这个功能。
六年前，一个人们还在为通过移动设备上网而惊叹的时期，如此性能损失并无大碍。然而如今，是个移动端开发的 web 应用性能可以同原生应用匹敌的时代，所有的单击事件都有 300 毫秒延迟，必然是不可接受的。此外，随着响应式设计的逐步推进，开发者们已经根据设备本身的尺寸对站点进行了优化，也就逐渐淘汰了诸如双击缩放的约定。

可喜的是，浏览器开发商已经意识到这个问题，并已相继提出了一些解决方案。

*注：iOS Safari 还有一个鲜为人知的约定。用户可以在靠近屏幕顶部或底部约 1/4 范围内的区域双击来滚动页面内容。当你在一个放大了的页面内竖向滚动的时候，是否有过不小心将页面横向滚动的经历？双击滚动正是为解决这个问题而生的。尽管后续出现的移动端浏览器复制了双击缩放这一行为，它们**并未**复制双击滚动的行为。这是我们稍后将会讨论到的很重要的一点。*

## 浏览器开发商提供的解决方案

避免点击延迟，提供一个响应迅速的移动端浏览器，可以说这是浏览器开发商的当务之急（当然，苹果公司除外）。因此，开发商们提供了一些比较有意思的解决方案。

### 禁用缩放

首先来看一个一目了然的解决方案。既然双击缩放仅对那些**可被缩放**的页面来说有存在意义，那对于**不可缩放**的页面，直接去掉点击延迟，何乐而不为呢？这里所说的不可缩放，是指使用了下述 `<meta>` 标签的页面。

```javascript
<meta name="viewport" content="user-scalable=no">
<meta name="viewport" content="initial-scale=1,maximum-scale=1">
```

Android 平台的 Chrome 浏览器[率先](https://code.google.com/p/chromium/issues/detail?id=169642)做出了这一改变，[Android 平台的 Firefox 浏览器](https://bugzilla.mozilla.org/show_bug.cgi?id=922896)随后实践之。其他浏览器开发商对这点优化暂无明确计划。

然而这个解决方案看似完美，但也带来一个明显的缺陷 —— 你必须完全禁用缩放来达到目的，而从移动端站点的可用性和可访问性来看，缩放是相当关键的一环。你很可能已经遇到过这个问题，即你想要放大一张图片或者一段字体较小的文本，却发现无法完成操作。

只能说 Android 平台上的 Chrome 和 Firefox 浏览器提供的禁用缩放优化，仅适用于 web 游戏等某些特定的场景，但多数网站并不能从中获益。

不过，Google Chrome 开发团队最近提出了更好的方式。

### width=device-width Meta 标签

除了双击缩放的约定外，iPhone 诞生时就有的另一个约定是，[在渲染桌面端站点的时候，使用 980 像素的视口宽度](https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html)，而非设备本身的宽度（iPhone 是 320 像素宽）。

下面是一个非常简单的页面，展现一张小猫的照片，照片宽为 320 像素。

```html
<!doctype html>
<html>
    <head><title>Kitty!</title></head>
    <body>
        <img src="http://placekitten.com/320/320">
    </body>
</html>
```

由于默认的视口宽度是 980 像素，在 iPhone 上会看到我们的小猫蜷缩在了左上角。

![一个简单的 web 页面在 iPhone 上的默认渲染效果。视口宽度默认为 980 像素](http://gtms01.alicdn.com/tps/i1/T12KcXFg4XXXcosBEo-320-568.png)

当然，我们可以继续用 `<meta>` 标签来进行配置。

```html
<meta name="viewport" content="width=device-width">
```

这条代码告诉浏览器将视口大小设为设备本身的尺寸。这在 iPhone 上的效果就是把视口宽度从默认的 980 像素改为 320 像素。下面的截图，即为添加这条代码之后的效果，现在这张照片就撑满整个屏幕宽度了。

![使用 meta 标签将刚才的页面视口设为 320 像素宽的效果](http://gtms01.alicdn.com/tps/i1/T1.4oHFhXXXXcosBEo-320-568.png)

*注：上述默认视口尺寸的约定，也被后续其他浏览器开发商所复制。因此上述现象不止是针对 iPhone 和 iOS Safari 浏览器。*

那这一约定又和 300 毫秒点击延迟有什么联系呢？

Chrome 开发团队[不久前宣布](https://groups.google.com/a/chromium.org/forum/#!topic/chromium-dev/8evES7o-QTY)，在 Chrome 32 这一版中，他们将[在包含 width=device-width 或者置为比 viewport 值更小的页面上禁用双击缩放](https://codereview.chromium.org/18850005/)。当然，没有双击缩放就没有 300 毫秒点击延迟。

深入之后，我们会发现这一做法还是相当有道理的。在我们还不知道响应式设计为何物的时代，双击缩放的诞生解决了在移动设备上浏览桌面端站点的问题。既然站点内包含了 `width=device-width` 这一 `<meta>` 标签，也就意味着这个网站采用了响应式设计，因此也就消除了在该站点上可能潜在的双击缩放需求。

这一解决方案的另一个关键之处在于它只是去除了双击缩放，但用户仍可以使用双指缩放 (pinch to zoom)。可见，缩放功能并非被完全禁用，也就不存在可用性和可访问性的问题了。

在我看来，这是一个令人振奋的方案，很好地提升了移动端站点的性能。当然，主要的问题是 `width=device-width` 这一优化目前仅被 Chrome 32 所支持。

那么其他浏览器是否也会实现这一优化？它所带来的性能提升显而易见，Firefox 很有可能会随后跟上。至于 Internet Explorer，除非其开发团队只看好指针事件 (pointer events，即将在下一节介绍)。这里最举棋不定的还属 iOS。

除了双击缩放，前面还提到 iOS Safari 是唯一一个提供双击滚动的移动端浏览器。如果 iOS 要实现上述优化，那势必要去掉双击滚动。结果如何，还留待时间为我们解答。

以上就是使用 `<meta>` 标签配置视口信息来解决 300 毫秒点击延迟的全部内容了，但别急，还有一个值得讨论的方案 —— 指针事件。

### 指针事件 (Pointer Events)

指针事件最初由微软提出，现已进入 [W3C 规范的候选推荐标准阶段](https://dvcs.w3.org/hg/pointerevents/raw-file/tip/pointerEvents.html) (Candidate Recommendation)。指针事件是一个新的 web 事件系列，相应的规范旨在使用一个单独的事件模型，对所有输入类型，包括鼠标 (mouse)、触摸 (touch)、触控 (stylus) 等，进行统一的处理。

例如，你可以只去监听一个元素的 `pointerdown` 事件，无需分别监听其 `touchstart` 和 `mousedown` 事件。对指针事件的深入解析已经超出了本文的讨论范围，但有一个和点击延迟直接相关的实现 —— 一个名为 `touch-action` 的新 CSS 属性。

根据[规范](https://dvcs.w3.org/hg/pointerevents/raw-file/tip/pointerEvents.html#the-touch-action-css-property)，`touch-action` 属性决定 *“是否触摸操作会触发用户代理的默认行为。这包括但不限于双指缩放等行为”*。

从实际应用的角度来看，`touch-action` 决定了用户在点击了目标元素之后，是否能够进行双指缩放或者双击缩放。因此，这也相当完美地解决了 300 毫秒点击延迟的问题。

`touch-action` 的默认值为 `auto`，将其置为 `none` 即可移除目标元素的 300 毫秒延迟。例如，下面的代码在 IE10 和 IE11 上移除了所有链接和按钮元素的点击延迟。

```css
a[href], button {
    -ms-touch-action: none; /* IE10 */
    touch-action: none;     /* IE11 */
}
```

你甚至可以在 `<body>` 元素上设置 `touch-action: none`，这就[彻底禁用了双击缩放](http://blogs.msdn.com/b/askie/archive/2013/01/06/how-to-implement-the-ms-touch-action-none-property-to-disable-double-tap-zoom-on-touch-devices.aspx) (注：这也同时禁用了双指缩放，因此也会带来前面讨论到的可访问性和可用性问题。)

但就目前而言，只有 Internet Explorer 实现了指针事件，不过近期 Chrome 也宣布了将在未来的版本中[提供支持](https://code.google.com/p/chromium/issues/detail?id=196799)。

好消息是，我们现在已经有一些指针事件的 polyfills 可以在项目中使用了。接下来我们将讨论当下可用的 polyfill 以及其他解决 300 毫秒延迟的方案。

## 当前如何避免延迟

尽管浏览器开发商针对 300 毫秒延迟问题提出了一些解决方案，但目前并没有简单通用的方案。不过，已经有好多开发者考虑过这一问题，并带来了一些基于 JavaScript 的跨平台解决方案。这些方案可以归为两类 —— 针对指针事件的 polyfill 和“快速点击 (fast click)”。

首先来说说指针事件的 polyfill。

### 指针事件的 polyfill

指针事件的 polyfill 比较多，以下列出比较流行的几个。

- Google 的 [Polymer](https://github.com/Polymer/PointerEvents)
- 微软的 [HandJS](http://handjs.codeplex.com/)
- [@Rich-Harris](https://github.com/Rich-Harris) 的 [Points](https://github.com/Rich-Harris/Points)

为避免 300 毫秒点击延迟，我们主要关心这些 polyfill 是如何在非 IE 浏览器中模拟 CSS `touch-action` 属性的，这其实是一个不小的挑战。由于浏览器会忽略不被支持的 CSS 属性，唯一能够检测开发者是否声明了 `touch-action: none` 的方法是使用 JavaScript 去请求并解析所有的样式表。HandJS 也正是这么做的，但不管是从性能上来看还是其他一些复杂的方面，这都会遇到问题。

Polymer 则是通过判断标签上的 `touch-action` 属性 (**attribute**)，而非 CSS 代码。下面的代码展示了 Polymer 是如何在链接上模拟 CSS `touch-action: none` 属性的。

```html
<a href="http://google.com" touch-action="none">Google</a>
```

这对于我们开发者来说意味着什么？如果你比较感兴趣，想深入指针事件，那上述 polyfill 就非常适合应用到手头的项目中。然而，你若只想寻求一个解决 300 毫秒点击延迟的方法，上述方案可能就有点过了，因为它们要么是资源密集型的方案，要么是 `touch-action` 属性的非标准化模拟。所以，接下去我们要来看一些专门针对 300 毫秒延迟而生的解决方案。

*注：上面这一节内容大多参考自 Points 这个 Polyfill 的 [README 文件](https://github.com/Rich-Harris/Points/blob/master/README.md)。感兴趣的话不妨深入阅读之。*

### FastClick

[FastClick](https://github.com/ftlabs/fastclick) 是 [FT Labs](http://labs.ft.com/) 专门为解决移动端浏览器 300 毫秒点击延迟问题所开发的一个轻量级的库。简而言之，FastClick 在检测到 `touchend` 事件的时候，会通过 [DOM 自定义事件](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)立即触发一个模拟 `click` 事件，并把浏览器在 300 毫秒之后真正触发的 `click` 事件阻止掉。

FastClick 的使用方法非常简单，在 window load 事件之后，在 `<body>` 上调用 `FastClick.attach()` 即可。

```javascript
window.addEventListener( "load", function() {
    FastClick.attach( document.body );
}, false );
```

`attach()` 方法虽可在更具体的元素上调用，直接绑定到 `<body>` 上可以确保整个应用都能受益。当 FastClick 检测到当前页面使用了基于 `<meta>` 标签或者 `touch-action` 属性的解决方案时，会静默退出。可以说，这是真正的跨平台方案出来之前一种很好的变通方案。

就目前而言，FastClick 非常实际地解决 300 毫秒点击延迟的问题。唯一的缺点可能也就是该脚本的文件尺寸 (尽管它只有 10kb)。如果你非常在意这点文件大小，可以尝试一下 [Filament Group](http://filamentgroup.com/) 的 [Tappy!](https://github.com/filamentgroup/tappy/)，或者 [tap.js](https://github.com/alexgibson/tap.js)。两者都相当轻量，能够通过监听 `tap` 而非 `click` 事件来绕过 300 毫秒延迟。

### Kendo UI Mobile

最后一点，如果你是 [Kendo UI Mobile](http://www.kendoui.com/mobile.aspx) 的用户，那你完全不必担心上述问题。一个自定义的点击延迟解决方案已经作为 [Touch widget](http://demos.kendoui.com/mobile/touch/index.html) 的一部分打包好了。这个 touch widget 是一个跨平台的 API，帮助处理所有平台的用户点击事件，所有的 Kendo UI Mobile 组件都会默认调用它。

实际上，这也是为什么在 [HTML5 Mobile Challenge](http://www.kendoui.com/appchallenge.aspx) 中，我们制作的这个名为 cuteness 的应用，很难分辨出它到底是一个 web 应用还是原生应用。如果你是第一次听说，现在就可以在手机上打开 [cuteness.io](http://cuteness.io/) 来体验一下。

## 小结

尽管苹果公司创造的双击缩放行为，是一种在移动设备上访问桌面端站点的不错的解决方案，但随之引入的 300 毫秒点击延迟也成为了移动端网站让用户感觉卡顿的罪魁祸首之一。

与此同时，浏览器开发商也提出了一些解决方案。对于缩放被禁用的网站，Android 平台上的 Chrome 和 Firefox 浏览器会禁用双击缩放功能；如果站点内配置了内容为 `width=device-width` 的 `<meta>` 标签，Chrome 32 及以上版本的浏览器也会禁用双击缩放功能；Internet Explorer 则对元素引入了全新的 CSS 属性，`touch-action`，若将其置为 `none`，也会取消该元素上的点击延迟。

由于这些解决方案较为零碎，社区里也有一些基于 JavaScript 的解决方案，包括一些指针事件的 polyfill，诸如 FastClick 之类专门为这个问题而生的脚本，以及类似 Kendo UI Mobile 等自主方案。

虽然 JavaScript 的方案很好地解决了延迟问题，但毕竟只是临时的措施。浏览器本身所提供的方案，例如 Chrome 的 `width=device-width` 优化以及 Internet Explorer 的指针事件等，更属长久之计。

未来发展如何，让我们拭目以待。