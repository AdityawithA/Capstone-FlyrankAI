(() => {
const canvas=document.getElementById("shader"), status=document.getElementById("status");
const vertexSource=`attribute vec2 a_position; void main(){gl_Position=vec4(a_position,0.0,1.0);}`;
const fragmentSource=`precision highp float;
uniform float u_time; uniform vec2 u_resolution; uniform vec2 u_mouse;
mat2 rot(float a){float s=sin(a),c=cos(a);return mat2(c,-s,s,c);}
float field(vec2 p){float v=0.0;float amp=.55;for(int i=0;i<4;i++){p=rot(.55)*p;p+=vec2(sin(p.y*1.7),cos(p.x*1.3))*.18;v+=sin(p.x*2.4+sin(p.y*1.8))*amp;p*=1.85;amp*=.48;}return v;}
void main(){
vec2 uv=(gl_FragCoord.xy-.5*u_resolution.xy)/u_resolution.y;
vec2 mouse=u_mouse-.5;
float md=length(uv-mouse*.75);
float glow=.035/(md+.035);
float t=u_time*.16;
vec2 flow=uv*2.0+vec2(sin(t),cos(t*.8))*.12+mouse*.32;
float f=field(flow+vec2(t*.45,-t*.22));
float waves=sin(f*2.7+length(uv)*5.0-t*2.0);
vec3 deep=vec3(.008,.025,.075),blue=vec3(.025,.23,.48),cyan=vec3(.15,.82,.96),violet=vec3(.38,.16,.82);
float a=smoothstep(-.55,.65,f),b=smoothstep(-.2,.9,waves);
vec3 color=mix(deep,blue,a*.8);color=mix(color,violet,b*.55);color+=cyan*glow*.35;
float vignette=1.0-smoothstep(.25,1.05,length(uv));color*=.62+vignette*.38;
float grain=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453);
color+=(grain-.5)*.018;gl_FragColor=vec4(color,1.0);}`;
const gl=canvas.getContext("webgl",{alpha:false,antialias:false,powerPreference:"high-performance"});
if(!gl){status.textContent="WebGL unavailable — static fallback";return;}
function compile(type,src){const s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS)){console.error(gl.getShaderInfoLog(s));return null;}return s;}
const vs=compile(gl.VERTEX_SHADER,vertexSource),fs=compile(gl.FRAGMENT_SHADER,fragmentSource);
if(!vs||!fs){status.textContent="Shader unavailable — static fallback";return;}
const program=gl.createProgram();gl.attachShader(program,vs);gl.attachShader(program,fs);gl.linkProgram(program);
if(!gl.getProgramParameter(program,gl.LINK_STATUS)){status.textContent="Shader unavailable — static fallback";return;}
gl.useProgram(program);
const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
const pos=gl.getAttribLocation(program,"a_position");gl.enableVertexAttribArray(pos);gl.vertexAttribPointer(pos,2,gl.FLOAT,false,0,0);
const timeLoc=gl.getUniformLocation(program,"u_time"),resLoc=gl.getUniformLocation(program,"u_resolution"),mouseLoc=gl.getUniformLocation(program,"u_mouse");
let mx=.5,my=.5,tx=.5,ty=.5,frame=null,start=performance.now();
const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function resize(){const dpr=Math.min(devicePixelRatio||1,1.75),w=Math.max(1,Math.floor(canvas.clientWidth*dpr)),h=Math.max(1,Math.floor(canvas.clientHeight*dpr));if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;gl.viewport(0,0,w,h);}}
function render(now){resize();mx+=(tx-mx)*.045;my+=(ty-my)*.045;gl.uniform1f(timeLoc,reduced?0:(now-start)/1000);gl.uniform2f(resLoc,canvas.width,canvas.height);gl.uniform2f(mouseLoc,mx,my);gl.drawArrays(gl.TRIANGLES,0,3);frame=requestAnimationFrame(render);}
function pointer(x,y){const r=canvas.getBoundingClientRect();tx=Math.min(1,Math.max(0,(x-r.left)/r.width));ty=1-Math.min(1,Math.max(0,(y-r.top)/r.height));}
addEventListener("pointermove",e=>pointer(e.clientX,e.clientY),{passive:true});addEventListener("resize",resize,{passive:true});
document.addEventListener("visibilitychange",()=>{if(document.hidden){if(frame)cancelAnimationFrame(frame);frame=null;}else if(!frame){start=performance.now();frame=requestAnimationFrame(render);}});
status.textContent=reduced?"Reduced motion — static shader frame":"WebGL shader active";resize();frame=requestAnimationFrame(render);
})();