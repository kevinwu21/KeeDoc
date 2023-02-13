import{_ as s,c as a,o as n,a as e}from"./app.82736834.js";const m=JSON.parse('{"title":"squidclient","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]}]}],"relativePath":"linux/command/pages/squidclient.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/squidclient.md"},i=e(`<h1 id="squidclient" tabindex="-1">squidclient <a class="header-anchor" href="#squidclient" aria-hidden="true">#</a></h1><p>squid服务器的客户端管理工具</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>squidclient命令</strong> 使用squid服务器的客户端管理工具，它可以查看squid服务器的详细运行信息和管理squid服务器。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">squidclient(选项</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">参数</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-a：不包含“accept:header”；</span></span>
<span class="line"><span style="color:#FFCB6B;">-r：强制缓存重新加载URL；</span></span>
<span class="line"><span style="color:#FFCB6B;">-s：安静模式，不输出信息到标准输出设备；</span></span>
<span class="line"><span style="color:#FFCB6B;">-h：从指定主机获取url</span></span>
<span class="line"><span style="color:#FFCB6B;">-l：指定一个本地ip地址进行绑定；</span></span>
<span class="line"><span style="color:#FFCB6B;">-p：端口号，默认为3128；</span></span>
<span class="line"><span style="color:#FFCB6B;">-m：指定发送请求的方法；</span></span>
<span class="line"><span style="color:#FFCB6B;">-u：代理认证用户名。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h3><p>URL：指定操作缓存中的URL。</p>`,10),r=[i];function p(t,c,d,o,u,h){return n(),a("div",null,r)}const F=s(l,[["render",p]]);export{m as __pageData,F as default};
