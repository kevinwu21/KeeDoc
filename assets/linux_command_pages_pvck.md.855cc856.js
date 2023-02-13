import{_ as s,c as a,o as n,a as l}from"./app.82736834.js";const h=JSON.parse('{"title":"pvck","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/pvck.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/pvck.md"},p=l(`<h1 id="pvck" tabindex="-1">pvck <a class="header-anchor" href="#pvck" aria-hidden="true">#</a></h1><p>检测物理卷的LVM元数据的一致性</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>pvck命令</strong> 用来检测物理卷的LVM元数据的一致性。默认情况下，物理卷中的前4个扇区保存着LVM卷标，可以使用<code>--labelsector</code>选项指定其他的位置（例如：数据恢复时）。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">pvck(选项</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">参数</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-d：调试模式；</span></span>
<span class="line"><span style="color:#FFCB6B;">-v：详细信息模式；</span></span>
<span class="line"><span style="color:#FFCB6B;">--labelsector：指定LVE卷标所在扇区。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h3><p>物理卷：指定要检查的物理卷对应的设备文件。</p><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><p>使用pvck命令检查物理卷<code>/dev/sdb1</code>。在命令行中输入下面的命令：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">pvck</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/dev/sdb1</span><span style="color:#EEFFFF;">    </span><span style="color:#545454;font-style:italic;">#检查物理卷元数据</span></span>
<span class="line"><span style="color:#FFCB6B;">Scanning</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/dev/sdb1</span><span style="color:#EEFFFF;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">Found</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">label</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">on</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/dev/sdb1,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">sector</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;">,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">type=LVM2</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">001</span><span style="color:#EEFFFF;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">Found</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">text</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">metadata</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">area:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">offset=</span><span style="color:#F78C6C;">4096</span><span style="color:#C3E88D;">,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">size=</span><span style="color:#F78C6C;">192512</span><span style="color:#EEFFFF;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">Found</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">LVM2</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">metadata</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">record</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">at</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">offset=</span><span style="color:#F78C6C;">125952</span><span style="color:#C3E88D;">,</span><span style="color:#EEFFFF;">  </span></span>
<span class="line"><span style="color:#EEFFFF;">size</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">70656</span><span style="color:#C3E88D;">,</span><span style="color:#EEFFFF;"> offset2</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#EEFFFF;"> size2</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,13),o=[p];function r(c,t,F,i,d,y){return n(),a("div",null,o)}const C=s(e,[["render",r]]);export{h as __pageData,C as default};
