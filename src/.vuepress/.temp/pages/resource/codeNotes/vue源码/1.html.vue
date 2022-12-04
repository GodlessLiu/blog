<template><div><h1 id="mini-vue" tabindex="-1"><a class="header-anchor" href="#mini-vue" aria-hidden="true">#</a> mini-vue</h1>
<p>实现最简 vue3 模型，用于深入学习 vue3， 让你更轻松的理解 vue3 的核心逻辑</p>
<h1 id="why" tabindex="-1"><a class="header-anchor" href="#why" aria-hidden="true">#</a> why</h1>
<p>当我们需要深入学习 vue3 时，我们就需要看源码来学习，但是像这种工业级别的库，源码中有很多逻辑是用于处理边缘情况或者是兼容处理逻辑，是不利于我们学习的。
我们应该关注于核心逻辑，而这个库的目的就是把 vue3 源码中最核心的逻辑剥离出来，只留下核心逻辑，以供大家学习。</p>
<h1 id="第一章——实现-effect-reactive-依赖收集-触发依赖" tabindex="-1"><a class="header-anchor" href="#第一章——实现-effect-reactive-依赖收集-触发依赖" aria-hidden="true">#</a> 第一章——实现 effect &amp; reactive &amp; 依赖收集 &amp; 触发依赖</h1>
<h2 id="reactive" tabindex="-1"><a class="header-anchor" href="#reactive" aria-hidden="true">#</a> reactive</h2>
<h3 id="主要功能" tabindex="-1"><a class="header-anchor" href="#主要功能" aria-hidden="true">#</a> 主要功能</h3>
<p>reactive 一般是和 effect 一起使用，将<mark>依赖于 reactive 对象</mark>的 effect 函数进行依赖收集，在 vue3 中，reactive 对象实际上是一个 Proxy 代理，当我们对 reactive 对象进行读取操作时，我们会进行一次依赖收集，将依赖于这个对象的 fn 进行储存在一个 map 里面。当我们对这个对象进行 set 操作时，我们会将收集起来的依赖进行逐个调用。
对应的测试文件</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"reactive"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"happy path"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> original <span class="token operator">=</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> observed <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>original<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>observed<span class="token punctuation">)</span><span class="token punctuation">.</span>not<span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span>original<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>observed<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    observed<span class="token punctuation">.</span>foo<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>observed<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/images/20221204172737.png" alt="图片"></p>
<h2 id="effect" tabindex="-1"><a class="header-anchor" href="#effect" aria-hidden="true">#</a> effect</h2>
<p>effect 接受一个函数，当我们使用 effect 时，这个函数被调用，每次我们对响应式对象进行改变时，调用这个函数
对应的测试文件</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"effect"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"happy path"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      age<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> nextAge<span class="token punctuation">;</span>
    <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      nextAge <span class="token operator">=</span> user<span class="token punctuation">.</span>age <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>nextAge<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// update</span>
    user<span class="token punctuation">.</span>age<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>nextAge<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


