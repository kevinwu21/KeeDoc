import{_ as s,c as n,o as a,a as l}from"./app.82736834.js";const b=JSON.parse('{"title":"telnet","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/telnet.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/telnet.md"},p=l(`<h1 id="telnet" tabindex="-1">telnet <a class="header-anchor" href="#telnet" aria-hidden="true">#</a></h1><p>登录远程主机和管理(测试ip端口是否连通)</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>telnet命令</strong> 用于登录远程主机，对远程主机进行管理。telnet因为采用明文传送报文，安全性不好，很多Linux服务器都不开放telnet服务，而改用更安全的ssh方式了。但仍然有很多别的系统可能采用了telnet方式来提供远程登录，因此弄清楚telnet客户端的使用方式仍是很有必要的。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">telnet(选项</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">参数</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-8：允许使用8位字符资料，包括输入与输出；</span></span>
<span class="line"><span style="color:#FFCB6B;">-a：尝试自动登入远端系统；</span></span>
<span class="line"><span style="color:#FFCB6B;">-b&lt;主机别名&gt;：使用别名指定远端主机名称；</span></span>
<span class="line"><span style="color:#FFCB6B;">-c：不读取用户专属目录里的.telnetrc文件；</span></span>
<span class="line"><span style="color:#FFCB6B;">-d：启动排错模式；</span></span>
<span class="line"><span style="color:#FFCB6B;">-e&lt;脱离字符&gt;：设置脱离字符；</span></span>
<span class="line"><span style="color:#FFCB6B;">-E：滤除脱离字符；</span></span>
<span class="line"><span style="color:#FFCB6B;">-f：此参数的效果和指定&quot;-F&quot;参数相同；</span></span>
<span class="line"><span style="color:#FFCB6B;">-F：使用Kerberos</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">V5认证时，加上此参数可把本地主机的认证数据上传到远端主机；</span></span>
<span class="line"><span style="color:#FFCB6B;">-k&lt;域名&gt;：使用Kerberos认证时，加上此参数让远端主机采用指定的领域名，而非该主机的域名；</span></span>
<span class="line"><span style="color:#FFCB6B;">-K：不自动登入远端主机；</span></span>
<span class="line"><span style="color:#FFCB6B;">-l&lt;用户名称&gt;：指定要登入远端主机的用户名称；</span></span>
<span class="line"><span style="color:#FFCB6B;">-L：允许输出8位字符资料；</span></span>
<span class="line"><span style="color:#FFCB6B;">-n&lt;记录文件&gt;：指定文件记录相关信息；</span></span>
<span class="line"><span style="color:#FFCB6B;">-r：使用类似rlogin指令的用户界面；</span></span>
<span class="line"><span style="color:#FFCB6B;">-S&lt;服务类型&gt;：设置telnet连线所需的ip</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">TOS信息；</span></span>
<span class="line"><span style="color:#FFCB6B;">-x：假设主机有支持数据加密的功能，就使用它；</span></span>
<span class="line"><span style="color:#FFCB6B;">-X&lt;认证形态&gt;：关闭指定的认证形态。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h3><ul><li>远程主机：指定要登录进行管理的远程主机；</li><li>端口：指定TELNET协议使用的端口号。</li></ul><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">telnet</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">192.168.2.10</span></span>
<span class="line"><span style="color:#FFCB6B;">Trying</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">192.168.2.10...</span></span>
<span class="line"><span style="color:#FFCB6B;">Connected</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">to</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">192.168.2.10</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#EEFFFF;">192.168.2.10</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;">.</span></span>
<span class="line"><span style="color:#FFCB6B;">Escape</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">character</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">is</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">^]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#FFCB6B;">localhost</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Linux</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">release</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">2.6.18-274.18.1.el5</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;">#1 SMP Thu Feb 9 12:45:44 EST 2012) (1)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">login:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">root</span></span>
<span class="line"><span style="color:#FFCB6B;">Password:</span></span>
<span class="line"><span style="color:#FFCB6B;">Login</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">incorrect</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>一般情况下不允许root从远程登录，可以先用普通账号登录，然后再用su -切到root用户。</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">telnet</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">192.168.188.132</span></span>
<span class="line"><span style="color:#FFCB6B;">Trying</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">192.168.188.132...</span></span>
<span class="line"><span style="color:#FFCB6B;">telnet:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">connect</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">to</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">address</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">192.168.188.132:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Connection</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">refused</span></span>
<span class="line"><span style="color:#FFCB6B;">telnet:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Unable</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">to</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">connect</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">to</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">host</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>处理这种情况方法：</p><ol><li>确认ip地址是否正确？</li><li>确认ip地址对应的主机是否已经开机？</li><li>如果主机已经启动，确认路由设置是否设置正确？（使用route命令查看）</li><li>如果主机已经启动，确认主机上是否开启了telnet服务？（使用netstat命令查看，TCP的23端口是否有LISTEN状态的行）</li><li>如果主机已经启动telnet服务，确认防火墙是否放开了23端口的访问？（使用iptables-save查看）</li></ol><p><strong>启动telnet服务</strong></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">service</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">xinetd</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">restart</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>配置参数，通常的配置如下：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">service</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">telnet</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#FFCB6B;">disable</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">no</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;">#启用</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#FFCB6B;">flags</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">REUSE</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;">#socket可重用</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#FFCB6B;">socket_type</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">stream</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;">#连接方式为TCP</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#82AAFF;">wait</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">no</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;">#为每个请求启动一个进程</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#FFCB6B;">user</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">root</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;">#启动服务的用户为root</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#FFCB6B;">server</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/usr/sbin/in.telnetd</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;">#要激活的进程</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#FFCB6B;">log_on_failure</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">+=</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">USERID</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;">#登录失败时记录登录用户名</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>如果要配置允许登录的客户端列表，加入</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#EEFFFF;">only_from = 192.168.0.2 #只允许192.168.0.2登录</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果要配置禁止登录的客户端列表，加入</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#EEFFFF;">no_access = 192.168.0.{2,3,4} #禁止192.168.0.2、192.168.0.3、192.168.0.4登录</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果要设置开放时段，加入</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#EEFFFF;">access_times = 9:00-12:00 13:00-17:00 # 每天只有这两个时段开放服务（我们的上班时间：P）</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果你有两个IP地址，一个是私网的IP地址如192.168.0.2，一个是公网的IP地址如218.75.74.83，如果你希望用户只能从私网来登录telnet服务，那么加入</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#EEFFFF;">bind = 192.168.0.2</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>各配置项具体的含义和语法可参考xined配置文件属性说明（man xinetd.conf）</p><p>配置端口，修改services文件：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#545454;font-style:italic;"># vi /etc/services</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>找到以下两句</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">telnet</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">23</span><span style="color:#C3E88D;">/tcp</span></span>
<span class="line"><span style="color:#FFCB6B;">telnet</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">23</span><span style="color:#C3E88D;">/udp</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果前面有#字符，就去掉它。telnet的默认端口是23，这个端口也是黑客端口扫描的主要对象，因此最好将这个端口修改掉，修改的方法很简单，就是将23这个数字修改掉，改成大一点的数字，比如61123。注意，1024以下的端口号是internet保留的端口号，因此最好不要用，还应该注意不要与其它服务的端口冲突。</p><p>启动服务：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#EEFFFF;">service xinetd restart</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,36),o=[p];function r(t,c,F,i,y,d){return a(),n("div",null,o)}const u=s(e,[["render",r]]);export{b as __pageData,u as default};
