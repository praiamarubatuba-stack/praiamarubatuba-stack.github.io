import{j as e}from"./JYl5hIs9.js";import{$ as t,B as n,F as r,H as i,I as a,J as o,N as s,O as c,P as l,Q as u,R as d,S as f,Z as p,ct as m,et as h,g,j as _,l as v,lt as y,mt as b,ot as x,t as S,tt as C,ut as w,w as T,x as E,z as D}from"./DIwdBIQR.js";import"./xihTtKlq.js";import{$r as O,Ai as k,An as A,At as j,Bi as M,Bn as N,Bt as ee,Ci as te,Cn as ne,Di as re,Ei as ie,En as ae,Er as oe,Fi as P,Ft as se,Gi as F,Gn as ce,Ht as I,Ii as le,Jt as ue,Kt as L,Ln as de,Mi as fe,Mt as pe,Ni as me,Nn as he,Nr as ge,On as _e,Or as ve,Pi as ye,Pn as R,Qr as be,Qt as xe,Ri as Se,Rn as z,Si as Ce,Sn as B,Sr as V,Ti as we,Tn as Te,Tr as Ee,Un as De,Vi as Oe,Vn as ke,Wi as Ae,Wn as je,Wr as Me,Wt as Ne,Yt as Pe,_n as Fe,_r as Ie,ai as Le,an as Re,bn as ze,br as Be,ci as Ve,di as He,dr as Ue,ei as We,gn as Ge,hi as Ke,ii as qe,in as Je,ji as Ye,jn as Xe,jt as Ze,ki as Qe,kn as $e,kt as et,ln as tt,lt as nt,mi as rt,nn as it,nt as at,on as ot,pi as st,qt as ct,ri as lt,rn as ut,sn as dt,sr as ft,st as pt,tn as mt,vn as ht,wi as gt,wn as _t,wr as vt,xn as yt,yn as bt,zt as xt}from"./CmdOHd19.js";var St={along:42,back:62,high:48},Ct={thick:12,high:44,up:30},wt={high:30};function Tt(e){let{min:t,max:n}=e.box,r=e.motion?.kind===`swing`?e.motion.pivot:{x:t.x,y:t.y};return n.x-t.x>=n.y-t.y?{facing:`-y`,hinged:Math.abs(r.x-t.x)<=Math.abs(r.x-n.x)?`min`:`max`}:{facing:r.x>=n.x?`-x`:`+x`,hinged:Math.abs(r.y-t.y)<=Math.abs(r.y-n.y)?`min`:`max`}}var Et={thick:14},Dt=32;function Ot(e,t,n){let{motion:r}=e,{min:i,max:a}=e.box;if(r?.kind!==`swing`)return[];let o=Lt(a.z-i.z,t),s=Math.min(t.inset,(a.z-i.z)/4),c=a.x-i.x>=a.y-i.y,l=r.cup??{x:1,y:0},u=e.thickness+12,d={x:r.pivot.x+l.x*u,y:r.pivot.y+l.y*u},f=n.filter(e=>{if(e.role!==`shelf`&&e.role!==`divider`)return!1;let{min:t,max:n}=e.box;return(c?t.x<=d.x&&n.x>=d.x&&t.y-a.y<80:t.y<=d.y&&n.y>=d.y)&&n.z>i.z&&t.z<a.z});return Array.from({length:o},(e,t)=>{let n=o===1?.5:t/(o-1),r=i.z+s+n*(a.z-i.z-2*s),c=f.find(e=>r>e.box.min.z-Dt&&r<e.box.max.z+Dt);if(!c)return r;let[l,u]=[c.box.min.z-Dt,c.box.max.z+Dt];return(r-l<=u-r?[l,u]:[u,l]).find(e=>e>=i.z+St.high/2&&e<=a.z-St.high/2)??r})}function kt(e,t){let{motion:n}=e,{min:r,max:i}=e.box;if(n?.kind!==`swing`)return[];let a=i.x-r.x>=i.y-r.y;return t.map(e=>{let[t,o]=[e-St.high/2,e+St.high/2];if(a){let[e,a]=Math.abs(n.pivot.x-r.x)<=Math.abs(n.pivot.x-i.x)?[r.x,r.x+St.along]:[i.x-St.along,i.x];return{min:{x:e,y:i.y,z:t},max:{x:a,y:i.y+St.back,z:o}}}let[s,c]=Math.abs(n.pivot.y-r.y)<=Math.abs(n.pivot.y-i.y)?[r.y,r.y+St.along]:[i.y-St.along,i.y],l=n.pivot.x>=i.x?[i.x,i.x+St.back]:[r.x-St.back,r.x];return{min:{x:l[0]??0,y:s,z:t},max:{x:l[1]??0,y:c,z:o}}})}var At={along:38,thick:10,high:60};function jt(e,t){let{motion:n}=e,{min:r,max:i}=e.box;if(n?.kind!==`swing`)return[];let{along:a,thick:o,high:s}=At,c=i.x-r.x>=i.y-r.y;return t.map(e=>{let[t,l]=[e-s/2,e+s/2];if(c){let[e,s]=Math.abs(n.pivot.x-r.x)<=Math.abs(n.pivot.x-i.x)?[r.x,r.x+a]:[i.x-a,i.x];return{min:{x:e,y:i.y,z:t},max:{x:s,y:i.y+o,z:l}}}let[u,d]=Math.abs(n.pivot.y-r.y)<=Math.abs(n.pivot.y-i.y)?[r.y,r.y+a]:[i.y-a,i.y],[f,p]=n.pivot.x>=i.x?[i.x,i.x+o]:[r.x-o,r.x];return{min:{x:f,y:u,z:t},max:{x:p,y:d,z:l}}})}function Mt(e,t){let{motion:n}=e,{min:r,max:i}=e.box;if(n?.kind!==`swing`)return[];let a=i.x-r.x>=i.y-r.y,o=n.cup??{x:+!!a,y:+!a},s=a?{x:0,y:1,z:0}:{x:n.pivot.x>=i.x?1:-1,y:0,z:0};return t.map(e=>({at:{x:n.pivot.x,y:n.pivot.y,z:e},along:{x:o.x,y:o.y,z:0},into:s}))}function Nt(e,t,n){let{motion:r}=e,{min:i,max:a}=e.box;if(r?.kind!==`tilt`)return[];let o=r.angle<0,s=Math.min(n,(a.x-i.x)/4);return Array.from({length:t},(e,n)=>({at:{x:i.x+s+(t===1?.5:n/(t-1))*(a.x-i.x-2*s),y:r.y,z:r.z},along:{x:0,y:0,z:o?-1:1},into:{x:0,y:1,z:0}}))}var Pt=e=>Math.abs(e.x)>.5?`x`:Math.abs(e.y)>.5?`y`:`z`;function Ft(e,t,n){let r=Pt(t.along),i=t.along[r]>0?1:-1,a=t.at[r],o=r===`z`?[`top`,`bottom`,`divider`,`rail`]:[`side`,`partition`,`post`],s=r===`z`?`x`:`z`,c=null;for(let t of n){if(!o.includes(t.role))continue;let{min:n,max:l}=t.box;if(l[s]<=e.box.min[s]||n[s]>=e.box.max[s]||t.role===`rail`&&n.y>e.box.max.y+60)continue;let u=a<n[r]?n[r]-a:a>l[r]?a-l[r]:0,d=i>0?l[r]-a:a-n[r];(!c||u<c.away)&&(c={away:u,overlay:d})}return c&&c.away<60?c.overlay:16}function It(e,t,n){let{motion:r}=e,{min:i,max:a}=e.box;if(r?.kind!==`tilt`)return[];let o=r.angle<0?-1:1,s=(e,t)=>({x:e,y:r.y+t.into,z:r.z+o*t.along});return[i.x+22+n/2,a.x-22-n/2].map(e=>({side:s(e,t.side),front:s(e,t.front)}))}function Lt(e,t=Ne.hinges){return e<=t.two?2:e<=t.three?3:e<=t.four?4:5}function Rt(e,t,n){return t>n?(t+n)/2:Math.min(n,Math.max(t,e))}function zt(e,t){return Math.max(20,Math.min(Bt.length,e-2*t.inset))}var Bt={length:160,ends:32,reach:34,grip:12},Vt={model:``,shape:`knob`,spacing:0,length:28,reach:26,grip:28,finish:`stainless`},Ht=2.5,Ut={reach:4,cap:2.5},Wt={thickness:25,drop:40},Gt={x:1,y:0,z:0},Kt={x:0,y:1,z:0},qt={x:0,y:0,z:1},Jt=(e,t)=>({x:e.x*t||0,y:e.y*t||0,z:e.z*t||0}),Yt=(e,t)=>({x:e.x+t.x,y:e.y+t.y,z:e.z+t.z}),Xt=(e,t)=>({x:e.y*t.z-e.z*t.y,y:e.z*t.x-e.x*t.z,z:e.x*t.y-e.y*t.x});function Zt(e){let{min:t,max:n}=e.box,{facing:r,hinged:i}=Tt(e);if(r===`-y`)return{out:Jt(Kt,-1),across:Gt,from:t.x,to:n.x,thick:n.y-t.y,hinged:i,point:(e,n)=>({x:e,y:t.y,z:n})};let a=r===`-x`?t.x:n.x;return{out:r===`-x`?Jt(Gt,-1):Gt,across:Kt,from:t.y,to:n.y,thick:n.x-t.x,hinged:i,point:(e,t)=>({x:a,y:e,z:t})}}function Qt(e,t,n,r){if(e.pull)return ee(e.pull,n-2*r.inset);if(t===`knob`)return Vt;let i=zt(n,r);return{model:``,shape:`tube`,spacing:Math.max(0,i-Bt.ends),length:i,reach:Bt.reach,grip:Bt.grip,finish:`stainless`}}function $t(e,t,n,r){let i=Zt(t),{min:a,max:o}=t.box,s=i.to-i.from,{inset:c}=r,l=(e,t,n,r)=>{let{model:a,...o}=e;return{...o,at:t,along:n,out:i.out,...r&&{over:{toward:r,thick:i.thick}}}};if(t.role===`door`){let t=i.hinged===`min`?i.to:i.from,u=i.hinged===`min`?-1:1,d=e.pullAt,f=d?.door===`top`?o.z:d?.door===`bottom`?a.z:d?.door===`middle`?(a.z+o.z)/2:r.height-e.elevation,p=e.pull?.shape===`cup`,m=d?.lying===!0&&n===`bar`&&!p&&e.pull?.shape!==`edge`,h=Qt(e,n,p||m?s:o.z-a.z,r);if(n===`knob`)return l(h,i.point(t+u*c,Rt(f,a.z+c,o.z-c)),qt);if(m){let e=Rt(f,a.z+c+h.grip/2,o.z-c-h.grip/2);return l(h,i.point(t+u*(c+h.length/2),e),i.across)}if(h.shape===`cup`){let e=Rt(f,a.z+c+h.grip/2,o.z-c-h.grip/2);return l(h,i.point(t+u*Math.max(c,h.length/2+12),e),i.across)}let g=Rt(f,a.z+c+h.length/2,o.z-c-h.length/2);return h.shape===`edge`?l(h,i.point(t,g),qt,Jt(i.across,-u)):l(h,i.point(t+u*c,g),qt)}let u=Qt(e,n,s,r),d=(i.from+i.to)/2;if(t.role===`flap`){let{motion:e}=t,n=e?.kind===`tilt`&&Math.abs(e.z-o.z)<Math.abs(e.z-a.z),r=n?a.z:o.z,s=n?1:-1;return u.shape===`edge`?l(u,i.point(d,r),i.across,Jt(qt,-s)):l(u,i.point(d,r+s*c),i.across)}if(u.shape===`edge`)return l(u,i.point(d,o.z),i.across,qt);let f=e.pullAt?.drawer===`top`?Math.max(o.z-c-u.grip/2,(a.z+o.z)/2):(a.z+o.z)/2;return l(u,i.point(d,f),i.across)}function en(e){let{at:t,along:n,out:r,over:i,length:a,reach:o,grip:s}=e,c=xt(e.shape)===`knob`,l=i?.toward??Xt(r,n),u=[[n,-a/2,a/2],[r,i?-i.thick-Ht:0,o],i?[l,-s,Ht]:[l,c?-a/2:-s/2,c?a/2:s/2]],d=[0,1,2,3,4,5,6,7].map(e=>u.reduce((t,[n,r,i],a)=>Yt(t,Jt(n,e>>a&1?i:r)),t)),f=e=>Math.min(...d.map(t=>t[e])),p=e=>Math.max(...d.map(t=>t[e]));return{min:{x:f(`x`),y:f(`y`),z:f(`z`)},max:{x:p(`x`),y:p(`y`),z:p(`z`)}}}function tn(e,t,n){let{min:r,max:i}=e.box,{facing:a}=Tt(e),o=Ut.reach;if(t===`left`||t===`right`){let[e,a]=t===`right`?[i.x,i.x+n]:[r.x-n,r.x];return{box:{min:{x:e,y:r.y-o,z:r.z},max:{x:a,y:i.y,z:i.z}},length:i.z-r.z}}let s=t===`top`,[c,l]=a===`-y`?[r.y-o,i.y]:a===`-x`?[r.x-o,i.x]:[r.x,i.x+o],[u,d]=s?[i.z,i.z+n]:[r.z-n,r.z],[f,p]=a===`-y`?[r.x,i.x]:[r.y,i.y];return{box:a===`-y`?{min:{x:f,y:c,z:u},max:{x:p,y:l,z:d}}:{min:{x:c,y:f,z:u},max:{x:l,y:p,z:d}},length:p-f}}function nn(e){return e<450?2:e<800?3:4}function rn(e,t,n=Ne,r={cabinet:e,x:0,z:0}){let i=[],{pulls:a}=n,o=e.handle??`bar`,s=(t,n)=>{if(o===`cava`||t.glazed&&e.glazing?.grip!==`handle`)return;if(o===`none`){i.push({kind:`push-latch`,cabinetId:e.id,key:`${n}-latch`,quantity:1});return}let{motion:r}=t,{facing:s}=Tt(t);if(o===`profile`){let o=ot(e,t);if(!o)return;let c=tn(t,o,dt(e,t.thickness,a));e.profile?.caps&&i.push({kind:`profile-cap`,cabinetId:e.id,key:`${n}-caps`,quantity:2}),i.push({kind:`profile-handle`,cabinetId:e.id,key:n,quantity:1,size:e.profile?.caps?c.length-2*Ut.cap:c.length,facing:s,edge:o,box:c.box,...r&&{motion:r}});return}let c=$t(e,t,o,a),l=e.pull;i.push({kind:o===`knob`?`knob`:`handle`,cabinetId:e.id,key:n,quantity:1,...l&&{model:l.model,finish:l.finish,size:o===`knob`?c.length:c.spacing},facing:s,box:en(c),fit:c,...r&&{motion:r}})},c=Ve(e.sections).flatMap(e=>e.kind===`drawers`?Array.from({length:e.count},()=>e.slide??`side`):[]),l=0,u=Ve(e.sections).flatMap(e=>e.kind===`flap`?[e.stay===`strut`]:[]),d=0,f=new Set(t.flatMap(e=>e.motion?.kind===`swing`&&e.motion.on?[e.motion.on]:[]));for(let r of t){let{motion:a}=r;if(r.glazed){let{min:t,max:n}=r.box;i.push({kind:`glass-front`,cabinetId:e.id,key:`${r.key}-glass`,quantity:1,size:Math.max(n.x-t.x,n.y-t.y),height:n.z-t.z})}if(r.role===`sliding-door`)i.push({kind:`sliding-roller`,cabinetId:e.id,key:`${r.key}-rollers`,quantity:1});else if(r.role===`door`&&a?.kind===`swing`&&a.on){let t=Ot(r,n.hinges,[]);i.push({kind:`fold-hinge`,cabinetId:e.id,key:`${r.key}-hinges`,quantity:Lt(r.length,n.hinges),boxes:jt(r,t),motion:a}),s(r,`${r.key}-handle`)}else if(r.role===`door`){let o=Ot(r,n.hinges,t),c=kt(r,o),l=Mt(r,o),u=l[0]?Ft(r,l[0],t):r.thickness;i.push({kind:`hinge`,cabinetId:e.id,key:`${r.key}-hinges`,quantity:Lt(r.length,n.hinges),variant:yt(u),overlay:u,...c.length>0&&a&&{boxes:c,seats:l,motion:a,...Tt(r)}}),(!a||!f.has(a.key))&&s(r,`${r.key}-handle`)}else if(r.role===`flap`){let{min:o,max:c}=r.box,l=a?.kind===`tilt`&&Math.abs(a.z-c.z)<Math.abs(a.z-o.z)||u[d++]===!0,f=Nt(r,r.length<=900?2:3,n.hinges.inset),p=f[0]?Ft(r,f[0],t):r.thickness;i.push({kind:`hinge`,cabinetId:e.id,key:`${r.key}-hinges`,quantity:r.length<=900?2:3,variant:yt(p),overlay:p,...f.length>0&&a&&{seats:f,motion:a}});let m=c.z-o.z,h=It(r,l?bt(m):B(m),Et.thick);i.push({kind:l?`stay`:`lid-stay`,cabinetId:e.id,key:`${r.key}-stays`,quantity:2,...l?{size:ze(ht(c.x-o.x,m,r.thickness,r.glazed===!0),m,r.thickness)}:{reach:ne(m)},...h.length>0&&a&&{struts:h,motion:a}}),s(r,`${r.key}-handle`)}else if(r.role===`drawer-front`){let n=t.find(e=>e.role===`drawer-side`&&e.motion?.key===a?.key),o=c[l++],u=o===`under`,d=o===`roller`,[f,p]=[...t.filter(e=>e.role===`drawer-side`&&e.motion?.key===a?.key)].sort((e,t)=>e.box.min.x-t.box.min.x),m=(e,t)=>{let{min:n,max:r}=e.box,i=u?n.z-Ct.thick:d?n.z-2:n.z+Ct.up,[a,o]=u?[n.x,r.x+Ct.high/2]:t?[n.x-Ct.thick,n.x]:[r.x,r.x+Ct.thick];return{min:{x:a,y:n.y,z:i},max:{x:o,y:r.y,z:i+(u?Ct.thick:d?wt.high:Ct.high)}}};i.push({kind:u?`slide-under`:d?`slide-roller`:`slide`,cabinetId:e.id,key:`${a?.key??r.key}-slides`,quantity:1,...n&&{size:n.length},...f&&p&&a&&{boxes:[m(f,!0),m(p,!1)],motion:a}}),s(r,`${a?.key??r.key}-handle`)}}let p=new Map;for(let e of t){if(e.role!==`sliding-door`)continue;let{min:t,max:r}=e.box,i=p.get(t.z);p.set(t.z,{from:Math.min(i?.from??t.x,t.x),to:Math.max(i?.to??r.x,r.x),top:r.z,deep:Math.max(i?.deep??0,r.y+n.sliding.margin)})}[...p.entries()].forEach(([t,r],a)=>{let{below:o,above:s}=n.sliding;i.push({kind:`sliding-track`,cabinetId:e.id,key:`sliding-${a+1}-tracks`,quantity:1,size:r.to-r.from,boxes:[{min:{x:r.from,y:0,z:t-o},max:{x:r.to,y:r.deep,z:t+4}},{min:{x:r.from,y:0,z:r.top-10},max:{x:r.to,y:r.deep,z:r.top+s}}]})});let m=t.find(e=>e.role===`side`);if(m&&!e.corner){let t=m.thickness,n=(m.box.min.y+m.box.max.y)/2;Je(ut(r.cabinet,t)??[]).forEach(a=>{let{section:o}=a;if(!(`rail`in o)||!o.rail)return;let s=a.clearTop-Wt.drop+r.z;xe(a,t).forEach((t,o)=>{i.push({kind:`hanging-rail`,cabinetId:e.id,key:`rail-${a.path}-${o+1}`,quantity:1,size:t.to-t.from,box:{min:{x:t.from+r.x,y:n-Wt.thickness/2,z:s-Wt.thickness},max:{x:t.to+r.x,y:n+Wt.thickness/2,z:s}}}),i.push({kind:`rail-support`,cabinetId:e.id,key:`rail-${a.path}-${o+1}-supports`,quantity:2})})})}let h=0,g=0;for(let e of t)e.stone||(e.role===`bottom`||e.role===`top`||e.role===`divider`||e.role===`partition`||e.role===`shelf`&&e.fixed?h+=2*nn(e.width):e.role===`rail`||e.role===`plinth`||e.role===`panel`||e.role===`filler`||e.role===`filler-block`||e.role===`post`||e.role===`blind`?h+=2:e.role===`end-panel`?h+=4:e.role===`shelf`&&(g+=4));let _=(t,n)=>{n>0&&i.push({kind:t,cabinetId:e.id,key:`carcass-${t}`,quantity:n})};return n.joinery===`minifix`?(_(`minifix`,h),_(`dowel`,h)):n.joinery===`screw`?_(`screw`,h):_(`dowel`,2*h),_(`shelf-support`,g),i.push(...sn(e)),i}var an={size:40,inset:50,front:70},on=1e3;function sn(e){if(!(e.placement.kind!==`on`&&e.elevation>0&&e.type!==`upper`)||e.hung||e.plinth||e.block||e.panel)return[];let{width:t,depth:n,elevation:r,corner:i}=e,{size:a,inset:o,front:s}=an;if(i){let c=i.legDepth,[l,u]=[t-c,n-c],d=Math.min(s,c/2),f={x:t-o-a,y:n-o-a};return[{x:o,y:u+d},{x:o,y:f.y},{x:l+d,y:u+d},f,{x:l+d,y:o},{x:f.x,y:o}].map((n,o)=>{let s=i.side===`left`?t-n.x-a:n.x;return{kind:`foot`,cabinetId:e.id,key:`foot-${o+1}`,quantity:1,size:r,box:{min:{x:s,y:n.y,z:-r},max:{x:s+a,y:n.y+a,z:0}}}})}let c=[o,...t>on?[(t-a)/2]:[],t-o-a],l=[Math.min(s,n/2),Math.max(n-o-a,n/2)];return c.flatMap((t,n)=>l.map((i,o)=>({kind:`foot`,cabinetId:e.id,key:`foot-${n+1}-${o+1}`,quantity:1,size:r,box:{min:{x:t,y:i,z:-r},max:{x:t+a,y:i+a,z:0}}})))}var cn=new WeakMap;function ln(e){let t=[],n=r=>{for(let i of r)i.kind===`bays`&&i.bays.forEach(e=>n(e.sections)),i.kind===`open`&&i.builtIn?.surround===`frame`&&t.push({kind:`appliance-frame`,cabinetId:e.id,key:`builtin-${t.length+1}-frame`,quantity:1,size:i.builtIn.width,height:i.builtIn.height})};return n(e.sections),t}function un(e,t){let n=ue(e,t),r=cn.get(n);return r||(r=[...rn(t,n,tt(e,t),Pe(e,t)),...ln(t)],cn.set(n,r)),r}function dn(e){let t=new Map;for(let n of He(e))for(let r of un(e,n)){let e=`${r.kind}|${r.size??``}|${r.height??``}|${r.variant??``}|${r.model??``}|${r.finish??``}`,n=t.get(e);t.set(e,{kind:r.kind,...r.size!==void 0&&{size:r.size},...r.height!==void 0&&{height:r.height},...r.variant!==void 0&&{variant:r.variant},...r.model!==void 0&&{model:r.model},...r.finish!==void 0&&{finish:r.finish},quantity:(n?.quantity??0)+r.quantity})}return[...t.values()]}var fn=(e,t)=>rt(e,t.frontMaterialId,`material`)?.thickness??18;function pn(e,t,n){let r=ve(e,t)+t.height;if(t.trim?.top)return r+t.trim.top;if(t.type===`base`||t.block||t.corner)return r;let i=$e(e,t);return i!==null&&i-r<=n?i:r}function mn(e,t,n={}){let r=t.corner||t.block||t.panel?null:Xe(e,t);if(!r)return null;let i=n.maxSide??150,a=n.maxTop??600,o=t.trim??{},s=e=>Math.round(e*10)/10,c=t=>{let n=Ie(e,t);return n!==null&&n.wallId===r.gaps.wallId&&n.side===r.gaps.side&&!t.corner},l=(n,r)=>{if(n.against===`open`||n.gap<=2||n.gap>i)return;let a=_e(e,t).reach[r],o=0;for(let t of n.neighbours){let n=c(t);if(r===`right`&&n)return;let i=_e(e,t).reach[r===`left`?`right`:`left`],a=r===`left`?t.trim?.right:t.trim?.left;o=Math.max(o,n?i+(a??0):fn(e,t))}let l=n.gap-a-o;return l>2?s(l):void 0},u=l(r.left,`left`),d=l(r.right,`right`),f=ve(e,t)+t.height,p=$e(e,t),m=p===null?0:p-f,h=t.type===`base`||m<=2||m>a?void 0:s(m),g=t=>t.depth+fn(e,t),_=(n,r)=>(r===`left`?u:d)===void 0?n.against===`open`||n.gap>i||n.neighbours.length!==0&&n.neighbours.filter(t=>pn(e,t,a)>=f+(h??0)-2).every(e=>c(e)&&g(e)<g(t)-2):!1,v=n.topSetback??(o.top===void 0?20:o.topSetback),{left:y,right:b,top:x,topSetback:S,topLeft:C,topRight:w,...T}=o;return{...T,...u!==void 0&&{left:u},...d!==void 0&&{right:d},...h!==void 0&&{top:h,...v!==void 0&&v>0&&{topSetback:v},..._(r.left,`left`)&&{topLeft:!0},..._(r.right,`right`)&&{topRight:!0}}}}var hn={baseboard:{height:100,thickness:15,color:`#f4f4f1`,profile:{model:Ze}},crown:{height:80,depth:80,color:`#f4f4f1`,profile:{model:pe}},plinthSetback:70,stonePlinth:{height:80,setback:150,sideSetback:20},closureSetback:20,sideClosure:30,highestPlinth:200};function gn(e,t,n){if(t.block||t.panel||t.corner)return null;let r=Xe(e,t);if(!r)return null;let i=_e(e,t).reach,a=t.trim??{},o={},s={left:0,right:0};for(let e of[`left`,`right`]){let a=r[e];if(a.against!==`building`||a.gap>150)continue;let c=a.gap-i[e];c>2?o[e]=Math.round(c*10)/10:(t.placement.kind===`wall`||e===`right`)&&(o[e]=n,s[e]=n-Math.max(0,c))}if(o.left===void 0&&o.right===void 0)return null;let c=t.width-s.left-s.right;if(c<Le.width.min)return null;let l=o.left??a.left,u=o.right??a.right;if(l===a.left&&u===a.right&&s.left===0&&s.right===0)return null;let{placement:d}=t;return{trim:{...a,...l!==void 0&&{left:l},...u!==void 0&&{right:u}},...c!==t.width&&{width:c},...s.left>0&&d.kind===`wall`&&{placement:{...d,offset:d.offset+s.left}}}}function _n(e){return e.block||e.panel||e.type===`upper`||e.placement.kind===`on`?!1:e.elevation>0&&e.elevation<=hn.highestPlinth}var vn=(e,t)=>e!==void 0&&e.setback===t.setback&&e.sideSetback===t.sideSetback&&e.left===t.left&&e.right===t.right&&e.back===t.back&&e.materialId===t.materialId,yn=(e,t)=>JSON.stringify(e??null)===JSON.stringify(t);function bn(e,t,n,r,i){let a=n.materialId===void 0?t.plinth?.materialId:n.materialId??void 0,o=a===void 0?void 0:rt(e,a,`material`),s=o?.category===`stone`,c=s?hn.stonePlinth:{setback:hn.plinthSetback,sideSetback:void 0},l=(t.plinth?.materialId!==void 0&&rt(e,t.plinth.materialId,`material`)?.category===`stone`)===s,u=n.setback??(l?t.plinth?.setback:void 0)??c.setback,d=n.sideSetback??(l?t.plinth?.sideSetback:void 0)??c.sideSetback,{trim:f}=t,p=it({...t,elevation:r,plinth:{setback:u}},s),m=ve(e,t),h=n=>(n===`back`?i?.back:i?.sides)===!0&&A(e,t,n,m,m+t.height),g=n=>h(n)&&p||((n===`left`?f?.left:f?.right)??0)>0?!1:A(e,t,n,0,r),_=!(h(`back`)&&p)&&A(e,t,`back`,0,r);return{setback:u,...d!==void 0&&{sideSetback:d},...g(`left`)&&{left:!0},...g(`right`)&&{right:!0},..._&&{back:!0},...o&&{materialId:o.id}}}function xn(e,t){let n=t.only&&t.only.length>0?new Set(t.only):null,r=st(e,`cabinet`).filter(e=>!n||n.has(e.id)),i=t.base??{},a=[],o=[],s=[],c=[],l={plinth:0,closure:0,cladding:0,side:0};for(let n of r){let r=!n.block&&n.corner===null,u=r&&t.cladding!==void 0?t.cladding??void 0:n.cladding;if(r&&t.cladding!==void 0&&!yn(n.cladding,t.cladding)&&(l.cladding++,c.push({id:n.id,cladding:t.cladding})),_n(n)){let r=n.elevation+n.height,o=i.height??n.elevation,s=Math.max(1,Math.min(o,r-Le.height.min),r-Le.height.max),c=bn(e,n,i,s,u),d=Math.abs(s-n.elevation)>.5;(!vn(n.plinth,c)||d)&&(l.plinth++,t.plinth&&a.push({id:n.id,plinth:c,...d&&{elevation:s,height:r-s}}))}let d=gn(e,n,t.sideClosureWidth??hn.sideClosure);if(d&&(l.side++,t.sideClosure&&s.push({id:n.id,...d})),n.type===`base`||n.block||n.corner)continue;let f=mn(e,n,t.closureSetback===void 0?{}:{topSetback:t.closureSetback});if(f?.top===void 0)continue;let{trim:p}=n;if((f.top!==p?.top||f.topSetback!==p?.topSetback||f.topLeft!==p?.topLeft||f.topRight!==p?.topRight)&&(l.closure++,t.closure)){let{top:e,topSetback:t,topLeft:r,topRight:i,...a}=p??{},{top:s,topSetback:c,topLeft:l,topRight:u}=f;o.push({id:n.id,trim:{...a,top:s,...c!==void 0&&{topSetback:c},...l&&{topLeft:l},...u&&{topRight:u}}})}}let u=Ke(e).trim,d={...t.baseboard&&{baseboard:t.baseboard},...t.crown&&{crown:t.crown}};return{plinths:a,closures:o,sides:s,claddings:c,...JSON.stringify(u??{})!==JSON.stringify(d)&&{trim:d.baseboard||d.crown?d:null},could:l}}function Sn(e,t,n,r){let i=[],a=[],o=Math.min(t.height,t.endHeight??t.height);for(let i of Ue(e,t,n)){let{cabinet:t}=i;if(t.block)continue;let{reach:n}=_e(e,t),s=i.start-(t.trim?.left??0)-n.left,c=i.end+(t.trim?.right??0)+n.right,l=ve(e,t)+t.height+(t.trim?.top??0);r.crown&&l>=o-r.crown.height&&a.push({from:s,to:c})}return{baseboard:i,crown:a}}var Cn=[{id:`tramontina-lavinia-40`,maker:`Tramontina`,name:`Lavínia 40 BL`,width:400,depth:340,bowlDepth:170,corner:70},{id:`tramontina-lavinia-47`,maker:`Tramontina`,name:`Lavínia 47 BL`,width:470,depth:305,bowlDepth:170,corner:70},{id:`tramontina-lavinia-56`,maker:`Tramontina`,name:`Lavínia 56 BL`,width:560,depth:340,bowlDepth:145,corner:70},{id:`tramontina-standard-47`,maker:`Tramontina`,name:`Standard 47 × 30`,width:470,depth:300,bowlDepth:140,corner:70},{id:`tramontina-quadrum-50`,maker:`Tramontina`,name:`Quadrum 50`,width:500,depth:400,bowlDepth:200,corner:12}],wn=45;function Tn(e){return Cn.find(t=>Math.abs(t.width-e.width)<1&&Math.abs(t.depth-e.depth)<1&&Math.abs(t.bowlDepth-e.bowlDepth)<1)??null}function En(e){let t=Tn(e)?.corner??wn;return Math.min(t,e.width/2-1,e.depth/2-1)}function Dn(e,t,n){return e.tap??{x:e.offset,y:Math.min(t+55,n-27-4)}}function On(e){let t=Number.parseInt(e.slice(1),16);return[t>>16&255,t>>8&255,t&255]}function kn([e,t,n],r=1){return`rgb(${Math.round(e)} ${Math.round(t)} ${Math.round(n)} / ${r})`}function An(e,t){let n=t>0?255:0,r=Math.abs(t),i=e=>e*(1-r)+n*r;return[i(e[0]),i(e[1]),i(e[2])]}function jn([e,t,n]){return(.299*e+.587*t+.114*n)/255}function Mn(e){let t=2166136261;for(let n=0;n<e.length;n++)t=Math.imul(t^e.charCodeAt(n),16777619);return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Nn=(e,t,n)=>t+e()*(n-t);function Pn(e,t,n,r,i,a){let o=[1,2,3].map(e=>({turns:e,reach:a*r()/e,phase:r()*Math.PI*2}));for(let r of[-n,0,n]){e.beginPath();for(let n=0;n<=t;n+=4){let a=i+r;for(let e of o)a+=e.reach*Math.sin(n/t*e.turns*Math.PI*2+e.phase);n===0?e.moveTo(n,a):e.lineTo(n,a)}e.stroke()}}function Fn(e,t,n,r,i,a){let o=i.upright?n:t,s=i.upright?t:n,c=[1,2,3,5,8].map(e=>({turns:e,reach:i.sway*(.4+r())/e,phase:r()*Math.PI*2})),l={turns:1+Math.floor(r()*3),phase:r()*Math.PI*2},u=Math.ceil(o/3),d=e=>{let t=e/u,n=i.at+i.slope*s*t;for(let e of c)n+=e.reach*Math.sin(t*e.turns*Math.PI*2+e.phase);return n};e.lineCap=`round`;for(let t=-2;t<=2;t++)for(let n=0;n<u;n++){let r=n/u,c=.5+.5*Math.sin(r*l.turns*Math.PI*2+l.phase);e.lineWidth=a[0]+(a[1]-a[0])*c*c;let[f,p]=[d(n)+t*s,d(n+1)+t*s],[m,h]=[n/u*o,(n+1)/u*o];e.beginPath(),i.upright?(e.moveTo(f,m),e.lineTo(p,h)):(e.moveTo(m,f),e.lineTo(h,p)),e.stroke()}}function In(e,t,n,r,i,a){let o=jn(r)<.35?.16:.07;for(let s=0;s<a/6;s++)e.strokeStyle=kn(An(r,Nn(i,-.09,o)),.35),e.lineWidth=Nn(i,5,26),Pn(e,t,n,i,i()*n,5);for(let s=0;s<a;s++)e.strokeStyle=kn(An(r,Nn(i,-.3,i()<.25?o:-.08)),Nn(i,.2,.55)),e.lineWidth=Nn(i,.6,2),Pn(e,t,n,i,i()*n,4)}function Ln(e,t,n,r,i,a,o){for(let s=0;s<a;s++){let a=i()*t,s=i()*n,c=Nn(i,.08,.28)*t,l=An(r,Nn(i,-o,o));for(let r of[-t,0,t])for(let t of[-n,0,n]){let n=e.createRadialGradient(a+r,s+t,0,a+r,s+t,c);n.addColorStop(0,kn(l,.3)),n.addColorStop(1,kn(l,0)),e.fillStyle=n,e.fillRect(a+r-c,s+t-c,c*2,c*2)}}}function Rn(e,t,n,r,i,a,o,s){for(let c=0;c<a;c++)e.fillStyle=kn(An(r,Nn(i,-s,s*1.2)),Nn(i,.35,.9)),e.beginPath(),e.arc(i()*t,i()*n,Nn(i,.4,o),0,Math.PI*2),e.fill()}function zn(e,t,n,r,i){let a=t/r.across,o=n/r.up;for(let t=0;t<r.up;t++){let n=r.bonded&&t%2==1?a/2:0;for(let s=-1;s<r.across;s++){let c=s*a+n;e.save(),e.beginPath(),e.rect(c+r.joint/2,t*o+r.joint/2,a-r.joint,o-r.joint),e.clip(),i(c,t*o,a,o),e.restore()}}}var Bn=[214,209,199],Vn={wood:{width:2400,height:1200,pixels:2048,roughness:.7,sample:420,upright:!0,draw(e,t,n,r,i){e.fillStyle=kn(r),e.fillRect(0,0,t,n),Ln(e,t,n,r,i,10,.04),In(e,t,n,r,i,320)}},planks:{width:1800,height:600,pixels:1024,roughness:.6,sample:900,upright:!0,draw(e,t,n,r,i){e.fillStyle=kn(An(r,-.45)),e.fillRect(0,0,t,n);let a=n/4;for(let n=0;n<4;n++){let o=i()*t;for(let[s,c]of[[o-t,t*.55],[o-t*.45,t*.45],[o,t*.55],[o+t*.55,t*.45]]){e.save(),e.beginPath(),e.rect(s+.6,n*a+.6,c-1.2,a-1.2),e.clip();let o=An(r,Nn(i,-.1,.08));e.fillStyle=kn(o),e.fillRect(s,n*a,c,a),e.translate(0,n*a),In(e,t,a,o,i,16),e.restore()}}}},tile:{width:600,height:600,pixels:256,roughness:.4,sample:1500,draw(e,t,n,r,i){e.fillStyle=kn(An(r,-.16)),e.fillRect(0,0,t,n),zn(e,t,n,{across:1,up:1,joint:2.5,bonded:!1},()=>{e.fillStyle=kn(r),e.fillRect(0,0,t,n),Ln(e,t,n,r,i,8,.05)})}},mosaic:{width:300,height:300,pixels:384,roughness:.3,sample:420,draw(e,t,n,r,i){e.fillStyle=kn(jn(r)>.6?An(r,-.2):An(r,.55)),e.fillRect(0,0,t,n),zn(e,t,n,{across:6,up:6,joint:5,bonded:!1},(t,n,a,o)=>{e.fillStyle=kn(An(r,Nn(i,-.14,.14))),e.fillRect(t,n,a,o)})}},subway:{width:200,height:200,pixels:256,roughness:.25,sample:620,draw(e,t,n,r){e.fillStyle=kn(jn(r)>.6?An(r,-.24):An(r,.5)),e.fillRect(0,0,t,n),zn(e,t,n,{across:1,up:2,joint:4,bonded:!0},(t,n,i,a)=>{let o=e.createLinearGradient(0,n,0,n+a);o.addColorStop(0,kn(An(r,.12))),o.addColorStop(.12,kn(r)),o.addColorStop(.9,kn(r)),o.addColorStop(1,kn(An(r,-.1))),e.fillStyle=o,e.fillRect(t,n,i,a)})}},brick:{width:450,height:150,pixels:768,roughness:.95,sample:720,draw(e,t,n,r,i){let a=jn(r)>.7,o=a?An(r,-.3):Bn,s=a?.4:1;e.fillStyle=kn(o),e.fillRect(0,0,t,n),Rn(e,t,n,o,i,900,1.2,.1);let c=new Map;zn(e,t,n,{across:2,up:2,joint:14,bonded:!0},(n,a,o,l)=>{let u=`${Math.round(a)}:${Math.round((n%t+t)%t/o)}`,d=c.get(u)??An(r,Nn(i,-.16,.12)*s);c.set(u,d),e.fillStyle=kn(d),e.fillRect(n,a,o,l);let f=Mn(u);e.translate(n,a),Rn(e,o,l,d,f,160,1.6,.12*s)})}},granite:{width:420,height:420,pixels:512,roughness:.48,sample:300,draw(e,t,n,r,i){e.fillStyle=kn(r),e.fillRect(0,0,t,n),Ln(e,t,n,r,i,14,.08);let a=jn(r)>.75?.2:.3;Rn(e,t,n,r,i,5200,2.4,a),Rn(e,t,n,r,i,2600,1,a*1.6),Rn(e,t,n,An(r,.45),i,260,1.1,.25)}},marble:{width:1800,height:1800,pixels:1024,roughness:.42,sample:900,draw(e,t,n,r,i){let a=jn(r)>.5;e.fillStyle=kn(r),e.fillRect(0,0,t,n),Ln(e,t,n,r,i,40,a?.06:.1),Ln(e,t,n,An(r,a?-.12:.14),i,18,.05);let o=a?An(r,-.5):An(r,.72),s=i()<.5?1:-1,c=(r,a,c,l,u)=>{for(let d=0;d<r;d++){let r={at:i()*(a?t:n),slope:s*(c[Math.floor(i()*c.length)]??1),sway:Nn(i,l[0],l[1]),upright:a},f=`${a} ${d} ${r.at}`;for(let[i,a,s]of u)e.strokeStyle=kn(o,s),Fn(e,t,n,Mn(f),r,[i,a])}};c(3,!1,[1],[60,150],[[26,70,.035],[6,22,.08],[.8,3.4,.5]]),c(5,!1,[1,2],[30,90],[[8,26,.04],[.5,1.8,.34]]),c(4,!0,[1,2],[20,70],[[5,14,.035],[.4,1.2,.26]]),c(9,i()<.5,[1,2,3],[10,40],[[.3,.8,.2]]),Rn(e,t,n,r,i,2600,.9,.05)}},concrete:{width:2400,height:2400,pixels:768,roughness:.85,sample:1500,draw(e,t,n,r,i){e.fillStyle=kn(r),e.fillRect(0,0,t,n),Ln(e,t,n,r,i,70,.1),Rn(e,t,n,r,i,5e3,1.1,.07)}}},Hn=new Map,Un=new Map;function Wn(e){let t=e===void 0?void 0:Vn[e];if(t){let{width:e,height:n,roughness:r}=t;return{width:e,height:n,roughness:r,upright:t.upright===!0,runs:`across`}}let n=at(e);if(n){let{width:e,height:t,roughness:r,upright:i,runs:a,image:o,relief:s}=n;return{width:e,height:t,roughness:r,upright:i,runs:a,image:o,relief:s,seamless:!0}}let r=pt(e);return r?{width:r.width,height:r.height,roughness:r.surface===`Liso`?.45:r.figured?.65:.75,upright:!0,runs:`up`,image:r.image,seamless:r.seamless===!0}:null}function Gn(e){let t=e.texture===void 0?void 0:Vn[e.texture];if(!t)return null;let n=`${e.texture}|${e.color.toLowerCase()}`,r=Hn.get(n);if(!r){r=document.createElement(`canvas`),r.width=t.pixels,r.height=Math.round(t.pixels*t.height/t.width);let i=r.getContext(`2d`);if(!i)return null;t.draw(i,r.width,r.height,On(e.color),Mn(n)),Hn.set(n,r)}return r}function Kn(t,n=96){let r=pt(t.texture)??at(t.texture);if(r)return`${r.color} url("${e(r.sample)}") center / cover`;let i=t.texture===void 0?void 0:Vn[t.texture],a=i&&Gn(t);if(!i||!a)return t.color;let o=`${t.texture}|${t.color.toLowerCase()}|${n}`,s=Un.get(o);if(!s){let e=document.createElement(`canvas`);e.width=e.height=n;let r=e.getContext(`2d`),c=r?.createPattern(a,`repeat`);if(!r||!c)return t.color;let l=n/i.sample;c.setTransform(new DOMMatrix().scale(i.width*l/a.width,i.height*l/a.height)),r.fillStyle=c,r.fillRect(0,0,n,n),s=e.toDataURL(`image/png`),Un.set(o,s)}return`${t.color} url("${s}") center / cover`}var qn=[`stainless`,`chrome`,`black`,`graphite`,`champagne`,`gold`,`bronze`,`copper`],Jn=[{id:`barra-redonda`,label:`Barra redonda`,title:`Barra tubular de 12 mm em duas colunas, passando das colunas nas pontas`,shape:`tube`,sizes:[96,128,160,192,224,256,320,448,640,800],size:160,ends:64,reach:35,grip:12,finishes:qn,finish:`stainless`},{id:`alca-quadrada`,label:`Alça quadrada`,title:`Barra quadrada de 10 mm que termina nas colunas, de linhas retas`,shape:`square`,sizes:[96,128,160,192,256,320,448],size:128,ends:10,reach:32,grip:10,finishes:qn,finish:`black`},{id:`barra-chata`,label:`Barra chata`,title:`Lâmina de 20 mm de largura em duas colunas finas`,shape:`flat`,sizes:[96,128,160,192,256,320,448],size:160,ends:40,reach:30,grip:20,finishes:qn,finish:`graphite`},{id:`arco`,label:`Arco`,title:`Alça em arco, com os pés nos parafusos`,shape:`arch`,sizes:[64,96,128,160,192],size:96,ends:10,reach:30,grip:10,finishes:qn,finish:`bronze`},{id:`concha`,label:`Concha`,title:`Concha aberta embaixo, para gavetas; os dedos entram por baixo dela`,shape:`cup`,sizes:[64,96],size:64,ends:32,reach:26,grip:38,finishes:qn,finish:`bronze`},{id:`perfil-borda`,label:`Perfil de borda`,title:`Perfil de alumínio sobre a borda da frente, com a aba descendo na frente dela`,shape:`edge`,sizes:[96,128,160,192,256,320,448],size:128,ends:32,reach:12,grip:18,finishes:[`aluminium`,`black`,`champagne`,`gold`,`stainless`,`graphite`,`white`],finish:`aluminium`},{id:`botao-redondo`,label:`Botão redondo`,title:`Botão de um parafuso, redondo`,shape:`knob`,sizes:[20,25,30,35],size:25,ends:0,reach:26,grip:25,finishes:[...qn,`white`],finish:`stainless`},{id:`botao-quadrado`,label:`Botão quadrado`,title:`Botão de um parafuso, quadrado`,shape:`knob-square`,sizes:[20,25,30],size:25,ends:0,reach:24,grip:25,finishes:qn,finish:`black`}],Yn={stainless:{label:`Inox escovado`,color:`#c2c6ca`,roughness:.32,metalness:.5},aluminium:{label:`Alumínio fosco`,color:`#c9cdd1`,roughness:.42,metalness:.45},chrome:{label:`Cromado`,color:`#e9ecef`,roughness:.12,metalness:.5},black:{label:`Preto fosco`,color:`#232427`,roughness:.55,metalness:.2},graphite:{label:`Grafite`,color:`#55585d`,roughness:.38,metalness:.45},champagne:{label:`Champanhe`,color:`#d3c19f`,roughness:.36,metalness:.5},gold:{label:`Dourado escovado`,color:`#d0ac52`,roughness:.3,metalness:.5},bronze:{label:`Bronze`,color:`#80603f`,roughness:.42,metalness:.45},copper:{label:`Cobre`,color:`#c07a5b`,roughness:.34,metalness:.5},white:{label:`Branco fosco`,color:`#f0f0ec`,roughness:.5,metalness:.05}};function Xn(e){return Jn.find(t=>t.id===e)}function Zn(e){return Jn.filter(t=>xt(t.shape)===e)}function Qn(e,t=e.size,n=e.finish){let r=xt(e.shape)===`knob`;return{model:e.id,shape:e.shape,spacing:r?0:t,length:r?t:t+e.ends,reach:e.reach,grip:r?t:e.grip,finish:e.finishes.includes(n)?n:e.finish}}var $n=e=>e.spacing>0?e.spacing:e.length;function er(e,t,n){let r=Xn(e)?.label??e,i=t===void 0||t<=0?r:`${r} ${t} mm`;return n?`${i}, ${Yn[n].label.toLowerCase()}`:i}var tr=[{id:`brastemp-bdd61`,maker:`Brastemp`,label:`BDD61 · 4 bocas a gás`,kind:`gas`,burners:4,width:530,depth:350,glass:[580,510]},{id:`brastemp-5`,maker:`Brastemp`,label:`5 bocas a gás`,kind:`gas`,burners:5,width:635,depth:350,glass:[730,510]},{id:`electrolux-5`,maker:`Electrolux`,label:`5 bocas a gás`,kind:`gas`,burners:5,width:690,depth:470,glass:[750,520]},{id:`fischer-procook-4`,maker:`Fischer`,label:`Pro Cook · 4 bocas a gás`,kind:`gas`,burners:4,width:510,depth:360,glass:[580,500]},{id:`fischer-4q-inducao`,maker:`Fischer`,label:`4Q · indução`,kind:`induction`,burners:4,width:560,depth:490,glass:[590,520]}];function nr(e){let t=tr.find(t=>t.id===e.model);if(t)return t;let n=t=>Math.abs(t.width-e.width)+Math.abs(t.depth-e.depth);return[...tr].sort((e,t)=>n(e)-n(t))[0]}function rr(e){if(e.burners>=5)return[[.5,.56,.2],[.17,.36,.13],[.83,.36,.13],[.17,.8,.15],[.83,.8,.15]];let t=e.kind===`gas`?.4:.3;return[[.27,t,.15],[.73,t,.13],[.27,.78,.13],[.73,.78,.17]]}var ir={minX:-500,maxX:4500,minY:-3500,maxY:500},ar=700,or=500;function sr(e){return st(e,`floor`).filter(e=>!oe(e))}function cr(e){let t=st(e,`floor`).filter(oe);return t.length>0?t.map(e=>({floorId:e.id,finish:e.finish})):[{floorId:null,finish:Ke(e).floorFinish}]}function lr(e){let t=st(e,`floor`).filter(oe);if(t.length>0)return t.map(e=>gt(e.outline));let n=vt(e);if(n.length>0)return n;let{minX:r,maxX:i,minY:a,maxY:o}=ir;for(let t of st(e,`cabinet`))for(let n of ge(e,t))r=Math.min(r,Math.floor((n.x-ar)/or)*or),i=Math.max(i,Math.ceil((n.x+ar)/or)*or),a=Math.min(a,Math.floor((n.y-ar)/or)*or),o=Math.max(o,Math.ceil((n.y+ar)/or)*or);return[[{x:r,y:a},{x:i,y:a},{x:i,y:o},{x:r,y:o}]]}var ur=[{id:`slim`,label:`Slim`,title:`Perfil fino, de 20 mm à mostra`,bar:20},{id:`square`,label:`Reto`,title:`Perfil reto, de 38 mm à mostra`,bar:38},{id:`wide`,label:`Largo`,title:`Perfil largo, de 55 mm à mostra`,bar:55}];function dr(e){return ur.find(t=>t.id===e)??ur[0]}var fr={out:17,thick:3,back:9},pr=[{id:`profile`,label:`No perfil`,title:`O puxador é o próprio perfil: a barra de baixo nos aéreos, a de cima nos inferiores`},{id:`handle`,label:`Do móvel`,title:`O mesmo puxador das outras frentes do móvel`}],mr=[{id:`natural`,label:`Natural fosco`,color:`#c9ccd1`},{id:`black`,label:`Preto`,color:`#26272a`},{id:`bronze`,label:`Bronze`,color:`#6b5340`},{id:`champagne`,label:`Champanhe`,color:`#cdbb9a`},{id:`gold`,label:`Dourado`,color:`#c8a54b`},{id:`white`,label:`Branco`,color:`#f1f1ee`}],hr=[{id:`clear`,label:`Incolor`,color:`#b9d6e4`,opacity:.3},{id:`smoked`,label:`Fumê`,color:`#3d4347`,opacity:.6},{id:`bronze`,label:`Bronze`,color:`#8a6a4a`,opacity:.55},{id:`frosted`,label:`Leitoso`,color:`#eef2f3`,opacity:.9},{id:`fluted`,label:`Canelado`,color:`#cfe0e6`,opacity:.6},{id:`reflective`,label:`Reflecta`,color:`#5d6a70`,opacity:.8,mirror:!0},{id:`mirror`,label:`Espelho`,color:`#cfd6db`,opacity:1,mirror:!0}],gr={profile:`slim`,frame:`natural`,glass:`clear`};function _r(e){let t=e.block?.outline??e.panel?.outline,{width:n,depth:r}=e;return t&&t.length>=3?t.map(({x:e,y:t,radius:i,bow:a})=>({x:e*n,y:t*r,...i!==void 0&&{radius:i},...a!==void 0&&{bow:a}})):[{x:0,y:0},{x:n,y:0},{x:n,y:r},{x:0,y:r}]}function vr(e){let t=gt(e),n=t.map(e=>e.x),r=t.map(e=>e.y),[i,a,o,s]=[Math.min(...n),Math.max(...n),Math.min(...r),Math.max(...r)],c=Math.max(1,a-i),l=Math.max(1,s-o),u=e.map(e=>({x:Math.min(1,Math.max(0,(e.x-i)/c)),y:Math.min(1,Math.max(0,(e.y-o)/l)),...e.radius!==void 0&&{radius:e.radius},...e.bow!==void 0&&Math.abs(e.bow)>.01&&{bow:e.bow}})),d=(e,t)=>Math.abs(e-t)<1e-6;return{width:c,depth:l,left:i,front:o,outline:u.length===4&&u.every(e=>e.radius===void 0&&e.bow===void 0&&(d(e.x,0)||d(e.x,1))&&(d(e.y,0)||d(e.y,1)))&&new Set(u.map(e=>`${Math.round(e.x)},${Math.round(e.y)}`)).size===4?null:u}}function yr(e,t,n,r){let i=F(t,e),a=F(r,n),o=i.x*a.y-i.y*a.x;if(Math.abs(o)<1e-9)return null;let s=((n.x-e.x)*a.y-(n.y-e.y)*a.x)/o;return Qe(e,Ae(i,s))}function br(e,t){let n=e.length;return ie(e[t],e[(t+1)%n],we(e))}function xr(e,t,n){let r=e.length,i=t%r,a=(i+1)%r,o=e[i],s=e[a],c=Ae(br(e,i),n),l=Qe(o,c),u=Qe(s,c),d=e[(i-1+r)%r],f=e[(i+2)%r],p=yr(d,o,l,u)??l,m=yr(s,f,l,u)??u;return e.map((e,t)=>t===i?{...e,x:p.x,y:p.y}:t===a?{...e,x:m.x,y:m.y}:e)}function Sr(e,t){let n=e.length,r=we(e),i=e.map((i,a)=>{let o=e[(a+1)%n],s=Ae(ie(i,o,r),t);return[Qe(i,s),Qe(o,s)]});return e.map((e,t)=>{let[r,a]=i[(t-1+n)%n],[o,s]=i[t],c=yr(r,a,o,s)??o;return{...e,x:c.x,y:c.y}})}function Cr(e,t){let n=br(e,t),r=gt(e).map(e=>me(e,n));return Math.max(...r)-Math.min(...r)}function wr(e,t){let n=e.length,r=e[t%n],i=e[(t+1)%n],a=Ae(Qe(r,i),.5);return r.bow?Qe(a,Ae(br(e,t),r.bow)):a}function Tr(e,t,n){let r=e.length,i=e[t],a=e[(t-1+r)%r],o=e[(t+1)%r],s=Math.min(n,fe(i,a)/2,fe(i,o)/2);if(!(s>.5))return[...e];let c=e=>Qe(i,Ae(Se(F(e,i)),s)),l=c(a),u=c(o);return[...e.slice(0,t),{x:l.x,y:l.y},{x:u.x,y:u.y,...i.bow!==void 0&&{bow:i.bow}},...e.slice(t+1)]}function Er(e,t,n){let r=e.length,i=e[t],a=e[(t+1)%r],o=F(a,i),s=Math.max(0,Math.min(1,me(F(n,i),o)/Math.max(me(o,o),1e-9))),c=Qe(i,Ae(o,s)),{bow:l,...u}=i;return[...e.slice(0,t),u,{x:c.x,y:c.y},...e.slice(t+1)]}function Dr(e,t,n=!0){let r={index:0,distance:1/0};return e.forEach((i,a)=>{if(!n&&a===e.length-1)return;let o=e[(a+1)%e.length],s=F(o,i),c=Math.max(0,Math.min(1,me(F(t,i),s)/Math.max(me(s,s),1e-9))),l=fe(t,Qe(i,Ae(s,c)));l<r.distance&&(r={index:a,distance:l})}),r}function Or(e,t){return e===`top`?`Em cima`:e===`bottom`?`Embaixo`:t?`Lado ${e+1}`:[`Frente`,`Direita`,`Fundo`,`Esquerda`][e]??`Lado ${e+1}`}function kr(e){let t=e.length,n=we(e),r=[],i=[],a=(e,t)=>{let n=r[r.length-1];n&&fe(n,e)<1e-6?i[i.length-1]=t:(r.push({x:e.x,y:e.y}),i.push(t))},o=e.map((t,n)=>{let r=te(e,n);if(!r)return null;let i=Math.max(2,Math.ceil(Math.abs(r.sweep)/(Math.PI/32)));return Array.from({length:i+1},(e,t)=>{let n=r.start+r.sweep*t/i;return{x:r.centre.x+r.radius*Math.cos(n),y:r.centre.y+r.radius*Math.sin(n)}})});e.forEach((i,s)=>{let c=o[s];c?c.forEach((e,t)=>a(e,t<c.length-1?-(s+1):s)):a(i,s);let l=e[(s+1)%t];if(i.bow!==void 0&&Math.abs(i.bow)>.01){let e=r[r.length-1],c=o[(s+1)%t]?.[0]??l,u=fe(i,l),d=u>1e-6?i.bow*fe(e,c)/u:0;for(let t of Ce(e,c,d,ie(i,l,n)))a(t,s)}});let s=r[0],c=r[r.length-1];return s&&c&&r.length>1&&fe(s,c)<1e-6&&(r.pop(),i.pop()),{points:r,sides:i}}function Ar(e,t){let n=[],r=e.length;return e.forEach((i,a)=>{n.push({x:i.x,y:i.y});let o=e[(a+1)%r];!o||!t&&a===r-1||i.bow===void 0||Math.abs(i.bow)<.01||n.push(...Ce(i,o,i.bow,ie(i,o,1)))}),n}var jr=1-Math.SQRT1_2,Mr=[{name:`Reto`,points:e=>[{x:0,y:0},{x:0,y:e}]},{name:`Boleado`,points:e=>[{x:-e/2,y:0,bow:e/2},{x:-e/2,y:e}]},{name:`Meio boleado`,points:e=>{let t=Math.min(10,e);return[{x:0,y:0},{x:0,y:e-t,bow:t*jr},{x:-t,y:e}]}},{name:`Chanfrado`,points:e=>{let t=Math.min(5,e);return[{x:0,y:0},{x:0,y:e-t},{x:-t,y:e}]}},{name:`Bisotê`,points:e=>[{x:0,y:0},{x:-Math.min(10,e),y:e}]},{name:`Meia-cana`,points:e=>{let t=Math.min(10,e);return[{x:-t,y:0,bow:-t*jr},{x:0,y:t},{x:0,y:e}]}},{name:`Pingadeira`,points:e=>{let t=Math.min(5,e/3);return[{x:-12,y:0},{x:-12,y:t},{x:-7,y:t},{x:-7,y:0},{x:0,y:0},{x:0,y:e}]}}],Nr=15,Pr=e=>e.filter((t,n)=>{let r=e[(n-1+e.length)%e.length];return!r||n===0||Math.hypot(t.x-r.x,t.y-r.y)>.01}),Fr=[{name:`Retângulo`,points:e=>[{x:0,y:0},{x:30,y:0},{x:30,y:e},{x:0,y:e}]},{name:`Meia-cana`,points:e=>{let t=e;return[{x:0,y:0},{x:15,y:0,bow:-(t-15)*jr},{x:t,y:e-15},{x:t,y:e},{x:0,y:e}]}},{name:`Rodapé`,points:e=>[{x:0,y:0},{x:15,y:0},{x:15,y:e-10,bow:3},{x:5,y:e},{x:0,y:e}]},{name:`Boleado`,points:e=>{let t=Math.min(15,e/2);return[{x:0,y:0},{x:2*t,y:0},{x:2*t,y:e-t,bow:t},{x:0,y:e-t}]}},{name:`Cantoneira`,points:e=>[{x:0,y:0},{x:40,y:0},{x:40,y:4},{x:4,y:4},{x:4,y:e},{x:0,y:e}]},{name:`Triângulo`,points:e=>[{x:0,y:0},{x:e,y:0},{x:0,y:e}]},...et.map(e=>({name:`Rodapé ${e.name.toLowerCase()}`,points:t=>Pr([{x:0,y:0},...[...e.face].reverse().map(({x:e,y:n})=>({x:e*Nr,y:n*t}))])})),...j.map(e=>({name:`Rodateto ${e.name.toLowerCase()}`,points:t=>Pr([...e.face.map(({x:e,y:n})=>({x:e*t,y:(1-n)*t})),{x:0,y:t}])}))],Ir=1e3,Lr=1001,Rr=1002,zr=1003,Br=1004,Vr=1005,Hr=1006,Ur=1007,Wr=1008,Gr=1008,Kr=1009,qr=1010,Jr=1011,Yr=1012,Xr=1013,Zr=1014,Qr=1015,$r=1016,ei=1017,ti=1018,ni=1020,ri=35902,ii=35899,ai=1021,oi=1022,si=1023,ci=1026,li=1027,ui=1028,di=1029,fi=1030,pi=1031,mi=1033,hi=33776,gi=33777,_i=33778,vi=33779,yi=35840,bi=35841,xi=35842,Si=35843,Ci=36196,wi=37492,Ti=37496,Ei=37488,Di=37489,Oi=37490,ki=37491,Ai=37808,ji=37809,Mi=37810,Ni=37811,Pi=37812,Fi=37813,Ii=37814,Li=37815,Ri=37816,zi=37817,Bi=37818,Vi=37819,Hi=37820,Ui=37821,Wi=36492,Gi=36494,Ki=36495,qi=36283,Ji=36284,Yi=36285,Xi=36286,Zi=2300,Qi=2301,$i=2302,ea=2303,ta=2400,na=2401,ra=2402,ia=3200,aa=`srgb`,oa=`srgb-linear`,sa=`linear`,ca=`srgb`,la=7680,ua=35044,da=2e3;function fa(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function pa(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ma(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function ha(){let e=ma(`canvas`);return e.style.display=`block`,e}var ga={};function _a(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function va(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function H(...e){e=va(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function U(...e){e=va(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function ya(...e){let t=e.join(` `);t in ga||(ga[t]=!0,H(...e))}function ba(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var xa={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Sa=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Ca=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),wa=1234567,Ta=Math.PI/180,Ea=180/Math.PI;function Da(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ca[e&255]+Ca[e>>8&255]+Ca[e>>16&255]+Ca[e>>24&255]+`-`+Ca[t&255]+Ca[t>>8&255]+`-`+Ca[t>>16&15|64]+Ca[t>>24&255]+`-`+Ca[n&63|128]+Ca[n>>8&255]+`-`+Ca[n>>16&255]+Ca[n>>24&255]+Ca[r&255]+Ca[r>>8&255]+Ca[r>>16&255]+Ca[r>>24&255]).toLowerCase()}function W(e,t,n){return Math.max(t,Math.min(n,e))}function Oa(e,t){return(e%t+t)%t}function ka(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Aa(e,t,n){return e===t?0:(n-e)/(t-e)}function ja(e,t,n){return(1-n)*e+n*t}function Ma(e,t,n,r){return ja(e,t,1-Math.exp(-n*r))}function Na(e,t=1){return t-Math.abs(Oa(e,t*2)-t)}function Pa(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Fa(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Ia(e,t){return e+Math.floor(Math.random()*(t-e+1))}function La(e,t){return e+Math.random()*(t-e)}function Ra(e){return e*(.5-Math.random())}function za(e){e!==void 0&&(wa=e);let t=wa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ba(e){return e*Ta}function Va(e){return e*Ea}function Ha(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Ua(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Wa(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Ga(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:H(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Ka(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function qa(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Ja={DEG2RAD:Ta,RAD2DEG:Ea,generateUUID:Da,clamp:W,euclideanModulo:Oa,mapLinear:ka,inverseLerp:Aa,lerp:ja,damp:Ma,pingpong:Na,smoothstep:Pa,smootherstep:Fa,randInt:Ia,randFloat:La,randFloatSpread:Ra,seededRandom:za,degToRad:Ba,radToDeg:Va,isPowerOfTwo:Ha,ceilPowerOfTwo:Ua,floorPowerOfTwo:Wa,setQuaternionFromProperEuler:Ga,normalize:qa,denormalize:Ka},G=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(W(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ya=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:H(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(W(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},K=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Za.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Za.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this.z=W(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this.z=W(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xa.copy(this).projectOnVector(e),this.sub(Xa)}reflect(e){return this.sub(Xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(W(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xa=new K,Za=new Ya,q=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return ya(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Qa.makeScale(e,t)),this}rotate(e){return ya(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Qa.makeRotation(-e)),this}translate(e,t){return ya(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Qa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Qa=new q,$a=new q().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eo=new q().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function to(){let e={enabled:!0,workingColorSpace:oa,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=ro(e.r),e.g=ro(e.g),e.b=ro(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=io(e.r),e.g=io(e.g),e.b=io(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?sa:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return ya(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return ya(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[oa]:{primaries:t,whitePoint:r,transfer:sa,toXYZ:$a,fromXYZ:eo,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:aa},outputColorSpaceConfig:{drawingBufferColorSpace:aa}},[aa]:{primaries:t,whitePoint:r,transfer:ca,toXYZ:$a,fromXYZ:eo,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:aa}}}),e}var no=to();function ro(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function io(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var ao,oo=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ao===void 0&&(ao=ma(`canvas`)),ao.width=e.width,ao.height=e.height;let t=ao.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=ao}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=ma(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=ro(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(ro(t[e]/255)*255):t[e]=ro(t[e]);return{data:t,width:e.width,height:e.height}}return H(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},so=0,co=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:so++}),this.uuid=Da(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(lo(r[t].image)):e.push(lo(r[t]))}else e=lo(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function lo(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?oo.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(H(`Texture: Unable to serialize Texture.`),{})}var uo=class extends co{constructor(e=null){ya(`Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.`),super(e),this.isSource=!0}},fo=0,po=new K,mo=class e extends Sa{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Lr,i=Lr,a=Hr,o=Wr,s=si,c=Kr,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fo++}),this.uuid=Da(),this.name=``,this.source=new co(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new G(0,0),this.repeat=new G(1,1),this.center=new G(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new q,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(po).x}get height(){return this.source.getSize(po).y}get depth(){return this.source.getSize(po).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){H(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?H(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ir:e.x-=Math.floor(e.x);break;case Lr:e.x=e.x<0?0:1;break;case Rr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Ir:e.y-=Math.floor(e.y);break;case Lr:e.y=e.y<0?0:1;break;case Rr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};mo.DEFAULT_IMAGE=null,mo.DEFAULT_MAPPING=300,mo.DEFAULT_ANISOTROPY=1;var ho=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this.z=W(this.z,e.z,t.z),this.w=W(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this.z=W(this.z,e,t),this.w=W(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},go=class extends Sa{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hr,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ho(0,0,e,t),this.scissorTest=!1,this.viewport=new ho(0,0,e,t),this.textures=[];let r=new mo({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Hr,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new co(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},_o=class extends go{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},vo=class extends mo{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zr,this.minFilter=zr,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},yo=class extends _o{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new vo(null,e,t,n),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}},bo=class extends mo{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zr,this.minFilter=zr,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},xo=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/So.setFromMatrixColumn(e,0).length(),i=1/So.setFromMatrixColumn(e,1).length(),a=1/So.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wo,e,To)}lookAt(e,t,n){let r=this.elements;return Oo.subVectors(e,t),Oo.lengthSq()===0&&(Oo.z=1),Oo.normalize(),Eo.crossVectors(n,Oo),Eo.lengthSq()===0&&(Math.abs(n.z)===1?Oo.x+=1e-4:Oo.z+=1e-4,Oo.normalize(),Eo.crossVectors(n,Oo)),Eo.normalize(),Do.crossVectors(Oo,Eo),r[0]=Eo.x,r[4]=Do.x,r[8]=Oo.x,r[1]=Eo.y,r[5]=Do.y,r[9]=Oo.y,r[2]=Eo.z,r[6]=Do.z,r[10]=Oo.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],ee=r[7],te=r[11],ne=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*ee,i[8]=a*C+o*D+s*j+c*te,i[12]=a*w+o*O+s*M+c*ne,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*ee,i[9]=l*C+u*D+d*j+f*te,i[13]=l*w+u*O+d*M+f*ne,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*ee,i[10]=p*C+m*D+h*j+g*te,i[14]=p*w+m*O+h*M+g*ne,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*ee,i[11]=_*C+v*D+y*j+b*te,i[15]=_*w+v*O+y*M+b*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=So.set(r[0],r[1],r[2]).length(),o=So.set(r[4],r[5],r[6]).length(),s=So.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Co.copy(this);let c=1/a,l=1/o,u=1/s;return Co.elements[0]*=c,Co.elements[1]*=c,Co.elements[2]*=c,Co.elements[4]*=l,Co.elements[5]*=l,Co.elements[6]*=l,Co.elements[8]*=u,Co.elements[9]*=u,Co.elements[10]*=u,t.setFromRotationMatrix(Co),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=da,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=da,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},So=new K,Co=new xo,wo=new K(0,0,0),To=new K(1,1,1),Eo=new K,Do=new K,Oo=new K,ko=new xo,Ao=new Ya,jo=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(W(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-W(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(W(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-W(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(W(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-W(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:H(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ko.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ko,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ao.setFromEuler(this),this.setFromQuaternion(Ao,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jo.DEFAULT_ORDER=`XYZ`;var Mo=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},No=0,Po=new K,Fo=new Ya,Io=new xo,Lo=new K,Ro=new K,zo=new K,Bo=new Ya,Vo=new K(1,0,0),Ho=new K(0,1,0),Uo=new K(0,0,1),Wo={type:`added`},Go={type:`removed`},Ko={type:`childadded`,child:null},qo={type:`childremoved`,child:null},Jo=class e extends Sa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:No++}),this.uuid=Da(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new K,n=new jo,r=new Ya,i=new K(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new xo},normalMatrix:{value:new q}}),this.matrix=new xo,this.matrixWorld=new xo,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fo.setFromAxisAngle(e,t),this.quaternion.multiply(Fo),this}rotateOnWorldAxis(e,t){return Fo.setFromAxisAngle(e,t),this.quaternion.premultiply(Fo),this}rotateX(e){return this.rotateOnAxis(Vo,e)}rotateY(e){return this.rotateOnAxis(Ho,e)}rotateZ(e){return this.rotateOnAxis(Uo,e)}translateOnAxis(e,t){return Po.copy(e).applyQuaternion(this.quaternion),this.position.add(Po.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vo,e)}translateY(e){return this.translateOnAxis(Ho,e)}translateZ(e){return this.translateOnAxis(Uo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Io.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Lo.copy(e):Lo.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Io.lookAt(Ro,Lo,this.up):Io.lookAt(Lo,Ro,this.up),this.quaternion.setFromRotationMatrix(Io),r&&(Io.extractRotation(r.matrixWorld),Fo.setFromRotationMatrix(Io),this.quaternion.premultiply(Fo.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(U(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wo),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null):U(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Go),qo.child=e,this.dispatchEvent(qo),qo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Io.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Io.multiply(e.parent.matrixWorld)),e.applyMatrix4(Io),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wo),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,zo),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,Bo,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Jo.DEFAULT_UP=new K(0,1,0),Jo.DEFAULT_MATRIX_AUTO_UPDATE=!0,Jo.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yo=class extends Jo{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Xo={type:`move`},Zo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xo)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Yo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Qo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$o={h:0,s:0,l:0},es={h:0,s:0,l:0};function ts(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var J=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=aa){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,no.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=no.workingColorSpace){return this.r=e,this.g=t,this.b=n,no.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=no.workingColorSpace){if(e=Oa(e,1),t=W(t,0,1),n=W(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=ts(i,r,e+1/3),this.g=ts(i,r,e),this.b=ts(i,r,e-1/3)}return no.colorSpaceToWorking(this,r),this}setStyle(e,t=aa){function n(t){t!==void 0&&parseFloat(t)<1&&H(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:H(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);H(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=aa){let n=Qo[e.toLowerCase()];return n===void 0?H(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}copyLinearToSRGB(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=aa){return no.workingToColorSpace(ns.copy(this),e),Math.round(W(ns.r*255,0,255))*65536+Math.round(W(ns.g*255,0,255))*256+Math.round(W(ns.b*255,0,255))}getHexString(e=aa){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=no.workingColorSpace){no.workingToColorSpace(ns.copy(this),t);let n=ns.r,r=ns.g,i=ns.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=no.workingColorSpace){return no.workingToColorSpace(ns.copy(this),t),e.r=ns.r,e.g=ns.g,e.b=ns.b,e}getStyle(e=aa){no.workingToColorSpace(ns.copy(this),e);let t=ns.r,n=ns.g,r=ns.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL($o),this.setHSL($o.h+e,$o.s+t,$o.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($o),e.getHSL(es);let n=ja($o.h,es.h,t),r=ja($o.s,es.s,t),i=ja($o.l,es.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ns=new J;J.NAMES=Qo;var rs=class extends Jo{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jo,this.environmentIntensity=1,this.environmentRotation=new jo,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},is=new K,as=new K,os=new K,ss=new K,cs=new K,ls=new K,us=new K,ds=new K,fs=new K,ps=new K,ms=new ho,hs=new ho,gs=new ho,_s=class e{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),is.subVectors(e,t),r.cross(is);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){is.subVectors(r,t),as.subVectors(n,t),os.subVectors(e,t);let a=is.dot(is),o=is.dot(as),s=is.dot(os),c=as.dot(as),l=as.dot(os),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ss)!==null&&ss.x>=0&&ss.y>=0&&ss.x+ss.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,ss)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,ss.x),s.addScaledVector(a,ss.y),s.addScaledVector(o,ss.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return ms.setScalar(0),hs.setScalar(0),gs.setScalar(0),ms.fromBufferAttribute(e,t),hs.fromBufferAttribute(e,n),gs.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ms,i.x),a.addScaledVector(hs,i.y),a.addScaledVector(gs,i.z),a}static isFrontFacing(e,t,n,r){return is.subVectors(n,t),as.subVectors(e,t),is.cross(as).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return is.subVectors(this.c,this.b),as.subVectors(this.a,this.b),is.cross(as).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;cs.subVectors(r,n),ls.subVectors(i,n),ds.subVectors(e,n);let s=cs.dot(ds),c=ls.dot(ds);if(s<=0&&c<=0)return t.copy(n);fs.subVectors(e,r);let l=cs.dot(fs),u=ls.dot(fs);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(cs,a);ps.subVectors(e,i);let f=cs.dot(ps),p=ls.dot(ps);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(ls,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return us.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(us,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(cs,a).addScaledVector(ls,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vs=class{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bs.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bs.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=bs.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,bs):bs.fromBufferAttribute(r,t),bs.applyMatrix4(e.matrixWorld),this.expandByPoint(bs);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),xs.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),xs.copy(e.boundingBox)),xs.applyMatrix4(e.matrixWorld),this.union(xs)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bs),bs.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),ks.subVectors(this.max,Os),Ss.subVectors(e.a,Os),Cs.subVectors(e.b,Os),ws.subVectors(e.c,Os),Ts.subVectors(Cs,Ss),Es.subVectors(ws,Cs),Ds.subVectors(Ss,ws);let t=[0,-Ts.z,Ts.y,0,-Es.z,Es.y,0,-Ds.z,Ds.y,Ts.z,0,-Ts.x,Es.z,0,-Es.x,Ds.z,0,-Ds.x,-Ts.y,Ts.x,0,-Es.y,Es.x,0,-Ds.y,Ds.x,0];return!Ms(t,Ss,Cs,ws,ks)||(t=[1,0,0,0,1,0,0,0,1],!Ms(t,Ss,Cs,ws,ks))?!1:(As.crossVectors(Ts,Es),t=[As.x,As.y,As.z],Ms(t,Ss,Cs,ws,ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bs).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bs).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(ys[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ys[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ys[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ys[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ys[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ys[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ys[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ys[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ys)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ys=[new K,new K,new K,new K,new K,new K,new K,new K],bs=new K,xs=new vs,Ss=new K,Cs=new K,ws=new K,Ts=new K,Es=new K,Ds=new K,Os=new K,ks=new K,As=new K,js=new K;function Ms(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){js.fromArray(e,a);let o=i.x*Math.abs(js.x)+i.y*Math.abs(js.y)+i.z*Math.abs(js.z),s=t.dot(js),c=n.dot(js),l=r.dot(js);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Ns=Ps();function Ps(){let e=new ArrayBuffer(4),t=new Float32Array(e),n=new Uint32Array(e),r=new Uint32Array(512),i=new Uint32Array(512);for(let e=0;e<256;++e){let t=e-127;t<-27?(r[e]=0,r[e|256]=32768,i[e]=24,i[e|256]=24):t<-14?(r[e]=1024>>-t-14,r[e|256]=1024>>-t-14|32768,i[e]=-t-1,i[e|256]=-t-1):t<=15?(r[e]=t+15<<10,r[e|256]=t+15<<10|32768,i[e]=13,i[e|256]=13):t<128?(r[e]=31744,r[e|256]=64512,i[e]=24,i[e|256]=24):(r[e]=31744,r[e|256]=64512,i[e]=13,i[e|256]=13)}let a=new Uint32Array(2048),o=new Uint32Array(64),s=new Uint32Array(64);for(let e=1;e<1024;++e){let t=e<<13,n=0;for(;!(t&8388608);)t<<=1,n-=8388608;t&=-8388609,n+=947912704,a[e]=t|n}for(let e=1024;e<2048;++e)a[e]=939524096+(e-1024<<13);for(let e=1;e<31;++e)o[e]=e<<23;o[31]=1199570944,o[32]=2147483648;for(let e=33;e<63;++e)o[e]=2147483648+(e-32<<23);o[63]=3347054592;for(let e=1;e<64;++e)e!==32&&(s[e]=1024);return{floatView:t,uint32View:n,baseTable:r,shiftTable:i,mantissaTable:a,exponentTable:o,offsetTable:s}}function Fs(e){Math.abs(e)>65504&&H(`DataUtils.toHalfFloat(): Value out of range.`),e=W(e,-65504,65504),Ns.floatView[0]=e;let t=Ns.uint32View[0],n=t>>23&511;return Ns.baseTable[n]+((t&8388607)>>Ns.shiftTable[n])}function Is(e){let t=e>>10;return Ns.uint32View[0]=Ns.mantissaTable[Ns.offsetTable[t]+(e&1023)]+Ns.exponentTable[t],Ns.floatView[0]}var Ls=class{static toHalfFloat(e){return Fs(e)}static fromHalfFloat(e){return Is(e)}},Rs=new K,zs=new G,Bs=0,Vs=class extends Sa{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bs++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=ua,this.updateRanges=[],this.gpuType=Qr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zs.fromBufferAttribute(this,t),zs.applyMatrix3(e),this.setXY(t,zs.x,zs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rs.fromBufferAttribute(this,t),Rs.applyMatrix3(e),this.setXYZ(t,Rs.x,Rs.y,Rs.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rs.fromBufferAttribute(this,t),Rs.applyMatrix4(e),this.setXYZ(t,Rs.x,Rs.y,Rs.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rs.fromBufferAttribute(this,t),Rs.applyNormalMatrix(e),this.setXYZ(t,Rs.x,Rs.y,Rs.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rs.fromBufferAttribute(this,t),Rs.transformDirection(e),this.setXYZ(t,Rs.x,Rs.y,Rs.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ka(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qa(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ka(t,this.array)),t}setX(e,t){return this.normalized&&(t=qa(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ka(t,this.array)),t}setY(e,t){return this.normalized&&(t=qa(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ka(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qa(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ka(t,this.array)),t}setW(e,t){return this.normalized&&(t=qa(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qa(t,this.array),n=qa(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=qa(t,this.array),n=qa(n,this.array),r=qa(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=qa(t,this.array),n=qa(n,this.array),r=qa(r,this.array),i=qa(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Hs=class extends Vs{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Us=class extends Vs{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Y=class extends Vs{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ws=new vs,Gs=new K,Ks=new K,qs=class{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Ws.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);let t=Gs.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Gs,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ks.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(Ks)),this.expandByPoint(Gs.copy(e.center).sub(Ks))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Js=0,Ys=new xo,Xs=new Jo,Zs=new K,Qs=new vs,$s=new vs,ec=new K,tc=class e extends Sa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Js++}),this.uuid=Da(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(fa(e)?Us:Hs)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new q().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ys.makeRotationFromQuaternion(e),this.applyMatrix4(Ys),this}rotateX(e){return Ys.makeRotationX(e),this.applyMatrix4(Ys),this}rotateY(e){return Ys.makeRotationY(e),this.applyMatrix4(Ys),this}rotateZ(e){return Ys.makeRotationZ(e),this.applyMatrix4(Ys),this}translate(e,t,n){return Ys.makeTranslation(e,t,n),this.applyMatrix4(Ys),this}scale(e,t,n){return Ys.makeScale(e,t,n),this.applyMatrix4(Ys),this}lookAt(e){return Xs.lookAt(e),Xs.updateMatrix(),this.applyMatrix4(Xs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Y(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&H(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)U(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Qs.setFromBufferAttribute(n),this.morphTargetsRelative?(ec.addVectors(this.boundingBox.min,Qs.min),this.boundingBox.expandByPoint(ec),ec.addVectors(this.boundingBox.max,Qs.max),this.boundingBox.expandByPoint(ec)):(this.boundingBox.expandByPoint(Qs.min),this.boundingBox.expandByPoint(Qs.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&U(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)U(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new K,1/0);else if(e){let n=this.boundingSphere.center;if(Qs.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];$s.setFromBufferAttribute(n),this.morphTargetsRelative?(ec.addVectors(Qs.min,$s.min),Qs.expandByPoint(ec),ec.addVectors(Qs.max,$s.max),Qs.expandByPoint(ec)):(Qs.expandByPoint($s.min),Qs.expandByPoint($s.max))}Qs.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)ec.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(ec));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)ec.fromBufferAttribute(a,t),o&&(Zs.fromBufferAttribute(e,t),ec.add(Zs)),r=Math.max(r,n.distanceToSquared(ec))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&U(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){U(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Vs(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new K,s[e]=new K;let c=new K,l=new K,u=new K,d=new G,f=new G,p=new G,m=new K,h=new K;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new K,y=new K,b=new K,x=new K;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Vs(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new K,i=new K,a=new K,o=new K,s=new K,c=new K,l=new K,u=new K;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ec.fromBufferAttribute(e,t),ec.normalize(),e.setXYZ(t,ec.x,ec.y,ec.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Vs(a,r,i)}if(this.index===null)return H(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},nc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=ua,this.updateRanges=[],this.version=0,this.uuid=Da()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Da()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Da()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},rc=new K,ic=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)rc.fromBufferAttribute(this,t),rc.applyMatrix4(e),this.setXYZ(t,rc.x,rc.y,rc.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rc.fromBufferAttribute(this,t),rc.applyNormalMatrix(e),this.setXYZ(t,rc.x,rc.y,rc.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rc.fromBufferAttribute(this,t),rc.transformDirection(e),this.setXYZ(t,rc.x,rc.y,rc.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ka(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qa(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=qa(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=qa(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=qa(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=qa(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ka(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ka(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ka(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ka(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=qa(t,this.array),n=qa(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=qa(t,this.array),n=qa(n,this.array),r=qa(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=qa(t,this.array),n=qa(n,this.array),r=qa(r,this.array),i=qa(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){_a(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Vs(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_a(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ac=new K,oc=new K,sc=new q,cc=class{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ac.subVectors(n,t).cross(oc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(ac),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||sc.getNormalMatrix(e),r=this.coplanarPoint(ac).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},lc=0,uc=class extends Sa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lc++}),this.uuid=Da(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new J(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=la,this.stencilZFail=la,this.stencilZPass=la,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){H(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?H(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new J().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new cc().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new G().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new G().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},dc=class extends uc{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new J(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},fc,pc=new K,mc=new K,hc=new K,gc=new G,_c=new G,vc=new xo,yc=new K,bc=new K,xc=new K,Sc=new G,Cc=new G,wc=new G,Tc=class extends Jo{constructor(e=new dc){if(super(),this.isSprite=!0,this.type=`Sprite`,fc===void 0){fc=new tc;let e=new nc(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);fc.setIndex([0,1,2,0,2,3]),fc.setAttribute(`position`,new ic(e,3,0,!1)),fc.setAttribute(`uv`,new ic(e,2,3,!1))}this.geometry=fc,this.material=e,this.center=new G(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&U(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),mc.setFromMatrixScale(this.matrixWorld),vc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),hc.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mc.multiplyScalar(-hc.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Ec(yc.set(-.5,-.5,0),hc,a,mc,r,i),Ec(bc.set(.5,-.5,0),hc,a,mc,r,i),Ec(xc.set(.5,.5,0),hc,a,mc,r,i),Sc.set(0,0),Cc.set(1,0),wc.set(1,1);let o=e.ray.intersectTriangle(yc,bc,xc,!1,pc);if(o===null&&(Ec(bc.set(-.5,.5,0),hc,a,mc,r,i),Cc.set(0,1),o=e.ray.intersectTriangle(yc,xc,bc,!1,pc),o===null))return;let s=e.ray.origin.distanceTo(pc);s<e.near||s>e.far||t.push({distance:s,point:pc.clone(),uv:_s.getInterpolation(pc,yc,bc,xc,Sc,Cc,wc,new G),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ec(e,t,n,r,i,a){gc.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?_c.copy(gc):(_c.x=a*gc.x-i*gc.y,_c.y=i*gc.x+a*gc.y),e.copy(t),e.x+=_c.x,e.y+=_c.y,e.applyMatrix4(vc)}var Dc=new K,Oc=new K,kc=new K,Ac=new K,jc=class{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dc)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Dc.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dc.copy(this.origin).addScaledVector(this.direction,t),Dc.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Oc.copy(e).add(t).multiplyScalar(.5),kc.copy(t).sub(e).normalize(),Ac.copy(this.origin).sub(Oc);let i=e.distanceTo(t)*.5,a=-this.direction.dot(kc),o=Ac.dot(this.direction),s=-Ac.dot(kc),c=Ac.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Oc).addScaledVector(kc,d),f}intersectSphere(e,t){if(e.radius<0)return null;Dc.subVectors(e.center,this.origin);let n=Dc.dot(this.direction),r=Dc.dot(Dc)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Dc)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let ee=S/w,te=C/w,ne=1/w,re=T-ee*D,ie=E-te*D,ae=O-ee*A,oe=k-te*A,P=j-ee*N,se=M-te*N,F=P*oe-se*ae,ce=re*se-ie*P,I=ae*ie-oe*re;if(r){if(F<0||ce<0||I<0)return null}else if((F<0||ce<0||I<0)&&(F>0||ce>0||I>0))return null;let le=F+ce+I;if(le===0)return null;let ue=ne*(F*D+ce*A+I*N);return(le>0?ue<0:ue>0)?null:this.at(ue/le,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mc=class extends uc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new J(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jo,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Nc=new xo,Pc=new jc,Fc=new qs,Ic=new K,Lc=new K,Rc=new K,zc=new K,Bc=new K,Vc=new K,Hc=new K,Uc=new K,X=class extends Jo{constructor(e=new tc,t=new Mc){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Vc.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Bc.fromBufferAttribute(s,e),a?Vc.addScaledVector(Bc,r):Vc.addScaledVector(Bc.sub(t),r))}t.add(Vc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fc.copy(n.boundingSphere),Fc.applyMatrix4(i),Pc.copy(e.ray).recast(e.near),!(Fc.containsPoint(Pc.origin)===!1&&(Pc.intersectSphere(Fc,Ic)===null||Pc.origin.distanceToSquared(Ic)>(e.far-e.near)**2))&&(Nc.copy(i).invert(),Pc.copy(e.ray).applyMatrix4(Nc),(n.boundingBox===null||Pc.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Pc)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Gc(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Gc(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Gc(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Gc(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Wc(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Uc.copy(s),Uc.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Uc);return l<n.near||l>n.far?null:{distance:l,point:Uc.clone(),object:e}}function Gc(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Lc),e.getVertexPosition(c,Rc),e.getVertexPosition(l,zc);let u=Wc(e,t,n,r,Lc,Rc,zc,Hc);if(u){let e=new K;_s.getBarycoord(Hc,Lc,Rc,zc,e),i&&(u.uv=_s.getInterpolatedAttribute(i,s,c,l,e,new G)),a&&(u.uv1=_s.getInterpolatedAttribute(a,s,c,l,e,new G)),o&&(u.normal=_s.getInterpolatedAttribute(o,s,c,l,e,new K),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new K,materialIndex:0};_s.getNormal(Lc,Rc,zc,t.normal),u.face=t,u.barycoord=e}return u}var Kc=class extends mo{constructor(e=null,t=1,n=1,r,i,a,o,s,c=zr,l=zr,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},qc=new qs,Jc=new G(.5,.5),Yc=new K,Xc=class{constructor(e=new cc,t=new cc,n=new cc,r=new cc,i=new cc,a=new cc){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=da,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qc.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qc.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qc)}intersectsSprite(e){return qc.center.set(0,0,0),qc.radius=.7071067811865476+Jc.distanceTo(e.center),qc.applyMatrix4(e.matrixWorld),this.intersectsSphere(qc)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Yc.x=r.normal.x>0?e.max.x:e.min.x,Yc.y=r.normal.y>0?e.max.y:e.min.y,Yc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Yc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Zc=class extends uc{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new J(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Qc=new K,$c=new K,el=new xo,tl=new jc,nl=new qs,rl=new K,il=new K,al=class extends Jo{constructor(e=new tc,t=new Zc){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Qc.fromBufferAttribute(t,e-1),$c.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Qc.distanceTo($c);e.setAttribute(`lineDistance`,new Y(n,1))}else H(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nl.copy(n.boundingSphere),nl.applyMatrix4(r),nl.radius+=i,e.ray.intersectsSphere(nl)===!1)return;el.copy(r).invert(),tl.copy(e.ray).applyMatrix4(el);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=ol(this,e,tl,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=ol(this,e,tl,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=ol(this,e,tl,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=ol(this,e,tl,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ol(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Qc.fromBufferAttribute(s,i),$c.fromBufferAttribute(s,a),n.distanceSqToSegment(Qc,$c,rl,il)>r)return;rl.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(rl);if(!(c<t.near||c>t.far))return{distance:c,point:il.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var sl=new K,cl=new K,ll=class extends al{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)sl.fromBufferAttribute(t,e),cl.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+sl.distanceTo(cl);e.setAttribute(`lineDistance`,new Y(n,1))}else H(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},ul=class extends al{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},dl=class extends uc{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new J(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},fl=new xo,pl=new jc,ml=new qs,hl=new K,gl=class extends Jo{constructor(e=new tc,t=new dl){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ml.copy(n.boundingSphere),ml.applyMatrix4(r),ml.radius+=i,e.ray.intersectsSphere(ml)===!1)return;fl.copy(r).invert(),pl.copy(e.ray).applyMatrix4(fl);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);hl.fromBufferAttribute(l,n),_l(hl,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)hl.fromBufferAttribute(l,a),_l(hl,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function _l(e,t,n,r,i,a,o){let s=pl.distanceSqToPoint(e);if(s<n){let n=new K;pl.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var vl=class extends mo{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},yl=class extends mo{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},bl=class extends mo{constructor(e,t,n=Zr,r,i,a,o=zr,s=zr,c,l=ci,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new co(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},xl=class extends bl{constructor(e,t=Zr,n=301,r,i,a=zr,o=zr,s,c=ci){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Sl=class extends mo{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Cl=class e extends tc{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Y(c,3)),this.setAttribute(`normal`,new Y(l,3)),this.setAttribute(`uv`,new Y(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new K;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},wl=class e extends tc{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new K,g=new K;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new Y(o,3)),this.setAttribute(`normal`,new Y(s,3)),this.setAttribute(`uv`,new Y(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Tl=class e extends tc{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new K,l=new G;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Y(a,3)),this.setAttribute(`normal`,new Y(o,3)),this.setAttribute(`uv`,new Y(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},El=class e extends tc{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Y(u,3)),this.setAttribute(`normal`,new Y(d,3)),this.setAttribute(`uv`,new Y(f,2));function _(){let a=new K,_=new K,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new G,m=new K,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Dl=class e extends El{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ol=new K,kl=new K,Al=new K,jl=new _s,Ml=class extends tc{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(Ta*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=jl;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),jl.getNormal(Al),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=jl[c[e]],o=jl[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(Al.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:Al.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];Ol.fromBufferAttribute(a,t),kl.fromBufferAttribute(a,n),d.push(Ol.x,Ol.y,Ol.z),d.push(kl.x,kl.y,kl.z)}this.setAttribute(`position`,new Y(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Nl=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){H(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new G:new K);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new K,r=[],i=[],a=[],o=new K,s=new xo;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new K)}i[0]=new K,a[0]=new K;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(W(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(W(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Pl=class extends Nl{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new G){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Fl=class extends Pl{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Il(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Ll=new K,Rl=new K,zl=new Il,Bl=new Il,Vl=new Il,Hl=class extends Nl{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new K){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Rl.subVectors(r[0],r[1]).add(r[0]),c=Rl);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Ll.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Ll),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),zl.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Bl.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Vl.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(zl.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Bl.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Vl.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(zl.calc(s),Bl.calc(s),Vl.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new K().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ul(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Wl(e,t){let n=1-e;return n*n*t}function Gl(e,t){return 2*(1-e)*e*t}function Kl(e,t){return e*e*t}function ql(e,t,n,r){return Wl(e,t)+Gl(e,n)+Kl(e,r)}function Jl(e,t){let n=1-e;return n*n*n*t}function Yl(e,t){let n=1-e;return 3*n*n*e*t}function Xl(e,t){return 3*(1-e)*e*e*t}function Zl(e,t){return e*e*e*t}function Ql(e,t,n,r,i){return Jl(e,t)+Yl(e,n)+Xl(e,r)+Zl(e,i)}var $l=class extends Nl{constructor(e=new G,t=new G,n=new G,r=new G){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ql(e,r.x,i.x,a.x,o.x),Ql(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},eu=class extends Nl{constructor(e=new K,t=new K,n=new K,r=new K){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ql(e,r.x,i.x,a.x,o.x),Ql(e,r.y,i.y,a.y,o.y),Ql(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},tu=class extends Nl{constructor(e=new G,t=new G){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new G){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nu=class extends Nl{constructor(e=new K,t=new K){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new K){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ru=class extends Nl{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ql(e,r.x,i.x,a.x),ql(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},iu=class extends Nl{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ql(e,r.x,i.x,a.x),ql(e,r.y,i.y,a.y),ql(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},au=class extends Nl{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new G){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Ul(o,s.x,c.x,l.x,u.x),Ul(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new G().fromArray(n))}return this}},ou=Object.freeze({__proto__:null,ArcCurve:Fl,CatmullRomCurve3:Hl,CubicBezierCurve:$l,CubicBezierCurve3:eu,EllipseCurve:Pl,LineCurve:tu,LineCurve3:nu,QuadraticBezierCurve:ru,QuadraticBezierCurve3:iu,SplineCurve:au}),su=class extends Nl{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new ou[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new ou[n.type]().fromJSON(n))}return this}},cu=class extends su{constructor(e){super(),this.type=`Path`,this.currentPoint=new G,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new tu(this.currentPoint.clone(),new G(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new ru(this.currentPoint.clone(),new G(e,t),new G(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new $l(this.currentPoint.clone(),new G(e,t),new G(n,r),new G(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new au([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Pl(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},lu=class extends cu{constructor(e){super(e),this.uuid=Da(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new cu().fromJSON(n))}return this}};function uu(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=du(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=vu(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return pu(a,o,n,s,c,l,0),o}function du(e,t,n,r,i){let a;if(i===Hu(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=zu(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=zu(i/r|0,e[i],e[i+1],a);return a&&ju(a,a.next)&&(Bu(a),a=a.next),a}function fu(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(ju(n,n.next)||Au(n.prev,n,n.next)===0)){if(Bu(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function pu(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Cu(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?hu(e,r,i,a):mu(e))t.push(c.i,e.i,l.i),Bu(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=gu(fu(e),t),pu(e,t,n,r,i,a,2)):o===2&&_u(e,t,n,r,i,a):pu(fu(e),t,n,r,i,a,1);break}}}function mu(e){let t=e.prev,n=e,r=e.next;if(Au(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Ou(i,s,a,c,o,l,m.x,m.y)&&Au(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function hu(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Au(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Tu(p,m,t,n,r),v=Tu(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ou(s,u,c,d,l,f,y.x,y.y)&&Au(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ou(s,u,c,d,l,f,b.x,b.y)&&Au(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ou(s,u,c,d,l,f,y.x,y.y)&&Au(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ou(s,u,c,d,l,f,b.x,b.y)&&Au(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function gu(e,t){let n=e;do{let r=n.prev,i=n.next.next;!ju(r,i)&&Mu(r,n,n.next,i)&&Iu(r,i)&&Iu(i,r)&&(t.push(r.i,n.i,i.i),Bu(n),Bu(n.next),n=e=i),n=n.next}while(n!==e);return fu(n)}function _u(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&ku(o,e)){let s=Ru(o,e);o=fu(o,o.next),s=fu(s,s.next),pu(o,t,n,r,i,a,0),pu(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function vu(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=du(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Eu(o))}i.sort(yu);for(let e=0;e<i.length;e++)n=bu(i[e],n);return n}function yu(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function bu(e,t){let n=xu(e,t);if(!n)return t;let r=Ru(n,e);return fu(r,r.next),fu(n,n.next)}function xu(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(ju(e,n))return n;do{if(ju(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Du(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Iu(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Su(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Su(e,t){return Au(e.prev,e,t.prev)<0&&Au(t.next,e,e.next)<0}function Cu(e,t,n,r){let i=e;do i.z===0&&(i.z=Tu(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,wu(i)}function wu(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Tu(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Eu(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Du(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Ou(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Du(e,t,n,r,i,a,o,s)}function ku(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Fu(e,t)&&(Iu(e,t)&&Iu(t,e)&&Lu(e,t)&&(Au(e.prev,e,t.prev)||Au(e,t.prev,t))||ju(e,t)&&Au(e.prev,e,e.next)>0&&Au(t.prev,t,t.next)>0)}function Au(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function ju(e,t){return e.x===t.x&&e.y===t.y}function Mu(e,t,n,r){let i=Pu(Au(e,t,n)),a=Pu(Au(e,t,r)),o=Pu(Au(n,r,e)),s=Pu(Au(n,r,t));return!!(i!==a&&o!==s||i===0&&Nu(e,n,t)||a===0&&Nu(e,r,t)||o===0&&Nu(n,e,r)||s===0&&Nu(n,t,r))}function Nu(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Pu(e){return e>0?1:e<0?-1:0}function Fu(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Mu(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Iu(e,t){return Au(e.prev,e,e.next)<0?Au(e,t,e.next)>=0&&Au(e,e.prev,t)>=0:Au(e,t,e.prev)<0||Au(e,e.next,t)<0}function Lu(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Ru(e,t){let n=Vu(e.i,e.x,e.y),r=Vu(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function zu(e,t,n,r){let i=Vu(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Bu(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Vu(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hu(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Uu=class{static triangulate(e,t,n=2){return uu(e,t,n)}},Wu=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Gu(e),Ku(n,e);let a=e.length;t.forEach(Gu);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Ku(n,t[e]);let o=Uu.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Gu(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Ku(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var qu=class e extends tc{constructor(e=new lu([new G(.5,.5),new G(-.5,.5),new G(-.5,-.5),new G(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new Y(r,3)),this.setAttribute(`uv`,new Y(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Ju:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new K,b=new K,x=new K}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Wu.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Wu.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||U(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new G(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new G(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,ee=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),ee=ee.concat(N)}let te;if(p===0)te=Wu.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);P(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);P(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}te=Wu.triangulateShape(e,t)}let ne=te.length,re=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],ee[e],re):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),P(x.x,x.y,x.z)):P(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],ee[t],re):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),P(x.x,x.y,x.z)):P(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);P(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?P(i.x,i.y+g[s-1].y,g[s-1].x+n):P(i.x,i.y,c+n)}}}ie(),ae();function ie(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<ne;e++){let n=te[e];se(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<ne;e++){let n=te[e];se(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<ne;e++){let t=te[e];se(t[2],t[1],t[0])}for(let e=0;e<ne;e++){let t=te[e];se(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ae(){let e=r.length/3,t=0;oe(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];oe(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function oe(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);F(t+r+n,t+i+n,t+i+a,t+r+a)}}}function P(e,t,n){a.push(e),a.push(t),a.push(n)}function se(e,t,i){ce(e),ce(t),ce(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);I(o[0]),I(o[1]),I(o[2])}function F(e,t,i,a){ce(e),ce(t),ce(a),ce(t),ce(i),ce(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);I(s[0]),I(s[1]),I(s[3]),I(s[1]),I(s[2]),I(s[3])}function ce(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function I(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Yu(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ou[i.type]().fromJSON(i)),new e(r,t.options)}},Ju={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new G(a,o),new G(s,c),new G(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new G(o,1-c),new G(l,1-d),new G(f,1-m),new G(h,1-_)]:[new G(s,1-c),new G(u,1-d),new G(p,1-m),new G(g,1-_)]}};function Yu(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Xu=class e extends tc{constructor(e=[new G(0,-.5),new G(.5,0),new G(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=W(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new K,d=new G,f=new K,p=new K,m=new K,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new Y(a,3)),this.setAttribute(`uv`,new Y(o,2)),this.setAttribute(`normal`,new Y(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},Zu=class e extends tc{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Y(p,3)),this.setAttribute(`normal`,new Y(m,3)),this.setAttribute(`uv`,new Y(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Qu=class e extends tc{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new K,p=new G;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Y(s,3)),this.setAttribute(`normal`,new Y(c,3)),this.setAttribute(`uv`,new Y(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},$u=class e extends tc{constructor(e=new lu([new G(0,.5),new G(-.5,-.5),new G(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new Y(r,3)),this.setAttribute(`normal`,new Y(i,3)),this.setAttribute(`uv`,new Y(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;Wu.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];Wu.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=Wu.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return ed(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function ed(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var td=class e extends tc{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new K,d=new K,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Y(p,3)),this.setAttribute(`normal`,new Y(m,3)),this.setAttribute(`uv`,new Y(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},nd=class e extends tc{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new K,f=new K,p=new K;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Y(c,3)),this.setAttribute(`normal`,new Y(l,3)),this.setAttribute(`uv`,new Y(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},rd=class e extends tc{constructor(e=new iu(new K(-1,-1,0),new K(-1,1,0),new K(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new K,s=new K,c=new G,l=new K,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new Y(u,3)),this.setAttribute(`normal`,new Y(d,3)),this.setAttribute(`uv`,new Y(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new ou[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function id(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(od(i))i.isRenderTargetTexture?(H(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(od(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function ad(e){let t={};for(let n=0;n<e.length;n++){let r=id(e[n]);for(let e in r)t[e]=r[e]}return t}function od(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function sd(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function cd(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:no.workingColorSpace}var ld={clone:id,merge:ad},ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fd=class extends uc{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ud,this.fragmentShader=dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=id(e.uniforms),this.uniformsGroups=sd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new J().setHex(r.value);break;case`v2`:this.uniforms[n].value=new G().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new ho().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new xo().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},pd=class extends fd{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},md=class extends uc{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new J(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new J(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jo,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},hd=class extends md{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new G(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return W(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new J(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new J(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new J(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},gd=class extends uc{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type=`MeshNormalMaterial`,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},_d=class extends uc{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new J(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new J(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jo,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},vd=class extends uc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=ia,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yd=class extends uc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},bd=class extends Zc{constructor(e){super(),this.isLineDashedMaterial=!0,this.type=`LineDashedMaterial`,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function xd(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Sd(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Cd=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},wd=class extends Cd{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ta,endingEnd:ta}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case na:i=e,o=2*t-n;break;case ra:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case na:a=e,s=2*n-t;break;case ra:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Td=class extends Cd{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ed=class extends Cd{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Dd=class extends Cd{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Ad(n,t,g,y,r);i[p]=Od(x,o,_,b,m)}return i}};function Od(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function kd(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Ad(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Od(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=kd(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var jd=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=xd(t,this.TimeBufferType),this.values=xd(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xd(e.times,Array),values:xd(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Sd(e.settings)&&(n.settings={inTangents:xd(e.settings.inTangents,Array),outTangents:xd(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ed(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Td(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Dd(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Zi:t=this.InterpolantFactoryMethodDiscrete;break;case Qi:t=this.InterpolantFactoryMethodLinear;break;case $i:t=this.InterpolantFactoryMethodSmooth;break;case ea:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return H(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zi;case this.InterpolantFactoryMethodLinear:return Qi;case this.InterpolantFactoryMethodSmooth:return $i;case this.InterpolantFactoryMethodBezier:return ea}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Sd(this.settings)&&(Md(this.settings.inTangents,e),Md(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(U(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(U(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){U(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){U(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&pa(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){U(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===$i,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Sd(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Md(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}jd.prototype.ValueTypeName=``,jd.prototype.TimeBufferType=Float32Array,jd.prototype.ValueBufferType=Float32Array,jd.prototype.DefaultInterpolation=Qi;var Nd=class extends jd{constructor(e,t,n){super(e,t,n)}};Nd.prototype.ValueTypeName=`bool`,Nd.prototype.ValueBufferType=Array,Nd.prototype.DefaultInterpolation=Zi,Nd.prototype.InterpolantFactoryMethodLinear=void 0,Nd.prototype.InterpolantFactoryMethodSmooth=void 0;var Pd=class extends jd{constructor(e,t,n,r){super(e,t,n,r)}};Pd.prototype.ValueTypeName=`color`;var Fd=class extends jd{constructor(e,t,n,r){super(e,t,n,r)}};Fd.prototype.ValueTypeName=`number`;var Id=class extends Cd{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Ya.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ld=class extends jd{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Id(this.times,this.values,this.getValueSize(),e)}};Ld.prototype.ValueTypeName=`quaternion`,Ld.prototype.InterpolantFactoryMethodSmooth=void 0;var Rd=class extends jd{constructor(e,t,n){super(e,t,n)}};Rd.prototype.ValueTypeName=`string`,Rd.prototype.ValueBufferType=Array,Rd.prototype.DefaultInterpolation=Zi,Rd.prototype.InterpolantFactoryMethodLinear=void 0,Rd.prototype.InterpolantFactoryMethodSmooth=void 0;var zd=class extends jd{constructor(e,t,n,r){super(e,t,n,r)}};zd.prototype.ValueTypeName=`vector`;var Bd={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Vd(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Vd(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Vd(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var Hd=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Ud=class{constructor(e){this.manager=e===void 0?Hd:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ud.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Wd=new WeakMap,Gd=class extends Ud{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Bd.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=Wd.get(a);e===void 0&&(e=[],Wd.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=ma(`img`);function s(){l(),t&&t(this);let n=Wd.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}Wd.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),Bd.remove(`image:${e}`);let n=Wd.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}Wd.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Bd.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},Kd=class extends Ud{constructor(e){super(e)}load(e,t,n,r){let i=new mo,a=new Gd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},qd=class extends Jo{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new J(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Jd=class extends qd{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Jo.DEFAULT_UP),this.updateMatrix(),this.groundColor=new J(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Yd=new xo,Xd=new K,Zd=new K,Qd=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new G(512,512),this.mapType=Kr,this.map=null,this.mapPass=null,this.matrix=new xo,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xc,this._frameExtents=new G(1,1),this._viewportCount=1,this._viewports=[new ho(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Xd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xd),Zd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Yd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Yd,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Yd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},$d=new K,ef=new Ya,tf=new K,nf=class extends Jo{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new xo,this.projectionMatrix=new xo,this.projectionMatrixInverse=new xo,this.coordinateSystem=da,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($d,ef,tf),tf.x===1&&tf.y===1&&tf.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($d,ef,tf.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose($d,ef,tf),tf.x===1&&tf.y===1&&tf.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($d,ef,tf.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},rf=new K,af=new G,of=new G,sf=class extends nf{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ea*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ea*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){rf.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rf.x,rf.y).multiplyScalar(-e/rf.z),rf.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rf.x,rf.y).multiplyScalar(-e/rf.z)}getViewSize(e,t){return this.getViewBounds(e,af,of),t.subVectors(of,af)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ta*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},cf=class extends nf{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},lf=class extends Qd{constructor(){super(new cf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},uf=class extends qd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Jo.DEFAULT_UP),this.updateMatrix(),this.target=new Jo,this.shadow=new lf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},df=class extends qd{constructor(e,t,n=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type=`RectAreaLight`,this.width=n,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},ff=-90,pf=1,mf=class extends Jo{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new sf(ff,pf,e,t);r.layers=this.layers,this.add(r);let i=new sf(ff,pf,e,t);i.layers=this.layers,this.add(i);let a=new sf(ff,pf,e,t);a.layers=this.layers,this.add(a);let o=new sf(ff,pf,e,t);o.layers=this.layers,this.add(o);let s=new sf(ff,pf,e,t);s.layers=this.layers,this.add(s);let c=new sf(ff,pf,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},hf=class extends sf{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},gf=`\\[\\]\\.:\\/`,_f=RegExp(`[\\[\\]\\.:\\/]`,`g`),vf=`[^\\[\\]\\.:\\/]`,yf=`[^`+gf.replace(`\\.`,``)+`]`,bf=`((?:WC+[\\/:])*)`.replace(`WC`,vf),xf=`(WCOD+)?`.replace(`WCOD`,yf),Sf=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,vf),Cf=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,vf),wf=RegExp(`^`+bf+xf+Sf+Cf+`$`),Tf=[`material`,`materials`,`bones`,`map`],Ef=class{constructor(e,t,n){let r=n||Df.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Df=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(_f,``)}static parseTrackName(e){let t=wf.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Tf.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){H(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){U(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){U(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){U(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){U(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){U(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){U(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){U(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;U(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){U(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){U(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Df.Composite=Ef,Df.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Df.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Df.prototype.GetterByBindingType=[Df.prototype._getValue_direct,Df.prototype._getValue_array,Df.prototype._getValue_arrayElement,Df.prototype._getValue_toArray],Df.prototype.SetterByBindingTypeAndVersioning=[[Df.prototype._setValue_direct,Df.prototype._setValue_direct_setNeedsUpdate,Df.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Df.prototype._setValue_array,Df.prototype._setValue_array_setNeedsUpdate,Df.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Df.prototype._setValue_arrayElement,Df.prototype._setValue_arrayElement_setNeedsUpdate,Df.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Df.prototype._setValue_fromArray,Df.prototype._setValue_fromArray_setNeedsUpdate,Df.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Of=new xo,kf=class{constructor(e,t,n=0,r=1/0){this.ray=new jc(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):U(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Of.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Of),this}intersectObject(e,t=!0,n=[]){return jf(e,this,n,t),n.sort(Af),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)jf(e[r],this,n,t);return n.sort(Af),n}};function Af(e,t){return e.distance-t.distance}function jf(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)jf(r[e],t,n,!0)}}var Mf=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,H(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Nf=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=W(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(W(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var Pf=new K,Ff=new K,If=new K,Lf=new K,Rf=new K,zf=new K,Bf=new K,Vf=class{constructor(e=new K,t=new K){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Pf.subVectors(e,this.start),Ff.subVectors(this.end,this.start);let n=Ff.dot(Ff);if(n===0)return 0;let r=Ff.dot(Pf)/n;return t&&(r=W(r,0,1)),r}closestPointToPoint(e,t,n){let r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=zf,n=Bf){let r=1e-8*1e-8,i,a,o=this.start,s=e.start,c=this.end,l=e.end;If.subVectors(c,o),Lf.subVectors(l,s),Rf.subVectors(o,s);let u=If.dot(If),d=Lf.dot(Lf),f=Lf.dot(Rf);if(u<=r&&d<=r)return t.copy(o),n.copy(s),t.sub(n),t.dot(t);if(u<=r)i=0,a=f/d,a=W(a,0,1);else{let e=If.dot(Rf);if(d<=r)a=0,i=W(-e/u,0,1);else{let t=If.dot(Lf),n=u*d-t*t;i=n===0?0:W((t*f-e*d)/n,0,1),a=(t*i+f)/d,a<0?(a=0,i=W(-e/u,0,1)):a>1&&(a=1,i=W((t-e)/u,0,1))}}return t.copy(o).addScaledVector(If,i),n.copy(s).addScaledVector(Lf,a),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Hf(e,t,n,r){let i=Uf(r);switch(n){case ai:return e*t;case ui:return e*t/i.components*i.byteLength;case di:return e*t/i.components*i.byteLength;case fi:return e*t*2/i.components*i.byteLength;case pi:return e*t*2/i.components*i.byteLength;case oi:return e*t*3/i.components*i.byteLength;case si:return e*t*4/i.components*i.byteLength;case mi:return e*t*4/i.components*i.byteLength;case hi:case gi:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case _i:case vi:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case bi:case Si:return Math.max(e,16)*Math.max(t,8)/4;case yi:case xi:return Math.max(e,8)*Math.max(t,8)/2;case Ci:case wi:case Ei:case Di:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ti:case Oi:case ki:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ai:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ji:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Mi:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ni:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Pi:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Fi:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ii:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Li:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ri:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case zi:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Bi:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Vi:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Hi:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ui:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Wi:case Gi:case Ki:return Math.ceil(e/4)*Math.ceil(t/4)*16;case qi:case Ji:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Yi:case Xi:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Uf(e){switch(e){case Kr:case qr:return{byteLength:1,components:1};case Yr:case Jr:case $r:return{byteLength:2,components:1};case ei:case ti:return{byteLength:2,components:4};case Zr:case Xr:case Qr:return{byteLength:4,components:1};case ri:case ii:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?H(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Wf(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Gf(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Z={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Q={common:{diffuse:{value:new J(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new q}},envmap:{envMap:{value:null},envMapRotation:{value:new q},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new q}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new q}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new q},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new q},normalScale:{value:new G(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new q},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new q}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new q}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new q}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new J(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new J(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0},uvTransform:{value:new q}},sprite:{diffuse:{value:new J(16777215)},opacity:{value:1},center:{value:new G(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}}},Kf={basic:{uniforms:ad([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:Z.meshbasic_vert,fragmentShader:Z.meshbasic_frag},lambert:{uniforms:ad([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new J(0)},envMapIntensity:{value:1}}]),vertexShader:Z.meshlambert_vert,fragmentShader:Z.meshlambert_frag},phong:{uniforms:ad([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new J(0)},specular:{value:new J(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Z.meshphong_vert,fragmentShader:Z.meshphong_frag},standard:{uniforms:ad([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new J(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},toon:{uniforms:ad([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new J(0)}}]),vertexShader:Z.meshtoon_vert,fragmentShader:Z.meshtoon_frag},matcap:{uniforms:ad([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:Z.meshmatcap_vert,fragmentShader:Z.meshmatcap_frag},points:{uniforms:ad([Q.points,Q.fog]),vertexShader:Z.points_vert,fragmentShader:Z.points_frag},dashed:{uniforms:ad([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Z.linedashed_vert,fragmentShader:Z.linedashed_frag},depth:{uniforms:ad([Q.common,Q.displacementmap]),vertexShader:Z.depth_vert,fragmentShader:Z.depth_frag},normal:{uniforms:ad([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:Z.meshnormal_vert,fragmentShader:Z.meshnormal_frag},sprite:{uniforms:ad([Q.sprite,Q.fog]),vertexShader:Z.sprite_vert,fragmentShader:Z.sprite_frag},background:{uniforms:{uvTransform:{value:new q},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Z.background_vert,fragmentShader:Z.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new q}},vertexShader:Z.backgroundCube_vert,fragmentShader:Z.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Z.cube_vert,fragmentShader:Z.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Z.equirect_vert,fragmentShader:Z.equirect_frag},distance:{uniforms:ad([Q.common,Q.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Z.distance_vert,fragmentShader:Z.distance_frag},shadow:{uniforms:ad([Q.lights,Q.fog,{color:{value:new J(0)},opacity:{value:1}}]),vertexShader:Z.shadow_vert,fragmentShader:Z.shadow_frag}};Kf.physical={uniforms:ad([Kf.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new q},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new q},clearcoatNormalScale:{value:new G(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new q},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new q},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new q},sheen:{value:0},sheenColor:{value:new J(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new q},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new q},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new q},transmissionSamplerSize:{value:new G},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new q},attenuationDistance:{value:0},attenuationColor:{value:new J(0)},specularColor:{value:new J(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new q},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new q},anisotropyVector:{value:new G},anisotropyMap:{value:null},anisotropyMapTransform:{value:new q}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag};var qf={r:0,b:0,g:0},Jf=new xo,Yf=new q;Yf.set(-1,0,0,0,1,0,0,0,1);function Xf(e,t,n,r,i,a){let o=new J(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new X(new Cl(1,1,1),new fd({name:`BackgroundCubeMaterial`,uniforms:id(Kf.backgroundCube.uniforms),vertexShader:Kf.backgroundCube.vertexShader,fragmentShader:Kf.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Jf.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Yf),l.material.toneMapped=no.getTransfer(i.colorSpace)!==ca,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new X(new Zu(2,2),new fd({name:`BackgroundMaterial`,uniforms:id(Kf.background.uniforms),vertexShader:Kf.background.vertexShader,fragmentShader:Kf.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=no.getTransfer(i.colorSpace)!==ca,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(qf,cd(e)),n.buffers.color.setClear(qf.r,qf.g,qf.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Zf(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Qf(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function $f(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(H(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&H(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function ep(e){let t=this,n=null,r=0,i=!1,a=!1,o=new cc,s=new q,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var tp=4,np=6,rp=20,ip=256,ap=new cf,op=new J,sp=null,cp=0,lp=0,up=!1,dp=new K,fp=new K,pp=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=dp}=i;sp=this._renderer.getRenderTarget(),cp=this._renderer.getActiveCubeFace(),lp=this._renderer.getActiveMipmapLevel(),up=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sp,cp,lp),this._renderer.xr.enabled=up,e.scissorTest=!1,gp(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sp=this._renderer.getRenderTarget(),cp=this._renderer.getActiveCubeFace(),lp=this._renderer.getActiveMipmapLevel(),up=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Hr,minFilter:Hr,generateMipmaps:!1,type:$r,format:si,colorSpace:oa,depthBuffer:!1},r=hp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=mp(r)),this._blurMaterial=vp(r,e,t),this._ggxMaterial=_p(r,e,t)}return r}_compileMaterial(e){let t=new X(new tc,e);this._renderer.compile(t,ap)}_sceneToCubeUV(e,t,n,r,i){let a=new sf(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(op),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new X(new Cl,new Mc({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(op),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;gp(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yp());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;gp(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,ap)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-tp?n-d+tp:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,gp(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,ap),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,gp(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,ap)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];gp(t,3*l*(r>this._lodMax-tp?r-this._lodMax+tp:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,ap)}};function mp(e){let t=[],n=[],r=e,i=e-tp+1+np;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?fp.set(1,r,n):e===1?fp.set(-n,1,-r):e===2?fp.set(-n,r,1):e===3?fp.set(-1,r,-n):e===4?fp.set(-n,-1,r):fp.set(n,r,-1),fp.toArray(l,(e*6+t)*3)}}let u=new tc;u.setAttribute(`position`,new Vs(c,3)),u.setAttribute(`outputDirection`,new Vs(l,3)),n.push(new X(u,null)),r>tp&&r--}return{lodMeshes:n,sizeLods:t}}function hp(e,t,n){let r=new _o(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function gp(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function _p(e,t,n){return new fd({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:ip,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xp(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function vp(e,t,n){return new fd({name:`SphericalGaussianBlur`,defines:{SAMPLES:rp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xp(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function yp(){return new fd({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:xp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function bp(){return new fd({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function xp(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Sp=class extends _o{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new vl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Cl(5,5,5),i=new fd({name:`CubemapFromEquirect`,uniforms:id(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new X(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Hr),new mf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Cp(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Sp(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new pp(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new pp(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function wp(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ya(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Tp(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Us:Hs)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Ep(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Dp(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:U(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Op(e,t,n){let r=new WeakMap,i=new ho;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new vo(h,p,m,u);g.type=Qr,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new G(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function kp(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ap={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function jp(e,t,n,r,i,a){let o=new _o(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new tc;l.setAttribute(`position`,new Y([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Y([0,2,0,0,2,0],2));let u=new pd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new X(l,u),f=new cf(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new _o(t,n,{type:$r,depthBuffer:!1,stencilBuffer:!1}),c=new _o(t,n,{type:$r,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},no.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Ap[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Mp=new mo,Np=new bl(1,1),Pp=new vo,Fp=new bo,Ip=new vl,Lp=[],Rp=[],zp=new Float32Array(16),Bp=new Float32Array(9),Vp=new Float32Array(4);function Hp(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Lp[i];if(a===void 0&&(a=new Float32Array(i),Lp[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Up(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Wp(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Gp(e,t){let n=Rp[t];n===void 0&&(n=new Int32Array(t),Rp[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Kp(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function qp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Up(n,t))return;e.uniform2fv(this.addr,t),Wp(n,t)}}function Jp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Up(n,t))return;e.uniform3fv(this.addr,t),Wp(n,t)}}function Yp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Up(n,t))return;e.uniform4fv(this.addr,t),Wp(n,t)}}function Xp(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Up(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Wp(n,t)}else{if(Up(n,r))return;Vp.set(r),e.uniformMatrix2fv(this.addr,!1,Vp),Wp(n,r)}}function Zp(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Up(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Wp(n,t)}else{if(Up(n,r))return;Bp.set(r),e.uniformMatrix3fv(this.addr,!1,Bp),Wp(n,r)}}function Qp(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Up(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Wp(n,t)}else{if(Up(n,r))return;zp.set(r),e.uniformMatrix4fv(this.addr,!1,zp),Wp(n,r)}}function $p(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function em(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Up(n,t))return;e.uniform2iv(this.addr,t),Wp(n,t)}}function tm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Up(n,t))return;e.uniform3iv(this.addr,t),Wp(n,t)}}function nm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Up(n,t))return;e.uniform4iv(this.addr,t),Wp(n,t)}}function rm(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function im(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Up(n,t))return;e.uniform2uiv(this.addr,t),Wp(n,t)}}function am(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Up(n,t))return;e.uniform3uiv(this.addr,t),Wp(n,t)}}function om(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Up(n,t))return;e.uniform4uiv(this.addr,t),Wp(n,t)}}function sm(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Np.compareFunction=n.isReversedDepthBuffer()?518:515,a=Np):a=Mp,n.setTexture2D(t||a,i)}function cm(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Fp,i)}function lm(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Ip,i)}function um(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Pp,i)}function dm(e){switch(e){case 5126:return Kp;case 35664:return qp;case 35665:return Jp;case 35666:return Yp;case 35674:return Xp;case 35675:return Zp;case 35676:return Qp;case 5124:case 35670:return $p;case 35667:case 35671:return em;case 35668:case 35672:return tm;case 35669:case 35673:return nm;case 5125:return rm;case 36294:return im;case 36295:return am;case 36296:return om;case 35678:case 36198:case 36298:case 36306:case 35682:return sm;case 35679:case 36299:case 36307:return cm;case 35680:case 36300:case 36308:case 36293:return lm;case 36289:case 36303:case 36311:case 36292:return um}}function fm(e,t){e.uniform1fv(this.addr,t)}function pm(e,t){let n=Hp(t,this.size,2);e.uniform2fv(this.addr,n)}function mm(e,t){let n=Hp(t,this.size,3);e.uniform3fv(this.addr,n)}function hm(e,t){let n=Hp(t,this.size,4);e.uniform4fv(this.addr,n)}function gm(e,t){let n=Hp(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function _m(e,t){let n=Hp(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function vm(e,t){let n=Hp(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ym(e,t){e.uniform1iv(this.addr,t)}function bm(e,t){e.uniform2iv(this.addr,t)}function xm(e,t){e.uniform3iv(this.addr,t)}function Sm(e,t){e.uniform4iv(this.addr,t)}function Cm(e,t){e.uniform1uiv(this.addr,t)}function wm(e,t){e.uniform2uiv(this.addr,t)}function Tm(e,t){e.uniform3uiv(this.addr,t)}function Em(e,t){e.uniform4uiv(this.addr,t)}function Dm(e,t,n){let r=this.cache,i=t.length,a=Gp(n,i);Up(r,a)||(e.uniform1iv(this.addr,a),Wp(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Np:Mp;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Om(e,t,n){let r=this.cache,i=t.length,a=Gp(n,i);Up(r,a)||(e.uniform1iv(this.addr,a),Wp(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Fp,a[e])}function km(e,t,n){let r=this.cache,i=t.length,a=Gp(n,i);Up(r,a)||(e.uniform1iv(this.addr,a),Wp(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Ip,a[e])}function Am(e,t,n){let r=this.cache,i=t.length,a=Gp(n,i);Up(r,a)||(e.uniform1iv(this.addr,a),Wp(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Pp,a[e])}function jm(e){switch(e){case 5126:return fm;case 35664:return pm;case 35665:return mm;case 35666:return hm;case 35674:return gm;case 35675:return _m;case 35676:return vm;case 5124:case 35670:return ym;case 35667:case 35671:return bm;case 35668:case 35672:return xm;case 35669:case 35673:return Sm;case 5125:return Cm;case 36294:return wm;case 36295:return Tm;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return Dm;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return km;case 36289:case 36303:case 36311:case 36292:return Am}}var Mm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dm(t.type)}},Nm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jm(t.type)}},Pm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Fm=/(\w+)(\])?(\[|\.)?/g;function Im(e,t){e.seq.push(t),e.map[t.id]=t}function Lm(e,t,n){let r=e.name,i=r.length;for(Fm.lastIndex=0;;){let a=Fm.exec(r),o=Fm.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Im(n,l===void 0?new Mm(s,e,t):new Nm(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Pm(s),Im(n,e)),n=e}}}var Rm=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Lm(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function zm(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Bm=37297,Vm=0;function Hm(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Um=new q;function Wm(e){no._getMatrix(Um,no.workingColorSpace,e);let t=`mat3( ${Um.elements.map(e=>e.toFixed(4))} )`;switch(no.getTransfer(e)){case sa:return[t,`LinearTransferOETF`];case ca:return[t,`sRGBTransferOETF`];default:return H(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Gm(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Hm(e.getShaderSource(t),r)}return i}function Km(e,t){let n=Wm(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var qm={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Jm(e,t){let n=qm[t];return n===void 0?(H(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Ym=new K;function Xm(){return no.getLuminanceCoefficients(Ym),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Ym.x.toFixed(4)}, ${Ym.y.toFixed(4)}, ${Ym.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Zm(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(eh).join(`
`)}function Qm(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function $m(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function eh(e){return e!==``}function th(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nh(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var rh=/^[ \t]*#include +<([\w\d./]+)>/gm;function ih(e){return e.replace(rh,oh)}var ah=new Map;function oh(e,t){let n=Z[t];if(n===void 0){let e=ah.get(t);if(e!==void 0)n=Z[e],H(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return ih(n)}var sh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ch(e){return e.replace(sh,lh)}function lh(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function uh(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var dh={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function fh(e){return dh[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var ph={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function mh(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:ph[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var hh={302:`ENVMAP_MODE_REFRACTION`};function gh(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:hh[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var _h={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function vh(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:_h[e.combine]||`ENVMAP_BLENDING_NONE`}function yh(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function bh(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=fh(n),l=mh(n),u=gh(n),d=vh(n),f=yh(n),p=Zm(n),m=Qm(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(eh).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(eh).join(`
`),_.length>0&&(_+=`
`)):(g=[uh(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(eh).join(`
`),_=[uh(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Z.tonemapping_pars_fragment,n.toneMapping===0?``:Jm(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Z.colorspace_pars_fragment,Km(`linearToOutputTexel`,n.outputColorSpace),Xm(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(eh).join(`
`)),o=ih(o),o=th(o,n),o=nh(o,n),s=ih(s),s=th(s,n),s=nh(s,n),o=ch(o),s=ch(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=zm(i,i.VERTEX_SHADER,y),S=zm(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Gm(i,x,`vertex`),n=Gm(i,S,`fragment`);U(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):H(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Rm(i,h),T=$m(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Bm)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Vm++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var xh=0,Sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ch(e),t.set(e,n)),n}},Ch=class{constructor(e){this.id=xh++,this.code=e,this.usedTimes=0}};function wh(e){return e===1030||e===37490||e===36285}function Th(e,t,n,r,i,a){let o=new Mo,s=new Sh,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&H(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Kf[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,ee=h.isBatchedMesh===!0,te=!!i.map,ne=!!i.matcap,re=!!x,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,P=!!i.normalMap,se=!!i.displacementMap,F=!!i.emissiveMap,ce=!!i.metalnessMap,I=!!i.roughnessMap,le=i.anisotropy>0,ue=i.clearcoat>0,L=i.dispersion>0,de=i.retroreflectivity>0,fe=i.iridescence>0,pe=i.sheen>0,me=i.transmission>0,he=le&&!!i.anisotropyMap,ge=ue&&!!i.clearcoatMap,_e=ue&&!!i.clearcoatNormalMap,ve=ue&&!!i.clearcoatRoughnessMap,ye=fe&&!!i.iridescenceMap,R=fe&&!!i.iridescenceThicknessMap,be=pe&&!!i.sheenColorMap,xe=pe&&!!i.sheenRoughnessMap,Se=!!i.specularMap,z=!!i.specularColorMap,Ce=!!i.specularIntensityMap,B=me&&!!i.transmissionMap,V=me&&!!i.thicknessMap,we=!!i.gradientMap,Te=!!i.alphaMap,Ee=i.alphaTest>0,De=!!i.alphaHash,Oe=!!i.extensions,ke=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ke=e.toneMapping);let Ae={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ee,batchingColor:ee&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:no.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:te,matcap:ne,envMap:re,envMapMode:re&&x.mapping,envMapCubeUVHeight:S,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:P,displacementMap:se,emissiveMap:F,normalMapObjectSpace:P&&i.normalMapType===1,normalMapTangentSpace:P&&i.normalMapType===0,packedNormalMap:P&&i.normalMapType===0&&wh(i.normalMap.format),metalnessMap:ce,roughnessMap:I,anisotropy:le,anisotropyMap:he,clearcoat:ue,clearcoatMap:ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:ve,dispersion:L,retroreflection:de,iridescence:fe,iridescenceMap:ye,iridescenceThicknessMap:R,sheen:pe,sheenColorMap:be,sheenRoughnessMap:xe,specularMap:Se,specularColorMap:z,specularIntensityMap:Ce,transmission:me,transmissionMap:B,thicknessMap:V,gradientMap:we,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Te,alphaTest:Ee,alphaHash:De,combine:i.combine,mapUv:te&&m(i.map.channel),aoMapUv:ie&&m(i.aoMap.channel),lightMapUv:ae&&m(i.lightMap.channel),bumpMapUv:oe&&m(i.bumpMap.channel),normalMapUv:P&&m(i.normalMap.channel),displacementMapUv:se&&m(i.displacementMap.channel),emissiveMapUv:F&&m(i.emissiveMap.channel),metalnessMapUv:ce&&m(i.metalnessMap.channel),roughnessMapUv:I&&m(i.roughnessMap.channel),anisotropyMapUv:he&&m(i.anisotropyMap.channel),clearcoatMapUv:ge&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:_e&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:R&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:be&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:xe&&m(i.sheenRoughnessMap.channel),specularMapUv:Se&&m(i.specularMap.channel),specularColorMapUv:z&&m(i.specularColorMap.channel),specularIntensityMapUv:Ce&&m(i.specularIntensityMap.channel),transmissionMapUv:B&&m(i.transmissionMap.channel),thicknessMapUv:V&&m(i.thicknessMap.channel),alphaMapUv:Te&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(P||le),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(te||Te),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&P===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:ke,decodeVideoTexture:te&&i.map.isVideoTexture===!0&&no.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:F&&i.emissiveMap.isVideoTexture===!0&&no.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Oe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Oe&&i.extensions.multiDraw===!0||ee)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Kf[t];n=ld.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new bh(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Eh(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Dh(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Oh(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function kh(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Dh),r.length>1&&r.sort(t||Oh),i.length>1&&i.sort(t||Oh)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Ah(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new kh,e.set(t,[i])):n>=r.length?(i=new kh,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function jh(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new K,color:new J};break;case`SpotLight`:n={position:new K,direction:new K,color:new J,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new K,color:new J,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new K,skyColor:new J,groundColor:new J};break;case`RectAreaLight`:n={color:new J,position:new K,halfWidth:new K,halfHeight:new K}}return e[t.id]=n,n}}}function Mh(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Nh=0;function Ph(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Fh(e){let t=new jh,n=Mh(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new K);let i=new K,a=new xo,o=new xo;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Ph);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Nh++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Ih(e){let t=new Fh(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Lh(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Ih(e),t.set(n,[a])):r>=i.length?(a=new Ih(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Rh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zh=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Bh=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],Vh=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Hh=new xo,Uh=new K,Wh=new K;function Gh(e,t,n){let r=new Xc,i=new G,a=new G,o=new ho,s=new vd,c=new yd,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new fd({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new G},radius:{value:4}},vertexShader:Rh,fragmentShader:zh}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new tc;m.setAttribute(`position`,new Vs(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new X(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(H(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){H(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){H(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new _o(i.x,i.y,{format:fi,type:$r,minFilter:Hr,magFilter:Hr,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new bl(i.x,i.y,Qr),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ci,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=zr,d.map.depthTexture.magFilter=zr}else l.isPointLight?(d.map=new Sp(i.x),d.map.depthTexture=new xl(i.x,Zr)):(d.map=new _o(i.x,i.y),d.map.depthTexture=new bl(i.x,i.y,Zr)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ci,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Hr,d.map.depthTexture.magFilter=Hr):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=zr,d.map.depthTexture.magFilter=zr);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Uh.setFromMatrixPosition(l.matrixWorld),e.position.copy(Uh),Wh.copy(e.position),Wh.add(Bh[t]),e.up.copy(Vh[t]),e.lookAt(Wh),e.updateMatrixWorld(),n.makeTranslation(-Uh.x,-Uh.y,-Uh.z),Hh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Hh,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new _o(i.x,i.y,{format:fi,type:$r}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Kh(e,t){function n(){let t=!1,n=new ho,r=null,i=new ho(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ce(e.DEPTH_TEST):I(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=xa[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ce(e.STENCIL_TEST):I(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new J(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,ee=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),N=ee>=2):(ee=parseFloat(/^WebGL (\d)/.exec(te)[1]),N=ee>=1);let ne=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new ho().fromArray(ie),P=new ho().fromArray(ae);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let F={};F[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),F[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),F[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ce(e.DEPTH_TEST),o.setFunc(3),he(!1),ge(1),ce(e.CULL_FACE),pe(0);function ce(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function I(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function le(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ue(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function L(t){return h!==t&&(e.useProgram(t),h=t,!0)}let de={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};de[103]=e.MIN,de[104]=e.MAX;let fe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function pe(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(I(e.BLEND),g=!1);else if(g===!1&&(ce(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:U(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:U(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:U(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:U(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(de[n],de[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(fe[r],fe[i],fe[o],fe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function me(t,n){t.side===2?I(e.CULL_FACE):ce(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?pe(0):pe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ve(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ce(e.SAMPLE_ALPHA_TO_COVERAGE):I(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ge(t){t===0?I(e.CULL_FACE):(ce(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function _e(t){t!==k&&(N&&e.lineWidth(t),k=t)}function ve(t,n,r){t?(ce(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):I(e.POLYGON_OFFSET_FILL)}function ye(t){t?ce(e.SCISSOR_TEST):I(e.SCISSOR_TEST)}function R(t){t===void 0&&(t=e.TEXTURE0+M-1),ne!==t&&(e.activeTexture(t),ne=t)}function be(t,n,r){r===void 0&&(r=ne===null?e.TEXTURE0+M-1:ne);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(ne!==r&&(e.activeTexture(r),ne=r),e.bindTexture(t,n||F[t]),i.type=t,i.texture=n)}function xe(){let t=re[ne];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Se(){try{e.compressedTexImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function z(){try{e.compressedTexImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ce(){try{e.texSubImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function B(){try{e.texSubImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function V(){try{e.compressedTexSubImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function we(){try{e.compressedTexSubImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Te(){try{e.texStorage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ee(){try{e.texStorage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function De(){try{e.texImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Oe(){try{e.texImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function ke(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ae(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function je(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function Me(t){P.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),P.copy(t))}function Ne(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Pe(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Fe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,re={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new J(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,oe.set(0,0,e.canvas.width,e.canvas.height),P.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ce,disable:I,bindFramebuffer:le,drawBuffers:ue,useProgram:L,setBlending:pe,setMaterial:me,setFlipSided:he,setCullFace:ge,setLineWidth:_e,setPolygonOffset:ve,setScissorTest:ye,activeTexture:R,bindTexture:be,unbindTexture:xe,compressedTexImage2D:Se,compressedTexImage3D:z,texImage2D:De,texImage3D:Oe,pixelStorei:Ae,getParameter:ke,updateUBOMapping:Ne,uniformBlockBinding:Pe,texStorage2D:Te,texStorage3D:Ee,texSubImage2D:Ce,texSubImage3D:B,compressedTexSubImage2D:V,compressedTexSubImage3D:we,scissor:je,viewport:Me,reset:Fe}}function qh(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new G,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):ma(`canvas`)}function g(e,t,n){let r=1,i=Se(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),H(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&H(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];H(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||H(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?sa:no.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,H(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function M(){let e=O;return e>=i.maxTextures&&H(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function N(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ee(t,i){let a=r.get(t);if(t.isVideoTexture&&be(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)H(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)H(`WebGLRenderer: Texture marked for update but image is incomplete`);else{I(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function te(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?I(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ne(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?I(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function re(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?le(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ie={[Ir]:e.REPEAT,[Lr]:e.CLAMP_TO_EDGE,[Rr]:e.MIRRORED_REPEAT},ae={[zr]:e.NEAREST,[Br]:e.NEAREST_MIPMAP_NEAREST,[Vr]:e.NEAREST_MIPMAP_LINEAR,[Hr]:e.LINEAR,[Ur]:e.LINEAR_MIPMAP_NEAREST,[Wr]:e.LINEAR_MIPMAP_LINEAR},oe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function P(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&H(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ie[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ie[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ie[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ae[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ae[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,oe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function se(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=N(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function F(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ce(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=F(n.start,r.width,4),c=F(t.start,r.width,4);n.start<=i+1&&a===c&&F(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function I(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=se(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=no.getPrimaries(no.workingColorSpace),r=o.colorSpace===``?null:no.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=xe(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);P(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===li,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&ce(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=Hf(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Hf(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=Se(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=Se(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function le(t,o,s){if(o.image.length!==6)return;let c=se(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=no.getPrimaries(no.workingColorSpace),r=o.colorSpace===``?null:no.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=xe(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);P(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=Se(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ue(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),R(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,ye(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function L(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;R(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ye(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ye(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);R(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ye(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ye(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function de(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),P(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else ee(i.depthTexture,0);let u=l.__webglTexture,d=ye(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)R(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)R(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function fe(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)de(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?de(i.__webglFramebuffer[0],t,0):de(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),L(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),L(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function pe(t,n,i){let a=r.get(t);n!==void 0&&ue(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&fe(t)}function me(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&R(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=ye(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),L(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),P(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ue(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ue(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),P(c,a),ue(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),P(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ue(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ue(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&fe(t)}function he(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let ge=[],_e=[];function ve(t){if(t.samples>0){if(R(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(ge.length=0,_e.length=0,ge.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(ge.push(l),_e.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,_e)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ge))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function ye(e){return Math.min(i.maxSamples,e.samples)}function R(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function be(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function xe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(no.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&H(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):U(`WebGLTextures: Unsupported texture color space:`,n)),t}function Se(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=M,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=ee,this.setTexture2DArray=te,this.setTexture3D=ne,this.setTextureCube=re,this.rebindTextures=pe,this.setupRenderTarget=me,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=R,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Jh(e,t){function n(n,r=``){let i,a=no.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Yh=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xh=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Zh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Sl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new fd({vertexShader:Yh,fragmentShader:Xh,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new X(new Zu(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qh=class extends Sa{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Zh,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new G,C=null,w=null,T=new sf;T.viewport=new ho;let E=new sf;E.viewport=new ho;let D=[T,E],O=new hf,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Zo,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Zo,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Zo,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,N);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,P.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&H(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&H(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,N),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?li:ci,a=_.stencil?ni:Zr);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new _o(d.textureWidth,d.textureHeight,{format:si,type:Kr,depthTexture:new bl(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new _o(f.framebufferWidth,f.framebufferHeight,{format:si,type:Kr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),P.setContext(r),P.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function N(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let ee=new K,te=new K;function ne(e,t,n){ee.setFromMatrixPosition(t.matrixWorld),te.setFromMatrixPosition(n.matrixWorld);let r=ee.distanceTo(te),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function re(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;re(O,i);for(let e=0;e<a.length;e++)re(a[e],i);a.length===2?ne(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),ie(e,O,i)};function ie(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ea*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let ae=null;function oe(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new sf,o.layers.enable(n),o.viewport=new ho,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Sl,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ae&&ae(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let P=new Wf;P.setAnimationLoop(oe),this.setAnimationLoop=function(e){ae=e},this.dispose=function(){}}},$h=new xo,eg=new q;eg.set(-1,0,0,0,1,0,0,0,1);function tg(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,cd(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4($h.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(eg),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ng(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return U(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?H(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):H(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var rg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ig=null;function ag(){return ig===null&&(ig=new Kc(rg,16,16,fi,$r),ig.name=`DFG_LUT`,ig.minFilter=Hr,ig.magFilter=Hr,ig.wrapS=Lr,ig.wrapT=Lr,ig.generateMipmaps=!1,ig.needsUpdate=!0),ig}var og=class{constructor(e={}){let{canvas:t=ha(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Kr}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([mi,pi,di]),g=new Set([Kr,Zr,Yr,ni,ei,ti]),_=new Uint32Array(4),v=new Int32Array(4),y=new K,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=aa;let j=0,M=0,N=null,ee=-1,te=null,ne=new ho,re=new ho,ie=null,ae=new J(0),oe=0,P=t.width,se=t.height,F=1,ce=null,I=null,le=new ho(0,0,P,se),ue=new ho(0,0,P,se),L=!1,de=new Xc,fe=!1,pe=!1,me=new xo,he=new K,ge=new ho,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function ye(){return N===null?F:1}let R=n;function be(e,n){return t.getContext(e,n)}let xe,Se,z,Ce,B,V,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,Ue,!1),t.addEventListener(`webglcontextrestored`,We,!1),t.addEventListener(`webglcontextcreationerror`,Ge,!1),R===null){let t=`webgl2`;if(R=be(t,e),R===null)throw be(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Ve()}catch(e){throw t.removeEventListener(`webglcontextlost`,Ue,!1),t.removeEventListener(`webglcontextrestored`,We,!1),t.removeEventListener(`webglcontextcreationerror`,Ge,!1),U(`WebGLRenderer: `+e.message),e}function Ve(){xe=new wp(R),xe.init(),Re=new Jh(R,xe),Se=new $f(R,xe,e,Re),z=new Kh(R,xe),Se.reversedDepthBuffer&&d&&z.buffers.depth.setReversed(!0),O=R.createFramebuffer(),k=R.createFramebuffer(),A=R.createFramebuffer(),Ce=new Dp(R),B=new Eh,V=new qh(R,xe,z,B,Se,Re,Ce),we=new Cp(T),Te=new Gf(R),ze=new Zf(R,Te),Ee=new Tp(R,Te,Ce,ze),De=new kp(R,Ee,Te,ze,Ce),Fe=new Op(R,Se,V),Me=new ep(B),Oe=new Th(T,we,xe,Se,ze,Me),ke=new tg(T,B),Ae=new Ah,je=new Lh(xe),Pe=new Xf(T,we,z,De,p,s),Ne=new Gh(T,De,Se),Be=new ng(R,Ce,Se,z),Ie=new Qf(R,xe,Ce),Le=new Ep(R,xe,Ce),Ce.programs=Oe.programs,T.capabilities=Se,T.extensions=xe,T.properties=B,T.renderLists=Ae,T.shadowMap=Ne,T.state=z,T.info=Ce}m!==1009&&(w=new jp(m,t.width,t.height,o,r,i));let He=new Qh(T,R);this.xr=He,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let e=xe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=xe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(e){e!==void 0&&(F=e,this.setSize(P,se,!1))},this.getSize=function(e){return e.set(P,se)},this.setSize=function(e,n,r=!0){He.isPresenting?H(`WebGLRenderer: Can't change size while VR device is presenting.`):(P=e,se=n,t.width=Math.floor(e*F),t.height=Math.floor(n*F),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(P*F,se*F).floor()},this.setDrawingBufferSize=function(e,n,r){P=e,se=n,F=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)U(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){H(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ne)},this.getViewport=function(e){return e.copy(le)},this.setViewport=function(e,t,n,r){e.isVector4?le.set(e.x,e.y,e.z,e.w):le.set(e,t,n,r),z.viewport(ne.copy(le).multiplyScalar(F).round())},this.getScissor=function(e){return e.copy(ue)},this.setScissor=function(e,t,n,r){e.isVector4?ue.set(e.x,e.y,e.z,e.w):ue.set(e,t,n,r),z.scissor(re.copy(ue).multiplyScalar(F).round())},this.getScissorTest=function(){return L},this.setScissorTest=function(e){z.setScissorTest(L=e)},this.setOpaqueSort=function(e){ce=e},this.setTransparentSort=function(e){I=e},this.getClearColor=function(e){return e.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Pe.getClearColor(),r=Pe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,R.clearBufferuiv(R.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,R.clearBufferiv(R.COLOR,0,v))}else r|=R.COLOR_BUFFER_BIT}t&&(r|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&R.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ue,!1),t.removeEventListener(`webglcontextrestored`,We,!1),t.removeEventListener(`webglcontextcreationerror`,Ge,!1),Pe.dispose(),Ae.dispose(),je.dispose(),B.dispose(),we.dispose(),De.dispose(),ze.dispose(),Be.dispose(),Oe.dispose(),He.dispose(),He.removeEventListener(`sessionstart`,Qe),He.removeEventListener(`sessionend`,$e),et.stop()};function Ue(e){e.preventDefault(),_a(`WebGLRenderer: Context Lost.`),E=!0}function We(){_a(`WebGLRenderer: Context Restored.`),E=!1;let e=Ce.autoReset,t=Ne.enabled,n=Ne.autoUpdate,r=Ne.needsUpdate,i=Ne.type;Ve(),Ce.autoReset=e,Ne.enabled=t,Ne.autoUpdate=n,Ne.needsUpdate=r,Ne.type=i}function Ge(e){U(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ke(e){let t=e.target;t.removeEventListener(`dispose`,Ke),qe(t)}function qe(e){Je(e),B.remove(e)}function Je(e){let t=B.get(e).programs;t!==void 0&&(t.forEach(function(e){Oe.releaseProgram(e)}),e.isShaderMaterial&&Oe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=_e);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=ut(e,t,n,r,i);z.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ee.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ze.setup(i,r,s,n,c);let h,g=Ie;if(c!==null&&(h=Te.get(c),g=Le,g.setIndex(h)),i.isMesh)r.wireframe===!0?(z.setLineWidth(r.wireframeLinewidth*ye()),g.setMode(R.LINES)):g.setMode(R.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),z.setLineWidth(e*ye()),i.isLineSegments?g.setMode(R.LINES):i.isLineLoop?g.setMode(R.LINE_LOOP):g.setMode(R.LINE_STRIP)}else i.isPoints?g.setMode(R.POINTS):i.isSprite&&g.setMode(R.TRIANGLES);if(i.isBatchedMesh){if(xe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Te.get(c).bytesPerElement:1,o=B.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(R,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ye(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),fe===!0&&Me.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,ot(e,t,r),e.side=0,e.needsUpdate=!0,ot(e,t,r),e.side=2):ot(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=je.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),pe=this.localClippingEnabled,fe=Me.init(this.clippingPlanes,pe),fe===!0&&Me.setGlobalState(this.clippingPlanes,t),D!==null&&Ne.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Ye(o,n,t,e),r.add(o)}else Ye(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=B.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}xe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Xe=null;function Ze(e){Xe&&Xe(e)}function Qe(){et.stop()}function $e(){et.start()}let et=new Wf;et.setAnimationLoop(Ze),typeof self<`u`&&et.setContext(self),this.setAnimationLoop=function(e){Xe=e,He.setAnimationLoop(e),e===null?et.stop():et.start()},He.addEventListener(`sessionstart`,Qe),He.addEventListener(`sessionend`,$e),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){U(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=He.enabled===!0&&He.isPresenting===!0,r=w!==null&&(N===null||n)&&w.begin(T,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(t),t=He.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,N),x=je.get(e,C.length),x.init(t),x.state.textureUnits=V.getTextureUnits(),C.push(x),me.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),de.setFromProjectionMatrix(me,da,t.reversedDepth),pe=this.localClippingEnabled,fe=Me.init(this.clippingPlanes,pe),b=Ae.get(e,S.length),b.init(),S.push(b),He.enabled===!0&&He.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&tt(e,t,-1/0,T.sortObjects)}tt(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(ce,I),ve=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,ve&&Pe.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),fe===!0&&Me.beginShadows();let i=x.state.shadowsArray;if(Ne.render(i,e,t),fe===!0&&Me.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];rt(n,r,e,a)}ve&&Pe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];nt(b,e,n,n.viewport)}}else r.length>0&&rt(n,r,e,t),ve&&Pe.render(e),nt(b,e,t)}N!==null&&M===0&&(V.updateMultisampleRenderTarget(N),V.updateRenderTargetMipmap(N)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),ze.resetDefaultState(),ee=-1,te=null,C.pop(),C.length>0?(x=C[C.length-1],V.setTextureUnits(x.state.textureUnits),fe===!0&&Me.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function tt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(de)){r&&ge.setFromMatrixPosition(e.matrixWorld).applyMatrix4(me);let i=De.update(e),a=e.material;a.visible&&b.push(e,i,a,n,ge.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(de))){let i=De.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),ge.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ge.copy(e.boundingSphere.center)),ge.applyMatrix4(e.matrixWorld).applyMatrix4(me)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,ge.z,s,t)}}else a.visible&&b.push(e,i,a,n,ge.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)tt(i[e],t,n,r)}function nt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),fe===!0&&Me.setGlobalState(T.clippingPlanes,n),r&&z.viewport(ne.copy(r)),i.length>0&&it(i,t,n),a.length>0&&it(a,t,n),o.length>0&&it(o,t,n),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function rt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=xe.has(`EXT_color_buffer_half_float`)||xe.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new _o(1,1,{generateMipmaps:!0,type:e?$r:Kr,minFilter:Wr,samples:Math.max(4,Se.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:no.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||ne;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ae),oe=T.getClearAlpha(),oe<1&&T.setClearColor(16777215,.5),T.clear(),ve&&Pe.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),fe===!0&&Me.setGlobalState(T.clippingPlanes,r),it(e,n,r),V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a),xe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,at(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ae,oe),d!==void 0&&(r.viewport=d),T.toneMapping=u}function it(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&at(o,t,n,s,l,c)}}function at(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function ot(e,t,n){t.isScene!==!0&&(t=_e);let r=B.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Oe.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Oe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=we.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ke),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return ct(e,s),d}else s.uniforms=Oe.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Oe.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Me.uniform),ct(e,s),r.needsLights=ft(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function st(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Rm.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function ct(e,t){let n=B.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function lt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function ut(e,t,n,r,i){t.isScene!==!0&&(t=_e),V.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:no.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=we.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=B.get(r),y=x.state.lights;if(fe===!0&&(pe===!0||e!==te)){let t=e===te&&r.id===ee;Me.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Me.numPlanes||v.numIntersection!==Me.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=ot(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(z.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==ee&&(ee=r.id,w=!0),v.needsLights){let e=lt(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||te!==e){z.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(R,`projectionMatrix`,e.projectionMatrix),O.setValue(R,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(R,he.setFromMatrixPosition(e.matrixWorld)),Se.logarithmicDepthBuffer&&O.setValue(R,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(R,`isOrthographic`,e.isOrthographicCamera===!0),te!==e&&(te=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(R,`sunShadowMap`,y.state.sunShadowMap,V),y.state.directionalShadowMap.length>0&&O.setValue(R,`directionalShadowMap`,y.state.directionalShadowMap,V),y.state.spotShadowMap.length>0&&O.setValue(R,`spotShadowMap`,y.state.spotShadowMap,V),y.state.pointShadowMap.length>0&&O.setValue(R,`pointShadowMap`,y.state.pointShadowMap,V)),i.isSkinnedMesh){O.setOptional(R,i,`bindMatrix`),O.setOptional(R,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(R,`boneTexture`,e.boneTexture,V))}i.isBatchedMesh&&(O.setOptional(R,i,`batchingTexture`),O.setValue(R,`batchingTexture`,i._matricesTexture,V),O.setOptional(R,i,`batchingIdTexture`),O.setValue(R,`batchingIdTexture`,i._indirectTexture,V),O.setOptional(R,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(R,`batchingColorTexture`,i._colorsTexture,V));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Fe.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(R,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=ag()),w){if(O.setValue(R,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&dt(k,E),a&&r.fog===!0&&ke.refreshFogUniforms(k,a),ke.refreshMaterialUniforms(k,r,F,se,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}Rm.upload(R,st(v),k,V)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Rm.upload(R,st(v),k,V),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(R,`center`,i.center),O.setValue(R,`modelViewMatrix`,i.modelViewMatrix),O.setValue(R,`normalMatrix`,i.normalMatrix),O.setValue(R,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Be.update(n,S),Be.bind(n,S)}}return S}function dt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function ft(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=B.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),B.get(e.texture).__webglTexture=t,B.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=B.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,j=t,M=n;let r=null,i=!1,a=!1;if(e){let o=B.get(e);if(o.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(R.FRAMEBUFFER,o.__webglFramebuffer),ne.copy(e.viewport),re.copy(e.scissor),ie=e.scissorTest,z.viewport(ne),z.scissor(re),z.setScissorTest(ie),ee=-1;return}if(o.__webglFramebuffer===void 0)V.setupRenderTarget(e);else if(o.__hasExternalTextures)V.rebindTextures(e,B.get(e.texture).__webglTexture,B.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&B.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);V.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=B.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&V.useMultisampledRTT(e)===!1?B.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ne.copy(e.viewport),re.copy(e.scissor),ie=e.scissorTest}else ne.copy(le).multiplyScalar(F).floor(),re.copy(ue).multiplyScalar(F).floor(),ie=L;if(n!==0&&(r=O),z.bindFramebuffer(R.FRAMEBUFFER,r)&&z.drawBuffers(e,r),z.viewport(ne),z.scissor(re),z.setScissorTest(ie),i){let r=B.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=B.get(e.textures[t]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=B.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,t.__webglTexture,n)}ee=-1};function pt(e){let t=B.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Se.textureFormatReadable(e.format),t.__typeReadable=Se.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){z.bindFramebuffer(R.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let u=pt(o);if(u.__formatReadable===!1){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&R.readPixels(t,n,r,i,Re.convert(c),Re.convert(l),a)}finally{let e=N===null?null:B.get(N).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){z.bindFramebuffer(R.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let d=pt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.bufferData(R.PIXEL_PACK_BUFFER,a.byteLength,R.STREAM_READ),R.readPixels(t,n,r,i,Re.convert(l),Re.convert(u),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let p=N===null?null:B.get(N).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,p);let m=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await ba(R,m,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,a),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(f),R.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;V.setTexture2D(e,0),R.copyTexSubImage2D(R.TEXTURE_2D,n,0,0,o,s,i,a),z.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Re.convert(t.format),_=Re.convert(t.type),v;t.isData3DTexture?(V.setTexture3D(t,0),v=R.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(V.setTexture2DArray(t,0),v=R.TEXTURE_2D_ARRAY):(V.setTexture2D(t,0),v=R.TEXTURE_2D),z.activeTexture(R.TEXTURE0),z.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,t.flipY),z.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),z.pixelStorei(R.UNPACK_ALIGNMENT,t.unpackAlignment);let y=z.getParameter(R.UNPACK_ROW_LENGTH),b=z.getParameter(R.UNPACK_IMAGE_HEIGHT),x=z.getParameter(R.UNPACK_SKIP_PIXELS),S=z.getParameter(R.UNPACK_SKIP_ROWS),C=z.getParameter(R.UNPACK_SKIP_IMAGES);z.pixelStorei(R.UNPACK_ROW_LENGTH,h.width),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,h.height),z.pixelStorei(R.UNPACK_SKIP_PIXELS,l),z.pixelStorei(R.UNPACK_SKIP_ROWS,u),z.pixelStorei(R.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=B.get(e),r=B.get(t),h=B.get(n.__renderTarget),g=B.get(r.__renderTarget);z.bindFramebuffer(R.READ_FRAMEBUFFER,h.__webglFramebuffer),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,B.get(e).__webglTexture,i,d+n),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,B.get(t).__webglTexture,a,m+n)),R.blitFramebuffer(l,u,o,s,f,p,o,s,R.DEPTH_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||B.has(e)){let n=B.get(e),r=B.get(t);z.bindFramebuffer(R.READ_FRAMEBUFFER,k),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,n.__webglTexture,i),T?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,r.__webglTexture,a),i===0?T?R.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):R.copyTexSubImage2D(v,a,f,p,l,u,o,s):R.blitFramebuffer(l,u,o,s,f,p,o,s,R.COLOR_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?R.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h);z.pixelStorei(R.UNPACK_ROW_LENGTH,y),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,b),z.pixelStorei(R.UNPACK_SKIP_PIXELS,x),z.pixelStorei(R.UNPACK_SKIP_ROWS,S),z.pixelStorei(R.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&R.generateMipmap(v),z.unbindTexture()},this.initRenderTarget=function(e){B.get(e).__webglFramebuffer===void 0&&V.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?V.setTextureCube(e,0):e.isData3DTexture?V.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?V.setTexture2DArray(e,0):V.setTexture2D(e,0),z.unbindTexture()},this.resetState=function(){j=0,M=0,N=null,z.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=no._getDrawingBufferColorSpace(e),t.unpackColorSpace=no._getUnpackColorSpace()}},sg=25*Math.PI/180;function cg(e,t,n,r){let i=F(t,e),a=F(r,n),o=i.x*a.y-i.y*a.x;if(Math.abs(o)<.001*le(i)*le(a))return Ae(Qe(t,n),.5);let s=((n.x-e.x)*a.y-(n.y-e.y)*a.x)/o;return Qe(e,Ae(i,s))}var lg=class{#e=[];#t=[];triangle(e,t,n){for(let{at:r,u:i,v:a}of[e,t,n])this.#e.push(r.x,r.y,r.z),this.#t.push(i,a)}quad(e,t,n,r,i){i?(this.triangle(e,n,t),this.triangle(e,r,n)):(this.triangle(e,t,n),this.triangle(e,n,r))}fill(e,t,n){let r=e.map(e=>new G(e.x,e.y));for(let[e,i,a]of Wu.triangulateShape(r,[])){let[r,o,s]=[t[e],t[i],t[a]];new K().subVectors(o.at,r.at).cross(new K().subVectors(s.at,r.at)).dot(n)>=0?this.triangle(r,o,s):this.triangle(r,s,o)}}geometry(){let e=new tc;return e.setAttribute(`position`,new Y(this.#e,3)),e.setAttribute(`uv`,new Y(this.#t,2)),e.computeVertexNormals(),e}};function ug(e,t,n){let{points:r,sides:i}=kr(e),a=r.length,o=we(r),s=new Set(t.sides),c=e.length,l=i.map(e=>{if(e>=0)return s.has(e);let t=-e-1;return s.has(t)||s.has((t-1+c)%c)}),u=e=>Se(F(r[(e+1)%a],r[e])),d=e=>me(u((e-1+a)%a),u(e))>Math.cos(sg);for(let e=!0;e;){e=!1;for(let t=0;t<a;t++){let n=(t+1)%a;l[t]!==l[n]&&d(n)&&(l[t]=l[n]=!0,e=!0)}}let f=r.map((e,t)=>ie(e,r[(t+1)%a],o)),p=Ar(t.points,!1),m=p[0]?.y??0,h=(p[p.length-1]?.y??0)-m,g=(e,t)=>Math.abs(h)>1e-6?(t-m)/h*n:e/Math.max(p.length-1,1)*n,_=r.map(e=>e.x),v=r.map(e=>e.y),y=.45*Math.min(Math.max(..._)-Math.min(..._),Math.max(...v)-Math.min(...v)),b=p.map((e,t)=>{let n=Math.max(-y,Math.min(y,-e.x)),i=r.map((e,t)=>{let i=Ae(f[t],l[t]?-n:0);return[Qe(e,i),Qe(r[(t+1)%a],i)]}),o=g(t,e.y);return r.map((e,t)=>{let[r,s]=i[(t-1+a)%a],[c,u]=i[t],d=cg(r,s,c,u),f=fe(d,e)>Math.abs(n)*4+1?l[t]?c:s:d;return new K(f.x,f.y,o)})}),x=new lg,S=[0];for(let e=1;e<=a;e++)S.push(S[e-1]+fe(r[e-1],r[e%a]));let C=(e,t)=>{let n=b[e][t%a];return{at:n,u:S[t],v:n.z}};for(let e=0;e+1<b.length;e++)for(let t=0;t<a;t++)x.quad(C(e,t),C(e,t+1),C(e+1,t+1),C(e+1,t),o!==1);let w=(e,t)=>{let n=b[e];x.fill(n.map(e=>({x:e.x,y:e.y})),n.map(e=>({at:e,u:e.x,v:e.y})),new K(0,0,t?1:-1))};return w(b.length-1,!0),w(0,!1),x.geometry()}function dg(e,t){let n=Ar(t,!0),r=e.length,i=new lg;if(r<2||n.length<3)return i.geometry();let a=fg(e),o=[0];for(let t=1;t<r;t++)o.push(o[t-1]+fe(e[t-1],e[t]));let s=[0];for(let e=1;e<=n.length;e++)s.push(s[e-1]+fe(n[e-1],n[e%n.length]));let c=e.map((e,t)=>n.map(n=>{let r=Qe(e,Ae(a[t],n.x));return new K(r.x,r.y,n.y)})),l=we(n);for(let e=0;e+1<r;e++){let t=o[e],r=o[e+1],a=(e,t)=>c[e][t];for(let o=0;o<n.length;o++){let c=(o+1)%n.length,u=s[o],d=s[o+1];i.quad({at:a(e,o),u:t,v:u},{at:a(e,c),u:t,v:d},{at:a(e+1,c),u:r,v:d},{at:a(e+1,o),u:r,v:u},l!==1)}}let u=(e,t)=>{let r=c[e];i.fill(n,r.map((e,t)=>({at:e,u:n[t].x,v:n[t].y})),new K(t.x,t.y,0))};return u(0,Se(F(e[0],e[1]))),u(r-1,Se(F(e[r-1],e[r-2]))),i.geometry()}function fg(e){let t=e.slice(0,-1).map((t,n)=>M(Se(F(e[n+1],t))));return e.map((e,n)=>{let r=t[n-1],i=t[n];if(!r)return i??{x:0,y:1};if(!i)return r;let a=Se(Qe(r,i));return Ae(a,1/Math.max(me(a,i),.2))})}function pg(e,t){if(e.length<2||t.length<3)return[...e];let n=Ar(t,!0),[r,i]=[Math.min(...n.map(e=>e.x)),Math.max(...n.map(e=>e.x))],a=fg(e),o=t=>e.map((e,n)=>Qe(e,Ae(a[n],t)));return[...o(r),...o(i).reverse()]}function mg(e,t){let n=pg(e,t);return{minX:Math.min(...n.map(e=>e.x)),maxX:Math.max(...n.map(e=>e.x)),minY:Math.min(...n.map(e=>e.y)),maxY:Math.max(...n.map(e=>e.y))}}var hg={select:`M5 3l10 7-4.4 1.1L8.2 15.6z`,new:`M5 2.5h6.5l3.5 3.5v11.5H5zM11.5 2.5V6H15`,open:`M2.5 15.5v-11h5l1.6 2h7.4v2.500M2.500 15.500l2.300-6.500h13l-2.300 6.500z`,save:`M3.5 3.5h10.5l2.500 2.500v10.500h-13zM6.500 3.500v4h6v-4M6.500 16.500v-5h7v5`,undo:`M7.500 4.500l-4 4 4 4M3.500 8.500h8.500a3.750 3.750 0 0 1 0 7.500H9`,redo:`M12.500 4.500l4 4-4 4M16.500 8.500H8a3.750 3.750 0 0 0 0 7.500h3`,exit:`M8.500 3.500h-5v13h5M8 10h9M13.500 6.500L17 10l-3.500 3.500`,pan:`M3.3 10L5 7.8c.5-.6 1.4-.4 1.7.3L7.5 10V4.7a1.1 1.1 0 0 1 2.2 0V3.6a1.1 1.1 0 0 1 2.2 0v.8a1.1 1.1 0 0 1 2.2 0v1.8a1.1 1.1 0 0 1 2.2 0V12c0 2.6-1.8 4.5-4.4 4.5H6.5c-2-1.5-3.2-4-3.2-6.5zM9.7 9V4.7M11.9 9V4.4M14.1 9.6V6.2`,orbit:`M10 4.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11zM2.6 12.4c2.3 2.7 10.8 2.2 14.6-1.5M15.4 8.7l1.8 2.2-2.8.5`,zoom:`M8.8 3.5a5.3 5.3 0 1 0 0 10.6a5.3 5.3 0 0 0 0-10.6zM12.7 12.7L17 17M6.6 8.8h4.4M8.8 6.6V11`,"zoom-window":`M2.5 6.5v-4h4M13.5 2.5h4v4M17.5 13.5v4h-4M6.5 17.5h-4v-4M9 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6zM11.2 11.2l2.6 2.6`,fit:`M3.5 7.5v-4h4M12.5 3.5h4v4M16.5 12.5v4h-4M7.5 16.5h-4v-4M6.5 6.5h7v7h-7z`,wall:`M2.5 5h15v10h-15zM2.5 8.3h15M2.5 11.7h15M7.5 5v3.3M12.5 5v3.3M5 8.3v3.4M10 8.3v3.4M15 8.3v3.4M7.5 11.7V15M12.5 11.7V15`,room:`M3 12l7-3.5 7 3.5-7 3.5zM3 12V6l7-3.5 7 3.5v6M10 8.5v-6`,plan:`M4.5 2.5h8l3 3v12h-11zM12.5 2.5v3h3M7 8h6v6H7zM10 8v3M7 11h3`,countertop:`M2.5 7.5h15v2.5h-15zM4 10v6.5h12V10M10 10v6.5M8.3 13v1.2M11.7 13v1.2`,door:`M3.5 3.5h8.5v13H3.5zM3.5 10h8.5M12 3.5l4.5-2v17l-4.5-2M14.6 8.8v2.4`,"rotate-left":`M4 9.5a6 6 0 1 1 1.7 4.2M4 5v4.5h4.5`,"rotate-right":`M16 9.5a6 6 0 1 0-1.7 4.2M16 5v4.5h-4.5`,duplicate:`M7 7h9.5v9.5H7zM4 13.5H3.5V3.5h10V4`,trash:`M4 6h12M8 6V4h4v2M5.5 6l.8 10.5h7.4L14.5 6M8.5 9v5M11.5 9v5`,plus:`M10 4v12M4 10h12`,check:`M4.5 10.5l3.5 3.5 7.5-8`,palette:`M10 3.5a6.5 6.5 0 1 0 0 13c1 0 1.5-.7 1.2-1.6-.3-1 .3-1.9 1.4-1.9h1.6a2.3 2.3 0 0 0 2.3-2.3C16.5 6.4 13.6 3.5 10 3.5zM6.8 9.2v.2M9 6.6v.2M12.2 7v.2`,cylinder:`M4.5 6a5.5 2.2 0 1 0 11 0a5.5 2.2 0 1 0-11 0M4.5 6v8a5.5 2.2 0 0 0 11 0V6`,box3d:`M4 7l6-3 6 3v6l-6 3-6-3zM4 7l6 3 6-3M10 10v6`,rect:`M4 6h12v8H4z`,tampon:`M6.5 4.5h7v11h-7zM10 4.5v11M3.5 3.5h3v13h-3zM13.5 3.5h3v13h-3z`,trim:`M3.5 4h13v12.5h-13zM3.5 6.2h13M3.5 14h13M2 16.5h16`,"m-joint":`M4 3.5h3v13H4zM7 13.5h9.5v3H7z`,"m-back":`M4.5 3.5h11v13h-11zM4.5 9.5l6-6M4.5 15l11-11M10 16.5l5.5-5.5`,"m-fronts":`M3.5 3.5h13v13h-13zM10 3.5v13M8 9v2M12 9v2`,"m-sliding":`M3.5 4.5h8v11h-8zM8.5 6.5h8v11h-8zM5.5 10h3M11.5 12h3`,"m-corner":`M3.5 3.5h13v6h-7v7h-6z`,"m-drawers":`M3.5 3.5h13v13h-13zM3.5 8h13M3.5 12.2h13M8.5 5.8h3M8.5 10.1h3M8.5 14.4h3`,"m-shelves":`M4 3v14M16 3v14M4 7.5h12M4 12.5h12`,"s-sink":`M3.5 5.5h13v9h-13zM6 8h8v4.5H6zM10 10.2v.1M10 5.5V3.8h2.2`,"s-hob":`M3.5 4.5h13v11h-13zM7 8.2a1.3 1.3 0 1 0 .01 0M13 8.2a1.3 1.3 0 1 0 .01 0M7 12a1.3 1.3 0 1 0 .01 0M13 12a1.3 1.3 0 1 0 .01 0`,"s-seam":`M3 6h14v8H3zM10 4v2M10 8v1.5M10 11.5V13M10 15v1.5`,"s-bracket":`M3 6h14M6 6v9M6 6h8v2.5H8.5z`,"s-join":`M2.5 6.5H8v7H2.5zM12 6.5h5.5v7H12zM8 8.5h4M8 11.5h4`,dropper:`M13.3 3.1a2.2 2.2 0 0 1 3.1 3.1l-1.6 1.6-3.1-3.1zM10.8 5.9l3.8 3.8M11.9 7l-6.1 6.1-.7 2.3 2.3-.7 6.1-6.1M3.6 17.6c0 .7-.5 1.2-1 1.2s-1-.5-1-1.2c0-.7 1-1.9 1-1.9s1 1.2 1 1.9z`,"w-parts":`M3.5 4.5h13v11h-13zM3.5 8h13M3.5 11.5h13M8 8v7.5`,"w-views":`M3 16.5h14M5 16.5v-9h10v9M5 11h10M9 7.5v9`,"w-render":`M3.5 6.5h3l1.2-2h4.6l1.2 2h3v9h-13zM10 8.4a2.7 2.7 0 1 0 .01 0`,circle:`M10 4a6 6 0 1 0 0 12a6 6 0 0 0 0-12z`,polygon:`M10 3.5l6 4.2-2.3 7.3H6.3L4 7.7z`,hexagon:`M10 3l6 3.5v7L10 17l-6-3.5v-7zM10 9.6v.8`,shape:`M4 8l6-3 6 3-6 3zM4 8v5l6 3 6-3V8M10 11v5`,punch:`M4 5h12v10H4zM10 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4z`,face:`M7 3.5v13M10.5 5.5v9M13 5.5v9`,"wall-both":`M8.5 3.5h3v13h-3zM5.5 5.5v9M14.5 5.5v9`,cabinet:`M4.5 4h11v12h-11zM10 4v12M8 9.5v1.5M12 9.5v1.5`,edit:`M4 16l.7-3.3L13.5 3.9l2.6 2.6-8.8 8.8zM11.8 5.6l2.6 2.6`,left:`M12.5 4.5L7 10l5.5 5.5`,arrow:`M3.5 10h12M11 5.5l4.5 4.5-4.5 4.5`,right:`M7.5 4.5L13 10l-5.5 5.5`,up:`M10 15V5M5.5 9.5L10 5l4.5 4.5`,move:`M10 2.5v15M2.5 10h15M7.5 5L10 2.5 12.5 5M7.5 15l2.5 2.5 2.5-2.5M5 7.5L2.5 10 5 12.5M15 7.5l2.5 2.5-2.5 2.5`,properties:`M4.5 3h11v14h-11zM7 6.5h6M7 9.5h6M7 12.5h4`,arrows:`M10 4v12M8.5 10H2.5M4.5 8l-2 2 2 2M11.5 10h6M15.5 8l2 2-2 2`,"double-click":`M7 8.5a3.5 3.5 0 0 1 7 0v5a3.5 3.5 0 0 1-7 0zM10.5 5v4M7 9.5h7M3.2 4.2l1.6 1.4M2.5 7.5h2M4.6 2.4l.9 1.8`,down:`M10 5v10M5.5 10.5L10 15l4.5-4.5`,close:`M5 5l10 10M15 5L5 15`,lock:`M5.5 9h9v7.5h-9zM7.5 9V6.4a2.5 2.5 0 0 1 5 0V9`,pin:`M12 2.5l5.5 5.5-1.8.6-3 3 .3 3.6-1.4 1.4-3.3-3.3L4 17.6M8.3 13.3L5 10l1.4-1.4 3.6.3 3-3z`,builder:`M3.5 4h10v12h-10zM8.5 4v12M7 9.5v1.5M10 9.5v1.5M15 12a3 3 0 1 0 0 6a3 3 0 0 0 0-6zM15 13.5v3M13.5 15h3`,vertices:`M4 4h12v12H4zM8 4v12M4 4m-1.4 0a1.4 1.4 0 1 0 2.8 0a1.4 1.4 0 1 0-2.8 0M16 4m-1.4 0a1.4 1.4 0 1 0 2.8 0a1.4 1.4 0 1 0-2.8 0M4 16m-1.4 0a1.4 1.4 0 1 0 2.8 0a1.4 1.4 0 1 0-2.8 0M16 16m-1.4 0a1.4 1.4 0 1 0 2.8 0a1.4 1.4 0 1 0-2.8 0M8 4m-1.4 0a1.4 1.4 0 1 0 2.8 0a1.4 1.4 0 1 0-2.8 0M8 16m-1.4 0a1.4 1.4 0 1 0 2.8 0a1.4 1.4 0 1 0-2.8 0`,magnet:`M4.5 3.5v6.5a5.5 5.5 0 0 0 11 0V3.5H12v6.5a2 2 0 0 1-4 0V3.5zM4.5 6.8H8M12 6.8h3.5`,overlap:`M3.5 3.5h9v9h-9zM7.5 7.5h9v9h-9z`,"wall-view":`M3 12.5h14v4H3zM10 3v6.2M7.4 6.8L10 9.4l2.6-2.6`,help:`M7.4 7.3a2.6 2.6 0 1 1 3.9 2.3c-.8.5-1.3 1-1.3 2M10 14.8v.01`,advanced:`M14.6 3.1a3.9 3.9 0 0 0-4.7 5L3.5 14.5a1.45 1.45 0 0 0 2 2l6.4-6.4a3.9 3.9 0 0 0 5-4.7l-2.4 2.4-2-.6-.6-2z`,construction:`M8.8 4.2L9.2 2.4L10.8 2.4L11.2 4.2L13.2 5.1L14.8 4.1L15.9 5.2L14.9 6.8L15.8 8.8L17.6 9.2L17.6 10.8L15.8 11.2L14.9 13.2L15.9 14.8L14.8 15.9L13.2 14.9L11.2 15.8L10.8 17.6L9.2 17.6L8.8 15.8L6.8 14.9L5.2 15.9L4.1 14.8L5.1 13.2L4.2 11.2L2.4 10.8L2.4 9.2L4.2 8.8L5.1 6.8L4.1 5.2L5.2 4.1L6.8 5.1zM10 7.4a2.6 2.6 0 1 0 0 5.2a2.6 2.6 0 0 0 0-5.2z`,layers:`M10 3l7 3.6-7 3.6-7-3.6zM3.4 10.2L10 13.6l6.6-3.4M3.4 13.4L10 16.8l6.6-3.4`,tape:`M8 4a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9zM8 7.3a1.2 1.2 0 1 0 0 2.4a1.2 1.2 0 0 0 0-2.4zM12.3 10.5h5.2v4h-5.2zM14 10.5v1.4M15.6 10.5v2.2M17.2 10.5v1.4`,storeys:`M3.5 16.5h13M5 16.5v-4.3h10v4.3M6.5 12.2V8h7v4.2M8 8V4.2h4V8`,eye:`M2.2 10S5 4.8 10 4.8 17.8 10 17.8 10 15 15.2 10 15.2 2.2 10 2.2 10zM10 12.4a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8z`,"eye-off":`M3.2 3.2l13.6 13.6M8.3 5.1A7.4 7.4 0 0 1 10 4.8c5 0 7.8 5.2 7.8 5.2a13 13 0 0 1-2.3 2.9M12.9 14.5a7 7 0 0 1-2.9.7C5 15.2 2.2 10 2.2 10a13 13 0 0 1 3.3-3.7M8.3 8.3a2.4 2.4 0 0 0 3.4 3.4`,"flip-sides":`M10 3v14M7.2 6.5L3.5 10l3.7 3.5zM12.8 6.5l3.7 3.5-3.7 3.5z`,"flip-faces":`M3 10h14M6.5 7.2L10 3.5l3.5 3.7zM6.5 12.8l3.5 3.7 3.5-3.7z`,copy:`M7 7h9.5v9.5H7zM4 13.5H3.5V3.5h10V4`,cut:`M3.5 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3.5 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7.2 7.1L16.5 14M7.2 12.9L16.5 6`,paste:`M6.5 4.5h-2v12h11v-12h-2M7 3h6v3H7zM7.5 10h5M7.5 13h5`,copies:`M3.5 6.5h8v8h-8zM8.5 3.5h8v8M14.5 13.5v3.5M12.75 15.25h3.5`,"turn-over":`M4.5 12.5a6 6 0 1 0 0-5M4.5 3.5v4h4M8.5 16.5h-4v-4`,hide:`M2.5 10s2.8-5 7.5-5 7.5 5 7.5 5-2.8 5-7.5 5-7.5-5-7.5-5zM10 7.8a2.2 2.2 0 1 0 0 4.4a2.2 2.2 0 0 0 0-4.4zM4 16L16 4`,show:`M2.5 10s2.8-5 7.5-5 7.5 5 7.5 5-2.8 5-7.5 5-7.5-5-7.5-5zM10 7.8a2.2 2.2 0 1 0 0 4.4a2.2 2.2 0 0 0 0-4.4z`,isolate:`M10 6.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7zM10 2.5V5M10 15v2.5M2.5 10H5M15 10h2.5`,detach:`M6.8 9.2L5 11a2.8 2.8 0 0 0 4 4l1.8-1.8M13.2 10.8L15 9a2.8 2.8 0 0 0-4-4L9.2 6.8M3.5 3.5l2 2M14.5 14.5l2 2`,keep:`M5.5 3.5h9v13L10 13.5 5.5 16.5z`,guides:`M3 6.5h14M3 10h14M3 13.5h14M6 5v3M14 12v3`,join:`M3 10h9M9.5 7.5L12 10l-2.5 2.5M15 4v12`,merge:`M3 10h5M12 10h5M6 7.5L8.5 10 6 12.5M14 7.5L11.5 10 14 12.5`,split:`M10 3v14M3 10h4M13 10h4M5 7.5L3 10l2 2.5M15 7.5l2 2.5-2 2.5`,unlock:`M5.5 9h9v7.5h-9zM7.5 9V6.5a2.5 2.5 0 0 1 4.8-1`,"wall-up":`M3 12.5h14v4H3zM10 9.4V3M7.4 5.6L10 3l2.6 2.6`,"select-all":`M3.5 3.5h13v13h-13zM7 10l2.2 2.2L13.5 8`,align:`M3.5 3v14M6.5 5.5h8V9h-8zM6.5 11h5v3.5h-5z`,group:`M3.5 3.5h5v5h-5zM11.5 11.5h5v5h-5zM6 8.5V14h5.5`,swap:`M4 7h11M12.5 4.5L15 7l-2.5 2.5M16 13H5M7.5 10.5L5 13l2.5 2.5`,measure:`M3 13.5L13.5 3 17 6.5 6.5 17zM6 10.5L7.5 12M8.5 8l1.5 1.5M11 5.5L12.5 7`,steps:`M3 16.5h4v-4h4v-4h4v-4h2`,note:`M4.5 3.5h11v9l-4 4h-7zM15.5 12.5h-4v4M7 7h6M7 10h4`,"turn-left":`M8.5 9h7v7h-7zM15 5.5a6.5 6.5 0 0 0-10.5 5M2.5 8.5l2 2.5 2.5-2`,"turn-right":`M4.5 9h7v7h-7zM5 5.5a6.5 6.5 0 0 1 10.5 5M17.5 8.5l-2 2.5-2.5-2`,tv:`M2.5 4h15v10h-15zM7 17h6M10 14v3`,away:`M5 15L15 5M9 5h6v6`,toward:`M15 5L5 15M5 9v6h6`,"grow-left":`M16 4v12M13 10H4.5M7.5 7l-3 3 3 3`,"grow-right":`M4 4v12M7 10h8.5M12.5 7l3 3-3 3`,"grow-up":`M4 16h12M10 13V4.5M7 7.5l3-3 3 3`,"grow-down":`M4 4h12M10 7v8.5M7 12.5l3 3 3-3`,"grow-near":`M11.5 3l5.5 5.5M14.2 5.8L5 15M5 10.5V15h4.5`,"grow-far":`M8.5 17L3 11.5M5.8 14.2L15 5M15 9.5V5h-4.5`,"point-add":`M3.5 9.5h6v6h-6zM14.5 3v7M11 6.5h7`,"point-remove":`M3.5 9.5h6v6h-6zM11 6.5h7`,"offset-side":`M3.5 4.5h8v11h-8zM14.5 4.5v11M12 10h5M15 8l2 2-2 2`,"offset-shape":`M6.5 6.5h7v7h-7zM3.5 3.5h13v13h-13z`,chamfer:`M3.5 16.5v-13h8l5 5v8z`,"align-left":`M3.5 3v14M6.5 6h10v3h-10zM6.5 11h6v3h-6z`,"align-right":`M16.5 3v14M3.5 6h10v3h-10zM7.5 11h6v3h-6z`,"flip-x":`M10 3v14M8 6L3.5 10 8 14zM12 6l4.5 4-4.5 4z`,"flip-y":`M3 10h14M6 8L10 3.5 14 8zM6 12l4 4.5 4-4.5z`,linear:`M2.5 13.5l5-5 4 3 6-6M2.5 17l5-5 4 3 6-6`,profile:`M3.5 16.5v-13h6v3.5a3.5 3.5 0 0 0 3.5 3.5h3.5v6z`,fillet:`M3.5 16.5v-13h7a6 6 0 0 1 6 6v7z`,grain:`M6 3c-1.5 2.5 1.5 4.5 0 7s1.5 4.5 0 7M10 3c-1.5 2.5 1.5 4.5 0 7s1.5 4.5 0 7M14 3c-1.5 2.5 1.5 4.5 0 7s1.5 4.5 0 7`},gg={select:[{d:`M5 3l10 7-4.4 1.1L8.2 15.6z`,fill:`#ffffff`}],new:[{d:`M5 2.5h6.5l3.5 3.5v11.5H5z`,fill:`#ffffff`}],open:[{d:`M2.5 15.5v-11h5l1.6 2h7.4v9z`,fill:`#f2c14e`},{d:`M2.500 15.500l2.300-6.500h13l-2.300 6.500z`,fill:`#ffdf8a`}],save:[{d:`M3.5 3.5h10.5l2.500 2.500v10.500h-13z`,fill:`#8fb4f5`},{d:`M6.500 3.500h6v4h-6zM6.500 11.500h7v5h-7z`,fill:`#ffffff`}],"w-parts":[{d:`M3.5 4.5h13v11h-13z`,fill:`#ffffff`},{d:`M3.5 4.5h13V8h-13z`,fill:`#cfe0ff`}],"w-views":[{d:`M5 7.500h10v9H5z`,fill:`#f1dcbd`}],"w-render":[{d:`M3.5 6.5h3l1.2-2h4.6l1.2 2h3v9h-13z`,fill:`#d9dee6`},{d:`M10 8.4a2.7 2.7 0 1 0 .01 0z`,fill:`#8fd3ff`}],pan:[{d:`M3.3 10L5 7.8c.5-.6 1.4-.4 1.7.3L7.5 10V4.7a1.1 1.1 0 0 1 2.2 0V3.6a1.1 1.1 0 0 1 2.2 0v.8a1.1 1.1 0 0 1 2.2 0v1.8a1.1 1.1 0 0 1 2.2 0V12c0 2.6-1.8 4.5-4.4 4.5H6.5c-2-1.5-3.2-4-3.2-6.5z`,fill:`#f6d4ae`}],orbit:[{d:`M10 4.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11z`,fill:`#8fbcff`}],zoom:[{d:`M8.8 3.5a5.3 5.3 0 1 0 0 10.6a5.3 5.3 0 0 0 0-10.6z`,fill:`#a9d8ff`}],"zoom-window":[{d:`M9 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6z`,fill:`#a9d8ff`}],fit:[{d:`M6.5 6.5h7v7h-7z`,fill:`#ffd36b`}],room:[{d:`M3 6l7-3.5v6L3 12z`,fill:`#e9dcc3`},{d:`M10 2.5l7 3.5v6l-7-3.5z`,fill:`#d2bf9b`},{d:`M3 12l7-3.5 7 3.5-7 3.5z`,fill:`#f5ead6`}],shape:[{d:`M4 8l6-3 6 3-6 3z`,fill:`#9cc7ff`},{d:`M4 8v5l6 3v-5z`,fill:`#d6e6ff`},{d:`M16 8v5l-6 3v-5z`,fill:`#7fa9f0`}],plan:[{d:`M4.5 2.5h8l3 3v12h-11z`,fill:`#ffffff`},{d:`M7 8h6v6H7z`,fill:`#cfe3ff`}],wall:[{d:`M2.5 5h15v10h-15z`,fill:`#e39b74`}],tampon:[{d:`M6.5 4.5h7v11h-7z`,fill:`#ffffff`},{d:`M3.5 3.5h3v13h-3zM13.5 3.5h3v13h-3z`,fill:`#b07d4b`}],trim:[{d:`M3.5 4h13v12.5h-13z`,fill:`#f3ead9`},{d:`M3.5 4h13v2.2h-13zM3.5 14h13v2.5h-13z`,fill:`#c08c57`}],countertop:[{d:`M4 10h12v6.5H4z`,fill:`#ffffff`},{d:`M2.5 7.5h15v2.5h-15z`,fill:`#7c8591`}],dropper:[{d:`M13.2 6.8l-7 7-2.7.7.7-2.7 7-7z`,fill:`#e3f0ff`},{d:`M8.4 11.6l-2.2 2.2-2.7.7.7-2.7 2.2-2.2z`,fill:`#7fb0f0`},{d:`M14.4 3.2a1.9 1.9 0 0 1 2.7 2.7l-1.7 1.7-2.7-2.7z`,fill:`#ef8a74`}],tape:[{d:`M12.3 10.5h5.2v4h-5.2z`,fill:`#fff6d6`},{d:`M8 4a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9z`,fill:`#f5c242`},{d:`M8 7.3a1.2 1.2 0 1 0 0 2.4a1.2 1.2 0 0 0 0-2.4z`,fill:`#ffffff`}],door:[{d:`M3.5 3.5h13V17h-2V5.5h-9V17h-2z`,fill:`#e9dcc3`},{d:`M5.5 5.5h9V17h-9z`,fill:`#d7ad78`},{d:`M7.5 7.5h5v3.5h-5zM7.5 12.5h5v3h-5z`,fill:`#c4915a`}],builder:[{d:`M3.5 4h10v12h-10z`,fill:`#ffffff`},{d:`M15 12a3 3 0 1 0 0 6a3 3 0 0 0 0-6z`,fill:`#8fd39b`}],construction:[{d:`M8.8 4.2L9.2 2.4L10.8 2.4L11.2 4.2L13.2 5.1L14.8 4.1L15.9 5.2L14.9 6.8L15.8 8.8L17.6 9.2L17.6 10.8L15.8 11.2L14.9 13.2L15.9 14.8L14.8 15.9L13.2 14.9L11.2 15.8L10.8 17.6L9.2 17.6L8.8 15.8L6.8 14.9L5.2 15.9L4.1 14.8L5.1 13.2L4.2 11.2L2.4 10.8L2.4 9.2L4.2 8.8L5.1 6.8L4.1 5.2L5.2 4.1L6.8 5.1z`,fill:`#9cb4d8`},{d:`M10 7.4a2.6 2.6 0 1 0 0 5.2a2.6 2.6 0 0 0 0-5.2z`,fill:`#ffffff`}]},_g=`#344054`,vg={light:`#dce8ff`,mid:`#7aa7f5`,strong:`#3b74e0`,deep:`#2f5fb8`},yg={light:`#f1e1c6`,mid:`#d6aa74`,deep:`#9c6b3c`},bg={fill:`#ffd766`,deep:`#c8901a`,pale:`#fff4cc`},xg={fill:`#f08a6c`,deep:`#c4553b`},Sg={light:`#e9edf3`,mid:`#c9d0da`,deep:`#5d6673`},Cg={fill:`#f6d3ad`,deep:`#b9804f`},$=1.1,wg=1.4,Tg={select:[{d:`M6.5 3.2l12 9.3-5.3 1 3.2 6.4-2.6 1.3-3.2-6.4-4.1 3.9z`,fill:`#ffffff`,stroke:_g,width:1.3}],pan:[{d:`M7.5 12.2V6.4a1.25 1.25 0 0 1 2.5 0V11V4.9a1.25 1.25 0 0 1 2.5 0V11V5.6a1.25 1.25 0 0 1 2.5 0v5.7V7.4a1.25 1.25 0 0 1 2.5 0V14c0 3.9-2.8 6.6-6.3 6.6h-.6c-2.1 0-3.6-.9-4.9-2.4L4.3 15.1a1.35 1.35 0 0 1 1.9-1.9l1.3 1.3z`,fill:Cg.fill,stroke:Cg.deep,width:$}],orbit:[{d:`M12 4.8l5.2 2.7-5.2 2.7-5.2-2.7z`,fill:vg.mid,stroke:vg.deep,width:$},{d:`M6.8 7.5v5.9l5.2 2.7v-5.9z`,fill:vg.strong,stroke:vg.deep,width:$},{d:`M17.2 7.5v5.9L12 16.1v-5.9z`,fill:vg.deep,stroke:vg.deep,width:$},{d:`M3.6 12.6c-1.3 3 3.2 6 8.6 6s9.6-2.4 8.8-5.6`,stroke:_g,width:wg},{d:`M19.4 11.2l2.3 2.5-3.2.5z`,fill:_g,stroke:_g,width:.6}],zoom:[{d:`M10.5 3.5a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13z`,fill:vg.light,stroke:vg.deep,width:wg},{d:`M15.3 15.3l5.2 5.2`,stroke:_g,width:2.6},{d:`M7.6 10h5.8M10.5 7.1v5.8`,stroke:vg.deep,width:1.5}],"zoom-window":[{d:`M3 7.5V3h4.5M16.5 3H21v4.5M21 16.5V21h-4.5M7.5 21H3v-4.5`,stroke:_g,width:wg},{d:`M11 7a3.8 3.8 0 1 0 0 7.6A3.8 3.8 0 0 0 11 7z`,fill:vg.light,stroke:vg.deep,width:1.3},{d:`M13.8 13.6l3.2 3.2`,stroke:_g,width:2}],fit:[{d:`M3 7.5V3h4.5M16.5 3H21v4.5M21 16.5V21h-4.5M7.5 21H3v-4.5`,stroke:_g,width:wg},{d:`M8 8h8v8H8z`,fill:bg.fill,stroke:bg.deep,width:$}],room:[{d:`M3 14.5l9-4.5 9 4.5-9 4.5z`,fill:yg.light,stroke:yg.deep,width:$},{d:`M3 14.5V7L12 2.5V10z`,fill:`#e6d3b0`,stroke:yg.deep,width:$},{d:`M12 2.5L21 7v7.5L12 10z`,fill:`#cdb48b`,stroke:yg.deep,width:$}],shape:[{d:`M4 8.5l8-4 8 4-8 4z`,fill:vg.mid,stroke:vg.deep,width:$},{d:`M4 8.5v7.5l8 4v-7.5z`,fill:vg.strong,stroke:vg.deep,width:$},{d:`M20 8.5v7.5l-8 4v-7.5z`,fill:vg.deep,stroke:vg.deep,width:$}],plan:[{d:`M5 2.5h9l5 5v14H5z`,fill:`#ffffff`,stroke:Sg.deep,width:$},{d:`M14 2.5v5h5`,fill:Sg.light,stroke:Sg.deep,width:$},{d:`M8 10.5h8v8H8z`,fill:vg.light,stroke:vg.deep,width:wg},{d:`M12 10.5v4M8 14.5h4`,stroke:vg.deep,width:wg}],wall:[{d:`M2.5 5h19v14h-19z`,fill:`#f3dfcf`,stroke:xg.deep,width:$},{d:`M3.2 5.7h4.3v3.8H3.2zM8.5 5.7h7v3.8h-7zM16.5 5.7h4.3v3.8h-4.3zM3.2 10.5h8.3v3.8H3.2zM12.5 10.5h8.3v3.8h-8.3zM3.2 15.3h4.3V18H3.2zM8.5 15.3h7V18h-7zM16.5 15.3h4.3V18h-4.3z`,fill:xg.fill}],countertop:[{d:`M4.5 11h15v9.5h-15z`,fill:`#ffffff`,stroke:Sg.deep,width:$},{d:`M12 11v9.5M10.2 15v2M13.8 15v2`,stroke:Sg.deep,width:$},{d:`M2.5 7.5h19v3.5h-19z`,fill:`#6b7482`,stroke:`#454d59`,width:$}],trim:[{d:`M3 4h18v14H3z`,fill:yg.light,stroke:yg.deep,width:$},{d:`M3 4h18v3H3zM3 15h18v3H3z`,fill:yg.mid,stroke:yg.deep,width:$},{d:`M2 18h20v2.5H2z`,fill:Sg.mid,stroke:Sg.deep,width:$}],tampon:[{d:`M7 4h10v16H7z`,fill:`#ffffff`,stroke:Sg.deep,width:$},{d:`M12 4v16`,stroke:Sg.deep,width:$},{d:`M3 3h4v18H3zM17 3h4v18h-4z`,fill:yg.mid,stroke:yg.deep,width:$}],tape:[{d:`M3 6.5h10.5A2.5 2.5 0 0 1 16 9v7.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,fill:bg.fill,stroke:bg.deep,width:$},{d:`M9.5 9a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7z`,fill:bg.pale,stroke:bg.deep,width:$},{d:`M9.5 11.6a.9.9 0 1 0 0 1.8a.9.9 0 0 0 0-1.8z`,fill:bg.deep},{d:`M16 15h5.5v3H16z`,fill:`#fffbe8`,stroke:bg.deep,width:$},{d:`M17.6 15v1.3M19.1 15v1.8M20.6 15v1.3`,stroke:_g,width:.9},{d:`M21.6 14.2v4.6`,stroke:_g,width:wg}],dropper:[{d:`M15.6 3.4a2.7 2.7 0 0 1 3.8 3.8l-1.9 1.9-3.8-3.8z`,fill:xg.fill,stroke:xg.deep,width:$},{d:`M12.9 6l5.1 5.1-1.5 1.5-5.1-5.1z`,fill:Sg.mid,stroke:Sg.deep,width:$},{d:`M12.2 8.8l3 3-6.9 6.9-2.9.9.9-2.9z`,fill:`#f4f8ff`,stroke:vg.deep,width:$},{d:`M9.7 14.3l1.5 1.5-2.9 2.9-2.9.9.9-2.9z`,fill:vg.strong},{d:`M4.6 20.3c0 .9-.6 1.6-1.3 1.6S2 21.2 2 20.3c0-.9 1.3-2.4 1.3-2.4s1.3 1.5 1.3 2.4z`,fill:vg.strong}],door:[{d:`M3.5 4h11v16h-11z`,fill:yg.light,stroke:yg.deep,width:$},{d:`M5 5.5h8v13H5z`,fill:`#e6cfa6`},{d:`M5 12h8`,stroke:yg.deep,width:$},{d:`M14.5 4l6-2.2v20.4l-6-2.2z`,fill:yg.mid,stroke:yg.deep,width:$},{d:`M18.2 10.4v3.2`,stroke:_g,width:wg}],builder:[{d:`M3 4h12v16H3z`,fill:`#ffffff`,stroke:Sg.deep,width:$},{d:`M9 4v16M7.3 11v2M10.7 11v2`,stroke:Sg.deep,width:$},{d:`M18 13.5a4 4 0 1 0 .01 0z`,fill:`#7ccf8a`,stroke:`#3f9a4e`,width:$},{d:`M18 15.6v3.8M16.1 17.5h3.8`,stroke:`#ffffff`,width:1.5}],construction:[{d:`M10.5 4.9L11.0 2.8L13.0 2.8L13.5 4.9L16.0 5.9L17.9 4.8L19.2 6.1L18.1 8.0L19.1 10.5L21.2 11.0L21.2 13.0L19.1 13.5L18.1 16.0L19.2 17.9L17.9 19.2L16.0 18.1L13.5 19.1L13.0 21.2L11.0 21.2L10.5 19.1L8.0 18.1L6.1 19.2L4.8 17.9L5.9 16.0L4.9 13.5L2.8 13.0L2.8 11.0L4.9 10.5L5.9 8.0L4.8 6.1L6.1 4.8L8.0 5.9z`,fill:Sg.mid,stroke:Sg.deep,width:$},{d:`M12 8.8a3.2 3.2 0 1 0 0 6.4a3.2 3.2 0 0 0 0-6.4z`,fill:`#ffffff`,stroke:Sg.deep,width:$}],new:[{d:`M5.5 2.5h8.5L18.5 7v14.5h-13z`,fill:`#ffffff`,stroke:Sg.deep,width:$},{d:`M14 2.5V7h4.5`,fill:Sg.light,stroke:Sg.deep,width:$},{d:`M17.6 14.4a3.6 3.6 0 1 0 0 7.2a3.6 3.6 0 0 0 0-7.2z`,fill:vg.strong,stroke:vg.deep,width:$},{d:`M17.6 16.3v3.4M15.9 18h3.4`,stroke:`#ffffff`,width:1.4}],open:[{d:`M2.5 5h6.2l2 2.2h9.8V19h-18z`,fill:`#f0b93d`,stroke:bg.deep,width:$},{d:`M2.5 19l2.8-8.5h17.2L19.7 19z`,fill:bg.fill,stroke:bg.deep,width:$}],save:[{d:`M4 3.5h13.2l3.3 3.3v13.7H4z`,fill:vg.strong,stroke:vg.deep,width:$},{d:`M7 3.5h8.5v5H7z`,fill:`#eef4ff`,stroke:vg.deep,width:$},{d:`M13.2 4.8v2.4`,stroke:vg.deep,width:1.2},{d:`M7 13h10.5v7.5H7z`,fill:`#ffffff`,stroke:vg.deep,width:$},{d:`M9 16h6.5M9 18.2h6.5`,stroke:Sg.mid,width:$}],undo:[{d:`M8.5 5L4 9.5 8.5 14M4 9.5h10a5 5 0 0 1 0 10h-3.5`,stroke:vg.strong,width:1.9}],redo:[{d:`M15.5 5L20 9.5 15.5 14M20 9.5H10a5 5 0 0 0 0 10h3.5`,stroke:vg.strong,width:1.9}],cut:[{d:`M7.5 3.5l8 11.5M16.5 3.5l-8 11.5`,stroke:Sg.deep,width:1.6},{d:`M7 15a3 3 0 1 0 0 6a3 3 0 0 0 0-6zM17 15a3 3 0 1 0 0 6a3 3 0 0 0 0-6z`,fill:xg.fill,stroke:xg.deep,width:$}],copy:[{d:`M8.5 3h11v13.5h-11z`,fill:vg.light,stroke:vg.deep,width:$},{d:`M4.5 7.5h11V21h-11z`,fill:`#ffffff`,stroke:vg.deep,width:$},{d:`M7 11.5h6M7 14h6M7 16.5h4`,stroke:Sg.mid,width:$}],paste:[{d:`M5 4.5h14V21H5z`,fill:yg.mid,stroke:yg.deep,width:$},{d:`M7.5 8h9v11h-9z`,fill:`#ffffff`,stroke:yg.deep,width:.8},{d:`M9 3h6v3H9z`,fill:Sg.mid,stroke:Sg.deep,width:$},{d:`M9.5 11.5h5M9.5 14h5M9.5 16.5h3`,stroke:Sg.mid,width:$}],"w-parts":[{d:`M3.5 4.5h17v15h-17z`,fill:`#ffffff`,stroke:Sg.deep,width:$},{d:`M3.5 4.5h17V8h-17z`,fill:vg.light,stroke:Sg.deep,width:$},{d:`M3.5 11.8h17M3.5 15.6h17M9 8v11.5`,stroke:Sg.mid,width:$}],"w-views":[{d:`M3.5 3.5h17v17h-17z`,fill:`#ffffff`,stroke:Sg.deep,width:$},{d:`M7 8.5h10v9H7z`,fill:yg.light,stroke:yg.deep,width:$},{d:`M12 8.5v9`,stroke:yg.deep,width:$},{d:`M7 6h10M7 5.2v1.6M17 5.2v1.6`,stroke:vg.strong,width:$}],"w-render":[{d:`M3 8.5A1.5 1.5 0 0 1 4.5 7h3L9 4.5h6L16.5 7h3A1.5 1.5 0 0 1 21 8.5v10a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5z`,fill:Sg.mid,stroke:Sg.deep,width:$},{d:`M12 9a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9z`,fill:`#ffffff`,stroke:Sg.deep,width:$},{d:`M12 10.8a2.7 2.7 0 1 0 0 5.4a2.7 2.7 0 0 0 0-5.4z`,fill:vg.strong},{d:`M11.1 12.1a.8.8 0 1 0 .01 0z`,fill:`#ffffff`},{d:`M17.4 9.4h1.7`,stroke:Sg.deep,width:wg}]},Eg=a(`<path></path>`),Dg=a(`<svg class="drawing svelte-1eqehiz" viewBox="0 0 24 24" aria-hidden="true"></svg>`),Og=a(`<path class="tint svelte-1eqehiz"></path>`),kg=a(`<svg viewBox="0 0 20 20" aria-hidden="true" class="svelte-1eqehiz"><!><path></path></svg>`);function Ag(e,n){let r=S(n,`size`,3,18),a=S(n,`tinted`,3,!1),c=x(()=>a()?Tg[n.name]:void 0);var d=l(),p=t(d),m=e=>{var t=Dg();E(t,21,()=>i(c),f,(e,t)=>{var n=Eg();o(()=>{v(n,`d`,i(t).d),v(n,`fill`,i(t).fill??`none`),v(n,`stroke`,i(t).stroke??`none`),v(n,`stroke-width`,i(t).width??1)}),s(e,n)}),b(t),o(()=>{v(t,`width`,r()),v(t,`height`,r())}),s(e,t)},h=e=>{var c=kg(),d=u(c),f=e=>{var r=l(),a=t(r);E(a,17,()=>gg[n.name]??[],e=>e.d,(e,t)=>{var n=Og();o(()=>{v(n,`d`,i(t).d),v(n,`fill`,i(t).fill)}),s(e,n)}),s(e,r)};T(d,e=>{a()&&e(f)});var p=C(d);b(c),o(()=>{v(c,`width`,r()),v(c,`height`,r()),v(p,`d`,hg[n.name])}),s(e,c)};T(p,e=>{i(c)?e(m):e(h,-1)}),s(e,d)}var jg=r(`<button type="button" aria-label="Minimizar" title="Minimizar para a barra de baixo" class="svelte-ta60gp"><svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true"><path d="M5 14.5h10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path></svg></button>`),Mg=r(`<footer class="svelte-ta60gp"><!></footer>`),Ng=r(`<div class="backdrop svelte-ta60gp" role="presentation"><div role="dialog" aria-modal="true"><header class="svelte-ta60gp"><h2 class="svelte-ta60gp"> </h2> <span class="grow svelte-ta60gp"></span> <!> <button type="button" aria-label="Fechar" title="Fechar" class="svelte-ta60gp"><!></button></header> <div class="body svelte-ta60gp"><!></div> <!></div></div>`);function Pg(e,t){w(t,!0);let r=S(t,`wide`,3,!1),i=S(t,`large`,3,!1),a=m(`window`);function l(e){if(e.key!==`Escape`||a?.down)return;let n=e.target;n instanceof HTMLElement&&n.closest(`input, select, textarea`)||t.onclose()}var d=Ng();n(`keydown`,p,l);var f=u(d);let x;var E=u(f),O=u(E),k=h(O,!0),A=C(O,4),j=e=>{var t=jg();D(`click`,t,()=>a.park()),s(e,t)};T(A,e=>{a&&e(j)});var M=C(A,2);Ag(u(M),{name:`close`}),b(M),b(E);var N=C(E,2),ee=u(N);c(ee,()=>t.children),b(N);var te=C(N,2),ne=e=>{var n=Mg(),r=u(n);c(r,()=>t.footer),b(n),s(e,n)};T(te,e=>{t.footer&&e(ne)}),b(f),b(d),o(()=>{x=g(f,1,`modal svelte-ta60gp`,null,x,{wide:r(),large:i()}),v(f,`aria-label`,t.title),_(k,t.title)}),D(`pointerdown`,d,e=>{e.target===e.currentTarget&&t.onclose()}),D(`click`,M,function(...e){t.onclose?.apply(this,e)}),s(e,d),y()}d([`pointerdown`,`click`]);var Fg=1.5,Ig={flange:57,mouth:41,drop:7,knob:8},Lg={base:27,body:18,bodyHigh:130,spout:11,high:330,lever:70},Rg=new md({color:`#8d9299`,metalness:.7,roughness:.35,side:2});function zg({min:e,max:t},n){let r=Math.max(.5,Math.min(n,(t.x-e.x)/2,(t.y-e.y)/2)),i=Math.max(3,Math.round(r/5)),a=[{x:t.x-r,y:e.y+r,from:-90},{x:t.x-r,y:t.y-r,from:0},{x:e.x+r,y:t.y-r,from:90},{x:e.x+r,y:e.y+r,from:180}],o=[];for(let e of a)for(let t=0;t<=i;t++){let n=Ja.degToRad(e.from+t*90/i);o.push({x:e.x+r*Math.cos(n),y:e.y+r*Math.sin(n)})}return o}function Bg(e,t){return zg(e,En(t))}function Vg(e){return new lu(e.map(e=>new G(e.x,e.y)))}function Hg(e){return e.userData.ownsGeometry=!0,e}function Ug(e,t,n,r){let i=Hg(new X(new qu(e,{depth:n-t,bevelEnabled:!1,curveSegments:24}),r));return i.position.z=t,i}function Wg(e,t,n,r,i,a,o){let s=Hg(new X(new El(a,i,r-n,28),o));return s.rotation.x=Math.PI/2,s.position.set(e,t,(n+r)/2),s}var Gg=22;function Kg(e,t,n,r,i){let a=new Yo,{min:o,max:s}=t,c=En(e),l=-e.bowlDepth,u={x:(o.x+s.x)/2,y:(o.y+s.y)/2},d=zg(t,c),f=zg({min:{x:o.x-Fg,y:o.y-Fg},max:{x:s.x+Fg,y:s.y+Fg}},c+Fg),p=Vg(f);p.holes.push(new cu(d.map(e=>new G(e.x,e.y)))),a.add(Ug(p,l,0,i.steel));let m=Vg(zg({min:{x:o.x-Gg,y:o.y-Gg},max:{x:s.x+Gg,y:s.y+Gg}},c+Gg));m.holes.push(new cu(f.map(e=>new G(e.x,e.y)))),a.add(Ug(m,-1.5,0,i.steel));let h=Vg(f);h.holes.push(new cu().absarc(u.x,u.y,Ig.mouth,0,Math.PI*2,!0)),a.add(Ug(h,l-Fg,l,i.steel));let g=Hg(new X(new Qu(Ig.mouth,Ig.flange,40),i.metal));g.position.set(u.x,u.y,l+.8),a.add(g);let _=Hg(new X(new El(Ig.mouth,Ig.mouth,Ig.drop,40,1,!0),Rg));_.rotation.x=Math.PI/2,_.position.set(u.x,u.y,l-Ig.drop/2),a.add(_);let v=Hg(new X(new Tl(Ig.mouth,40),i.surface(`#4a4d52`,.45)));v.position.set(u.x,u.y,l-Ig.drop),a.add(v);for(let e of[14,24,34]){let t=Hg(new X(new Qu(e-2.2,e,32),i.surface(`#1d1f22`,.6)));t.position.set(u.x,u.y,l-Ig.drop+.4),a.add(t)}a.add(Wg(u.x,u.y,l-Ig.drop,l+3,Ig.knob,Ig.knob-2,i.metal));let y=new Yo;y.userData.piece=`tap`;let{x:b,y:x}=Dn(e,s.y,r),S=Math.min(Math.max(x-u.y,120),230);y.add(Wg(b,x,n,n+6,Lg.base,Lg.base-2,i.metal)),y.add(Wg(b,x,n+6,n+Lg.bodyHigh,Lg.body,Lg.body-1.5,i.metal));let C=n+Lg.high,w=new Hl([new K(b,x,n+Lg.bodyHigh-4),new K(b,x,C-70),new K(b,x-S*.18,C-12),new K(b,x-S*.5,C+8),new K(b,x-S*.82,C-12),new K(b,x-S,C-70),new K(b,x-S,C-120)],!1,`catmullrom`,.5);y.add(Hg(new X(new rd(w,48,Lg.spout,14),i.metal))),y.add(Wg(b,x-S,C-142,C-118,Lg.spout+2.5,Lg.spout+2.5,i.metal));let T=Hg(new X(new El(4.5,6.5,Lg.lever,16),i.metal));T.rotation.z=-Math.PI/2+.28,T.position.set(b+Lg.body+Lg.lever/2-4,x,n+Lg.bodyHigh-28+9),y.add(T);let E=Hg(new X(new El(9,9,16,20),i.metal));return E.rotation.z=Math.PI/2,E.position.set(b+Lg.body+4,x,n+Lg.bodyHigh-28),y.add(E),a.add(y),a}var qg=new K;function Jg(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;qg.copy(t),qg[r]=0,qg.normalize();let l=.5*o/(o+s),u=1-qg.angleTo(e)/c;return Math.sign(qg[n])===1?u*l:s/(o+s)+l+l*(1-u)}var Yg=class e extends Cl{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new K,c=new K,l=new K(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new K,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=Jg(m,c,`z`,`y`,i,n),f[a+1]=1-Jg(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-Jg(m,c,`z`,`y`,i,n),f[a+1]=1-Jg(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-Jg(m,c,`x`,`z`,i,e),f[a+1]=Jg(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-Jg(m,c,`x`,`z`,i,e),f[a+1]=1-Jg(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-Jg(m,c,`x`,`y`,i,e),f[a+1]=1-Jg(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=Jg(m,c,`x`,`y`,i,e),f[a+1]=1-Jg(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},Xg=[{id:`desligada`,label:`Desligada`},{id:`futebol`,label:`Futebol ao vivo`},{id:`jornal`,label:`Jornal`},{id:`filme`,label:`Filme`},{id:`serie`,label:`Série`},{id:`desenho`,label:`Desenho animado`},{id:`documentario`,label:`Documentário`},{id:`oceano`,label:`Fundo do mar`},{id:`corrida`,label:`Corrida`},{id:`show`,label:`Show`},{id:`streaming`,label:`Streaming`},{id:`por-do-sol`,label:`Pôr do sol`},{id:`paisagem`,label:`Paisagem`},{id:`praia`,label:`Praia`},{id:`cidade`,label:`Cidade à noite`}],Zg=640,Qg=360,$g=`Segoe UI, Arial, Helvetica, sans-serif`,e_=new Map,t_=new Map,n_=new Map;function r_(e){let t=e;return()=>(t=(t*9301+49297)%233280)/233280}function i_(e,t,n,r,i){e.fillStyle=i,e.beginPath(),e.moveTo(0,Qg);for(let i=0;i<=Zg;i+=8)e.lineTo(i,t-n*(.5+.5*Math.sin(i/70+r)*Math.cos(i/130+r*2)));e.lineTo(Zg,Qg),e.closePath(),e.fill()}function a_(e,t,n=0,r=Qg){let i=e.createLinearGradient(0,n,0,r);for(let[e,n]of t)i.addColorStop(e,n);e.fillStyle=i,e.fillRect(0,n,Zg,r-n)}function o_(e,t,n,r,i){e.fillStyle=i,e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fill()}function s_(e,t,n,r,i,a){e.beginPath(),e.moveTo(t+a,n),e.arcTo(t+r,n,t+r,n+i,a),e.arcTo(t+r,n+i,t,n+i,a),e.arcTo(t,n+i,t,n,a),e.arcTo(t,n,t+r,n,a),e.closePath()}function c_(e,t,n,r,i,a,o=`bold`,s=`left`){e.font=`${o} ${i}px ${$g}`,e.fillStyle=a,e.textAlign=s,e.textBaseline=`middle`,e.fillText(t,n,r)}function l_(e){e.fillStyle=`#000`,e.fillRect(0,0,Zg,42),e.fillRect(0,318,Zg,42)}function u_(e,t,n,r,i){o_(e,t,n-r+r*.12,r*.12,i),e.fillStyle=i,e.beginPath(),e.moveTo(t-r*.16,n),e.lineTo(t-r*.17,n-r*.62),e.quadraticCurveTo(t-r*.16,n-r*.76,t,n-r*.77),e.quadraticCurveTo(t+r*.16,n-r*.76,t+r*.17,n-r*.62),e.lineTo(t+r*.16,n),e.closePath(),e.fill()}function d_(e){let t=r_(11);a_(e,[[0,`#1b2433`],[1,`#2c3a4f`]],0,92);let n=[`#d8d8d8`,`#f2c94c`,`#2f80ed`,`#eb5757`,`#27ae60`,`#ffffff`,`#9b51e0`];e.globalAlpha=.55;for(let r=0;r<900;r++)e.fillStyle=n[Math.floor(t()*n.length)],e.fillRect(t()*Zg,8+t()*78,3,3);e.globalAlpha=1,a_(e,[[0,`#0f6fd1`],[1,`#0a4f99`]],86,104);for(let t=20;t<Zg;t+=160)c_(e,`PLACAR`,t,95,12,`rgba(255,255,255,0.85)`);for(let t=0;t<9;t++){let n=104+256*(t/9)**1.3,r=104+256*((t+1)/9)**1.3;e.fillStyle=t%2?`#3d9a42`:`#45a84a`,e.fillRect(0,n,Zg,r-n+1)}e.strokeStyle=`rgba(255,255,255,0.9)`,e.lineWidth=2.5,e.beginPath(),e.moveTo(0,110),e.lineTo(Zg,110),e.moveTo(Zg*.5,110),e.lineTo(Zg*.5,Qg),e.stroke(),e.beginPath(),e.ellipse(Zg*.5,228,120,46,0,0,Math.PI*2),e.stroke(),o_(e,Zg*.5,228,3,`#fff`);for(let[t,n,r,i]of[[180,200,`#f2c94c`,`#1e5bb8`],[240,252,`#f2c94c`,`#1e5bb8`],[300,176,`#f2c94c`,`#1e5bb8`],[350,290,`#f2c94c`,`#1e5bb8`],[420,214,`#7fc4f0`,`#ffffff`],[470,262,`#7fc4f0`,`#ffffff`],[390,168,`#7fc4f0`,`#ffffff`],[520,190,`#7fc4f0`,`#ffffff`]]){let a=18+(n-104)/256*26;e.fillStyle=`rgba(0,0,0,0.25)`,e.beginPath(),e.ellipse(t+4,n,a*.28,a*.08,0,0,Math.PI*2),e.fill(),e.fillStyle=`#222`,e.fillRect(t-a*.12,n-a*.42,a*.09,a*.42),e.fillRect(t+a*.03,n-a*.42,a*.09,a*.42),e.fillStyle=i,e.fillRect(t-a*.15,n-a*.55,a*.3,a*.18),e.fillStyle=r,e.fillRect(t-a*.17,n-a*.88,a*.34,a*.36),o_(e,t,n-a*.97,a*.1,`#8d5a3b`)}o_(e,332,246,4,`#ffffff`),s_(e,16,14,214,30,4),e.fillStyle=`rgba(12,16,24,0.9)`,e.fill(),e.fillStyle=`#1aa34a`,e.fillRect(16,14,6,30),c_(e,`BRA  2`,32,29,15,`#fff`),c_(e,`1  ARG`,156,29,15,`#fff`,`bold`,`right`),e.fillStyle=`#f2c94c`,e.fillRect(166,14,64,30),c_(e,`67'`,198,29,15,`#111`,`bold`,`center`),c_(e,`AO VIVO`,622,29,12,`#fff`,`bold`,`right`),o_(e,556,29,4,`#eb2f2f`)}function f_(e){a_(e,[[0,`#0b2a5b`],[1,`#123d7d`]]);let t=r_(3);e.fillStyle=`rgba(255,255,255,0.06)`;for(let t=0;t<Zg;t+=36)e.fillRect(t,0,2,250);for(let n=0;n<Zg;){let r=30+t()*50,i=70+t()*120;e.fillStyle=`rgba(8,22,48,0.85)`,e.fillRect(n,250-i,r,i),e.fillStyle=`rgba(255,214,120,0.7)`;for(let a=250-i+8;a<244;a+=11)for(let i=n+5;i<n+r-5;i+=8)t()>.6&&e.fillRect(i,a,3,5);n+=r+4}let n=Zg*.42;e.fillStyle=`#1e2633`,e.beginPath(),e.moveTo(176.8,300),e.quadraticCurveTo(180.8,196,n,190),e.quadraticCurveTo(356.8,196,360.8,300),e.fill(),e.fillStyle=`#f4f4f4`,e.beginPath(),e.moveTo(246.8,192),e.lineTo(n,240),e.lineTo(290.8,192),e.fill(),e.fillStyle=`#9c2a2a`,e.beginPath(),e.moveTo(262.8,198),e.lineTo(274.8,198),e.lineTo(272.8,240),e.lineTo(n,248),e.lineTo(264.8,240),e.fill(),e.fillStyle=`#c99a78`,e.fillRect(255.8,160,26,36),e.beginPath(),e.ellipse(n,138,32,40,0,0,Math.PI*2),e.fill(),e.fillStyle=`#2b1d16`,e.beginPath(),e.ellipse(n,116,34,22,0,Math.PI,Math.PI*2),e.fill(),e.fillRect(234.8,112,10,30),e.fillRect(292.8,112,10,30),a_(e,[[0,`#d7dde6`],[1,`#9aa6b5`]],266,300),e.fillStyle=`#0d1d36`,e.fillRect(0,300,Zg,60),e.fillStyle=`#c4161c`,e.fillRect(24,254,120,26),c_(e,`AO VIVO`,84,267,15,`#fff`,`bold`,`center`),e.fillStyle=`rgba(255,255,255,0.95)`,e.fillRect(24,280,420,34),c_(e,`JORNAL DA NOITE`,36,297,19,`#0b2a5b`),e.fillStyle=`#f2c94c`,e.fillRect(0,330,Zg,30),c_(e,`ECONOMIA  •  TEMPO: SOL COM NUVENS, MÁX 29°  •  ESPORTES: A RODADA DO FIM DE SEMANA`,14,345,13,`#111`),c_(e,`20:47`,622,26,16,`#fff`,`bold`,`right`)}function p_(e){a_(e,[[0,`#02030a`],[1,`#0b1030`]]);let t=r_(29);for(let n=0;n<220;n++)e.globalAlpha=.3+t()*.7,o_(e,t()*Zg,t()*Qg,t()*1.3,`#ffffff`);e.globalAlpha=1;let n=e.createRadialGradient(470,230,10,430,300,230);n.addColorStop(0,`#f6c27a`),n.addColorStop(.45,`#c0683a`),n.addColorStop(1,`#1a0b14`),e.fillStyle=n,e.beginPath(),e.arc(430,330,210,0,Math.PI*2),e.fill();let r=e.createRadialGradient(430,330,205,430,330,240);r.addColorStop(0,`rgba(255,170,90,0.45)`),r.addColorStop(1,`rgba(255,170,90,0)`),e.fillStyle=r,e.beginPath(),e.arc(430,330,240,0,Math.PI*2),e.fill(),e.strokeStyle=`rgba(240,200,150,0.55)`,e.lineWidth=5,e.beginPath(),e.ellipse(430,300,300,46,-.18,Math.PI*1.05,Math.PI*1.95),e.stroke(),e.fillStyle=`#c9ced8`,e.beginPath(),e.moveTo(120,150),e.lineTo(230,136),e.lineTo(250,144),e.lineTo(230,152),e.lineTo(120,160),e.closePath(),e.fill(),e.fillStyle=`#7d8696`,e.fillRect(140,128,40,8),e.fillRect(140,160,40,8),o_(e,116,155,12,`rgba(143,211,255,0.25)`),o_(e,118,155,6,`#8fd3ff`),l_(e),c_(e,`Eu nunca tinha visto a Terra tão longe.`,Zg/2,298,17,`#ffffff`,`600`,`center`)}function m_(e){a_(e,[[0,`#0a0d1c`],[1,`#1d1430`]]);let t=r_(5);for(let[n,r,i]of[[0,150,300],[150,70,220],[440,90,250],[530,110,320]]){e.fillStyle=`#0d0f1a`,e.fillRect(n,280-i,r,i);for(let a=280-i+12;a<270;a+=18)for(let i=n+8;i<n+r-10;i+=16)t()<=.7||(e.fillStyle=t()>.5?`rgba(255,190,110,0.8)`:`rgba(120,200,255,0.6)`,e.fillRect(i,a,7,10))}e.shadowBlur=18,e.shadowColor=`#ff3fa4`,c_(e,`BAR`,92,120,34,`#ff7cc4`,`bold`,`center`),e.shadowColor=`#39d0ff`,c_(e,`HOTEL`,585,92,24,`#8fe6ff`,`bold`,`center`),e.shadowBlur=0,a_(e,[[0,`#1a1426`],[1,`#07070d`]],280,Qg),e.globalAlpha=.35,e.fillStyle=`#ff5fb3`,e.fillRect(70,282,44,70),e.fillStyle=`#5fdcff`,e.fillRect(560,282,50,60),e.globalAlpha=1;let n=e.createRadialGradient(330,140,4,330,160,170);n.addColorStop(0,`rgba(255,220,150,0.5)`),n.addColorStop(1,`rgba(255,220,150,0)`),e.fillStyle=n,e.fillRect(160,0,340,Qg),e.fillStyle=`#222`,e.fillRect(326,130,6,160),o_(e,329,128,8,`#ffe4a8`),e.strokeStyle=`rgba(200,210,255,0.35)`,e.lineWidth=1,e.beginPath();for(let n=0;n<260;n++){let n=t()*Zg,r=t()*Qg;e.moveTo(n,r),e.lineTo(n-4,r+14)}e.stroke(),u_(e,380,290,120,`#05050a`),e.fillStyle=`#0b0b12`,e.beginPath(),e.arc(380,184,48,Math.PI,Math.PI*2),e.fill(),e.fillRect(379,184,2,40),l_(e),c_(e,`T2 · EP 5`,20,21,13,`rgba(255,255,255,0.8)`,`600`)}function h_(e){a_(e,[[0,`#5ec8ff`],[1,`#c6f0ff`]]),e.strokeStyle=`#ffcf33`,e.lineWidth=6;for(let t=0;t<12;t++){let n=t/12*Math.PI*2;e.beginPath(),e.moveTo(540+Math.cos(n)*54,76+Math.sin(n)*54),e.lineTo(540+Math.cos(n)*72,76+Math.sin(n)*72),e.stroke()}o_(e,540,76,44,`#ffd84a`),o_(e,526,68,5,`#5a3b00`),o_(e,554,68,5,`#5a3b00`),e.strokeStyle=`#5a3b00`,e.lineWidth=4,e.beginPath(),e.arc(540,82,16,.2,Math.PI-.2),e.stroke();for(let[t,n]of[[120,70],[330,50]])o_(e,t,n,24,`#fff`),o_(e,t+26,n-10,30,`#fff`),o_(e,t+56,n,24,`#fff`),e.fillStyle=`#fff`,e.fillRect(t,n,56,24);i_(e,250,70,.8,`#7ad94a`),i_(e,300,40,2.6,`#4cbf3a`),e.fillStyle=`#ff6f61`,e.fillRect(150,196,110,84),e.fillStyle=`#b5302a`,e.beginPath(),e.moveTo(138,200),e.lineTo(205,140),e.lineTo(272,200),e.fill(),e.fillStyle=`#7a4a22`,e.fillRect(192,236,28,44),e.fillStyle=`#bfe9ff`,e.fillRect(160,212,24,22),e.fillRect(228,212,24,22),e.strokeStyle=`#555`,e.lineWidth=1.5,e.beginPath(),e.moveTo(420,150),e.quadraticCurveTo(430,190,418,230),e.stroke(),e.fillStyle=`#ff4fa0`,e.beginPath(),e.ellipse(420,124,22,28,0,0,Math.PI*2),e.fill(),o_(e,412,114,5,`rgba(255,255,255,0.7)`);let t=r_(17),n=[`#fff`,`#ffd84a`,`#ff6f9e`];for(let r=0;r<30;r++)o_(e,t()*Zg,300+t()*56,4,n[r%3])}function g_(e){a_(e,[[0,`#3b1d4a`],[.45,`#e0663a`],[.75,`#f7b25a`],[1,`#f4cf7e`]]),o_(e,210,230,70,`rgba(255,230,160,0.95)`),e.fillStyle=`#2a1608`,e.fillRect(0,286,Zg,74),i_(e,292,14,1.4,`#2a1608`),e.fillStyle=`#1c0e05`,e.fillRect(470,190,8,100),e.beginPath(),e.moveTo(474,210),e.lineTo(430,176),e.lineTo(436,172),e.lineTo(476,200),e.lineTo(510,168),e.lineTo(516,172),e.fill(),e.beginPath(),e.ellipse(474,166,92,18,0,0,Math.PI*2),e.fill();let t=(t,n)=>{e.save(),e.translate(t,290),e.scale(n,n),e.fillStyle=`#1c0e05`;for(let t of[-26,-14,14,24])e.fillRect(t,-60,4,60);e.beginPath(),e.ellipse(0,-66,34,14,-.15,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(18,-74),e.lineTo(40,-150),e.lineTo(50,-148),e.lineTo(32,-66),e.fill(),e.beginPath(),e.ellipse(52,-152,14,6,.3,0,Math.PI*2),e.fill(),e.fillRect(40,-166,2,10),e.fillRect(46,-166,2,10),e.restore()};t(310,1),t(380,.8),e.strokeStyle=`#2a1608`,e.lineWidth=2;for(let[t,n]of[[90,90],[120,70],[150,96]])e.beginPath(),e.moveTo(t-9,n-4),e.quadraticCurveTo(t-4,n-8,t,n),e.quadraticCurveTo(t+4,n-8,t+9,n-4),e.stroke();c_(e,`VIDA SELVAGEM`,620,26,14,`rgba(255,255,255,0.85)`,`bold`,`right`)}function __(e){a_(e,[[0,`#38c4e8`],[.5,`#0f6fa6`],[1,`#062f55`]]),e.fillStyle=`rgba(255,255,255,0.08)`;for(let t of[80,220,380,520])e.beginPath(),e.moveTo(t,0),e.lineTo(t+50,0),e.lineTo(t+140,Qg),e.lineTo(t+40,Qg),e.fill();i_(e,330,40,.3,`#2c2240`);let t=r_(41),n=[`#ff7b7b`,`#ffb547`,`#c86bff`,`#ff5fa2`];e.lineWidth=6,e.lineCap=`round`;for(let r=0;r<18;r++){let i=t()*Zg;e.strokeStyle=n[r%4],e.beginPath(),e.moveTo(i,Qg),e.quadraticCurveTo(i-10,330,i+(t()-.5)*30,310-t()*30),e.stroke()}e.lineCap=`butt`;let r=(t,n,r,i,a,o)=>{e.save(),e.translate(t,n),o&&e.scale(-1,1),e.fillStyle=i,e.beginPath(),e.ellipse(0,0,r,r*.55,0,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(-r*.8,0),e.lineTo(-r*1.5,-r*.5),e.lineTo(-r*1.5,r*.5),e.fill(),e.fillStyle=a,e.fillRect(-r*.2,-r*.5,r*.18,r),o_(e,r*.55,-r*.12,r*.1,`#111`),e.restore()};r(200,150,26,`#ff8c1a`,`#fff`,!1),r(250,180,16,`#ff8c1a`,`#fff`,!1),r(470,120,30,`#ffd23f`,`#1d3fbf`,!0),r(420,240,20,`#3fd2ff`,`#0a2a8a`,!0),e.strokeStyle=`rgba(255,255,255,0.5)`,e.lineWidth=1;for(let n=0;n<30;n++)e.beginPath(),e.arc(560+t()*30,300-n*9,2+t()*3,0,Math.PI*2),e.stroke()}function v_(e){a_(e,[[0,`#6db7ff`],[1,`#d8ecff`]],0,130),i_(e,130,20,.5,`#4f8f45`),e.fillStyle=`#5fa04f`,e.fillRect(0,128,Zg,232),e.fillStyle=`#4a4d52`,e.beginPath(),e.moveTo(60,Qg),e.quadraticCurveTo(250,220,420,130),e.lineTo(470,130),e.quadraticCurveTo(360,230,620,Qg),e.closePath(),e.fill();for(let t=0;t<16;t++){let n=t/16,r=(1-n)*(1-n)*60+2*(1-n)*n*250+n*n*420,i=(1-n)*(1-n)*Qg+2*(1-n)*n*220+n*n*130;e.fillStyle=t%2?`#e33`:`#fff`,e.fillRect(r-10*(1-n)-2,i-4,20*(1-n)+4,6*(1-n)+2)}let t=(t,n,r,i)=>{e.fillStyle=`rgba(0,0,0,0.3)`,e.fillRect(t-r,n+r*.25,r*2,r*.2),e.fillStyle=i,e.beginPath(),e.moveTo(t-r,n+r*.2),e.lineTo(t-r*.6,n-r*.2),e.lineTo(t+r*.7,n-r*.25),e.lineTo(t+r,n+r*.2),e.fill(),e.fillStyle=`#111`,e.fillRect(t-r*1.05,n-r*.05,r*.35,r*.32),e.fillRect(t+r*.7,n-r*.05,r*.35,r*.32),e.fillRect(t-r*.15,n-r*.45,r*.3,r*.25)};t(330,300,46,`#d81f26`),t(400,200,26,`#1f5fd8`),t(440,150,14,`#f2c94c`),e.fillStyle=`rgba(10,12,18,0.85)`,e.fillRect(14,14,150,128),c_(e,`VOLTA 42/58`,24,30,12,`#f2c94c`);let n=[`#d81f26`,`#1f5fd8`,`#f2c94c`,`#ff8a00`];[`1  VER`,`2  HAM`,`3  LEC`,`4  NOR`].forEach((t,r)=>{e.fillStyle=n[r],e.fillRect(24,48+r*22,4,16),c_(e,t,36,56+r*22,13,`#fff`)})}function y_(e){a_(e,[[0,`#08030f`],[1,`#1d0730`]]);for(let[t,n]of[[120,`rgba(255,60,180,0.28)`],[260,`rgba(80,160,255,0.3)`],[380,`rgba(255,220,80,0.25)`],[520,`rgba(120,255,200,0.25)`]])e.fillStyle=n,e.beginPath(),e.moveTo(t,0),e.lineTo(t-90,250),e.lineTo(t+90,250),e.fill(),o_(e,t,6,8,`#fff`);e.fillStyle=`#16121e`,e.fillRect(60,240,520,26),u_(e,320,242,90,`#000`),e.fillStyle=`#000`,e.fillRect(352,160,2,82),u_(e,220,242,80,`#000`),u_(e,430,242,80,`#000`);let t=r_(23);for(let n=0;n<40;n++){let r=n/40*Zg+t()*10,i=70+t()*30;u_(e,r,380,i,`#05030a`),t()>.55&&(e.fillStyle=`#05030a`,e.fillRect(r+8,380-i-30,6,40))}let n=[`#ff3cb4`,`#ffd84a`,`#5fd3ff`,`#ffffff`];for(let r=0;r<80;r++)e.fillStyle=n[r%4],e.fillRect(t()*Zg,t()*230,4,2)}function b_(e){e.fillStyle=`#0d0e12`,e.fillRect(0,0,Zg,Qg),a_(e,[[0,`#2a5d7a`],[1,`#c8743a`]],0,200),i_(e,200,50,1.1,`#1a2a2c`),e.fillStyle=`#0d0e12`,e.fillRect(0,200,Zg,160),u_(e,470,200,130,`#0b0f12`);let t=e.createLinearGradient(0,0,Zg,0);t.addColorStop(0,`#0d0e12`),t.addColorStop(.45,`rgba(13,14,18,0.6)`),t.addColorStop(1,`rgba(13,14,18,0)`),e.fillStyle=t,e.fillRect(0,0,Zg,200);let n=e.createLinearGradient(0,150,0,205);n.addColorStop(0,`rgba(13,14,18,0)`),n.addColorStop(1,`#0d0e12`),e.fillStyle=n,e.fillRect(0,150,Zg,55),c_(e,`O ÚLTIMO VERÃO`,28,66,30,`#ffffff`),c_(e,`Nova temporada  •  2026  •  16+`,28,98,13,`#c9ccd3`,`600`),s_(e,28,120,110,34,5),e.fillStyle=`#ffffff`,e.fill(),e.fillStyle=`#111`,e.beginPath(),e.moveTo(46,128),e.lineTo(46,146),e.lineTo(60,137),e.fill(),c_(e,`Assistir`,70,137,15,`#111`),s_(e,148,120,120,34,5),e.fillStyle=`rgba(255,255,255,0.18)`,e.fill(),c_(e,`+ Minha lista`,160,137,14,`#fff`,`600`),c_(e,`Continue assistindo`,28,222,14,`#ffffff`);let r=[`#d2453f`,`#3f7fd2`,`#e0b13a`,`#47a36b`,`#8a4fd1`,`#e06c3a`,`#2fb8b8`];r.forEach((t,n)=>{let r=28+n*128;s_(e,r,236,118,66,5);let i=e.createLinearGradient(r,236,r+118,302);i.addColorStop(0,t),i.addColorStop(1,`#111`),e.fillStyle=i,e.fill(),e.fillStyle=`rgba(255,255,255,0.25)`,e.fillRect(r,298,118,4),e.fillStyle=`#e50914`,e.fillRect(r,298,30+n*37%80,4)}),c_(e,`Em alta`,28,324,14,`#ffffff`),r.forEach((t,n)=>{s_(e,28+n*128,336,118,40,5),e.fillStyle=r[(n+3)%r.length],e.fill()})}function x_(e,t){switch(e){case`futebol`:return d_(t);case`jornal`:return f_(t);case`filme`:return p_(t);case`serie`:return m_(t);case`desenho`:return h_(t);case`documentario`:return g_(t);case`oceano`:return __(t);case`corrida`:return v_(t);case`show`:return y_(t);case`streaming`:return b_(t);case`por-do-sol`:a_(t,[[0,`#2b1b4a`],[.45,`#c2456b`],[.75,`#f39a4a`],[1,`#f7c46b`]]),o_(t,Zg*.62,Qg*.68,58,`#ffd98a`),i_(t,Qg*.8,50,.4,`#3a1d3a`),i_(t,Qg*.92,30,2.1,`#1c0f22`);return;case`paisagem`:a_(t,[[0,`#5aa0e6`],[.7,`#bfe0f7`],[1,`#e8f4fb`]]),t.fillStyle=`#8c9cb0`,t.beginPath(),t.moveTo(75,Qg*.7),t.lineTo(238,Qg*.22),t.lineTo(400,Qg*.7),t.fill(),t.fillStyle=`#f4f6f8`,t.beginPath(),t.moveTo(200,Qg*.33),t.lineTo(238,Qg*.22),t.lineTo(275,Qg*.33),t.fill(),i_(t,Qg*.78,50,1.2,`#5f9a4a`),i_(t,Qg*.92,32,3.3,`#3f7a34`);return;case`praia`:a_(t,[[0,`#3d8fdc`],[.55,`#a9d6f5`],[.56,`#1e7fb5`],[.75,`#38b0c9`],[.76,`#e9d6a6`],[1,`#d9bf86`]]),t.fillStyle=`rgba(255,255,255,0.75)`;for(let e=0;e<Zg;e+=80)t.fillRect(e+12,Qg*.74,50,4);o_(t,Zg*.8,Qg*.18,28,`#fff6c9`);return;case`cidade`:{a_(t,[[0,`#070b1e`],[.7,`#1b2850`],[1,`#2c3c6b`]]);let e=r_(7);for(let n=0;n<Zg;){let r=32+e()*50,i=Qg*(.25+e()*.55);t.fillStyle=`#0d1122`,t.fillRect(n,Qg-i,r,i),t.fillStyle=`#f2d27a`;for(let a=Qg-i+10;a<352;a+=15)for(let i=n+6;i<n+r-8;i+=11)e()>.55&&t.fillRect(i,a,5,8);n+=r+4}return}default:t.fillStyle=`#0b0d10`,t.fillRect(0,0,Zg,Qg)}}function S_(e){let t=e_.get(e);if(t)return t;if(typeof document>`u`)return null;let n=document.createElement(`canvas`);n.width=Zg,n.height=Qg;let r=n.getContext(`2d`);return r?(x_(e,r),e_.set(e,n),n):null}function C_(e){let t=t_.get(e);if(t)return t;let n=S_(e);if(!n)return null;let r=new yl(n);return r.colorSpace=aa,r.anisotropy=4,t_.set(e,r),r}var w_=new Map;function T_(e){let t=w_.get(e);if(t)return t;if(e===`desligada`){let t=new md({color:724240,roughness:.06,metalness:.3});return w_.set(e,t),t}let n=C_(e);if(!n)return null;let r=new md({color:0,emissive:16777215,emissiveMap:n,roughness:.15});return w_.set(e,r),r}function E_(e){let t=n_.get(e);if(t)return t;let n=S_(e);if(!n)return null;let r=n.toDataURL(`image/jpeg`,.75);return n_.set(e,r),r}var D_=(e,t)=>e<=t?[e,t]:[t,e],O_=e=>new K(e.x,e.y,e.z);function k_(e,t,n){return n.copy(t).sub(e.userData.home).applyMatrix4(e.matrix)}function A_(e,t,n,r){let i=n.clone().sub(t);i.lengthSq()<1e-9&&i.set(1,0,0),i.normalize();let a=r.clone().cross(i).normalize(),o=i.clone().cross(a);e.position.copy(t),e.quaternion.setFromRotationMatrix(new xo().makeBasis(i,a,o))}function j_(e,t,n,r,i,a=0){let o=new Yo;return o.add(cb({min:{x:a,y:-t/2,z:-n/2},max:{x:a+e,y:t/2,z:n/2}},r,i,!1)),o}function M_(e,t,n,r=0){let i=new X(new El(t,t,e,16),n);return i.rotation.z=Math.PI/2,i.position.x=r+e/2,i.userData.ownsGeometry=!0,i}function N_(e,t){let n=[],r=e.overlay??16,{cup:i,door:a,arm:o,plate:s}=Ge;for(let c of e.seats??[]){let[e,l]=[O_(c.along),O_(c.into)],u=e.clone().cross(l),d=new xo().makeBasis(e,l,u).setPosition(O_(c.at)),f=()=>{let e=new Yo;return e.applyMatrix4(d),e},p=(e,n,r,i,a)=>{e.add(cb({min:{x:n[0],y:r[0],z:-i},max:{x:n[1],y:r[1],z:i}},a,t,!1))},m=f(),h=new X(new El(i.diameter/2,i.diameter/2,i.depth+1,28),t.metal);h.position.set(i.centre,(1-i.depth)/2,0),h.userData.ownsGeometry=!0,m.add(h),p(m,[i.centre-4,i.centre+19],[0,1.6],30,t.steel),n.push({object:m,share:1});let g=f();p(g,[r,r+3],[s.back-18,s.back+18],8,t.metal),p(g,[r,r+5],[s.back-9,s.back+9],s.pitch/2+8,t.metal);let _=[r+5,r+14];p(g,_,[10,s.back+24],8.5,t.steel);let v=[Math.min(o[0].along,o[1].along)-3,Math.max(o[0].along,o[1].along)+2.5];p(g,[Math.min(_[0],v[0]),Math.max(_[1],v[1])],[4,12],7,t.steel),p(g,v,[o[1].into-1.5,8],5.5,t.steel),n.push({object:g,share:0});let y=e=>new K(e.along,e.into,0).applyMatrix4(d);a.forEach((e,r)=>{let i=o[r],[a,s]=[y(i),y(e)],c=j_(Math.hypot(e.along-i.along,e.into-i.into),2.4,r===0?15:9,t.metal,t),l=new K;n.push({object:c,share:0,follow:e=>A_(c,a,k_(e,s,l),u)})})}return n}function P_(e,t){let n=[],r=(e,r,i)=>{n.push({object:cb(e,r,t,!1),share:i})};return(e.boxes??[]).forEach((i,a)=>{let{min:o,max:s}=i,c=a===0?o.x:s.x,l=a===0?1:-1,u=(e,t)=>D_(c+l*e,c+l*t),d=(e,t,n,r=o.y,i=s.y)=>({min:{x:e[0],y:r,z:t},max:{x:e[1],y:i,z:n}}),f=s.x-o.x,p=s.z-o.z;if(e.kind===`slide-roller`){r(d(u(0,2),o.z,s.z),t.epoxy,0),r(d(u(0,f*.55),o.z,o.z+2),t.epoxy,0),r(d(u(f-2,f),o.z+4,s.z),t.epoxy,1),r(d(u(f*.45,f),s.z-2,s.z),t.epoxy,1);for(let[e,r]of[[o.y+14,0],[s.y-14,1]]){let i=new X(new El(8,8,6,20),t.nylon);i.rotation.z=Math.PI/2,i.position.set((o.x+s.x)/2,e,o.z+11),i.userData.ownsGeometry=!0,n.push({object:i,share:r})}}else if(e.kind===`slide-under`){let e=p/3;r({min:o,max:{...s,z:o.z+e}},t.steel,0),r({min:{...o,x:o.x+3,z:o.z+e},max:{...s,x:s.x-3,z:s.z-e}},t.metal,.5),r({min:{...o,z:s.z-e},max:s},t.steel,1),r({min:{x:o.x,y:o.y,z:o.z-6},max:{x:s.x,y:o.y+40,z:o.z}},t.nylon,1)}else r(d(u(0,2),o.z,s.z),t.steel,0),r(d(u(0,f*.6),o.z,o.z+2),t.steel,0),r(d(u(0,f*.6),s.z-2,s.z),t.steel,0),r(d(u(3,f-4),o.z+5,s.z-5),t.metal,.5),r(d(u(f-4,f),o.z+10,s.z-10),t.steel,1)}),n}function F_(e,t){let n=[],r=new K(1,0,0);for(let i of e.struts??[]){let[e,a]=[O_(i.side),O_(i.front)],o=e.distanceTo(a),s=e=>cb({min:{x:e.x-9,y:e.y-9,z:e.z-9},max:{x:e.x+9,y:e.y+9,z:e.z+9}},t.nylon,t,!1);n.push({object:s(e),share:0},{object:s(a),share:1});let c=new Yo;c.add(M_(Math.max(o-10,20),9,t.iron));let l=M_(Math.max(o-14,16),4,t.steel);c.add(l);let u=new K;n.push({object:c,share:0,follow:t=>{A_(c,e,k_(t,a,u),r),l.position.x=e.distanceTo(u)-Math.max(o-14,16)/2}})}return n}function I_(e,t){let n=[],r=new K(1,0,0),i=e.reach??115;for(let a of e.struts??[]){let[e,o]=[O_(a.side),O_(a.front)],s=j_(i,13,3,t.steel,t),c=j_(i,13,3,t.steel,t),[l,u]=[new K,new K];n.push({object:s,share:0,follow:t=>{k_(t,o,l);let n=Math.min(e.distanceTo(l),2*i),a=l.clone().sub(e);a.lengthSq()<1e-9&&a.set(0,0,1),a.normalize();let d=r.clone().cross(a);d.z<0&&d.negate(),u.copy(e).addScaledVector(a,n/2).addScaledVector(d,Math.sqrt(Math.max(0,i*i-n*n/4))),A_(s,e,u,r),A_(c,u,l,r)}}),n.push({object:c,share:0})}return n}function L_(e,t){let n=[];return(e.boxes??[]).forEach((e,r)=>{let{min:i,max:a}=e,[o,s]=r===1?[a.z-2,a.z]:[i.z,i.z+2];n.push(cb({min:{...i,z:o},max:{...a,z:s}},t.aluminium,t,!1));let c=(i.y+a.y)/2;for(let e of[i.y,c-.75,a.y-1.5])n.push(cb({min:{x:i.x,y:e,z:i.z},max:{x:a.x,y:e+1.5,z:a.z}},t.aluminium,t,!1))}),n}var R_=9,z_=1.3,B_=4;function V_(e,t,n=!1){let{box:r}=e;if(!r)return null;let i=e.facing??`-y`,a=(e.edge??`top`)===`top`,o=i===`-y`,s=o&&(e.edge===`left`||e.edge===`right`),c=(s?r.max.x-r.min.x:r.max.z-r.min.z)+R_,l=(o?r.max.y-r.min.y:r.max.x-r.min.x)-B_,u=z_,d=l+2*u,f=R_,p=Math.min(9,d/2.4,(c-f)/3),m=[{x:0,y:0},{x:0,y:10.3},...Array.from({length:6},(e,t)=>{let n=-Math.PI/2+Math.PI/2*(t/5);return{x:d-u-p+p*Math.cos(n),y:10.3+p+p*Math.sin(n)}}),{x:d-u,y:c-u},{x:u,y:c-u},{x:u,y:c-u-4},{x:0,y:c-u-4},{x:0,y:c},{x:d,y:c},{x:d,y:0},{x:d-u,y:0},{x:d-u,y:f},{x:u,y:f},{x:u,y:0}],h=s?r.max.z-r.min.z:o?r.max.x-r.min.x:r.max.y-r.min.y,g=n?H_:0,_=new Yo;if(_.add(fb(m,g,h-g,t.aluminium,t)),n){let e=[{x:0,y:0},{x:d,y:0},{x:d,y:c},{x:0,y:c}];for(let[n,r]of[[0,g],[h-g,h]])_.add(fb(e,n,r,t.nylon,t))}let v=a?1:-1,y=a?r.min.z-f:r.max.z+f,b=new xo;if(s){let t=e.edge===`right`,n=t?1:-1;b.makeBasis(new K(0,1,0),new K(n,0,0),new K(0,0,-n)),_.position.set(t?r.min.x-f:r.max.x+f,r.min.y+B_-u,t?r.max.z:r.min.z)}else o?(b.makeBasis(new K(0,1,0),new K(0,0,v),new K(v,0,0)),_.position.set(a?r.min.x:r.max.x,r.min.y+B_-u,y)):i===`-x`?(b.makeBasis(new K(1,0,0),new K(0,0,v),new K(0,-v,0)),_.position.set(r.min.x+B_-u,a?r.max.y:r.min.y,y)):(b.makeBasis(new K(-1,0,0),new K(0,0,v),new K(0,v,0)),_.position.set(r.max.x-B_+u,a?r.min.y:r.max.y,y));return _.quaternion.setFromRotationMatrix(b),_}var H_=2.5,U_=1.8;function W_(e,t,n,r){let i=new X(new qu(new lu(e.map(e=>new G(e.x,e.y))),{depth:n-t,bevelEnabled:!1,curveSegments:1}),r);return i.userData.ownsGeometry=!0,i.quaternion.setFromRotationMatrix(new xo().makeBasis(new K(0,1,0),new K(0,0,1),new K(1,0,0))),i.position.x=t,i}function G_(e,t){let n=new Yo,r=t.pull(e.finish),{spacing:i,length:a,reach:o,grip:s}=e,c=a/2,l=e=>(e.userData.ownsGeometry=!0,n.add(e),e),u=(e,i,a)=>{n.add(cb({min:{x:e[0],y:i[0],z:a[0]},max:{x:e[1],y:i[1],z:a[1]}},r,t,!1))},d=(e,t,n=!1)=>{for(let a of i>0?[-i/2,i/2]:[0])n?u([a-e,a+e],[0,t],[-e,e]):l(new X(new El(e,e,t,18),r)).position.set(a,t/2,0)};switch(e.shape){case`tube`:{let e=s/2,t=l(new X(new wl(e,Math.max(.1,a-2*e),6,18),r));t.rotation.z=Math.PI/2,t.position.y=o-e,d(Math.max(2.5,e*.75),o-e);break}case`square`:u([-c,c],[o-s,o],[-s/2,s/2]),d(Math.max(2.5,s*.4),o-s,!0);break;case`flat`:{let e=Math.max(3,s*.2);u([-c,c],[o-e,o],[-s/2,s/2]),d(Math.min(5,s*.3),o-e);break}case`arch`:{let e=s/2,t=Math.max(i,2*e)/2,n=(o-e)/.75;l(new X(new rd(new eu(new K(-t,0,0),new K(-t,n,0),new K(t,n,0),new K(t,0,0)),40,e,14,!1),r)),d(e*1.3,2);break}case`cup`:{let e=(e,t,n)=>Array.from({length:15},(r,i)=>{let a=Math.PI/2*(i/14);return{x:e*Math.sin(a),y:t-n*(1-Math.cos(a))}}),t=e(o,s/2,s),i=e(o-U_,s/2-U_,s-U_);n.add(W_([...t,...i.reverse()],-c,c,r));let a=[...t,{x:0,y:-s/2}];n.add(W_(a,-c,-c+U_,r)),n.add(W_(a,c-U_,c,r));break}case`edge`:{let t=e.over?.thick??18,i=Ht,a=[{x:-t-i,y:-s},{x:-t-i,y:i},{x:o,y:i},{x:o,y:-s},{x:o-i,y:-s},{x:o-i,y:0},{x:-t,y:0},{x:-t,y:-s}];n.add(W_(a,-c,c,r));break}case`knob`:{let e=c;l(new X(new Xu([[.01,0],[e*.62,0],[e*.62,1.2],[e*.4,2.5],[e*.34,o*.42],[e*.72,o*.56],[e*.95,o*.7],[e,o*.82],[e*.92,o*.94],[e*.6,o],[.01,o]].map(([e,t])=>new G(e,t)),32),r));break}case`knob-square`:{let e=c;u([-e*.62,e*.62],[0,1.5],[-e*.62,e*.62]),u([-e*.36,e*.36],[0,o*.45],[-e*.36,e*.36]),u([-e,e],[o*.45,o],[-e,e]);break}}let f=O_(e.out),p=e.over?O_(e.over.toward):Math.abs(e.along.z)>.5?f.clone().cross(O_(e.along)):new K(0,0,1);return n.quaternion.setFromRotationMatrix(new xo().makeBasis(f.clone().cross(p),f,p)),n.position.copy(O_(e.at)),n}function K_(e,t,n,r){let{min:i,max:a}=e,o=a.x-i.x>=a.y-i.y,[s,c]=o?[i.x,a.x]:[i.y,a.y],l=(s+c)/2,u=Math.min(I.length/2,(c-s)/2-30),d=Math.min(I.depth,(a.z-i.z)/3),f=Math.min(12,d/2,u/2),p=t===`top`?a.z:i.z,m=t===`top`?-1:1,h=(e,t)=>Array.from({length:5},(n,r)=>{let i=t+Math.PI/2*(r/4);return{x:e+f*Math.cos(i),y:p+m*(d-f)+m*f*Math.sin(i)}}),g=u>20?[{x:l+u,y:p},...h(l+u-f,0),...h(l-u+f,Math.PI/2),{x:l-u,y:p}]:[],_=fb(t===`top`?[{x:s,y:i.z},{x:c,y:i.z},{x:c,y:a.z},...g,{x:s,y:a.z}]:[{x:s,y:a.z},{x:c,y:a.z},{x:c,y:i.z},...g,{x:s,y:i.z}],0,o?a.y-i.y:a.x-i.x,n,r),v=new xo;return o?(v.makeBasis(new K(1,0,0),new K(0,0,1),new K(0,-1,0)),_.position.set(0,a.y,0)):(v.makeBasis(new K(0,1,0),new K(0,0,1),new K(1,0,0)),_.position.set(i.x,0,0)),_.quaternion.setFromRotationMatrix(v),_}function q_(e,t,n,r){let i=new Yo,a=nr(e),o={x:(t.min.x+t.max.x)/2,y:(t.min.y+t.max.y)/2},s=Math.max(a.glass[0],t.max.x-t.min.x+24),c=Math.max(a.glass[1],t.max.y-t.min.y+24),[l,u]=[o.x-s/2,o.y-c/2];i.add(cb({min:{x:l,y:u,z:n},max:{x:l+s,y:u+c,z:n+6}},r.hob,r,!1));let d=n+6,f=(e,t,n,r,a,o)=>{let s=new X(new El(n,n,a-r,32),o);s.rotation.x=Math.PI/2,s.position.set(e,t,(r+a)/2),s.userData.ownsGeometry=!0,i.add(s)};for(let[e,t,n]of rr(a)){let o=l+s*e,p=u+c*t,m=c*n;if(a.kind===`induction`){let e=new X(new Qu(m-2,m,48),r.burner);e.position.set(o,p,d+.3),e.userData.ownsGeometry=!0,i.add(e);continue}f(o,p,m*.5,d,d+9,r.steel),f(o,p,m*.36,d+9,d+14,r.iron);let h=m*1.05;for(let e of[!1,!0]){let[t,n]=e?[4,h]:[h,4];i.add(cb({min:{x:o-t,y:p-n,z:d+16},max:{x:o+t,y:p+n,z:d+22}},r.iron,r,!1))}for(let[e,t]of[[1,0],[-1,0],[0,1],[0,-1]]){let[n,a]=[o+e*(h-4),p+t*(h-4)];i.add(cb({min:{x:n-4,y:a-4,z:d},max:{x:n+4,y:a+4,z:d+16}},r.iron,r,!1))}}if(a.kind===`gas`)for(let e=0;e<a.burners;e++)f(o.x+(e-(a.burners-1)/2)*46,u+42,15,d,d+22,r.steel);else i.add(cb({min:{x:o.x-110,y:u+24,z:d},max:{x:o.x+110,y:u+52,z:d+.4}},r.burner,r,!1));return i}var J_=new Map;function Y_(e,t){let n=J_.get(e);return n||(n=t(),J_.set(e,n)),n}var X_=(e,t)=>Y_(e,()=>new md(t)),Z_=()=>X_(`black-glass`,{color:1118998,roughness:.07,metalness:.3}),Q_=()=>X_(`window`,{color:460810,roughness:.05,metalness:.2}),$_=()=>Y_(`lid`,()=>new md({color:9213854,roughness:.04,metalness:.1,transparent:!0,opacity:.22,depthWrite:!1})),ev=()=>Y_(`smoked`,()=>new md({color:3884621,roughness:.05,metalness:.1,transparent:!0,opacity:.42,depthWrite:!1})),tv=()=>X_(`plastic`,{color:2105893,roughness:.7,metalness:.05}),nv=()=>X_(`grille`,{color:3422012,roughness:.6,metalness:.3}),rv=()=>X_(`display`,{color:724497,roughness:.2,metalness:.1}),iv=()=>X_(`glow`,{color:10478847,emissive:5818623,emissiveIntensity:.9,roughness:.4}),av=()=>X_(`lamp`,{color:16774888,emissive:16773590,emissiveIntensity:.8,roughness:.4}),ov=()=>X_(`enamel`,{color:15987696,roughness:.38,metalness:.05}),sv=()=>X_(`titanium`,{color:7106678,roughness:.4,metalness:.45}),cv=()=>X_(`cast-iron`,{color:1908256,roughness:.75,metalness:.3}),lv=()=>X_(`burner-cap`,{color:1315860,roughness:.45,metalness:.2}),uv=()=>X_(`beech`,{color:12884588,roughness:.7}),dv=()=>X_(`bottle`,{color:1914151,roughness:.15,metalness:.1}),fv=()=>X_(`cloth`,{color:2829617,roughness:.95}),pv=()=>X_(`ceramic`,{color:16316662,roughness:.12,metalness:.02}),mv=()=>X_(`bed-base`,{color:13617339,roughness:.95}),hv=()=>X_(`mattress`,{color:15921386,roughness:.92}),gv=(e,t,n)=>t>n?(t+n)/2:Math.min(n,Math.max(t,e)),_v=class{assets;group=new Yo;constructor(e){this.assets=e}metal(e=`stainless`){return this.assets.pull(e)}box(e,t,n,r,i,a,o,s=0,c=!1){let[l,u,d]=[r-e,i-t,a-n];if(l<=.2||u<=.2||d<=.2)return null;let f=Math.min(s,l/2-.05,u/2-.05,d/2-.05);if(f<.6){let s=cb({min:{x:e,y:t,z:n},max:{x:r,y:i,z:a}},o,this.assets,c);return this.group.add(s),s}let p=new X(new Yg(l,u,d,3,f),o);if(p.position.set((e+r)/2,(t+i)/2,(n+a)/2),p.userData.ownsGeometry=!0,c){let e=new ll(this.assets.unitEdges,this.assets.edge);e.scale.set(l,u,d),e.raycast=()=>{},f>=12&&(e.userData.onlySelected=!0,e.visible=!1),p.add(e)}return this.group.add(p),p}cylinder(e,t,n,r,i,a,o,s=32){let c=new X(new El(i,i,a,s),o);return e===`x`?c.rotation.z=-Math.PI/2:e===`z`&&(c.rotation.x=Math.PI/2),c.position.set(t,n,r),c.userData.ownsGeometry=!0,this.group.add(c),c}ring(e,t,n,r,i,a){let o=new X(new nd(r,i,16,64),a);o.rotation.x=Math.PI/2,o.position.set(e,t,n),o.userData.ownsGeometry=!0,this.group.add(o)}knob(e,t,n,r,i,a=n*1.1){let o=new X(new Xu([[.01,0],[n,0],[n,a*.16],[n*.86,a*.24],[n*.8,a*.88],[n*.7,a],[.01,a]].map(([e,t])=>new G(e,t)),36),i);o.rotation.x=Math.PI,o.position.set(e,r,t),o.userData.ownsGeometry=!0,this.group.add(o),this.box(e-1.2,r-a-.4,t+n*.25,e+1.2,r-a+.6,t+n*.72,this.metal(`white`))}handle(e,t,n,r,i,a,o=`stainless`,s=`tube`,c=40,l=14){let u={x:+(r===`x`),y:+(r===`y`),z:+(r===`z`)};this.group.add(G_({shape:s,at:{x:e,y:t,z:n},along:u,out:{x:0,y:-1,z:0},spacing:i,length:a,reach:c,grip:l,finish:o},this.assets))}display(e,t,n,r,i){this.box(e,i-.8,n,t,i+.2,r,rv(),1.5);let a=t-e,o=r-n;for(let t=0;t<3;t++){let r=e+a*(.16+t*.2);this.box(r,i-1.2,n+o*.25,r+a*.13,i-.7,n+o*.75,iv())}this.box(e+a*.8,i-1.2,n+o*.42,e+a*.86,i-.7,n+o*.58,iv())}keys(e,t,n,r,i,a=14,o=tv()){for(let s=0;s<r;s++){let c=r===1?(e+t)/2:e+(t-e)*s/(r-1);this.cylinder(`y`,c,i-1.5,n,a/2,3,o,20)}}slots(e,t,n,r,i,a,o=nv()){let s=(t-e)/a;for(let t=0;t<a;t++){let a=e+s*t;this.box(a+s*.2,i-.6,n,a+s*.8,i+.4,r,o)}}};function vv(e,t,n,r,i,a){let o=new _v(i),s=t,c=n,l=r;return e===`fogao-4`||e===`fogao-5`||e.startsWith(`fogao`)?bv(o,s,c,l,e===`fogao-5`||s>=650?5:4):e.startsWith(`cooktop`)?xv(o,s,c,l,e===`cooktop-5`||s>=680?5:4):e===`forno-embutir`?Sv(o,s,c,l):e===`micro-embutir`?Cv(o,s,c,l):e===`forno-bancada`?wv(o,s,c,l):e===`micro-bancada`?Tv(o,s,c,l):e.startsWith(`depurador`)?Dv(o,s,c,l):e===`coifa-ilha`?Ev(o,s,c,l,!0):e.startsWith(`coifa`)?Ev(o,s,c,l,!1):e===`geladeira-inverse`?Ov(o,s,c,l,`bottom`):e===`geladeira-side`?Ov(o,s,c,l,`side`):e===`frigobar`?Ov(o,s,c,l,`single`):e.startsWith(`geladeira`)?Ov(o,s,c,l,l<1e3?`single`:s>=850?`side`:`top`):e===`adega`?kv(o,s,c,l):e.startsWith(`lava-loucas`)?Av(o,s,c,l):e===`lava-roupas`?jv(o,s,c,l):e===`lava-seca`?Mv(o,s,c,l,!1):e===`secadora`?Mv(o,s,c,l,!0):e===`tv`||e.startsWith(`tv-`)?Nv(o,s,c,l,a):e===`soundbar`?Pv(o,s,c,l):e===`ar-condicionado`?Fv(o,s,c,l):e===`bacia-sanitaria`?Lv(o,s,c,l):e===`tanque`?Rv(o,s,c,l):e.startsWith(`cama`)?zv(o,s,c,l):e.startsWith(`cadeira`)?Bv(o,s,c,l):e===`spot`?Vv(o,s,c,l):e===`arandela`?Hv(o,s,c,l):e===`pendente`?Uv(o,s,c,l):e===`plafon`?Wv(o,s,c,l):e===`fita-led`?Gv(o,s,c,l):o.box(0,0,0,s,c,l,o.metal(),6,!0),o.group}function yv(e,t,n,r,i,a,o){let s=n-t,c=i-r,l=o===5?[[.5,.5,1.3],[.17,.27,1],[.83,.27,.85],[.17,.75,.85],[.83,.75,1]]:[[.27,.28,1],[.73,.28,.85],[.27,.74,.85],[.73,.74,1]],u=Math.min(s/(o===5?3.2:2.2),c/2.2);for(let[n,i,o]of l){let l=t+s*n,d=r+c*i,f=u*.2*o;e.cylinder(`z`,l,d,a+4,f*1.18,8,e.metal(`stainless`)),e.cylinder(`z`,l,d,a+11,f*.86,6,lv()),o>1.2&&e.cylinder(`z`,l,d,a+15,f*.45,4,lv());let p=Math.min(u*.48,f*2.3),m=a+22,h=m+8,g=cv();e.box(l-p,d-p,m,l+p,d-p+7,h,g,1.5),e.box(l-p,d+p-7,m,l+p,d+p,h,g,1.5),e.box(l-p,d-p,m,l-p+7,d+p,h,g,1.5),e.box(l+p-7,d-p,m,l+p,d+p,h,g,1.5);let _=p-f*1.25;_>6&&(e.box(l-2.5,d-p,m,l+2.5,d-p+_,h+3,g,1),e.box(l-2.5,d+p-_,m,l+2.5,d+p,h+3,g,1),e.box(l-p,d-2.5,m,l-p+_,d+2.5,h+3,g,1),e.box(l+p-_,d-2.5,m,l+p,d+2.5,h+3,g,1));for(let[t,n]of[[l-p+4,d-p+4],[l+p-4,d-p+4],[l-p+4,d+p-4],[l+p-4,d+p-4]])e.cylinder(`z`,t,n,(a+m)/2,3,m-a,g,10)}}function bv(e,t,n,r,i){let a=e.metal(`stainless`),o=Math.min(n*.8,480),s=r>1100?r-o-6:r-40,c=gv(s*.12,80,110),l=gv(s*.1,60,100),u=s-c-6;e.box(0,22,l,t,n-6,s,a,4,!0),e.box(16,50,0,t-16,n-40,l,tv());for(let r of[40,t-40])for(let t of[70,n-70])e.cylinder(`z`,r,t,8,14,16,tv(),16);e.box(0,0,l+6,t,24,u,a,5),e.box(26,-.8,l+30,t-26,.5,u-70,Z_(),2),e.box(56,-1.6,l+70,t-56,-.5,u-110,Q_(),2),e.handle(t/2,0,u-40,`x`,Math.max(96,t-140),Math.max(140,t-90),`stainless`,`tube`,42,16),e.box(0,0,u+4,t,26,s,a,4);let d=i+1;for(let n=0;n<d;n++){let r=t*(.1+.8*n/(d-1));e.knob(r,(u+4+s)/2,Math.min(19,c*.25),0,cv())}e.box(0,0,s,t,n,s+6,Z_(),3),yv(e,0,t,0,n-20,s+6,i),e.box(4,n-10,s+6,t-4,n,s+6+o,$_(),4)}function xv(e,t,n,r,i){let a=Math.max(8,r-40);e.box(20,20,0,t-20,n-20,a-6,tv(),0,!0),e.box(0,0,a-6,t,n,a,Z_(),4,!0),yv(e,0,t,0,n,a,i)}function Sv(e,t,n,r){let i=e.metal(`stainless`),a=gv(r*.16,70,110);e.box(10,22,10,t-10,n,r-10,tv(),0,!0),e.box(0,0,0,t,22,r-a-3,Z_(),3,!0),e.box(48,-.8,50,t-48,.2,r-a-90,Q_(),2),e.box(0,0,0,t,22,8,i,2),e.handle(t/2,0,r-a-42,`x`,Math.max(96,t-160),Math.max(140,t-110),`stainless`,`tube`,42,14),e.box(0,0,r-a,t,22,r,i,3);let o=r-a/2;e.knob(t*.13,o,Math.min(18,a*.24),0,i),e.knob(t*.87,o,Math.min(18,a*.24),0,i),e.display(t/2-70,t/2+70,o-17,o+17,0),e.keys(t*.27,t*.36,o,2,0,9,Z_()),e.keys(t*.64,t*.73,o,2,0,9,Z_())}function Cv(e,t,n,r){let i=e.metal(`stainless`),a=gv(t*.22,100,150);e.box(10,22,10,t-10,n,r-10,tv(),0,!0),e.box(0,0,0,t,20,r,i,3,!0),e.box(14,-.6,14,t-a,.4,r-14,Z_(),2),e.box(48,-1.4,44,t-a-70,-.4,r-44,Q_(),2),e.handle(t-a-32,0,r/2,`z`,Math.max(64,r*.5),Math.max(100,r*.62),`stainless`,`tube`,36,12),e.box(t-a+6,-.6,14,t-14,.4,r-14,Z_(),2);let o=t-14,s=t-a+6;e.display(s+16,o-16,r-70,r-36,-.6);for(let t=0;t<3;t++)e.keys(s+24,o-24,r-110-t*42,3,-.6,14,e.metal(`graphite`));e.knob((s+o)/2,Math.max(50,r*.2),17,-.6,i)}function wv(e,t,n,r){let i=e.metal(`black`),a=gv(t*.24,100,150);e.box(0,0,14,t,n,r,i,10,!0);for(let r of[34,t-54])for(let t of[40,n-60])e.cylinder(`z`,r+10,t+10,7,11,14,tv(),16);e.box(12,-1,30,t-a-6,1,r-18,Z_(),6),e.box(40,-1.8,60,t-a-34,-.8,r-70,Q_(),3),e.handle((t-a)/2,-1,r-44,`x`,Math.max(96,(t-a)*.62),Math.max(120,(t-a)*.72),`stainless`,`tube`,34,12);let o=t-a/2-4,s=Math.min(20,a*.16);for(let t of[.74,.48,.22])e.knob(o,14+(r-14)*t,s,0,e.metal(`stainless`))}function Tv(e,t,n,r){let i=gv(t*.25,100,140);e.box(0,0,10,t,n,r,ov(),14,!0),e.box(8,10,0,t-8,n-20,10,tv()),e.box(10,-1,20,t-i,1,r-10,Z_(),6),e.box(40,-1.8,46,t-i-60,-.8,r-40,Q_(),3),e.box(t-i-26,-2.5,r*.25,t-i-12,-.6,r*.75,e.metal(`graphite`),4);let a=t-i+10,o=t-12;e.box(a,-1,20,o,1,r-10,Z_(),4),e.display(a+12,o-12,r-62,r-34,-1);for(let t=0;t<3;t++)e.keys(a+20,o-20,r-92-t*36,3,-1,13,e.metal(`graphite`));e.box(a+14,-2.4,34,o-14,-.8,56,e.metal(`stainless`),4)}function Ev(e,t,n,r,i){let a=e.metal(`stainless`),o=gv(r*.065,45,75);e.box(0,0,0,t,n,o,a,6,!0);let s=(t-120)/2;for(let r of[40,t/2+20]){e.box(r,50,-1.5,r+s,n-60,.5,e.metal(`aluminium`));for(let t=1;t<9;t++)e.box(r+s*t/9-1,52,-2.5,r+s*t/9+1,n-62,-1.5,nv())}for(let n of[t*.22,t*.78])e.cylinder(`z`,n,26,-1,14,2,av(),24);e.keys(t/2-75,t/2+75,o/2,4,0,12,Z_()),e.box(t/2+95,-.8,o/2-2,t/2+99,.2,o/2+2,iv());let c=Math.min(r-o,gv(r*.16,110,200)),l=Math.min(t*.62,520),u=i?Math.min(n*.7,420):Math.min(n*.66,340),d=i?(n+u)/2:n;e.box(t/2-l/2,d-u,o,t/2+l/2,d,o+c,a,4,!0);let f=Math.min(l*.6,280),p=Math.min(u*.75,240),m=i?(n+p)/2:n;e.box(t/2-f/2,m-p,o+c,t/2+f/2,m,r,a,2,!0)}function Dv(e,t,n,r){let i=e.metal(`stainless`);e.box(0,34,18,t,n,r,i,3,!0),e.box(0,0,0,t,34,r,Z_(),4,!0),e.box(0,0,0,t,34,6,i,2),e.keys(t/2-60,t/2+60,r*.55,4,0,11,e.metal(`graphite`)),e.box(30,44,14,t-30,n-30,18,e.metal(`aluminium`));for(let r=1;r<12;r++)e.box(30+(t-60)*r/12-1,46,13,30+(t-60)*r/12+1,n-32,14,nv());for(let r of[t*.2,t*.8])e.cylinder(`z`,r,n*.42,13,12,2,av(),24)}function Ov(e,t,n,r,i){let a=e.metal(`stainless`),o=gv(n*.07,32,60),s=gv(r*.04,40,80);e.box(0,o,s,t,n,r,a,8,!0),e.box(12,o+10,0,t-12,n-20,s,tv()),e.slots(30,t-30,s*.3,s*.75,o+10,Math.max(6,Math.round(t/45)));let c=(t,n,r,i)=>{e.box(t,0,r,n,o,i,a,7)},l=(t,n,r)=>e.handle(t,0,(n+r)/2,`z`,Math.max(96,r-n-40),r-n,`aluminium`,`flat`,40,24),u=r-2;if(i===`side`){let n=t*.47;c(0,n-2,s+4,u),c(n+2,t,s+4,u),l(n-40,r*.42,r*.78),l(n+40,r*.42,r*.78);let i=[n*.2,n*.8];e.box(i[0],-.5,r*.5,i[1],1,r*.72,tv(),6),e.box(i[0]+14,-.8,r*.52,i[1]-14,.4,r*.6,nv(),3),e.display(i[0]+20,i[1]-20,r*.65,r*.69,-.5);return}if(i===`single`){c(0,t,s+4,u),e.box(t-80,-2,u-60,t-30,.5,u-20,e.metal(`graphite`),6);return}if(i===`bottom`){let n=s+(r-s)*.34;c(0,t,s+4,n-2),c(0,t,n+2,u),e.handle(t/2,0,n-60,`x`,Math.max(96,t-220),t-160,`aluminium`,`flat`,40,24),l(t-52,n+120,n+120+Math.min(700,(u-n)*.6)),e.display(t/2-55,t/2+55,u-150,u-110,0);return}let d=s+(r-s)*.7;c(0,t,s+4,d-2),c(0,t,d+2,u),l(t-52,d-60-Math.min(700,(d-s)*.6),d-60),l(t-52,d+60,d+60+Math.min(360,(u-d)*.6)),e.display(t/2-55,t/2+55,d-150,d-110,0)}function kv(e,t,n,r){let i=e.metal(`black`);e.box(0,30,70,18,n,r,i,3,!0),e.box(t-18,30,70,t,n,r,i,3,!0),e.box(0,30,r-18,t,n,r,i,3),e.box(0,30,70,t,n,88,i,3),e.box(0,n-18,70,t,n,r,i),e.box(10,40,0,t-10,n-20,70,tv()),e.slots(30,t-30,18,52,40,Math.max(5,Math.round(t/45)));let a={x0:18,x1:t-18,z0:88,z1:r-18},o=Math.max(1,Math.floor((a.z1-a.z0-20)/105)),s=(a.z1-a.z0)/o,c=Math.max(1,Math.floor((a.x1-a.x0-10)/78)),l=(a.x1-a.x0)/c;for(let t=0;t<o;t++){let r=a.z0+s*t+12;e.box(a.x0,42,r,a.x1,n-18,r+10,e.metal(`graphite`)),e.box(a.x0,40,r,a.x1,56,r+22,uv(),2);for(let t=0;t<c;t++){let i=a.x0+l*(t+.5),o=r+10+37,s=Math.min(n-18-30-60,300);e.cylinder(`y`,i,70+s/2,o,36,s,dv(),20),e.cylinder(`y`,i,64,o,13,16,dv(),14),e.cylinder(`y`,i,56,o,11,4,e.metal(`gold`),14)}}let u=e.metal(`stainless`);e.box(0,0,70,t,30,98,u,3),e.box(0,0,r-28,t,30,r,u,3),e.box(0,0,70,28,30,r,u,3),e.box(t-28,0,70,t,30,r,u,3),e.box(28,8,98,t-28,16,r-28,ev()),e.handle(t-46,0,(70+r)/2,`z`,Math.max(96,(r-70)*.45),(r-70)*.55,`stainless`,`square`,36,12),e.display(t/2-40,t/2+40,r-14-8,r-14+8,0)}function Av(e,t,n,r){let i=e.metal(`stainless`),a=gv(r*.1,70,110),o=gv(r*.1,70,100);e.box(0,24,a,t,n,r,i,4,!0),e.box(16,40,0,t-16,n-40,a,tv()),e.box(0,0,a+4,t,24,r-o-3,i,5),e.box(0,0,r-o,t,24,r,Z_(),4),e.display(t/2-60,t/2+60,r-o/2-14,r-o/2+14,0),e.keys(30,t/2-90,r-o/2,Math.max(2,Math.round(t/180)),0,12,e.metal(`graphite`)),e.keys(t/2+90,t-30,r-o/2,Math.max(2,Math.round(t/180)),0,12,e.metal(`graphite`)),e.handle(t/2,0,r-o-40,`x`,Math.max(96,t-200),Math.max(140,t-140),`stainless`,`tube`,38,14)}function jv(e,t,n,r){let i=ov(),a=gv(r*.11,90,130),o=r-a,s=gv(n*.24,130,180);e.box(0,0,40,t,n,o,i,16,!0),e.box(20,20,0,t-20,n-30,40,tv()),e.box(20,20,o-2,t-20,n-s-10,o+10,i,8),e.box(44,44,o+9,t-44,n-s-34,o+11,ev(),4),e.box(t/2-70,22,o+9,t/2+70,40,o+14,e.metal(`graphite`),3),e.box(0,n-s,o,t,n,r,i,12,!0);let c=n-s;e.box(40,c-.8,o+18,t-40,c+.2,r-18,Z_(),6),e.knob(t/2,(o+r)/2,Math.min(34,a*.3),c-.8,e.metal(`chrome`),26),e.display(t/2+70,t/2+170,(o+r)/2-14,(o+r)/2+14,c-.8),e.keys(70,t/2-70,(o+r)/2,3,c-.8,13,e.metal(`graphite`))}function Mv(e,t,n,r,i){let a=i?ov():sv(),o=gv(r*.13,90,130);e.box(0,0,30,t,n,r,a,16,!0),e.box(16,20,0,t-16,n-30,30,tv()),e.box(10,-1,r-o+6,t-10,1,r-10,i?ov():Z_(),6),i||(e.box(18,-2.5,r-o+14,t*.33,-.5,r-18,ov(),5),e.box(t*.18,-3.2,r-o/2-6,t*.27,-2,r-o/2+6,e.metal(`graphite`),3)),e.knob(t*.52,r-o/2,Math.min(30,o*.28),-1,e.metal(`chrome`),24),e.display(t*.64,t*.86,r-o/2-13,r-o/2+13,-1);let s=Math.min(t*.36,(r-o-30)*.42),c=t/2,l=30+(r-o-30)*.5;e.cylinder(`y`,c,-6,l,s+8,12,i?ov():e.metal(`graphite`),64),e.cylinder(`y`,c,-12.5,l,s-14,1,e.metal(`stainless`),48);for(let t=0;t<6;t++){let n=t/6*Math.PI*2;e.cylinder(`y`,c+Math.cos(n)*s*.5,-13.2,l+Math.sin(n)*s*.5,9,.6,nv(),12)}e.cylinder(`y`,c,-16,l,s-8,4,ev(),64),e.ring(c,-16,l,s,9,e.metal(`chrome`)),e.box(c+s-4,-28,l-40,c+s+18,-12,l+40,e.metal(`graphite`),6)}function Nv(e,t,n,r,i){let a=e.metal(`graphite`),o=n>=150,s=o?Math.min(90,r*.12):0,c=Math.min(n,o?32:26),l=o?(n-c)/2:0,u=s;e.box(0,l,u,t,l+c,r,a,3,!0);let d=Math.max(5,Math.min(t,r-s)*.008);e.box(d,l-.8,u+d*1.6,t-d,l+.4,r-d,i&&T_(i)||Z_(),1),e.box(t/2-14,l-1.2,u+2,t/2+14,l-.4,u+d,iv()),!o&&n>c+4&&e.box(t*.15,c,u+(r-u)*.08,t*.85,n,u+(r-u)*.7,a,8),o&&(e.box(t/2-50,l+c,s-10,t/2+50,l+c+30,s+(r-s)*.35,a,6),e.box(t/2-Math.min(t*.2,260),0,0,t/2+Math.min(t*.2,260),n,14,a,6),e.box(t/2-40,l,14,t/2+40,l+c+30,s,a,6))}function Pv(e,t,n,r){e.box(0,0,0,t,n,r,e.metal(`black`),Math.min(r*.35,18),!0),e.box(12,-.6,r*.18,t-12,n*.3,r*.82,fv(),Math.min(r*.3,12)),e.box(t/2-6,-1,r*.1,t/2+6,0,r*.16,iv())}function Fv(e,t,n,r){let i=ov();e.box(0,0,0,t,n,r,i,Math.min(r*.18,40),!0),e.box(14,-.8,r*.4,t-14,.4,r*.4+2,X_(`seam`,{color:14079955,roughness:.5})),e.box(30,n*.08,-1,t-30,n*.55,1,tv(),4),e.box(30,-4,r*.06,t-30,n*.18,r*.06+6,i,3),e.box(t-110,-1,r*.5,t-60,.2,r*.5+14,rv(),3),e.box(t-100,-1.4,r*.5+4,t-92,-.6,r*.5+10,iv())}function Iv(e,t,n,r,i,a,o,s,c=1){let l=e.cylinder(`z`,t,n,(r+i)/2,a/2,i-r,s,40);l.geometry.dispose(),l.geometry=new El(a/2*c,a/2,i-r,40),l.scale.set(1,1,o/a)}function Lv(e,t,n,r){let i=gv(n*.27,150,200),a=gv(r*.5,360,420),o=n-i+30,s=o/2,c=t*.48,l=new X(new Xu([[.01,0],[.5,0],[.48,.12],[.5,.4],[.62,.58],[.8,.74],[.93,.87],[1,.97],[.98,1],[.01,1]].map(([e,t])=>new G(e*c,t*a)),48),pv());l.rotation.x=Math.PI/2,l.scale.set(1,1,o*.98/(2*c)),l.position.set(t/2,s,0),l.userData.ownsGeometry=!0,e.group.add(l),Iv(e,t/2,s,a-2,a+6,t*.96,o*.98,pv()),Iv(e,t/2,s-4,a+6,a+24,t*.94,o*.93,e.metal(`white`)),e.box(t*.04,n-i,a-40,t*.96,n,r-3,pv(),14,!0),e.cylinder(`z`,t/2,n-i/2,r-1.5,22,3,e.metal(`chrome`),32)}function Rv(e,t,n,r){let i=pv(),a=gv(r*.14,100,150),o=r-a,s=gv(o*.3,200,280),c=o-s;e.box(t*.3,n*.3,0,t*.7,n-20,c+20,i,18,!0),e.box(0,0,c,t,n,c+30,i,12),e.box(0,0,c,30,n,o,i,8),e.box(t-30,0,c,t,n,o,i,8),e.box(0,0,c,t,30,o,i,8),e.box(0,n-30,c,t,n,o,i,8);let l=(n-60)*.48;for(let n=0;n<8;n++){let r=30+l*n/8,a=o-20-(s-70)*n/8;e.box(30,r,c+30,t-30,r+l/8-4,a,i,3)}let u=e.metal(`chrome`),d=e=>o+a*e;e.cylinder(`y`,t/2,n-15,d(.35),14,30,u,24),e.cylinder(`z`,t/2,n-30-6,d(.6),9,a*.5,u,20),e.cylinder(`y`,t/2,n-30-60,d(.85),9,110,u,20),e.cylinder(`z`,t/2,n-30-20,d(.94),16,a*.12,u,24)}function zv(e,t,n,r){let i=n>=t*.85,a=i?r-100:r,o=40+(a-40)*.55;for(let r of[60,t-60])for(let t of[60,n-60])e.cylinder(`z`,r,t,20,18,40,tv(),16);if(e.box(0,0,40,t,n,o,mv(),20,!0),e.box(6,6,o,t-6,n-6,a,hv(),Math.min(45,(a-o)*.45)),e.box(4,4,(o+a)/2-1,t-4,n-4,(o+a)/2+1,mv(),1),i){let i=t>=1200?2:1,o=(t-120-(i-1)*40)/i;for(let t=0;t<i;t++){let i=60+t*(o+40);e.box(i,n-60-380,a-10,i+o,n-60,r,hv(),50)}}}function Bv(e,t,n,r){let i=e.metal(`black`),a=t/2,o=n/2,s=Math.min(t,n)/2-30,c=gv(r*.45,400,520);for(let t=0;t<5;t++){let n=t/5*Math.PI*2+Math.PI/2,r=e.box(a-s/2,o-14,50,a+s/2,o+14,74,i,6);r&&(r.position.set(a+Math.cos(n)*s/2,o+Math.sin(n)*s/2,62),r.rotation.z=n),e.cylinder(`x`,a+Math.cos(n)*s,o+Math.sin(n)*s,25,24,22,tv(),18)}e.cylinder(`z`,a,o,(74+c-40)/2,22,c-40-74,e.metal(`chrome`),24),e.box(t*.08,n*.08,c-40,t*.92,n*.84,c+30,fv(),30);let l=e.box(t*.14,n*.8,c+70,t*.86,n*.9,r-10,fv(),30);l&&(l.rotation.x=-.1),e.box(a-20,n*.82,c+10,a+20,n*.88,c+90,i,6);for(let r of[t*.06,t*.94])e.box(r-14,n*.35,c+30,r+14,n*.45,c+200,i,6),e.box(r-25,n*.2,c+200,r+25,n*.7,c+225,i,10)}function Vv(e,t,n,r){let i=Math.min(t,n)/2;e.cylinder(`z`,t/2,n/2,r/2,i,r,ov(),40),e.cylinder(`z`,t/2,n/2,-.3,i*.8,1,e.metal(`chrome`),40),e.cylinder(`z`,t/2,n/2,-.6,i*.6,1.4,av(),40)}function Hv(e,t,n,r){let i=e.metal(`graphite`);e.box(0,0,0,t,n,r,i,Math.min(6,r/4),!0),e.box(6,Math.min(4,n/4),r-.4,t-6,n-Math.min(4,n/4),r+1,av(),2),e.box(6,Math.min(4,n/4),-1,t-6,n-Math.min(4,n/4),.4,av(),2),e.box(10,-.8,r*.42,t-10,.3,r*.58,av(),2)}function Uv(e,t,n,r){let i=Math.min(t,n)/2,a=Math.min(r*.4,i*1.2);e.cylinder(`z`,t/2,n/2,r-10,Math.min(50,i*.4),20,ov(),32),e.cylinder(`z`,t/2,n/2,(r-20+a)/2,2.5,Math.max(r-20-a,1),tv(),8);let o=new X(new El(i*.3,i,a,40,1,!0),e.metal(`black`));o.rotation.x=Math.PI/2,o.position.set(t/2,n/2,a/2),o.userData.ownsGeometry=!0,e.group.add(o),e.cylinder(`z`,t/2,n/2,4,i*.92,2,av(),40)}function Wv(e,t,n,r){let i=Math.min(t,n)/2;e.cylinder(`z`,t/2,n/2,r/2,i,r,ov(),48),e.cylinder(`z`,t/2,n/2,-.3,i*.94,1,e.metal(`chrome`),48),e.cylinder(`z`,t/2,n/2,-.6,i*.88,1.4,av(),48)}function Gv(e,t,n,r){let i=Math.max(t,n,r),a=e.metal(`aluminium`),[o,s]=[i===t?2:0,i===r?2:0];e.box(o,i===n?2:0,s,t-o,n-2,r-s,av(),0),e.box(0,n-2,0,t,n,r,a),i===r?(e.box(0,0,0,t,n,2,a),e.box(0,0,r-2,t,n,r,a)):i===t?(e.box(0,0,0,2,n,r,a),e.box(t-2,0,0,t,n,r,a)):e.box(0,0,0,t,2,r,a)}function Kv(e,t=Math.PI/3){let n=e.index?e.toNonIndexed():e,r=n.attributes.position,i=r.count,a;if(r.isBufferAttribute===!0&&r.itemSize===3&&r.normalized===!1)a=r.array;else{a=new Float64Array(i*3);for(let e=0;e<i;e++)a[3*e+0]=r.getX(e),a[3*e+1]=r.getY(e),a[3*e+2]=r.getZ(e)}let o=Math.cos(t),s=(1+1e-10)*100,c=i/3,l=new Float64Array(c*3);for(let e=0;e<c;e++){let t=9*e,n=a[t+0],r=a[t+1],i=a[t+2],o=a[t+3],s=a[t+4],c=a[t+5],u=a[t+6],d=a[t+7],f=a[t+8],p=u-o,m=d-s,h=f-c,g=n-o,_=r-s,v=i-c,y=m*v-h*_,b=h*g-p*v,x=p*_-m*g,S=1/(Math.sqrt(y*y+b*b+x*x)||1);l[3*e+0]=y*S,l[3*e+1]=b*S,l[3*e+2]=x*S}let u=new Int32Array(i),d=new Float64Array(i*3),f=1;for(;f<i*2;)f<<=1;let p=f-1,m=new Int32Array(f),h=0;for(let e=0;e<i;e++){let t=3*e,n=Math.trunc(a[t+0]*s),r=Math.trunc(a[t+1]*s),i=Math.trunc(a[t+2]*s),o=(Math.imul(n,73856093)^Math.imul(r,19349663)^Math.imul(i,83492791))&p;for(;;){let t=m[o];if(t===0){let t=3*h;d[t+0]=n,d[t+1]=r,d[t+2]=i,m[o]=h+1,u[e]=h++;break}let a=3*(t-1);if(d[a+0]===n&&d[a+1]===r&&d[a+2]===i){u[e]=t-1;break}o=o+1&p}}let g=new Int32Array(h+1);for(let e=0;e<i;e++)g[u[e]+1]++;for(let e=0;e<h;e++)g[e+1]+=g[e];let _=new Int32Array(i),v=g.slice(0,h);for(let e=0;e<c;e++){let t=3*e;_[v[u[t+0]]++]=e,_[v[u[t+1]]++]=e,_[v[u[t+2]]++]=e}let y=new Float32Array(i*3);for(let e=0;e<c;e++){let t=3*e,n=l[t+0],r=l[t+1],i=l[t+2];for(let e=0;e<3;e++){let a=t+e,s=u[a],c=0,d=0,f=0;for(let e=g[s],t=g[s+1];e<t;e++){let t=3*_[e],a=l[t+0],s=l[t+1],u=l[t+2];n*a+r*s+i*u>o&&(c+=a,d+=s,f+=u)}let p=1/(Math.sqrt(c*c+d*d+f*f)||1);y[3*a+0]=c*p,y[3*a+1]=d*p,y[3*a+2]=f*p}}return n.setAttribute(`normal`,new Vs(y,3,!1)),n}var qv=.1,Jv=12,Yv=4,Xv={long:260,tall:32,flat:8},Zv=4,Qv=/logo|logotipo|marca(?!dor)|brand|emblema/i,$v=/eletro|refriger|gelad|depurad|coifa|micro.?ondas|forno|fog[aã]o|cooktop|lava.?lou|lava.?roup|lavador|lavanderia\/eletro|secador|frigobar|adega|eletr[oô]nic|televis|\btv\b|ar.?condic|informatica/i,ey=(e,t)=>`${Math.round(e[t]/qv)},${Math.round(e[t+1]/qv)},${Math.round(e[t+2]/qv)}`;function ty(e,t){let n=e.positions,r=n.length/9,i=Array.from({length:r},(e,t)=>t),a=e=>{let t=e;for(;i[t]!==t;)t=i[t];for(;i[e]!==t;){let n=i[e];i[e]=t,e=n}return t},o=new Map;for(let e=0;e<r;e++)for(let t=0;t<3;t++){let r=ey(n,e*9+t*3),s=o.get(r);s===void 0?o.set(r,e):i[a(e)]=a(s)}let s=new Map;for(let e=0;e<r;e++){let r=a(e),i=s.get(r);i||(i={part:t,triangles:[],min:[1/0,1/0,1/0],max:[-1/0,-1/0,-1/0]},s.set(r,i)),i.triangles.push(e);for(let t=0;t<3;t++)for(let r=0;r<3;r++){let a=n[e*9+t*3+r];a<i.min[r]&&(i.min[r]=a),a>i.max[r]&&(i.max[r]=a)}}return[...s.values()]}var ny=e=>[0,1,2].map(t=>e.max[t]-e.min[t]).sort((e,t)=>e-t),ry=(e,t,n)=>[0,1,2].every(r=>e.min[r]-n<=t.max[r]&&t.min[r]-n<=e.max[r]);function iy(e){let t=e.filter(e=>{let[,,t]=ny(e);return t<=Jv});if(t.length<Zv)return new Set;let n=new Map,r=e=>e.min.map(e=>Math.floor(e/16));t.forEach((e,t)=>{let i=r(e).join(`,`),a=n.get(i);a?a.push(t):n.set(i,[t])});let i=t.map((e,t)=>t),a=e=>i[e]===e?e:i[e]=a(i[e]);t.forEach((e,o)=>{let[s,c,l]=r(e);for(let r=-1;r<=1;r++)for(let u=-1;u<=1;u++)for(let d=-1;d<=1;d++)for(let f of n.get(`${s+r},${c+u},${l+d}`)??[])f>o&&ry(e,t[f],Yv)&&(i[a(f)]=a(o))});let o=new Map;t.forEach((e,t)=>{let n=a(t),r=o.get(n);r?r.push(e):o.set(n,[e])});let s=new Set;for(let e of o.values()){if(e.length<Zv)continue;let[t,n,r]=ny({min:[0,1,2].map(t=>Math.min(...e.map(e=>e.min[t]))),max:[0,1,2].map(t=>Math.max(...e.map(e=>e.max[t])))});if(r<=Xv.long&&n<=Xv.tall&&t<=Xv.flat)for(let t of e)s.add(t)}return s}function ay(e,t){let[n,r,i]=[e[t+3]-e[t],e[t+4]-e[t+1],e[t+5]-e[t+2]],[a,o,s]=[e[t+6]-e[t],e[t+7]-e[t+1],e[t+8]-e[t+2]];return Math.hypot(r*s-i*o,i*a-n*s,n*o-r*a)<.02}function oy(e,t=()=>``,n=!0){let r=e.parts.filter(e=>!Qv.test(`${e.slot} ${t(e.slot)}`)),i=n?iy(r.flatMap((e,t)=>ty(e,t))):new Set,a=r.map(()=>new Set);for(let e of i)for(let t of e.triangles)a[e.part].add(t);let o=[];return r.forEach((e,t)=>{let n=a[t],r=e.positions.length/9,i=[];for(let t=0;t<r;t++)if(!(n.has(t)||ay(e.positions,t*9)))for(let n=t*9;n<t*9+9;n++)i.push(e.positions[n]);i.length>0&&o.push({...e,positions:new Float32Array(i)})}),o.length>0?{...e,parts:o}:e}var sy=class extends Error{};function cy(e){let t=String.fromCharCode(...e.subarray(0,8))===`PROMOB3D`?py(e):ly(e),n=[1/0,1/0,1/0],r=[-1/0,-1/0,-1/0];for(let e of t)for(let t=0;t<e.positions.length;t+=3)for(let i=0;i<3;i++){let a=e.positions[t+i];a<n[i]&&(n[i]=a),a>r[i]&&(r[i]=a)}if(t.length===0||!Number.isFinite(n[0]))throw new sy(`nothing is drawn in it`);return{parts:t,min:n,max:r}}function ly(e){let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=e=>t.getUint32(e,!0),r=e.byteLength,i=e=>{if(e+8>r||n(e)!==0)throw new sy(`no object at ${e}`);let t=n(e+4);if(t>1e5||e+8+t*8>r)throw new sy(`no object at ${e}`);let i=[];for(let r=0;r<t;r++)i.push([n(e+8+r*8),n(e+12+r*8)]);return i},a=(e,t)=>i(e).find(([e])=>e===t)?.[1],o=(e,t)=>i(e).filter(([e])=>e===t).map(([,e])=>e),s=t=>e.subarray(t+8,t+8+n(t)),c=e=>{if(e===void 0)return``;let t=s(e),n=``;for(let e=0;e+1<t.length;e+=2)n+=String.fromCharCode(t[e]|t[e+1]<<8);return n},l=e=>{let t=s(e),n=new Uint8Array(t.length-t.length%4);return n.set(t.subarray(0,n.length)),new Float32Array(n.buffer)},u=e=>{let t=s(e),n=new Uint8Array(t.length-t.length%4);return n.set(t.subarray(0,n.length)),new Uint32Array(n.buffer)},d=[],f=a(0,27);if(f!==void 0)for(let[,e]of i(f)){let t=a(e,8),n=t===void 0?void 0:s(t);d.push(n&&n.length>=3?[n[0],n[1],n[2]]:void 0)}let p=new Map,m=a(0,12);if(m!==void 0)for(let e of o(m,11)){let t=c(a(e,9)),n=[],r=a(e,1);for(let e of r===void 0?[]:o(r,0)){let t=a(e,2),r=a(e,3),i=a(e,28);t!==void 0&&r!==void 0&&n.push({positions:l(t),triangles:u(r),material:i===void 0?0:u(i)[0]??0})}p.set(t,n)}let h=[],g=(e,t)=>{let n=a(e,21),r=fy(t,n===void 0?uy:dy(l(n))),i=c(a(e,9)),s=p.get(c(a(e,19)));for(let e of s??[]){let t=new Float32Array(e.triangles.length*3),n=0;for(let i of e.triangles){let a=e.positions[i*3]??0,o=e.positions[i*3+1]??0,s=e.positions[i*3+2]??0;t[n++]=r[0]*a+r[4]*o+r[8]*s+r[12],t[n++]=r[1]*a+r[5]*o+r[9]*s+r[13],t[n++]=r[2]*a+r[6]*o+r[10]*s+r[14]}let a=d[e.material];h.push({slot:i,positions:t,...a&&{color:a}})}let u=a(e,20);if(u!==void 0)for(let e of o(u,14))g(e,r)},_=a(0,14);return _!==void 0&&g(_,uy),h}var uy=new Float64Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);function dy(e){if(e.length<16)return uy;let t=new Float64Array(e.subarray(0,16)),n=Math.abs(t[12])+Math.abs(t[13])+Math.abs(t[14]);if(Math.abs(t[3])+Math.abs(t[7])+Math.abs(t[11])>0&&n===0){let e=new Float64Array(16);for(let n=0;n<4;n++)for(let r=0;r<4;r++)e[r*4+n]=t[n*4+r];return e}return t}function fy(e,t){let n=new Float64Array(16);for(let r=0;r<4;r++)for(let i=0;i<4;i++){let a=0;for(let n=0;n<4;n++)a+=e[n*4+i]*t[r*4+n];n[r*4+i]=a}return n}function py(e){let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=e=>t.getUint32(e,!0),r=e=>t.getFloat32(e,!0),i=e=>n(e)+n(e+4)*2**32,a=function*(e,n){let r=e;for(;r+10<=n;){let e=t.getUint16(r,!0),a=i(r+2),o=r+10,s=o+a;if(s>n)throw new sy(`a block runs out of its place at ${r}`);yield{id:e,start:o,end:s},r=s}},o=new Map,s=e=>{let t=o.get(e);return t||o.set(e,t=[]),t},c=e=>[r(e),r(e+4),r(e+8)],l=(e,t)=>{for(let n=1;n+1<t.length;n++){let[r,i,a]=[t[0],t[n],t[n+1]];r[0]===i[0]&&r[1]===i[1]&&r[2]===i[2]||i[0]===a[0]&&i[1]===a[1]&&i[2]===a[2]||r[0]===a[0]&&r[1]===a[1]&&r[2]===a[2]||e.push(...r,...i,...a)}},u=(t,r,o)=>{let u=s(t);for(let t of a(r,o))if(t.id===11700||t.id===11600){let e=[],r=[];for(let o of a(t.start,t.end))if(o.id===11710||o.id===11610){let t=i(o.start);e=[];for(let n=0;n<t;n++)e.push(c(o.start+8+n*12))}else if(o.id===11730){let e=n(o.start);r=[];for(let t=0;t<e;t++)r.push(n(o.start+4+t*4))}else if(o.id===11630){let e=i(o.start);r=[];for(let t=0;t<e;t++)r.push(n(o.start+8+t*4))}let o=t.id===11700?4:3;for(let t=0;t+o<=r.length;t+=o){let n=r.slice(t,t+o).map(t=>e[t]).filter(e=>!!e);l(u,n)}}else if(t.id===11400||t.id===11500){let e=t.id===11400?3:4,n=Array.from({length:e},(e,n)=>c(t.start+n*12));l(u,n)}else if(t.id===11300){let r=n(t.start),i=n(t.start+4),a=[e[t.start+8],e[t.start+9]],o=(e,n)=>c(t.start+10+(e*i+n)*12);if(t.start+10+r*i*12>t.end)continue;for(let e=0;e+1<r;e++)for(let t=0;t<i;t++){let n=(t+1)%i;l(u,[o(e,t),o(e,n),o(e+1,n),o(e+1,t)])}a[0]&&l(u,Array.from({length:i},(e,t)=>o(0,t))),a[1]&&l(u,Array.from({length:i},(e,t)=>o(r-1,i-1-t)))}};for(let t of a(32,e.byteLength))if(t.id===1e4)for(let r of a(t.start,t.end)){if(r.id!==11e3)continue;let t=n(r.start),i=``;for(let n=0;n+1<t;n+=2)i+=String.fromCharCode(e[r.start+4+n]|e[r.start+5+n]<<8);u(i,r.start+4+t+8,r.end)}return[...o].filter(([,e])=>e.length>0).map(([e,t])=>({slot:e,positions:new Float32Array(t)}))}var my=new Map,hy=new Set;function gy(e){return hy.add(e),()=>hy.delete(e)}var _y=0,vy=()=>_y,yy=()=>{_y++;for(let e of hy)e()},by=(e,t)=>`${e.toLowerCase()}|${t.map(e=>Math.round(e/50)).join(`,`)}`;async function xy(e,t,n){try{let r=await fetch(`/_promob/piece/${encodeURIComponent(e)}?size=${t.map(Math.round).join(`,`)}`);if(!r.ok)throw Error(`no such piece`);let i=await r.json(),a=await fetch(`/_promob/file/${i.drawing.split(`/`).map(encodeURIComponent).join(`/`)}`);if(!a.ok)throw Error(`no drawing`);let o=oy(cy(new Uint8Array(await a.arrayBuffer())),e=>`${i.parts[e]?.id??``} ${i.parts[e]?.name??``}`,$v.test(`${i.drawing} ${i.name}`));my.set(n,{piece:i,model:o}),yy()}catch{my.set(n,`missing`)}}function Sy(e,t){let n=by(e,t),r=my.get(n);return r===void 0?(my.set(n,`loading`),xy(e,t,n),null):typeof r==`object`?r:null}function Cy(e,t,n,r){return Sy(e,[t,r,n])!==null}var wy=(e,t)=>/(^|_)(luz|lampada)/i.test(`${e?.id??``} ${t}`);function Ty(e,t,n){let r=`${e?.id??``} ${e?.name??``} ${t}`;return wy(e,t)?`lamp`:(e?.transparency??0)>.05||/vidro|glass|cristal|espelh/i.test(r)?`glass`:/branco|white/i.test(r)||n.every(e=>e>=235)?`enamel`:(e?.metallic??0)>0||/inox|metal|a[cç]o|escovad|cromad|cromo|alum[ií]nio|prata|steel|niquel/i.test(r)?`metal`:(.2126*n[0]+.7152*n[1]+.0722*n[2])/255<.22||/borracha|preto|black/i.test(r)?`dark`:`plain`}var Ey=e=>/escovad|inox|metal|alum|cromo|vidro|glass|semitrans|espelh|reflex/i.test(e),Dy=new Map,Oy=new Map,ky=new Kd,Ay=new Map,jy={side:2,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1};function My(e,t,n){let r=e?.color??t??[200,200,200],i=Ty(e,n,r),a=`${i}:${e?.id??`colour:${r.join(`,`)}:${n}`}`,o=Dy.get(a);if(o)return o;let s=new J(r[0]/255,r[1]/255,r[2]/255),c;switch(i){case`lamp`:c=new md({...jy,color:s,roughness:.6,emissive:new J(1,.96,.86),emissiveIntensity:1});break;case`glass`:{let t=s.clone().lerp(new J(.12,.13,.14),.55),n=Math.min(.85,Math.max(.45,e?.transparency??.6));c=new hd({...jy,color:t,roughness:.05,metalness:.1,transparent:!0,opacity:1-n*.7,depthWrite:!1}),c.userData.glass=`#${t.getHexString()}`;break}case`metal`:{let e=new J(.74,.76,.78).lerp(s,.25);c=new md({...jy,color:e,metalness:.55,roughness:.32}),c.userData.render={metalness:.95,roughness:.3};break}case`enamel`:c=new hd({...jy,color:new J(.96,.96,.95),metalness:0,roughness:.25,clearcoat:1,clearcoatRoughness:.08}),c.userData.render={metalness:0,roughness:.14};break;case`dark`:c=new md({...jy,color:s,metalness:.05,roughness:.42});break;default:{let t=e?.roughness===void 0?.6:Math.min(1,Math.max(.12,e.roughness+.2));c=new md({...jy,color:s,roughness:t,metalness:0})}}let l=e?.picture;if(l&&i!==`lamp`&&(i!==`metal`&&i!==`glass`||!Ey(l))){let e=`/_promob/file/${l.split(`/`).map(encodeURIComponent).join(`/`)}`,t=e=>{c.map=e,c.color.set(16777215),c.needsUpdate=!0},n=Oy.get(e);if(n?.image)t(n);else if(n)Ay.get(e)?.push(t);else{let n=ky.load(e,()=>{for(let t of Ay.get(e)??[])t(n);Ay.delete(e),yy()});n.colorSpace=aa,n.wrapS=n.wrapT=Ir,n.anisotropy=8,Oy.set(e,n),Ay.set(e,[t])}}return Dy.set(a,c),c}function Ny(e,t){let n=e.getAttribute(`position`),r=e.getIndex(),i=r?r.count:n.count,a=e=>r?r.getX(e):e,o=Math.cos(t*Math.PI/180),s=e=>new K().fromBufferAttribute(n,e),c=e=>`${Math.round(e.x*20)},${Math.round(e.y*20)},${Math.round(e.z*20)}`,l=new Map;for(let e=0;e+2<i;e+=3){let t=[s(a(e)),s(a(e+1)),s(a(e+2))],n=new _s(...t).getNormal(new K);if(n.lengthSq()!==0)for(let e=0;e<3;e++){let r=t[e],i=t[(e+1)%3],[a,s]=[c(r),c(i)];if(a===s)continue;let u=a<s?`${a}|${s}`:`${s}|${a}`,d=l.get(u);d?(d.faces++,d.faces===2&&d.normal.dot(n)<=o&&(d.fold=!0)):l.set(u,{a:r,b:i,normal:n,faces:1,fold:!1})}}let u=[];for(let{a:e,b:t,faces:n,fold:r}of l.values())n===2&&r&&u.push(e.x,e.y,e.z,t.x,t.y,t.z);let d=new tc;return d.setAttribute(`position`,new Y(u,3)),d}function Py(e,t,n,r,i,a){let o=Sy(e,[t,r,n]);if(!o)return null;let{model:s,piece:c}=o,[l,u,d]=s.min,[f,p,m]=s.max,h=Math.max(f-l,1),g=Math.max(p-u,1),_=Math.max(m-d,1),v=Math.abs(Math.log(h/Math.max(t,1)))+Math.abs(Math.log(g/Math.max(n,1))),y=Math.abs(Math.log(g/Math.max(t,1)))+Math.abs(Math.log(h/Math.max(n,1)))+.05<v,b=(e,i,a)=>y?[(p-i)*t/g,(e-l)*n/h,(a-d)*r/_]:[(e-l)*t/h,(i-u)*n/g,(a-d)*r/_],x=new Yo;x.userData.promob=c.code;let S=new Map;for(let e of s.parts){let t=c.parts[e.slot],n=a&&/tela|screen/i.test(e.slot)?T_(a):null,r=n??My(t,e.color,e.slot),i=S.get(r);i||(i={look:r,material:t,shown:n!==null,positions:[]},S.set(r,i));for(let t=0;t<e.positions.length;t+=3)i.positions.push(...b(e.positions[t],e.positions[t+1],e.positions[t+2]))}for(let{look:e,material:t,shown:n,positions:r}of S.values()){let a=new tc;a.setAttribute(`position`,new Y(r,3)),a=Kv(a,Math.PI/5),n?Fy(a,void 0):t?.picture&&Fy(a,t.size);let o=new X(a,e);if(o.userData.ownsGeometry=!0,e.userData.glass&&(o.userData.glass=e.userData.glass),x.add(o),!e.transparent&&!n){let e=Ny(a,50);if(e.getAttribute(`position`).count>0){let t=new ll(e,i.edge);t.userData.ownsGeometry=!0,t.raycast=()=>{},x.add(t)}else e.dispose()}}return x}function Fy(e,t){let n=e.getAttribute(`position`),r=e.getAttribute(`normal`),i=new Float32Array(n.count*2),a=!t||t[0]<=1||t[1]<=1,o=new vs().setFromBufferAttribute(n),s=o.getSize(new K);for(let e=0;e<n.count;e++){let c=n.getX(e),l=n.getY(e),u=n.getZ(e),d=Math.abs(r.getX(e)),f=Math.abs(r.getY(e)),p=Math.abs(r.getZ(e)),m,h,g,_;p>=d&&p>=f?[m,h,g,_]=[c-o.min.x,l-o.min.y,s.x,s.y]:f>=d?[m,h,g,_]=[c-o.min.x,u-o.min.z,s.x,s.z]:[m,h,g,_]=[l-o.min.y,u-o.min.z,s.y,s.z],i[e*2]=a?m/Math.max(g,1):m/t[0],i[e*2+1]=a?h/Math.max(_,1):h/t[1]}e.setAttribute(`uv`,new Vs(i,2))}var Iy={width:60,thickness:12,overlap:15};function Ly(e){return e.type===`door`&&e.operation===`hinged`?Iy.width-Iy.overlap:0}var Ry=.01;function zy(e){return{from:e.offset,to:e.offset+e.width,bottom:e.sill,top:e.sill+e.height,...e.depth!==void 0&&{depth:e.depth,rear:e.swing===`back`}}}function By(e,t){return e.filter(e=>e.depth===void 0&&e.bottom<=1).map(e=>({...e,top:t}))}function Vy(e,t){let n=[0,t,...e.map(e=>Math.min(Math.max(e,0),t))].sort((e,t)=>e-t);return n.filter((e,t)=>t===0||e-(n[t-1]??0)>Ry)}function Hy(e,t,n){let r=lt(e),i=O(e),a=M(i),o=Vy(n.flatMap(e=>[e.from,e.to]),r),s=Vy(n.flatMap(e=>[e.bottom,e.top]),e.height),c=me(F(t[3],e.start),i),l=me(F(t[2],e.start),i),u=me(F(t[0],e.start),i),d=me(F(t[1],e.start),i),f=(e.endHeight??e.height)-e.height,p=(t,r)=>{if(t<0||r<0||t>=o.length-1||r>=s.length-1)return null;let i=((o[t]??0)+(o[t+1]??0))/2,a=((s[r]??0)+(s[r+1]??0))/2,c=0,l=e.thickness;for(let t of n)if(i>t.from&&i<t.to&&a>t.bottom&&a<t.top){if(t.depth===void 0)return null;t.rear?l=Math.min(l,e.thickness-t.depth):c=Math.max(c,t.depth)}return l-c>Ry?[c,l]:null},m=(e,t)=>{if(!t)return[e];let n=[];return t[0]>e[0]+Ry&&n.push([e[0],Math.min(e[1],t[0])]),t[1]<e[1]-Ry&&n.push([Math.max(e[0],t[1]),e[1]]),n},h=(t,n,p)=>{let m=o[t]??0,h=n>=e.thickness-Ry,g=n<=Ry,_=t===0,v=t===o.length-1,y=h?_?c:v?l:m:g?_?u:v?d:m:m,b=Qe(e.start,Qe(Ae(i,y),Ae(a,n))),x=f!==0&&p===s.length-1?Math.max(e.height+f*Math.min(Math.max(y/r,0),1),(s[p-1]??0)+1):s[p]??0;return new K(b.x,b.y,x)},g=[],_=[],v=[],y=(e,t,n)=>{let[r,i,a,o]=e;if(!r||!i||!a||!o)return;let s=new K().subVectors(i,r).cross(new K().subVectors(o,r)).normalize(),c=s.dot(t)<0;c&&s.negate();for(let e of c?[r,a,i,r,o,a]:[r,i,a,r,a,o])g.push(e.x,e.y,e.z),_.push(s.x,s.y,s.z),n?v.push(e.x*n.x+e.y*n.y,e.z):v.push(e.x,e.y)},b=new K(-a.x,-a.y,0),x=new K(a.x,a.y,0),S=new K(i.x,i.y,0),C=S.clone().negate(),w=new K(0,0,1),T=new K(0,0,-1);for(let e=0;e<o.length-1;e++)for(let t=0;t<s.length-1;t++){let n=p(e,t);if(!n)continue;let[r,o]=n;y([h(e,r,t),h(e+1,r,t),h(e+1,r,t+1),h(e,r,t+1)],b,i),y([h(e,o,t),h(e+1,o,t),h(e+1,o,t+1),h(e,o,t+1)],x,i);for(let[r,i]of m(n,p(e,t+1)))y([h(e,r,t+1),h(e+1,r,t+1),h(e+1,i,t+1),h(e,i,t+1)],w,null);for(let[r,i]of m(n,p(e,t-1)))y([h(e,r,t),h(e+1,r,t),h(e+1,i,t),h(e,i,t)],T,null);for(let[r,i]of m(n,p(e-1,t)))y([h(e,r,t),h(e,i,t),h(e,i,t+1),h(e,r,t+1)],C,a);for(let[r,i]of m(n,p(e+1,t)))y([h(e+1,r,t),h(e+1,i,t),h(e+1,i,t+1),h(e+1,r,t+1)],S,a)}let E=new tc;return E.setAttribute(`position`,new Y(g,3)),E.setAttribute(`normal`,new Y(_,3)),E.setAttribute(`uv`,new Y(v,2)),E}function Uy(e,t,n,r,i){let a=e=>t-r*e,o=e=>n+i*e,s=[],c=[],l=[],u=(e,t,n,r,i,a,o)=>{let u=new K().subVectors(t,e).cross(new K().subVectors(n,e));if(u.lengthSq()<1e-12)return;u.normalize();let d=u.dot(o)<0,[f,p,m]=d?[e,n,t]:[e,t,n],[h,g,_]=d?[r,a,i]:[r,i,a];d&&u.negate();for(let[e,t]of[[f,h],[p,g],[m,_]])s.push(e.x,e.y,e.z),c.push(u.x,u.y,u.z),l.push(t.x,t.y)},d=e.reduce((t,n,r)=>{let i=e[(r+1)%e.length]??n;return t+(n.x*i.y-i.x*n.y)/2},0),f=0;e.forEach((t,n)=>{let r=e[(n+1)%e.length]??t,i=Math.hypot(r.x-t.x,r.y-t.y);if(i<1e-6)return;let s=d>=0?1:-1,c=new K(0,-s*(r.y-t.y),-s*(r.x-t.x)).normalize(),l=(e,t)=>new K(t,0-e.x,e.y),[p,m,h,g]=[l(t,a(t.x)),l(t,o(t.x)),l(r,o(r.x)),l(r,a(r.x))],[_,v,y,b]=[{x:p.x,y:f},{x:m.x,y:f},{x:h.x,y:f+i},{x:g.x,y:f+i}];u(p,m,h,_,v,y,c),u(p,h,g,_,y,b,c),f+=i});let p=e.map(e=>new G(e.x,e.y)),m=Wu.triangulateShape(p,[]);for(let[t,n,s]of[[r,a,new K(-1,r,0)],[i,o,new K(1,i,0)]])for(let[t,r,i]of m){let[a,o,c]=[e[t],e[r],e[i]];if(!a||!o||!c)continue;let l=e=>new K(n(e.x),0-e.x,e.y);u(l(a),l(o),l(c),{x:0-a.x,y:a.y},{x:0-o.x,y:o.y},{x:0-c.x,y:c.y},s)}let h=new tc;return h.setAttribute(`position`,new Y(s,3)),h.setAttribute(`normal`,new Y(c,3)),h.setAttribute(`uv`,new Y(l,2)),h}function Wy(e,t,n){return[{x:0,y:0},...e.map(e=>({x:e.x*n,y:e.y*t}))]}function Gy(e,t,n,r){return[{x:0,y:r},...e.map(e=>({x:e.x*n,y:r-e.y*t}))]}var Ky=.5,qy={polygonOffset:!0,polygonOffsetFactor:Ky,polygonOffsetUnits:1},Jy=4e-6;function Yy(e){return e.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <project_vertex>`,`#include <project_vertex>\n\tgl_Position.z -= ${Jy.toFixed(7)} * gl_Position.w;`)},e}var Xy={background:15264751,floor:`#ece7dd`,floorJoint:`#dcd5c8`,floorEdge:12564650,riser:14077890,wall:14999768,wallSelected:12899574,wallOffered:13625814,wallPointed:8834973,edge:4936801,edgeFaint:9279139,edgeSelected:2382294,denied:13121325,metal:11120309,steel:13225683},Zy=600;function Qy(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t&&(t.fillStyle=Xy.floorJoint,t.fillRect(0,0,128,128),t.fillStyle=Xy.floor,t.fillRect(1,1,126,126));let n=new yl(e);return n.colorSpace=aa,n.wrapS=n.wrapT=Ir,n.repeat.set(1/Zy,1/Zy),n.anisotropy=8,n}var $y=class{unitBox=new Cl(1,1,1);unitEdges=new Ml(this.unitBox);#e=new Map;boxLaidOut(e){let t=e.join(``),n=this.#e.get(t);if(!n){n=new tc;for(let[e,t]of Object.entries(this.unitBox.attributes))n.setAttribute(e,t);n.setIndex(this.unitBox.index),sb(n,e),this.#e.set(t,n)}return n}edge=Yy(new Zc({color:Xy.edge}));edgeSelected=Yy(new Zc({color:Xy.edgeSelected}));edgeFaint=new Zc({color:Xy.edgeFaint,transparent:!0,opacity:.55});edgeDenied=new Zc({color:Xy.denied});wall=new md({color:Xy.wall,roughness:.95,...qy});wallSelected=new md({color:Xy.wallSelected,roughness:.95,...qy});unseen=new Mc({transparent:!0,opacity:0,depthWrite:!1});wallOffered=new md({color:Xy.wallOffered,roughness:.95,...qy});wallPointed=new md({color:Xy.wallPointed,roughness:.95,...qy});wallGhost=new md({color:Xy.wall,roughness:.95,transparent:!0,opacity:.16,depthWrite:!1});wallGhostSelected=new md({color:Xy.edgeSelected,roughness:.95,transparent:!0,opacity:.22,depthWrite:!1});metal=new md({color:Xy.metal,roughness:.35,metalness:.5});steel=new md({color:Xy.steel,roughness:.3,metalness:.35});aluminium=new md({color:11843773,roughness:.42,metalness:.65});#t=new Map;pull(e){let t=this.#t.get(e);if(!t){let n=Yn[e];t=new md({color:n.color,roughness:n.roughness,metalness:n.metalness}),this.#t.set(e,t)}return t}epoxy=new md({color:15856110,roughness:.55,metalness:.1});nylon=new md({color:9146262,roughness:.7});hob=new md({color:921361,roughness:.12,metalness:.2});burner=new md({color:3816770,roughness:.6,metalness:.4});iron=new md({color:1776670,roughness:.85,metalness:.2});raw=new md({color:9070408,roughness:.95});ghost=new Mc({color:Xy.edgeSelected,transparent:!0,opacity:.22,depthWrite:!1});ghostDenied=new Mc({color:Xy.denied,transparent:!0,opacity:.2,depthWrite:!1});guide=new bd({color:Xy.edgeSelected,dashSize:90,gapSize:70});glass=new md({color:12179172,roughness:.08,metalness:.1,transparent:!0,opacity:.34,depthWrite:!1});floorEdge=new Zc({color:Xy.floorEdge});riser=new md({color:Xy.riser,roughness:.95});#n=Qy();floor=new md({map:this.#n,roughness:.95,polygonOffset:!0,polygonOffsetFactor:2*Ky,polygonOffsetUnits:2});#r=new Map;#i=new Map;#a=new Map;onArrival=null;#o=1;setDepthShare(e){let t=Math.min(1,Math.max(.02,e));if(!(Math.abs(t-this.#o)<.01)){this.#o=t;for(let e of this.#r.values())e.polygonOffsetFactor=e.userData.depth*Ky*t;for(let e of[this.wall,this.wallSelected,this.wallOffered,this.wallPointed])e.polygonOffsetFactor=Ky*t;this.floor.polygonOffsetFactor=2*Ky*t}}surface(e,t=.8,n=1,r=!1){let i=typeof e==`string`?{color:e}:e,{color:a,texture:o}=i;if(o===`glass`){let e=`glass|${a}`,t=this.#r.get(e);if(t)return t;let n=new md({color:a,roughness:.05,metalness:.1,transparent:!0,opacity:.3,depthWrite:!1,side:2});return this.#r.set(e,n),n}let s=Wn(o),c=s!==null&&(r&&s.upright===!0)!==(i.turned===!0),l=`${a}|${s?o:t}|${n}|${c}`,u=this.#r.get(l);if(u)return u;let d=new md({color:a,roughness:s?.roughness??t,polygonOffset:!0,polygonOffsetFactor:n*Ky*this.#o,polygonOffsetUnits:n});return d.userData.depth=n,d.userData.patterned=s!==null,s&&(this.#s(i,s,e=>{d.map=this.#u(e,s,c),d.color.set(16777215),d.needsUpdate=!0}),s.relief&&this.#c(s.relief,s,``,e=>{d.normalMap=this.#u(e,s,c),d.needsUpdate=!0})),this.#r.set(l,d),d}wallOf(e){return e?this.surface(e,.95,1,!0):this.wall}floorOf(e,t=!1){return e?this.surface(e,.95,2,t):this.floor}#s(e,t,n){if(t.image){this.#c(t.image,t,aa,n);return}let r=`${e.texture}|${e.color}`,i=this.#i.get(r);if(i){n(i);return}let a=Gn(e);a&&n(this.#l(new yl(a),r,t,aa))}#c(e,t,n,r){let i=this.#i.get(e);if(i){r(i);return}let a=this.#a.get(e);a?a.push(r):(this.#a.set(e,[r]),(r=>{new Kd().load(r,r=>{this.#l(r,e,t,n);for(let t of this.#a.get(e)??[])t(r);this.#a.delete(e),this.onArrival?.()})})(e))}#l(e,t,n,r){return e.name=t,e.colorSpace=r,e.wrapS=e.wrapT=n.image&&!n.seamless?Rr:Ir,e.repeat.set(1/n.width,1/n.height),e.anisotropy=16,this.#i.set(t,e),e}#u(e,t,n){if(n===(t.runs===`up`))return e;let r=`${e.name}|turned`,i=this.#i.get(r);return i||(i=e.clone(),i.rotation=Math.PI/2,i.needsUpdate=!0,this.#i.set(r,i)),i}dispose(){this.unitBox.dispose();for(let e of this.#e.values())e.dispose();this.unitEdges.dispose(),this.#n.dispose();for(let e of this.#i.values())e.dispose();for(let e of[this.edge,this.edgeSelected,this.edgeFaint,this.edgeDenied,this.wall,this.wallSelected,this.unseen,this.wallOffered,this.wallPointed,this.wallGhost,this.wallGhostSelected,this.metal,this.steel,this.ghost,this.ghostDenied,this.guide,this.glass,this.floorEdge,this.riser,this.floor,...this.#r.values(),...this.#t.values()])e.dispose()}};function eb(e){e.traverse(e=>{e.userData.ownsGeometry&&e.geometry.dispose();for(let t of e.userData.spare??[])t.dispose()})}function tb(e,t,n,r){let i=new ll(t,n.edge);return i.userData.ownsGeometry=r,i.raycast=()=>{},e.add(i),e}function nb(e,t,n,r,i){let a=n.unitBox.clone(),{position:o,normal:s,uv:c}=a.attributes;if(!o||!s||!c)return a;let l=e.toArray(),u=r===`level`,d=r&&!u?[`x`,`y`,`z`].indexOf(r):-1;for(let e=0;e<o.count;e++){let n=[o.getX(e),o.getY(e),o.getZ(e)],r=[s.getX(e),s.getY(e),s.getZ(e)].findIndex(e=>Math.abs(e)>.5),[a=0,f=1]=[0,1,2].filter(e=>e!==r),[p,m]=u&&r!==2||d===a||d!==f&&(l[a]??0)>=(l[f]??0)?[a,f]:[f,a],h=i?i.toArray():[0,0,0];c.setXY(e,((n[p]??0)+.5)*(l[p]??0)+(h[p]??0)+t,((n[m]??0)+.5)*(l[m]??0)+(h[m]??0)+t*.37)}return a}var rb={x:0,y:2,z:4},ib=`#b9a07e`;function ab(e,t,n){let r=[...new Set(t)];if(r.length===1){e.material=r[0];return}let i=t.map(e=>r.indexOf(e));e.geometry===n.unitBox?e.geometry=n.boxLaidOut(i):sb(e.geometry,i),e.material=r}function ob(e,t,n,r,i){let a=e.geometry.getAttribute(`position`);if(!a||e.geometry.index)return;let o=a.count/3,s=e=>{let[i,o,s]=[0,1,2].map(t=>new K().fromBufferAttribute(a,e*3+t)),c=new K().subVectors(o,i).cross(new K().subVectors(s,i)).normalize();if(Math.abs(c.z)>.9)return(i.z+o.z+s.z)/3>r/2?`top`:`bottom`;let l={x:(i.x+o.x+s.x)/3,y:(i.y+o.y+s.y)/3},u=(e,t)=>{let n=F(t,e),r=Math.min(Math.max(me(F(l,e),n)/Math.max(me(n,n),1e-9),0),1);return fe(l,Qe(e,Ae(n,r)))};if(n.some(e=>e.some((t,n)=>u(t,e[(n+1)%e.length])<2)))return``;let d=`0`,f=1/0;return t.forEach((e,n)=>{let r=u(e,t[(n+1)%t.length]);r<f&&(f=r,d=String(n))}),d},c=Array.from({length:o},(e,t)=>s(t)),l=[],u=c.map(e=>{let t=i(e===``?`hole`:e),n=l.indexOf(t);return n<0&&(n=l.push(t)-1),n}),d=[];e.geometry.clearGroups(),l.forEach((t,n)=>{let r=d.length;u.forEach((e,t)=>{e===n&&d.push(t*3,t*3+1,t*3+2)}),e.geometry.addGroup(r,d.length-r,n)}),e.geometry.setIndex(d),e.material=l}function sb(e,t){let n=e.index;if(!n)return;let r=Array.from(n.array),i=[];e.clearGroups();for(let n=0;n<=Math.max(...t);n++){let a=i.length;t.forEach((e,t)=>{e===n&&i.push(...r.slice(t*6,t*6+6))}),i.length>a&&e.addGroup(a,i.length-a,n)}e.setIndex(i)}function cb(e,t,n,r=!0,i,a){let{min:o,max:s}=e,c=new K(s.x-o.x,s.y-o.y,s.z-o.z),l=t.userData.patterned===!0,u=new X(l?a===void 0?nb(c,o.x*7.3+o.y*3.1+o.z*5.7,n,i):nb(c,a,n,i,new K(o.x,o.y,o.z)):n.unitBox,t);return u.userData.ownsGeometry=l,u.position.set((o.x+s.x)/2,(o.y+s.y)/2,(o.z+s.z)/2),u.scale.copy(c),r?tb(u,n.unitEdges,n,!1):u}var lb={generateTopUV:(e,t,...n)=>n.map(e=>new G(t[e*3],t[e*3+1])),generateSideWallUV(e,t,n,r,i,a){let o=new G((t[r*3]??0)-(t[n*3]??0),(t[r*3+1]??0)-(t[n*3+1]??0)).normalize();return[n,r,i,a].map(e=>new G((t[e*3]??0)*o.x+(t[e*3+1]??0)*o.y,t[e*3+2]))}};function ub(e,t=[]){let n=e=>e.map(e=>new G(e.x,e.y)),r=new lu(n(e));for(let e of t)r.holes.push(new cu(n(e)));return r}function db(e,t){let n=e.children.find(e=>e instanceof ll);if(!n)return;let r=n.geometry.getAttribute(`position`),i=[],a=new K,o=new K;for(let e=0;e+1<r.count;e+=2)a.fromBufferAttribute(r,e),o.fromBufferAttribute(r,e+1),t(a,o)||i.push(a.x,a.y,a.z,o.x,o.y,o.z);n.geometry.dispose(),n.geometry=new tc().setAttribute(`position`,new Y(i,3))}function fb(e,t,n,r,i,a=[]){let o=new qu(ub(e,a),{depth:n-t,bevelEnabled:!1,UVGenerator:lb}),s=new X(o,r);return s.position.z=t,s.userData.ownsGeometry=!0,tb(s,new Ml(o,e.length>12||a.some(e=>e.length>12)?25:1),i,!0)}function pb(e,t,n,r){let i=ye(t.rotation),a=Qe(t.anchor,Ae(Oe(i),n));e.position.set(a.x,a.y,r),e.rotation.set(0,0,Ja.degToRad(t.rotation))}function mb(e,t,n){let{pose:r,base:i}=Me(t,n);pb(e,r,n.depth,i)}function hb(e,t,n){let r=be(t,st(e,`wall`)),i=qe(t,r),a=ft(e,t.id).map(zy),o=Hy(t,i,a),s=new X(o,n.wallOf(t.finish));s.userData.ownsGeometry=!0,tb(s,Cb(new Ml(o),t,r,i),n,!0);let c=By(a,t.height);if(c.length!==a.length||a.some((e,t)=>e.top!==c[t]?.top)){let e=Hy(t,i,c),n={whole:[o,s.children[0].geometry],kerb:[e,Cb(new Ml(e),t,r,i)]};s.userData.forms=n,s.userData.spare=[...n.whole,...n.kerb]}let l=xb(e,t,a,n);l&&s.add(l);let u=yb(e,t,n);return u&&s.add(u),s}function gb(e,t,n){let r=[],i=e;for(let[e,a]of[...n].sort((e,t)=>e[0]-t[0]))e>i&&r.push([i,Math.min(e,t)]),i=Math.max(i,a);return i<t&&r.push([i,t]),r}function _b(e,t,n){let r=We(e,t),i=be(e,n),[a,o]=t===`front`?[i.atStart,i.atEnd]:[i.atEnd,i.atStart],[s,c]=t===`front`?[e.start,e.end]:[e.end,e.start],l=(e,t,n)=>{if(!e)return 0;let[i,a]=Math.hypot(e.start.x-t.x,e.start.y-t.y)<=Math.hypot(e.end.x-t.x,e.end.y-t.y)?[e.start,e.end]:[e.end,e.start],o=Math.hypot(a.x-i.x,a.y-i.y)||1,s=((a.x-i.x)*r.normal.x+(a.y-i.y)*r.normal.y)/o;return s>.1?-1:s<-.1?n:0};return{start:l(a,s,1),end:l(o,c,1)}}function vb(e,t){for(let n of st(e,`floor`))if((n.storey??0)===0&&n.elevation===0&&P(t,gt(n.outline)))return n.finish;return Ke(e).floorFinish}function yb(e,t,n){let r=Ke(e).trim;if(!r)return null;let i={...r.baseboard&&!t.bare?.baseboard&&{baseboard:r.baseboard},...r.crown&&!t.bare?.crown&&{crown:r.crown}};if(!i.baseboard&&!i.crown)return null;let a=st(e,`wall`),o=new Yo;o.userData.bands=!0;let s=lt(t);for(let r of[`front`,`back`]){let c=We(t,r),l={x:c.origin.x+c.direction.x*(c.length/2)+c.normal.x*150,y:c.origin.y+c.direction.y*(c.length/2)+c.normal.y*150};if(!Be(e,t,r))continue;let u=new Yo;u.position.set(c.origin.x,c.origin.y,0),u.rotation.z=Math.atan2(c.direction.y,c.direction.x);let d=_b(t,r,a),f=(e,t,n,r,i)=>{if(n-t<5)return;let a=new X(Uy(r,t,n,t<=.5?d.start:0,n>=c.length-.5?d.end:0),i);a.userData.ownsGeometry=!0,a.castShadow=!0,a.receiveShadow=!0,a.userData.moulding=e,u.add(a)},{baseboard:p,crown:m}=i,h=Sn(e,t,r,i),g=e=>e.map(e=>[e.from,e.to]),_=e=>{let n=t.spans?.[e];if(!n)return null;let[i,a]=r===`front`?[n.from,n.to]:[s-n.to,s-n.from];return[Math.max(i,0),Math.min(a,c.length)]};if(p){let i=ft(e,t.id).filter(e=>e.depth===void 0&&e.sill<=5).map(e=>{let t=Ly(e),[n,i]=[e.offset-t,e.offset+e.width+t];return r===`front`?[n,i]:[s-i,s-n]}),a=p.material===`floor`?n.floorOf(vb(e,l)):n.surface(p.color,.6),o=Wy(se(p.profile,et,Ze),p.height,p.thickness),u=_(`baseboard`),d=u?gb(u[0],u[1],i):gb(0,c.length,[...i,...g(h.baseboard)]);for(let[e,t]of d)f(`baseboard`,e,t,o,a)}if(m){let e=n.surface(m.color,.85),r=Math.min(t.height,t.endHeight??t.height),i=Gy(se(m.profile,j,pe),m.height,m.depth,r),a=_(`crown`);for(let[t,n]of a?[a]:gb(0,c.length,g(h.crown)))f(`crown`,t,n,i,e)}u.children.length>0&&o.add(u)}return o.children.length>0?o:null}var bb={first:2.5,each:1.5};function xb(e,t,n,r){if(!t.bands?.length)return null;let i=new Yo;i.userData.bands=!0;let a=lt(t),o=n.filter(e=>e.depth===void 0),s=n=>st(e,`cabinet`).flatMap(r=>{let{placement:i}=r;if(i.kind!==`wall`||i.wallId!==t.id||i.side!==n||r.back===`none`&&!r.block)return[];let a=ve(e,r);return[{from:i.offset,to:i.offset+r.width,bottom:a,top:a+r.height}]});return t.bands.forEach((e,n)=>{let c=We(t,e.side),l=[...o.map(t=>e.side===`front`?t:{...t,from:a-t.to,to:a-t.from}),...s(e.side)],u=(e,t,n)=>[...new Set([t,n,...e.filter(e=>e>t&&e<n)])].sort((e,t)=>e-t),d=u(l.flatMap(e=>[e.from,e.to]),e.from,e.to),f=u(l.flatMap(e=>[e.bottom,e.top]),e.bottom,e.top),p=-(bb.first+n*bb.each),m=[],h=[];for(let e=0;e<d.length-1;e++)for(let t=0;t<f.length-1;t++){let[n,r,i,a]=[d[e]??0,d[e+1]??0,f[t]??0,f[t+1]??0],[o,s]=[(n+r)/2,(i+a)/2];if(!l.some(e=>o>e.from&&o<e.to&&s>e.bottom&&s<e.top))for(let[e,t]of[[n,i],[r,i],[r,a],[n,i],[r,a],[n,a]])m.push(e,p,t),h.push(e,t)}if(m.length===0)return;let g=new tc;g.setAttribute(`position`,new Y(m,3)),g.setAttribute(`uv`,new Y(h,2)),g.computeVertexNormals();let _=new X(g,r.surface(e.finish,.95,-2,!0));_.userData.ownsGeometry=!0,_.userData.band=e.id,_.position.set(c.origin.x,c.origin.y,0),_.rotation.z=Math.atan2(c.direction.y,c.direction.x),i.add(_)}),i}var Sb={least:.5,most:28};function Cb(e,t,n,r){let i=Se(F(t.end,t.start)),a=e=>{if(!e)return!1;let t=Math.abs(Ye(i,Se(F(e.end,e.start)))),n=Ja.radToDeg(Math.asin(Math.min(t,1)));return me(i,F(e.end,e.start))>0&&n>=Sb.least&&n<=Sb.most},o=[];a(n.atStart)&&o.push([r[0],r[3]]),a(n.atEnd)&&o.push([r[1],r[2]]);let s=e.getAttribute(`position`);if(o.length===0||!s)return e;let c=(e,t)=>o.some(([n,r])=>{let i=F(r,n),a=le(i)||1;return Math.abs(Ye(i,F({x:e,y:t},n)))/a<.5}),l=[];for(let e=0;e<s.count;e+=2){let t=[s.getX(e),s.getY(e),s.getZ(e)],n=[s.getX(e+1),s.getY(e+1),s.getZ(e+1)];c(t[0],t[1])&&c(n[0],n[1])||l.push(...t,...n)}return e.setAttribute(`position`,new Y(l,3)),e}function wb(e){let{geometry:t}=e,n=e.scale.z,{position:r,normal:i,uv:a}=t.attributes;if(r&&i&&a&&(t.userData.squash??1)!==n){for(let e=0;e<r.count;e++)Math.abs(i.getZ(e))<.5&&a.setY(e,r.getZ(e)*n);a.needsUpdate=!0,t.userData.squash=n}}function Tb(e,t){let n=e.userData.forms;n&&e.geometry!==n[t][0]&&([e.geometry,e.children[0].geometry]=n[t])}function Eb(e,t,n){let r=e.map(e=>e.x),i=e.map(e=>e.y),a=Math.max(...i)-Math.min(...i)>Math.max(...r)-Math.min(...r),o=new X(new $u(ub(e)),t.floorOf(n,a));o.userData.ownsGeometry=!0;let s=new ul(new tc().setFromPoints(e.map(e=>new K(e.x,e.y,1))),t.floorEdge);return s.userData.ownsGeometry=!0,o.add(s),o}function Db(e,t){let n=gt(e.outline);Wu.isClockWise(n.map(e=>new G(e.x,e.y)))&&n.reverse();let r=n.map(e=>new G(e.x,e.y)),i=n.map(t=>new K(t.x,t.y,V(e,t))),a=[],o=[],s=(...e)=>{for(let t of e)t&&(a.push(t.x,t.y,t.z),o.push(t.x,t.y))};for(let[e,t,n]of Wu.triangulateShape(r,[]))e!==void 0&&t!==void 0&&n!==void 0&&s(i[e],i[t],i[n]);let c=a.length/3;n.forEach((e,t)=>{let r=(t+1)%n.length,a=new K(e.x,e.y,0),o=new K(n[r]?.x,n[r]?.y,0);s(a,o,i[r],a,i[r],i[t])});let l=new tc;l.setAttribute(`position`,new Y(a,3)),l.setAttribute(`uv`,new Y(o,2)),l.addGroup(0,c,0),l.addGroup(c,a.length/3-c,1),l.computeVertexNormals();let u=new X(l,[t.floorOf(e.finish),t.riser]);return u.userData.ownsGeometry=!0,tb(u,new Ml(l),t,!0)}function Ob(e,t){let n=Ee(e);return n.length===0?[Db(e,t)]:n.map(n=>{let r=new qu(ub(n.outline),{depth:n.height,bevelEnabled:!1}),i=new X(r,[t.floorOf(e.finish),t.riser]);return i.userData.ownsGeometry=!0,tb(i,new Ml(r),t,!0)})}var kb={carcass:`materialId`,front:`frontMaterialId`,back:`backMaterialId`};function Ab(e,t,n){let r=new Yo;mb(r,e,t);let i=new Map,a=ue(e,t),o=e=>{let t=i.get(e.key);if(t)return t;let n=new Yo;n.userData.motion=e,e.kind===`swing`&&n.position.set(e.pivot.x,e.pivot.y,0),e.kind===`tilt`&&n.position.set(0,e.y,e.z),i.set(e.key,n);let s=e.kind===`swing`&&e.on?a.find(t=>t.motion?.key===e.on)?.motion:void 0;return s?.kind===`swing`?(n.position.x-=s.pivot.x,n.position.y-=s.pivot.y,o(s).add(n)):r.add(n),n.userData.home=n.position.clone(),n},s=(e,t)=>{if(!t){r.add(e);return}let n=o(t);t.kind===`swing`?(e.position.x-=t.pivot.x,e.position.y-=t.pivot.y):t.kind===`tilt`&&(e.position.y-=t.y,e.position.z-=t.z),n.add(e)};if(t.block){let e={min:{x:0,y:0,z:0},max:{x:t.width,y:t.depth,z:t.height}},{outline:i,holes:a}=t.block,o=t.source?.program===`promob`&&!i&&!a&&!/^(geometria|parede|luz)$/i.test(t.source.code)?t.source.code:null,s=o?Py(o,t.width,t.depth,t.height,n,t.block.screen):null;if(s)r.add(s);else if(t.block.appliance)r.add(vv(t.block.appliance,t.width,t.depth,t.height,n,t.block.screen));else if(t.block.linear){let{path:e,section:i}=t.block.linear,a=i.map(e=>e.y),[o,s]=[Math.min(...a),Math.max(...a)],c=s-o>1e-6?t.height/(s-o):1,l=i.map(e=>({...e,y:(e.y-o)*c})),u=new X(dg(e.map(e=>({x:e.x*t.width,y:e.y*t.depth})),l),n.wallOf(t.block.finish));u.userData.ownsGeometry=!0,r.add(tb(u,new Ml(u.geometry,25),n,!0))}else if(t.block.profile&&t.block.profile.sides.length>0){let e=new X(ug(_r(t),t.block.profile,t.height),n.wallOf(t.block.finish));e.userData.ownsGeometry=!0,r.add(tb(e,new Ml(e.geometry,25),n,!0))}else if(i||a){let e=e=>e.map(e=>({x:e.x*t.width,y:e.y*t.depth})),o=fb(i?re(i,t.width,t.depth):e([{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:0,y:1}]),0,t.height,n.wallOf(t.block.finish),n,(a??[]).map(e)),s=t.block.faces;s&&ob(o,_r(t),(a??[]).map(e),t.height,e=>n.wallOf(s[e]??t.block?.finish)),r.add(o)}else{let i=t.block.faces,a=[`1`,`3`,`2`,`0`,`top`,`bottom`].map(e=>n.wallOf(i?.[e]??t.block?.finish)),o=cb(e,a.find(e=>e.userData.patterned===!0)??n.wallOf(t.block.finish),n,!0,`level`);i&&ab(o,a,n),r.add(o)}}for(let r of a){let i=rt(e,r.materialId,`material`),{box:a,outline:o,grain:c}=r,l=n.surface(i?o&&c===`y`?{...i,turned:!0}:i:`#ffffff`),u=r.notch&&!o&&!r.glazed?Math.min(r.notch.depth,a.max.y-a.min.y-1):0,d=r.glazed?Rb(a,n,t.glazing,Lb(t,r,ve(e,t))):r.cutout&&!o?Bb(a,r.cutout,l,n):r.cava&&!o?K_(a,r.cava,l,n):o?fb(o,a.min.z,a.max.z,l,n):cb(u?{min:a.min,max:{...a.max,y:a.max.y-u}}:a,l,n,!0,c,r.matched?Mb(r.matched):void 0),f=ae(r.role),p=f===`front`?t.banding?.fronts:f===`carcass`?t.banding?.carcass:void 0;if(d instanceof X&&!o&&!r.glazed&&!r.cava&&!r.stone&&i?.category===`board`&&d.geometry.groups.length===6){let e=p?n.surface(p):l,t=n.surface(ib),i=[l,l,l,l,l,l];mt(r).forEach((a,o)=>{let s=o<2?r.axes.width:r.axes.length,c=o%2==0,l=s===`z`?c:!c;i[rb[s]+ +!l]=a===`none`?t:a===`band`?e:n.surface(a)}),ab(d,i,n)}if(d.userData.board=kb[ae(r.role)],d.userData.piece=r.key,s(d,r.motion),u&&r.notch){let e=cb({min:{...a.min,y:a.max.y-u},max:{...a.max,z:a.max.z-r.notch.height}},l,n,!0,c);e.userData.board=d.userData.board,e.userData.piece=r.key,s(e,r.motion)}if(r.faces===1&&!o){let{min:e,max:t}=a,i=t.x-e.x<t.y-e.y?`x`:`y`,o=cb({min:{...e,[i]:t[i]},max:{...t,[i]:t[i]+jb}},n.raw,n,!1);o.userData.board=d.userData.board,o.userData.piece=r.key,o.userData.raw=!0,s(o,r.motion)}}for(let a of un(e,t)){let e=e=>{e.traverse(e=>e.userData.fitting=a.kind),s(e,a.motion)},o=e=>{let t=a.motion&&i.get(a.motion.key);for(let{object:n,share:i,follow:o}of e){if(n.traverse(e=>e.userData.fitting=a.kind),i>=1&&t){s(n,a.motion);continue}if(r.add(n),!t)continue;let e=n.position.clone(),c=t.userData.followers??=[];o?c.push(o):i>0&&c.push(t=>n.position.copy(e).addScaledVector(t.position,i))}};if(a.kind===`hinge`){o(N_(a,n));continue}if(a.kind===`slide`||a.kind===`slide-roller`||a.kind===`slide-under`){o(P_(a,n));continue}if(a.kind===`stay`||a.kind===`lid-stay`){o(a.kind===`stay`?F_(a,n):I_(a,n));continue}if(a.kind===`sliding-track`){for(let e of L_(a,n))e.userData.fitting=a.kind,r.add(e);continue}let c=a.kind===`profile-handle`&&a.facing?V_(a,n,t.profile?.caps===!0):null;if(c)e(c);else if(a.fit)e(G_(a.fit,n));else{a.box&&e(cb(a.box,n.metal,n,!1));for(let t of a.boxes??[])e(cb(t,n.steel,n,!1))}}for(let i of Ub(e,t,n))r.add(i);return r.userData.movers=[...i.values()],zb(r,0),r}var jb=.8;function Mb(e){let t=0;for(let n=0;n<e.length;n++)t=(t*31+e.charCodeAt(n))%9973;return t}var Nb=new Map;function Pb(e){let t=mr.find(t=>t.id===e.frame)??mr[0],n=`frame:${t?.id}`,r=Nb.get(n);return r||(r=new md({color:t?.color??`#c9ccd1`,roughness:.38,metalness:.55}),Nb.set(n,r)),r}function Fb(e){let t=hr.find(t=>t.id===e.glass)??hr[0],n=`glass:${t?.id}`,r=Nb.get(n);if(!r){let e=(t?.opacity??.3)<1;r=new md({color:t?.color??`#b9d6e4`,roughness:t?.id===`frosted`||t?.id===`fluted`?.6:.06,metalness:t?.mirror?.9:.1,transparent:e,opacity:t?.opacity??.3,depthWrite:!e}),Nb.set(n,r)}return r}var Ib={low:1050,high:1350};function Lb(e,t,n){if((e.glazing??gr).grip===`handle`)return null;let{box:r,motion:i}=t;return!i||i.kind===`slide`?i?`top`:null:i.kind===`glide`?i.travel<0?`right`:`left`:i.kind===`tilt`?i.z>(r.min.z+r.max.z)/2?`bottom`:`top`:i.kind===`swing`?n+r.min.z>=Ib.low?`bottom`:n+r.max.z<=Ib.high?`top`:i.pivot.x<(r.min.x+r.max.x)/2?`right`:`left`:null}function Rb(e,t,n=gr,r=null){let i=new Yo,{min:a,max:o}=e,s=dr(n.profile),c=Pb(n),l=o.x-a.x>=o.y-a.y,[u,d]=l?[a.x,o.x]:[a.y,o.y],f=l?o.y-a.y:o.x-a.x,p=Math.min((d-u)/4,(o.z-a.z)/4),m=Math.min(s.bar,p),h=m,g=(e,t,n,r,i=0)=>l?{min:{x:e,y:a.y+i,z:n},max:{x:t,y:o.y-i,z:r}}:{min:{x:a.x+i,y:e,z:n},max:{x:o.x-i,y:t,z:r}};if(l){let[e,s]=[a.z,o.z],l=[[{x:u,y:e},{x:u+m,y:e+m},{x:u+m,y:s-m},{x:u,y:s}],[{x:d,y:e},{x:d,y:s},{x:d-h,y:s-m},{x:d-h,y:e+m}],[{x:u,y:e},{x:d,y:e},{x:d-h,y:e+m},{x:u+m,y:e+m}],[{x:u,y:s},{x:u+m,y:s-m},{x:d-h,y:s-m},{x:d,y:s}]];for(let e of l){let n=fb(e,0,f,c,t);n.rotation.x=Math.PI/2,n.position.set(0,o.y,0),i.add(n)}if(i.add(cb(g(u+m,d-h,e+m,s-m,Math.max(0,(f-5)/2)),Fb(n),t,!1)),r){let{out:n,thick:o,back:l}=fr,f=a.y,p=r===`bottom`||r===`top`?(()=>{let[t,i]=r===`bottom`?[e,1]:[s,-1],a=[t,t+i*o].sort((e,t)=>e-t),c=[t,t+i*l].sort((e,t)=>e-t);return[{min:{x:u,y:f-n,z:a[0]},max:{x:d,y:f,z:a[1]}},{min:{x:u,y:f-n,z:c[0]},max:{x:d,y:f-n+o,z:c[1]}}]})():(()=>{let[t,i]=r===`left`?[u,1]:[d,-1],a=[t,t+i*o].sort((e,t)=>e-t),c=[t,t+i*l].sort((e,t)=>e-t);return[{min:{x:a[0],y:f-n,z:e},max:{x:a[1],y:f,z:s}},{min:{x:c[0],y:f-n,z:e},max:{x:c[1],y:f-n+o,z:s}}]})();for(let e of p)i.add(cb(e,c,t))}return i}for(let e of[g(u,u+m,a.z,o.z),g(d-m,d,a.z,o.z),g(u+m,d-m,a.z,a.z+m),g(u+m,d-m,o.z-m,o.z)])i.add(cb(e,c,t));let _=g(u+m,d-m,a.z+m,o.z-m,Math.max(0,(f-5)/2));return i.add(cb(_,Fb(n),t,!1)),i}function zb(e,t){for(let n of e.userData.movers??[]){let r=n.userData.motion,i=typeof n.userData.alone==`number`?n.userData.alone:r.kind===`swing`?Re(r,t):t;if(r.kind===`glide`)n.position.x=(`from`in r?r.from:0)+r.travel*i;else if(r.kind===`swing`){if(n.rotation.z=Ja.degToRad(r.angle*i),r.cup){let e=Fe(Math.abs(r.angle*i)),t=_t(r.cup,r.angle>0);n.position.set(r.pivot.x+r.cup.x*e.along+t.x*e.into,r.pivot.y+r.cup.y*e.along+t.y*e.into,0)}}else if(r.kind===`tilt`){if(n.rotation.x=Ja.degToRad(r.angle*i),r.cup){let e=Fe(Math.abs(r.angle*i));n.position.set(0,r.y+e.into,r.z+(r.angle<0?-1:1)*e.along)}r.stay&&(n.position.z=r.z-Te(r.stay,Math.abs(r.angle*i)))}else{let t=e.userData.stair===!0?n.userData.stairShare??1:1;n.position.y=-r.travel*i*t}let a=n.userData.followers;if(a){n.updateMatrix();for(let e of a)e(n)}}}function Bb(e,t,n,r){let[i,a]=[e.min.x+t.x,e.min.z+t.z],[o,s]=[i+t.width,a+t.height],c=fb([{x:e.min.x,y:e.min.z},{x:e.max.x,y:e.min.z},{x:e.max.x,y:e.max.z},{x:e.min.x,y:e.max.z}],0,e.max.y-e.min.y,n,r,[[{x:i,y:a},{x:i,y:s},{x:o,y:s},{x:o,y:a}]]);return c.rotation.x=Math.PI/2,c.position.set(0,e.max.y,0),c}var Vb=3,Hb=12;function Ub(e,t,n){let r=[];for(let{builtIn:i,opening:a,x0:o,x1:s,z0:c,z1:l}of ct(e,t)){let u=nt.find(e=>e.id===i.model),d=rt(e,t.frontMaterialId,`material`)?.thickness??18,f=-(i.surround===`front`?d:0)-Vb,p=Math.max(100,Math.min(u?.depth??500,t.depth-40)),m=i.model.startsWith(`promob:`)?i.model.slice(7):null,h=(m===null?null:Py(m,s-o,p,l-c,n))??vv(m===null?i.model:`forno-embutir`,s-o,p,l-c,n);if(h.position.set(o,f,c),r.push(h),i.surround!==`frame`)continue;let[g,_,v,y]=[a.x0-Hb,a.x1+Hb,a.z0-Hb,a.z1+Hb];for(let[e,t,i,a]of[[g,v,o,y],[s,v,_,y],[o,v,s,c],[o,l,s,y]])i-e<.5||a-t<.5||r.push(cb({min:{x:e,y:-3,z:t},max:{x:i,y:0,z:a}},n.steel,n,!1))}return r}var Wb=2;function Gb(e,t,n,r,i,a){let{along:o,from:s,to:c,at:l}=t,u=(e,t)=>o===`front`?t-l:o===`left`?e-l:l-e,d=new qu(ub(e),{depth:c-s,bevelEnabled:!1,UVGenerator:lb}),f=new xo;if(o===`front`?f.set(0,0,1,s,1,0,0,l,0,1,0,0,0,0,0,1):o===`left`?f.set(1,0,0,l,0,0,-1,c,0,1,0,0,0,0,0,1):f.set(-1,0,0,l,0,0,1,s,0,1,0,0,0,0,0,1),d.applyMatrix4(f),n.start||n.end){let e=d.getAttribute(`position`);for(let t=0;t<e.count;t++){let[r,i]=[e.getX(t),e.getY(t)],a=u(r,i),l=o===`front`?r:i,d=n.start&&Math.abs(l-s)<.01?a:n.end&&Math.abs(l-c)<.01?-a:0;d!==0&&(o===`front`?e.setX(t,r+d):e.setY(t,i+d))}d.computeVertexNormals()}let p=new X(d,i);return p.userData.ownsGeometry=!0,tb(p,new Ml(d,e.length>8?25:1),a,!0),db(p,(e,t)=>r.some(n=>Math.abs(u(e.x,e.y)-n)<.01&&Math.abs(u(t.x,t.y)-n)<.01)),p}function Kb(e,t){for(let n of e.children){if(!(n instanceof X)||n.material!==t)continue;n.updateMatrix();let e=n.geometry,r=(e.index?e.toNonIndexed():e.clone()).applyMatrix4(n.matrix);for(let e of n.children){if(!(e instanceof ll))continue;let t=e.geometry;e.geometry=t.clone().applyMatrix4(n.matrix),e.userData.ownsGeometry&&t.dispose(),e.userData.ownsGeometry=!0}n.userData.ownsGeometry&&e.dispose(),n.geometry=r,n.userData.ownsGeometry=!0,n.position.set(0,0,0),n.quaternion.identity(),n.scale.set(1,1,1),n.updateMatrix();let i=r.getAttribute(`position`),a=r.getAttribute(`normal`),o=r.getAttribute(`uv`);if(a&&o){for(let e=0;e<i.count;e++){let[t,n,r]=[i.getX(e),i.getY(e),i.getZ(e)];Math.abs(a.getZ(e))>.99?o.setXY(e,t,n):Math.abs(a.getY(e))>.99?o.setXY(e,t,r):Math.abs(a.getX(e))>.99&&o.setXY(e,n,r)}o.needsUpdate=!0}}}function qb(e,t,n){let r=new Yo;mb(r,e,t);let i=new Yo;i.position.z=N(e,t),r.add(i);let a=rt(e,t.materialId,`material`),o=a?.thickness??30,s=n.surface(a??`#3a3b3e`,.35),{width:c,depth:l,sink:u,backsplash:d,skirt:f}=t,p=u?z(t,u):null,m=t.work?.cooktop,h=m?R(t,m):null;for(let e of t.work?.brackets??[]){let{width:r,reach:a,drop:o,leg:s}=he,c=Math.min(Math.max(e-r/2,0),t.width-r),l=Math.min(a,t.depth),u=-(De(t).find(t=>e>=t.from&&e<=t.to)?.drop??0);for(let e of[{min:{x:c,y:t.depth-l,z:u-o},max:{x:c+r,y:t.depth,z:u}},{min:{x:c,y:t.depth-6,z:u-s},max:{x:c+r,y:t.depth,z:u-o}}])i.add(cb(e,n.steel,n,!1))}let g=De(t),_=f&&f.height>o?f:null,v=_?void 0:t.edge,y=ce(t),b=je(e,t),x=i.position.z,S=_?o-_.height:v===`bullnose`?-o:-x,C=v===`bullnose`?de(o):o,w=Math.min(Wb,o/4),T=v===`bullnose`?o:v===`eased`?Math.min(10,o/2):w,E=(e,t)=>Math.abs(e-t)<.01,D=(e,t)=>E(e.y,T)&&E(t.y,T),O=(e,t,n,r,i)=>Array.from({length:9},(a,o)=>{let s=r+(i-r)*o/8;return{x:e+n*Math.cos(s),y:t+n*Math.sin(s)}}),k=e=>(e??0)>C+5?e??0:0,A={left:k(t.corners?.left),right:k(t.corners?.right)},j=ke(e,t),M={left:j.left.shows&&A.left===0&&(!_||_.left===!0),right:j.right.shows&&A.right===0&&(!_||_.right===!0)},ee=e=>e<1&&M.left?T:e>c-1&&M.right?c-T:e,te=(e,t)=>M.left&&E(e.x,T)&&E(t.x,T)||M.right&&E(e.x,c-T)&&E(t.x,c-T),ne=(e,t)=>{if(!_||Math.abs(e.z)>.01||Math.abs(t.z)>.01)return!1;let n=n=>E(e.x,n)&&E(t.x,n);return _.left===!0&&n(0)||_.right===!0&&n(c)},re=(e,t,r,a,o,l,u=[])=>{if(r-e<=.5||a-t<=.5||l-o<=.5)return;let d=t===T&&e<1?A.left:0,f=t===T&&r>c-1?A.right:0,p=fb([...d>0?[{x:e,y:d},...O(d,d,d-T,Math.PI,Math.PI*1.5)]:[{x:e,y:t}],...f>0?[...O(c-f,f,f-T,Math.PI*1.5,Math.PI*2),{x:r,y:f}]:[{x:r,y:t}],{x:r,y:a},{x:e,y:a}],o,l,s,n,u);db(p,(e,t)=>D(e,t)||ne(e,t)||te(e,t)),i.add(p)},ie=(e,t,r,a,o,c)=>{a-e>.5&&o-t>.5&&c-r>.5&&i.add(cb({min:{x:e,y:t,z:r},max:{x:a,y:o,z:c}},s,n))},ae=(e,t)=>[{x:0,y:e},{x:20,y:e},{x:20,y:t},{x:w,y:t},{x:0,y:t-w}],oe=(e,t)=>[{x:0,y:e},{x:20,y:e},{x:20,y:t-w},{x:20-w,y:t},{x:0,y:t}],P=null,se=[];for(let{from:e,to:r,drop:a,wet:f}of g){let g=p!==null&&P===null&&u!==null&&u.offset>=e&&u.offset<=r;g&&(P=a);let v=o-a,[S,E]=[ee(e),ee(r)];re(S,T,E,l,-a,v,[...g&&p&&u?[Bg(p,u)]:[],...h&&m&&m.offset>=e&&m.offset<=r?[[h.min,{x:h.max.x,y:h.min.y},h.max,{x:h.min.x,y:h.max.y}]]:[]]);let D=y&&f?o:v,O=se[se.length-1];if(O&&Math.abs(O.top-D)<.01?O.to=r:se.push({from:e,to:r,top:D}),y&&f){re(S,T,E,y.width,v,o);let t=l-(d>0?20:0);e<1&&!b.left&&!M.left&&re(0,y.width,y.width,t,v,o),r>c-1&&!b.right&&!M.right&&re(c-y.width,y.width,c,t,v,o)}if(!_&&x>0&&!f&&ie(e,C,-x,r,40,0),h&&m&&m.offset>=e&&m.offset<=r){let e=q_(m,h,v,n);e.userData.piece=`cooktop`,i.add(e)}for(let a of t.work?.seams??[]){if(a<=e||a>=r)continue;let t=cb({min:{x:a-.8,y:y&&f?y.width:0,z:v},max:{x:a+.8,y:l,z:v+.4}},n.hob,n,!1);i.add(t)}d>0&&r-e>.5&&i.add(Gb(ae(v,o+d),{along:`front`,from:e,to:r,at:l-20},{},[w],s,n))}let F=e=>{if(v===`bullnose`){let t=o,n=Array.from({length:13},(n,r)=>{let i=Math.PI*3/2-Math.PI*r/12;return{x:t+t*Math.cos(i),y:e-t+t*Math.sin(i)}});return[{x:C,y:e-2*t},...n,{x:C,y:e}]}let t=[{x:C,y:S},{x:w,y:S},{x:0,y:S+w}];if(v===`eased`){let n=Math.min(10,o/2),r=Array.from({length:10},(t,r)=>{let i=Math.PI-Math.PI/2*(r/9);return{x:n+n*Math.cos(i),y:e-n+n*Math.sin(i)}});return[...t,...r,{x:C,y:e}]}return[...t,{x:0,y:e-w},{x:w,y:e},{x:C,y:e}]},I=A;for(let e of se){if(e.top-S<=.5)continue;let t=e.from<1?I.left:e.from,r=e.to>c-1?c-I.right:e.to,[a,o]=[e.from<1&&M.left,e.to>c-1&&M.right],l=Gb(F(e.top),{along:`front`,from:t,to:r,at:0},{start:a,end:o},[w,C],s,n);db(l,(e,n)=>a&&E(e.x-t,e.y)&&E(n.x-t,n.y)&&!(E(e.y,0)&&E(n.y,0))||o&&E(r-e.x,e.y)&&E(r-n.x,n.y)&&!(E(e.y,0)&&E(n.y,0))),i.add(l)}let le=se[se.length-1]?.top??o,ue=se[0]?.top??o;for(let[e,t]of[[`left`,ue],[`right`,le]]){if(!M[e]||t-S<=.5)continue;let r=t=>e===`left`?t.x:c-t.x,a=Gb(F(t),{along:e,from:0,to:l,at:e===`left`?0:c},{start:!0},[w,C],s,n);db(a,(e,t)=>E(r(e),e.y)&&E(r(t),t.y)&&!(E(r(e),0)&&E(r(t),0))),i.add(a)}for(let[e,t,r,a,o]of[[I.left,I.left,Math.PI,Math.PI*1.5,ue],[I.right,c-I.right,Math.PI*1.5,Math.PI*2,le]]){if(e<=0)continue;let c=[...O(t,e,e,r,a),...O(t,e,e-C,a,r)];i.add(fb(c,S,o,s,n))}if(d>0){let e=l-20,t=g[0]?.drop??0,r=g[g.length-1]?.drop??0,a=o+d,u=(t,r,l)=>{e-r<=.5||i.add(Gb(oe(o-l,a),{along:t,from:r,to:e,at:t===`left`?0:c},{},[20-w],s,n))};b.left&&u(`left`,0,t),b.right&&u(`right`,0,r);let[f,p]=[b.besideLeft??0,b.besideRight??0];f>20&&u(`left`,l-f,t),p>20&&u(`right`,l-p,r)}if(_){let r=g[0]?.drop??0,a=g[g.length-1]?.drop??0,u=(e,t,r,a,o)=>{if(o-S<=.5||a-r<=.5)return;i.add(cb({min:{x:e,y:r,z:S},max:{x:t,y:a,z:o}},s,n,!1));let c=[[e,r,S,e,a,S],[t,r,S,t,a,S],[e,a,S,t,a,S],[e,a,S,e,a,o],[t,a,S,t,a,o]].flat(),l=new ll(new tc().setAttribute(`position`,new Y(c,3)),n.edge);l.userData.ownsGeometry=!0,l.raycast=()=>{},i.add(l)},d=t.placement.kind===`on`?rt(e,t.placement.parentId,`cabinet`):void 0,f=(d?l-(d.corner?d.corner.legDepth:d.depth):o+25)-(d?rt(e,d.frontMaterialId,`material`)?.thickness??18:18)-2;for(let[e,t]of[[`left`,r],[`right`,a]]){let[n,r]=e===`left`?[0,o]:[c-o,c];if(_[e]){M[e]||u(n,r,Math.max(o,I[e]),l,-t);continue}let i=j[e];u(n,r,o,i.shows?f:i.beside>0?l-i.beside:0,-t)}_.back>o&&(ie(_.left?o:0,o,S,_.right?c-o:c,_.back,S+o),_.left&&ie(o,_.back,S,_.back,l,S+o),_.right&&ie(c-_.back,_.back,S,c-o,l,S+o))}let L=t.placement.kind===`on`?t.raise??0:0;if(L>.5){let[e,t]=[-x-L,-x];ie(0,C,e,c,C+40,t),j.left.shows&&ie(0,C+40,e,40,l,t),j.right.shows&&ie(c-40,C+40,e,c,l,t)}if(Kb(i,s),u&&p){let e=new Yo;e.userData.piece=`sink`,e.position.z=-(P??0),i.add(e),e.add(Kg(u,p,o,l-(d>0?20:0),n))}return r}function Jb(e,t,n,r=!1){let i=new Yo;pb(i,e.pose,t.depth,e.base);let a=cb({min:{x:0,y:0,z:0},max:{x:t.width,y:t.depth,z:t.height}},r?n.ghostDenied:n.ghost,n);return a.children[0].material=r?n.edgeDenied:n.edgeSelected,i.add(a),i}function Yb(e,t,n,r){let i=fb(e,t,t+Math.max(n,1),r.ghost,r);return i.children[0].material=r.edgeSelected,i}function Xb(e,t,n,r,i){let a=Ae(M(Se(F(t,e))),n),o=fb([e,t,Qe(t,a),Qe(e,a)],0,r,i.ghost,i);return o.children[0].material=i.edgeSelected,o}function Zb(e,t,n){let r=new al(new tc().setFromPoints([new K(e.x,e.y,4),new K(t.x,t.y,4)]),n.guide);return r.computeLineDistances(),r.userData.ownsGeometry=!0,r}var Qb=35,$b=Iy,ex={thickness:35,gap:3,floorGap:8},tx={face:28,depth:90},nx={bar:30,doorBar:50,slim:22,thickness:26,pane:6},rx=28,ix=12,ax={reach:25,thickness:22,color:`#d8d4ca`},ox={door:90,window:80,tilt:32},sx=1e3,cx={rose:26,proud:9,neck:9.5,out:52,long:125,high:18,key:92},lx={radius:6,flap:30,plate:1.4,long:90},ux={radius:5.5,flap:18,plate:2,long:64},dx=`#202124`,fx=class{#e;#t=new Yo;#n;constructor(e,t,n){this.#e=e,this.#n=t,this.#t.position.copy(t),e.group.add(this.#t),n&&(this.#t.userData.motion=n,e.movers.push(this.#t))}add(e,t=this.#e.body,n=!0){let r=cb(e,t,this.#e.assets,n);r.position.sub(this.#n),this.#t.add(r)}cut(e,t,n){let r=new qu(new lu(e.map(([e,t])=>new G(e,t))),{depth:n-t,bevelEnabled:!1});r.rotateX(Math.PI/2),r.translate(0,n,0);let i=new X(r,this.#e.body);i.userData.ownsGeometry=!0;let a=new ll(new Ml(r),this.#e.assets.edge);a.userData.ownsGeometry=!0,a.raycast=()=>{},i.add(a),i.position.sub(this.#n),this.#t.add(i)}rod(e,t,n,r,i,a,o){let[s,c]=r<=i?[r,i]:[i,r],l=new El(a,a,c-s,16);e===`z`?l.rotateX(Math.PI/2):e===`x`&&l.rotateZ(Math.PI/2);let u=new X(l,o??this.#e.assets.metal);u.userData.ownsGeometry=!0;let d=(s+c)/2;e===`x`?u.position.set(d,t,n):e===`y`?u.position.set(t,d,n):u.position.set(t,n,d),u.position.sub(this.#n),this.#t.add(u)}sash(e,t,n,r,i,a,o){let s=i-o/2,c=i+o/2;this.add(L(e,s,n,e+a,c,r)),this.add(L(t-a,s,n,t,c,r)),this.add(L(e+a,s,n,t-a,c,n+a)),this.add(L(e+a,s,r-a,t-a,c,r)),this.add(L(e+a,i-nx.pane/2,n+a,t-a,i+nx.pane/2,r-a),this.#e.assets.glass,!1)}};function px(e){return new fx(e,new K,null)}function mx(e,t){return(e===`left`?-1:1)*(t===`front`?1:-1)}function hx(e){let{width:t,height:n,through:r}=e,i=px(e);i.add(L(0,0,0,Qb,r,n)),i.add(L(t-Qb,0,0,t,r,n)),i.add(L(Qb,0,n-Qb,t-Qb,r,n));let a=$b.width-$b.overlap;for(let[e,o]of[[-$b.thickness,0],[r,r+$b.thickness]]){let r=$b.overlap;i.cut([[-a,0],[r,0],[r,n-r],[-a,n+a]],e,o),i.cut([[t-r,0],[t+a,0],[t+a,n+a],[t-r,n-r]],e,o),i.cut([[-a,n+a],[r,n-r],[t-r,n-r],[t+a,n+a]],e,o)}}function gx(e){let{width:t,height:n,through:r,opening:i}=e;hx(e);let a=i.swing===`front`,o=a?0:r-ex.thickness,s=o+ex.thickness,c=Qb+ex.gap,l=t-Qb-ex.gap,u=n-Qb-ex.gap,d=i.leaves>=2?[{side:`left`,x0:c,x1:t/2-ex.gap/2},{side:`right`,x0:t/2+ex.gap/2,x1:l}]:[{side:i.hinge,x0:c,x1:l}],f=Math.min(sx,n/2),p=px(e);d.forEach(({side:n,x0:r,x1:c},l)=>{let d=n===`left`?r:c,m=n===`left`?-1:1,h={x:d+m*ex.gap/2,y:a?o-lx.radius:s+lx.radius},g=new fx(e,new K(h.x,h.y,0),{key:`leaf-${l}`,kind:`swing`,pivot:{x:h.x,y:h.y},angle:ox.door*mx(n,i.swing)});g.add(L(r,o,ex.floorGap,c,s,u));let _=n===`left`?c-60:r+60,v=n===`left`?_-cx.long:_+cx.long,{metal:y}=e.assets,b=ex.floorGap+(u-ex.floorGap)*.42;if(c-r>340&&u-ex.floorGap>900)for(let[e,t]of[[o,-1],[s,1]]){let[n,i]=t<0?[e-4,e]:[e,e+4];g.add(L(r+110,n,ex.floorGap+170,c-110,i,b-55)),g.add(L(r+110,n,b+55,c-110,i,u-130))}let x=d+m*ex.gap,[S,C]=a?[o,o+lx.flap]:[s-lx.flap,s],w=u-ex.floorGap,T=w>2250?[.1,.38,.66,.92]:[.1,.5,.92];for(let e of T){let t=ex.floorGap+w*e,n=lx.long/2,r=lx.long/3;g.rod(`z`,h.x,h.y,t-n,t-n+r-1,lx.radius),g.rod(`z`,h.x,h.y,t+n-r+1,t+n,lx.radius),p.rod(`z`,h.x,h.y,t-n+r,t+n-r,lx.radius),p.rod(`z`,h.x,h.y,t+n,t+n+3,lx.radius+1),p.rod(`z`,h.x,h.y,t-n-3,t-n,lx.radius+1),g.add(L(Math.min(d,d+m*lx.plate),S,t-n,Math.max(d,d+m*lx.plate),C,t+n),y,!1),p.add(L(Math.min(x,x-m*lx.plate),S,t-n,Math.max(x,x-m*lx.plate),C,t+n),y,!1)}let E=e.assets.surface(dx,.6);for(let[e,t]of[[o,-1],[s,1]]){g.rod(`y`,_,f,e,e+t*cx.proud,cx.rose),g.rod(`y`,_,f,e+t*cx.proud,e+t*cx.out,cx.neck);let[n,r]=[e+t*(cx.out-14),e+t*cx.out].sort((e,t)=>e-t);g.add(L(Math.min(_,v),n,f-cx.high/2,Math.max(_,v),r,f+cx.high/2),y,!1),g.rod(`y`,v,f,n,r,cx.high/2),g.rod(`y`,_,f,n,r,cx.high/2+2);let i=f-cx.key;g.rod(`y`,_,i,e,e+t*8,cx.rose-2),g.rod(`y`,_,i,e+t*8,e+t*13,8.5);let[a,o]=[e+t*13,e+t*14].sort((e,t)=>e-t);g.add(L(_-1.5,a,i-6,_+1.5,o,i+6),E,!1)}let D=n===`left`?c:r,O=(o+s)/2,[k,A]=n===`left`?[D-2.5,D]:[D,D+2.5];g.add(L(k,o+6,f-cx.key-70,A,s-6,f+70),y,!1);let[j,M]=n===`left`?[D,D+9]:[D-9,D];if(g.add(L(j,O-6,f-11,M,O+6,f+11),y,!1),i.leaves<2){let e=n===`left`?t-Qb:Qb,[r,i]=n===`left`?[e-2,e]:[e,e+2];p.add(L(r,o+4,f-cx.key-80,i,s-4,f+80),y,!1)}})}function _x(e){let{width:t,height:n,through:r,opening:i}=e,a=Math.min(tx.depth,r),o=(r-a)/2,s=o+a,c=tx.face,l=i.type===`door`?ix:c,u=px(e);return u.add(L(0,o,0,c,s,n)),u.add(L(t-c,o,0,t,s,n)),u.add(L(c,o,n-c,t-c,s,n)),u.add(L(c,o,0,t-c,s,l)),i.type===`window`&&i.sill>ax.thickness&&u.add(L(0,-ax.reach,-ax.thickness,t,r+ax.reach,0),e.assets.surface(ax.color,.6)),{x0:c,x1:t-c,z0:l,z1:n-c,y:r/2}}function vx(e){let{opening:t}=e,n=_x(e),r=t.leaves,i=t.type===`door`?nx.doorBar:nx.bar,a=(n.x1-n.x0+(r-1)*i)/r,o=a-i;for(let s=0;s<r;s++){let c=n.x0+s*o,l=r===2?+(s===0):s===1?-1:+(s===2&&r===4),u=n.y+(s%2==0?-1:1)*(rx/2),d=new fx(e,new K,l===0?null:{kind:`glide`,from:0,travel:l*o});d.sash(c,c+a,n.z0,n.z1,u,i,nx.thickness);let f=e.assets.surface(dx,.6),{metal:p}=e.assets;if(t.type!==`door`&&l!==0){let e=l>0?c+i/2:c+a-i/2,t=(n.z0+n.z1)/2;for(let n of[-1,1]){let r=u+n*nx.thickness/2,[i,a]=n<0?[r-2.5,r]:[r,r+2.5];d.add(L(e-11,i,t-62,e+11,a,t+62),p,!1);let[o,s]=n<0?[r-3.2,r-2.5]:[r+2.5,r+3.2];d.add(L(e-6,o,t-46,e+6,s,t+46),f,!1)}let r=u+nx.thickness/2;d.add(L(e-9,r,t+80,e+9,r+11,t+128),p,!1),d.rod(`y`,e,t+104,r+11,r+17,6),d.add(L(e-3,r+17,t+86,e+3,r+22,t+108),p,!1)}if(t.type===`door`&&l!==0){let t=l>0?c+i/2:c+a-i/2,n=Math.min(sx,e.height/2);for(let e of[-1,1]){let r=u+e*nx.thickness/2;d.rod(`z`,t,r+e*34,n-150,n+150,9);for(let i of[n-105,n+105])d.rod(`y`,t,i,r,r+e*34,6);d.rod(`y`,t,n-205,r,r+e*7,15);let[i,a]=[r+e*7,r+e*8].sort((e,t)=>e-t);d.add(L(t-1.5,i,n-211,t+1.5,a,n-199),f,!1)}}}let s=px(e);for(let t of[-1,1]){let r=n.y+t*rx/2;s.add(L(n.x0,r-2.5,n.z0-.01,n.x1,r+2.5,n.z0+7),e.assets.metal,!1),s.add(L(n.x0,r-2.5,n.z1-7,n.x1,r+2.5,n.z1+.01),e.assets.metal,!1)}}function yx(e){let{opening:t}=e,n=_x(e),r=t.leaves,i=(n.x1-n.x0)/r,a=n.y+(t.swing===`front`?-1:1)*(nx.thickness/2);for(let o=0;o<r;o++){let s=n.x0+o*i,c=r===1?t.hinge:o===0?`left`:`right`,l=c===`left`?s:s+i,u=new fx(e,new K(l,a,0),{key:`leaf-${o}`,kind:`swing`,pivot:{x:l,y:a},angle:ox.window*mx(c,t.swing)});u.sash(s,s+i,n.z0,n.z1,n.y,nx.bar,nx.thickness);let{metal:d}=e.assets,f=c===`left`?s+i-nx.bar/2:s+nx.bar/2,p=(n.z0+n.z1)/2,m=t.swing===`front`?-1:1,h=n.y+m*(nx.thickness/2),[g,_]=[h,h+m*6].sort((e,t)=>e-t);u.add(L(f-11,g,p-55,f+11,_,p+55),d,!1),u.rod(`y`,f,p,h+m*6,h+m*30,7);let[v,y]=[h+m*20,h+m*30].sort((e,t)=>e-t);u.add(L(f-7,v,p-92,f+7,y,p+7),d,!1),u.rod(`y`,f,p-92,v,y,7);let b=n.y+m*(nx.thickness/2),x=b+m*ux.radius,[S,C]=[b,b+m*ux.plate].sort((e,t)=>e-t),w=c===`left`?1:-1,T=n.z1-n.z0,E=T>1300?[.12,.5,.88]:[.16,.84],D=px(e);for(let e of E){let t=n.z0+T*e,r=ux.long/2;u.rod(`z`,l,x,t,t+r,ux.radius),D.rod(`z`,l,x,t-r,t-1.5,ux.radius),u.add(L(Math.min(l,l+w*ux.flap),S,t-r,Math.max(l,l+w*ux.flap),C,t+r),d,!1),D.add(L(Math.min(l,l-w*ux.flap),S,t-r,Math.max(l,l-w*ux.flap),C,t+r),d,!1)}}}function bx(e){let{opening:t}=e,n=_x(e),r=t.leaves,i=(n.x1-n.x0)/r,a=t.swing===`front`,o=n.y+(a?-1:1)*(nx.thickness/2);for(let t=0;t<r;t++){let r=n.x0+t*i,s=new fx(e,new K(0,o,n.z1),{key:`leaf-${t}`,kind:`tilt`,y:o,z:n.z1,angle:ox.tilt*(a?-1:1),stay:Math.min(150,(n.z1-n.z0)/4)});s.sash(r,r+i,n.z0,n.z1,n.y,nx.bar,nx.thickness);let{metal:c}=e.assets,l=a?1:-1,u=n.y+l*(nx.thickness/2),d=r+i/2,f=n.z0+nx.bar/2,[p,m]=[u,u+l*6].sort((e,t)=>e-t);s.add(L(d-50,p,f-11,d+50,m,f+11),c,!1),s.rod(`y`,d,f,u+l*6,u+l*28,7);let[h,g]=[u+l*19,u+l*28].sort((e,t)=>e-t);s.add(L(d-7,h,f-7,d+88,g,f+7),c,!1),s.rod(`y`,d+88,f,h,g,7);let _=o-l*ux.radius;for(let e of[r+Math.min(120,i/4),r+i-Math.min(120,i/4)])s.rod(`x`,_,n.z1-2,e-ux.long/2,e+ux.long/2,ux.radius)}}function xx(e){let t=_x(e),n=e.opening.leaves,r=(t.x1-t.x0)/n,i=px(e);for(let e=0;e<n;e++){let n=t.x0+e*r;i.sash(n,n+r,t.z0,t.z1,t.y,nx.slim,nx.thickness)}}function Sx(e){let{width:t,height:n,through:r,assets:i,group:a}=e,o=cb(L(0,0,0,t,r,n),i.unseen,i);for(let e of o.children)e.userData.onlySelected=!0;a.add(o)}function Cx(e,t,n){let r=new Yo,i=rt(e,t.wallId,`wall`);if(!i)return r;wx(r,i,t);let a={group:r,assets:n,body:n.surface(t.color,.55),movers:[],width:t.width,height:t.height,through:i.thickness,opening:t};switch(t.operation){case`hinged`:t.type===`door`?gx(a):yx(a);break;case`sliding`:vx(a);break;case`tilt`:bx(a);break;case`fixed`:xx(a);break;case`none`:Sx(a)}return r.userData.movers=a.movers,r}function wx(e,t,n){let r=O(t),i=Qe(t.start,Ae(r,n.offset));e.position.set(i.x,i.y,n.sill),e.rotation.set(0,0,Ja.degToRad(k(r)))}function Tx(e,t,n){let r=new Yo;wx(r,e,t);let i=cb(L(0,-20,0,t.width,e.thickness+20,t.height),n.ghost,n);return i.children[0].material=n.edgeSelected,r.add(i),r}export{al as $,ho as $t,og as A,er as An,df as At,Dl as B,dn as Bn,Jr as Bt,Cy as C,lr as Cn,Ya as Ct,Ag as D,Qn as Dn,pi as Dt,Pg as E,Yn as En,fi as Et,qr as F,Dn as Fn,rs as Ft,uf as G,Tc as Gt,vo as H,qs as Ht,yl as I,hn as In,fd as It,Qr as J,Kr as Jt,qu as K,dc as Kt,Lr as L,Sn as Ln,lu as Lt,Cl as M,Kn as Mn,di as Mt,Vs as N,Cn as Nn,Ir as Nt,mg as O,Xn as On,jc as Ot,tc as P,Tn as Pn,aa as Pt,Xr as Q,K as Qt,Mf as R,xn as Rn,$u as Rt,vy as S,sr as Sn,dl as St,E_ as T,nr as Tn,mi as Tt,Kc as U,td as Ut,El as V,un as Vn,uo as Vt,Ls as W,Nf as Wt,$r as X,Yr as Xt,Yo as Y,Zr as Yt,Jd as Z,G as Zt,Yy as _,mr as _n,cf as _t,cb as a,Or as an,Gr as at,Tb as b,ur as bn,Zu as bt,Eb as c,xr as cn,xo as ct,Ob as d,vr as dn,_d as dt,yo as en,Vf as et,Yb as f,wr as fn,gd as ft,wb as g,gr as gn,zr as gt,eb as h,Er as hn,Rr as ht,$y as i,Tr as in,Hr as it,vs as j,$n as jn,ui as jt,pg as k,Zn as kn,kf as kt,Jb as l,_r as ln,X as lt,Xb as m,Cr as mn,md as mt,Tx as n,Mr as nn,bd as nt,Ab as o,Dr as on,Ja as ot,hb as p,br as pn,hd as pt,Y as q,_s as qt,Xy as r,Fr as rn,ll as rt,qb as s,Sr as sn,q as st,Cx as t,_o as tn,Zc as tt,Zb as u,Ar as un,Mc as ut,pb as v,hr as vn,sf as vt,Xg as w,tr as wn,si as wt,gy as x,cr as xn,gl as xt,zb as y,pr as yn,cc as yt,J as z,mn as zn,Wu as zt};