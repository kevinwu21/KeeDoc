import{_ as s,c as a,o as e,a as n}from"./app.82736834.js";const b=JSON.parse('{"title":"seinfo","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/seinfo.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/seinfo.md"},i=n(`<h1 id="seinfo" tabindex="-1">seinfo <a class="header-anchor" href="#seinfo" aria-hidden="true">#</a></h1><p>查询SELinux的策略提供多少相关规则</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>seinfo命令</strong> 是用来查询SELinux的策略提供多少相关规则，一个主体进程能否读取到目标文件资源的重点是在于SELinux的策略以及策略内的各项规则，然后再通过该规则的定义去处理各项目标文件的安全上下文，尤其是“类型”部分。SELinux的策略与规则管理相关命令：seinfo命令、sesearch命令、getsebool命令、setsebool命令、semanage命令。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">seinfo（选项）</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-A：列出SELinux的状态、规则布尔值、身份识别、角色、类型等所有信息。</span></span>
<span class="line"><span style="color:#FFCB6B;">-t：列出SELinux所有类型(</span><span style="color:#82AAFF;">type</span><span style="color:#EEFFFF;">)的种类。</span></span>
<span class="line"><span style="color:#FFCB6B;">-r：列出SELinux所有角色(role</span><span style="color:#EEFFFF;">)的种类。</span></span>
<span class="line"><span style="color:#FFCB6B;">-u：列出SELinux所有身份识别(user</span><span style="color:#EEFFFF;">)的种类。</span></span>
<span class="line"><span style="color:#FFCB6B;">-b：列出所有规则的种类（布尔值）。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><p>列出与httpd有关的规则：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">seinfo</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">httpd</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,11),r=[i];function p(t,o,c,d,h,u){return e(),a("div",null,r)}const m=s(l,[["render",p]]);export{b as __pageData,m as default};
