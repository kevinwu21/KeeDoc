import{_ as s,c as a,o as e,a as n}from"./app.82736834.js";const y=JSON.parse('{"title":"nice","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/nice.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/nice.md"},p=n(`<h1 id="nice" tabindex="-1">nice <a class="header-anchor" href="#nice" aria-hidden="true">#</a></h1><p>调整程序执行的优先权等级</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>nice命令</strong> 用于调整进程调度优先级启动其他的程序。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">nice</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">选项</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">命令 </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">参数</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;">...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-n：指定nice值（整数，-20（最低）~19（最高））。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h3><p>指令及选项：需要运行的指令及其他选项。</p><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><p>新建一个进程并设置优先级，将当前目录下的documents目录打包，但不希望tar占用太多CPU：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">nice</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-19</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">tar</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">zcf</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">pack.tar.gz</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">documents</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>方法非常简单，即在原命令前加上<code>nice -19</code>。很多人可能有疑问了，最低优先级不是19么？那是因为这个“-19”中的“-”仅表示参数前缀；所以，如果希望将当前目录下的documents目录打包，并且赋予tar进程最高的优先级就应该加上<code>nice --20</code>：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">nice</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">--20</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">tar</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">zcf</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">pack.tar.gz</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">documents</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,15),r=[p];function c(o,t,i,d,F,h){return e(),a("div",null,r)}const E=s(l,[["render",c]]);export{y as __pageData,E as default};
