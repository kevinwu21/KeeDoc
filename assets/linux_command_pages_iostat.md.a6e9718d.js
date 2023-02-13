import{_ as s,c as a,o as n,a as l}from"./app.82736834.js";const h=JSON.parse('{"title":"iostat","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/iostat.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/iostat.md"},t=l(`<h1 id="iostat" tabindex="-1">iostat <a class="header-anchor" href="#iostat" aria-hidden="true">#</a></h1><p>监视系统输入输出设备和CPU的使用情况</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>iostat命令</strong> 被用于监视系统输入输出设备和CPU的使用情况。它的特点是汇报磁盘活动统计情况，同时也会汇报出CPU使用情况。同vmstat一样，iostat也有一个弱点，就是它不能对某个进程进行深入分析，仅对系统的整体情况进行分析。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">iostat(选项</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">参数</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-c：仅显示CPU使用情况；</span></span>
<span class="line"><span style="color:#FFCB6B;">-d：仅显示设备利用率；</span></span>
<span class="line"><span style="color:#FFCB6B;">-k：显示状态以千字节每秒为单位，而不使用块每秒；</span></span>
<span class="line"><span style="color:#FFCB6B;">-m：显示状态以兆字节每秒为单位；</span></span>
<span class="line"><span style="color:#FFCB6B;">-p：仅显示块设备和所有被使用的其他分区的状态；</span></span>
<span class="line"><span style="color:#FFCB6B;">-t：显示每个报告产生时的时间；</span></span>
<span class="line"><span style="color:#FFCB6B;">-V：显示版号并退出；</span></span>
<span class="line"><span style="color:#FFCB6B;">-x：显示扩展状态。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h3><ul><li>间隔时间：每次报告的间隔时间（秒）；</li><li>次数：显示报告的次数。</li></ul><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><p>用<code>iostat -x /dev/sda1</code>来观看磁盘I/O的详细情况：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">iostat</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-x</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/dev/sda1</span><span style="color:#EEFFFF;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">Linux</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">2.6.18-164.el5xen</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">localhost.localdomain</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">2010年03月26日</span><span style="color:#EEFFFF;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">avg-cpu:</span><span style="color:#EEFFFF;">  %user   %nice %system %iowait </span></span>
<span class="line"><span style="color:#EEFFFF;">%</span><span style="color:#FFCB6B;">steal</span><span style="color:#EEFFFF;">   %idle  </span></span>
<span class="line"><span style="color:#EEFFFF;">            </span><span style="color:#FFCB6B;">0.11</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">0.02</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">0.18</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">0.35</span><span style="color:#EEFFFF;">   </span></span>
<span class="line"><span style="color:#F78C6C;">0.03</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">99.31</span><span style="color:#EEFFFF;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Device:</span><span style="color:#EEFFFF;">         </span><span style="color:#C3E88D;">tps</span><span style="color:#EEFFFF;">   </span><span style="color:#C3E88D;">Blk_read/s</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">Blk_wrtn/s</span><span style="color:#EEFFFF;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">Blk_read</span><span style="color:#EEFFFF;">   </span><span style="color:#C3E88D;">Blk_wrtn</span><span style="color:#EEFFFF;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">sda1</span><span style="color:#EEFFFF;">                </span><span style="color:#F78C6C;">0.02</span><span style="color:#EEFFFF;">          </span><span style="color:#F78C6C;">0.08</span><span style="color:#EEFFFF;">       </span></span>
<span class="line"><span style="color:#F78C6C;">0.00</span><span style="color:#EEFFFF;">          </span><span style="color:#F78C6C;">2014</span><span style="color:#EEFFFF;">               </span><span style="color:#F78C6C;">4</span><span style="color:#EEFFFF;"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>详细说明：第二行是系统信息和监测时间，第三行和第四行显示CPU使用情况（具体内容和mpstat命令相同）。这里主要关注后面I/O输出的信息，如下所示：</p><table><thead><tr><th>标示</th><th>说明</th></tr></thead><tbody><tr><td>Device</td><td>监测设备名称</td></tr><tr><td>rrqm/s</td><td>每秒需要读取需求的数量</td></tr><tr><td>wrqm/s</td><td>每秒需要写入需求的数量</td></tr><tr><td>r/s</td><td>每秒实际读取需求的数量</td></tr><tr><td>w/s</td><td>每秒实际写入需求的数量</td></tr><tr><td>rsec/s</td><td>每秒读取区段的数量</td></tr><tr><td>wsec/s</td><td>每秒写入区段的数量</td></tr><tr><td>rkB/s</td><td>每秒实际读取的大小，单位为KB</td></tr><tr><td>wkB/s</td><td>每秒实际写入的大小，单位为KB</td></tr><tr><td>avgrq-sz</td><td>需求的平均大小区段</td></tr><tr><td>avgqu-sz</td><td>需求的平均队列长度</td></tr><tr><td>await</td><td>等待I/O平均的时间（milliseconds）</td></tr><tr><td>svctm</td><td>I/O需求完成的平均时间</td></tr><tr><td>%util</td><td>被I/O需求消耗的CPU百分比</td></tr></tbody></table>`,15),p=[t];function r(o,c,F,i,d,y){return n(),a("div",null,p)}const E=s(e,[["render",r]]);export{h as __pageData,E as default};
