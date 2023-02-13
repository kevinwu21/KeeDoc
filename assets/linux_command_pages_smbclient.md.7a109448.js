import{_ as s,c as n,o as a,a as l}from"./app.82736834.js";const u=JSON.parse('{"title":"smbclient","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/smbclient.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/smbclient.md"},p=l(`<h1 id="smbclient" tabindex="-1">smbclient <a class="header-anchor" href="#smbclient" aria-hidden="true">#</a></h1><p>交互方式访问samba服务器</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>smbclient命令</strong> 属于samba套件，它提供一种命令行使用交互式方式访问samba服务器的共享资源。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">smbclient(选项</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">参数</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-B&lt;ip地址&gt;：传送广播数据包时所用的IP地址；</span></span>
<span class="line"><span style="color:#FFCB6B;">-d&lt;排错层级&gt;：指定记录文件所记载事件的详细程度；</span></span>
<span class="line"><span style="color:#FFCB6B;">-E：将信息送到标准错误输出设备；</span></span>
<span class="line"><span style="color:#FFCB6B;">-h：显示帮助；</span></span>
<span class="line"><span style="color:#FFCB6B;">-i&lt;范围&gt;：设置NetBIOS名称范围；</span></span>
<span class="line"><span style="color:#FFCB6B;">-I&lt;IP地址&gt;：指定服务器的IP地址；</span></span>
<span class="line"><span style="color:#FFCB6B;">-l&lt;记录文件&gt;：指定记录文件的名称；</span></span>
<span class="line"><span style="color:#FFCB6B;">-L：显示服务器端所分享出来的所有资源；</span></span>
<span class="line"><span style="color:#FFCB6B;">-M&lt;NetBIOS名称&gt;：可利用WinPopup协议，将信息送给选项中所指定的主机；</span></span>
<span class="line"><span style="color:#FFCB6B;">-n&lt;NetBIOS名称&gt;：指定用户端所要使用的NetBIOS名称；</span></span>
<span class="line"><span style="color:#FFCB6B;">-N：不用询问密码；</span></span>
<span class="line"><span style="color:#FFCB6B;">-O&lt;连接槽选项&gt;：设置用户端TCP连接槽的选项；</span></span>
<span class="line"><span style="color:#FFCB6B;">-p&lt;TCP连接端口&gt;：指定服务器端TCP连接端口编号；</span></span>
<span class="line"><span style="color:#FFCB6B;">-R&lt;名称解析顺序&gt;：设置NetBIOS名称解析的顺序；</span></span>
<span class="line"><span style="color:#FFCB6B;">-s&lt;目录&gt;：指定smb.conf所在的目录；</span></span>
<span class="line"><span style="color:#FFCB6B;">-t&lt;服务器字码&gt;：设置用何种字符码来解析服务器端的文件名称；</span></span>
<span class="line"><span style="color:#FFCB6B;">-T&lt;tar选项&gt;：备份服务器端分享的全部文件，并打包成tar格式的文件；</span></span>
<span class="line"><span style="color:#FFCB6B;">-U&lt;用户名称&gt;：指定用户名称；</span></span>
<span class="line"><span style="color:#FFCB6B;">-w&lt;工作群组&gt;：指定工作群组名称。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h3><p>smb服务器：指定要连接的smb服务器。</p><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><p><strong>列出某个IP地址所提供的共享文件夹</strong></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">smbclient</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">198.168.0.1</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-U</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">username%password</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>像ftp客户端一样使用smbclient</strong></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">smbclient</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">//192.168.0.1/tmp</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">-U</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">username%password</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>执行smbclient命令成功后，进入smbclient环境，出现提示符：<code>smb:/&gt;</code></p><p>这里有许多命令和ftp命令相似，如cd 、lcd、get、megt、put、mput等。通过这些命令，我们可以访问远程主机的共享资源。</p><p><strong>直接一次性使用smbclient命令</strong></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">smbclient</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ls</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">//192.168.0.1/tmp</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">-U</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">username%password</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>和</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">smbclient</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">//192.168.0.1/tmp</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">-U</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">username%password</span></span>
<span class="line"><span style="color:#FFCB6B;">smb:/&gt;ls</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>功能一样的。</p><p><strong>创建一个共享文件夹</strong></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">smbclient</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mkdir share1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">//192.168.0.1/tmp</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-U</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">username%password</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果用户共享<code>//192.168.0.1/tmp</code>的方式是只读的，会提示<code>NT_STATUS_ACCESS_DENIED making remote directory /share1</code></p>`,25),r=[p];function t(o,c,i,d,F,b){return a(),n("div",null,r)}const y=s(e,[["render",t]]);export{u as __pageData,y as default};
