import{_ as s,c as n,o as a,a as l}from"./app.82736834.js";const C=JSON.parse('{"title":"sh","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/sh.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/sh.md"},o=l(`<h1 id="sh" tabindex="-1">sh <a class="header-anchor" href="#sh" aria-hidden="true">#</a></h1><p>shell命令解释器</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>sh命令</strong> 是shell命令语言解释器，执行命令从标准输入读取或从一个文件中读取。通过用户输入命令，和内核进行沟通！Bourne Again Shell （即bash）是自由软件基金会（GNU）开发的一个Shell，它是Linux系统中一个默认的Shell。Bash不但与Bourne Shell兼容，还继承了C Shell、Korn Shell等优点。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">bash</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">options</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-c</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">string：命令从-c后的字符串读取。</span></span>
<span class="line"><span style="color:#FFCB6B;">-i：实现脚本交互。</span></span>
<span class="line"><span style="color:#FFCB6B;">-n：进行shell脚本的语法检查。</span></span>
<span class="line"><span style="color:#FFCB6B;">-x：实现shell脚本逐条语句的跟踪。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><p>使用-x选项跟踪脚本调试shell脚本，能打印出所执行的每一行命令以及当前状态：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@AY1307311912260196fcZ satools</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"># sh -x check_ssh_login.sh</span></span>
<span class="line"><span style="color:#FFCB6B;">+</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">DEFINE=</span><span style="color:#F78C6C;">30</span></span>
<span class="line"><span style="color:#FFCB6B;">+</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">cat</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/var/log/secure</span></span>
<span class="line"><span style="color:#FFCB6B;">+</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">awk</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/Failed/ {++ip[$(NF-3)]} END {for (i in ip) print i&quot;=&quot;ip[i]}</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">++</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">cat</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/root/satools/black.txt</span></span>
<span class="line"><span style="color:#FFCB6B;">+</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">for</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">i</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">in</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\`cat /root/satools/black.txt\`</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">++</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">echo</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">121.42.0.16=</span><span style="color:#F78C6C;">1427</span></span>
<span class="line"><span style="color:#FFCB6B;">++</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">awk</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-F=</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{print $1}</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">+</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">IP=121.42.0.16</span></span>
<span class="line"><span style="color:#FFCB6B;">++</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">echo</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">121.42.0.16=</span><span style="color:#F78C6C;">1427</span></span>
<span class="line"><span style="color:#FFCB6B;">++</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">awk</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-F=</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{print $2}</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">+</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">NUM=</span><span style="color:#F78C6C;">1427</span></span>
<span class="line"><span style="color:#FFCB6B;">+</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">1427</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-gt</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">30</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">]</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">+</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">grep</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">121.42.0.16</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/etc/hosts.deny</span></span>
<span class="line"><span style="color:#FFCB6B;">+</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">1</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-gt</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">0</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">]</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">+</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">echo</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">sshd:121.42.0.16</span></span>
<span class="line"><span style="color:#FFCB6B;">+</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">echo</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">vsftpd:121.42.0.16</span></span>
<span class="line"><span style="color:#FFCB6B;">+</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">for</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">i</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">in</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\`cat /root/satools/black.txt\`</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">++</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">echo</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">121.42.0.72=</span><span style="color:#F78C6C;">276</span></span>
<span class="line"><span style="color:#FFCB6B;">++</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">awk</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-F=</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{print $1}</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">+</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">IP=121.42.0.72</span></span>
<span class="line"><span style="color:#FFCB6B;">++</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">awk</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-F=</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{print $2}</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">++</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">echo</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">121.42.0.72=</span><span style="color:#F78C6C;">276</span></span>
<span class="line"><span style="color:#FFCB6B;">+</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">NUM=</span><span style="color:#F78C6C;">276</span></span>
<span class="line"><span style="color:#FFCB6B;">+</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">276</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-gt</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">30</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">]</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">+</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">grep</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">121.42.0.72</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/etc/hosts.deny</span></span>
<span class="line"><span style="color:#FFCB6B;">+</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">1</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-gt</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">0</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">]</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">+</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">echo</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">sshd:121.42.0.72</span></span>
<span class="line"><span style="color:#FFCB6B;">+</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">echo</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">vsftpd:121.42.0.72</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>`,11),e=[o];function F(r,c,t,y,E,i){return a(),n("div",null,e)}const b=s(p,[["render",F]]);export{C as __pageData,b as default};
