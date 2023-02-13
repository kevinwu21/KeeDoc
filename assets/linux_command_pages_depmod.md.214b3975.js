import{_ as s,c as n,o as a,a as l}from"./app.82736834.js";const E=JSON.parse('{"title":"depmod","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/depmod.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/depmod.md"},p=l(`<h1 id="depmod" tabindex="-1">depmod <a class="header-anchor" href="#depmod" aria-hidden="true">#</a></h1><p>分析可载入模块的相依性</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>depmod命令</strong> 可产生模块依赖的映射文件，在构建嵌入式系统时，需要由这个命令来生成相应的文件，由modprobe使用。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">depmod(选项</span><span style="color:#EEFFFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-a或--all：分析所有可用的模块；</span></span>
<span class="line"><span style="color:#FFCB6B;">-d或debug：执行排错模式；</span></span>
<span class="line"><span style="color:#FFCB6B;">-e：输出无法参照的符号；</span></span>
<span class="line"><span style="color:#FFCB6B;">-i：不检查符号表的版本；</span></span>
<span class="line"><span style="color:#FFCB6B;">-m&lt;文件&gt;或system-map&lt;文件&gt;：使用指定的符号表文件；</span></span>
<span class="line"><span style="color:#FFCB6B;">-s或--system-log：在系统记录中记录错误；</span></span>
<span class="line"><span style="color:#FFCB6B;">-v或--verbose：执行时显示详细的信息；</span></span>
<span class="line"><span style="color:#FFCB6B;">-V或--version：显示版本信息；</span></span>
<span class="line"><span style="color:#FFCB6B;">--help：显示帮助。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">depmod</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/home/windsome/EMMA3PF-KernelSource-</span><span style="color:#F78C6C;">20080626</span><span style="color:#C3E88D;">/install_pos</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-F</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">./boot/System.map</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">2.6.18_pro500-bcm91250-mips2_fp_be</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-A</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-a</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><code>/home/windsome/EMMA3PF-KernelSource-20080626/install_pos</code>是我<code>make mod_install</code>后，所有模块的存放路径。</li><li><code>./boot/System.map</code>是<code>make linux</code>后生成，我拷贝到此目录的。</li><li><code>2.6.18_pro500-bcm91250-mips2_fp_be</code>是我build的linux的版本。</li></ul><p>编译linux过程及执行depmod的例子：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">genkernel.sh</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">at</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">linux-2.6.18_pro500</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#545454;font-style:italic;">#######</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#EEFFFF;"> INSTALL_ROOT_EMMA3PF</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/home/windsome/EMMA3PF-KernelSource-20080626/install_pos</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#EEFFFF;"> INSTALL_MOD_EMMA3PF</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/home/windsome/EMMA3PF-KernelSource-20080626/install_pos</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">rm</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/home/windsome/EMMA3PF-KernelSource-</span><span style="color:#F78C6C;">20080626</span><span style="color:#C3E88D;">/install_pos/lib</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-rf</span></span>
<span class="line"><span style="color:#FFCB6B;">rm</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/home/windsome/EMMA3PF-KernelSource-</span><span style="color:#F78C6C;">20080626</span><span style="color:#C3E88D;">/install_pos/boot/</span><span style="color:#EEFFFF;">*</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-rf</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">linux_src_di</span><span style="color:#EEFFFF;">r</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">make</span></span>
<span class="line"><span style="color:#FFCB6B;">make</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">modules_install</span></span>
<span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">vmlinux</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">System.map</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/home/windsome/EMMA3PF-KernelSource-</span><span style="color:#F78C6C;">20080626</span><span style="color:#C3E88D;">/install_pos/boot/</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-p</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/home/windsome/EMMA3PF-KernelSource-</span><span style="color:#F78C6C;">20080626</span><span style="color:#C3E88D;">/install_pos</span></span>
<span class="line"><span style="color:#FFCB6B;">depmod</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/home/windsome/EMMA3PF-KernelSource-</span><span style="color:#F78C6C;">20080626</span><span style="color:#C3E88D;">/install_pos</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-F</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">./boot/System.map</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">2.6.18_pro500-bcm91250-mips2_fp_be</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-A</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-a</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>其他用法：</p><p>在linux桌面系统中，当你编译了新的驱动，为了能够用<code>modprobe ***</code>加载模块, 你需要先将模块拷贝到<code>/lib/modules /2.6.31-20-generic</code>目录下，然后运行<code>sudo depmod -a</code>将模块信息写入modules.dep、modules.dep.bin、modules.alias.bin、modules.alias和modules.pcimap文件中。</p><p>如，我编译了一个新的wifi驱动r8192se_pci.ko，将其拷贝到<code>/lib/modules/2.6.31-20-generic/wireless</code>下，然后到<code>/lib/modules/2.6.31-20-generic</code>运行<code>depmod -a</code>，之后可以在任意目录运行modprobe r8192se_pci。</p>`,16),o=[p];function r(c,t,F,i,d,y){return a(),n("div",null,o)}const u=s(e,[["render",r]]);export{E as __pageData,u as default};
