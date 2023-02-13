import{_ as s,c as n,o as a,a as l}from"./app.82736834.js";const b=JSON.parse('{"title":"dc","description":"","frontmatter":{},"headers":[{"level":2,"title":"说明","slug":"说明","link":"#说明","children":[]},{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]}]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":2,"title":"支持的运算","slug":"支持的运算","link":"#支持的运算","children":[]}],"relativePath":"linux/command/pages/dc.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/dc.md"},p=l(`<h1 id="dc" tabindex="-1">dc <a class="header-anchor" href="#dc" aria-hidden="true">#</a></h1><p>任意精度计算器</p><h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-hidden="true">#</a></h2><p>dc 是一款逆波兰表达式计算器，支持无限制精度的算术运算。它还允许您定义和调用宏。通常，dc从标准输入读取，也可以通过参数传入文件来求值。</p><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">dc</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">选项</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">文件...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-e,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">--expression=EXPR</span><span style="color:#EEFFFF;">    </span><span style="color:#545454;font-style:italic;"># 评估表达式</span></span>
<span class="line"><span style="color:#FFCB6B;">-f,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">--file=FILE</span><span style="color:#EEFFFF;">          </span><span style="color:#545454;font-style:italic;"># 评估文件内容</span></span>
<span class="line"><span style="color:#FFCB6B;">-h,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">--help</span><span style="color:#EEFFFF;">               </span><span style="color:#545454;font-style:italic;"># 显示此帮助并退出</span></span>
<span class="line"><span style="color:#FFCB6B;">-V,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">--version</span><span style="color:#EEFFFF;">            </span><span style="color:#545454;font-style:italic;"># 输出版本信息并退出</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">打印堆栈顶部的值并以换行符结束语句。</span></span>
<span class="line"><span style="color:#FFCB6B;">n</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">打印堆栈顶部的值并以空语句结束行。</span></span>
<span class="line"><span style="color:#FFCB6B;">f</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">打印整个堆栈，不做任何更改。</span></span>
<span class="line"><span style="color:#FFCB6B;">P</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">从栈顶弹出值。</span></span>
<span class="line"><span style="color:#FFCB6B;">c</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">清除堆栈。</span></span>
<span class="line"><span style="color:#FFCB6B;">d</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">复制顶部值并将其推入主堆栈。</span></span>
<span class="line"><span style="color:#FFCB6B;">r</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">反转堆栈中顶部两个元素的顺序。</span></span>
<span class="line"><span style="color:#FFCB6B;">Z</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">从堆栈中弹出值，计算其中的位数并压入该数字。</span></span>
<span class="line"><span style="color:#FFCB6B;">X</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">从堆栈中弹出值，计算其中的小数位数并压入该数字。</span></span>
<span class="line"><span style="color:#FFCB6B;">z</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">将堆栈长度推入堆栈。</span></span>
<span class="line"><span style="color:#FFCB6B;">i</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">从堆栈中弹出值并将其用作输入基数。</span></span>
<span class="line"><span style="color:#FFCB6B;">o</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">从堆栈中弹出值并将其用作输出基数。</span></span>
<span class="line"><span style="color:#FFCB6B;">k</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">从堆栈中弹出值并使用它来设置精度。</span></span>
<span class="line"><span style="color:#FFCB6B;">I</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">将输入基数的值推入堆栈。</span></span>
<span class="line"><span style="color:#FFCB6B;">O</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">将输出基数的值压入堆栈</span></span>
<span class="line"><span style="color:#FFCB6B;">K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">将精度值压入堆栈。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-hidden="true">#</a></h2><p>下面是 <code>dc</code> 命令在命令行完成的计算 <code>10 * 10</code> 得出结果 <code>100</code>，并推出的过程</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">dc</span><span style="color:#EEFFFF;">        </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">10</span><span style="color:#EEFFFF;">          </span><span style="color:#545454;font-style:italic;"># 1. 输入数字10</span></span>
<span class="line"><span style="color:#F78C6C;">10</span><span style="color:#EEFFFF;">          </span><span style="color:#545454;font-style:italic;"># 2. 输入数字10</span></span>
<span class="line"><span style="color:#89DDFF;">*</span><span style="color:#EEFFFF;">           </span><span style="color:#545454;font-style:italic;"># 3. 输入运算类型*表示乘</span></span>
<span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#EEFFFF;">           </span><span style="color:#545454;font-style:italic;"># 4. 输入p得到计算结果</span></span>
<span class="line"><span style="color:#F78C6C;">100</span></span>
<span class="line"><span style="color:#FFCB6B;">q</span><span style="color:#EEFFFF;">           </span><span style="color:#545454;font-style:italic;"># 5. 输入 q 退出 dc</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>示例显示在命令行结果 <code>509</code></p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">dc</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">--expression=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">50 10 * 9 + p</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F78C6C;">509</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="支持的运算" tabindex="-1">支持的运算 <a class="header-anchor" href="#支持的运算" aria-hidden="true">#</a></h2><p><code>+</code> 从堆栈中弹出两个值，将它们相加，然后压栈结果。</p><p><code>-</code> 弹出两个值，从弹出的第二个值中减去弹出的第一个值，并压栈结果。</p><p><code>*</code> 弹出两个值，将它们相乘，然后压栈结果。结果中分数位数取决于当前精度值和两个参数中的分数位数。</p><p><code>/</code> 弹出两个值，将弹出的第二个值与弹出的第一个值相除，然后推送结果。分数位数由精度值指定。</p><p><code>%</code> 弹出两个值，计算/命令将执行的除法的剩余部分，并推送该值。计算的值与序列 <code>Sd dld/Ld*- </code>计算的值相同。</p><p><code>~</code> 弹出两个值，将弹出的第二个值与弹出的第一个值相除。首先推送商，然后推送余数。除法中使用的小数位数由精度值指定。</p><p>（序列 SdSn lnld/lnld% 也可以完成此功能，但错误检查略有不同。）</p><p><code>^</code> 使用弹出的第一个值作为指数，第二个值作为基数，弹出两个值并进行幂运算。忽略指数的分数部分。</p><p><code>|</code> 弹出三个值并计算模幂。 弹出的第一个值用作约简模数； 这个值必须是一个非零数字，并且应该是一个整数。 弹出的第二个用作指数； 该值必须是非负数，并且该指数的任何小数部分都将被忽略。 弹出的第三个值是取幂的基数，它应该是一个整数。 对于小整数，这类似于序列 Sm^Lm%，但与 ^ 不同的是，此命令适用于任意大的指数。</p><p><code>v</code> 弹出一个值，计算其平方根，然后压栈它。精度值的最大值和参数的精度用于确定结果中的小数位数。</p>`,25),o=[p];function c(r,t,F,i,d,y){return a(),n("div",null,o)}const u=s(e,[["render",c]]);export{b as __pageData,u as default};
