import{_ as s,c as a,o as n,a as l}from"./app.82736834.js";const h=JSON.parse('{"title":"slocate","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/slocate.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/slocate.md"},p=l(`<h1 id="slocate" tabindex="-1">slocate <a class="header-anchor" href="#slocate" aria-hidden="true">#</a></h1><p>命令查找文件或目录</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>slocate命令</strong> 是一个命令查找文件或目录。slocate本身具有一个数据库，里面存放了系统中文件与目录的相关信息。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">slocate</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-u</span><span style="color:#89DDFF;">][</span><span style="color:#EEFFFF;">--help</span><span style="color:#89DDFF;">][</span><span style="color:#EEFFFF;">--version</span><span style="color:#89DDFF;">][</span><span style="color:#EEFFFF;">-d </span><span style="color:#89DDFF;">&lt;</span><span style="color:#EEFFFF;">目录</span><span style="color:#89DDFF;">&gt;][</span><span style="color:#EEFFFF;">查找的文件</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-d&lt;目录&gt;或--database=&lt;目录&gt;</span><span style="color:#EEFFFF;"> 　</span><span style="color:#C3E88D;">指定数据库所在的目录。</span></span>
<span class="line"><span style="color:#FFCB6B;">-u</span><span style="color:#EEFFFF;"> 　</span><span style="color:#C3E88D;">更新slocate数据库。</span></span>
<span class="line"><span style="color:#FFCB6B;">--help</span><span style="color:#EEFFFF;"> 　</span><span style="color:#C3E88D;">显示帮助。</span></span>
<span class="line"><span style="color:#FFCB6B;">--version</span><span style="color:#EEFFFF;"> 　</span><span style="color:#C3E88D;">显示版本信息。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><p>使用指令&quot;slocate&quot;显示文件名中含有关键字&quot;fdisk&quot;的文件路径信息，输入如下命令：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">slocate</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">fdisk</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;">#显示文件名中含有fdisk关键字的文件的路径信息 </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>执行以上命令后，指令执行的输出信息如下：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">slocate</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">fdisk</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;">#显示文件名中含有fdisk 关键字的文件的路径信息  </span></span>
<span class="line"><span style="color:#FFCB6B;">/root/cfdisk</span><span style="color:#EEFFFF;">        </span><span style="color:#545454;font-style:italic;">#搜索到的文件路径列表  </span></span>
<span class="line"><span style="color:#FFCB6B;">/root/fdisk</span><span style="color:#EEFFFF;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">/root/sfdisk</span><span style="color:#EEFFFF;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">/usr/include/grub/ieee1275/ofdisk.h</span><span style="color:#EEFFFF;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">/usr/share/doc/util-Linux/README.cfdisk</span><span style="color:#EEFFFF;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">/usr/share/doc/util-Linux/README.fdisk.gz</span><span style="color:#EEFFFF;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">/usr/share/doc/util-Linux/examples/sfdisk.examples.gz</span><span style="color:#EEFFFF;">  </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,13),o=[p];function r(t,c,i,F,d,u){return n(),a("div",null,o)}const E=s(e,[["render",r]]);export{h as __pageData,E as default};
