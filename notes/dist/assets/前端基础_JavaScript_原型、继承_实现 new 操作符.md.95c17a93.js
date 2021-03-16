import{o as n,c as s,a}from"./app.57353960.js";const t='{"title":"实现 new 操作符","description":"","frontmatter":{},"headers":[{"level":2,"title":"new 操作符到底做了什么","slug":"new-操作符到底做了什么"},{"level":2,"title":"实现","slug":"实现"},{"level":2,"title":"相关链接","slug":"相关链接"}],"relativePath":"前端基础/JavaScript/原型、继承/实现 new 操作符.md","lastUpdated":1615518465088}',e={},o=a('<h1 id="实现-new-操作符"><a class="header-anchor" href="#实现-new-操作符" aria-hidden="true">#</a> 实现 new 操作符</h1><p>new 操作符可以把一个构造函数实例化成一个对象。</p><hr><h2 id="new-操作符到底做了什么"><a class="header-anchor" href="#new-操作符到底做了什么" aria-hidden="true">#</a> new 操作符到底做了什么</h2><ol><li>创建一个空对象（即 <code>{}</code>）且构造函数的 this 对象引用该对象，同时继承了该函数的原型。</li><li>方法和属性被加入到 this 引用的对象中。</li><li>如果该函数没有返回对象，则返回 this。</li></ol><h2 id="实现"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">newFn</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 不是一个函数，抛出异常</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> fn <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>fn<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> not a function</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n  <span class="token comment">// 1. 创建一个空对象 obj</span>\n  <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token comment">// 2. 继承该函数的原型</span>\n  Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> fn<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>\n  <span class="token comment">// 3. 将构造函数的 this 的上下文指向 obj，同时传入剩下的参数，并执行</span>\n  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span>\n  <span class="token comment">// 4. 如果构造函数返回的是一个对象则将这个返回值正常返回，否则返回第一步创建的 obj</span>\n  <span class="token keyword">return</span> result <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token operator">?</span> result <span class="token operator">:</span> obj\n<span class="token punctuation">}</span>\n</code></pre></div><p>通过构造函数实例化出来的对象，可以访问到构造函数的原型对象，所以使用 <code>Object.setPrototype</code> 将两者联系起来。<code>Object.setPrototypeOf(obj, fn.prototype)</code> 等同于 <code>obj.__proto__ = fn.prototype</code>。之所以不这么做，是因为通常认为 <code>Object.setPrototype</code> 比直接使用 <code>Object.prototype.__proto__</code> 更安全。</p><h2 id="相关链接"><a class="header-anchor" href="#相关链接" aria-hidden="true">#</a> 相关链接</h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new" target="_blank" rel="noopener noreferrer">new 运算符</a></li><li><a href="https://juejin.im/post/6844903789070123021" target="_blank" rel="noopener noreferrer">重学 JS 系列：聊聊 new 操作符</a></li><li><a href="https://github.com/tflins/front-end-review/blob/master/%E6%89%8B%E5%86%99%E4%BB%A3%E7%A0%81/new.js" target="_blank" rel="noopener noreferrer">手写代码/new.js</a></li></ul>',10);e.render=function(a,t,e,p,c,r){return n(),s("div",null,[o])};export default e;export{t as __pageData};
