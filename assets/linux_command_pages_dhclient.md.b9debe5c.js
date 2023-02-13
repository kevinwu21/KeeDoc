import{_ as s,c as a,o as e,a as n}from"./app.82736834.js";const b=JSON.parse('{"title":"dhclient","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/dhclient.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/dhclient.md"},i=n(`<h1 id="dhclient" tabindex="-1">dhclient <a class="header-anchor" href="#dhclient" aria-hidden="true">#</a></h1><p>动态获取或释放IP地址</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>dhclient命令</strong> 使用动态主机配置协议动态的配置网络接口的网络参数。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">dhclient(选项</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">参数</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">0</span><span style="color:#EEFFFF;">：指定dhcp客户端监听的端口号；</span></span>
<span class="line"><span style="color:#FFCB6B;">-d：总是以前台方式运行程序；</span></span>
<span class="line"><span style="color:#FFCB6B;">-q：安静模式，不打印任何错误的提示信息；</span></span>
<span class="line"><span style="color:#FFCB6B;">-r：释放ip地址。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h3><p>网络接口：操作的网络接口。</p><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">dhclient</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#EEFFFF;">     </span><span style="color:#545454;font-style:italic;">#释放IP</span></span>
<span class="line"><span style="color:#FFCB6B;">dhclient</span><span style="color:#EEFFFF;">        </span><span style="color:#545454;font-style:italic;">#获取IP</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,12),r=[i];function t(p,c,d,o,h,u){return e(),a("div",null,r)}const m=s(l,[["render",t]]);export{b as __pageData,m as default};
