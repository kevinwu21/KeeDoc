import{_ as s,c as a,o as n,a as l}from"./app.82736834.js";const h=JSON.parse('{"title":"watch","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/watch.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/watch.md"},e=l(`<h1 id="watch" tabindex="-1">watch <a class="header-anchor" href="#watch" aria-hidden="true">#</a></h1><p>可以将命令的输出结果输出到标准输出设备，多用于周期性执行命令/定时执行命令</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>watch命令</strong> 以周期性的方式执行给定的指令，指令输出以全屏方式显示。watch是一个非常实用的命令，基本所有的Linux发行版都带有这个小工具，如同名字一样，watch可以帮你监测一个命令的运行结果，省得你一遍遍的手动运行。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">watch(选项</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">参数</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker has-diff" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-n</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;"># 或--interval  watch缺省每2秒运行一下程序，可以用-n或-interval来指定间隔的时间。</span></span>
<span class="line"><span style="color:#FFCB6B;">-d</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;"># 或--differences  用-d或--differences 选项watch 会高亮显示变化的区域。 而-d=cumulative选项会把变动过的地方(不管最近的那次有没有变动)都高亮显示出来。</span></span>
<span class="line"><span style="color:#FFCB6B;">-t</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;"># 或-no-title  会关闭watch命令在顶部的时间间隔,命令，当前时间的输出。</span></span>
<span class="line"><span style="color:#FFCB6B;">-h,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">--help</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;"># 查看帮助文档</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h3><p>指令：需要周期性执行的指令。</p><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker has-diff" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">watch</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-n</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">1</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">netstat</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-ant</span><span style="color:#EEFFFF;">       </span><span style="color:#545454;font-style:italic;"># 命令：每隔一秒高亮显示网络链接数的变化情况</span></span>
<span class="line"><span style="color:#FFCB6B;">watch</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-n</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">1</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pstree|grep http</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;"># 每隔一秒高亮显示http链接数的变化情况。 后面接的命令若带有管道符，需要加&#39;&#39;将命令区域归整。</span></span>
<span class="line"><span style="color:#FFCB6B;">watch</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">netstat -an | grep:21 | \\ grep&lt;模拟攻击客户机的IP&gt;| wc -l</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;"># 实时查看模拟攻击客户机建立起来的连接数</span></span>
<span class="line"><span style="color:#FFCB6B;">watch</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ls -l|grep scf</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;">       </span><span style="color:#545454;font-style:italic;"># 监测当前目录中 scf&#39; 的文件的变化</span></span>
<span class="line"><span style="color:#FFCB6B;">watch</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-n</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">10</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cat /proc/loadavg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;"># 10秒一次输出系统的平均负载</span></span>
<span class="line"><span style="color:#FFCB6B;">watch</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">uptime</span></span>
<span class="line"><span style="color:#FFCB6B;">watch</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">uptime</span></span>
<span class="line"><span style="color:#FFCB6B;">watch</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-n</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">1</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">netstat</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-ntlp</span></span>
<span class="line"><span style="color:#FFCB6B;">watch</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ls -l | fgrep goface</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;">     </span><span style="color:#545454;font-style:italic;"># 监测goface的文件</span></span>
<span class="line"><span style="color:#FFCB6B;">watch</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-differences=cumulative</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">uptime</span></span>
<span class="line"><span style="color:#FFCB6B;">watch</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-n</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">60</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">from</span><span style="color:#EEFFFF;">            </span><span style="color:#545454;font-style:italic;"># 监控mail</span></span>
<span class="line"><span style="color:#FFCB6B;">watch</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-n</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">1</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">df -i;df</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;">       </span><span style="color:#545454;font-style:italic;"># 监测磁盘inode和block数目变化情况</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>FreeBSD和Linux下watch命令的不同，在Linux下，watch是周期性的执行下个程序，并全屏显示执行结果，如：<code>watch -n 1 -d netstat -ant</code>，而在FreeBSD下的watch命令是查看其它用户的正在运行的操作，watch允许你偷看其它terminal正在做什么，该命令只能让超级用户使用。</p>`,13),o=[e];function t(c,r,F,i,y,E){return n(),a("div",null,o)}const C=s(p,[["render",t]]);export{h as __pageData,C as default};
