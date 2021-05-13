function t(t,e){const i=document.createElement("canvas"),a=function(t){return t.getContext("2d")}(i);return"number"==typeof t&&(i.width=t),"number"==typeof e&&(i.height=e),{canvas:i,ctx:a}}class e{constructor(){this.listeners={}}on(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e)}off(t,e){if(!this.listeners[t])throw new Error(`not found: ${t}`);this.listeners[t]=this.listeners[t].filter((t=>t!==e))}emit(t,...e){if(!this.listeners[t])throw new Error(`not found: ${t}`);this.listeners[t].forEach((function(t){t(...e)}))}}function i(t){const{width:e,height:i,data:a}=t;let s=0,n=0,r=0,o=0,h=(t,i)=>4*(i*e+t)+3,c=!1;for(let l=0;l<i;l++){for(let t=0;t<e;t++)if(a[h(t,l)]){s=n=l,r=o=t,c=!0;break}if(c)break}c=!1;for(let l=0;l<r;l++){for(let t=s;t<i;t++)if(a[h(l,t)]){r=l,c=!0;break}if(c)break}c=!1;for(let l=e-1;l>o;l--){for(let t=s;t<i;t++)if(a[h(l,t)]){o=l,c=!0;break}if(c)break}c=!1;for(let l=i-1;l>n;l--){for(let t=r;t<o;t++)if(a[h(t,l)]){n=l,c=!0;break}if(c)break}return n&&n++,o&&o++,{lOffset:r,tOffset:s,rOffset:o,bOffset:n}}const a={width:500,height:500};const s=document.querySelector("#app");s.innerHTML='\n  <h1>smart clip</h1>\n  <div class="smart-clip-control-bar">\n    <input type="file" name="target-file">\n    <button id="identify-btn" class="control-button">识别主体位置</button>\n    <button id="export-btn" class="control-button">导出识别图片</button>\n  </div>\n';const n=new class{constructor(t,i){this.eventBus=new e,this.canvas=null,this.ctx=null,this.options=Object.assign({},i,a),this.initialize(this.options),t.appendChild(this.canvas)}get imageCanvas(){if(!this.imageCanvasData){const t="请上传图片";throw alert(t),new Error(t)}return this.imageCanvasData.canvas}get imageCtx(){if(!this.imageCanvasData){const t="请上传图片";throw alert(t),new Error(t)}return this.imageCanvasData.ctx}get imageData(){return this.imageCtx.getImageData(0,0,this.imageCanvas.width,this.imageCanvas.height)}initialize(e){const{width:i,height:a}=e,{canvas:s,ctx:n}=t(2*i,2*a);this.canvas=s,this.ctx=n,this.registerEvent(),this.renderTilesPattern(i,a)}renderTilesPattern(e=this.options.width,i=this.options.height){this.canvas.style.backgroundImage=`url(${function(e="#aaa",i="#eee"){const{canvas:a,ctx:s}=t(20,20);return s.fillStyle=e,s.fillRect(0,0,10,10),s.fillRect(10,10,10,10),s.fillStyle=i,s.fillRect(10,0,10,10),s.fillRect(0,10,10,10),a}().toDataURL()})`,this.canvas.style.backgroundRepeat="repeat",this.canvas.style.width=`${e}px`,this.canvas.style.height=`${i}px`}registerEvent(){this.eventBus.on("image-load",(t=>{this.drawImage(t)})),this.eventBus.on("update-image",(()=>{this.drawImage(this.imageCanvas)}))}async loadImage(t){const e="string"==typeof t?t:URL.createObjectURL(t);return new Promise(((t,i)=>{const a=new Image;a.crossOrigin="",a.src=e,a.onload=()=>{this.eventBus.emit("image-load",a),t(a)},a.onerror=()=>{i(new Error(`image load error: ${e}`))}}))}drawImage(e){this.clear();const{width:i,height:a}=e;this.imageCanvasData=t(i,a);const s=i/a>1?this.canvas.width/i:this.canvas.height/a,n={width:i*s,height:a*s},r=(this.canvas.width-n.width)/2,o=(this.canvas.height-n.height)/2;this.imageCtx.drawImage(e,0,0),this.ctx.drawImage(this.imageCanvas,r,o,n.width,n.height)}clear(){this.canvas.height=2*this.options.height}identify(t=this.imageData){const{tOffset:e,rOffset:a,bOffset:s,lOffset:n}=i(t);return this.renderRect(this.imageCtx,{x:n,y:e,width:a-n,height:s-e}),{tOffset:e,rOffset:a,bOffset:s,lOffset:n}}renderRect(t,{x:e,y:i,width:a,height:s}){t.moveTo(e,i),t.lineTo(e+a,i),t.lineTo(e+a,i+s),t.lineTo(e,i+s),t.lineTo(e,i),t.strokeStyle="red",t.lineWidth=10,t.stroke(),this.eventBus.emit("update-image")}async exportImage(e=!1){const{tOffset:a,rOffset:s,bOffset:n,lOffset:r}=i(this.imageData),o={top:a,left:r,width:s-r,height:n-a},{canvas:h,ctx:c}=t(o.width,o.height);c.drawImage(this.imageCanvas,-o.left,-o.top);const l=await new Promise((t=>h.toBlob(t)));return e?h.toDataURL():l}downloadFile(t){console.log("%c [ blob ]","font-size:13px; background:pink; color:#bf2c9f;",URL.createObjectURL(t));const e=document.createElement("a");e.download="export-image",e.href=URL.createObjectURL(t),e.click()}}(s),r=document.querySelector('input[name="target-file"]'),o=document.querySelector("#identify-btn"),h=document.querySelector("#export-btn");(async()=>{await n.loadImage("/smart-clip/sakura-ui.png")})(),r.addEventListener("change",(async t=>{const e=t.target.files[0];await n.loadImage(e)})),o.addEventListener("click",(()=>{n.identify()})),h.addEventListener("click",(async()=>{const t=await n.exportImage();n.downloadFile(t)}));
