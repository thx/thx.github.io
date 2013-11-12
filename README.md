# THX Gateway

## Build

使用 [nico](http://lab.lepture.com/nico/zh) 构建，安装、编译命令如下：

```bash
$ npm install nico -g
$ cd gateway
$ nico build
```

开发时可以：

```bash
$ nico server --watch
```

暂时使用 one 主题。

## Deploy

使用 jake 编写了部署任务，详细可见 Jakefile 内容。

### 部署到 Github

```bash
$ jake deploy
```

利用 Github Pages 服务，组织账号（thx）可以创建 thx.github.io 仓库，放置内容到 master
分支，即可通过 http://thx.github.io 访问到。

因为没有采用 jekyll，所以将站点源码与内容分开放置，源码在 [source](https://github.com/thx/thx.github.io/tree/source)
分支，内容则在 [master](https://github.com/thx/thx.github.io/tree/master)，通过在
源码分支执行 nico 编译生成。

### 部署到服务器

将使用 rsync 发布文件到服务器，从而更新 <http://thx.alibaba-inc.com>，具体命令：

```bash
$ rsync -avz _site/ ux:/home/www/webapp/thx-gateway
```

所以如果要自行部署，需要在 `~/.ssh/config` 中配置好 ux 的 SSH 相关信息。可以参考
[ssh-agent](http://cyj.me/binary/ssh-agent)