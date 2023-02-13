import{_ as s,c as a,o as n,a as l}from"./app.82736834.js";const y=JSON.parse('{"title":"pushd","description":"","frontmatter":{},"headers":[{"level":2,"title":"概要","slug":"概要","link":"#概要","children":[]},{"level":2,"title":"主要用途","slug":"主要用途","link":"#主要用途","children":[]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"返回值","slug":"返回值","link":"#返回值","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]},{"level":3,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}]}],"relativePath":"linux/command/pages/pushd.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/pushd.md"},p=l(`<h1 id="pushd" tabindex="-1">pushd <a class="header-anchor" href="#pushd" aria-hidden="true">#</a></h1><p>将目录添加到目录堆栈顶部。</p><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#EEFFFF;">pushd </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-n</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">+N </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">-N</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> dir</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="主要用途" tabindex="-1">主要用途 <a class="header-anchor" href="#主要用途" aria-hidden="true">#</a></h2><ul><li><p>将目录添加到目录堆栈顶部，切换当前工作目录到该目录。</p></li><li><p>旋转目录堆栈，使堆栈的新顶部成为当前工作目录。</p></li><li><p>没有参数时，交换目录堆栈的前两个目录。</p></li></ul><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-n</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">抑制添加目录引起的当前工作目录变化。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h2><p>+N（可选）：不带参数执行<code>dirs</code>命令显示的列表中，左起的第N个目录将作为堆栈顶部，在它前面的会移动到底部。（从0开始计数）</p><p>-N（可选）：不带参数执行<code>dirs</code>命令显示的列表中，右起的第N个目录将作为堆栈顶部，在它前面的会移动到底部。（从0开始计数）</p><p>dir（可选）：要推送的目录。</p><h2 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-hidden="true">#</a></h2><p>返回成功除非提供了非法选项或执行出现错误。</p><h2 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#545454;font-style:italic;"># 添加目录到堆栈，改变了当前工作目录。</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">user2@pc </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;">$ dirs</span></span>
<span class="line"><span style="color:#89DDFF;">~</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">user2@pc </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;">$ pushd </span><span style="color:#89DDFF;">~</span><span style="color:#EEFFFF;">/Desktop</span></span>
<span class="line"><span style="color:#89DDFF;">~</span><span style="color:#EEFFFF;">/Desktop </span><span style="color:#89DDFF;">~</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">user2@pc Desktop</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;">$ </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#545454;font-style:italic;"># 添加目录到堆栈，当前工作目录不变。</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">user2@pc </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;">$ dirs</span></span>
<span class="line"><span style="color:#89DDFF;">~</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">user2@pc </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;">$ pushd -n </span><span style="color:#89DDFF;">~</span><span style="color:#EEFFFF;">/Desktop</span></span>
<span class="line"><span style="color:#89DDFF;">~</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">~</span><span style="color:#EEFFFF;">/Desktop</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">user2@pc </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;">$ pushd -n </span><span style="color:#89DDFF;">~</span><span style="color:#EEFFFF;">/Pictures</span></span>
<span class="line"><span style="color:#89DDFF;">~</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">~</span><span style="color:#EEFFFF;">/Pictures </span><span style="color:#89DDFF;">~</span><span style="color:#EEFFFF;">/Desktop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#545454;font-style:italic;"># 调整顺序。</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">user2@pc </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;">$ pushd +</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">~</span><span style="color:#EEFFFF;">/Pictures </span><span style="color:#89DDFF;">~</span><span style="color:#EEFFFF;">/Desktop </span><span style="color:#89DDFF;">~</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">user2@pc </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;">$ pushd -</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">~</span><span style="color:#EEFFFF;">/Desktop </span><span style="color:#89DDFF;">~</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">~</span><span style="color:#EEFFFF;">/Pictures</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">user2@pc </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;">$ pushd</span></span>
<span class="line"><span style="color:#89DDFF;">~</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">~</span><span style="color:#EEFFFF;">/Desktop </span><span style="color:#89DDFF;">~</span><span style="color:#EEFFFF;">/Pictures</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-hidden="true">#</a></h3><ol><li><code>bash</code>的目录堆栈命令包括<code>dirs popd pushd</code>。</li><li>当前目录始终是目录堆栈的顶部。</li><li>该命令是bash内建命令，相关的帮助信息请查看<code>help</code>命令。</li></ol><h3 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-hidden="true">#</a></h3><ul><li><a href="https://superuser.com/questions/784450/popd-and-pushd-behavior-with-n-option" target="_blank" rel="noreferrer">popd、pushd命令&#39;-n&#39;选项的行为</a></li></ul>`,21),o=[p];function r(F,c,t,i,d,h){return n(),a("div",null,o)}const D=s(e,[["render",r]]);export{y as __pageData,D as default};
