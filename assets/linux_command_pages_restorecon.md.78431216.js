import{_ as s,c as n,o as a,a as l}from"./app.82736834.js";const m=JSON.parse('{"title":"restorecon","description":"","frontmatter":{},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"relativePath":"linux/command/pages/restorecon.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/restorecon.md"},p=l(`<h1 id="restorecon" tabindex="-1">restorecon <a class="header-anchor" href="#restorecon" aria-hidden="true">#</a></h1><p>恢复文件的安全上下文</p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-hidden="true">#</a></h2><p><strong>restorecon命令</strong> 用来恢复SELinux文件属性即恢复文件的安全上下文。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">restorecon</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-iFnrRv</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-e excludedir </span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-o filename </span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">-f filename </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> pathname...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-i：忽略不存在的文件。</span></span>
<span class="line"><span style="color:#FFCB6B;">-f：infilename</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">文件</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">infilename</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">中记录要处理的文件。</span></span>
<span class="line"><span style="color:#FFCB6B;">-e：directory</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">排除目录。</span></span>
<span class="line"><span style="color:#FFCB6B;">-R/-r：递归处理目录。</span></span>
<span class="line"><span style="color:#FFCB6B;">-n：不改变文件标签。</span></span>
<span class="line"><span style="color:#FFCB6B;">-o/outfilename：保存文件列表到</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">outfilename，在文件不正确情况下。</span></span>
<span class="line"><span style="color:#FFCB6B;">-v：将过程显示到屏幕上。</span></span>
<span class="line"><span style="color:#FFCB6B;">-F：强制恢复文件安全语境。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h3><p>假设CentOS安装了apache，网页默认的主目录是<code>/var/www/html</code>，我们经常遇到这样的问题，在其他目录中创建了一个网页文件，然后用mv移动到网页默认目录<code>/var/www/html</code>中，但是在浏览器中却打不开这个文件，这很可能是因为这个文件的SELinux配置信息是继承原来那个目录的，与<code>/var/www/html</code>目录不同，使用mv移动的时候，这个SELinux配置信息也一起移动过来了，从而导致无法打开页面，具体请看下面的实例：</p><p>使用CentOS举例,如果默认没有安装apache，确保网络连接，使用下面的命令安装</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@jsdig.com </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;"># yum install httpd</span></span>
<span class="line"><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;"># 我们在root的家目录新建一个html文件 </span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@jsdig.com </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;"># pwd</span></span>
<span class="line"><span style="color:#FFCB6B;">/root</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@jsdig.com </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;"># vi index.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#545454;font-style:italic;"># 随便输入一段文字，保存退出 </span></span>
<span class="line"><span style="color:#FFCB6B;">welcome</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">to</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">www.jsdig.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#545454;font-style:italic;"># 将这个文件mv到网页默认目录下 </span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@jsdig.com </span><span style="color:#89DDFF;">~]</span><span style="color:#EEFFFF;"># mv index.html /var/www/html/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#545454;font-style:italic;"># </span></span>
<span class="line"><span style="color:#545454;font-style:italic;"># 这个时候我们使用firefox浏览器输入127.0.0.1/index.html发现打不开，</span></span>
<span class="line"><span style="color:#545454;font-style:italic;"># 查看一下SELinux的日志文件，发现了下面这一段报错信息，从这个报错信息不难看出，</span></span>
<span class="line"><span style="color:#545454;font-style:italic;"># 进程httpd访问网页主目录中的index.html时被SELinux阻止，原因是因为，SELinux配置信息不正确,</span></span>
<span class="line"><span style="color:#545454;font-style:italic;"># 正确的SELinux配置信息应该是scontext=后面的部分，</span></span>
<span class="line"><span style="color:#545454;font-style:italic;"># 而index.html文件的SELinux配置信息却是tcontext=后面的部分，</span></span>
<span class="line"><span style="color:#545454;font-style:italic;"># 从tcontext=的第三段“admin_home_t”不难看出，这个文件的SELinux配置信息是root用户家目录的。</span></span>
<span class="line"><span style="color:#545454;font-style:italic;"># </span></span>
<span class="line"><span style="color:#EEFFFF;">type</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">AVC</span><span style="color:#EEFFFF;"> msg</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">audit</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1378974214.610</span><span style="color:#EEFFFF;">:</span><span style="color:#F78C6C;">465</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">:</span><span style="color:#EEFFFF;"> avc:  denied  </span><span style="color:#89DDFF;">{</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">open</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">}</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">for</span><span style="color:#EEFFFF;">  </span><span style="color:#C3E88D;">pid=</span><span style="color:#F78C6C;">2359</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">comm=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">httpd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">path=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/var/www/html/index.html</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">dev=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sda1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">ino=</span><span style="color:#F78C6C;">1317685</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">scontext=system_u:system_r:httpd_t:s0</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">tcontext=unconfined_u:object_r:admin_home_t:s0</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">tclass=file</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>使用ls -Z也可以看出,文件和目录的SELinux信息不匹配</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@jsdig.com html</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"># ls -Z /var/www/html/</span></span>
<span class="line"><span style="color:#82AAFF;">....</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">unconfined_u:object_r:admin_home_t:s0</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">index.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@jsdig.com html</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"># ls -Zd /var/www/html/</span></span>
<span class="line"><span style="color:#82AAFF;">....</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">system_u:object_r:httpd_sys_content_t:s0</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">/var/www/html/</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>使用restorecon来恢复网页主目录中所有文件的SELinux配置信息(如果目标为一个目录，可以添加-R参数递归)</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-darker" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#EEFFFF;">root@jsdig.com html</span><span style="color:#89DDFF;">]</span><span style="color:#EEFFFF;"># restorecon -R /var/www/html/</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,16),o=[p];function r(t,c,F,i,y,d){return a(),n("div",null,o)}const u=s(e,[["render",r]]);export{m as __pageData,u as default};
