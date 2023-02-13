import{_ as s,c as a,o as n,a as l}from"./app.82736834.js";const E=JSON.parse('{"title":"compress","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/compress.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/compress.md"},p=l(`<h1 id="compress" tabindex="-1">compress <a class="header-anchor" href="#compress" aria-hidden="true">#</a></h1><p>使用Lempress-Ziv编码压缩数据文件</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>compress命令</strong> 使用“Lempress-Ziv”编码压缩数据文件。compress是个历史悠久的压缩程序，文件经它压缩后，其名称后面会多出&quot;.Z&quot;的扩展名。当要解压缩时，可执行uncompress指令。事实上uncompress是指向compress的符号连接，因此不论是压缩或解压缩，都可通过compress指令单独完成。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">compress(选项</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">参数</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-f：不提示用户，强制覆盖掉目标文件；</span></span>
<span class="line"><span style="color:#FFCB6B;">-c：将结果送到标准输出，无文件被改变；</span></span>
<span class="line"><span style="color:#FFCB6B;">-r：递归的操作方式；</span></span>
<span class="line"><span style="color:#FFCB6B;">-b&lt;压缩效率&gt;：压缩效率是一个介于9~16的数值，预设值为&quot;16&quot;，指定愈大的数值，压缩效率就愈高；</span></span>
<span class="line"><span style="color:#FFCB6B;">-d：对文件进行解压缩而非压缩；</span></span>
<span class="line"><span style="color:#FFCB6B;">-v：显示指令执行过程；</span></span>
<span class="line"><span style="color:#FFCB6B;">-V：显示指令版本及程序预设值。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h3><p>文件：指定要压缩的文件列表。</p><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><p>将<code>/etc/man.config</code>复到<code>/tmp</code> ，并加以压缩</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;"># cd /tmp</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost tmp</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"># cp /etc/man.config .</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost tmp</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"># compress man.config</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost tmp</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"># ls -l</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-rw-r--r--</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">1</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">root</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">root</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">2605</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Jul</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">27</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">11</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">43</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">man.config.Z</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>将刚刚的压缩档解开</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost tmp</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"># compress -d man.config.Z</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>将 man.config 压缩成另外一个文件来备份</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost tmp</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"># compress -c man.config </span><span style="color:#89DDFF;">&gt;</span><span style="color:#EEFFFF;"> man.config.back.Z</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost tmp</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"># ll man.config</span><span style="color:#89DDFF;">*</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-rw-r--r--</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">1</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">root</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">root</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">4506</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Jul</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">27</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">11</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">43</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">man.config</span></span>
<span class="line"><span style="color:#FFCB6B;">-rw-r--r--</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">1</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">root</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">root</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">2605</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Jul</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">27</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">11</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">46</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">man.config.back.Z</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这个<code>-c</code>的选项比较有趣！会将压缩过程的资料输出到屏幕上，而不是写入成为file.Z文件。所以，我们可以透过资料流重导向的方法将资料输出成为另一个档名。</p>`,20),o=[p];function r(c,t,F,i,d,y){return n(),a("div",null,o)}const h=s(e,[["render",r]]);export{E as __pageData,h as default};
