import{_ as s,c as n,o as a,a as l}from"./app.82736834.js";const y=JSON.parse('{"title":"chsh","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/chsh.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/chsh.md"},p=l(`<h1 id="chsh" tabindex="-1">chsh <a class="header-anchor" href="#chsh" aria-hidden="true">#</a></h1><p>用来更换登录系统时使用的shell</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>chsh命令</strong> 用来更换登录系统时使用的shell。若不指定任何参数与用户名称，则chsh会以应答的方式进行设置。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">chsh(选项</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">参数</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-s&lt;shell</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">名</span><span style="color:#EEFFFF;">称</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">或--shell</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">shell</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">名</span><span style="color:#EEFFFF;">称</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">：更改系统预设的shell环境。；</span></span>
<span class="line"><span style="color:#FFCB6B;">-l或--list-shells：列出目前系统可用的shell清单；</span></span>
<span class="line"><span style="color:#FFCB6B;">-u或--help：在线帮助；</span></span>
<span class="line"><span style="color:#FFCB6B;">-v或-version：显示版本信息。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h3><p>用户名：要改变默认shell的用户。</p><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><p><strong>查看系统安装了哪些shell的两种方法：</strong></p><p>第一种：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">rocrocket@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;">$ chsh -l</span></span>
<span class="line"><span style="color:#FFCB6B;">/bin/sh</span></span>
<span class="line"><span style="color:#FFCB6B;">/bin/bash</span></span>
<span class="line"><span style="color:#FFCB6B;">/sbin/nologin</span></span>
<span class="line"><span style="color:#FFCB6B;">/bin/zsh</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>第二种：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">rocrocket@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;">$ cat /etc/shells</span></span>
<span class="line"><span style="color:#FFCB6B;">/bin/sh</span></span>
<span class="line"><span style="color:#FFCB6B;">/bin/bash</span></span>
<span class="line"><span style="color:#FFCB6B;">/sbin/nologin</span></span>
<span class="line"><span style="color:#FFCB6B;">/bin/zsh</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>其实<code>chsh -l</code>也是来查看这个文件。</p><p><strong>查看当前正在使用的shell：</strong></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">rocrocket@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;">$ echo $SHELL</span></span>
<span class="line"><span style="color:#FFCB6B;">/bin/bash</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>注意SHELL一定要是大写。可以看到，目前使用的shell是<code>/bin/bash</code></p><p><strong>把我的shell改成zsh：</strong></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">rocrocket@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;">$ chsh -s /bin/zsh</span></span>
<span class="line"><span style="color:#FFCB6B;">Changing</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">shell</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">for</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">rocrocket.</span></span>
<span class="line"><span style="color:#FFCB6B;">Password:</span></span>
<span class="line"><span style="color:#FFCB6B;">Shell</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">changed.</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">rocrocket@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;">$</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>使用chsh加选项<code>-s</code>就可以修改登录的shell了！你会发现你现在执行<code>echo $SHELL</code>后仍然输出为<code>/bin/bash</code>，这是因为你需要重启你的shell才完全投入到zsh怀抱中去。<code>chsh -s</code>其实修改的就是<code>/etc/passwd</code>文件里和你的用户名相对应的那一行。现在来查看下：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">rocrocket@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;">$ cat /etc/passwd</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">grep</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">^rocrocket</span></span>
<span class="line"><span style="color:#FFCB6B;">rocrocket:x:500:500:rocrocket,China:/rocrocket/PSB/home:/bin/zsh</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>你可以发现输出内容的最后部分已经变成了<code>/bin/zsh</code>了，下次重启的时候，linux就会读取这一命令来启动shell了！</p><p><strong>把shell修改回/bin/bash：</strong></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">rocrocket@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;">$ chsh -s /bin/bash</span></span>
<span class="line"><span style="color:#FFCB6B;">Changing</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">shell</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">for</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">rocrocket.</span></span>
<span class="line"><span style="color:#FFCB6B;">Password:</span></span>
<span class="line"><span style="color:#FFCB6B;">Shell</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">changed.</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,27),o=[p];function c(r,t,i,F,h,d){return a(),n("div",null,o)}const u=s(e,[["render",c]]);export{y as __pageData,u as default};
