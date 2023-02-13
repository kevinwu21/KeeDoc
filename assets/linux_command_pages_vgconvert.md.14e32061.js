import{_ as s,c as a,o as n,a as l}from"./app.82736834.js";const y=JSON.parse('{"title":"vgconvert","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/vgconvert.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/vgconvert.md"},p=l(`<h1 id="vgconvert" tabindex="-1">vgconvert <a class="header-anchor" href="#vgconvert" aria-hidden="true">#</a></h1><p>转换卷组元数据格式</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>vgconvert命令</strong> 用于转换指定LVM卷组的元数据格式，通常将“LVM1”格式的卷组转换为“LVM2”格式。转换卷组元数据前必须保证卷组处于非活动状态，否则无法完成转换操作。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">vgconvert(选项</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">参数</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-M：要转换的卷组格式。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h3><p>卷组：指定要转换格式的卷组。</p><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><p>转换卷组元数据格式前，使用vgchange命令将卷组设置为非活动状态。在命令行中输入下面的命令：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost lvm</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"># vgchange -an vg1000    </span><span style="color:#545454;font-style:italic;">#设置卷组状态为非活动状态</span></span>
<span class="line"><span style="color:#F78C6C;">0</span><span style="color:#EEFFFF;"> logical volume</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">s</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#EEFFFF;"> volume group </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vg1000</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;"> now active </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">\`\`\`</span><span style="color:#FFCB6B;">shell</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">使用vgconvert命令将卷组&quot;vg1000&quot;从&quot;LVM1&quot;格式转换为&quot;LVM2&quot;格式。在命令行中输入下面的命令：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">\`\`\`</span><span style="color:#FFCB6B;">shell</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost lvm</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"># vgconvert -M2 vg1000    </span><span style="color:#545454;font-style:italic;">#转换卷组为&quot;LVM2&quot;格式</span></span>
<span class="line"><span style="color:#FFCB6B;">Volume</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">group</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">vg1000</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">successfully</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">converted</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>使用vgchange命令将卷组设置为活动状态。在命令行中输入下面的命令：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@localhost lvm</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"># vgchange -ay vg1000     </span><span style="color:#545454;font-style:italic;">#设置卷组状态为活动状态</span></span>
<span class="line"><span style="color:#F78C6C;">0</span><span style="color:#EEFFFF;"> logical volume</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">s</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#EEFFFF;"> volume group</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">vg1000</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;"> now active</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,15),o=[p];function r(t,c,i,F,d,u){return n(),a("div",null,o)}const v=s(e,[["render",r]]);export{y as __pageData,v as default};
