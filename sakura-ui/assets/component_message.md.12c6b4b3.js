import{r as n,o as s,c as a,a as t,b as p,d as o}from"./app.1d4fb43b.js";const e='{"title":"Message 消息","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本用法","slug":"基本用法"},{"level":2,"title":"显示时间","slug":"显示时间"}],"relativePath":"component/message.md","lastUpdated":1619576333507}',c={},u=t("h1",{id:"message-消息"},[t("a",{class:"header-anchor",href:"#message-消息","aria-hidden":"true"},"#"),p(" Message 消息")],-1),l=t("p",null,"消息组件提供不同类型的消息通知，以此来提示用户。",-1),k=t("h2",{id:"基本用法"},[t("a",{class:"header-anchor",href:"#基本用法","aria-hidden":"true"},"#"),p(" 基本用法")],-1),i=t("p",null,[p("从 "),t("code",null,"sakura-ui"),p(" 中引入 "),t("code",null,"Message"),p(" 组件，调用相应的方法使用。")],-1),r={class:"docs-preview-part"},g=o('<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>message-demo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sk-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showMessage<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>消息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sk-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;sakura3&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;MessageDemo&#39;</span><span class="token punctuation">,</span>\n\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">showMessage1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      Message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&#39;这是一条成功类型的提示&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">showMessage2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      Message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;这是一条错误类型的提示&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">showMessage3</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      Message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;这是一条提示类型的提示&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">showMessage4</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      Message<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span><span class="token string">&#39;这是一条警告类型的提示&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      showMessage1<span class="token punctuation">,</span>\n      showMessage2<span class="token punctuation">,</span>\n      showMessage3<span class="token punctuation">,</span>\n      showMessage4\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="显示时间"><a class="header-anchor" href="#显示时间" aria-hidden="true">#</a> 显示时间</h2><p>通过设置 <code>duration</code> 属性，可以控制消息组件的显示时间。</p>',3),d={class:"docs-preview-part"};c.render=function(p,o,e,c,h,f){const m=n("message-demo");return s(),a("div",null,[u,l,k,i,t("div",r,[t(m)]),g,t("div",d,[t(m,{"demo-id":"2"})])])};export default c;export{e as __pageData};