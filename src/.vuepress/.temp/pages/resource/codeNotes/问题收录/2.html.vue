<template><div><h1 id="centos7-安装-nginx" tabindex="-1"><a class="header-anchor" href="#centos7-安装-nginx" aria-hidden="true">#</a> centos7 安装 nginx</h1>
<h2 id="创建-nginx-目录" tabindex="-1"><a class="header-anchor" href="#创建-nginx-目录" aria-hidden="true">#</a> 创建 nginx 目录</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> opt
<span class="token function">mkdir</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="下载-pre" tabindex="-1"><a class="header-anchor" href="#下载-pre" aria-hidden="true">#</a> 下载 pre</h2>
<ol>
<li>下载</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">wget</span> http://downloads.sourceforge.net/project/pcre/pcre/8.37/pcre-8.37.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>解压</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-xzpvf</span> pcre-8.37.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>进入 pcre-8.37 执行命令</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./configure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4">
<li>执行命令</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5">
<li>验证</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pcre-config <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装-openssl-、zlib-、-gcc-依赖" tabindex="-1"><a class="header-anchor" href="#安装-openssl-、zlib-、-gcc-依赖" aria-hidden="true">#</a> 安装 openssl 、zlib 、 gcc 依赖</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">make</span> zlib zlib-devel gcc-c++ libtool openssl openssl-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装-nginx" tabindex="-1"><a class="header-anchor" href="#安装-nginx" aria-hidden="true">#</a> 安装 nginx</h2>
<ol>
<li>进入之前创建的 nginx 目录：下载 nginx：</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">wget</span> http://nginx.org/download/nginx-1.20.1.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>解压 nginx</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> nginx-1.20.1.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>进入 nginx-1.20.1 目录，执行</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./configure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4">
<li>编译</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="启动-nginx" tabindex="-1"><a class="header-anchor" href="#启动-nginx" aria-hidden="true">#</a> 启动 nginx</h2>
<ol>
<li>进入/usr/local/nginx/sbin，启动 nginx</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/nginx/sbin
./nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>查看 nginx 是否启起</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code> <span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><mark>备注：如果不能访问：需检查服务器的防火墙是否打开，80 端口是否对外开放：</mark><br>
<mark>查看开放的端口号：firewall-cmd --list-all</mark><br>
<mark>设置开放的端口号：firewall-cmd --add-service=http –permanent</mark><br>
<mark>firewall-cmd --add-port=80/tcp --permanent</mark><br>
<mark>重启防火墙：firewall-cmd –reload</mark><br>
<mark>防火墙设置完成后，在浏览器输入服务器 ip+80 端口访问：</mark></p>
</div></template>


