# THX Gateway

## Build

最开始开发 THX 系列站点时，采用的是 jekyll 站点生成工具，安装与使用方式下文有提及。
因为 jekyll 在 Windows 下不方便安装，所以自 2014 年始，THX 提供了一个 Node 版本的
jekyll，叫做 [darko](https://github.com/dotnil/darko)。

### darko

darko 的安装方式十分简单，不过在此之前你需要安装 Node，详见
[Node 官网](http://nodejs.org)。点 Install 下载相应平台的二进制包，双击打开，一路
下一步就可以了。

然后打开命令行，执行：

```bash
$ npm install darko -g
```

等待安装完毕，就可以开始使用啦：

```bash
$ z thx.github.io   # 切换到 THX 代码目录
$ darko serve
```

然后访问 <http://localhost:4000> 即可。

### jekyll

采用 Jekyll 静态网站生成工具，请先安装 Ruby 与 github-pages：

```bash
$ gem install github-pages
```

Mac 用户，如果使用的是自带的 Ruby，可能需要在命令前加上 sudo；Windows 用户，请参考
[阿狼的文章](http://stormtea123.github.io/jekyll.av/)。
