import{_ as s,c as a,o as e,a as n}from"./app.82736834.js";const u=JSON.parse('{"title":"bg","description":"","frontmatter":{},"headers":[{"level":2,"title":"概要","slug":"概要","link":"#概要","children":[]},{"level":2,"title":"主要用途","slug":"主要用途","link":"#主要用途","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"返回值","slug":"返回值","link":"#返回值","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]}]}],"relativePath":"linux/command/pages/bg.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/bg.md"},p=n(`<h1 id="bg" tabindex="-1">bg <a class="header-anchor" href="#bg" aria-hidden="true">#</a></h1><p>将前台终端作业移动到后台运行</p><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">bg</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">job_spec ...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="主要用途" tabindex="-1">主要用途 <a class="header-anchor" href="#主要用途" aria-hidden="true">#</a></h2><ul><li><p>用于将作业放到后台运行，使前台可以执行其他任务。该命令的运行效果与在指令后面添加符号<code>&amp;</code>的效果是相同的，都是将其放到系统后台执行。</p></li><li><p>若后台任务中只有一个，则使用该命令时可以省略任务号。</p></li></ul><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h2><p>job_spec（可选）：指定要移动到后台执行的作业标识符，可以是一到多个。</p><h2 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-hidden="true">#</a></h2><p>返回成功除非未开启作业控制或发生了错误。</p><h2 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#545454;font-style:italic;"># 运行sleep命令，然后按下ctrl+z。</span></span>
<span class="line"><span style="color:#FFCB6B;">sleep</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">60</span></span>
<span class="line"><span style="color:#FFCB6B;">^Z</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;">+  Stopped                 sleep </span><span style="color:#F78C6C;">60</span></span>
<span class="line"></span>
<span class="line"><span style="color:#545454;font-style:italic;"># 使用bg命令使得作业在后台运行。</span></span>
<span class="line"><span style="color:#82AAFF;">bg</span><span style="color:#EEFFFF;"> %1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#545454;font-style:italic;"># 返回信息：</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;">+ sleep </span><span style="color:#F78C6C;">60</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&amp;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-hidden="true">#</a></h3><ol><li><code>bash</code>的作业控制命令包括<code>bg fg kill wait disown suspend</code>。</li><li>该命令需要<code>set</code>选项<code>monitor</code>处于开启状态时才能执行；查看作业控制状态：输入<code>set -o</code>查看<code>monitor</code>行；执行<code>set -o monitor</code>或<code>set -m</code>开启该选项。</li><li>该命令是bash内建命令，相关的帮助信息请查看<code>help</code>命令。</li></ol>`,14),o=[p];function r(c,i,t,d,h,F){return e(),a("div",null,o)}const m=s(l,[["render",r]]);export{u as __pageData,m as default};
