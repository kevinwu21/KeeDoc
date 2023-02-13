import{_ as s,c as a,o as n,a as e}from"./app.82736834.js";const y=JSON.parse('{"title":"grpunconv","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/grpunconv.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/grpunconv.md"},p=e(`<h1 id="grpunconv" tabindex="-1">grpunconv <a class="header-anchor" href="#grpunconv" aria-hidden="true">#</a></h1><p>用来关闭群组的投影密码</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>grpunconv命令</strong> 用来关闭群组的投影密码。它会把密码从gshadow文件内，回存到group文件里。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">grpunconv</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><p>未关闭的情况</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/etc/gshadow</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">cdy</span></span>
<span class="line"><span style="color:#FFCB6B;">cdy:123456:</span><span style="color:#82AAFF;">:</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>关闭影子密码</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/etc/gshadow</span></span>
<span class="line"><span style="color:#FFCB6B;">cat:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/etc/gshadow:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">没有那个文件或目录</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>查看密码已经复制到<code>/etc/group</code>中了。</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/etc/group</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">cdy</span></span>
<span class="line"><span style="color:#FFCB6B;">cdy:123456:1000:</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,13),r=[p];function o(c,t,i,d,F,u){return n(),a("div",null,r)}const m=s(l,[["render",o]]);export{y as __pageData,m as default};
