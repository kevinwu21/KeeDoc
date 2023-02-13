import{_ as s,c as a,o as n,a as l}from"./app.82736834.js";const b=JSON.parse('{"title":"xargs","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"xargs 命令用法","slug":"xargs-命令用法","link":"#xargs-命令用法","children":[]},{"level":3,"title":"子 Shell（Subshells）","slug":"子-shell-subshells","link":"#子-shell-subshells","children":[]}]},{"level":2,"title":"reference","slug":"reference","link":"#reference","children":[]}],"relativePath":"linux/command/pages/xargs.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/xargs.md"},e=l(`<h1 id="xargs" tabindex="-1">xargs <a class="header-anchor" href="#xargs" aria-hidden="true">#</a></h1><p>给其他命令传递参数的一个过滤器</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>xargs 命令</strong> 是给其他命令传递参数的一个过滤器，也是组合多个命令的一个工具。它擅长将标准输入数据转换成命令行参数，xargs 能够处理管道或者 stdin 并将其转换成特定命令的命令参数。xargs 也可以将单行或多行文本输入转换为其他格式，例如多行变单行，单行变多行。xargs 的默认命令是 echo，空格是默认定界符。这意味着通过管道传递给 xargs 的输入将会包含换行和空白，不过通过 xargs 的处理，换行和空白将被空格取代。xargs 是构建单行命令的重要组件之一。</p><h3 id="xargs-命令用法" tabindex="-1">xargs 命令用法 <a class="header-anchor" href="#xargs-命令用法" aria-hidden="true">#</a></h3><p>xargs 用作替换工具，读取输入数据重新格式化后输出。</p><p>定义一个测试文件，内有多行文本数据：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">test.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">a</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">b</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">c</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">d</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">e</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">f</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">g</span></span>
<span class="line"><span style="color:#FFCB6B;">h</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">i</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">j</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">k</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">l</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">m</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">n</span></span>
<span class="line"><span style="color:#FFCB6B;">o</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">p</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">q</span></span>
<span class="line"><span style="color:#FFCB6B;">r</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">s</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">t</span></span>
<span class="line"><span style="color:#FFCB6B;">u</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">v</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">w</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">x</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">y</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">z</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>多行输入单行输出：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">test.txt</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">xargs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">a</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">b</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">c</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">d</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">e</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">f</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">g</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">h</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">i</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">j</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">k</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">l</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">m</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">n</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">o</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">p</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">q</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">r</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">s</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">t</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">u</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">v</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">w</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">x</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">y</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">z</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="使用-n-进行多行输出" tabindex="-1">使用 -n 进行多行输出 <a class="header-anchor" href="#使用-n-进行多行输出" aria-hidden="true">#</a></h4><p><strong>-n 选项</strong> 多行输出：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">test.txt</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">xargs</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-n3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">a</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">b</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">c</span></span>
<span class="line"><span style="color:#FFCB6B;">d</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">e</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">f</span></span>
<span class="line"><span style="color:#FFCB6B;">g</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">h</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">i</span></span>
<span class="line"><span style="color:#FFCB6B;">j</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">k</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">l</span></span>
<span class="line"><span style="color:#FFCB6B;">m</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">n</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">o</span></span>
<span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">q</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">r</span></span>
<span class="line"><span style="color:#FFCB6B;">s</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">t</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">u</span></span>
<span class="line"><span style="color:#FFCB6B;">v</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">w</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">x</span></span>
<span class="line"><span style="color:#FFCB6B;">y</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">z</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="使用-d-分割输入" tabindex="-1">使用 -d 分割输入 <a class="header-anchor" href="#使用-d-分割输入" aria-hidden="true">#</a></h4><p><strong>-d 选项</strong> 可以自定义一个定界符：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nameXnameXnameXname</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">xargs</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-dX</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">name</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">name</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">name</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">name</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>结合 <strong>-n 选项</strong> 使用：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nameXnameXnameXname</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">xargs</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-dX</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-n2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">name</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">name</span></span>
<span class="line"><span style="color:#FFCB6B;">name</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">name</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="读取-stdin" tabindex="-1">读取 stdin <a class="header-anchor" href="#读取-stdin" aria-hidden="true">#</a></h4><p><strong>读取 stdin，将格式化后的参数传递给命令</strong></p><p>假设一个命令为 <a href="http://sk.sh" target="_blank" rel="noreferrer">sk.sh</a> 和一个保存参数的文件 arg.txt：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#545454;font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="color:#545454;font-style:italic;">#sk.sh 命令内容，打印出所有参数。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#EEFFFF;"> $*</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>arg.txt 文件内容：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">arg.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">aaa</span></span>
<span class="line"><span style="color:#FFCB6B;">bbb</span></span>
<span class="line"><span style="color:#FFCB6B;">ccc</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="结合-i-选项" tabindex="-1">结合 -I 选项 <a class="header-anchor" href="#结合-i-选项" aria-hidden="true">#</a></h4><p>xargs 的一个 <strong>选项 -I</strong> ，使用 -I 指定一个替换字符串{}，这个字符串在 xargs 扩展时会被替换掉，当 -I 与 xargs 结合使用，每一个参数命令都会被执行一次：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">arg.txt</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">xargs</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-I</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">{}</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">./sk.sh</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">{}</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-l</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">-p</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">aaa</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-l</span></span>
<span class="line"><span style="color:#FFCB6B;">-p</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">bbb</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-l</span></span>
<span class="line"><span style="color:#FFCB6B;">-p</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">ccc</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-l</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>复制所有图片文件到 /data/images 目录下：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">ls</span><span style="color:#EEFFFF;"> </span><span style="color:#EEFFFF;">*</span><span style="color:#C3E88D;">.jpg</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">xargs</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-n1</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-I</span><span style="color:#89DDFF;">{}</span><span style="color:#EEFFFF;"> cp </span><span style="color:#89DDFF;">{}</span><span style="color:#EEFFFF;"> /data/images</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="结合-find-命令使用" tabindex="-1">结合 find 命令使用 <a class="header-anchor" href="#结合-find-命令使用" aria-hidden="true">#</a></h4><p><strong>xargs 结合 find 使用</strong></p><p>用 rm 删除太多的文件时候，可能得到一个错误信息：<code>/bin/rm Argument list too long</code>. 用 <code>xargs</code> 去避免这个问题：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">find</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">.</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-type</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">f</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-name</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*.log</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-print0</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">xargs</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-0</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-f</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>xargs -0 将 <code>\\0</code> 作为定界符。</p><p>统计一个源代码目录中所有 php 文件的行数：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">find</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">.</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-type</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">f</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-name</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*.php</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-print0</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">xargs</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-0</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">wc</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-l</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查找所有的 jpg 文件，并且压缩它们：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">find</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">.</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-type</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">f</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-name</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*.jpg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-print</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">xargs</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">tar</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-czvf</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">images.tar.gz</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="打印出执行的命令" tabindex="-1">打印出执行的命令 <a class="header-anchor" href="#打印出执行的命令" aria-hidden="true">#</a></h4><p>结合 <code>-t</code> 选项可以打印出 <code>xargs</code> 执行的命令</p><pre><code>ls | xargs -t -I{} echo {}
</code></pre><p>会输出当前目录下的文件列表和执行的 echo 命令</p><h4 id="使用-p-选项确认执行的命令" tabindex="-1">使用 -p 选项确认执行的命令 <a class="header-anchor" href="#使用-p-选项确认执行的命令" aria-hidden="true">#</a></h4><p><code>-p</code> 选项会在执行每一个命令时弹出确认，当你需要非常准确的确认每一次操作时可以使用 <code>-p</code> 参数，比如，查找当前目录下 <code>.log</code> 文件，每一次删除都需要确认：</p><pre><code>find . -maxdepth 1 -name &quot;*.log&quot; | xargs -p -I{} rm {}
</code></pre><h4 id="执行多个命令" tabindex="-1">执行多个命令 <a class="header-anchor" href="#执行多个命令" aria-hidden="true">#</a></h4><p>使用 <code>-I</code> 选项可以让 <code>xargs</code> 执行多个命令</p><pre><code>cat foo.txt
one
two
three

cat foo.txt | xargs -I % sh -c &#39;echo %; mkdir %&#39;
one
two
three

ls
one two three
</code></pre><h4 id="其他应用" tabindex="-1">其他应用 <a class="header-anchor" href="#其他应用" aria-hidden="true">#</a></h4><p><strong>xargs 其他应用</strong></p><p>假如你有一个文件包含了很多你希望下载的 URL，你能够使用 xargs 下载所有链接：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">url-list.txt</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">xargs</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">wget</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-c</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="子-shell-subshells" tabindex="-1">子 Shell（Subshells） <a class="header-anchor" href="#子-shell-subshells" aria-hidden="true">#</a></h3><p>运行一个 shell 脚本时会启动另一个命令解释器.，就好像你的命令是在命令行提示下被解释的一样，类似于批处理文件里的一系列命令。每个 shell 脚本有效地运行在父 shell(parent shell) 的一个子进程里。这个父 shell 是指在一个控制终端或在一个 xterm 窗口中给你命令指示符的进程。</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">cmd1</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">cmd2</span><span style="color:#89DDFF;">;</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">cmd3</span><span style="color:#89DDFF;">;</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">cmd4</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">cmd5</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果 cmd2 是 cd /，那么就会改变子 Shell 的工作目录，这种改变只是局限于子 shell 内部，cmd5 则完全不知道工作目录发生的变化。子 shell 是嵌在圆括号 () 内部的命令序列，子 Shell 内部定义的变量为局部变量。</p><p>子 shell 可用于为一组命令设定临时的环境变量：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">COMMAND1</span></span>
<span class="line"><span style="color:#FFCB6B;">COMMAND2</span></span>
<span class="line"><span style="color:#FFCB6B;">COMMAND3</span></span>
<span class="line"><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#EEFFFF;">  IFS</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">:</span></span>
<span class="line"><span style="color:#EEFFFF;">  PATH</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">/bin</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#82AAFF;">unset</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">TERMINFO</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#82AAFF;">set</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-C</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#82AAFF;">shift</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#FFCB6B;">COMMAND4</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#FFCB6B;">COMMAND5</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#82AAFF;">exit</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">3</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;"># 只是从子 shell 退出。</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#545454;font-style:italic;"># 父 shell 不受影响，变量值没有更改。</span></span>
<span class="line"><span style="color:#FFCB6B;">COMMAND6</span></span>
<span class="line"><span style="color:#FFCB6B;">COMMAND7</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="reference" tabindex="-1">reference <a class="header-anchor" href="#reference" aria-hidden="true">#</a></h2><ul><li><a href="https://shapeshed.com/unix-xargs/" target="_blank" rel="noreferrer">https://shapeshed.com/unix-xargs/</a></li></ul>`,60),o=[e];function r(F,c,t,E,i,y){return n(),a("div",null,o)}const C=s(p,[["render",r]]);export{b as __pageData,C as default};
