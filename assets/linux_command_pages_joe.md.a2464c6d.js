import{_ as s,c as n,o as a,a as e}from"./app.82736834.js";const h=JSON.parse('{"title":"joe","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]}]}],"relativePath":"linux/command/pages/joe.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/joe.md"},p=e(`<h1 id="joe" tabindex="-1">joe <a class="header-anchor" href="#joe" aria-hidden="true">#</a></h1><p>强大的纯文本编辑器</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>joe命令</strong> 是一款功能强大的纯文本编辑器，拥有众多编写程序和文本的优良特性。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">joe(选项</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">参数</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-force：强制在最后一行的结尾处加上换行符号；</span></span>
<span class="line"><span style="color:#FFCB6B;">-lines&lt;行数&gt;：设置行数；</span></span>
<span class="line"><span style="color:#FFCB6B;">-lightoff：选取的区块在执行完区块命令后，就会恢复成原来的状态；</span></span>
<span class="line"><span style="color:#FFCB6B;">-autoindent：自动缩排；</span></span>
<span class="line"><span style="color:#FFCB6B;">-backpath：&lt;目录&gt;：指定备份文件的目录；</span></span>
<span class="line"><span style="color:#FFCB6B;">-beep：编辑时，若有错误即发出哔声；</span></span>
<span class="line"><span style="color:#FFCB6B;">-columns&lt;栏位&gt;：设置栏数；</span></span>
<span class="line"><span style="color:#FFCB6B;">-csmode：可执行连续查找模式；</span></span>
<span class="line"><span style="color:#FFCB6B;">-dopadding：是程序跟tty间存在缓冲区；</span></span>
<span class="line"><span style="color:#FFCB6B;">-exask：在程序中，执行“Ctrl+k+x”时，会先确认是否要保存文件；</span></span>
<span class="line"><span style="color:#FFCB6B;">-force：强制在最后一行的结尾处加上换行符号；</span></span>
<span class="line"><span style="color:#FFCB6B;">-help：执行程序时一并显示帮助；</span></span>
<span class="line"><span style="color:#FFCB6B;">-keepup：在进入程序后，画面上方为状态列；</span></span>
<span class="line"><span style="color:#FFCB6B;">-marking：在选取区块时，反白区块会随着光标移动；</span></span>
<span class="line"><span style="color:#FFCB6B;">-mid：当光标移出画面时，即自动卷页，使光标回到中央；</span></span>
<span class="line"><span style="color:#FFCB6B;">-nobackups：不建立备份文件；</span></span>
<span class="line"><span style="color:#FFCB6B;">-nonotice：程序执行时，不显示版本信息；</span></span>
<span class="line"><span style="color:#FFCB6B;">-nosta：程序执行时，不显示状态列；</span></span>
<span class="line"><span style="color:#FFCB6B;">-noxon：尝试取消“Ctrl+s”和“Ctrl+q”键的功能；</span></span>
<span class="line"><span style="color:#FFCB6B;">-orphan：若同时开启一个以上的文件，则其他文件会置于独立的缓冲区，而不会另外开启编辑区；</span></span>
<span class="line"><span style="color:#FFCB6B;">-pg&lt;行数&gt;：按“PageUp”或“PageDown”换页时，所要保留前一页的行数；</span></span>
<span class="line"><span style="color:#FFCB6B;">-skiptop&lt;行数&gt;：不使用屏幕上方指定的行数。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h3><p>文件：指定要编辑的文件。</p>`,10),r=[p];function c(i,o,t,d,b,F){return a(),n("div",null,r)}const B=s(l,[["render",c]]);export{h as __pageData,B as default};
