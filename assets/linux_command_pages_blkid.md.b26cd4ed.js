import{_ as s,c as a,o as n,a as l}from"./app.82736834.js";const b=JSON.parse('{"title":"blkid","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/blkid.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/blkid.md"},e=l(`<h1 id="blkid" tabindex="-1">blkid <a class="header-anchor" href="#blkid" aria-hidden="true">#</a></h1><p>查看块设备的文件系统类型、LABEL、UUID等信息</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p>在Linux下可以使用 <strong>blkid命令</strong> 对查询设备上所采用文件系统类型进行查询。blkid主要用来对系统的块设备（包括交换分区）所使用的文件系统类型、LABEL、UUID等信息进行查询。要使用这个命令必须安装e2fsprogs软件包。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">blkid</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">-U</span></span>
<span class="line"><span style="color:#FFCB6B;">blkid</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-c </span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-ghlLv</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-o</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-s </span><span style="color:#89DDFF;">][</span><span style="color:#EEFFFF;">-t </span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-[w</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;"> ...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#FFCB6B;">blkid</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-s </span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-O </span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-S </span><span style="color:#89DDFF;">][</span><span style="color:#EEFFFF;">-o</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">...</span></span>
<span class="line"><span style="color:#FFCB6B;">blkid</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-s </span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-o</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">...</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker has-diff" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-c</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">fil</span><span style="color:#EEFFFF;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#EEFFFF;">   </span><span style="color:#545454;font-style:italic;"># 指定cache文件(default: /etc/blkid.tab, /dev/null = none)</span></span>
<span class="line"><span style="color:#FFCB6B;">-d</span><span style="color:#EEFFFF;">          </span><span style="color:#545454;font-style:italic;"># don&#39;t encode non-printing characters</span></span>
<span class="line"><span style="color:#FFCB6B;">-h</span><span style="color:#EEFFFF;">          </span><span style="color:#545454;font-style:italic;"># 显示帮助信息</span></span>
<span class="line"><span style="color:#FFCB6B;">-g</span><span style="color:#EEFFFF;">          </span><span style="color:#545454;font-style:italic;"># garbage collect the blkid cache</span></span>
<span class="line"><span style="color:#FFCB6B;">-o</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">forma</span><span style="color:#EEFFFF;">t</span><span style="color:#89DDFF;">&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;"># 指定输出格式</span></span>
<span class="line"><span style="color:#FFCB6B;">-k</span><span style="color:#EEFFFF;">          </span><span style="color:#545454;font-style:italic;"># list all known filesystems/RAIDs and exit</span></span>
<span class="line"><span style="color:#FFCB6B;">-s</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">ta</span><span style="color:#EEFFFF;">g</span><span style="color:#89DDFF;">&gt;</span><span style="color:#EEFFFF;">    </span><span style="color:#545454;font-style:italic;"># 显示指定信息，默认显示所有信息</span></span>
<span class="line"><span style="color:#FFCB6B;">-t</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">toke</span><span style="color:#EEFFFF;">n</span><span style="color:#89DDFF;">&gt;</span><span style="color:#EEFFFF;">  </span><span style="color:#545454;font-style:italic;"># find device with a specific token (NAME=value pair)</span></span>
<span class="line"><span style="color:#FFCB6B;">-l</span><span style="color:#EEFFFF;">          </span><span style="color:#545454;font-style:italic;"># look up only first device with token specified by -t</span></span>
<span class="line"><span style="color:#FFCB6B;">-L</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">labe</span><span style="color:#EEFFFF;">l</span><span style="color:#89DDFF;">&gt;</span><span style="color:#EEFFFF;">  </span><span style="color:#545454;font-style:italic;"># convert LABEL to device name</span></span>
<span class="line"><span style="color:#FFCB6B;">-U</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">uui</span><span style="color:#EEFFFF;">d</span><span style="color:#89DDFF;">&gt;</span><span style="color:#EEFFFF;">   </span><span style="color:#545454;font-style:italic;"># convert UUID to device name</span></span>
<span class="line"><span style="color:#FFCB6B;">-v</span><span style="color:#EEFFFF;">          </span><span style="color:#545454;font-style:italic;"># 显示版本信息</span></span>
<span class="line"><span style="color:#FFCB6B;">-w</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">fil</span><span style="color:#EEFFFF;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#EEFFFF;">   </span><span style="color:#545454;font-style:italic;"># write cache to different file (/dev/null = no write)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#EEFFFF;">dev</span><span style="color:#89DDFF;">&gt;</span><span style="color:#EEFFFF;">       </span><span style="color:#545454;font-style:italic;"># specify device(s) to probe (default: all devices)</span></span>
<span class="line"><span style="color:#FFCB6B;">Low-level</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">probing</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">options:</span></span>
<span class="line"><span style="color:#FFCB6B;">-p</span><span style="color:#EEFFFF;">          </span><span style="color:#545454;font-style:italic;"># low-level superblocks probing (bypass cache)</span></span>
<span class="line"><span style="color:#FFCB6B;">-i</span><span style="color:#EEFFFF;">          </span><span style="color:#545454;font-style:italic;"># gather information about I/O limits</span></span>
<span class="line"><span style="color:#FFCB6B;">-S</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">siz</span><span style="color:#EEFFFF;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#EEFFFF;">   </span><span style="color:#545454;font-style:italic;"># overwrite device size</span></span>
<span class="line"><span style="color:#FFCB6B;">-O</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">offse</span><span style="color:#EEFFFF;">t</span><span style="color:#89DDFF;">&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;"># probe at the given offset</span></span>
<span class="line"><span style="color:#FFCB6B;">-u</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">lis</span><span style="color:#EEFFFF;">t</span><span style="color:#89DDFF;">&gt;</span><span style="color:#EEFFFF;">   </span><span style="color:#545454;font-style:italic;"># filter by &quot;usage&quot; (e.g. -u filesystem,raid)</span></span>
<span class="line"><span style="color:#FFCB6B;">-n</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">lis</span><span style="color:#EEFFFF;">t</span><span style="color:#89DDFF;">&gt;</span><span style="color:#EEFFFF;">   </span><span style="color:#545454;font-style:italic;"># filter by filesystem type (e.g. -n vfat,ext3)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><p>1、列出当前系统中所有已挂载文件系统的类型：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">blkid</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2、显示指定设备 UUID：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">blkid</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">UUID</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/dev/sda5</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>3、显示所有设备 UUID：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">blkid</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">UUID</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>4、显示指定设备 LABEL：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">blkid</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">LABEL</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/dev/sda5</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>5、显示所有设备 LABEL：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">blkid</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">LABEL</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>6、显示所有设备文件系统：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">blkid</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">TYPE</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>7、显示所有设备：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">blkid</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">device</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>8、以列表方式查看详细信息：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">blkid</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">list</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,25),o=[e];function F(t,r,c,i,y,E){return n(),a("div",null,o)}const D=s(p,[["render",F]]);export{b as __pageData,D as default};
