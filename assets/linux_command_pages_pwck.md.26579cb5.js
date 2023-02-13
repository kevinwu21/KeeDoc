import{_ as s,c as n,o as a,a as l}from"./app.82736834.js";const C=JSON.parse('{"title":"pwck","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/pwck.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/pwck.md"},o=l(`<h1 id="pwck" tabindex="-1">pwck <a class="header-anchor" href="#pwck" aria-hidden="true">#</a></h1><p>用来验证系统认证文件内容和格式的完整性</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>pwck命令</strong> 用来验证系统认证文件<code>/etc/passwd</code>和<code>/etc/shadow</code>的内容和格式的完整性。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">pwck(选项</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">参数</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-q：仅报告错误信息；</span></span>
<span class="line"><span style="color:#FFCB6B;">-s：以用户id排序文件“/etc/passwd”和“/etc/shadow”</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">-r：只读方式运行指令。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h3><ul><li>密码文件：指定密码文件的路径；</li><li>影子文件：指定影子文件的路径。</li></ul><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">pwck</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/etc/passwd</span></span>
<span class="line"><span style="color:#FFCB6B;">user</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lp</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">directory</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/var/spool/lpd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">does</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">not</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">exist</span></span>
<span class="line"><span style="color:#FFCB6B;">user</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">news</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">directory</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/var/spool/news</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">does</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">not</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">exist</span></span>
<span class="line"><span style="color:#FFCB6B;">user</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">uucp</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">directory</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/var/spool/uucp</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">does</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">not</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">exist</span></span>
<span class="line"><span style="color:#FFCB6B;">user</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">www-data</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">directory</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/var/www</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">does</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">not</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">exist</span></span>
<span class="line"><span style="color:#FFCB6B;">user</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">list</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">directory</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/var/list</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">does</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">not</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">exist</span></span>
<span class="line"><span style="color:#FFCB6B;">user</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">irc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">directory</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/var/run/ircd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">does</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">not</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">exist</span></span>
<span class="line"><span style="color:#FFCB6B;">user</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">gnats</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">directory</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/var/lib/gnats</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">does</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">not</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">exist</span></span>
<span class="line"><span style="color:#FFCB6B;">user</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">nobody</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">directory</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/nonexistent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">does</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">not</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">exist</span></span>
<span class="line"><span style="color:#FFCB6B;">user</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">syslog</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">directory</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/home/syslog</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">does</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">not</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">exist</span></span>
<span class="line"><span style="color:#FFCB6B;">user</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">couchdb</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">directory</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/var/lib/couchdb</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">does</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">not</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">exist</span></span>
<span class="line"><span style="color:#FFCB6B;">user</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">speech-dispatcher</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">directory</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/var/run/speech-dispatcher</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">does</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">not</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">exist</span></span>
<span class="line"><span style="color:#FFCB6B;">user</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">usbmux</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">directory</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/home/usbmux</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">does</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">not</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">exist</span></span>
<span class="line"><span style="color:#FFCB6B;">user</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">haldaemon</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">directory</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/var/run/hald</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">does</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">not</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">exist</span></span>
<span class="line"><span style="color:#FFCB6B;">user</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pulse</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">directory</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/var/run/pulse</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">does</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">not</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">exist</span></span>
<span class="line"><span style="color:#FFCB6B;">user</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">saned</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">directory</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/home/saned</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">does</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">not</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">exist</span></span>
<span class="line"><span style="color:#FFCB6B;">user</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hplip</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">directory</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/var/run/hplip</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">does</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">not</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">exist</span></span>
<span class="line"><span style="color:#FFCB6B;">pwck：无改变</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,12),e=[o];function F(r,c,t,y,E,D){return a(),n("div",null,e)}const d=s(p,[["render",F]]);export{C as __pageData,d as default};
