---
layout: post
title: 无线调试攻略
authors:
  - name: 黄龙
    homepage: http://blog.iblack7.com
---

### 三分靠 codeing，七分 debugging!

少年天才以外的我们，与其说是 coder,不如说是 debugger，都是一路调戏过来的，不好意思，是调试【本人口齿不清，发音不准，再发生类似事故请多多见谅】，因此当你 主动/被动 All in 了无线以后，你发现，知识的储备只是时间的积累和有意识的训练而已，可面对众多的 爱疯，案桌儿，山柴，内核不同，大小不一的设备。尼玛，没有个顺手的调试工具，简直是不能忍受的。

于是，结合我做无线有 一个季度 以来的爽与痛，再扒扒找找，整理一份专门调戏无线设备的攻略如下，不对之处，请千万指正：

### Mac 下调试 爱疯 h5

- 杀伤面积：***
- 上手指数：***
- 调试效率：***

首先说 Mac 是因为，木有 Mac，你 All in 个毛无线啊。一场无线 N 布斯的革命，都因苹果而生，缘苹果而疯。说一千，道一万，木有 Mac 你调戏她会累的伤筋动骨。

#### 一、iphone + Mac + Safrai + 数据线调试普通页面

以 [http://thx.github.io/](http://thx.github.io/) 为例，以下全部以它为素材。

iphone 上 Safrai 上打开 http://thx.github.io/，最好是连上 wifi，开始输入网址，尼玛，手机上输入网址是极差的体验，尤其对于我这种不谈钢琴不谈吉他的男子，指尖上的无线痛苦不堪。拯救你的是***二维码***，请到[http://chuangyi.taobao.com/util/qrcode](http://chuangyi.taobao.com/util/qrcode) 输入，扫它（下图），

<div>
    <img style="width: 100%;" src="http://gtms01.alicdn.com/tps/i1/T1pnAUFclfXXbSLjnY-799-399.png" alt="创意中心二维码">
</div>

***尼玛～～～，Safrai 上木有二维码扫描工具咩！***

国产山柴就好到这儿，要啥有啥，打开 UC web，扫它，复制它，粘贴它到 Safrai，注意多图杀猫。

<div class="dib-box" style="margin-bottom:5px;">
    <div style="width:48%;display:inline-block;margin-right:1%;" class="dib">
        <img style="width: 100%;" src="http://gtms01.alicdn.com/tps/i1/T1uSU2Fl0bXXcYjxAc-640-1136.jpg" alt="扫它">
    </div>
    <div style="width:48%;display:inline-block;margin-right:1%;" class="dib">
        <img style="width: 100%;" src="http://gtms01.alicdn.com/tps/i1/T1NnM0FodcXXcYjxAc-640-1136.jpg" alt="复制它">
    </div>
</div>
<div class="dib-box" style="margin-bottom:5px;">
    <div style="width:48%;display:inline-block;margin-right:1%;" class="dib">
        <img style="width: 100%;" src="http://gtms01.alicdn.com/tps/i1/T1E4cUFX0gXXcYjxAc-640-1136.jpg" alt="打开它">
    </div>
    <div style="width:48%;display:inline-block;" class="dib">
        <img style="width: 100%;" src="http://gtms01.alicdn.com/tps/i1/T183UsFjBgXXcYjxAc-640-1136.jpg" alt="开启 web 检查">
    </div>
</div>

这里务必按照下图指示，到 iphone 的设置里面找到 高级，然后开启 web 检查器，允许 Mac 嗅探你的 iphone page load（上图 4）:

然后拿到 iphone 数据线，USB 连接到 Mac，在 Mac 上打开 Safrai，选择开发 -> “某某” 的iphone -> thx.github.io：

<div>
    <img style="width: 100%;" src="http://gtms01.alicdn.com/tps/i1/T1Eyo8FhVXXXX4Tunv-707-504.png" alt="Safrai 上开启调试">
</div>

于是 Safrai 的调戏器被你弄出来了，你刚好不小心鼠标移到了中间 Dom 树结构上，你会发现你 iphone 上被同步映射上了该区域的浮层阴影：

![Safrai 调试器](http://gtms01.alicdn.com/tps/i1/T1QR7YFb0eXXaPgscw-1105-941.png)

<div class="dib-box" style="margin-bottom:5px;">
    <div style="width:48%;display:inline-block;margin-right:1%;" class="dib">
        <img style="width: 100%;" src="http://gtms01.alicdn.com/tps/i1/T1Ss73FaNcXXbzlxAc-640-1136.png" alt="被激活的区域">
    </div>
    <div style="width:48%;display:inline-block;" class="dib">
        <img style="width: 100%;" src="http://gtms01.alicdn.com/tps/i1/T1Foc8FlJaXXcYjxAc-640-1136.jpg" alt="被激活的区域">
    </div>
</div>

剩下的事情，就跟在 PC 上差不多，你在这个调试器里面，加断点，然后 iphone 上刷新页面，或者触发交互，就可以调试 js，样式同理，不再赘述。

##### 二、利用 auto_response 代理线上文件到本地调试

- 杀伤面积：***
- 上手指数：*****
- 调试效率：*****

[auto_response](https://github.com/qhwa/auto_response?source=c) 是我从业一来见过的最佳代理利器，没有之一，当然，它是我们 mux 如彼老师的开源之物，绝对流弊，pc 无线统统拿下，来，试玩一把：

auto_response 只支持 linux， windows 的同学可以安装个虚拟机，跑上 *nix 系统，同时要求你有 ruby 环境，最好是 ruby 1.9+。

安装：

```bash
gem install 'auto_response'
```

基本命令就这么多，so easy:

```bash
ar start

ar status #check server status
ar stop   #stop proxy server
```
然后，要设置代理，推荐用 chrome 插件 SwitchySharp, 建立一个情景模式，手动配置 HTTP 代理到 9000 端口。

![SwitchySharp](http://gtms01.alicdn.com/tps/i1/T1gIw.FcRXXXX6QWTn-885-558.png)

接下来，设置代理配置文件，在：

```bash
$HOME/.auto_response/rules
```

编辑它，里面都有详细注释，不多讲，本文要调戏 thx.github.io，因此我代理下里面的 post.js 和 gateway.css 到我本地，同时在手机上观看效果。

我加了这么两句：


```ruby
url "http://thx.github.io/assets/post.js"
goto "/Users/huanglong/Projects/git/thx.github.io/assets/post.js"

url "http://thx.github.io/assets/gateway.css"
goto "/Users/huanglong/Projects/git/thx.github.io/assets/gateway.css"

```

这样，当在 pc 浏览器中打开 http://thx.github.io 时候，实际请求的样式和脚本，都是我本机下的。

然后配置 iphone ,找到 设置 -> 通用 -> vpn，打开 vpn， 将代理调为 手动模式，填入本机 ip, 端口号填 9000，保存后。用任何一个浏览器打开 thx.github.io ，都是访问的我本机上的 post.js 和 assets.js。

这里如果在 iphone 上打开 safrai，按照上面策略 1 的方式打开本机的 safrai，就可以在本机上，调试和修改本机的被代理文件，同时在手机上看效果。Mac 下 Safrai 的代理配置方式为：

全局设置下就可以调试了。

另外， auto_reponse 不仅能代理 css/js，包括整个的 html，甚至 xhr 都完全木有问题。

#### 三、用 charles 抓包、代理线上文件到本地

- 杀伤面积：*****
- 上手指数：***
- 调试效率：****

[charles](http://www.charlesproxy.com/) 作为一个专业抓包工具，牛逼之处在于可以自定义上下行网速、External Proxy、反向代理配置简单、可解析AMF协议数据，可以抓取 FileReference.upload 请求和返回的数据，而其它浏览器抓包工具往往不易做到这一点。

配置也很简单，本机配置网络代理，charles 默认是 8888 端口：

![mac 本机配置代理](http://gtms01.alicdn.com/tps/i1/T1q236Fd0bXXaSIqTq-782-694.png)

打开 charles，从浏览器打开要抓包的页面 thx.github.io，即可看到数据包：左边的 sequence 和 structure。最迅捷的方式，就是直接在 structure 中，找到要代理的 js 和 css, 右键配置 map 目录，将线上地址映射到本地（下图 1）：

![](http://gtms01.alicdn.com/tps/i1/T1z2g3FmpcXXcBo4YY-1161-853.png)
![](http://gtms01.alicdn.com/tps/i1/T1Upw2FiBcXXX1Lksy-747-550.png)

ok, 到这里，显然 charles 可以和 iphone 结合来用，调试，原理同上 二。将手机 vpn 代理到本地 ip，端口填 8888，不仅可以抓手机上的包，同样可以调试 js/css ，在手机上直接看样式。


#### 四、用 weinre 调试 本机/测试机/远程服务器 页面

- 杀伤面积：*****
- 上手指数：***
- 调试效率：****

[weinre](http://people.apache.org/~pmuellr/weinre/docs/latest/Home.html) 是一个远程无线调试利器，现在已是 Apache 的一个开源项目, 我们用 npm 安装：


```bash
sudo npm -g install weinre
```

在 home 路径下，创建配置文件

```bash
cd ~
mkdir .weinre
cd .weinre
vi server.properties
```

粘贴如下内容，我配置了 8081 端口，默认是 8000 端口：

```bash
boundHost:    -all-
httpPort:     8081
reuseAddr:    true
readTimeout:  1
deathTimeout: 5
```

命令行中，启动 weinre:

```bash
weinre
```

本机/测试机 等，起了一个要被调试的站点服务，以我的为例，在我本机起了一个 ruby 服务，即利用生成 thx.github.io 静态站点的编译工具： jekyll。
到 thx.github.io 目录下，直接

```bash
jekyll serve -w
```

跑起来编译服务，默认是跑在 4000 端口，可以用

```bash
http://localhost:4000
http://0.0.0.0:4000
http://127.0.0.1:4000
http://host-domain-to-localhost:4000
```

均可以访问到该服务，但我们要做的是用 IP 访问，即 ifconfig 拿到本机 IP,我的是：http://10.74.3.192/

此时, 在本机浏览器，比如 chrome 中打开：

```bash
http://10.74.3.192:8081/client/
```

那么你极有希望看到这个 weinre 的本地调试窗口：

![weinre 调试窗口](http://gtms01.alicdn.com/tps/i1/T1Hv30FiVdXXcMh9wZ-901-941.png)

然后，加入如下通信脚本，加到本地站点下调试页面的底部：

```bash
http://10.74.3.192:8081/target/target-script-min.js
```

比如我的是加到 jekyll layout 里模板页面的底部：

![加入通信脚本](http://gtms01.alicdn.com/tps/i1/T1dko_Fd4XXXc.73QK-1338-1042.png)

接下来，拿起 爱疯/案桌儿/山柴 机，浏览器扫一个二维码，用 uc-web/qq-web/safrai/任何浏览器，打开：

```bash
http://10.74.3.192:4000
```
就访问到了 thx.github.io 的本地站点,在回头看 weinre 的本地调试窗口:

![weinre 调试窗口](http://gtms01.alicdn.com/tps/i1/T19NkWFoFeXXb7bKAk-1042-1091.png)

从 Remote 能看到目标页面信息，客户端信息，以及服务端的信息，可以从 Remote 切换到 Elements, 只要手机刷新，这里会同步刷新，于是你本地调试样式，修改样式神马的都无障碍了。

![weinre 调试窗口](http://gtms01.alicdn.com/tps/i1/T14DA8FoNXXXb7bKAk-1042-1091.png)

至于调试 JS 代码，还得研究一下。

#### 五、利用 NProxy 代理

- 杀伤面积：*****
- 上手指数：****
- 调试效率：****

[Nproxy](https://github.com/goddyZhao/nproxy) 我阿里原厂工的力作，鄙人以为：虽无 Fiddler, Charles, Rythem and Tinyproxy 出名，但实用程度毫不逊色。支持多平台，支持 combo 解耦与目录映射。

安装简单：

```bash
npm install -g nproxy
```

在任一项目目录下，创建 replace_rule.js，它默认是跑在 8989 端口：

基本用法：

```bash
Usage: nproxy [options]

Options:

  -h, --help         output usage information
  -V, --version      output the version number
  -l, --list [list]  Specify the replace rule file
  -p, --port [port]  Specify the port nproxy will listen on(8989 by default)
  -t, --timeout [timeout] Specify the request timeout (5 seconds by default)

```

我要调戏 thx，所以，就在 thx.github.com 的目录下建一个replace_rule.js，配置如下：

```javascript
module.exports = [

  // 1. replace single file with local one
  {
    pattern: 'http://thx.github.io/assets/post.js',      // Match url you wanna replace
    responder:  "/Users/huanglong/Projects/git/thx.github.io/assets/post.js"
  },

  {
    pattern: 'http://thx.github.io/assets/gateway.css',      // Match url you wanna replace
    responder:  "/Users/huanglong/Projects/git/thx.github.io/assets/gateway.css"
  }
 ]

```
把 NProxy 跑起来

```bash
cd /Users/huanglong/Projects/git/thx.github.io
nproxy -l replace.js
```

同时，利用 SwitchySharp 创建个 nproxy 的情景模式，在 chrome 下代理被调试页面，调试手机，依然是需要配置本机网络代理，然后，手机上 vpn 代理到本机 IP。

Nproxy 不仅能映射线上文件到本地，同样能映射本地服务中的文件到线上，正则适配，图片目录，combo 解耦等，各位自行按需配置就行。

#### 六、利用 tinyproxy 调戏页面

- 杀伤面积：*****
- 上手指数：**
- 调试效率：***

上文提到了 tinyproxy， 安装也很简单：

```bash
brew install tinyproxy
```

任一目录创建 tinyproxy.conf，然后执行：

```bash
tinyproxy -c tinyproxy.conf
```

如果不加 -c 参数，就是默认在安装目录：

```bash
/usr/local/etc/tinyproxy.conf
```

具体配置我就不再贴出，默认 tinyproxy.conf 注解很详细。代理原理同上，默认走 8888 端口。


#### 小结

总体下来，无线上调试并没有太复杂，跟我们 pc 上调试页面差不多，只是配置过程会稍微繁复一些。毕竟工具只是一种手段，实现原理都大同小异，易用性则看个人平台下的环境配置与编程习惯。

我们的主要作战场景是在 web h5 和 Hybrid，尤其 Hybrid 会是以后的主战场，Hybrid 作为混合模式移动应用，具“Native App 良好用户交互体验的优势” 和 “Web App 跨平台开发的优势”，它又分为：多View混合型，单 View 混合型，Web 主体型，如此多样的开发环境，会要求我们具备不同场景下的快速调试能力，更便携的调试手段，还期待与各位一起挖掘和研究，谨以此文，做抛砖引玉用。

PS: 其它的调试手段：后面慢慢补充。

### TODO
- nginx 反向代理
- fiddler 结合 ProxyDroid 代理
- [Mac 下调试 android](https://developers.google.com/chrome-developer-tools/docs/remote-debugging](https://developers.google.com/chrome-developer-tools/docs/remote-debugging)

