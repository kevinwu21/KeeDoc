import{_ as s,c as n,o as a,a as l}from"./app.82736834.js";const E=JSON.parse('{"title":"jobs","description":"","frontmatter":{},"headers":[{"level":2,"title":"概要","slug":"概要","link":"#概要","children":[]},{"level":2,"title":"主要用途","slug":"主要用途","link":"#主要用途","children":[]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"返回值","slug":"返回值","link":"#返回值","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]}]}],"relativePath":"linux/command/pages/jobs.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/jobs.md"},e=l(`<h1 id="jobs" tabindex="-1">jobs <a class="header-anchor" href="#jobs" aria-hidden="true">#</a></h1><p>显示作业的状态。</p><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">jobs</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-lnprs</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">jobspec ...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#82AAFF;">jobs</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-x</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">command</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">args</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="主要用途" tabindex="-1">主要用途 <a class="header-anchor" href="#主要用途" aria-hidden="true">#</a></h2><ul><li>显示作业的状态。</li><li>列出活动的作业。</li><li>列出停止的作业。</li></ul><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-l</span><span style="color:#EEFFFF;">	</span><span style="color:#C3E88D;">在作业信息中额外的列出PID。</span></span>
<span class="line"><span style="color:#FFCB6B;">-n</span><span style="color:#EEFFFF;">	</span><span style="color:#C3E88D;">只列出最近一次通知以来状态变更的作业。</span></span>
<span class="line"><span style="color:#FFCB6B;">-p</span><span style="color:#EEFFFF;">	</span><span style="color:#C3E88D;">只列出PID。</span></span>
<span class="line"><span style="color:#FFCB6B;">-r</span><span style="color:#EEFFFF;">	</span><span style="color:#C3E88D;">只输出处于运行状态的作业。</span></span>
<span class="line"><span style="color:#FFCB6B;">-s</span><span style="color:#EEFFFF;">	</span><span style="color:#C3E88D;">只输出处于停止状态的作业。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-hidden="true">#</a></h2><p>返回状态为成功除非给出了非法选项、执行出现错误。</p><p>如果使用<code>jobs -x command [args]</code>形式执行，那么返回值为<code>command</code>的退出状态。</p><h2 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">user2@pc</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> ssh 192.168.1.4</span></span>
<span class="line"><span style="color:#FFCB6B;">pc@192.168.1.4&#39;s</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">password:</span></span>
<span class="line"><span style="color:#545454;font-style:italic;"># 此时按下ctrl+z使得交互停止。</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;">+  Stopped                 ssh 192.168.1.4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">user2@pc</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> sleep </span><span style="color:#F78C6C;">60</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&amp;</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">13338</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">user2@pc</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> jobs</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;">-  Stopped                 ssh 192.168.1.4</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;">   Running                 sleep </span><span style="color:#F78C6C;">60</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&amp;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">user2@pc</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> jobs -l</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;">- </span><span style="color:#F78C6C;">12927</span><span style="color:#EEFFFF;"> Stopped                 ssh 192.168.1.4</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">13338</span><span style="color:#EEFFFF;"> Running                 sleep </span><span style="color:#F78C6C;">60</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&amp;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">user2@pc</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> jobs -p</span></span>
<span class="line"><span style="color:#F78C6C;">12927</span></span>
<span class="line"><span style="color:#F78C6C;">13338</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">user2@pc</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> jobs -s</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;">-  Stopped                 ssh 192.168.1.4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">user2@pc</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> jobs -r</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;">   Running                 sleep </span><span style="color:#F78C6C;">60</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&amp;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">user2@pc</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> kill -</span><span style="color:#F78C6C;">9</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">12927</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;">   Done                    sleep </span><span style="color:#F78C6C;">60</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">user2@pc</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> jobs -n -l</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;">+ </span><span style="color:#F78C6C;">12927</span><span style="color:#EEFFFF;"> Killed             ssh 192.168.1.4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">user2@pc</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> jobs -n -l</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h3 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-hidden="true">#</a></h3><ol><li><code>bash</code>的作业控制命令包括<code>bg fg kill wait disown suspend</code>。</li><li>该命令需要<code>set</code>选项<code>monitor</code>处于开启状态时才能执行；查看作业控制状态：输入<code>set -o</code>查看<code>monitor</code>行；执行<code>set -o monitor</code>或<code>set -m</code>开启该选项。</li><li>该命令是bash内建命令，相关的帮助信息请查看<code>help</code>命令。</li></ol>`,15),o=[e];function F(r,c,t,i,y,d){return a(),n("div",null,o)}const D=s(p,[["render",F]]);export{E as __pageData,D as default};
