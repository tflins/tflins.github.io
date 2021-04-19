import{r as a,o as s,c as n,a as t,w as p,b as e,d as o}from"./app.57516f60.js";const c='{"title":"Button 按钮","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法"},{"level":2,"title":"禁用状态","slug":"禁用状态"},{"level":2,"title":"hover 特效","slug":"hover-特效"},{"level":2,"title":"按钮尺寸","slug":"按钮尺寸"},{"level":2,"title":"属性","slug":"属性"}],"relativePath":"component/button.md","lastUpdated":1618823534671}',u={},l=t("h1",{id:"button-按钮"},[t("a",{class:"header-anchor",href:"#button-按钮","aria-hidden":"true"},"#"),e(" Button 按钮")],-1),k=t("p",null,"常用的操作按钮。",-1),i=t("h2",{id:"基础用法"},[t("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#"),e(" 基础用法")],-1),r=t("p",null,"通过 type 属性，控制按钮的类型",-1),g={class:"docs-preview-part"},d=e("默认"),f=e("主要"),q=e("提示"),b=e("成功"),_=e("警告"),v=e("危险"),h=o('<div class="language-vue"><pre><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sk-button</span><span class="token punctuation">&gt;</span></span>默认<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sk-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sk-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>主要<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sk-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sk-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>提示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sk-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sk-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>成功<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sk-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sk-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>警告<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sk-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sk-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>危险<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sk-button</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="禁用状态"><a class="header-anchor" href="#禁用状态" aria-hidden="true">#</a> 禁用状态</h2><p>你可以添加 <code>disabled</code> 来禁用按钮</p>',3),m={class:"docs-preview-part"},y=e("默认"),T=e("主要"),w=e("提示"),S=e("成功"),A=e("警告"),P=e("危险"),I=o('<div class="language-vue"><pre><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sk-button</span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>默认<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sk-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sk-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>主要<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sk-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sk-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>提示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sk-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sk-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>成功<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sk-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sk-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>警告<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sk-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sk-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>危险<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sk-button</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="hover-特效"><a class="header-anchor" href="#hover-特效" aria-hidden="true">#</a> hover 特效</h2><p>通过 effect 属性，来设置按钮 <code>hover</code> 状态的特效</p>',3),C={class:"docs-preview-part margin-bottom-12"},V=e("脉冲"),z=e("脉冲"),D=e("脉冲"),E=e("脉冲"),N=e("脉冲"),R=e("脉冲"),B={class:"docs-preview-part"},x=e("闪烁"),j=e("闪烁"),U=e("闪烁"),F=e("闪烁"),G=e("闪烁"),H=e("闪烁"),J=o('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>effect</code> 的属性有 <code>pulse</code>: 脉冲、<code>flash</code>: 闪烁</p></div><div class="language-vue"><pre><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sk-button</span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pulse<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>脉冲<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sk-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sk-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pulse<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>脉冲<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sk-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sk-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pulse<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>脉冲<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sk-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sk-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pulse<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>脉冲<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sk-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sk-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pulse<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>脉冲<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sk-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sk-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pulse<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>脉冲<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sk-button</span><span class="token punctuation">&gt;</span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sk-button</span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flash<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>闪烁<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sk-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sk-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flash<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>闪烁<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sk-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sk-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flash<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>闪烁<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sk-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sk-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flash<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>闪烁<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sk-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sk-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flash<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>闪烁<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sk-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sk-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flash<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>闪烁<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sk-button</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="按钮尺寸"><a class="header-anchor" href="#按钮尺寸" aria-hidden="true">#</a> 按钮尺寸</h2><p>sakura-ui 提供了三种不同的尺寸</p>',4),K={class:"docs-preview-part"},L=e("小尺寸"),M=e("默认"),O=e("大尺寸"),Q=o('<div class="language-vue"><pre><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sk-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>小尺寸<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sk-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sk-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>middle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>默认<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sk-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sk-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>large<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>大尺寸<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sk-button</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="属性"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>按钮类型</td><td>String</td><td>default / primary / info / warning / success / danger</td><td>default</td></tr><tr><td>size</td><td>按钮尺寸</td><td>String</td><td>small / middle / large</td><td>middle</td></tr><tr><td>effect</td><td>hover 特效</td><td>String</td><td>default / pulse / flash</td><td>default</td></tr><tr><td>disabled</td><td>是否禁用</td><td>Boolean</td><td></td><td>false</td></tr></tbody></table>',3);u.render=function(e,o,c,u,W,X){const Y=a("sk-button");return s(),n("div",null,[l,k,i,r,t("div",g,[t(Y,null,{default:p((()=>[d])),_:1}),t(Y,{type:"primary"},{default:p((()=>[f])),_:1}),t(Y,{type:"info"},{default:p((()=>[q])),_:1}),t(Y,{type:"success"},{default:p((()=>[b])),_:1}),t(Y,{type:"warning"},{default:p((()=>[_])),_:1}),t(Y,{type:"danger"},{default:p((()=>[v])),_:1})]),h,t("div",m,[t(Y,{disabled:""},{default:p((()=>[y])),_:1}),t(Y,{type:"primary",disabled:""},{default:p((()=>[T])),_:1}),t(Y,{type:"info",disabled:""},{default:p((()=>[w])),_:1}),t(Y,{type:"success",disabled:""},{default:p((()=>[S])),_:1}),t(Y,{type:"warning",disabled:""},{default:p((()=>[A])),_:1}),t(Y,{type:"danger",disabled:""},{default:p((()=>[P])),_:1})]),I,t("div",C,[t(Y,{effect:"pulse"},{default:p((()=>[V])),_:1}),t(Y,{type:"primary",effect:"pulse"},{default:p((()=>[z])),_:1}),t(Y,{type:"info",effect:"pulse"},{default:p((()=>[D])),_:1}),t(Y,{type:"success",effect:"pulse"},{default:p((()=>[E])),_:1}),t(Y,{type:"warning",effect:"pulse"},{default:p((()=>[N])),_:1}),t(Y,{type:"danger",effect:"pulse"},{default:p((()=>[R])),_:1})]),t("div",B,[t(Y,{effect:"flash"},{default:p((()=>[x])),_:1}),t(Y,{type:"primary",effect:"flash"},{default:p((()=>[j])),_:1}),t(Y,{type:"info",effect:"flash"},{default:p((()=>[U])),_:1}),t(Y,{type:"success",effect:"flash"},{default:p((()=>[F])),_:1}),t(Y,{type:"warning",effect:"flash"},{default:p((()=>[G])),_:1}),t(Y,{type:"danger",effect:"flash"},{default:p((()=>[H])),_:1})]),J,t("div",K,[t(Y,{size:"small"},{default:p((()=>[L])),_:1}),t(Y,{size:"middle"},{default:p((()=>[M])),_:1}),t(Y,{size:"large"},{default:p((()=>[O])),_:1})]),Q])};export default u;export{c as __pageData};
