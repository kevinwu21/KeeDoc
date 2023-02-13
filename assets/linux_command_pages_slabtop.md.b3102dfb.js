import{_ as s,c as n,o as a,a as l}from"./app.82736834.js";const D=JSON.parse('{"title":"slabtop","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"知识扩展","slug":"知识扩展","link":"#知识扩展","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/slabtop.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/slabtop.md"},F=l(`<h1 id="slabtop" tabindex="-1">slabtop <a class="header-anchor" href="#slabtop" aria-hidden="true">#</a></h1><p>实时显示内核slab内存缓存信息</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>slabtop命令</strong> 以实时的方式显示内核“slab”缓冲区的细节信息。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">slabtop(选项</span><span style="color:#EEFFFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">--delay=n,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">n：每n秒更新一次显示的信息，默认是每3秒；</span></span>
<span class="line"><span style="color:#FFCB6B;">--sort=S,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">S：指定排序标准进行排序（排序标准，参照下面或者man手册）；</span></span>
<span class="line"><span style="color:#FFCB6B;">--once,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-o：显示一次后退出；</span></span>
<span class="line"><span style="color:#FFCB6B;">--version,</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-V：显示版本；</span></span>
<span class="line"><span style="color:#FFCB6B;">--help：显示帮助信息。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>排序标准：</p><ul><li>a: sort by number of active objects</li><li>b: sort by objects per slab</li><li>c: sort by cache size</li><li>l: sort by number of slabs</li><li>v：sort by number of active slabs</li><li>n: sort by name</li><li>o: sort by number of objects</li><li>p: sort by pages per slab</li><li>s: sort by object size</li><li>u: sort by cache utilization</li></ul><h3 id="知识扩展" tabindex="-1">知识扩展 <a class="header-anchor" href="#知识扩展" aria-hidden="true">#</a></h3><p>内核的模块在分配资源的时候，为了提高效率和资源的利用率，都是透过slab来分配的。通过slab的信息，再配合源码能粗粗了解系统的运行情况，比如说什么资源有没有不正常的多，或者什么资源有没有泄漏。linux系统透过/proc/slabinfo来向用户暴露slab的使用情况。</p><p>Linux 所使用的 slab 分配器的基础是 Jeff Bonwick 为 SunOS 操作系统首次引入的一种算法。Jeff 的分配器是围绕对象缓存进行的。在内核中，会为有限的对象集（例如文件描述符和其他常见结构）分配大量内存。Jeff 发现对内核中普通对象进行初始化所需的时间超过了对其进行分配和释放所需的时间。因此他的结论是不应该将内存释放回一个全局的内存池，而是将内存保持为针对特定目而初始化的状态。Linux slab 分配器使用了这种思想和其他一些思想来构建一个在空间和时间上都具有高效性的内存分配器。</p><p>保存着监视系统中所有活动的 slab 缓存的信息的文件为/proc/slabinfo。</p><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">slabtop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">Active</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Total</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Objects</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#EEFFFF;">% </span><span style="color:#FFCB6B;">used</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">897519</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">1245930</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">72.0</span><span style="color:#EEFFFF;">%</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">Active</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Total</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Slabs</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#EEFFFF;">% </span><span style="color:#FFCB6B;">used</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;">      </span><span style="color:#C3E88D;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">38605</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">38605</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">100.0</span><span style="color:#EEFFFF;">%</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">Active</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Total</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Caches</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#EEFFFF;">% </span><span style="color:#FFCB6B;">used</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;">     </span><span style="color:#C3E88D;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">94</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">145</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">64.8</span><span style="color:#EEFFFF;">%</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">Active</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Total</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Size</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#EEFFFF;">% </span><span style="color:#FFCB6B;">used</span><span style="color:#89DDFF;">)</span><span style="color:#EEFFFF;">       </span><span style="color:#C3E88D;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">129558.22K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">153432.58K</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">84.4</span><span style="color:#EEFFFF;">%</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">Minimum</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Average</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Maximum</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Object</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">0.01K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">0.12K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">128.00K</span></span>
<span class="line"></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#FFCB6B;">OBJS</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">ACTIVE</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">USE</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">OBJ</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">SIZE</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">SLABS</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">OBJ/SLAB</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">CACHE</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">SIZE</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">NAME</span><span style="color:#EEFFFF;">                   </span></span>
<span class="line"><span style="color:#F78C6C;">440136</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">171471</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">38</span><span style="color:#EEFFFF;">%    0.05K   </span><span style="color:#F78C6C;">6113</span><span style="color:#EEFFFF;">       </span><span style="color:#F78C6C;">72</span><span style="color:#EEFFFF;">     24452K buffer_head</span></span>
<span class="line"><span style="color:#F78C6C;">190086</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">148576</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">78</span><span style="color:#EEFFFF;">%    0.05K   </span><span style="color:#F78C6C;">2437</span><span style="color:#EEFFFF;">       </span><span style="color:#F78C6C;">78</span><span style="color:#EEFFFF;">      9748K selinux_inode_security</span></span>
<span class="line"><span style="color:#F78C6C;">151840</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">146366</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">96</span><span style="color:#EEFFFF;">%    0.48K  </span><span style="color:#F78C6C;">18980</span><span style="color:#EEFFFF;">        </span><span style="color:#F78C6C;">8</span><span style="color:#EEFFFF;">     75920K ext3_inode_cache</span></span>
<span class="line"><span style="color:#F78C6C;">144333</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">144143</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">99</span><span style="color:#EEFFFF;">%    0.02K    </span><span style="color:#F78C6C;">711</span><span style="color:#EEFFFF;">      </span><span style="color:#F78C6C;">203</span><span style="color:#EEFFFF;">      2844K avtab_node</span></span>
<span class="line"><span style="color:#F78C6C;">130529</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">128488</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">98</span><span style="color:#EEFFFF;">%    0.13K   </span><span style="color:#F78C6C;">4501</span><span style="color:#EEFFFF;">       </span><span style="color:#F78C6C;">29</span><span style="color:#EEFFFF;">     18004K dentry_cache</span></span>
<span class="line"><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">99214</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">99071</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">99</span><span style="color:#C3E88D;">%</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">0.03K</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">878</span><span style="color:#EEFFFF;">      </span><span style="color:#F78C6C;">113</span><span style="color:#EEFFFF;">      </span><span style="color:#C3E88D;">3512K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">size-</span><span style="color:#F78C6C;">32</span></span>
<span class="line"><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">43834</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">28475</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">64</span><span style="color:#C3E88D;">%</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">0.27K</span><span style="color:#EEFFFF;">   </span><span style="color:#F78C6C;">3131</span><span style="color:#EEFFFF;">       </span><span style="color:#F78C6C;">14</span><span style="color:#EEFFFF;">     </span><span style="color:#C3E88D;">12524K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">radix_tree_node</span></span>
<span class="line"><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">17818</span><span style="color:#EEFFFF;">   </span><span style="color:#F78C6C;">9450</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">53</span><span style="color:#C3E88D;">%</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">0.06K</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">302</span><span style="color:#EEFFFF;">       </span><span style="color:#F78C6C;">59</span><span style="color:#EEFFFF;">      </span><span style="color:#C3E88D;">1208K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">size-</span><span style="color:#F78C6C;">64</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#FFCB6B;">4602</span><span style="color:#EEFFFF;">   </span><span style="color:#F78C6C;">4562</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">99</span><span style="color:#C3E88D;">%</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">0.05K</span><span style="color:#EEFFFF;">     </span><span style="color:#F78C6C;">59</span><span style="color:#EEFFFF;">       </span><span style="color:#F78C6C;">78</span><span style="color:#EEFFFF;">       </span><span style="color:#C3E88D;">236K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">sysfs_dir_cache</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#FFCB6B;">3220</span><span style="color:#EEFFFF;">   </span><span style="color:#F78C6C;">2855</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">88</span><span style="color:#C3E88D;">%</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">0.08K</span><span style="color:#EEFFFF;">     </span><span style="color:#F78C6C;">70</span><span style="color:#EEFFFF;">       </span><span style="color:#F78C6C;">46</span><span style="color:#EEFFFF;">       </span><span style="color:#C3E88D;">280K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">vm_area_struct</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#FFCB6B;">2460</span><span style="color:#EEFFFF;">   </span><span style="color:#F78C6C;">2114</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">85</span><span style="color:#C3E88D;">%</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">0.12K</span><span style="color:#EEFFFF;">     </span><span style="color:#F78C6C;">82</span><span style="color:#EEFFFF;">       </span><span style="color:#F78C6C;">30</span><span style="color:#EEFFFF;">       </span><span style="color:#C3E88D;">328K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">size-</span><span style="color:#F78C6C;">128</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#FFCB6B;">1564</span><span style="color:#EEFFFF;">   </span><span style="color:#F78C6C;">1461</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">93</span><span style="color:#C3E88D;">%</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">0.04K</span><span style="color:#EEFFFF;">     </span><span style="color:#F78C6C;">17</span><span style="color:#EEFFFF;">       </span><span style="color:#F78C6C;">92</span><span style="color:#EEFFFF;">        </span><span style="color:#C3E88D;">68K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Acpi-Operand</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#FFCB6B;">1540</span><span style="color:#EEFFFF;">   </span><span style="color:#F78C6C;">1540</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">100</span><span style="color:#C3E88D;">%</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">0.33K</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">140</span><span style="color:#EEFFFF;">       </span><span style="color:#F78C6C;">11</span><span style="color:#EEFFFF;">       </span><span style="color:#C3E88D;">560K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">inode_cache</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#FFCB6B;">1524</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">466</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">30</span><span style="color:#C3E88D;">%</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">0.01K</span><span style="color:#EEFFFF;">      </span><span style="color:#F78C6C;">6</span><span style="color:#EEFFFF;">      </span><span style="color:#F78C6C;">254</span><span style="color:#EEFFFF;">        </span><span style="color:#C3E88D;">24K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">anon_vma</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#FFCB6B;">1440</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">515</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">35</span><span style="color:#C3E88D;">%</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">0.05K</span><span style="color:#EEFFFF;">     </span><span style="color:#F78C6C;">20</span><span style="color:#EEFFFF;">       </span><span style="color:#F78C6C;">72</span><span style="color:#EEFFFF;">        </span><span style="color:#C3E88D;">80K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">avc_node</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#FFCB6B;">1440</span><span style="color:#EEFFFF;">   </span><span style="color:#F78C6C;">1154</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">80</span><span style="color:#C3E88D;">%</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">0.19K</span><span style="color:#EEFFFF;">     </span><span style="color:#F78C6C;">72</span><span style="color:#EEFFFF;">       </span><span style="color:#F78C6C;">20</span><span style="color:#EEFFFF;">       </span><span style="color:#C3E88D;">288K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">filp</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#FFCB6B;">1170</span><span style="color:#EEFFFF;">   </span><span style="color:#F78C6C;">1023</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">87</span><span style="color:#C3E88D;">%</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">0.05K</span><span style="color:#EEFFFF;">     </span><span style="color:#F78C6C;">15</span><span style="color:#EEFFFF;">       </span><span style="color:#F78C6C;">78</span><span style="color:#EEFFFF;">        </span><span style="color:#C3E88D;">60K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">ext3_xattr</span></span>
<span class="line"><span style="color:#EEFFFF;">   </span><span style="color:#FFCB6B;">845</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">724</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">85</span><span style="color:#C3E88D;">%</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">0.02K</span><span style="color:#EEFFFF;">      </span><span style="color:#F78C6C;">5</span><span style="color:#EEFFFF;">      </span><span style="color:#F78C6C;">169</span><span style="color:#EEFFFF;">        </span><span style="color:#C3E88D;">20K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Acpi-Namespace</span></span>
<span class="line"><span style="color:#EEFFFF;">   </span><span style="color:#FFCB6B;">638</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">315</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">49</span><span style="color:#C3E88D;">%</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">0.35K</span><span style="color:#EEFFFF;">     </span><span style="color:#F78C6C;">58</span><span style="color:#EEFFFF;">       </span><span style="color:#F78C6C;">11</span><span style="color:#EEFFFF;">       </span><span style="color:#C3E88D;">232K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">proc_inode_cache</span></span>
<span class="line"><span style="color:#EEFFFF;">   </span><span style="color:#FFCB6B;">450</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">434</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">96</span><span style="color:#C3E88D;">%</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">0.25K</span><span style="color:#EEFFFF;">     </span><span style="color:#F78C6C;">30</span><span style="color:#EEFFFF;">       </span><span style="color:#F78C6C;">15</span><span style="color:#EEFFFF;">       </span><span style="color:#C3E88D;">120K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">size-</span><span style="color:#F78C6C;">256</span></span>
<span class="line"><span style="color:#EEFFFF;">   </span><span style="color:#FFCB6B;">424</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">386</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">91</span><span style="color:#C3E88D;">%</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">0.50K</span><span style="color:#EEFFFF;">     </span><span style="color:#F78C6C;">53</span><span style="color:#EEFFFF;">        </span><span style="color:#F78C6C;">8</span><span style="color:#EEFFFF;">       </span><span style="color:#C3E88D;">212K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">size-</span><span style="color:#F78C6C;">512</span></span>
<span class="line"><span style="color:#EEFFFF;">   </span><span style="color:#FFCB6B;">312</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">107</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">34</span><span style="color:#C3E88D;">%</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">0.05K</span><span style="color:#EEFFFF;">      </span><span style="color:#F78C6C;">4</span><span style="color:#EEFFFF;">       </span><span style="color:#F78C6C;">78</span><span style="color:#EEFFFF;">        </span><span style="color:#C3E88D;">16K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">delayacct_cache</span></span>
<span class="line"><span style="color:#EEFFFF;">   </span><span style="color:#FFCB6B;">306</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">284</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">92</span><span style="color:#C3E88D;">%</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">0.43K</span><span style="color:#EEFFFF;">     </span><span style="color:#F78C6C;">34</span><span style="color:#EEFFFF;">        </span><span style="color:#F78C6C;">9</span><span style="color:#EEFFFF;">       </span><span style="color:#C3E88D;">136K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">shmem_inode_cache</span></span>
<span class="line"><span style="color:#EEFFFF;">   </span><span style="color:#FFCB6B;">303</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">108</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">35</span><span style="color:#C3E88D;">%</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">0.04K</span><span style="color:#EEFFFF;">      </span><span style="color:#F78C6C;">3</span><span style="color:#EEFFFF;">      </span><span style="color:#F78C6C;">101</span><span style="color:#EEFFFF;">        </span><span style="color:#C3E88D;">12K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">pid</span></span>
<span class="line"><span style="color:#EEFFFF;">   </span><span style="color:#FFCB6B;">300</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">261</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">87</span><span style="color:#C3E88D;">%</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">0.19K</span><span style="color:#EEFFFF;">     </span><span style="color:#F78C6C;">15</span><span style="color:#EEFFFF;">       </span><span style="color:#F78C6C;">20</span><span style="color:#EEFFFF;">        </span><span style="color:#C3E88D;">60K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">skbuff_head_cache</span></span>
<span class="line"><span style="color:#EEFFFF;">   </span><span style="color:#FFCB6B;">300</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">300</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">100</span><span style="color:#C3E88D;">%</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">0.12K</span><span style="color:#EEFFFF;">     </span><span style="color:#F78C6C;">10</span><span style="color:#EEFFFF;">       </span><span style="color:#F78C6C;">30</span><span style="color:#EEFFFF;">        </span><span style="color:#C3E88D;">40K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">bio</span></span>
<span class="line"><span style="color:#EEFFFF;">   </span><span style="color:#FFCB6B;">260</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">260</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">100</span><span style="color:#C3E88D;">%</span><span style="color:#EEFFFF;">   </span><span style="color:#C3E88D;">32.00K</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">260</span><span style="color:#EEFFFF;">        </span><span style="color:#F78C6C;">1</span><span style="color:#EEFFFF;">      </span><span style="color:#C3E88D;">8320K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">size-</span><span style="color:#F78C6C;">32768</span></span>
<span class="line"><span style="color:#EEFFFF;">   </span><span style="color:#FFCB6B;">254</span><span style="color:#EEFFFF;">      </span><span style="color:#F78C6C;">6</span><span style="color:#EEFFFF;">   </span><span style="color:#F78C6C;">2</span><span style="color:#C3E88D;">%</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">0.01K</span><span style="color:#EEFFFF;">      </span><span style="color:#F78C6C;">1</span><span style="color:#EEFFFF;">      </span><span style="color:#F78C6C;">254</span><span style="color:#EEFFFF;">         </span><span style="color:#C3E88D;">4K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">revoke_table</span></span>
<span class="line"><span style="color:#EEFFFF;">   </span><span style="color:#FFCB6B;">236</span><span style="color:#EEFFFF;">     </span><span style="color:#F78C6C;">55</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">23</span><span style="color:#C3E88D;">%</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">0.06K</span><span style="color:#EEFFFF;">      </span><span style="color:#F78C6C;">4</span><span style="color:#EEFFFF;">       </span><span style="color:#F78C6C;">59</span><span style="color:#EEFFFF;">        </span><span style="color:#C3E88D;">16K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">fs_cache</span></span>
<span class="line"><span style="color:#EEFFFF;">   </span><span style="color:#FFCB6B;">216</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">203</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">93</span><span style="color:#C3E88D;">%</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">1.00K</span><span style="color:#EEFFFF;">     </span><span style="color:#F78C6C;">54</span><span style="color:#EEFFFF;">        </span><span style="color:#F78C6C;">4</span><span style="color:#EEFFFF;">       </span><span style="color:#C3E88D;">216K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">size-</span><span style="color:#F78C6C;">1024</span></span>
<span class="line"><span style="color:#EEFFFF;">   </span><span style="color:#FFCB6B;">214</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">214</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">100</span><span style="color:#C3E88D;">%</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">2.00K</span><span style="color:#EEFFFF;">    </span><span style="color:#F78C6C;">107</span><span style="color:#EEFFFF;">        </span><span style="color:#F78C6C;">2</span><span style="color:#EEFFFF;">       </span><span style="color:#C3E88D;">428K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">size-</span><span style="color:#F78C6C;">2048</span></span>
<span class="line"><span style="color:#EEFFFF;">   </span><span style="color:#FFCB6B;">203</span><span style="color:#EEFFFF;">     </span><span style="color:#F78C6C;">83</span><span style="color:#EEFFFF;">  </span><span style="color:#F78C6C;">40</span><span style="color:#C3E88D;">%</span><span style="color:#EEFFFF;">    </span><span style="color:#C3E88D;">0.02K</span><span style="color:#EEFFFF;">      </span><span style="color:#F78C6C;">1</span><span style="color:#EEFFFF;">      </span><span style="color:#F78C6C;">203</span><span style="color:#EEFFFF;">         </span><span style="color:#C3E88D;">4K</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">biovec-</span><span style="color:#F78C6C;">1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div>`,16),o=[F];function e(r,c,t,E,y,C){return a(),n("div",null,o)}const b=s(p,[["render",e]]);export{D as __pageData,b as default};
