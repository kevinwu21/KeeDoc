import{_ as s,c as a,o as n,a as l}from"./app.82736834.js";const b=JSON.parse('{"title":"cmp","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/cmp.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/cmp.md"},p=l(`<h1 id="cmp" tabindex="-1">cmp <a class="header-anchor" href="#cmp" aria-hidden="true">#</a></h1><p>比较两个文件是否有差异</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>cmp命令</strong> 用来比较两个文件是否有差异。当相互比较的两个文件完全一样时，则该指令不会显示任何信息。若发现有差异，预设会标示出第一个不通之处的字符和列数编号。若不指定任何文件名称或是所给予的文件名为“-”，则cmp指令会从标准输入设备读取数据。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">cmp(选项</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">参数</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-c或--</span><span style="color:#82AAFF;">print</span><span style="color:#FFCB6B;">-chars：除了标明差异处的十进制字码之外，一并显示该字符所对应字符；</span></span>
<span class="line"><span style="color:#FFCB6B;">-i&lt;字符数目&gt;或--ignore-initial=&lt;字符数目&gt;：指定一个数目；</span></span>
<span class="line"><span style="color:#FFCB6B;">-l或——verbose：标示出所有不一样的地方；</span></span>
<span class="line"><span style="color:#FFCB6B;">-s或--quiet或——silent：不显示错误信息；</span></span>
<span class="line"><span style="color:#FFCB6B;">-v或——version：显示版本信息；</span></span>
<span class="line"><span style="color:#FFCB6B;">--help：在线帮助。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h3><p>目录：比较两个文件的差异。</p><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><p>使用cmp命令比较文件&quot;testfile&quot;和文件&quot;testfile1&quot;两个文件，则输入下面的命令：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">cmp</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">testfile</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">testfile1</span><span style="color:#EEFFFF;">            </span><span style="color:#545454;font-style:italic;">#比较两个指定的文件</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在上述指令执行之前，使用cat命令查看两个指定的文件内容，如下所示：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">testfile</span><span style="color:#EEFFFF;">                    </span><span style="color:#545454;font-style:italic;">#查看文件内容  </span></span>
<span class="line"><span style="color:#FFCB6B;">Absncn</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">50</span><span style="color:#EEFFFF;">                       </span><span style="color:#545454;font-style:italic;">#显示文件“testfile”  </span></span>
<span class="line"><span style="color:#FFCB6B;">Asldssja</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">60</span><span style="color:#EEFFFF;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">Jslkadjls</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">85</span><span style="color:#EEFFFF;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">testfile1</span><span style="color:#EEFFFF;">                   </span><span style="color:#545454;font-style:italic;">#查看文件内容  </span></span>
<span class="line"><span style="color:#FFCB6B;">Absncn</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">50</span><span style="color:#EEFFFF;">                       </span><span style="color:#545454;font-style:italic;">#显示文件“testfile1”  </span></span>
<span class="line"><span style="color:#FFCB6B;">AsldssjE</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">62</span><span style="color:#EEFFFF;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">Jslkadjls</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">85</span><span style="color:#EEFFFF;">  </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>然后，再执行cmp命令，并返回比较结果，具体如下所示：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">cmp</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">testfile</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">testfile1</span><span style="color:#EEFFFF;">       </span><span style="color:#545454;font-style:italic;">#比较两个文件  </span></span>
<span class="line"><span style="color:#FFCB6B;">testfile</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">testfile1</span><span style="color:#EEFFFF;">           </span><span style="color:#545454;font-style:italic;">#有差异：第8字节，第2行  </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>注意：在比较结果中，只能够显示第一比较结果。</p>`,18),t=[p];function o(r,c,i,F,d,y){return n(),a("div",null,t)}const u=s(e,[["render",o]]);export{b as __pageData,u as default};
