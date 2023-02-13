import{_ as s,c as a,o as n,a as l}from"./app.82736834.js";const C=JSON.parse('{"title":"mii-tool","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/mii-tool.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/mii-tool.md"},o=l(`<h1 id="mii-tool" tabindex="-1">mii-tool <a class="header-anchor" href="#mii-tool" aria-hidden="true">#</a></h1><p>配置网络设备协商方式的工具</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>mii-tool命令</strong> 是用于查看、管理介质的网络接口的状态，有时网卡需要配置协商方式，比如10/100/1000M的网卡半双工、全双工、自动协商的配置。但大多数的网络设备是不用我们来修改协商，因为大多数网络设置接入的时候，都采用自动协商来解决相互通信的问题。不过自动协商也不是万能的，有时也会出现错误，比如丢包率比较高，这时就要我们来指定网卡的协商方式。mii-tool就是能指定网卡的协商方式。下面我们说一说mii-tool的用法。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">usage:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">mii-tool</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-VvRrwl</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-A media,... </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> -F media</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">interface ...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-V</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">显示版本信息；</span></span>
<span class="line"><span style="color:#FFCB6B;">-v</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">显示网络接口的信息；</span></span>
<span class="line"><span style="color:#FFCB6B;">-R</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">重设MII到开启状态；</span></span>
<span class="line"><span style="color:#FFCB6B;">-r</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">重启自动协商模式；</span></span>
<span class="line"><span style="color:#FFCB6B;">-w</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">查看网络接口连接的状态变化；</span></span>
<span class="line"><span style="color:#FFCB6B;">-l</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">写入事件到系统日志；</span></span>
<span class="line"><span style="color:#FFCB6B;">-A</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">指令特定的网络接口；</span></span>
<span class="line"><span style="color:#FFCB6B;">-F</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">更改网络接口协商方式；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">media:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">100baseT4,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">100baseTx-FD,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">100baseTx-HD,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">10baseT-FD,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">10baseT-HD,</span></span>
<span class="line"><span style="color:#EEFFFF;">        </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">to</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">advertise</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">both</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">HD</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">and</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">FD</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">100baseTx,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">10baseT</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><p>查看网络接口的协商状态：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;"># mii-tool -v eth0</span></span>
<span class="line"><span style="color:#FFCB6B;">eth0:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">negotiated</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">100baseTx-FD,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">link</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">ok</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#FFCB6B;">product</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">info:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">vendor</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">00</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">50</span><span style="color:#C3E88D;">:ef,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">model</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">60</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">rev</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">8</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#FFCB6B;">basic</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">mode:  </span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">autonegotiation</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">enabled</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#FFCB6B;">basic</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">status:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">autonegotiation</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">complete,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">link</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">ok</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#FFCB6B;">capabilities:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">100baseTx-FD</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">100baseTx-HD</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">10baseT-FD</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">10baseT-HD</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#FFCB6B;">advertising:</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">100baseTx-FD</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">100baseTx-HD</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">10baseT-FD</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">10baseT-HD</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">flow-control</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#FFCB6B;">link</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">partner:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">100baseTx-FD</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">100baseTx-HD</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">10baseT-FD</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">10baseT-HD</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>注：上面的例子，我们可以看得到是自动协商，注意红字的部份。</p><p>更改网络接口协商方式：</p><p>更改网络接口的协商方式，我们要用到<code>-F</code>选项，后面可以接100baseT4, 100baseTx-FD, 100baseTx-HD, 10baseT-FD, 10baseT-HD等参数；</p><p>如果我们想把网络接口eth0改为1000Mb/s全双工的模式应该怎么办呢？</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;"># mii-tool -F 100baseTx-FD</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;"># mii-tool -v eth0</span></span>
<span class="line"><span style="color:#FFCB6B;">eth0:</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">100</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Mbit,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">full</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">duplex,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">link</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">ok</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#FFCB6B;">product</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">info:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">vendor</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">00</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">00</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">00</span><span style="color:#C3E88D;">,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">model</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">0</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">rev</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#FFCB6B;">basic</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">mode:</span><span style="color:#EEFFFF;">   </span><span style="color:#F78C6C;">100</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Mbit,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">full</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">duplex</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#FFCB6B;">basic</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">status:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">link</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">ok</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#FFCB6B;">capabilities:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">100baseTx-FD</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">100baseTx-HD</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">10baseT-FD</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">10baseT-HD</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#FFCB6B;">advertising:</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">100baseTx-FD</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">100baseTx-HD</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">10baseT-FD</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">10baseT-HD</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>注：是不是已经改过来了？当然，我们也一样用ethtool工具来更改，比如执行下面的命令：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;"># ethtool -s eth0 speed </span><span style="color:#F78C6C;">100</span><span style="color:#EEFFFF;"> duplex full</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,18),e=[o];function F(r,t,c,E,y,i){return n(),a("div",null,e)}const b=s(p,[["render",F]]);export{C as __pageData,b as default};
