import{_ as s,c as a,o as e,a as n}from"./app.82736834.js";const m=JSON.parse('{"title":"more","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/more.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/more.md"},p=n(`<h1 id="more" tabindex="-1">more <a class="header-anchor" href="#more" aria-hidden="true">#</a></h1><p>显示文件内容，每次显示一屏</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>more命令</strong> 是一个基于vi编辑器文本过滤器，它以全屏幕的方式按页显示文本文件的内容，支持vi中的关键字定位操作。more名单中内置了若干快捷键，常用的有H（获得帮助信息），Enter（向下翻滚一行），空格（向下滚动一屏），Q（退出命令）。</p><p>该命令一次显示一屏文本，满屏后停下来，并且在屏幕的底部出现一个提示信息，给出至今己显示的该文件的百分比：--More--（XX%）可以用下列不同的方法对提示做出回答：</p><ul><li>按 <code>Space</code> 键：显示文本的下一屏内容。</li><li>按 <code>Enter</code> 键：只显示文本的下一行内容。</li><li>按斜线符<code>|</code>：接着输入一个模式，可以在文本中寻找下一个相匹配的模式。</li><li>按H键：显示帮助屏，该屏上有相关的帮助信息。</li><li>按B键：显示上一屏内容。</li><li>按Q键：退出more命令。</li></ul><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">more(语法</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">参数</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-&lt;数字&gt;：指定每屏显示的行数；</span></span>
<span class="line"><span style="color:#FFCB6B;">-d：显示“[press</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">space</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">to</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">continue,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">q</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">to</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">quit.]”和“[Press</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">h</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">for</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">instructions]”；</span></span>
<span class="line"><span style="color:#FFCB6B;">-c：不进行滚屏操作。每次刷新这个屏幕；</span></span>
<span class="line"><span style="color:#FFCB6B;">-s：将多个空行压缩成一行显示；</span></span>
<span class="line"><span style="color:#FFCB6B;">-u：禁止下划线；</span></span>
<span class="line"><span style="color:#FFCB6B;">+&lt;数字&gt;：从指定数字的行开始显示。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h3><p>文件：指定分页显示内容的文件。</p><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><p>显示文件file的内容，但在显示之前先清屏，并且在屏幕的最下方显示完成的百分比。</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">more</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-dc</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">file</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>显示文件file的内容，每10行显示一次，而且在显示之前先清屏。</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">more</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-10</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">file</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,17),r=[p];function o(t,c,i,d,F,h){return e(),a("div",null,r)}const y=s(l,[["render",o]]);export{m as __pageData,y as default};
