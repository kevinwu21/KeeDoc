import{_ as s,c as a,o as n,a as l}from"./app.82736834.js";const E=JSON.parse('{"title":"history","description":"","frontmatter":{},"headers":[{"level":2,"title":"概要","slug":"概要","link":"#概要","children":[]},{"level":2,"title":"主要用途","slug":"主要用途","link":"#主要用途","children":[]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"返回值","slug":"返回值","link":"#返回值","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]}]}],"relativePath":"linux/command/pages/history.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/history.md"},p=l(`<h1 id="history" tabindex="-1">history <a class="header-anchor" href="#history" aria-hidden="true">#</a></h1><p>显示或操作历史列表。</p><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">history</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-c</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-d offset</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">n</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#82AAFF;">history</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-anrw</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">filename</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#82AAFF;">history</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-ps</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">arg</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">arg...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="主要用途" tabindex="-1">主要用途 <a class="header-anchor" href="#主要用途" aria-hidden="true">#</a></h2><ul><li><p>显示历史列表。</p></li><li><p>操作历史列表。</p></li></ul><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-c</span><span style="color:#EEFFFF;">           </span><span style="color:#C3E88D;">清空历史列表。</span></span>
<span class="line"><span style="color:#FFCB6B;">-d</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">offset</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">根据offset删除记录。如果是正数则表示offset位置的记录，如果为负数则表示从结尾向前offset位置的记录。</span></span>
<span class="line"><span style="color:#FFCB6B;">-a</span><span style="color:#EEFFFF;">           </span><span style="color:#C3E88D;">将当前终端的历史记录行添加到历史记录文件。</span></span>
<span class="line"><span style="color:#FFCB6B;">-n</span><span style="color:#EEFFFF;">           </span><span style="color:#C3E88D;">将尚未从历史文件中读取的历史行追加到当前历史列表中。</span></span>
<span class="line"><span style="color:#FFCB6B;">-r</span><span style="color:#EEFFFF;">           </span><span style="color:#C3E88D;">读取历史文件，并将其内容附加到历史列表中。</span></span>
<span class="line"><span style="color:#FFCB6B;">-w</span><span style="color:#EEFFFF;">           </span><span style="color:#C3E88D;">将当前历史记录列表附加到历史记录文件中并且附加它们到历史列表中。</span></span>
<span class="line"><span style="color:#FFCB6B;">-p</span><span style="color:#EEFFFF;">           </span><span style="color:#C3E88D;">在每个arg上执行历史记录扩展并在标准输出上显示结果，而不将结果存储在历史记录列表中。</span></span>
<span class="line"><span style="color:#FFCB6B;">-s</span><span style="color:#EEFFFF;">           </span><span style="color:#C3E88D;">将每个arg作为单个条目附加到历史记录列表。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h2><p>n：可选，只列出最近的n条记录。</p><p>filename：可选，表示历史文件；默认调用顺序为<code>filename</code>、环境变量<code>HISTFILE</code>、<code>~/.bash_history</code>。</p><h2 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-hidden="true">#</a></h2><p>返回成功，除非提供了非法选项或出现了错误。</p><h2 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-hidden="true">#</a></h2><p>使用history命令显示最近使用的 5 条历史命令</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;"># history </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#EEFFFF;">   </span><span style="color:#FFCB6B;">97</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">cd</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">.ssh/</span></span>
<span class="line"><span style="color:#EEFFFF;">   </span><span style="color:#FFCB6B;">98</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">ls</span></span>
<span class="line"><span style="color:#EEFFFF;">   </span><span style="color:#FFCB6B;">99</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">cat</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">known_hosts</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#FFCB6B;">100</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">exit</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#FFCB6B;">101</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">history</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">10</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>清空历史记录</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;"># history -c</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>删除制定的行</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;"># history -d </span><span style="color:#89DDFF;">&lt;</span><span style="color:#EEFFFF;">指定行号</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;"># history -d </span><span style="color:#F78C6C;">2243</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>快捷执行一条历史命令</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#545454;font-style:italic;"># 执行第 n 条历史命令</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;"># </span><span style="color:#89DDFF;">!</span><span style="color:#FFCB6B;">n</span></span>
<span class="line"></span>
<span class="line"><span style="color:#545454;font-style:italic;"># 执行最后一条 xxx 开头的命令</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;"># </span><span style="color:#89DDFF;">!</span><span style="color:#FFCB6B;">xxx</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-hidden="true">#</a></h3><ol><li>在命令行中，可以使用符号<code>!</code>执行指定序号的历史命令。例如，要执行第2个历史命令，则输入<code>!2</code>。</li><li>关闭终端后，历史列表将被写入历史文件<code>~/.bash_history</code>。</li><li>环境变量<code>HISTSIZE</code>决定了历史文件中命令的存储数量，默认存储1000条。</li><li>环境变量<code>HISTTIMEFORMAT</code>如果是非空值，则使用其值作为<code>strftime(3)</code>打印相关时间戳的格式字符串添加在每个显示的历史记录之前；否则不会打印时间戳。</li><li>该命令是bash内建命令，相关的帮助信息请查看<code>help</code>命令。</li></ol>`,24),o=[p];function r(c,t,F,i,d,y){return n(),a("div",null,o)}const b=s(e,[["render",r]]);export{E as __pageData,b as default};
