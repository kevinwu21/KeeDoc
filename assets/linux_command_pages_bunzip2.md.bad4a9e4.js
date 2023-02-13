import{_ as s,c as a,o as e,a as n}from"./app.82736834.js";const F=JSON.parse('{"title":"bunzip2","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/bunzip2.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/bunzip2.md"},p=n(`<h1 id="bunzip2" tabindex="-1">bunzip2 <a class="header-anchor" href="#bunzip2" aria-hidden="true">#</a></h1><p>可解压缩.bz2格式的压缩文件。</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p>bzip2可以对文件进行压缩与解压缩。此命令类似于“gzip/gunzip”命令，只能对文件进行压缩。对于目录只能压缩目录下的所有文件，压缩完成后，在目录下生成以“.bz2”为后缀的压缩包。<strong>bunzip2其实是bzip2的符号链接</strong>，即软链接，因此解压都可以通过bzip2 -d实现。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">bunzip2(选项</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">参数</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-f或--force：解压缩时，若输出的文件与现有文件同名时，预设不会覆盖现有的文件；</span></span>
<span class="line"><span style="color:#FFCB6B;">-k或——keep：在解压缩后，预设会删除原来的压缩文件。若要保留压缩文件，请使用此参数；</span></span>
<span class="line"><span style="color:#FFCB6B;">-s或——small：降低程序执行时，内存的使用量；</span></span>
<span class="line"><span style="color:#FFCB6B;">-v或——verbose：解压缩文件时，显示详细的信息；</span></span>
<span class="line"><span style="color:#FFCB6B;">-l，--license，-V或——version：显示版本信息。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h3><p>.bz2压缩包：指定需要解压缩的.bz2压缩包。</p><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><p>将<code>/opt</code>目录下的etc.zip、var.zip和backup.zip进行压缩，设置压缩率为最高，同时在压缩完毕后不删除原始文件，显示压缩过程的详细信息。</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">bzip2</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-9vk</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/opt/etc.zip</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/opt/var.zip</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/opt/backup.zip</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>压缩完毕后，在<code>/opt</code>下就会生成相应的etc.zip.bz2、var.zip.bz2和backup.zip.bz2文件。</p><p>解压缩：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">bunzip2</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/opt/etc.zip.bz2</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,16),i=[p];function r(t,c,o,d,b,h){return e(),a("div",null,i)}const m=s(l,[["render",r]]);export{F as __pageData,m as default};
