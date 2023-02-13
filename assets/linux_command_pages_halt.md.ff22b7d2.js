import{_ as a,c as s,o as n,a as e}from"./app.82736834.js";const m=JSON.parse('{"title":"halt","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/halt.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/halt.md"},t=e(`<h1 id="halt" tabindex="-1">halt <a class="header-anchor" href="#halt" aria-hidden="true">#</a></h1><p>关闭正在运行的Linux操作系统</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>halt命令</strong> 用来关闭正在运行的Linux操作系统。halt命令会先检测系统的runlevel，若runlevel为0或6，则关闭系统，否则即调用shutdown来关闭系统。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">halt(选项</span><span style="color:#EEFFFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-d：不要在wtmp中记录；</span></span>
<span class="line"><span style="color:#FFCB6B;">-f：不论目前的runlevel为何，不调用shutdown即强制关闭系统；</span></span>
<span class="line"><span style="color:#FFCB6B;">-i：在halt之前，关闭全部的网络界面；</span></span>
<span class="line"><span style="color:#FFCB6B;">-n：halt前，不用先执行sync；</span></span>
<span class="line"><span style="color:#FFCB6B;">-p：halt之后，执行poweroff；</span></span>
<span class="line"><span style="color:#FFCB6B;">-w：仅在wtmp中记录，而不实际结束系统。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">halt</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#EEFFFF;">     </span><span style="color:#545454;font-style:italic;"># 关闭系统后关闭电源。</span></span>
<span class="line"><span style="color:#FFCB6B;">halt</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#EEFFFF;">     </span><span style="color:#545454;font-style:italic;"># 关闭系统，但不留下纪录。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,10),p=[t];function r(i,c,o,d,h,u){return n(),s("div",null,p)}const F=a(l,[["render",r]]);export{m as __pageData,F as default};
