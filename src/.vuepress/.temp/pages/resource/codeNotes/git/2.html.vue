<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>在项目开发过程中，随着需求的不断变化以及后期不断修复 bug，伴随着的便是我们不停的打包部署。打包部署这期间的操作虽然不复杂，但是非常繁琐。目前市面上可以使用 jenkens 等工具实现持续集成（CI/CD），但是如果我们服务器资源少，且只需要简单的自动化部署，那么有更优雅的方式实现自动化部署：GitHub Actions。</p>
<p>本篇文章以前端项目为例，下文所有操作基于前端项目。</p>
<h2 id="github-actions" tabindex="-1"><a class="header-anchor" href="#github-actions" aria-hidden="true">#</a> Github Actions</h2>
<p>GitHub Actions 是 GitHub 推出的一款持续集成（CI/CD）服务，它给我们提供了虚拟的服务器资源，让我们可以基于它完成自动化测试、集成、部署等操作。</p>
<p>传统的前端项目开发流程：</p>
<ul>
<li>前端人员完成所有开发</li>
<li>推送代码</li>
<li>打包生成静态资源文件</li>
<li>推送至服务端</li>
<li>...依次循环</li>
</ul>
<p>使用 GitHub Actions 的前端项目开发流程：</p>
<ul>
<li>前端人员完成所有开发</li>
<li>推送代码</li>
<li>GitHub Actions 自动部署</li>
<li>...依次循环</li>
</ul>
<p>我们可以把 github actions 理解为脚本，GitHub 官方为了方便大家操作，允许发布自己的 Action 到 Actions 市场去，这样一些常用的部署脚本就不需要自己写了，只需要使用别人造好的轮子即可。</p>
<h2 id="概念介绍" tabindex="-1"><a class="header-anchor" href="#概念介绍" aria-hidden="true">#</a> 概念介绍</h2>
<ul>
<li>Workflows（工作流程）
持续集成的运行过程称为一次工作流程，也就是我们项目开始自动化部署到部署结束的这一段过程可以称为工作流程，一个工作流程中由一个或者多个任务（job）组成。</li>
<li>Jobs（任务）
一个工作流程中包含多个任务，简单来说就是一次自动部署的过程中，需要完成一个或多个任务，这些任务里面又包含了多个步骤（step）。</li>
<li>Step（步骤）
我们开发项目需要按照一个一个的步骤来进行，自动部署也一样，在一个任务中，步骤需要一步步的完成。</li>
<li>Action（动作）
每个步骤（step）可以包含一个或多个动作，比如我们在一个步骤中执行打包命令这个 Action。</li>
</ul>
<p><a href="https://docs.github.com/cn/actions" target="_blank" rel="noopener noreferrer">github action 官网<ExternalLinkIcon/></a></p>
<h2 id="部署示例" tabindex="-1"><a class="header-anchor" href="#部署示例" aria-hidden="true">#</a> 部署示例</h2>
<ol>
<li>
<p>创建项目并且发布在 github 上</p>
</li>
<li>
<p>服务器配置 nginx,并将自己的项目上线</p>
</li>
<li>
<p>创建.yaml 文件</p>
<ul>
<li>进入 GitHub Actions 菜单
<img src="https://img-blog.csdnimg.cn/img_convert/84c842a1fbfb28922cda1fca5bf340ed.png" alt="图片"></li>
<li>点击 set up a workflow yourself
<img src="https://img-blog.csdnimg.cn/img_convert/c738e9d7c67c6a698b6568cd265f95cf.png" alt="图片">
<img src="https://img-blog.csdnimg.cn/img_convert/b7eef826a40333602d587aa56071ab3e.png" alt="图片"></li>
</ul>
</li>
<li>
<p>修改.yml 文件</p>
</li>
</ol>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Build app and deploy to Tencent
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token comment">#监听push操作</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token comment"># mian分支，你也可以改成其他分支</span>
      <span class="token punctuation">-</span> main
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token comment"># 任务ID</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span>
    <span class="token comment"># 运行环境</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token comment"># 步骤</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token comment"># 使用别人的action</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
      <span class="token comment"># 步骤名称</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> npm install
        <span class="token comment"># 步骤执行指令</span>
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm install
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> npm run build
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run build
      <span class="token comment"># 命名这个任务为发布Deploy</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy
        <span class="token comment"># 因为构建之后，需要把代码上传到服务器上，所以需要连接到ssh，并且做一个拷贝操作</span>
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> cross<span class="token punctuation">-</span>the<span class="token punctuation">-</span>world/scp<span class="token punctuation">-</span>pipeline@master
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">WELCOME</span><span class="token punctuation">:</span> <span class="token string">"ssh scp ssh pipelines"</span>
          <span class="token key atrule">LASTSSH</span><span class="token punctuation">:</span> <span class="token string">"Doing something after copying"</span>
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">host</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.USER_HOST <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">user</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.USER_NAME <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">pass</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.USER_PASS <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">connect_timeout</span><span class="token punctuation">:</span> 10s
          <span class="token key atrule">local</span><span class="token punctuation">:</span> <span class="token string">"./dist/*"</span>
          <span class="token key atrule">remote</span><span class="token punctuation">:</span> /home/www/dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码是在默认的 yml 文件上修改的，重点需要关注的是 jobs，这里我们只有一个任务，任务 id 就是 build，该任务里面有 3 个步骤，也就是我们项目部署通常的 3 个步骤：</p>
<ul>
<li>npm install 安装项目依赖</li>
<li>npm run build 打包项目</li>
<li>deploy 将打包好的静态资源推送到服务端
在 deploy 这个步骤中，使用了一个别人写好的 action，主要目的就是推送静态资源到服务端，几个重点字段解释：</li>
<li>host：服务器 ip</li>
<li>user：服务器登录用户</li>
<li>pass：服务器登录密码</li>
<li>connect_timeout：登陆超时限制</li>
<li>local：本地的静态资源文件，Vue 项目打包后会生成 dist 文件夹</li>
<li>remote：服务端静态资源文件存放路径
<mark>更改 yml 文件后可能会触发 actions，如果没有配置密钥，应该是会部署失败的。</mark></li>
</ul>
<ol start="5">
<li>配置部署密钥</li>
</ol>
<ul>
<li>进入 secrets
点击 setting-&gt;选择 secrets-&gt;点击新建
<img src="https://img-blog.csdnimg.cn/img_convert/1628b875a7b2f017fe9ababd233a5fd2.png" alt="图片"></li>
<li>设置相关密钥信息
名称可以任意取，但是要和 yml 中的相对应，设置后的结果如下：
<img src="https://img-blog.csdnimg.cn/img_convert/564082e62204b57ca518e10a5967da3d.png" alt="图片"></li>
</ul>
<ol start="6">
<li>推送代码
当我们 yml 文件和密钥都准备完成之后，这个时候便可以任意修改 一点代码然后 push 到分支上了，push 成功之后，actions 便会运行，可以点击进去查看详情：
<img src="https://img-blog.csdnimg.cn/img_convert/e0b3993457834d668d74a283c0df38ea.png" alt="图片"></li>
</ol>
</div></template>


