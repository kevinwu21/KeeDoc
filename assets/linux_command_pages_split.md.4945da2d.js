import{_ as s,c as a,o as n,a as l}from"./app.82736834.js";const C=JSON.parse('{"title":"split","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/split.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/split.md"},e=l(`<h1 id="split" tabindex="-1">split <a class="header-anchor" href="#split" aria-hidden="true">#</a></h1><p>分割任意大小的文件</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>split命令</strong> 可以将一个大文件分割成很多个小文件，有时需要将文件分割成更小的片段，比如为提高可读性，生成日志等。</p><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-b：值为每一输出档案的大小，单位为</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">byte。</span></span>
<span class="line"><span style="color:#FFCB6B;">-C：每一输出档中，单行的最大</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">byte</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">数。</span></span>
<span class="line"><span style="color:#FFCB6B;">-d：使用数字作为后缀。</span></span>
<span class="line"><span style="color:#FFCB6B;">-l：值为每一输出档的行数大小。</span></span>
<span class="line"><span style="color:#FFCB6B;">-a：指定后缀长度(默认为2</span><span style="color:#EEFFFF;">)。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><p>生成一个大小为100KB的测试文件：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost split</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"># dd if</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">/dev/zero</span><span style="color:#EEFFFF;"> bs</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">100k</span><span style="color:#EEFFFF;"> count</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#EEFFFF;"> of</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">date.file</span></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#EEFFFF;">+</span><span style="color:#F78C6C;">0</span><span style="color:#EEFFFF;"> records </span><span style="color:#89DDFF;font-style:italic;">in</span></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#EEFFFF;">+</span><span style="color:#F78C6C;">0</span><span style="color:#EEFFFF;"> records out</span></span>
<span class="line"><span style="color:#F78C6C;">102400</span><span style="color:#EEFFFF;"> bytes </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">102</span><span style="color:#EEFFFF;"> kB</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;"> copied, </span><span style="color:#F78C6C;">0.00043</span><span style="color:#EEFFFF;"> seconds, </span><span style="color:#F78C6C;">238</span><span style="color:#EEFFFF;"> MB/s</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>使用split命令将上面创建的date.file文件分割成大小为10KB的小文件：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost split</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"># split -b 10k date.file </span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost split</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"># ls</span></span>
<span class="line"><span style="color:#FFCB6B;">date.file</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">xaa</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">xab</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">xac</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">xad</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">xae</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">xaf</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">xag</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">xah</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">xai</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">xaj</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>文件被分割成多个带有字母的后缀文件，如果想用数字后缀可使用-d参数，同时可以使用-a length来指定后缀的长度：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost split</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"># split -b 10k date.file -d -a </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost split</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"># ls</span></span>
<span class="line"><span style="color:#FFCB6B;">date.file</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">x000</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">x001</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">x002</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">x003</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">x004</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">x005</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">x006</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">x007</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">x008</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">x009</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>为分割后的文件指定文件名的前缀：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost split</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"># split -b 10k date.file -d -a </span><span style="color:#F78C6C;">3</span><span style="color:#EEFFFF;"> split_file</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost split</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"># ls</span></span>
<span class="line"><span style="color:#FFCB6B;">date.file</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">split_file000</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">split_file001</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">split_file002</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">split_file003</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">split_file004</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">split_file005</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">split_file006</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">split_file007</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">split_file008</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">split_file009</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>使用-l选项根据文件的行数来分割文件，例如把文件分割成每个包含10行的小文件：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">split</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-l</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">10</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">date.file</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,17),o=[e];function F(t,r,c,i,E,y){return n(),a("div",null,o)}const D=s(p,[["render",F]]);export{C as __pageData,D as default};
