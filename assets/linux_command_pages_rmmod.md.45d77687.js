import{_ as s,c as a,o as n,a as e}from"./app.82736834.js";const u=JSON.parse('{"title":"rmmod","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/rmmod.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/rmmod.md"},r=e(`<h1 id="rmmod" tabindex="-1">rmmod <a class="header-anchor" href="#rmmod" aria-hidden="true">#</a></h1><p>从运行的内核中移除指定的内核模块</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>rmmod命令</strong> 用于从当前运行的内核中移除指定的内核模块。执行rmmod指令，可删除不需要的模块。Linux操作系统的核心具有模块化的特性，应此在编译核心时，务须把全部的功能都放如核心。你可以将这些功能编译成一个个单独的模块，待有需要时再分别载入它们。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">rmmod(选项</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">参数</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-v：显示指令执行的详细信息；</span></span>
<span class="line"><span style="color:#FFCB6B;">-f：强制移除模块，使用此选项比较危险；</span></span>
<span class="line"><span style="color:#FFCB6B;">-w：等待着，直到模块能够被除时在移除模块；</span></span>
<span class="line"><span style="color:#FFCB6B;">-s：向系统日志（syslog）发送错误信息。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h3><p>模块名：要移除的模块名称。</p><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><p>用rmmod命令主要用于卸载正在使用的Linux内核模块，与<code>modprobe -r</code>命令相似，如下所示：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost boot</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"># lsmod </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">raid1</span></span>
<span class="line"><span style="color:#FFCB6B;">raid1</span><span style="color:#EEFFFF;">                  </span><span style="color:#F78C6C;">25153</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost boot</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"># rmmod raid1</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost boot</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"># lsmod </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">raid1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,13),p=[r];function o(t,c,i,d,F,h){return n(),a("div",null,p)}const b=s(l,[["render",o]]);export{u as __pageData,b as default};
