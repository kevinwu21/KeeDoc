import{_ as s,c as n,o as a,a as l}from"./app.82736834.js";const u=JSON.parse('{"title":"jq","description":"","frontmatter":{},"headers":[{"level":3,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[]},{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"例子","slug":"例子","link":"#例子","children":[]}],"relativePath":"linux/command/pages/jq.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/jq.md"},o=l(`<h1 id="jq" tabindex="-1">jq <a class="header-anchor" href="#jq" aria-hidden="true">#</a></h1><p>一个灵活的轻量级命令行JSON处理器</p><h3 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h3><p>jq 是 stedolan 开发的一个轻量级的和灵活的命令行JSON处理器，源码请参考 <a href="https://github.com/stedolan/jq" target="_blank" rel="noreferrer">jq 项目主页</a></p><p>jq 用于处理JSON输入，将给定过滤器应用于其JSON文本输入并在标准输出上将过滤器的结果生成为JSON。</p><p>最简单的过滤器是<code>.</code>，它将jq的输入未经修改地复制到其输出中（格式设置除外）。</p><p>请注意，jq 当前仅支持64位双精度浮点数（IEEE754）。</p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#545454;font-style:italic;"># Debian系，如 Ubuntu</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">apt-get</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">install</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">jq</span></span>
<span class="line"></span>
<span class="line"><span style="color:#545454;font-style:italic;"># RedHat系, 如 CentOS</span></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">install</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">jq</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">jq</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">options</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">jq</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">filte</span><span style="color:#EEFFFF;">r</span><span style="color:#89DDFF;">&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">file...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#FFCB6B;">jq</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">options</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">--args</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">jq</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">filte</span><span style="color:#EEFFFF;">r</span><span style="color:#89DDFF;">&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">strings...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#FFCB6B;">jq</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">options</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">--jsonargs</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">jq</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">filte</span><span style="color:#EEFFFF;">r</span><span style="color:#89DDFF;">&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">JSON_TEXTS...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-c</span><span style="color:#EEFFFF;">               </span><span style="color:#C3E88D;">紧凑而不是漂亮的输出</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">-n</span><span style="color:#EEFFFF;">               </span><span style="color:#C3E88D;">使用</span><span style="color:#89DDFF;">\`</span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">\`</span><span style="color:#FFCB6B;">作为单个输入值</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">-e</span><span style="color:#EEFFFF;">               </span><span style="color:#C3E88D;">根据输出设置退出状态代码</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">-s</span><span style="color:#EEFFFF;">               </span><span style="color:#C3E88D;">将所有输入读取（吸取）到数组中；应用过滤器</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">-r</span><span style="color:#EEFFFF;">               </span><span style="color:#C3E88D;">输出原始字符串，而不是JSON文本</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">-R</span><span style="color:#EEFFFF;">               </span><span style="color:#C3E88D;">读取原始字符串，而不是JSON文本</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">-C</span><span style="color:#EEFFFF;">               </span><span style="color:#C3E88D;">为JSON着色</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">-M</span><span style="color:#EEFFFF;">               </span><span style="color:#C3E88D;">单色（不要为JSON着色）</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">-S</span><span style="color:#EEFFFF;">               </span><span style="color:#C3E88D;">在输出上排序对象的键</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">--tab</span><span style="color:#EEFFFF;">            </span><span style="color:#C3E88D;">使用制表符进行缩进</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">--arg</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">a</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">v</span><span style="color:#EEFFFF;">        </span><span style="color:#C3E88D;">将变量</span><span style="color:#EEFFFF;">$a设置为value</span><span style="color:#89DDFF;">&lt;</span><span style="color:#EEFFFF;">v</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#FFCB6B;">--argjson</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">a</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">v</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">将变量</span><span style="color:#EEFFFF;">$a设置为JSON </span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&lt;</span><span style="color:#EEFFFF;">v</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#FFCB6B;">--slurpfile</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">a</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">f</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">将变量</span><span style="color:#EEFFFF;">$a设置为从</span><span style="color:#89DDFF;">&lt;</span><span style="color:#EEFFFF;">f</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">读取的JSON文本数组</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">--rawfile</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">a</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">f</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">将变量</span><span style="color:#EEFFFF;">$a设置为包含</span><span style="color:#89DDFF;">&lt;</span><span style="color:#EEFFFF;">f</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">内容的字符串</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">--args</span><span style="color:#EEFFFF;">           </span><span style="color:#C3E88D;">其余参数是字符串参数，而不是文件</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">--jsonargs</span><span style="color:#EEFFFF;">       </span><span style="color:#C3E88D;">其余的参数是JSON参数，而不是文件</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">--</span><span style="color:#EEFFFF;">               </span><span style="color:#C3E88D;">终止参数处理</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-hidden="true">#</a></h3><p><code>.</code>: 以漂亮的方式输出</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">echo</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{ &quot;foo&quot;: { &quot;bar&quot;: { &quot;baz&quot;: 123 } } }</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">jq</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C3E88D;">bar</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      &quot;</span><span style="color:#C3E88D;">baz</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;">: </span><span style="color:#F78C6C;">123</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>.foo, .foo.bar, .foo?</code>: 获取一个键的值</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">echo</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;foo&quot;: 42, &quot;bar&quot;: &quot;less interesting data&quot;}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">jq</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.foo</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F78C6C;">42</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>.[], .[]?, .[2], .[10:15]</code>: 数组运算</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">echo</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[{&quot;name&quot;:&quot;JSON&quot;, &quot;good&quot;:true}, {&quot;name&quot;:&quot;XML&quot;, &quot;good&quot;:false}]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">jq</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.[1]</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">XML</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C3E88D;">good</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;">: </span><span style="color:#89DDFF;">false</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>[], {}</code>: 构造一个数组/对象</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">echo</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;user&quot;:&quot;stedolan&quot;,&quot;titles&quot;:[&quot;JQ Primer&quot;, &quot;More JQ&quot;]}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">jq</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{user, title: .titles[]}</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">stedolan</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C3E88D;">title</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">JQ Primer</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">stedolan</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C3E88D;">title</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">More JQ</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><code>length</code>: 计算一个值的长度</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">echo</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[[1,2], &quot;string&quot;, {&quot;a&quot;:2}, null]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">jq</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.[] | length</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;">                                  </span></span>
<span class="line"><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#F78C6C;">6</span></span>
<span class="line"><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F78C6C;">0</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>keys</code>: 取出数组中的键</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">echo</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;abc&quot;: 1, &quot;abcd&quot;: 2, &quot;Foo&quot;: 3}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">jq</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">keys</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;">                                        </span></span>
<span class="line"><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C3E88D;">Foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C3E88D;">abcd</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>,</code>: 使用多个过滤器</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">echo</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{ &quot;foo&quot;: 42, &quot;bar&quot;: &quot;something else&quot;, &quot;baz&quot;: true}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">jq</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.foo, .bar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span></span>
<span class="line"><span style="color:#F78C6C;">42</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">something else</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>|</code>: 通过管道将一个过滤器的输出当做下一个过滤器的输入</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">echo</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[{&quot;name&quot;:&quot;JSON&quot;, &quot;good&quot;:true}, {&quot;name&quot;:&quot;XML&quot;, &quot;good&quot;:false}]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">jq</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.[] | .name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;">                                                 </span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">JSON</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">XML</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>select(foo)</code>: 如果foo返回true，则输入保持不变</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">echo</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[1,5,3,0,7]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">jq</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">map(select(. &gt;= 2))</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;">                                                    </span></span>
<span class="line"><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">5</span><span style="color:#EEFFFF;">,</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">3</span><span style="color:#EEFFFF;">,</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">7</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>map(foo)</code>: 每个输入调用过滤器</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">echo</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[1,2,3]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">jq</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">map(.+1)</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">2</span><span style="color:#EEFFFF;">,</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">3</span><span style="color:#EEFFFF;">,</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">4</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>if-then-else-end</code>: 条件判断</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">$</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">echo</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">jq</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">if . == 0 then &quot;zero&quot; elif . == 1 then &quot;one&quot; else &quot;many&quot; end</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">many</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>\\(foo)</code>: 在字符串中插入值并进行运算</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">echo</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">42</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">jq</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&quot;The input was \\(.), which is one less than \\(.+1)&quot;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;">          </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The input was 42, which is one less than 43</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,38),e=[o];function F(r,c,t,y,i,D){return a(),n("div",null,e)}const b=s(p,[["render",F]]);export{u as __pageData,b as default};
