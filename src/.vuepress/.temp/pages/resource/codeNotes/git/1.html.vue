<template><div><h2 id="git-发展过程" tabindex="-1"><a class="header-anchor" href="#git-发展过程" aria-hidden="true">#</a> Git 发展过程</h2>
<p>Git 最初是由 Linux 开发者 Linus 用了仅仅两周时间纯 C 语言编写而成，在编写完成之后就立马上手接管 Linux 源代码，不过在此之前 Linux 是由 BitMover 公司开发的 BitKeeper 分布式版本控制系统所管理源代码，它是商业收费的分布式版本控制器，但 BitMover 公司看中 Linux 开源精神，免费授权给 Linux 社区使用，在 2002 年时，Linux 开始使用 BitKeeper 分布式版本控制系统管理源代码，但好景不长，有一天 Linux 社区成员 Andrew（samba（局域网共享文件 c/s 程序）的作者）试图破解 BitKeeper 共享给所有人使用，被 BitMover 公司发现并收回了免费使用的版权，随后 Linus 就用了两周时间开发出了 git(两周时间包括测试)，也就是目前为止最好用的分布式版本控制系统。</p>
<p>大名鼎鼎的 github 用的就是 git 系统来管理它们的网站，这里需要区分一下，github 和 git 是两个东西，github 是一个社区，git 是一个服务系统，github 只支持 git 分布式系统，所以故名成为 github。</p>
<h1 id="git-操作" tabindex="-1"><a class="header-anchor" href="#git-操作" aria-hidden="true">#</a> Git 操作</h1>
<h2 id="基础操作" tabindex="-1"><a class="header-anchor" href="#基础操作" aria-hidden="true">#</a> 基础操作</h2>
<h3 id="初始化-git" tabindex="-1"><a class="header-anchor" href="#初始化-git" aria-hidden="true">#</a> 初始化 Git</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后查看目录结构中，就可以看到包含有 .git 子目录，这就说明创建版本库成功了。</p>
<h3 id="将文件添加到暂存区" tabindex="-1"><a class="header-anchor" href="#将文件添加到暂存区" aria-hidden="true">#</a> 将文件添加到暂存区</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> README_CN.md // 添加单个文件
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>  // 添加所有文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将暂存区中的文件-提交到仓库中-注意不是推送到-。需要使用git-commit" tabindex="-1"><a class="header-anchor" href="#将暂存区中的文件-提交到仓库中-注意不是推送到-。需要使用git-commit" aria-hidden="true">#</a> 将暂存区中的文件，提交到仓库中（<mark>注意不是推送到</mark>）。需要使用<code v-pre>git commit</code>：</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> commit // 如果暂存区有文件，则将其中的文件提交到仓库
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">'your comments'</span>  // 带评论提交，用于说明提交内容、变更、作用等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看提交历史" tabindex="-1"><a class="header-anchor" href="#查看提交历史" aria-hidden="true">#</a> 查看提交历史</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> log     // 显示所有提交的历史记录
<span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline    // 单行显示提交历史记录的内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本回退" tabindex="-1"><a class="header-anchor" href="#版本回退" aria-hidden="true">#</a> 版本回退</h3>
<p>有了<code v-pre>git log</code>来查看提交的历史记录，我们就可以通过<code v-pre>git reset --hard</code>来回退到我们需要的特定版本，然后使用当时的代码进行各种操作</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD^        // 回退到上一个提交版本
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD^^        // 回退到上上一个提交版本
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token string">'commit_id'</span>    // 会退到 commit_id 指定的提交版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分支管理" tabindex="-1"><a class="header-anchor" href="#分支管理" aria-hidden="true">#</a> 分支管理</h2>
<h3 id="查看分支" tabindex="-1"><a class="header-anchor" href="#查看分支" aria-hidden="true">#</a> 查看分支</h3>
<p>查看分支使用<code v-pre>git branch</code>：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch        // 查看本地分支信息
<span class="token function">git</span> branch <span class="token parameter variable">-v</span>     // 查看相对详细的本地分支信息
<span class="token function">git</span> branch <span class="token parameter variable">-av</span>     // 查看包括远程仓库在内的分支信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建分支" tabindex="-1"><a class="header-anchor" href="#创建分支" aria-hidden="true">#</a> 创建分支</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch dev // 新建一个名称为 dev 的分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="切换分支" tabindex="-1"><a class="header-anchor" href="#切换分支" aria-hidden="true">#</a> 切换分支</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout dev // 新建完 dev 分支以后，通过该命令切换到 dev 分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="合并分支" tabindex="-1"><a class="header-anchor" href="#合并分支" aria-hidden="true">#</a> 合并分支</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout master        // 切换回 master 分支
<span class="token function">git</span> merge dev            // 将 dev 分钟中的修改合并回 master 分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除分支" tabindex="-1"><a class="header-anchor" href="#删除分支" aria-hidden="true">#</a> 删除分支</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-d</span> dev // 删除 dev 分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="远程仓库" tabindex="-1"><a class="header-anchor" href="#远程仓库" aria-hidden="true">#</a> 远程仓库</h2>
<h3 id="从远程仓库克隆" tabindex="-1"><a class="header-anchor" href="#从远程仓库克隆" aria-hidden="true">#</a> 从远程仓库克隆</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/git/git.git     // 通过 https 协议，克隆 Github 上 <span class="token function">git</span> 仓库的源码
<span class="token function">git</span> clone linfuyan@github.com/git/git.git    // 通过 <span class="token function">ssh</span> 协议，克隆 Github 上 <span class="token function">git</span> 仓库的源码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加远程仓库" tabindex="-1"><a class="header-anchor" href="#添加远程仓库" aria-hidden="true">#</a> 添加远程仓库</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin your_remote_git_repo // 为本地仓库添加远程仓库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="推送本地的内容到远程仓库" tabindex="-1"><a class="header-anchor" href="#推送本地的内容到远程仓库" aria-hidden="true">#</a> 推送本地的内容到远程仓库</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master // 第一次推送时使用，可以简化后面的推送或者拉取命令使用
<span class="token function">git</span> push origin master    // 将本地 master 分支推送到 origin 远程分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="从远程仓库获取最新内容" tabindex="-1"><a class="header-anchor" href="#从远程仓库获取最新内容" aria-hidden="true">#</a> 从远程仓库获取最新内容</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> fetch origin master
<span class="token function">git</span> pull origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>git fetch</code> 和 <code v-pre>git pull</code> 之间的区别：</p>
<ul>
<li><code v-pre>git fetch</code> 是仅仅获取远程仓库的更新内容，并不会自动做合并。</li>
<li><code v-pre>git pull</code> 在获取远程仓库的内容后，会自动做合并，可以看成 git fetch 之后 git merge。</li>
</ul>
<p><mark>推荐多使用 fetch</mark></p>
</div></template>


