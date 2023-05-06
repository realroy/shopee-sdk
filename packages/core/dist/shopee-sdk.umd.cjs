(function(a,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("zod"),require("axios")):typeof define=="function"&&define.amd?define(["exports","zod","axios"],e):(a=typeof globalThis<"u"?globalThis:a||self,e(a.ShopeeSDK={},a.zod,a.axios))})(this,function(a,e,x){"use strict";const E="/api/v2/product/get_item_base_info",R="/api/v2/product/get_item_extra_info",w="/api/v2/product/get_item_list";async function y(n,...t){let r;return typeof globalThis.crypto<"u"&&(r=await A(n,...t)),r=await j(n,...t),r}async function A(n,...t){const r=new TextEncoder,s=r.encode(n);let i=new Uint8Array;t.forEach(_=>{_&&(i=r.encode(_))});const c=await crypto.subtle.importKey("raw",s,{name:"HMAC",hash:"SHA-256"},!1,["sign"]),u=await crypto.subtle.sign({name:"HMAC",hash:{name:"sha-256"}},c,i),m=new Uint8Array(u);return Array.from(m).map(_=>_.toString(16).padStart(2,"0")).join("")}async function j(n,...t){const{createHmac:r}=await import("crypto"),s=r("sha256",n);return t.filter(i=>!!i).forEach(i=>s.update(i)),s.digest("hex")}const I=e.z.object({partnerId:e.z.coerce.number().optional(),partnerKey:e.z.coerce.string().optional(),baseURL:e.z.coerce.string().url().optional(),accessToken:e.z.coerce.string().optional(),shopId:e.z.coerce.number().optional()}).safeParse({partnerId:process.env.SHOPEE_SDK_PARTNER_ID,partnerKey:process.env.SHOPEE_SDK_PARTNER_KEY,baseURL:process.env.SHOPEE_SDK_BASE_URL,accessToken:process.env.SHOPEE_SDK_ACCESS_TOKEN,shopId:process.env.SHOPEE_SDK_SHOP_ID});if(!I.success)throw new Error(I.error.message);const g=I.data;function D(n){return new URL(n,g.baseURL).toString()}function S(n){const t=n?n.getTime():Date.now();return Math.round(t/1e3).toString()}async function U(n){const{partner_id:t,partner_key:r,path:s,base_url:i,access_token:c,shop_id:u,params:m={}}=n,o=t.toString(),_=u.toString(),l={};for(const f in m){const h=m[f];Array.isArray(h)?l[f]=[h[0],...h.slice(1).map(se=>`&${f}=${se}`)].join(""):h instanceof Date?l[f]=S(h):l[f]=`${h}`}const v=S(),H=new URL(s,i),ae=await y(r,o,s,v,c,_);return H.search=new URLSearchParams({...l,partner_id:o,shop_id:_,access_token:c,sign:ae,timestamp:v}).toString(),H.toString().replace(new RegExp("%26","g"),"&").replace(new RegExp("%3D","g"),"=")}class P{constructor(){this.logger=console,this.axios=x.create(),this.axios.interceptors.request.use(t=>(this.logger.log(`${t.url}`),t.data&&this.logger.info(`[Body]: ${JSON.stringify(t.data,null,4)}`),t),t=>(this.logger.error(t),t)),this.axios.interceptors.response.use(t=>(this.logger.log(`[Response]: ${JSON.stringify(t.data,null,4)}`),t),t=>{const{response:r,message:s,config:{method:i,url:c,data:u,params:m}}=t,o=r==null?void 0:r.status;return this.logger.error({status:o,message:s,method:i,url:c,data:u,params:m}),t})}static getInstance(){return this.instance??(this.instance=new P)}get(t,r){return this.axios.get(t,{params:r})}post(t,r,s){return this.axios.post(t,s,{params:r})}}class b{constructor(){}static getInstance(){return this.instance??(this.instance=new b)}get value(){return{partner_id:this.partnerId??"",partner_key:this.partnerKey??"",base_url:this.baseURL??"",access_token:this.accessToken??"",shop_id:this.shopId??""}}}const L=P.getInstance();function T(n){return async function(r){const s=n.transformRequestParameter??(l=>l),i=await n.requestParameterSchema.transform(s).safeParseAsync(r);if(!i.success)throw new Error(`parse request parameters error: ${i.error.message}`);const c=i.data,u=b.getInstance().value,m=await U({...u,path:n.path,params:c});let o;if(n.method==="POST"){const l=await n.requestBodySchema.safeParseAsync(n.body);if(!l.success)throw new Error(`parse request body error: ${l.error.message}`);o=(await L.post(m,{},n.body)).data}else o=(await L.get(m)).data;const _=await n.responseSchema.safeParseAsync(o);if(!_.success)throw new Error(`parse response error: ${_.error.message}`);return _.data}}const k=["NORMAL","DELETED","UNLIST","BANNED"],q=e.z.object({offset:e.z.number().int().min(0).optional(),page_size:e.z.number().int().positive().max(100).optional(),update_time_from:e.z.date().optional(),update_time_to:e.z.date().optional(),item_status:e.z.array(e.z.enum(k))}),K=e.z.object({item_id:e.z.number().int(),item_status:e.z.enum(k),update_time:e.z.number().int()}),C=e.z.object({error:e.z.string(),message:e.z.string().nullable().optional(),warning:e.z.string().nullable().optional(),request_id:e.z.string(),response:e.z.object({item:e.z.array(K.optional()).optional()}).optional(),total_count:e.z.number().int().optional(),has_next_page:e.z.boolean().optional(),next_offset:e.z.number().int().optional()}),N=T({method:"GET",path:w,requestParameterSchema:q,transformRequestParameter(n){return n.update_time_from=n.update_time_from??new Date("01/01/2022"),n.update_time_to=n.update_time_to??new Date,n},responseSchema:C}),d=e.z.object({item_id_list:e.z.string(),need_tax_info:e.z.coerce.boolean().optional(),need_complaint_policy:e.z.coerce.boolean().optional()}),B=e.z.object({value_id:e.z.number(),original_value_name:e.z.string(),value_unit:e.z.string()}),M=e.z.object({attribute_id:e.z.number(),original_attribute_name:e.z.string(),is_mandatory:e.z.boolean(),attribute_value_list:e.z.array(B)}),$=e.z.object({currency:e.z.string(),original_price:e.z.number(),current_price:e.z.number()}),G=e.z.object({location_id:e.z.string(),stock:e.z.number()}),z=e.z.object({logistic_id:e.z.number(),logistic_name:e.z.string(),enabled:e.z.boolean(),shipping_fee:e.z.number().optional(),is_free:e.z.boolean(),estimated_shipping_fee:e.z.number().optional()}),V=e.z.object({field_type:e.z.string(),text:e.z.string().optional(),image_info:e.z.object({image_id:e.z.string(),image_url:e.z.string()}).optional()}),W=e.z.object({item_id:e.z.number(),category_id:e.z.number(),item_name:e.z.string(),item_sku:e.z.string(),create_time:e.z.number(),update_time:e.z.number(),attribute_list:e.z.array(M).optional(),price_info:e.z.array($).optional(),stock_info_v2:e.z.object({summary_info:e.z.object({total_reserved_stock:e.z.number(),total_available_stock:e.z.number()}),seller_stock:e.z.array(G).optional()}).optional(),image:e.z.object({image_url_list:e.z.array(e.z.string()),image_id_list:e.z.array(e.z.string())}),weight:e.z.string(),dimension:e.z.object({package_length:e.z.number(),package_width:e.z.number(),package_height:e.z.number()}),logistic_info:e.z.array(z),pre_order:e.z.object({is_pre_order:e.z.boolean(),days_to_ship:e.z.number()}),condition:e.z.string(),size_chart:e.z.string(),item_status:e.z.string(),has_model:e.z.boolean(),promotion_id:e.z.number().optional(),brand:e.z.object({brand_id:e.z.number(),original_brand_name:e.z.string()}),tax_info:e.z.object({ncm:e.z.number(),same_state_cfop:e.z.number(),diff_state_cfop:e.z.number(),csosn:e.z.number(),origin:e.z.number()}).optional(),description_type:e.z.string(),description_info:e.z.object({extended_description:e.z.object({field_list:e.z.array(V)})})}),F=e.z.object({error:e.z.string(),message:e.z.string(),warning:e.z.string(),request_id:e.z.string(),response:e.z.object({item_list:e.z.array(W).optional()})}),J=T({method:"GET",path:E,requestParameterSchema:d,responseSchema:F,transformRequestParameter(n){return n.need_tax_info=!!n.need_tax_info,n.need_complaint_policy=!!n.need_complaint_policy,n}}),X=e.z.object({item_id_list:e.z.string()}),Y=e.z.object({item_id:e.z.number(),sale:e.z.number(),views:e.z.number(),likes:e.z.number(),rating_star:e.z.number(),comment_count:e.z.number()}),Q=e.z.object({error:e.z.string(),message:e.z.string(),warning:e.z.string().optional(),request_id:e.z.string(),response:e.z.object({item_list:e.z.array(Y).optional()}).optional()}),Z=T({method:"GET",path:R,requestParameterSchema:X,responseSchema:Q}),ee={getItemList:N,getItemBaseInfo:J,getItemExtraInfo:Z},O="/api/v2/shop/auth_partner";async function te({redirectURL:n,redirectSign:t}){const{baseURL:r,partnerId:s,partnerKey:i}=b.getInstance();if(!i||!s)throw new Error("partnerKey is undefined");const c=new URL(O,r),u=S(new Date),m=await y(i,s.toString(),O,u),o=new URL(n);return o.searchParams.append("sign",t),c.search=new URLSearchParams({partner_id:s.toString(),redirect:o.toString(),timestamp:u,sign:m}).toString(),c.toString()}const ne=Object.freeze(Object.defineProperty({__proto__:null,product:ee,shop:Object.freeze(Object.defineProperty({__proto__:null,authPartner:te},Symbol.toStringTag,{value:"Module"}))},Symbol.toStringTag,{value:"Module"})),p=b.getInstance();class re{constructor(t){p.accessToken=t.accessToken??g.accessToken,p.baseURL=t.baseURL??g.baseURL,p.partnerId=t.partnerId??g.partnerId,p.partnerKey=t.partnerKey??g.partnerKey,p.shopId=t.shopId??g.shopId,this.v2=ne}setPartnerId(t){return p.partnerId=t,this}setBaseURL(t){return p.baseURL=t,this}setPartnerKey(t){return p.partnerKey=t,this}setAccessToken(t){return p.accessToken=t,this}setShopId(t){return p.shopId=t,this}}a.API_V2_PRODUCT_GET_ITEM_BASE_INFO_PATH=E,a.API_V2_PRODUCT_GET_ITEM_EXTRA_INFO_PATH=R,a.API_V2_PRODUCT_GET_ITEM_LIST_PATH=w,a.ShopeeSdk=re,a.generateHmac=y,a.generateHmacWithNodeCrypto=j,a.generateHmacWithWebCryptoAPI=A,a.mockURL=D,a.signURL=U,a.toTimestamp=S,Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});