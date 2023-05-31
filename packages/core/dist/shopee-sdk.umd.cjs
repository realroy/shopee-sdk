(function(i,R){typeof exports=="object"&&typeof module<"u"?R(exports,require("axios"),require("zod")):typeof define=="function"&&define.amd?define(["exports","axios","zod"],R):(i=typeof globalThis<"u"?globalThis:i||self,R(i.ShopeeSDK={},i.axios,i.zod))})(this,function(i,R,e){"use strict";async function j(r,...t){let n;return typeof globalThis.crypto<"u"&&(n=await Oe(r,...t)),n=await Le(r,...t),n}async function Oe(r,...t){const n=new TextEncoder,a=n.encode(r);let s=new Uint8Array;t.forEach(c=>{c&&(s=n.encode(c))});const o=await crypto.subtle.importKey("raw",a,{name:"HMAC",hash:"SHA-256"},!1,["sign"]),u=await crypto.subtle.sign({name:"HMAC",hash:{name:"sha-256"}},o,s),p=new Uint8Array(u);return Array.from(p).map(c=>c.toString(16).padStart(2,"0")).join("")}async function Le(r,...t){const{createHmac:n}=await import("crypto"),a=n("sha256",r);return t.filter(s=>!!s).forEach(s=>a.update(s)),a.digest("hex")}function E(r){const t=r?r.getTime():Date.now();return Math.round(t/1e3).toString()}async function O(r){const{partner_id:t,partner_key:n,path:a,base_url:s,access_token:o,shop_id:u,params:p={}}=r,g=t.toString(),c=u.toString(),l={};for(const v in p){const S=p[v];Array.isArray(S)?l[v]=[S[0],...S.slice(1).map(ia=>`&${v}=${ia}`)].join(""):S instanceof Date?l[v]=E(S):l[v]=`${S}`}const m=E(),D=new URL(a,s),h=await j(n,g,a,m,o,c);return D.search=new URLSearchParams({...l,partner_id:g,shop_id:c,...!!o&&{access_token:o},sign:h,timestamp:m}).toString(),D.toString().replace(new RegExp("%26","g"),"&").replace(new RegExp("%3D","g"),"=")}function I(r,t){if(typeof r!="object"||Array.isArray(r)||r===null)return r;const n={};for(const[a,s]of Object.entries(r))n[t(a)]=I(s,t);return n}var P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $e(r,t,n,a){var s=-1,o=r==null?0:r.length;for(a&&o&&(n=r[++s]);++s<o;)n=t(n,r[s],s,r);return n}var we=$e;function Ce(r){return function(t){return r==null?void 0:r[t]}}var ke=Ce,Ue=ke,De={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},qe=Ue(De),Me=qe,He=typeof P=="object"&&P&&P.Object===Object&&P,Ne=He,ze=Ne,Ge=typeof self=="object"&&self&&self.Object===Object&&self,Ke=ze||Ge||Function("return this")(),Ve=Ke,We=Ve,Be=We.Symbol,L=Be;function Fe(r,t){for(var n=-1,a=r==null?0:r.length,s=Array(a);++n<a;)s[n]=t(r[n],n,r);return s}var Ze=Fe,Je=Array.isArray,Ye=Je,q=L,M=Object.prototype,Qe=M.hasOwnProperty,Xe=M.toString,d=q?q.toStringTag:void 0;function er(r){var t=Qe.call(r,d),n=r[d];try{r[d]=void 0;var a=!0}catch{}var s=Xe.call(r);return a&&(t?r[d]=n:delete r[d]),s}var rr=er,tr=Object.prototype,nr=tr.toString;function ar(r){return nr.call(r)}var sr=ar,H=L,ir=rr,or=sr,cr="[object Null]",ur="[object Undefined]",N=H?H.toStringTag:void 0;function _r(r){return r==null?r===void 0?ur:cr:N&&N in Object(r)?ir(r):or(r)}var pr=_r;function gr(r){return r!=null&&typeof r=="object"}var lr=gr,mr=pr,br=lr,fr="[object Symbol]";function hr(r){return typeof r=="symbol"||br(r)&&mr(r)==fr}var yr=hr,z=L,Sr=Ze,Rr=Ye,dr=yr,Tr=1/0,G=z?z.prototype:void 0,K=G?G.toString:void 0;function V(r){if(typeof r=="string")return r;if(Rr(r))return Sr(r,V)+"";if(dr(r))return K?K.call(r):"";var t=r+"";return t=="0"&&1/r==-Tr?"-0":t}var vr=V,Er=vr;function Ir(r){return r==null?"":Er(r)}var x=Ir,Pr=Me,xr=x,Ar=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,jr="\\u0300-\\u036f",Or="\\ufe20-\\ufe2f",Lr="\\u20d0-\\u20ff",$r=jr+Or+Lr,wr="["+$r+"]",Cr=RegExp(wr,"g");function kr(r){return r=xr(r),r&&r.replace(Ar,Pr).replace(Cr,"")}var Ur=kr,Dr=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function qr(r){return r.match(Dr)||[]}var Mr=qr,Hr=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Nr(r){return Hr.test(r)}var zr=Nr,W="\\ud800-\\udfff",Gr="\\u0300-\\u036f",Kr="\\ufe20-\\ufe2f",Vr="\\u20d0-\\u20ff",Wr=Gr+Kr+Vr,B="\\u2700-\\u27bf",F="a-z\\xdf-\\xf6\\xf8-\\xff",Br="\\xac\\xb1\\xd7\\xf7",Fr="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Zr="\\u2000-\\u206f",Jr=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Z="A-Z\\xc0-\\xd6\\xd8-\\xde",Yr="\\ufe0e\\ufe0f",J=Br+Fr+Zr+Jr,Y="['’]",Q="["+J+"]",Qr="["+Wr+"]",X="\\d+",Xr="["+B+"]",ee="["+F+"]",re="[^"+W+J+X+B+F+Z+"]",et="\\ud83c[\\udffb-\\udfff]",rt="(?:"+Qr+"|"+et+")",tt="[^"+W+"]",te="(?:\\ud83c[\\udde6-\\uddff]){2}",ne="[\\ud800-\\udbff][\\udc00-\\udfff]",y="["+Z+"]",nt="\\u200d",ae="(?:"+ee+"|"+re+")",at="(?:"+y+"|"+re+")",se="(?:"+Y+"(?:d|ll|m|re|s|t|ve))?",ie="(?:"+Y+"(?:D|LL|M|RE|S|T|VE))?",oe=rt+"?",ce="["+Yr+"]?",st="(?:"+nt+"(?:"+[tt,te,ne].join("|")+")"+ce+oe+")*",it="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ot="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ct=ce+oe+st,ut="(?:"+[Xr,te,ne].join("|")+")"+ct,_t=RegExp([y+"?"+ee+"+"+se+"(?="+[Q,y,"$"].join("|")+")",at+"+"+ie+"(?="+[Q,y+ae,"$"].join("|")+")",y+"?"+ae+"+"+se,y+"+"+ie,ot,it,X,ut].join("|"),"g");function pt(r){return r.match(_t)||[]}var gt=pt,lt=Mr,mt=zr,bt=x,ft=gt;function ht(r,t,n){return r=bt(r),t=n?void 0:t,t===void 0?mt(r)?ft(r):lt(r):r.match(t)||[]}var yt=ht,St=we,Rt=Ur,dt=yt,Tt="['’]",vt=RegExp(Tt,"g");function Et(r){return function(t){return St(dt(Rt(t).replace(vt,"")),r,"")}}var ue=Et,It=ue,Pt=It(function(r,t,n){return r+(n?"_":"")+t.toLowerCase()}),xt=Pt;function At(r,t,n){var a=-1,s=r.length;t<0&&(t=-t>s?0:s+t),n=n>s?s:n,n<0&&(n+=s),s=t>n?0:n-t>>>0,t>>>=0;for(var o=Array(s);++a<s;)o[a]=r[a+t];return o}var jt=At,Ot=jt;function Lt(r,t,n){var a=r.length;return n=n===void 0?a:n,!t&&n>=a?r:Ot(r,t,n)}var $t=Lt,wt="\\ud800-\\udfff",Ct="\\u0300-\\u036f",kt="\\ufe20-\\ufe2f",Ut="\\u20d0-\\u20ff",Dt=Ct+kt+Ut,qt="\\ufe0e\\ufe0f",Mt="\\u200d",Ht=RegExp("["+Mt+wt+Dt+qt+"]");function Nt(r){return Ht.test(r)}var _e=Nt;function zt(r){return r.split("")}var Gt=zt,pe="\\ud800-\\udfff",Kt="\\u0300-\\u036f",Vt="\\ufe20-\\ufe2f",Wt="\\u20d0-\\u20ff",Bt=Kt+Vt+Wt,Ft="\\ufe0e\\ufe0f",Zt="["+pe+"]",$="["+Bt+"]",w="\\ud83c[\\udffb-\\udfff]",Jt="(?:"+$+"|"+w+")",ge="[^"+pe+"]",le="(?:\\ud83c[\\udde6-\\uddff]){2}",me="[\\ud800-\\udbff][\\udc00-\\udfff]",Yt="\\u200d",be=Jt+"?",fe="["+Ft+"]?",Qt="(?:"+Yt+"(?:"+[ge,le,me].join("|")+")"+fe+be+")*",Xt=fe+be+Qt,en="(?:"+[ge+$+"?",$,le,me,Zt].join("|")+")",rn=RegExp(w+"(?="+w+")|"+en+Xt,"g");function tn(r){return r.match(rn)||[]}var nn=tn,an=Gt,sn=_e,on=nn;function cn(r){return sn(r)?on(r):an(r)}var un=cn,_n=$t,pn=_e,gn=un,ln=x;function mn(r){return function(t){t=ln(t);var n=pn(t)?gn(t):void 0,a=n?n[0]:t.charAt(0),s=n?_n(n,1).join(""):t.slice(1);return a[r]()+s}}var bn=mn,fn=bn,hn=fn("toUpperCase"),yn=hn,Sn=x,Rn=yn;function dn(r){return Rn(Sn(r).toLowerCase())}var Tn=dn,vn=Tn,En=ue,In=En(function(r,t,n){return t=t.toLowerCase(),r+(n?vn(t):t)}),Pn=In;class A{constructor(){this.logger=console,this.logInterceptorIds=[],this.isLogEnabled=!1,this.axios=R.create(),this.isLogEnabled&&this.addLogInterceptor()}addLogInterceptor(){const t=this.axios.interceptors.request.use(a=>(this.logger.log(`${a.url}`),a.data&&this.logger.info(`[Body]: ${JSON.stringify(a.data,null,4)}`),a),a=>{throw this.logger.error(a),a}),n=this.axios.interceptors.response.use(a=>(this.logger.log(`[Response]: ${JSON.stringify(a.data,null,4)}`),a),a=>{const{response:s,message:o,config:{method:u,url:p,data:g,params:c}}=a,l=s==null?void 0:s.status;throw this.logger.error({status:l,message:o,method:u,url:p,data:g,params:c}),a});this.logInterceptorIds=[t,n]}removeLogInterceptor(){this.logInterceptorIds.forEach(this.axios.interceptors.request.eject)}static getInstance(){return this.instance??(this.instance=new A)}setLogEnabled(t){return this.isLogEnabled=t,this.isLogEnabled?this.addLogInterceptor():this.removeLogInterceptor(),this.isLogEnabled}get(t,n){return this.axios.get(t,{params:n})}post(t,n,a){return this.axios.post(t,a,{params:n})}}class b{constructor(){this.isLogEnabled=!1}static getInstance(){return this.instance??(this.instance=new b)}get value(){return{partner_id:this.partnerId??"",partner_key:this.partnerKey??"",base_url:this.baseURL??"",access_token:this.accessToken??"",shop_id:this.shopId??""}}}const he=A.getInstance();function f(r){return async function(n){const a=r.transformRequestParameter??(h=>h),s=await r.requestParameterSchema.transform(a).safeParseAsync(n);if(!s.success)throw new Error(`parse request parameters error: ${s.error.message}`);const o=r.toCamelCase?I(s.data,h=>xt(h.toString())):s.data,u=b.getInstance(),p=u.value;he.setLogEnabled(u.isLogEnabled);const g=await O({...p,path:r.path,params:o}),c=await he.get(g),l=r.toCamelCase?I(c.data,h=>Pn(h.toString())):c.data,m=await r.responseSchema.safeParseAsync(l);if(!m.success)throw new Error(`parse response error: ${m.error.message}`);return m.data}}const ye=A.getInstance();function xn(r){return async function(n){const a=r.transformRequestParameter??(m=>m),s=await r.requestParameterSchema.transform(a).safeParseAsync(n);if(!s.success)throw new Error(`parse request parameters error: ${s.error.message}`);const o=b.getInstance(),u=o.value;ye.setLogEnabled(o.isLogEnabled);const p=await O({...u,path:r.path,params:{}}),g=s.data,{data:c}=await ye.post(p,{},g),l=await r.responseSchema.safeParseAsync(c);if(!l.success)throw new Error(`parse response error: ${l.error.message}`);return l.data}}const An="/api/v2/logistic/get-shipping-parameter",jn=e.z.object({orderSn:e.z.string(),packageNumber:e.z.number().optional()}),On=e.z.object({error:e.z.string().optional(),message:e.z.string().optional(),response:e.z.object({request_id:e.z.string(),error:e.z.string(),message:e.z.string(),response:e.z.object({info_needed:e.z.object({dropoff:e.z.array(e.z.string()),pickup:e.z.array(e.z.string()),non_integrated:e.z.array(e.z.string())}),dropoff:e.z.object({branch_list:e.z.array(e.z.object({branch_id:e.z.number(),region:e.z.string(),state:e.z.string(),city:e.z.string(),address:e.z.string(),zipcode:e.z.string(),district:e.z.string(),town:e.z.string()})),slug_list:e.z.array(e.z.object({slug:e.z.string(),slug_name:e.z.string()}))}),pickup:e.z.object({address_list:e.z.array(e.z.object({address_id:e.z.number(),region:e.z.string(),state:e.z.string(),city:e.z.string(),district:e.z.string(),town:e.z.string(),address:e.z.string(),zipcode:e.z.string(),address_flag:e.z.array(e.z.string())})),time_slot_list:e.z.array(e.z.object({date:e.z.number(),time_text:e.z.string(),pickup_time_id:e.z.string()}))})})}).optional(),request_id:e.z.string()}),Ln=f({path:An,requestParameterSchema:jn,responseSchema:On,toCamelCase:!0}),$n=Object.freeze(Object.defineProperty({__proto__:null,getShippingParameter:Ln},Symbol.toStringTag,{value:"Module"})),Se="/api/v2/order/get_order_list",Re="/api/v2/order/get_order_detail",de=["UNPAID","READY_TO_SHIP","PROCESSED","SHIPPED","COMPLETED","IN_CANCEL","CANCELLED","INVOICE_PENDING"],Te=["buyer_user_id","buyer_username","estimated_shipping_fee","recipient_address","actual_shipping_fee","goods_to_declare","note","note_update_time","item_list","pay_time","dropshipper","dropshipper_phone","split_up","buyer_cancel_reason","cancel_by","cancel_reason","actual_shipping_fee_confirmed","buyer_cpf_id","fulfillment_flag","pickup_done_time","package_list","shipping_carrier","payment_method","total_amount","buyer_username","invoice_data","checkout_shipping_carrier","reverse_shipping_fee","order_chargeable_weight_gram","edt","prescription_images","prescription_check_status"],wn=e.z.object({order_sn_list:e.z.array(e.z.string()),response_optional_fields:e.z.array(e.z.enum(Te)).optional()}),Cn=e.z.object({error:e.z.string().optional(),message:e.z.string().optional(),response:e.z.object({order_list:e.z.array(e.z.object({checkout_shipping_carrier:e.z.null(),reverse_shipping_fee:e.z.null(),actual_shipping_fee:e.z.null(),actual_shipping_fee_confirmed:e.z.boolean(),buyer_cancel_reason:e.z.string(),buyer_cpf_id:e.z.null(),buyer_user_id:e.z.number(),buyer_username:e.z.string(),cancel_by:e.z.string(),cancel_reason:e.z.string(),cod:e.z.boolean(),create_time:e.z.number(),currency:e.z.string(),days_to_ship:e.z.number(),dropshipper:e.z.string(),dropshipper_phone:e.z.string(),estimated_shipping_fee:e.z.number(),fulfillment_flag:e.z.string(),goods_to_declare:e.z.boolean(),invoice_data:e.z.null(),item_list:e.z.array(e.z.object({item_id:e.z.number(),item_name:e.z.string(),item_sku:e.z.string(),model_id:e.z.number(),model_name:e.z.string(),model_sku:e.z.string(),model_quantity_purchased:e.z.number(),model_original_price:e.z.number(),model_discounted_price:e.z.number(),wholesale:e.z.boolean(),weight:e.z.number(),add_on_deal:e.z.boolean(),main_item:e.z.boolean(),add_on_deal_id:e.z.number(),promotion_type:e.z.string(),promotion_id:e.z.number(),order_item_id:e.z.number(),promotion_group_id:e.z.number(),image_info:e.z.object({image_url:e.z.string()}),product_location_id:e.z.array(e.z.string())})),message_to_seller:e.z.string(),note:e.z.string(),note_update_time:e.z.number(),order_sn:e.z.string(),order_status:e.z.string(),package_list:e.z.array(e.z.object({package_number:e.z.string(),logistics_status:e.z.string(),shipping_carrier:e.z.string(),item_list:e.z.array(e.z.object({item_id:e.z.number(),model_id:e.z.number(),model_quantity:e.z.number()}))})),pay_time:e.z.number(),payment_method:e.z.string(),pickup_done_time:e.z.number(),recipient_address:e.z.object({name:e.z.string(),phone:e.z.string(),town:e.z.string(),district:e.z.string(),city:e.z.string(),state:e.z.string(),region:e.z.string(),zipcode:e.z.string(),full_address:e.z.string()}),region:e.z.string(),ship_by_date:e.z.number(),shipping_carrier:e.z.string(),split_up:e.z.boolean(),total_amount:e.z.number(),update_time:e.z.number()}))}).optional(),request_id:e.z.string()}),kn=f({path:Re,requestParameterSchema:wn,responseSchema:Cn}),Un=e.z.object({time_range_field:e.z.enum(["create_time","update_time"]),time_from:e.z.date(),time_to:e.z.date(),page_size:e.z.number().min(1).max(100),cursor:e.z.string().optional(),order_status:e.z.enum(de).optional(),response_optional_fields:e.z.enum(["order_status"]).optional().default("order_status")}),Dn=e.z.object({error:e.z.string().optional(),message:e.z.string().optional(),response:e.z.object({more:e.z.boolean(),next_cursor:e.z.string(),order_list:e.z.array(e.z.object({order_sn:e.z.string()}))}).optional(),request_id:e.z.string()}),qn=f({path:Se,requestParameterSchema:Un,responseSchema:Dn}),Mn=Object.freeze(Object.defineProperty({__proto__:null,getOrderDetail:kn,getOrderList:qn},Symbol.toStringTag,{value:"Module"})),ve="/api/v2/product/get_item_base_info",Ee="/api/v2/product/get_item_extra_info",Ie="/api/v2/product/get_item_list",Pe="/api/v2/product/get_model_list",C=["NORMAL","DELETED","UNLIST","BANNED"],Hn=e.z.object({item_id_list:e.z.string(),need_tax_info:e.z.coerce.boolean().optional(),need_complaint_policy:e.z.coerce.boolean().optional()}),Nn=e.z.object({error:e.z.string(),message:e.z.string(),warning:e.z.string(),request_id:e.z.string(),response:e.z.object({item_list:e.z.array(e.z.object({item_id:e.z.number(),category_id:e.z.number(),item_name:e.z.string(),item_sku:e.z.string(),create_time:e.z.number(),update_time:e.z.number(),attribute_list:e.z.array(e.z.object({attribute_id:e.z.number(),original_attribute_name:e.z.string(),is_mandatory:e.z.boolean(),attribute_value_list:e.z.array(e.z.object({value_id:e.z.number(),original_value_name:e.z.string(),value_unit:e.z.string()}))})).optional(),price_info:e.z.array(e.z.object({currency:e.z.string(),original_price:e.z.number(),current_price:e.z.number()})).optional(),stock_info_v2:e.z.object({summary_info:e.z.object({total_reserved_stock:e.z.number(),total_available_stock:e.z.number()}),seller_stock:e.z.array(e.z.object({location_id:e.z.string(),stock:e.z.number()})).optional()}).optional(),image:e.z.object({image_url_list:e.z.array(e.z.string()),image_id_list:e.z.array(e.z.string())}),weight:e.z.string(),dimension:e.z.object({package_length:e.z.number(),package_width:e.z.number(),package_height:e.z.number()}),logistic_info:e.z.array(e.z.object({logistic_id:e.z.number(),logistic_name:e.z.string(),enabled:e.z.boolean(),shipping_fee:e.z.number().optional(),is_free:e.z.boolean(),estimated_shipping_fee:e.z.number().optional()})).optional(),pre_order:e.z.object({is_pre_order:e.z.boolean(),days_to_ship:e.z.number()}),condition:e.z.string(),size_chart:e.z.string(),item_status:e.z.string(),has_model:e.z.boolean(),promotion_id:e.z.number().optional(),brand:e.z.object({brand_id:e.z.number(),original_brand_name:e.z.string()}),tax_info:e.z.object({ncm:e.z.number(),same_state_cfop:e.z.number(),diff_state_cfop:e.z.number(),csosn:e.z.number(),origin:e.z.number()}).optional(),description_type:e.z.string(),description_info:e.z.object({extended_description:e.z.object({field_list:e.z.array(e.z.object({field_type:e.z.string(),text:e.z.string().optional(),image_info:e.z.object({image_id:e.z.string(),image_url:e.z.string()}).optional()}))}).optional()}).optional()})).optional()})}),zn=f({path:ve,requestParameterSchema:Hn,responseSchema:Nn,transformRequestParameter(r){return r.need_tax_info=!!r.need_tax_info,r.need_complaint_policy=!!r.need_complaint_policy,r}}),Gn=e.z.object({item_id_list:e.z.string()}),Kn=e.z.object({error:e.z.string(),message:e.z.string(),warning:e.z.string().optional(),request_id:e.z.string(),response:e.z.object({item_list:e.z.array(e.z.object({item_id:e.z.number(),sale:e.z.number(),views:e.z.number(),likes:e.z.number(),rating_star:e.z.number(),comment_count:e.z.number()})).optional()}).optional()}),Vn=f({path:Ee,requestParameterSchema:Gn,responseSchema:Kn}),Wn=e.z.object({offset:e.z.number().int().min(0).optional(),page_size:e.z.number().int().positive().max(100).optional(),update_time_from:e.z.date().optional(),update_time_to:e.z.date().optional(),item_status:e.z.array(e.z.enum(C))}),Bn=e.z.object({error:e.z.string(),message:e.z.string().nullable().optional(),warning:e.z.string().nullable().optional(),request_id:e.z.string(),response:e.z.object({item:e.z.array(e.z.object({item_id:e.z.number().int(),item_status:e.z.enum(C),update_time:e.z.number().int()})).optional()}).optional(),total_count:e.z.number().int().optional(),has_next_page:e.z.boolean().optional(),next_offset:e.z.number().int().optional()}),Fn=f({path:Ie,requestParameterSchema:Wn,transformRequestParameter(r){return r.update_time_from=r.update_time_from??new Date("01/01/2022"),r.update_time_to=r.update_time_to??new Date,r},responseSchema:Bn}),Zn=e.z.object({item_id:e.z.string()}),Jn=e.z.object({error:e.z.string(),message:e.z.string(),warning:e.z.string(),request_id:e.z.string(),response:e.z.object({tier_variation:e.z.array(e.z.object({name:e.z.string(),option_list:e.z.array(e.z.object({option:e.z.string()}))})),model:e.z.array(e.z.object({model_id:e.z.number(),model_status:e.z.string(),promotion_id:e.z.number(),tier_index:e.z.array(e.z.number()),price_info:e.z.array(e.z.object({current_price:e.z.number(),original_price:e.z.number(),inflated_price_of_current_price:e.z.number(),inflated_price_of_original_price:e.z.number()})),model_sku:e.z.string(),pre_order:e.z.object({is_pre_order:e.z.boolean(),days_to_ship:e.z.number()}),stock_info_v2:e.z.object({summary_info:e.z.object({total_reserved_stock:e.z.number(),total_available_stock:e.z.number()}),seller_stock:e.z.array(e.z.object({location_id:e.z.string(),stock:e.z.number()}))})}))})}),Yn=f({path:Pe,requestParameterSchema:Zn,responseSchema:Jn}),Qn=Object.freeze(Object.defineProperty({__proto__:null,getItemBaseInfo:zn,getItemExtraInfo:Vn,getItemList:Fn,getModelList:Yn},Symbol.toStringTag,{value:"Module"})),xe="/api/v2/auth/token/get",Ae=e.z.object({code:e.z.string(),partner_id:e.z.number().optional(),shop_id:e.z.number().optional(),main_account_id:e.z.number().optional()}),je=e.z.object({access_token:e.z.string(),error:e.z.string(),expires_in:e.z.number(),message:e.z.string(),refresh_token:e.z.string(),request_id:e.z.string(),shop_id_list:e.z.array(e.z.number())}),Xn=xn({path:xe,requestParameterSchema:Ae,responseSchema:je,transformRequestParameter(r){return r.partner_id=r.partner_id??b.getInstance().partnerId,r}}),ea=Object.freeze(Object.defineProperty({__proto__:null,getAccessToken:Xn,getAccessTokenRequestParametersSchema:Ae,getAccessTokenResponseSchema:je},Symbol.toStringTag,{value:"Module"})),k="/api/v2/shop/auth_partner";async function ra({redirectURL:r,redirectSign:t}){const{baseURL:n,partnerId:a,partnerKey:s}=b.getInstance();if(!s||!a)throw new Error("partnerKey is undefined");const o=new URL(k,n),u=E(new Date),p=await j(s,a.toString(),k,u),g=new URL(r);return g.searchParams.append("sign",t),o.search=new URLSearchParams({partner_id:a.toString(),redirect:g.toString(),timestamp:u,sign:p}).toString(),o.toString()}const ta=e.z.object({code:e.z.string(),shop_id:e.z.string(),sign:e.z.string()});async function na(r){const t=await ta.safeParseAsync(r);if(!t.success)throw new Error(`parse request parameters error: ${t.error.message}`);const{code:n,shop_id:a,sign:s}=t.data;return{code:n,shopId:a,sign:s}}const aa=Object.freeze(Object.defineProperty({__proto__:null,logistic:$n,order:Mn,product:Qn,publicShopee:ea,shop:Object.freeze(Object.defineProperty({__proto__:null,authPartner:ra,verifyCallback:na},Symbol.toStringTag,{value:"Module"}))},Symbol.toStringTag,{value:"Module"})),U=e.z.object({partnerId:e.z.coerce.number().optional(),partnerKey:e.z.coerce.string().optional(),baseURL:e.z.coerce.string().url().optional(),accessToken:e.z.coerce.string().optional(),shopId:e.z.coerce.number().optional()}).safeParse({partnerId:process.env.SHOPEE_SDK_PARTNER_ID,partnerKey:process.env.SHOPEE_SDK_PARTNER_KEY,baseURL:process.env.SHOPEE_SDK_BASE_URL,accessToken:process.env.SHOPEE_SDK_ACCESS_TOKEN,shopId:process.env.SHOPEE_SDK_SHOP_ID});if(!U.success)throw new Error(U.error.message);const T=U.data,_=b.getInstance();class sa{constructor(t){_.accessToken=t.accessToken??T.accessToken,_.baseURL=t.baseURL??T.baseURL,_.partnerId=t.partnerId??T.partnerId,_.partnerKey=t.partnerKey??T.partnerKey,_.shopId=t.shopId??T.shopId,_.isLogEnabled=t.isLogEnabled??!1}setPartnerId(t){return _.partnerId=t,this}setBaseURL(t){return _.baseURL=t,this}setPartnerKey(t){return _.partnerKey=t,this}setAccessToken(t){return _.accessToken=t,this}setShopId(t){return _.shopId=t,this}setIsLogEnabled(t){return _.isLogEnabled=t,this}get v2(){return aa}}i.API_V2_ORDER_GET_ORDER_DETAIL_PATH=Re,i.API_V2_ORDER_GET_ORDER_LIST_PATH=Se,i.API_V2_PRODUCT_GET_ITEM_BASE_INFO_PATH=ve,i.API_V2_PRODUCT_GET_ITEM_EXTRA_INFO_PATH=Ee,i.API_V2_PRODUCT_GET_ITEM_LIST_PATH=Ie,i.API_V2_PRODUCT_GET_MODEL_LIST_PATH=Pe,i.API_V2_PUBLIC_GET_ACCESS_TOKEN_PATH=xe,i.API_V2_SHOP_AUTH_PARTNER=k,i.ITEM_STATUS=C,i.ORDER_RESPONSE_OPTIONAL_FIELDS=Te,i.ORDER_STATUS=de,i.ShopeeSdk=sa,i.generateHmac=j,i.signURL=O,i.toTimestamp=E,i.transformObjectKeys=I,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})});
