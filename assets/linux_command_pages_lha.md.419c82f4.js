import{_ as s,c as a,o as n,a as l}from"./app.82736834.js";const h=JSON.parse('{"title":"lha","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/lha.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/lha.md"},p=l(`<h1 id="lha" tabindex="-1">lha <a class="header-anchor" href="#lha" aria-hidden="true">#</a></h1><p>压缩或解压缩lzh格式文件</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>lha命令</strong> 是从lharc演变而来的压缩程序，文件经它压缩后，会另外产生具有<code>.lzh</code>扩展名的压缩文件。</p><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-a或a：压缩文件，并加入到压缩文件内。</span></span>
<span class="line"><span style="color:#FFCB6B;">-a&lt;0/1/2&gt;/u&lt;/0/1/2&gt;</span><span style="color:#EEFFFF;">   </span><span style="color:#C3E88D;">压缩文件时，采用不同的文件头。</span></span>
<span class="line"><span style="color:#FFCB6B;">-c或c：压缩文件，重新建构新的压缩文件后，再将其加入。</span></span>
<span class="line"><span style="color:#FFCB6B;">-d或d：从压缩文件内删除指定的文件。</span></span>
<span class="line"><span style="color:#FFCB6B;">-&lt;a/c/u&gt;d或&lt;a/c/u&gt;d：压缩文件，然后将其加入，重新建构，更新压缩文件或，删除原始文件，也就是把文件移到压缩文件中。</span></span>
<span class="line"><span style="color:#FFCB6B;">-e或e：解开压缩文件。</span></span>
<span class="line"><span style="color:#FFCB6B;">-f或f：强制执行lha命令，在解压时会直接覆盖已有的文件而不加以询问。</span></span>
<span class="line"><span style="color:#FFCB6B;">-g或g：使用通用的压缩格式，便于解决兼容性的问题。</span></span>
<span class="line"><span style="color:#FFCB6B;">-&lt;e/x&gt;i或&lt;e/x&gt;i：解开压缩文件时，忽略保存在压缩文件内的文件路径，直接将其解压后存放在现行目录下或是指定的目录中。</span></span>
<span class="line"><span style="color:#FFCB6B;">-l或l：列出压缩文件的相关信息。</span></span>
<span class="line"><span style="color:#FFCB6B;">-m或m：此选项的效果和同时指定&quot;-ad&quot;选项相同。</span></span>
<span class="line"><span style="color:#FFCB6B;">-n或n：不执行指令，仅列出实际执行会进行的动作。</span></span>
<span class="line"><span style="color:#FFCB6B;">-&lt;a/u&gt;o或&lt;a/u&gt;o：采用lharc兼容格式，将压缩后的文件加入，更新压缩文件。</span></span>
<span class="line"><span style="color:#FFCB6B;">-p或p：从压缩文件内输出到标准输出设备。</span></span>
<span class="line"><span style="color:#FFCB6B;">-q或q：不显示指令执行过程。</span></span>
<span class="line"><span style="color:#FFCB6B;">-t或t：检查备份文件内的每个文件是否正确无误。</span></span>
<span class="line"><span style="color:#FFCB6B;">-u或u：更换较新的文件到压缩文件内。</span></span>
<span class="line"><span style="color:#FFCB6B;">-u&lt;/0/1/2&gt;或u&lt;/0/1/2&gt;：在文件压缩时采用不同的文件头，然后更新到压缩文件内。</span></span>
<span class="line"><span style="color:#FFCB6B;">-v或v：详细列出压缩文件的相关信息。</span></span>
<span class="line"><span style="color:#FFCB6B;">-&lt;e/x&gt;w=&lt;目的目录&gt;或&lt;e/x&gt;w=&lt;目的目录&gt;：指定解压缩的目录。</span></span>
<span class="line"><span style="color:#FFCB6B;">-x或x：解开压缩文件。</span></span>
<span class="line"><span style="color:#FFCB6B;">-&lt;a/u&gt;z或&lt;a/u&gt;z：不压缩文件，直接把它加入，更新压缩文件。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">lha</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-a</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">abc.lhz</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">a.b</span><span style="color:#EEFFFF;">         </span><span style="color:#545454;font-style:italic;">#压缩a.b文件，压缩后生成 abc.lhz 文件</span></span>
<span class="line"><span style="color:#FFCB6B;">lha</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-a</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">abc2</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/home/hnlinux</span><span style="color:#EEFFFF;">  </span><span style="color:#545454;font-style:italic;">#压缩目录</span></span>
<span class="line"><span style="color:#FFCB6B;">lha</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-xiw=agis</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">abc</span><span style="color:#EEFFFF;">          </span><span style="color:#545454;font-style:italic;">#解压文件abc，到当前目录</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,8),r=[p];function c(t,o,i,F,b,d){return n(),a("div",null,r)}const y=s(e,[["render",c]]);export{h as __pageData,y as default};
