import{_ as s,c as n,o as a,a as l}from"./app.82736834.js";const C=JSON.parse('{"title":"apropos","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"返回值","slug":"返回值","link":"#返回值","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/apropos.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/apropos.md"},o=l(`<h1 id="apropos" tabindex="-1">apropos <a class="header-anchor" href="#apropos" aria-hidden="true">#</a></h1><p>在 whatis 数据库中查找字符串</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>apropos命令</strong> 在一些特定的包含系统命令的简短描述的数据库文件里查找关键字，然后把结果送到标准输出。</p><p>如果你不知道完成某个特定任务所需要命令的名称，可以使用一个关键字通过Linux apropos实用程序来搜索它。该实用程序可以搜索关键字并且显示所有包含匹配项的man页面的简短描述。另外，使用man实用程序和-k（关键字）选项，可以得到和用Linux apropos实用程序相同的结果（实际上是相同的命令）。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">apropos</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-dalhvV</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">-[w</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">-r</span><span style="color:#EEFFFF;">] </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-s section</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-m system</span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">,...</span><span style="color:#89DDFF;">]]</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-M path</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-L locale</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> -C </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">file</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> keyword ...</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-d,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">--debug：输出调试信息。</span></span>
<span class="line"><span style="color:#FFCB6B;">-v,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">--verbose：输出详细的警告信息。</span></span>
<span class="line"><span style="color:#FFCB6B;">-r,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">--</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">regex：将每个keyword作为正则表达式解释。这是默认行为。每个keyword将匹配手册页和描述。</span></span>
<span class="line"><span style="color:#FFCB6B;">-w,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">--wildcard：将每个keyword作为shell样式的通配符解释。</span></span>
<span class="line"><span style="color:#FFCB6B;">-e,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">--exact：每个keyword将精确匹配手册页名字和描述。</span></span>
<span class="line"><span style="color:#FFCB6B;">-a,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">--and：只显示匹配所有keyword的手册页和描述。默认显示匹配任何keyword的项。</span></span>
<span class="line"><span style="color:#FFCB6B;">-l,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">--long：不根据终端宽度缩减输出。</span></span>
<span class="line"><span style="color:#FFCB6B;">-s</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">section,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">--section</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">section：只查找指定的手册section。</span></span>
<span class="line"><span style="color:#FFCB6B;">-m</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">system[,...],</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">--systems=system</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">,...</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">：用于查找其它操作系统的手册页。</span></span>
<span class="line"><span style="color:#FFCB6B;">-M</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">path,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">--manpath=path：指定从其它以冒号分隔的手册页层次查找。默认使用</span><span style="color:#EEFFFF;">$MANPATH环境变量</span><span style="color:#C3E88D;">。这个选项覆盖</span><span style="color:#EEFFFF;">$MANPATH的内容</span><span style="color:#C3E88D;">。</span></span>
<span class="line"><span style="color:#FFCB6B;">-L</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">locale,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">--locale=locale：apropos调用C函数setlocale来得到当前本地化信息，包括</span><span style="color:#EEFFFF;">$LC_MESSAGE和$LANG</span><span style="color:#C3E88D;">。使用该选项提供一个locale字符串来临时更改本地化信息。</span></span>
<span class="line"><span style="color:#FFCB6B;">-C</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">file,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">--config-file=file：使用这个用户配置文件而不是默认的~/.manpath。</span></span>
<span class="line"><span style="color:#FFCB6B;">-h,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">--help：打印帮助信息并退出。</span></span>
<span class="line"><span style="color:#FFCB6B;">-V,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">--version：打印版本信息并退出。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-hidden="true">#</a></h3><p>返回0表示成功，1表示用法、语法或配置文件错误，2表示操作错误，16表示没有找到匹配的内容。</p><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;"># man -k who</span></span>
<span class="line"><span style="color:#FFCB6B;">at.allow</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">at</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;">        </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">determine</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">who</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">can</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">submit</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">jobs</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">via</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">at</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">or</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">batch</span></span>
<span class="line"><span style="color:#FFCB6B;">at.deny</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">at</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;">         </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">determine</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">who</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">can</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">submit</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">jobs</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">via</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">at</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">or</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">batch</span></span>
<span class="line"><span style="color:#FFCB6B;">jwhois</span><span style="color:#EEFFFF;">               </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">client</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">for</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">the</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">whois</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">service</span></span>
<span class="line"><span style="color:#FFCB6B;">jwhois</span><span style="color:#EEFFFF;">              </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">rpm</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Internet</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">whois/nicname</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">client.</span></span>
<span class="line"><span style="color:#FFCB6B;">Net::LDAP::Extension::whoami</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#EEFFFF;">3pm</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">LDAP</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Who</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">am</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">I?</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Operation</span></span>
<span class="line"><span style="color:#FFCB6B;">w</span><span style="color:#EEFFFF;">                    </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Show</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">who</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">is</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">logged</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">on</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">and</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">what</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">they</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">are</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">doing</span></span>
<span class="line"><span style="color:#FFCB6B;">who</span><span style="color:#EEFFFF;">                  </span><span style="color:#89DDFF;">(</span><span style="color:#EEFFFF;">1p</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">display</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">who</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">is</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">on</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">the</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">system</span></span>
<span class="line"><span style="color:#FFCB6B;">who</span><span style="color:#EEFFFF;">                  </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">show</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">who</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">is</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">logged</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">on</span></span>
<span class="line"><span style="color:#FFCB6B;">whoami</span><span style="color:#EEFFFF;">               </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">print</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">effective</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">userid</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;"># apropos who</span></span>
<span class="line"><span style="color:#FFCB6B;">at.allow</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">at</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;">        </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">determine</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">who</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">can</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">submit</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">jobs</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">via</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">at</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">or</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">batch</span></span>
<span class="line"><span style="color:#FFCB6B;">at.deny</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">at</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;">         </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">determine</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">who</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">can</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">submit</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">jobs</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">via</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">at</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">or</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">batch</span></span>
<span class="line"><span style="color:#FFCB6B;">jwhois</span><span style="color:#EEFFFF;">               </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">client</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">for</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">the</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">whois</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">service</span></span>
<span class="line"><span style="color:#FFCB6B;">jwhois</span><span style="color:#EEFFFF;">              </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">rpm</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Internet</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">whois/nicname</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">client.</span></span>
<span class="line"><span style="color:#FFCB6B;">Net::LDAP::Extension::WhoAmI</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#EEFFFF;">3pm</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">LDAP</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Who</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">am</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">I?</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Operation</span></span>
<span class="line"><span style="color:#FFCB6B;">w</span><span style="color:#EEFFFF;">                    </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Show</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">who</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">is</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">logged</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">on</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">and</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">what</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">they</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">are</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">doing</span></span>
<span class="line"><span style="color:#FFCB6B;">who</span><span style="color:#EEFFFF;">                  </span><span style="color:#89DDFF;">(</span><span style="color:#EEFFFF;">1p</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">display</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">who</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">is</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">on</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">the</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">system</span></span>
<span class="line"><span style="color:#FFCB6B;">who</span><span style="color:#EEFFFF;">                  </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">show</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">who</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">is</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">logged</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">on</span></span>
<span class="line"><span style="color:#FFCB6B;">whoami</span><span style="color:#EEFFFF;">               </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">print</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">effective</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">userid</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>查找手册页名字和描述中包含emacs和vi的手册页：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">apropos</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-a</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">emacs</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">vi</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,15),F=[o];function e(r,c,t,E,y,D){return a(),n("div",null,F)}const d=s(p,[["render",e]]);export{C as __pageData,d as default};
