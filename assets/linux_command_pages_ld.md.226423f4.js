import{_ as s,c as a,o as l,a as e}from"./app.82736834.js";const y=JSON.parse('{"title":"ld","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/ld.md","lastUpdated":1666509709000}'),n={name:"linux/command/pages/ld.md"},o=e(`<h1 id="ld" tabindex="-1">ld <a class="header-anchor" href="#ld" aria-hidden="true">#</a></h1><p>将目标文件连接为可执行程序</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>ld命令</strong> 是GNU的连接器，将目标文件连接为可执行程序。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">ld(选项</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">参数</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">ld</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">options</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">objfile</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">...</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-o：指定输出文件名；</span></span>
<span class="line"><span style="color:#FFCB6B;">-e：指定程序的入口符号。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h3><p>目标文件：指定需要连接的目标文件。</p><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><p>这告诉ld通过将文件 <code>/lib/crt0.o</code> 与 <code>hello.o</code> 和库 <code>libc.a</code> 链接起来，生成一个名为 <code>output</code> 的文件，该文件将来自标准搜索目录。</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">ld</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">outpu</span><span style="color:#EEFFFF;">t</span><span style="color:#89DDFF;">&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/lib/crt0.o</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">hello.o</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-lc</span></span>
<span class="line"><span style="color:#FFCB6B;">ld</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">output</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/lib/crt0.o</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">hello.o</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-lc</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,13),p=[o];function r(t,c,i,d,F,h){return l(),a("div",null,p)}const E=s(n,[["render",r]]);export{y as __pageData,E as default};
