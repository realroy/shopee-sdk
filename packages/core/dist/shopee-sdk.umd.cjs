(function(i,h){typeof exports=="object"&&typeof module<"u"?h(exports,require("axios"),require("zod")):typeof define=="function"&&define.amd?define(["exports","axios","zod"],h):(i=typeof globalThis<"u"?globalThis:i||self,h(i.ShopeeSDK={},i.axios,i.zod))})(this,function(i,h,e){"use strict";async function E(r,...t){let n;return typeof globalThis.crypto<"u"&&(n=await C(r,...t)),n=await x(r,...t),n}async function C(r,...t){const n=new TextEncoder,a=n.encode(r);let s=new Uint8Array;t.forEach(c=>{c&&(s=n.encode(c))});const o=await crypto.subtle.importKey("raw",a,{name:"HMAC",hash:"SHA-256"},!1,["sign"]),_=await crypto.subtle.sign({name:"HMAC",hash:{name:"sha-256"}},o,s),p=new Uint8Array(_);return Array.from(p).map(c=>c.toString(16).padStart(2,"0")).join("")}async function x(r,...t){const{createHmac:n}=await import("crypto"),a=n("sha256",r);return t.filter(s=>!!s).forEach(s=>a.update(s)),a.digest("hex")}function y(r){const t=r?r.getTime():Date.now();return Math.round(t/1e3).toString()}async function R(r){const{partner_id:t,partner_key:n,path:a,base_url:s,access_token:o,shop_id:_,params:p={}}=r,m=t.toString(),c=_.toString(),l={};for(const S in p){const b=p[S];Array.isArray(b)?l[S]=[b[0],...b.slice(1).map(ce=>`&${S}=${ce}`)].join(""):b instanceof Date?l[S]=y(b):l[S]=`${b}`}const I=y(),D=new URL(a,s),oe=await E(n,m,a,I,o,c);return D.search=new URLSearchParams({...l,partner_id:m,shop_id:c,...!!o&&{access_token:o},sign:oe,timestamp:I}).toString(),D.toString().replace(new RegExp("%26","g"),"&").replace(new RegExp("%3D","g"),"=")}class P{constructor(){this.logger=console,this.axios=h.create(),this.axios.interceptors.request.use(t=>(this.logger.log(`${t.url}`),t.data&&this.logger.info(`[Body]: ${JSON.stringify(t.data,null,4)}`),t),t=>(this.logger.error(t),t)),this.axios.interceptors.response.use(t=>(this.logger.log(`[Response]: ${JSON.stringify(t.data,null,4)}`),t),t=>{const{response:n,message:a,config:{method:s,url:o,data:_,params:p}}=t,m=n==null?void 0:n.status;return this.logger.error({status:m,message:a,method:s,url:o,data:_,params:p}),t})}static getInstance(){return this.instance??(this.instance=new P)}get(t,n){return this.axios.get(t,{params:n})}post(t,n,a){return this.axios.post(t,a,{params:n})}}class g{constructor(){}static getInstance(){return this.instance??(this.instance=new g)}get value(){return{partner_id:this.partnerId??"",partner_key:this.partnerKey??"",base_url:this.baseURL??"",access_token:this.accessToken??"",shop_id:this.shopId??""}}}const M=P.getInstance();function T(r){return async function(n){const a=r.transformRequestParameter??(I=>I),s=await r.requestParameterSchema.transform(a).safeParseAsync(n);if(!s.success)throw new Error(`parse request parameters error: ${s.error.message}`);const o=s.data,_=g.getInstance().value,p=await R({..._,path:r.path,params:o}),c=(await M.get(p)).data,l=await r.responseSchema.safeParseAsync(c);if(!l.success)throw new Error(`parse response error: ${l.error.message}`);return l.data}}const K=P.getInstance();function N(r){return async function(n){const a=r.transformRequestParameter??(l=>l),s=await r.requestParameterSchema.transform(a).safeParseAsync(n);if(!s.success)throw new Error(`parse request parameters error: ${s.error.message}`);const o=g.getInstance().value,_=await R({...o,path:r.path,params:{}}),p=s.data,{data:m}=await K.post(_,{},p),c=await r.responseSchema.safeParseAsync(m);if(!c.success)throw new Error(`parse response error: ${c.error.message}`);return c.data}}const k="/api/v2/product/get_item_base_info",v="/api/v2/product/get_item_extra_info",U="/api/v2/product/get_item_list",L="/api/v2/product/get_model_list",A=["NORMAL","DELETED","UNLIST","BANNED"],B=e.z.object({item_id_list:e.z.string(),need_tax_info:e.z.coerce.boolean().optional(),need_complaint_policy:e.z.coerce.boolean().optional()}),V=e.z.object({error:e.z.string(),message:e.z.string(),warning:e.z.string(),request_id:e.z.string(),response:e.z.object({item_list:e.z.array(e.z.object({item_id:e.z.number(),category_id:e.z.number(),item_name:e.z.string(),item_sku:e.z.string(),create_time:e.z.number(),update_time:e.z.number(),attribute_list:e.z.array(e.z.object({attribute_id:e.z.number(),original_attribute_name:e.z.string(),is_mandatory:e.z.boolean(),attribute_value_list:e.z.array(e.z.object({value_id:e.z.number(),original_value_name:e.z.string(),value_unit:e.z.string()}))})).optional(),price_info:e.z.array(e.z.object({currency:e.z.string(),original_price:e.z.number(),current_price:e.z.number()})).optional(),stock_info_v2:e.z.object({summary_info:e.z.object({total_reserved_stock:e.z.number(),total_available_stock:e.z.number()}),seller_stock:e.z.array(e.z.object({location_id:e.z.string(),stock:e.z.number()})).optional()}).optional(),image:e.z.object({image_url_list:e.z.array(e.z.string()),image_id_list:e.z.array(e.z.string())}),weight:e.z.string(),dimension:e.z.object({package_length:e.z.number(),package_width:e.z.number(),package_height:e.z.number()}),logistic_info:e.z.array(e.z.object({logistic_id:e.z.number(),logistic_name:e.z.string(),enabled:e.z.boolean(),shipping_fee:e.z.number().optional(),is_free:e.z.boolean(),estimated_shipping_fee:e.z.number().optional()})).optional(),pre_order:e.z.object({is_pre_order:e.z.boolean(),days_to_ship:e.z.number()}),condition:e.z.string(),size_chart:e.z.string(),item_status:e.z.string(),has_model:e.z.boolean(),promotion_id:e.z.number().optional(),brand:e.z.object({brand_id:e.z.number(),original_brand_name:e.z.string()}),tax_info:e.z.object({ncm:e.z.number(),same_state_cfop:e.z.number(),diff_state_cfop:e.z.number(),csosn:e.z.number(),origin:e.z.number()}).optional(),description_type:e.z.string(),description_info:e.z.object({extended_description:e.z.object({field_list:e.z.array(e.z.object({field_type:e.z.string(),text:e.z.string().optional(),image_info:e.z.object({image_id:e.z.string(),image_url:e.z.string()}).optional()}))}).optional()}).optional()})).optional()})}),$=T({path:k,requestParameterSchema:B,responseSchema:V,transformRequestParameter(r){return r.need_tax_info=!!r.need_tax_info,r.need_complaint_policy=!!r.need_complaint_policy,r}}),z=e.z.object({item_id_list:e.z.string()}),G=e.z.object({error:e.z.string(),message:e.z.string(),warning:e.z.string().optional(),request_id:e.z.string(),response:e.z.object({item_list:e.z.array(e.z.object({item_id:e.z.number(),sale:e.z.number(),views:e.z.number(),likes:e.z.number(),rating_star:e.z.number(),comment_count:e.z.number()})).optional()}).optional()}),F=T({path:v,requestParameterSchema:z,responseSchema:G}),Q=e.z.object({offset:e.z.number().int().min(0).optional(),page_size:e.z.number().int().positive().max(100).optional(),update_time_from:e.z.date().optional(),update_time_to:e.z.date().optional(),item_status:e.z.array(e.z.enum(A))}),W=e.z.object({error:e.z.string(),message:e.z.string().nullable().optional(),warning:e.z.string().nullable().optional(),request_id:e.z.string(),response:e.z.object({item:e.z.array(e.z.object({item_id:e.z.number().int(),item_status:e.z.enum(A),update_time:e.z.number().int()})).optional()}).optional(),total_count:e.z.number().int().optional(),has_next_page:e.z.boolean().optional(),next_offset:e.z.number().int().optional()}),J=T({path:U,requestParameterSchema:Q,transformRequestParameter(r){return r.update_time_from=r.update_time_from??new Date("01/01/2022"),r.update_time_to=r.update_time_to??new Date,r},responseSchema:W}),X=e.z.object({item_id:e.z.string()}),Y=e.z.object({error:e.z.string(),message:e.z.string(),warning:e.z.string(),request_id:e.z.string(),response:e.z.object({tier_variation:e.z.array(e.z.object({name:e.z.string(),option_list:e.z.array(e.z.object({option:e.z.string()}))})),model:e.z.array(e.z.object({model_id:e.z.number(),model_status:e.z.string(),promotion_id:e.z.number(),tier_index:e.z.array(e.z.number()),price_info:e.z.array(e.z.object({current_price:e.z.number(),original_price:e.z.number(),inflated_price_of_current_price:e.z.number(),inflated_price_of_original_price:e.z.number()})),model_sku:e.z.string(),pre_order:e.z.object({is_pre_order:e.z.boolean(),days_to_ship:e.z.number()}),stock_info_v2:e.z.object({summary_info:e.z.object({total_reserved_stock:e.z.number(),total_available_stock:e.z.number()}),seller_stock:e.z.array(e.z.object({location_id:e.z.string(),stock:e.z.number()}))})}))})}),Z=T({path:L,requestParameterSchema:X,responseSchema:Y}),d=Object.freeze(Object.defineProperty({__proto__:null,getItemBaseInfo:$,getItemExtraInfo:F,getItemList:J,getModelList:Z},Symbol.toStringTag,{value:"Module"})),O="/api/v2/auth/token/get",q=e.z.object({code:e.z.string(),partner_id:e.z.number().optional(),shop_id:e.z.number().optional(),main_account_id:e.z.number().optional()}),H=e.z.object({access_token:e.z.string(),error:e.z.string(),expires_in:e.z.number(),message:e.z.string(),refresh_token:e.z.string(),request_id:e.z.string(),shop_id_list:e.z.array(e.z.number())}),ee=N({path:O,requestParameterSchema:q,responseSchema:H,transformRequestParameter(r){return r.partner_id=r.partner_id??g.getInstance().partnerId,r}}),te=Object.freeze(Object.defineProperty({__proto__:null,getAccessToken:ee,getAccessTokenRequestParametersSchema:q,getAccessTokenResponseSchema:H},Symbol.toStringTag,{value:"Module"})),j="/api/v2/shop/auth_partner";async function re({redirectURL:r,redirectSign:t}){const{baseURL:n,partnerId:a,partnerKey:s}=g.getInstance();if(!s||!a)throw new Error("partnerKey is undefined");const o=new URL(j,n),_=y(new Date),p=await E(s,a.toString(),j,_),m=new URL(r);return m.searchParams.append("sign",t),o.search=new URLSearchParams({partner_id:a.toString(),redirect:m.toString(),timestamp:_,sign:p}).toString(),o.toString()}const ne=e.z.object({code:e.z.string(),shop_id:e.z.string(),sign:e.z.string()});async function se(r){const t=await ne.safeParseAsync(r);if(!t.success)throw new Error(`parse request parameters error: ${t.error.message}`);const{code:n,shop_id:a,sign:s}=t.data;return{code:n,shopId:a,sign:s}}const ae=Object.freeze(Object.defineProperty({__proto__:null,product:d,publicShopee:te,shop:Object.freeze(Object.defineProperty({__proto__:null,authPartner:re,verifyCallback:se},Symbol.toStringTag,{value:"Module"}))},Symbol.toStringTag,{value:"Module"})),w=e.z.object({partnerId:e.z.coerce.number().optional(),partnerKey:e.z.coerce.string().optional(),baseURL:e.z.coerce.string().url().optional(),accessToken:e.z.coerce.string().optional(),shopId:e.z.coerce.number().optional()}).safeParse({partnerId:process.env.SHOPEE_SDK_PARTNER_ID,partnerKey:process.env.SHOPEE_SDK_PARTNER_KEY,baseURL:process.env.SHOPEE_SDK_BASE_URL,accessToken:process.env.SHOPEE_SDK_ACCESS_TOKEN,shopId:process.env.SHOPEE_SDK_SHOP_ID});if(!w.success)throw new Error(w.error.message);const f=w.data,u=g.getInstance();class ie{constructor(t){u.accessToken=t.accessToken??f.accessToken,u.baseURL=t.baseURL??f.baseURL,u.partnerId=t.partnerId??f.partnerId,u.partnerKey=t.partnerKey??f.partnerKey,u.shopId=t.shopId??f.shopId}setPartnerId(t){return u.partnerId=t,this}setBaseURL(t){return u.baseURL=t,this}setPartnerKey(t){return u.partnerKey=t,this}setAccessToken(t){return u.accessToken=t,this}setShopId(t){return u.shopId=t,this}get v2(){return ae}}i.API_V2_PRODUCT_GET_ITEM_BASE_INFO_PATH=k,i.API_V2_PRODUCT_GET_ITEM_EXTRA_INFO_PATH=v,i.API_V2_PRODUCT_GET_ITEM_LIST_PATH=U,i.API_V2_PRODUCT_GET_MODEL_LIST_PATH=L,i.API_V2_PUBLIC_GET_ACCESS_TOKEN_PATH=O,i.API_V2_SHOP_AUTH_PARTNER=j,i.ITEM_STATUS=A,i.ShopeeSdk=ie,i.generateHmac=E,i.signURL=R,i.toTimestamp=y,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})});
