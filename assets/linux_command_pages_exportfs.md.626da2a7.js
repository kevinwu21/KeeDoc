import{_ as s,c as a,o as n,a as p}from"./app.82736834.js";const C=JSON.parse('{"title":"exportfs","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[]}],"relativePath":"linux/command/pages/exportfs.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/exportfs.md"},e=p(`<h1 id="exportfs" tabindex="-1">exportfs <a class="header-anchor" href="#exportfs" aria-hidden="true">#</a></h1><p>管理NFS共享文件系统列表</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p>exportfs 命令用来管理当前NFS共享的文件系统列表。</p><p>参数：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-a</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">打开或取消所有目录共享。</span></span>
<span class="line"><span style="color:#FFCB6B;">-o</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">options,...指定一列共享选项，与</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">exports</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">中讲到的类似。</span></span>
<span class="line"><span style="color:#FFCB6B;">-i</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">忽略</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/etc/exports</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">文件，从而只使用默认的和命令行指定的选项。</span></span>
<span class="line"><span style="color:#FFCB6B;">-r</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">重新共享所有目录。它使</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/var/lib/nfs/xtab</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">和</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/etc/exports</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">同步。</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">它将</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/etc/exports</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">中已删除的条目从</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/var/lib/nfs/xtab</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">中删除，将内核共享表中任何不再有效的条目移除。</span></span>
<span class="line"><span style="color:#FFCB6B;">-u</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">取消一个或多个目录的共享。</span></span>
<span class="line"><span style="color:#FFCB6B;">-f</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">在“新”模式下，刷新内核共享表之外的任何东西。</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">任何活动的客户程序将在它们的下次请求中得到</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">mountd添加的新的共享条目。</span></span>
<span class="line"><span style="color:#FFCB6B;">-v</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">输出详细信息。当共享或者取消共享时，显示在做什么。</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">显示当前共享列表的时候，同时显示共享的选项。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,6),o=[e];function r(t,F,c,E,y,i){return n(),a("div",null,o)}const D=s(l,[["render",r]]);export{C as __pageData,D as default};
