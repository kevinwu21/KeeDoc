import{_ as s,c as a,o as e,a as n}from"./app.82736834.js";const y=JSON.parse('{"title":"ssh-copy-id","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/ssh-copy-id.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/ssh-copy-id.md"},p=n(`<h1 id="ssh-copy-id" tabindex="-1">ssh-copy-id <a class="header-anchor" href="#ssh-copy-id" aria-hidden="true">#</a></h1><p>把本地的ssh公钥文件安装到远程主机对应的账户下</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>ssh-copy-id命令</strong> 可以把本地主机的公钥复制到远程主机的authorized_keys文件上，ssh-copy-id命令也会给远程主机的用户主目录（home）和<code>~/.ssh</code>, 和<code>~/.ssh/authorized_keys</code>设置合适的权限。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">ssh-copy-id</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-i </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">identity_file</span><span style="color:#89DDFF;">]]</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">user@</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;">machine</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-i：指定公钥文件</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><p>1、把本地的ssh公钥文件安装到远程主机对应的账户下：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">ssh-copy-id</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">user@server</span></span>
<span class="line"><span style="color:#FFCB6B;">ssh-copy-id</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">~/.ssh/id_rsa.pub</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">user@server</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,11),r=[p];function o(i,t,c,d,h,F){return e(),a("div",null,r)}const m=s(l,[["render",o]]);export{y as __pageData,m as default};
