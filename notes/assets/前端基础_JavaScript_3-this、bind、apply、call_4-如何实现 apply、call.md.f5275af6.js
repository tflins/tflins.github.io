import{o as n,c as a,a as s}from"./app.8c8a1ac2.js";const p='{"title":"如何实现 apply、call","description":"","frontmatter":{},"headers":[{"level":2,"title":"apply 规范","slug":"apply-规范"},{"level":2,"title":"实现 apply","slug":"实现-apply"},{"level":3,"title":"第一版本 借助 call 或 bind","slug":"第一版本-借助-call-或-bind"},{"level":3,"title":"第二版本","slug":"第二版本"},{"level":3,"title":"第三个版本","slug":"第三个版本"},{"level":2,"title":"实现 call","slug":"实现-call"},{"level":3,"title":"第一个版本：借助 apply 或 bind","slug":"第一个版本：借助-apply-或-bind"},{"level":3,"title":"第二个版本 call","slug":"第二个版本-call"},{"level":3,"title":"第三个版本 call","slug":"第三个版本-call"}],"relativePath":"前端基础/JavaScript/3-this、bind、apply、call/4-如何实现 apply、call.md","lastUpdated":1616666236335}',t={},o=s('<h1 id="如何实现-apply、call"><a class="header-anchor" href="#如何实现-apply、call" aria-hidden="true">#</a> 如何实现 apply、call</h1><hr><h2 id="apply-规范"><a class="header-anchor" href="#apply-规范" aria-hidden="true">#</a> apply 规范</h2><h2 id="实现-apply"><a class="header-anchor" href="#实现-apply" aria-hidden="true">#</a> 实现 apply</h2><h3 id="第一版本-借助-call-或-bind"><a class="header-anchor" href="#第一版本-借助-call-或-bind" aria-hidden="true">#</a> 第一版本 借助 call 或 bind</h3><p>借助原生提供的 call、bind 方法来改变函数的 this 指向，这种方式比较简单</p><div class="language-js"><pre><code><span class="token comment">// 借助 call</span>\n<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">apply2</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">content <span class="token operator">=</span> window<span class="token punctuation">,</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 借助 bind</span>\n<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">apply3</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">content <span class="token operator">=</span> window<span class="token punctuation">,</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  a<span class="token operator">:</span> <span class="token number">100</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\nfn<span class="token punctuation">.</span><span class="token function">apply2</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 3 100</span>\nfn<span class="token punctuation">.</span><span class="token function">apply3</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 3 100</span>\n</code></pre></div><h3 id="第二版本"><a class="header-anchor" href="#第二版本" aria-hidden="true">#</a> 第二版本</h3><p>在传入的执行山下文对象（content）中动态创建一个属性，这个属性指向函数，再调用刚才 content 中创建的方法，这样 this 就会执行调用该方法的对象，也就是传入的 content。JavaScript 中的 this 指向具体参考: <a href="https://github.com/tflins/front-end-notes/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/this%E3%80%81bind%E3%80%81apply%E3%80%81call/JavaScript%20%E4%B8%AD%E7%9A%84%20this.md" target="_blank" rel="noopener noreferrer">JavaScript 中的 this</a></p><div class="language-js"><pre><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">apply2</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">content <span class="token operator">=</span> window<span class="token punctuation">,</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  content<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span>\n  <span class="token keyword">const</span> result <span class="token operator">=</span> content<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>\n  <span class="token keyword">return</span> result\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="第三个版本"><a class="header-anchor" href="#第三个版本" aria-hidden="true">#</a> 第三个版本</h3><p>次版本为上一个版本的改良版，主要是加上了异常判断，还有给传入的执行上下文动态添加方法的时候，借助的 es6 新增的 symbol 保证了 key 的唯一性。最后再将临时创建的方法删掉。</p><div class="language-js"><pre><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">apply2</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">content <span class="token operator">=</span> window<span class="token punctuation">,</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span> <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> not a function</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;fn&#39;</span><span class="token punctuation">)</span>\n  content<span class="token punctuation">[</span>fn<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span>\n  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">content</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>\n  <span class="token keyword">delete</span> content<span class="token punctuation">[</span>fn<span class="token punctuation">]</span>\n  <span class="token keyword">return</span> result\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="实现-call"><a class="header-anchor" href="#实现-call" aria-hidden="true">#</a> 实现 call</h2><p>call 和 apply 类似，只是 call 接收的参数不同。bind 和 apply 第一个参数都是传入的执行上下文，而其余的函数参数，apply 是以参数数组的形式从第二个参数传入；call 则是第二个参数开始已参数的形式传入。</p><h3 id="第一个版本：借助-apply-或-bind"><a class="header-anchor" href="#第一个版本：借助-apply-或-bind" aria-hidden="true">#</a> 第一个版本：借助 apply 或 bind</h3><div class="language-js"><pre><code><span class="token comment">// 借助 apply</span>\n<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">call2</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">content <span class="token operator">=</span> window<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> args<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 借助 bind</span>\n<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">call3</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">content <span class="token operator">=</span> window<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  a<span class="token operator">:</span> <span class="token number">100</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span>\n<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">2</span>\n\n<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\nfn<span class="token punctuation">.</span><span class="token function">call2</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token comment">// 3 100</span>\nfn<span class="token punctuation">.</span><span class="token function">call3</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token comment">// 3 100</span>\n</code></pre></div><h3 id="第二个版本-call"><a class="header-anchor" href="#第二个版本-call" aria-hidden="true">#</a> 第二个版本 call</h3><div class="language-js"><pre><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">call2</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">content <span class="token operator">=</span> window<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  content<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span>\n  <span class="token keyword">return</span> content<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="第三个版本-call"><a class="header-anchor" href="#第三个版本-call" aria-hidden="true">#</a> 第三个版本 call</h3><div class="language-js"><pre><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">call2</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">content <span class="token operator">=</span> window<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span> <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> not a function</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;fn&#39;</span><span class="token punctuation">)</span>\n  content<span class="token punctuation">[</span>fn<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span>\n  <span class="token keyword">const</span> result <span class="token operator">=</span> content<span class="token punctuation">[</span>fn<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>\n  <span class="token keyword">delete</span> content<span class="token punctuation">[</span>fn<span class="token punctuation">]</span>\n  <span class="token keyword">return</span> result\n<span class="token punctuation">}</span>\n</code></pre></div>',21);t.render=function(s,p,t,c,e,l){return n(),a("div",null,[o])};export default t;export{p as __pageData};
