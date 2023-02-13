import{_ as s,c as a,o as n,a as l}from"./app.82736834.js";const C=JSON.parse('{"title":"uptime","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/uptime.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/uptime.md"},p=l(`<h1 id="uptime" tabindex="-1">uptime <a class="header-anchor" href="#uptime" aria-hidden="true">#</a></h1><p>查看Linux系统负载信息</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>uptime命令</strong> 能够打印系统总共运行了多长时间和系统的平均负载。uptime命令可以显示的信息显示依次为：现在时间、系统已经运行了多长时间、目前有多少登陆用户、系统在过去的1分钟、5分钟和15分钟内的平均负载。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">uptime(选项</span><span style="color:#EEFFFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-V：显示指令的版本信息。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><p>使用uptime命令查看系统负载：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@LinServ-</span><span style="color:#F78C6C;">1</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;"># uptime -V    </span><span style="color:#545454;font-style:italic;">#显示uptime命令版本信息</span></span>
<span class="line"><span style="color:#FFCB6B;">procps</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">version</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">3.2.7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@LinServ-</span><span style="color:#F78C6C;">1</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;"># uptime</span></span>
<span class="line"><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">15:31:30</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">up</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">127</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">days,</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">3</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">00</span><span style="color:#C3E88D;">,</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">1</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">user,</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">load</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">average:</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">0.00</span><span style="color:#C3E88D;">,</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">0.00</span><span style="color:#C3E88D;">,</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">0.00</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>显示内容说明：</strong></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">15</span><span style="color:#EEFFFF;">:</span><span style="color:#F78C6C;">31</span><span style="color:#EEFFFF;">:</span><span style="color:#F78C6C;">30</span><span style="color:#EEFFFF;">             </span><span style="color:#545454;font-style:italic;"># 系统当前时间</span></span>
<span class="line"><span style="color:#FFCB6B;">up</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">127</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">days, </span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">3</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">00</span><span style="color:#EEFFFF;">   </span><span style="color:#545454;font-style:italic;"># 主机已运行时间,时间越大，说明你的机器越稳定。</span></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#EEFFFF;"> user               </span><span style="color:#545454;font-style:italic;"># 用户连接数，是总连接数而不是用户数</span></span>
<span class="line"><span style="color:#FFCB6B;">load</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">average:</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">0.00</span><span style="color:#C3E88D;">,</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">0.00</span><span style="color:#C3E88D;">,</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">0.00</span><span style="color:#EEFFFF;">         </span><span style="color:#545454;font-style:italic;">#  系统平均负载，统计最近1，5，15分钟的系统平均负载</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>那么什么是系统平均负载呢？ 系统平均负载是指在特定时间间隔内运行队列中的平均进程数。</p><p>如果每个CPU内核的当前活动进程数不大于3的话，那么系统的性能是良好的。如果每个CPU内核的任务数大于5，那么这台机器的性能有严重问题。</p><p>如果你的linux主机是1个双核CPU的话，当Load Average 为6的时候说明机器已经被充分使用了。</p>`,16),o=[p];function r(t,c,F,i,y,d){return n(),a("div",null,o)}const u=s(e,[["render",r]]);export{C as __pageData,u as default};
