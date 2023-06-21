(function(i,O){typeof exports=="object"&&typeof module<"u"?O(exports,require("axios"),require("zod")):typeof define=="function"&&define.amd?define(["exports","axios","zod"],O):(i=typeof globalThis<"u"?globalThis:i||self,O(i.ShopeeSDK={},i.axios,i.zod))})(this,function(i,O,e){"use strict";function j(r){return r.reduce((t,n)=>(t[n]=n,t),{})}async function x(r,...t){let n;return typeof globalThis.crypto<"u"&&(n=await We(r,...t)),n=await Ye(r,...t),n}async function We(r,...t){const n=new TextEncoder,a=n.encode(r);let s=new Uint8Array;t.forEach(p=>{p&&(s=n.encode(p))});const o=await crypto.subtle.importKey("raw",a,{name:"HMAC",hash:"SHA-256"},!1,["sign"]),c=await crypto.subtle.sign({name:"HMAC",hash:{name:"sha-256"}},o,s),u=new Uint8Array(c);return Array.from(u).map(p=>p.toString(16).padStart(2,"0")).join("")}async function Ye(r,...t){const{createHmac:n}=await import("crypto"),a=n("sha256",r);return t.filter(s=>!!s).forEach(s=>a.update(s)),a.digest("hex")}function P(r){const t=r?r.getTime():Date.now();return Math.round(t/1e3).toString()}async function U(r){const{partner_id:t,partner_key:n,path:a,base_url:s,access_token:o,shop_id:c,params:u={}}=r,l=t.toString(),p=c.toString(),b={};for(const g in u){const y=u[g];Array.isArray(y)?b[g]=[y[0],...y.slice(1).map(qa=>`&${g}=${qa}`)].join(""):y instanceof Date?b[g]=P(y):b[g]=`${y}`}const T=P(),f=new URL(a,s),E=await x(n,l,a,T,o,p);return f.search=new URLSearchParams({...b,partner_id:l,shop_id:p,...!!o&&{access_token:o},sign:E,timestamp:T}).toString(),f.toString().replace(new RegExp("%26","g"),"&").replace(new RegExp("%3D","g"),"=")}function S(r,t){if(typeof r!="object"||r===null||r instanceof Date)return r;if(Array.isArray(r))return r.map((s,o)=>S(r[o],t));const n={};for(const[a,s]of Object.entries(r))a!==void 0&&(n[t(a)]=S(s,t));return n}var C=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ze(r,t,n,a){var s=-1,o=r==null?0:r.length;for(a&&o&&(n=r[++s]);++s<o;)n=t(n,r[s],s,r);return n}var Je=Ze;function Qe(r){return function(t){return r==null?void 0:r[t]}}var Xe=Qe,er=Xe,rr={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},tr=er(rr),nr=tr,ar=typeof C=="object"&&C&&C.Object===Object&&C,sr=ar,ir=sr,or=typeof self=="object"&&self&&self.Object===Object&&self,cr=ir||or||Function("return this")(),ur=cr,pr=ur,gr=pr.Symbol,k=gr;function mr(r,t){for(var n=-1,a=r==null?0:r.length,s=Array(a);++n<a;)s[n]=t(r[n],n,r);return s}var lr=mr,br=Array.isArray,_r=br,F=k,K=Object.prototype,fr=K.hasOwnProperty,Sr=K.toString,A=F?F.toStringTag:void 0;function Ir(r){var t=fr.call(r,A),n=r[A];try{r[A]=void 0;var a=!0}catch{}var s=Sr.call(r);return a&&(t?r[A]=n:delete r[A]),s}var hr=Ir,Tr=Object.prototype,Pr=Tr.toString;function Rr(r){return Pr.call(r)}var Er=Rr,z=k,yr=hr,Or=Er,Ar="[object Null]",Lr="[object Undefined]",B=z?z.toStringTag:void 0;function jr(r){return r==null?r===void 0?Lr:Ar:B&&B in Object(r)?yr(r):Or(r)}var Cr=jr;function vr(r){return r!=null&&typeof r=="object"}var Dr=vr,Nr=Cr,xr=Dr,Ur="[object Symbol]";function kr(r){return typeof r=="symbol"||xr(r)&&Nr(r)==Ur}var dr=kr,W=k,wr=lr,Gr=_r,$r=dr,Mr=1/0,Y=W?W.prototype:void 0,Z=Y?Y.toString:void 0;function J(r){if(typeof r=="string")return r;if(Gr(r))return wr(r,J)+"";if($r(r))return Z?Z.call(r):"";var t=r+"";return t=="0"&&1/r==-Mr?"-0":t}var qr=J,Hr=qr;function Vr(r){return r==null?"":Hr(r)}var v=Vr,Fr=nr,Kr=v,zr=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Br="\\u0300-\\u036f",Wr="\\ufe20-\\ufe2f",Yr="\\u20d0-\\u20ff",Zr=Br+Wr+Yr,Jr="["+Zr+"]",Qr=RegExp(Jr,"g");function Xr(r){return r=Kr(r),r&&r.replace(zr,Fr).replace(Qr,"")}var et=Xr,rt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function tt(r){return r.match(rt)||[]}var nt=tt,at=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function st(r){return at.test(r)}var it=st,Q="\\ud800-\\udfff",ot="\\u0300-\\u036f",ct="\\ufe20-\\ufe2f",ut="\\u20d0-\\u20ff",pt=ot+ct+ut,X="\\u2700-\\u27bf",ee="a-z\\xdf-\\xf6\\xf8-\\xff",gt="\\xac\\xb1\\xd7\\xf7",mt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",lt="\\u2000-\\u206f",bt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",re="A-Z\\xc0-\\xd6\\xd8-\\xde",_t="\\ufe0e\\ufe0f",te=gt+mt+lt+bt,ne="['’]",ae="["+te+"]",ft="["+pt+"]",se="\\d+",St="["+X+"]",ie="["+ee+"]",oe="[^"+Q+te+se+X+ee+re+"]",It="\\ud83c[\\udffb-\\udfff]",ht="(?:"+ft+"|"+It+")",Tt="[^"+Q+"]",ce="(?:\\ud83c[\\udde6-\\uddff]){2}",ue="[\\ud800-\\udbff][\\udc00-\\udfff]",R="["+re+"]",Pt="\\u200d",pe="(?:"+ie+"|"+oe+")",Rt="(?:"+R+"|"+oe+")",ge="(?:"+ne+"(?:d|ll|m|re|s|t|ve))?",me="(?:"+ne+"(?:D|LL|M|RE|S|T|VE))?",le=ht+"?",be="["+_t+"]?",Et="(?:"+Pt+"(?:"+[Tt,ce,ue].join("|")+")"+be+le+")*",yt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ot="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",At=be+le+Et,Lt="(?:"+[St,ce,ue].join("|")+")"+At,jt=RegExp([R+"?"+ie+"+"+ge+"(?="+[ae,R,"$"].join("|")+")",Rt+"+"+me+"(?="+[ae,R+pe,"$"].join("|")+")",R+"?"+pe+"+"+ge,R+"+"+me,Ot,yt,se,Lt].join("|"),"g");function Ct(r){return r.match(jt)||[]}var vt=Ct,Dt=nt,Nt=it,xt=v,Ut=vt;function kt(r,t,n){return r=xt(r),t=n?void 0:t,t===void 0?Nt(r)?Ut(r):Dt(r):r.match(t)||[]}var dt=kt,wt=Je,Gt=et,$t=dt,Mt="['’]",qt=RegExp(Mt,"g");function Ht(r){return function(t){return wt($t(Gt(t).replace(qt,"")),r,"")}}var _e=Ht,Vt=_e,Ft=Vt(function(r,t,n){return r+(n?"_":"")+t.toLowerCase()}),fe=Ft;function Kt(r,t,n){var a=-1,s=r.length;t<0&&(t=-t>s?0:s+t),n=n>s?s:n,n<0&&(n+=s),s=t>n?0:n-t>>>0,t>>>=0;for(var o=Array(s);++a<s;)o[a]=r[a+t];return o}var zt=Kt,Bt=zt;function Wt(r,t,n){var a=r.length;return n=n===void 0?a:n,!t&&n>=a?r:Bt(r,t,n)}var Yt=Wt,Zt="\\ud800-\\udfff",Jt="\\u0300-\\u036f",Qt="\\ufe20-\\ufe2f",Xt="\\u20d0-\\u20ff",en=Jt+Qt+Xt,rn="\\ufe0e\\ufe0f",tn="\\u200d",nn=RegExp("["+tn+Zt+en+rn+"]");function an(r){return nn.test(r)}var Se=an;function sn(r){return r.split("")}var on=sn,Ie="\\ud800-\\udfff",cn="\\u0300-\\u036f",un="\\ufe20-\\ufe2f",pn="\\u20d0-\\u20ff",gn=cn+un+pn,mn="\\ufe0e\\ufe0f",ln="["+Ie+"]",d="["+gn+"]",w="\\ud83c[\\udffb-\\udfff]",bn="(?:"+d+"|"+w+")",he="[^"+Ie+"]",Te="(?:\\ud83c[\\udde6-\\uddff]){2}",Pe="[\\ud800-\\udbff][\\udc00-\\udfff]",_n="\\u200d",Re=bn+"?",Ee="["+mn+"]?",fn="(?:"+_n+"(?:"+[he,Te,Pe].join("|")+")"+Ee+Re+")*",Sn=Ee+Re+fn,In="(?:"+[he+d+"?",d,Te,Pe,ln].join("|")+")",hn=RegExp(w+"(?="+w+")|"+In+Sn,"g");function Tn(r){return r.match(hn)||[]}var Pn=Tn,Rn=on,En=Se,yn=Pn;function On(r){return En(r)?yn(r):Rn(r)}var An=On,Ln=Yt,jn=Se,Cn=An,vn=v;function Dn(r){return function(t){t=vn(t);var n=jn(t)?Cn(t):void 0,a=n?n[0]:t.charAt(0),s=n?Ln(n,1).join(""):t.slice(1);return a[r]()+s}}var Nn=Dn,xn=Nn,Un=xn("toUpperCase"),kn=Un,dn=v,wn=kn;function Gn(r){return wn(dn(r).toLowerCase())}var $n=Gn,Mn=$n,qn=_e,Hn=qn(function(r,t,n){return t=t.toLowerCase(),r+(n?Mn(t):t)}),ye=Hn;class D{constructor(){this.logger=console,this.logInterceptorIds=[],this.isLogEnabled=!1,this.axios=O.create(),this.isLogEnabled&&this.addLogInterceptor()}addLogInterceptor(){const t=this.axios.interceptors.request.use(a=>(this.logger.log(`${a.url}`),a.data&&this.logger.info(`[Body]: ${JSON.stringify(a.data,null,4)}`),a),a=>{throw this.logger.error(a),a}),n=this.axios.interceptors.response.use(a=>(this.logger.log(`[Response]: ${JSON.stringify(a.data,null,4)}`),a),a=>{const{response:s,message:o,config:{method:c,url:u,data:l,params:p}}=a,b=s==null?void 0:s.status;throw this.logger.error({status:b,message:o,method:c,url:u,data:l,params:p}),a});this.logInterceptorIds=[t,n]}removeLogInterceptor(){this.logInterceptorIds.forEach(this.axios.interceptors.request.eject)}static getInstance(){return this.instance??(this.instance=new D)}setLogEnabled(t){return this.isLogEnabled=t,this.isLogEnabled?this.addLogInterceptor():this.removeLogInterceptor(),this.isLogEnabled}get(t,n){return this.axios.get(t,{params:n})}post(t,n,a,s){return this.axios.post(t,a,{params:n,...s&&{responseType:s}})}}class I{constructor(){this.isLogEnabled=!1}static getInstance(){return this.instance??(this.instance=new I)}get value(){return{partner_id:this.partnerId??"",partner_key:this.partnerKey??"",base_url:this.baseURL??"",access_token:this.accessToken??"",shop_id:this.shopId??""}}}const Oe=D.getInstance();function Vn(r){return async function(n){if(!r.transformRequestParameter)return n;const a=r.transformRequestParameter(n);if(!r.transformRequestParameterSchema)return n;const s=await r.transformRequestParameterSchema.safeParseAsync(a);if(!s.success)throw new Error(`transform request parameters error: ${s.error.message}`);return s.data}}function _(r){const t=Vn(r);return async function(a){const s=await r.requestParameterSchema.safeParseAsync(a);if(!s.success)throw new Error(`parse request parameters error: ${s.error.message}`);const o=await t(s.data),c=S(o,g=>fe(g.toString())),u=I.getInstance(),l=u.value;Oe.setLogEnabled(u.isLogEnabled);const p=await U({...l,path:r.path,params:c}),b=await Oe.get(p),T=S(b.data,g=>ye(g.toString())),f=await r.responseSchema.safeParseAsync(T);if(!f.success)throw new Error(`parse response error: ${f.error.message}`);return f.data}}const Ae=D.getInstance();function h({responseType:r="json",...t}){function n(a){return t.transformRequestParameter?t.transformRequestParameter(a):a}return async function(s){const o=n(s),c=await t.requestParameterSchema.safeParseAsync(o);if(!c.success)throw new Error(`parse request parameters error: ${c.error.message}`);const u=I.getInstance(),l=u.value;Ae.setLogEnabled(u.isLogEnabled);const p=await U({...l,path:t.path,params:{}}),b=S(c.data,g=>fe(g.toString())),T=await Ae.post(p,{},b,r);if(r!=="json"||t.responseSchema===void 0)return T.data;const f=S(T.data,g=>ye(g.toString())),E=await t.responseSchema.safeParseAsync(f);if(!E.success)throw new Error(`parse response error: ${E.error.message}`);return E.data}}const Le="/api/v2/logistic/get_shipping_parameter",je="/api/v2/logistic/ship_order",Ce="/api/v2/logistics/update_shipping_order",ve="/api/v2/logistics/get_tracking_number",De="/api/v2/logistic/get_shipping_document_parameter",Ne="/api/v2/logistic/create_shipping_document",xe="/api/v2/logistics/get_shipping_document_result",Ue="/api/v2/logistics/download_shipping_document",G=["plp_number","first_mile_tracking_number","last_mile_tracking_number"],Fn=j(G),N=["NORMAL_AIR_WAYBILL","THERMAL_AIR_WAYBILL","NORMAL_JOB_AIR_WAYBILL","THERMAL_JOB_AIR_WAYBILL"],ke=["READY","FAILED","PROCESSING"],Kn=e.z.object({orderList:e.z.array(e.z.object({orderSn:e.z.string(),packageNumber:e.z.string().optional(),trackingNumber:e.z.string().optional(),shippingDocumentType:e.z.enum(N).optional()})).min(1).max(50)}),zn=e.z.object({error:e.z.string().optional(),message:e.z.string().optional(),warning:e.z.object({orderSn:e.z.string(),packageNumber:e.z.string().optional()}).optional(),response:e.z.object({orderSn:e.z.string(),packageNumber:e.z.string().optional(),failError:e.z.string(),failMessage:e.z.string()}).optional(),requestId:e.z.string()}),Bn=h({path:Ne,requestParameterSchema:Kn,responseSchema:zn}),Wn=e.z.object({shippingDocumentType:e.z.enum(N).optional(),orderList:e.z.array(e.z.object({orderSn:e.z.string(),packageNumber:e.z.string().optional()})).max(50)}),Yn=e.z.object({data:e.z.string()}),Zn=h({path:Ue,requestParameterSchema:Wn,responseSchema:Yn,responseType:"stream"}),Jn=e.z.object({orderList:e.z.array(e.z.object({orderSn:e.z.string(),packageNumber:e.z.number().optional()})).min(1).max(50)}),Qn=e.z.object({error:e.z.string().optional(),message:e.z.string().optional(),warning:e.z.object({orderSn:e.z.string(),packageNumber:e.z.number().optional()}).optional(),response:e.z.object({orderSn:e.z.string(),packageNumber:e.z.number().optional(),suggestShippingDocumentType:e.z.string(),selectableShippingDocumentType:e.z.array(e.z.string()),failError:e.z.string(),failMessage:e.z.string()}).optional(),requestId:e.z.string()}),Xn=h({path:De,requestParameterSchema:Jn,responseSchema:Qn}),ea=e.z.object({orderList:e.z.array(e.z.object({orderSn:e.z.string(),packageNumber:e.z.string().optional(),shippingDocumentType:e.z.enum(N).optional()})).max(50)}),ra=e.z.object({error:e.z.string().optional(),message:e.z.string().optional(),warning:e.z.object({orderSn:e.z.string(),packageNumber:e.z.number().optional()}).optional(),response:e.z.object({orderSn:e.z.string(),packageNumber:e.z.string(),status:e.z.enum(ke),failError:e.z.string(),failMessage:e.z.string()}).optional(),requestId:e.z.string()}),ta=h({path:xe,requestParameterSchema:ea,responseSchema:ra}),de=e.z.object({orderSn:e.z.string(),packageNumber:e.z.number().optional(),responseOptionalFields:e.z.array(e.z.enum(G)).optional()}),na=e.z.object({error:e.z.string().optional(),message:e.z.string().optional(),response:e.z.object({}).optional(),requestId:e.z.string()}),aa=_({path:ve,requestParameterSchema:de,responseSchema:na,transformRequestParameterSchema:de.extend({responseOptionalFields:e.z.string().optional()}),transformRequestParameter(r){var t;return{...r,responseOptionalFields:(t=r.responseOptionalFields)==null?void 0:t.join(",")}}}),sa=e.z.object({orderSn:e.z.string(),packageNumber:e.z.string().optional()}),ia=e.z.object({error:e.z.string().optional(),message:e.z.string().optional(),response:e.z.object({infoNeeded:e.z.object({dropoff:e.z.array(e.z.string()),pickup:e.z.array(e.z.string()),nonIntegrated:e.z.array(e.z.string())}),dropoff:e.z.object({branchList:e.z.array(e.z.object({branch_id:e.z.number(),region:e.z.string(),state:e.z.string(),city:e.z.string(),address:e.z.string(),zipcode:e.z.string(),district:e.z.string(),town:e.z.string()})),slugList:e.z.array(e.z.object({slug:e.z.string(),slugName:e.z.string()}))}),pickup:e.z.object({addressList:e.z.array(e.z.object({addressId:e.z.number(),region:e.z.string(),state:e.z.string(),city:e.z.string(),district:e.z.string(),town:e.z.string(),address:e.z.string(),zipcode:e.z.string(),addressFlag:e.z.array(e.z.string())})),timeSlotList:e.z.array(e.z.object({date:e.z.number(),timeText:e.z.string(),pickupTimeId:e.z.string()}))})}).optional(),requestId:e.z.string()}),oa=_({path:Le,requestParameterSchema:sa,responseSchema:ia}),ca=e.z.object({orderSn:e.z.string(),packageNumber:e.z.string().optional(),pickup:e.z.object({addressId:e.z.number().optional(),pickupTimeId:e.z.string().optional(),trackingNumber:e.z.string().optional()}).optional(),dropoff:e.z.object({branchId:e.z.number().optional(),senderRealName:e.z.string().optional(),trackingNumber:e.z.string().optional(),slug:e.z.string().optional()}).optional(),nonIntegrated:e.z.object({trackingNumber:e.z.string().optional()}).optional()}),ua=e.z.object({error:e.z.string().optional(),message:e.z.string().optional(),requestId:e.z.string()}),pa=h({path:je,requestParameterSchema:ca,responseSchema:ua}),ga=e.z.object({orderSn:e.z.string(),packageNumber:e.z.string().optional(),pickup:e.z.object({addressId:e.z.number(),pickupTimeId:e.z.string()})}),ma=e.z.object({error:e.z.string().optional(),message:e.z.string().optional(),requestId:e.z.string()}),la=h({path:Ce,requestParameterSchema:ga,responseSchema:ma}),ba=Object.freeze(Object.defineProperty({__proto__:null,createShippingDocument:Bn,downloadShippingDocument:Zn,getShippingDocumentParameter:Xn,getShippingDocumentResult:ta,getShippingParameter:oa,getTrackingNumber:aa,shipOrder:pa,updateShipOrder:la},Symbol.toStringTag,{value:"Module"})),we="/api/v2/order/get_order_list",Ge="/api/v2/order/get_order_detail",$=["UNPAID","READY_TO_SHIP","PROCESSED","SHIPPED","COMPLETED","IN_CANCEL","CANCELLED","INVOICE_PENDING"],_a=j($),M=["buyer_user_id","buyer_username","estimated_shipping_fee","recipient_address","actual_shipping_fee","goods_to_declare","note","note_update_time","item_list","pay_time","dropshipper","dropshipper_phone","split_up","buyer_cancel_reason","cancel_by","cancel_reason","actual_shipping_fee_confirmed","buyer_cpf_id","fulfillment_flag","pickup_done_time","package_list","shipping_carrier","payment_method","total_amount","buyer_username","invoice_data","checkout_shipping_carrier","reverse_shipping_fee","order_chargeable_weight_gram","edt","prescription_images","prescription_check_status"],fa=j(M),$e=e.z.object({orderSnList:e.z.array(e.z.string()),responseOptionalFields:e.z.array(e.z.enum(M)).optional()}),Sa=e.z.object({error:e.z.string().optional(),message:e.z.string().optional(),response:e.z.object({orderList:e.z.array(e.z.object({checkoutShippingCarrier:e.z.string().nullable(),reverseShippingFee:e.z.number().nullable(),actualShippingFee:e.z.number().nullable(),actualShippingFeeConfirmed:e.z.boolean(),buyerCancelReason:e.z.string(),buyerCpfId:e.z.string().nullable(),buyerUserId:e.z.number(),buyerUsername:e.z.string(),cancelBy:e.z.string(),cancelReason:e.z.string(),cod:e.z.boolean(),createTime:e.z.number(),currency:e.z.string(),daysToShip:e.z.number(),dropshipper:e.z.string(),dropshipperPhone:e.z.string(),estimatedShippingFee:e.z.number(),fulfillmentFlag:e.z.string(),goodsToDeclare:e.z.boolean(),invoiceData:e.z.object({number:e.z.string(),seriesNumber:e.z.string(),accessKey:e.z.string(),issueDate:e.z.number(),totalValue:e.z.number(),productsTotalValue:e.z.number(),taxCode:e.z.string()}).nullable(),itemList:e.z.array(e.z.object({itemId:e.z.number(),itemName:e.z.string(),itemSku:e.z.string(),modelId:e.z.number(),modelName:e.z.string(),modelSku:e.z.string(),modelQuantityPurchased:e.z.number(),modelOriginalPrice:e.z.number(),modelDiscountedPrice:e.z.number(),wholesale:e.z.boolean(),weight:e.z.number(),addOnDeal:e.z.boolean(),mainItem:e.z.boolean(),addOnDealId:e.z.number(),promotionType:e.z.string(),promotionId:e.z.number(),orderItemId:e.z.number(),promotionGroupId:e.z.number(),imageInfo:e.z.object({imageUrl:e.z.string()}),productLocationId:e.z.array(e.z.string())})),prescriptionImages:e.z.array(e.z.string()).nullable(),prescriptionCheckStatus:e.z.number().nullable(),edtFrom:e.z.number().optional(),edtTo:e.z.number().optional(),orderChargeableWeightGram:e.z.number(),messageToSeller:e.z.string(),note:e.z.string(),noteUpdateTime:e.z.number(),orderSn:e.z.string(),orderStatus:e.z.string(),packageList:e.z.array(e.z.object({packageNumber:e.z.string(),logisticsStatus:e.z.string(),shippingCarrier:e.z.string(),itemList:e.z.array(e.z.object({itemId:e.z.number(),modelId:e.z.number(),modelQuantity:e.z.number()})),parcelChargeableWeightGram:e.z.number()})),payTime:e.z.number().nullable(),paymentMethod:e.z.string(),pickupDoneTime:e.z.number(),recipientAddress:e.z.object({name:e.z.string(),phone:e.z.string(),town:e.z.string(),district:e.z.string(),city:e.z.string(),state:e.z.string(),region:e.z.string(),zipcode:e.z.string(),fullAddress:e.z.string()}),region:e.z.string(),shipByDate:e.z.number(),shippingCarrier:e.z.string(),splitUp:e.z.boolean(),totalAmount:e.z.number(),updateTime:e.z.number()}))}).optional(),requestId:e.z.string()}),Ia=_({path:Ge,requestParameterSchema:$e,transformRequestParameterSchema:$e.extend({responseOptionalFields:e.z.string().optional()}),transformRequestParameter(r){var t;return{...r,responseOptionalFields:(t=r.responseOptionalFields)==null?void 0:t.join(",")}},responseSchema:Sa}),ha=e.z.object({timeRangeField:e.z.enum(["create_time","update_time"]),timeFrom:e.z.date(),timeTo:e.z.date(),pageSize:e.z.number().min(1).max(100),cursor:e.z.string().optional(),orderStatus:e.z.enum($).optional(),responseOptionalFields:e.z.enum(["order_status"]).optional().default("order_status")}),Ta=e.z.object({error:e.z.string().optional(),message:e.z.string().optional(),response:e.z.object({more:e.z.boolean(),nextCursor:e.z.string(),orderList:e.z.array(e.z.object({orderSn:e.z.string()}))}).optional(),requestId:e.z.string()}),Pa=_({path:we,requestParameterSchema:ha,responseSchema:Ta}),Ra=Object.freeze(Object.defineProperty({__proto__:null,getOrderDetail:Ia,getOrderList:Pa},Symbol.toStringTag,{value:"Module"})),Me="/api/v2/product/get_item_base_info",qe="/api/v2/product/get_item_extra_info",He="/api/v2/product/get_item_list",Ve="/api/v2/product/get_model_list",q=["NORMAL","DELETED","UNLIST","BANNED"],Ea=e.z.object({itemIdList:e.z.string(),needTaxInfo:e.z.coerce.boolean().optional(),needComplaintPolicy:e.z.coerce.boolean().optional()}),ya=e.z.object({error:e.z.string(),message:e.z.string(),warning:e.z.string(),requestId:e.z.string(),response:e.z.object({itemList:e.z.array(e.z.object({itemId:e.z.number(),categoryId:e.z.number(),itemName:e.z.string(),itemSku:e.z.string(),createTime:e.z.number(),updateTime:e.z.number(),attributeList:e.z.array(e.z.object({attributeId:e.z.number(),originalAttributeName:e.z.string(),isMandatory:e.z.boolean(),attributeValueList:e.z.array(e.z.object({valueId:e.z.number(),originalValueName:e.z.string(),valueUnit:e.z.string()}))})).optional(),priceInfo:e.z.array(e.z.object({currency:e.z.string(),originalPrice:e.z.number(),currentPrice:e.z.number()})).optional(),stockInfoV2:e.z.object({summaryInfo:e.z.object({totalReservedStock:e.z.number(),totalAvailableStock:e.z.number()}),sellerStock:e.z.array(e.z.object({locationId:e.z.string(),stock:e.z.number()})).optional()}).optional(),image:e.z.object({imageUrlList:e.z.array(e.z.string()),imageIdList:e.z.array(e.z.string())}),weight:e.z.string(),dimension:e.z.object({packageLength:e.z.number(),packageWidth:e.z.number(),packageHeight:e.z.number()}),logisticInfo:e.z.array(e.z.object({logisticId:e.z.number(),logisticName:e.z.string(),enabled:e.z.boolean(),shippingFee:e.z.number().optional(),isFree:e.z.boolean(),estimatedShippingFee:e.z.number().optional()})).optional(),preOrder:e.z.object({isPreOrder:e.z.boolean(),daysToShip:e.z.number()}),condition:e.z.string(),sizeChart:e.z.string(),itemStatus:e.z.string(),hasModel:e.z.boolean(),promotionId:e.z.number().optional(),brand:e.z.object({brandId:e.z.number(),originalBrandName:e.z.string()}),taxInfo:e.z.object({ncm:e.z.number(),sameStateCfop:e.z.number(),diffStateCfop:e.z.number(),csosn:e.z.number(),origin:e.z.number()}).optional(),descriptionType:e.z.string(),descriptionInfo:e.z.object({extendedDescription:e.z.object({fieldList:e.z.array(e.z.object({fieldType:e.z.string(),text:e.z.string().optional(),imageInfo:e.z.object({imageId:e.z.string(),imageUrl:e.z.string()}).optional()}))}).optional()}).optional()})).optional()})}),Oa=_({path:Me,requestParameterSchema:Ea,responseSchema:ya,transformRequestParameter(r){return r.needTaxInfo=!!r.needTaxInfo,r.needComplaintPolicy=!!r.needComplaintPolicy,r}}),Aa=e.z.object({itemIdList:e.z.string()}),La=e.z.object({error:e.z.string(),message:e.z.string(),warning:e.z.string().optional(),requestId:e.z.string(),response:e.z.object({itemList:e.z.array(e.z.object({itemId:e.z.number(),sale:e.z.number(),views:e.z.number(),likes:e.z.number(),ratingStar:e.z.number(),commentCount:e.z.number()})).optional()}).optional()}),ja=_({path:qe,requestParameterSchema:Aa,responseSchema:La}),Fe=e.z.object({offset:e.z.number().int().min(0).optional(),pageSize:e.z.number().int().positive().max(100).optional(),updateTimeFrom:e.z.date().optional(),updateTimeTo:e.z.date().optional(),itemStatus:e.z.array(e.z.enum(q))}),Ca=e.z.object({error:e.z.string().optional(),message:e.z.string().nullable().optional(),warning:e.z.string().nullable().optional(),requestId:e.z.string(),response:e.z.object({item:e.z.array(e.z.object({itemId:e.z.number().int(),itemStatus:e.z.enum(q),updateTime:e.z.number().int().optional()})).optional()}).optional(),totalCount:e.z.number().int().optional(),hasNextPage:e.z.boolean().optional(),nextOffset:e.z.number().int().optional()}),va=_({path:He,requestParameterSchema:Fe,transformRequestParameterSchema:Fe.extend({updateTimeFrom:e.z.string(),updateTimeTo:e.z.string()}),transformRequestParameter(r){return{...r,updateTimeFrom:P(r.updateTimeFrom??new Date("01/01/2022")),updateTimeTo:P(r.updateTimeTo??new Date)}},responseSchema:Ca}),Da=e.z.object({item_id:e.z.string()}),Na=e.z.object({error:e.z.string(),message:e.z.string(),warning:e.z.string(),requestId:e.z.string(),response:e.z.object({tierVariation:e.z.array(e.z.object({name:e.z.string(),optionList:e.z.array(e.z.object({option:e.z.string()}))})),model:e.z.array(e.z.object({modelId:e.z.number(),modelStatus:e.z.string(),promotionId:e.z.number(),tierIndex:e.z.array(e.z.number()),priceInfo:e.z.array(e.z.object({currentPrice:e.z.number(),originalPrice:e.z.number(),inflatedPriceOfCurrentPrice:e.z.number(),inflatedPriceOfOriginalPrice:e.z.number()})),modelSku:e.z.string(),preOrder:e.z.object({isPreOrder:e.z.boolean(),daysToShip:e.z.number()}),stockInfoV2:e.z.object({summaryInfo:e.z.object({totalReservedStock:e.z.number(),totalAvailableStock:e.z.number()}),sellerStock:e.z.array(e.z.object({locationId:e.z.string(),stock:e.z.number()}))})}))})}),xa=_({path:Ve,requestParameterSchema:Da,responseSchema:Na}),Ua=Object.freeze(Object.defineProperty({__proto__:null,getItemBaseInfo:Oa,getItemExtraInfo:ja,getItemList:va,getModelList:xa},Symbol.toStringTag,{value:"Module"})),Ke="/api/v2/auth/token/get",ze=e.z.object({code:e.z.string(),partnerId:e.z.number().optional(),shopId:e.z.number().optional(),mainAccountId:e.z.number().optional()}),Be=e.z.object({accessToken:e.z.string(),error:e.z.string(),expireIn:e.z.number(),message:e.z.string(),refreshToken:e.z.string(),requestId:e.z.string(),merchantIdList:e.z.array(e.z.number()).optional(),shopIdList:e.z.array(e.z.number()).optional()}),ka=h({path:Ke,requestParameterSchema:ze,responseSchema:Be,transformRequestParameter(r){return{...r,partnerId:I.getInstance().partnerId}}}),H="/api/v2/shop/auth_partner";async function da({redirectURL:r,redirectSign:t}){const{baseURL:n,partnerId:a,partnerKey:s}=I.getInstance();if(!s||!a)throw new Error("partnerKey is undefined");const o=new URL(H,n),c=P(new Date),u=await x(s,a.toString(),H,c),l=new URL(r);return l.searchParams.append("sign",t),o.search=new URLSearchParams({partner_id:a.toString(),redirect:l.toString(),timestamp:c,sign:u}).toString(),o.toString()}const wa=e.z.object({code:e.z.string(),shop_id:e.z.string(),sign:e.z.string()});async function Ga(r){const t=await wa.safeParseAsync(r);if(!t.success)throw new Error(`parse request parameters error: ${t.error.message}`);const{code:n,shop_id:a,sign:s}=t.data;return{code:n,shopId:a,sign:s}}const $a=Object.freeze(Object.defineProperty({__proto__:null,getAccessToken:ka,getAccessTokenRequestParametersSchema:ze,getAccessTokenResponseSchema:Be,logistic:ba,order:Ra,product:Ua,shop:Object.freeze(Object.defineProperty({__proto__:null,authPartner:da,verifyCallback:Ga},Symbol.toStringTag,{value:"Module"}))},Symbol.toStringTag,{value:"Module"})),V=e.z.object({partnerId:e.z.coerce.number().optional(),partnerKey:e.z.coerce.string().optional(),baseURL:e.z.coerce.string().url().optional(),accessToken:e.z.coerce.string().optional(),shopId:e.z.coerce.number().optional()}).safeParse({partnerId:process.env.SHOPEE_SDK_PARTNER_ID,partnerKey:process.env.SHOPEE_SDK_PARTNER_KEY,baseURL:process.env.SHOPEE_SDK_BASE_URL,accessToken:process.env.SHOPEE_SDK_ACCESS_TOKEN,shopId:process.env.SHOPEE_SDK_SHOP_ID});if(!V.success)throw new Error(V.error.message);const L=V.data,m=I.getInstance();class Ma{constructor(t={}){m.accessToken=t.accessToken??L.accessToken,m.baseURL=t.baseURL??L.baseURL,m.partnerId=t.partnerId??L.partnerId,m.partnerKey=t.partnerKey??L.partnerKey,m.shopId=t.shopId??L.shopId,m.isLogEnabled=t.isLogEnabled??!1}setPartnerId(t){return m.partnerId=t,this}setBaseURL(t){return m.baseURL=t,this}setPartnerKey(t){return m.partnerKey=t,this}setAccessToken(t){return m.accessToken=t,this}setShopId(t){return m.shopId=t,this}setIsLogEnabled(t){return m.isLogEnabled=t,this}get v2(){return $a}}i.API_V2_LOGISTIC_CREATE_SHIPPING_DOCUMENT=Ne,i.API_V2_LOGISTIC_DOWNLOAD_SHIPPING_DOCUMENT=Ue,i.API_V2_LOGISTIC_GET_SHIPPING_DOCUMENT_PARAMETER=De,i.API_V2_LOGISTIC_GET_SHIPPING_DOCUMENT_RESULT=xe,i.API_V2_LOGISTIC_GET_SHIPPING_PARAMETER=Le,i.API_V2_LOGISTIC_GET_TRACKING_NUMBER=ve,i.API_V2_LOGISTIC_SHIP_ORDER=je,i.API_V2_LOGISTIC_UPDATE_SHIP_ORDER=Ce,i.API_V2_ORDER_GET_ORDER_DETAIL_PATH=Ge,i.API_V2_ORDER_GET_ORDER_LIST_PATH=we,i.API_V2_PRODUCT_GET_ITEM_BASE_INFO_PATH=Me,i.API_V2_PRODUCT_GET_ITEM_EXTRA_INFO_PATH=qe,i.API_V2_PRODUCT_GET_ITEM_LIST_PATH=He,i.API_V2_PRODUCT_GET_MODEL_LIST_PATH=Ve,i.API_V2_PUBLIC_GET_ACCESS_TOKEN_PATH=Ke,i.API_V2_SHOP_AUTH_PARTNER=H,i.ITEM_STATUS=q,i.ShopeeSdk=Ma,i.V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS=G,i.V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS_MAP=Fn,i.V2_LOGISTIC_SHIPPING_DOCUMENT_TYPES=N,i.V2_LOGISTIC_SHIPPING_STATUSES=ke,i.V2_ORDER_DETAIL_RESPONSE_OPTIONAL_FIELDS=M,i.V2_ORDER_DETAIL_RESPONSE_OPTIONAL_FIELDS_MAP=fa,i.V2_ORDER_STATUS=$,i.V2_ORDER_STATUS_MAP=_a,i.createConstantsMap=j,i.generateHmac=x,i.signURL=U,i.toTimestamp=P,i.transformObjectKeys=S,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})});
