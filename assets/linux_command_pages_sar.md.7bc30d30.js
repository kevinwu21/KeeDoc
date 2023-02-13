import{_ as s,c as n,o as a,a as l}from"./app.82736834.js";const d=JSON.parse('{"title":"sar","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/sar.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/sar.md"},e=l(`<h1 id="sar" tabindex="-1">sar <a class="header-anchor" href="#sar" aria-hidden="true">#</a></h1><p>系统运行状态统计工具</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>sar命令</strong> 是Linux下系统运行状态统计工具，它将指定的操作系统状态计数器显示到标准输出设备。sar工具将对系统当前的状态进行取样，然后通过计算数据和比例来表达系统的当前运行状态。它的特点是可以连续对系统取样，获得大量的取样数据。取样数据和分析的结果都可以存入文件，使用它时消耗的系统资源很小。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sar(选项</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">参数</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-A：显示所有的报告信息；</span></span>
<span class="line"><span style="color:#FFCB6B;">-b：显示I/O速率；</span></span>
<span class="line"><span style="color:#FFCB6B;">-B：显示换页状态；</span></span>
<span class="line"><span style="color:#FFCB6B;">-c：显示进程创建活动；</span></span>
<span class="line"><span style="color:#FFCB6B;">-d：显示每个块设备的状态；</span></span>
<span class="line"><span style="color:#FFCB6B;">-e：设置显示报告的结束时间；</span></span>
<span class="line"><span style="color:#FFCB6B;">-f：从指定文件提取报告；</span></span>
<span class="line"><span style="color:#FFCB6B;">-i：设状态信息刷新的间隔时间；</span></span>
<span class="line"><span style="color:#FFCB6B;">-n:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">报告网络统计信息。</span></span>
<span class="line"><span style="color:#FFCB6B;">-P：报告每个CPU的状态；</span></span>
<span class="line"><span style="color:#FFCB6B;">-R：显示内存状态；</span></span>
<span class="line"><span style="color:#FFCB6B;">-u：显示CPU利用率；</span></span>
<span class="line"><span style="color:#FFCB6B;">-v：显示索引节点，文件和其他内核表的状态；</span></span>
<span class="line"><span style="color:#FFCB6B;">-w：显示交换分区状态；</span></span>
<span class="line"><span style="color:#FFCB6B;">-x：显示给定进程的状态。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h3><ul><li>间隔时间：每次报告的间隔时间（秒）；</li><li>次数：显示报告的次数。</li></ul><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><p><strong>察看内存和交换空间的使用率：</strong></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sar</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-r</span></span>
<span class="line"><span style="color:#FFCB6B;">Linux</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">2.4.20-</span><span style="color:#F78C6C;">8</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">www.jsdig.com</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">20130503</span><span style="color:#EEFFFF;">  </span></span>
<span class="line"><span style="color:#F78C6C;">12</span><span style="color:#EEFFFF;">:</span><span style="color:#F78C6C;">00</span><span style="color:#EEFFFF;">:</span><span style="color:#F78C6C;">01</span><span style="color:#EEFFFF;"> AM kbmemfree kbmemused  %memused </span></span>
<span class="line"><span style="color:#FFCB6B;">kbmemshrd</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">kbbuffers</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">kbcached</span><span style="color:#EEFFFF;">  </span></span>
<span class="line"><span style="color:#F78C6C;">12</span><span style="color:#EEFFFF;">:</span><span style="color:#F78C6C;">10</span><span style="color:#EEFFFF;">:</span><span style="color:#F78C6C;">00</span><span style="color:#EEFFFF;"> AM    </span><span style="color:#F78C6C;">240468</span><span style="color:#EEFFFF;">   </span><span style="color:#F78C6C;">1048252</span><span style="color:#EEFFFF;">     </span><span style="color:#F78C6C;">81.34</span><span style="color:#EEFFFF;">    </span></span>
<span class="line"><span style="color:#F78C6C;">0</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">133724</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">485772</span><span style="color:#EEFFFF;">  </span></span>
<span class="line"><span style="color:#F78C6C;">12</span><span style="color:#EEFFFF;">:</span><span style="color:#F78C6C;">20</span><span style="color:#EEFFFF;">:</span><span style="color:#F78C6C;">00</span><span style="color:#EEFFFF;"> AM    </span><span style="color:#F78C6C;">240508</span><span style="color:#EEFFFF;">   </span><span style="color:#F78C6C;">1048212</span><span style="color:#EEFFFF;">     </span><span style="color:#F78C6C;">81.34</span><span style="color:#EEFFFF;">   </span></span>
<span class="line"><span style="color:#F78C6C;">0</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">134172</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">485600</span><span style="color:#EEFFFF;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">…</span><span style="color:#EEFFFF;">  </span></span>
<span class="line"><span style="color:#F78C6C;">08</span><span style="color:#EEFFFF;">:</span><span style="color:#F78C6C;">40</span><span style="color:#EEFFFF;">:</span><span style="color:#F78C6C;">00</span><span style="color:#EEFFFF;"> PM    </span><span style="color:#F78C6C;">934132</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">354588</span><span style="color:#EEFFFF;">     </span><span style="color:#F78C6C;">27.51</span><span style="color:#EEFFFF;">    </span></span>
<span class="line"><span style="color:#F78C6C;">0</span><span style="color:#EEFFFF;">     </span><span style="color:#F78C6C;">26080</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">185364</span><span style="color:#EEFFFF;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">Average:</span><span style="color:#EEFFFF;">       </span><span style="color:#F78C6C;">324346</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">964374</span><span style="color:#EEFFFF;">     </span><span style="color:#F78C6C;">74.83</span><span style="color:#EEFFFF;">  </span></span>
<span class="line"><span style="color:#F78C6C;">0</span><span style="color:#EEFFFF;">     </span><span style="color:#F78C6C;">96072</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">467559</span><span style="color:#EEFFFF;"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>kbmemfree与kbmemused字段分别显示内存的未使用与已使用空间，后面跟着的是已使用空间的百分比（%memused字段）。kbbuffers与kbcached字段分别显示缓冲区与系统全域的数据存取量，单位为KB。</p><p><strong>观察系统部件10分钟，并对数据进行排序：</strong></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sar</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">temp</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">60</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">10</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>显示保存在每日数据文件“sa16”中的内存和网络统计信息。</strong></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sar</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-n</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">DEV</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/var/log/sa/sa16</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,18),o=[e];function r(F,c,t,i,y,C){return a(),n("div",null,o)}const b=s(p,[["render",r]]);export{d as __pageData,b as default};
