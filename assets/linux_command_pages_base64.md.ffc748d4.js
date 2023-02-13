import{_ as s,c as a,o as n,a as e}from"./app.82736834.js";const y=JSON.parse('{"title":"base64","description":"","frontmatter":{},"headers":[{"level":3,"title":"描述","slug":"描述","link":"#描述","children":[]},{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}],"relativePath":"linux/command/pages/base64.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/base64.md"},p=e(`<h1 id="base64" tabindex="-1">base64 <a class="header-anchor" href="#base64" aria-hidden="true">#</a></h1><p>base64 编码/解码文件或标准输入输出</p><h3 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-hidden="true">#</a></h3><p>base64将<code>文件</code>或<code>标准输入</code>编码或解码为标准输出;</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">base64</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">OPTION</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;">... </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">FILE</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-d,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">--decode</span><span style="color:#EEFFFF;">         </span><span style="color:#545454;font-style:italic;"># 解码</span></span>
<span class="line"><span style="color:#FFCB6B;">-i,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">--ignore-garbage</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;"># 解码时，忽略非字母字符</span></span>
<span class="line"><span style="color:#FFCB6B;">-w,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">--wrap=COLS</span><span style="color:#EEFFFF;">      </span><span style="color:#545454;font-style:italic;"># 在指定的字符数后自动换行(默认为76), 0 为禁用自动换行</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">--help</span><span style="color:#EEFFFF;">      </span><span style="color:#545454;font-style:italic;"># 显示此帮助说明并退出</span></span>
<span class="line"><span style="color:#FFCB6B;">--version</span><span style="color:#EEFFFF;">   </span><span style="color:#545454;font-style:italic;"># 输出版本信息并退出</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><p>编码字符串</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">printf</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">base64</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>编码文件</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">base64</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">file</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>解码</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">printf</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Zm9v</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">base64</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-d</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>解码文件</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">base64</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">file</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,17),r=[p];function o(t,c,i,d,F,b){return n(),a("div",null,r)}const u=s(l,[["render",o]]);export{y as __pageData,u as default};
