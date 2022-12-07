<template><div><h1 id="centos-下如何安装-yum" tabindex="-1"><a class="header-anchor" href="#centos-下如何安装-yum" aria-hidden="true">#</a> centos 下如何安装 yum</h1>
<h2 id="查看自己已安装的-yum" tabindex="-1"><a class="header-anchor" href="#查看自己已安装的-yum" aria-hidden="true">#</a> 查看自己已安装的 yum</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">rpm</span> -qa<span class="token operator">|</span><span class="token function">grep</span> yum
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="删除已有的-yum" tabindex="-1"><a class="header-anchor" href="#删除已有的-yum" aria-hidden="true">#</a> 删除已有的 yum</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">rpm</span> -aq<span class="token operator">|</span><span class="token function">grep</span> yum<span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">rpm</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">--nodeps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="下载以下安装包" tabindex="-1"><a class="header-anchor" href="#下载以下安装包" aria-hidden="true">#</a> 下载以下安装包</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">wget</span> http://tel.mirrors.163.com/centos/7/os/x86_64/Packages/python-2.7.5-89.el7.x86_64.rpm

<span class="token function">wget</span> http://tel.mirrors.163.com/centos/7/os/x86_64/Packages/python-iniparse-0.4-9.el7.noarch.rpm

<span class="token function">wget</span> http://tel.mirrors.163.com/centos/7/os/x86_64/Packages/yum-3.4.3-168.el7.centos.noarch.rpm

<span class="token function">wget</span> http://tel.mirrors.163.com/centos/7/os/x86_64/Packages/yum-metadata-parser-1.1.4-10.el7.x86_64.rpm

<span class="token function">wget</span> http://tel.mirrors.163.com/centos/7/os/x86_64/Packages/yum-plugin-fastestmirror-1.1.31-54.el7_8.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果找不到以上版本，可以到http://tel.mirrors.163.com/centos/7/os/x86_64/Packages/下载最新版本</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> python-2.7.5-89.el7.x86_64.rpm python-iniparse-0.4-9.el7.noarch.rpm <span class="token parameter variable">--nodeps</span> <span class="token parameter variable">--force</span>

<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> yum-metadata-parser-1.1.4-10.el7.x86_64.rpm <span class="token parameter variable">--nodeps</span> <span class="token parameter variable">--force</span>

<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> yum-3.4.3-168.el7.centos.noarch.rpm yum-plugin-fastestmirror-1.1.31-54.el7_8.noarch.rpm <span class="token parameter variable">--nodeps</span> <span class="token parameter variable">--force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更改-yum-源" tabindex="-1"><a class="header-anchor" href="#更改-yum-源" aria-hidden="true">#</a> 更改 yum 源</h2>
<ol>
<li>备份、下载配置文件
a.首先备份/etc/yum.repos.d/CentOS-Base.repo</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mv</span> /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>到该网站http://mirrors.163.com/.help/centos.html下载配置文件，重命名为CentOS-Base.repo， 放入/etc/yum.repos.d/(操作前请做好相应备份)</li>
</ol>
<p>CentOS7</p>
<div class="language-vim line-numbers-mode" data-ext="vim"><pre v-pre class="language-vim"><code># CentOS<span class="token operator">-</span>Base<span class="token operator">.</span>repo
#
# The mirror system uses the connecting IP address of the client and the
# <span class="token keyword">update</span> status of each mirror <span class="token keyword">to</span> pick mirrors that are updated <span class="token keyword">to</span> and
# geographically <span class="token keyword">close</span> <span class="token keyword">to</span> the client<span class="token operator">.</span> You should use this <span class="token keyword">for</span> CentOS updates
# unless you are manually picking other mirrors<span class="token operator">.</span>
#
# If the mirrorlist<span class="token operator">=</span> does not work <span class="token keyword">for</span> you<span class="token punctuation">,</span> <span class="token keyword">as</span> a fall back you can <span class="token keyword">try</span> the
# remarked out baseurl<span class="token operator">=</span> line instead<span class="token operator">.</span>
#
#

<span class="token punctuation">[</span>base<span class="token punctuation">]</span>
name<span class="token operator">=</span>CentOS<span class="token operator">-</span>$releasever <span class="token operator">-</span> Base
#mirrorlist<span class="token operator">=</span>http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrorlist<span class="token operator">.</span>centos<span class="token operator">.</span>org<span class="token operator">/</span><span class="token operator">?</span>release<span class="token operator">=</span>$releasever&amp;arch<span class="token operator">=</span>$basearch&amp;repo<span class="token operator">=</span>os
baseurl<span class="token operator">=</span>https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token operator">.</span>ustc<span class="token operator">.</span>edu<span class="token operator">.</span><span class="token keyword">cn</span><span class="token operator">/</span>centos<span class="token operator">/</span>$releasever<span class="token operator">/</span>os<span class="token operator">/</span>$basearch<span class="token operator">/</span>
gpgcheck<span class="token operator">=</span><span class="token number">1</span>
gpgkey<span class="token operator">=</span><span class="token keyword">file</span><span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token operator">/</span>etc<span class="token operator">/</span>pki<span class="token operator">/</span>rpm<span class="token operator">-</span>gpg<span class="token operator">/</span>RPM<span class="token operator">-</span>GPG<span class="token operator">-</span>KEY<span class="token operator">-</span>CentOS<span class="token operator">-</span><span class="token number">7</span>

#released updates
<span class="token punctuation">[</span>updates<span class="token punctuation">]</span>
name<span class="token operator">=</span>CentOS<span class="token operator">-</span>$releasever <span class="token operator">-</span> Updates
# mirrorlist<span class="token operator">=</span>http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrorlist<span class="token operator">.</span>centos<span class="token operator">.</span>org<span class="token operator">/</span><span class="token operator">?</span>release<span class="token operator">=</span>$releasever&amp;arch<span class="token operator">=</span>$basearch&amp;repo<span class="token operator">=</span>updates
baseurl<span class="token operator">=</span>https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token operator">.</span>ustc<span class="token operator">.</span>edu<span class="token operator">.</span><span class="token keyword">cn</span><span class="token operator">/</span>centos<span class="token operator">/</span>$releasever<span class="token operator">/</span>updates<span class="token operator">/</span>$basearch<span class="token operator">/</span>
gpgcheck<span class="token operator">=</span><span class="token number">1</span>
gpgkey<span class="token operator">=</span><span class="token keyword">file</span><span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token operator">/</span>etc<span class="token operator">/</span>pki<span class="token operator">/</span>rpm<span class="token operator">-</span>gpg<span class="token operator">/</span>RPM<span class="token operator">-</span>GPG<span class="token operator">-</span>KEY<span class="token operator">-</span>CentOS<span class="token operator">-</span><span class="token number">7</span>

#additional packages that may <span class="token keyword">be</span> useful
<span class="token punctuation">[</span>extras<span class="token punctuation">]</span>
name<span class="token operator">=</span>CentOS<span class="token operator">-</span>$releasever <span class="token operator">-</span> Extras
# mirrorlist<span class="token operator">=</span>http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrorlist<span class="token operator">.</span>centos<span class="token operator">.</span>org<span class="token operator">/</span><span class="token operator">?</span>release<span class="token operator">=</span>$releasever&amp;arch<span class="token operator">=</span>$basearch&amp;repo<span class="token operator">=</span>extras
baseurl<span class="token operator">=</span>https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token operator">.</span>ustc<span class="token operator">.</span>edu<span class="token operator">.</span><span class="token keyword">cn</span><span class="token operator">/</span>centos<span class="token operator">/</span>$releasever<span class="token operator">/</span>extras<span class="token operator">/</span>$basearch<span class="token operator">/</span>
gpgcheck<span class="token operator">=</span><span class="token number">1</span>
gpgkey<span class="token operator">=</span><span class="token keyword">file</span><span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token operator">/</span>etc<span class="token operator">/</span>pki<span class="token operator">/</span>rpm<span class="token operator">-</span>gpg<span class="token operator">/</span>RPM<span class="token operator">-</span>GPG<span class="token operator">-</span>KEY<span class="token operator">-</span>CentOS<span class="token operator">-</span><span class="token number">7</span>

#additional packages that extend functionality of existing packages
<span class="token punctuation">[</span>centosplus<span class="token punctuation">]</span>
name<span class="token operator">=</span>CentOS<span class="token operator">-</span>$releasever <span class="token operator">-</span> Plus
# mirrorlist<span class="token operator">=</span>http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrorlist<span class="token operator">.</span>centos<span class="token operator">.</span>org<span class="token operator">/</span><span class="token operator">?</span>release<span class="token operator">=</span>$releasever&amp;arch<span class="token operator">=</span>$basearch&amp;repo<span class="token operator">=</span>centosplus
baseurl<span class="token operator">=</span>https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token operator">.</span>ustc<span class="token operator">.</span>edu<span class="token operator">.</span><span class="token keyword">cn</span><span class="token operator">/</span>centos<span class="token operator">/</span>$releasever<span class="token operator">/</span>centosplus<span class="token operator">/</span>$basearch<span class="token operator">/</span>
gpgcheck<span class="token operator">=</span><span class="token number">1</span>
enabled<span class="token operator">=</span><span class="token number">0</span>
gpgkey<span class="token operator">=</span><span class="token keyword">file</span><span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token operator">/</span>etc<span class="token operator">/</span>pki<span class="token operator">/</span>rpm<span class="token operator">-</span>gpg<span class="token operator">/</span>RPM<span class="token operator">-</span>GPG<span class="token operator">-</span>KEY<span class="token operator">-</span>CentOS<span class="token operator">-</span><span class="token number">7</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CentOS6</p>
<p>CentOS5</p>
<ol start="3">
<li>运行以下命令更新缓存</li>
</ol>
<p>yum clean all
yum makecache</p>
</div></template>


