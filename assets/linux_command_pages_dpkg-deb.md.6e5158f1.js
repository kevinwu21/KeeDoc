import{_ as s,c as a,o as n,a as e}from"./app.82736834.js";const h=JSON.parse('{"title":"dpkg-deb","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/dpkg-deb.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/dpkg-deb.md"},p=e(`<h1 id="dpkg-deb" tabindex="-1">dpkg-deb <a class="header-anchor" href="#dpkg-deb" aria-hidden="true">#</a></h1><p>Debian Linux下的软件包管理工具</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>dpkg-deb命令</strong> 是Debian Linux下的软件包管理工具，它可以对软件包执行打包和解包操作以及提供软件包信息。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">dpkg-deb(选项</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">参数</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-c：显示软件包中的文件列表；</span></span>
<span class="line"><span style="color:#FFCB6B;">-e：将主控信息解压；</span></span>
<span class="line"><span style="color:#FFCB6B;">-f：把字段内容打印到标准输出；</span></span>
<span class="line"><span style="color:#FFCB6B;">-x：将软件包中的文件释放到指定目录下；</span></span>
<span class="line"><span style="color:#FFCB6B;">-X：将软件包中的文件释放到指定目录下，并显示释放文件的详细过程；</span></span>
<span class="line"><span style="color:#FFCB6B;">-w：显示软件包的信息；</span></span>
<span class="line"><span style="color:#FFCB6B;">-l：显示软件包的详细信息；</span></span>
<span class="line"><span style="color:#FFCB6B;">-R：提取控制信息和存档的清单文件；</span></span>
<span class="line"><span style="color:#FFCB6B;">-b：创建debian软件包。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h3><p>文件：指定要操作的“.deb”软件包的全名或软件名。</p><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><p>解压程序文件：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">dpkg-deb</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-x</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">drcom-pum_1.</span><span style="color:#F78C6C;">0</span><span style="color:#C3E88D;">-0ubuntu1~ppa1~jaunty1_i386.deb</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">drcom</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>解压控制文件：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">dpkg-deb</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">drcom-pum_1.</span><span style="color:#F78C6C;">0</span><span style="color:#C3E88D;">-0ubuntu1~ppa1~jaunty1_i386.deb</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">drcom/DEBIAN</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>打包生成deb文件：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">dpkg-deb</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">drcom</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">drcom_1.4.8.2_i386.deb</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查询deb包中的文件内容：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">dpkg-deb</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">demo.deb</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,19),r=[p];function o(i,c,t,d,b,F){return n(),a("div",null,r)}const m=s(l,[["render",o]]);export{h as __pageData,m as default};
