import{_ as s,c as n,o as a,a as l}from"./app.82736834.js";const D=JSON.parse('{"title":"cu","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/cu.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/cu.md"},e=l(`<h1 id="cu" tabindex="-1">cu <a class="header-anchor" href="#cu" aria-hidden="true">#</a></h1><p>用于连接另一个系统主机</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>cu命令</strong> 用于连接另一个系统主机。cu(call up)指令可连接另一台主机，并采用类似拨号终端机的接口工作，也可执行简易的文件传输作业。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">cu</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">dehnotv</span><span style="color:#89DDFF;">][</span><span style="color:#EEFFFF;">-a</span><span style="color:#89DDFF;">&lt;</span><span style="color:#EEFFFF;">通信端口</span><span style="color:#89DDFF;">&gt;][</span><span style="color:#EEFFFF;">-c</span><span style="color:#89DDFF;">&lt;</span><span style="color:#EEFFFF;">电话号码</span><span style="color:#89DDFF;">&gt;][</span><span style="color:#EEFFFF;">-E</span><span style="color:#89DDFF;">&lt;</span><span style="color:#EEFFFF;">脱离字符</span><span style="color:#89DDFF;">&gt;][</span><span style="color:#EEFFFF;">-I</span><span style="color:#89DDFF;">&lt;</span><span style="color:#EEFFFF;">设置文件</span><span style="color:#89DDFF;">&gt;][</span><span style="color:#EEFFFF;">-l</span><span style="color:#89DDFF;">&lt;</span><span style="color:#EEFFFF;">外围设备代号</span><span style="color:#89DDFF;">&gt;]</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-s</span><span style="color:#89DDFF;">&lt;</span><span style="color:#EEFFFF;">连线速率</span><span style="color:#89DDFF;">&gt;][</span><span style="color:#EEFFFF;">-x</span><span style="color:#89DDFF;">&lt;</span><span style="color:#EEFFFF;">排错模式</span><span style="color:#89DDFF;">&gt;][</span><span style="color:#EEFFFF;">-z</span><span style="color:#89DDFF;">&lt;</span><span style="color:#EEFFFF;">系统主机</span><span style="color:#89DDFF;">&gt;][</span><span style="color:#EEFFFF;">--help</span><span style="color:#89DDFF;">][</span><span style="color:#EEFFFF;">-nostop</span><span style="color:#89DDFF;">][</span><span style="color:#EEFFFF;">--parity</span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;">none</span><span style="color:#89DDFF;">][&lt;</span><span style="color:#EEFFFF;">系统主机</span><span style="color:#89DDFF;">&gt;</span><span style="color:#EEFFFF;">/</span><span style="color:#89DDFF;">&lt;</span><span style="color:#EEFFFF;">电话号码</span><span style="color:#89DDFF;">&gt;]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-a&lt;通信端口&gt;或-p&lt;通信端口&gt;或--port&lt;通信端口&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">使用指定的通信端口进行连线。</span></span>
<span class="line"><span style="color:#FFCB6B;">-c&lt;电话号码&gt;或--phone&lt;电话号码&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">拨打该电话号码。</span></span>
<span class="line"><span style="color:#FFCB6B;">-d</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">进入排错模式。</span></span>
<span class="line"><span style="color:#FFCB6B;">-e或--parity=even</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">使用双同位检查。</span></span>
<span class="line"><span style="color:#FFCB6B;">-E&lt;脱离字符&gt;或--escape&lt;脱离字符&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">设置脱离字符。</span></span>
<span class="line"><span style="color:#FFCB6B;">-h或--halfduple</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">使用半双工模式。</span></span>
<span class="line"><span style="color:#FFCB6B;">-I&lt;配置文件&gt;或--config&lt;配置文件&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">指定要使用的配置文件。</span></span>
<span class="line"><span style="color:#FFCB6B;">-l&lt;外围设备代号&gt;或--line&lt;外围设备代号&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">指定某项外围设备，作为连接的设备。</span></span>
<span class="line"><span style="color:#FFCB6B;">-n或--prompt</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">拨号时等待用户输入电话号码。</span></span>
<span class="line"><span style="color:#FFCB6B;">-o或--parity=odd</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">使用单同位检查。</span></span>
<span class="line"><span style="color:#FFCB6B;">-s&lt;连线速率&gt;或--speed&lt;连线速率&gt;或--baud&lt;连线速率&gt;或-&lt;连线速率&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">设置连线的速率，单位以鲍率计算。</span></span>
<span class="line"><span style="color:#FFCB6B;">-t或--maper</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">把CR字符置换成LF+CR字符。</span></span>
<span class="line"><span style="color:#FFCB6B;">-v或--version</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">显示版本信息。</span></span>
<span class="line"><span style="color:#FFCB6B;">-x&lt;排错模式&gt;或--debug&lt;排错模式&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">使用排错模式。</span></span>
<span class="line"><span style="color:#FFCB6B;">-z&lt;系统主机&gt;或--system&lt;系统主机&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">连接该系统主机。</span></span>
<span class="line"><span style="color:#FFCB6B;">--help</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">在线帮助。</span></span>
<span class="line"><span style="color:#FFCB6B;">--nostop</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">关闭Xon/Xoff软件流量控制。</span></span>
<span class="line"><span style="color:#FFCB6B;">--parity=none</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">不使用同位检查。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><p>与远程主机连接</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">cu</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">0102377765</span></span>
<span class="line"><span style="color:#FFCB6B;">cu</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">38400</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">9</span><span style="color:#C3E88D;">=</span><span style="color:#F78C6C;">12015551234</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,11),o=[e];function F(t,r,c,i,y,E){return a(),n("div",null,o)}const u=s(p,[["render",F]]);export{D as __pageData,u as default};
