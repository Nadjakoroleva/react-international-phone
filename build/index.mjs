import j,{useMemo as Ie,useRef as Me,useState as Te}from"react";var I=[["Afghanistan","af","93"],["Albania","al","355"],["Algeria","dz","213"],["Andorra","ad","376"],["Angola","ao","244"],["Antigua and Barbuda","ag","1268"],["Argentina","ar","54","(..) ........",0],["Armenia","am","374",".. ......"],["Aruba","aw","297"],["Australia","au","61",". .... ....",0],["Austria","at","43"],["Azerbaijan","az","994","(..) ... .. .."],["Bahamas","bs","1242"],["Bahrain","bh","973"],["Bangladesh","bd","880"],["Barbados","bb","1246"],["Belarus","by","375","(..) ... .. .."],["Belgium","be","32","... .. .. .."],["Belize","bz","501"],["Benin","bj","229"],["Bhutan","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina","ba","387"],["Botswana","bw","267"],["Brazil","br","55","(..) ........."],["British Indian Ocean Territory","io","246"],["Brunei","bn","673"],["Bulgaria","bg","359"],["Burkina Faso","bf","226"],["Burundi","bi","257"],["Cambodia","kh","855"],["Cameroon","cm","237"],["Canada","ca","1","(...) ...-....",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde","cv","238"],["Caribbean Netherlands","bq","599","",1],["Central African Republic","cf","236"],["Chad","td","235"],["Chile","cl","56"],["China","cn","86","... .... ...."],["Colombia","co","57","... ... ...."],["Comoros","km","269"],["Congo","cd","243"],["Congo","cg","242"],["Costa Rica","cr","506","....-...."],["C\xF4te d'Ivoire","ci","225",".. .. .. .. .."],["Croatia","hr","385"],["Cuba","cu","53"],["Cura\xE7ao","cw","599","",0],["Cyprus","cy","357",".. ......"],["Czech Republic","cz","420","... ... ..."],["Denmark","dk","45",".. .. .. .."],["Djibouti","dj","253"],["Dominica","dm","1767"],["Dominican Republic","do","1","",2],["Ecuador","ec","593"],["Egypt","eg","20"],["El Salvador","sv","503","....-...."],["Equatorial Guinea","gq","240"],["Eritrea","er","291"],["Estonia","ee","372",".... ......"],["Ethiopia","et","251"],["Fiji","fj","679"],["Finland","fi","358",".. ... .. .."],["France","fr","33",". .. .. .. .."],["French Guiana","gf","594"],["French Polynesia","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia","ge","995"],["Germany","de","49",".... ........"],["Ghana","gh","233"],["Greece","gr","30"],["Grenada","gd","1473"],["Guadeloupe","gp","590","",0],["Guam","gu","1671"],["Guatemala","gt","502","....-...."],["Guinea","gn","224"],["Guinea-Bissau","gw","245"],["Guyana","gy","592"],["Haiti","ht","509","....-...."],["Honduras","hn","504"],["Hong Kong","hk","852",".... ...."],["Hungary","hu","36"],["Iceland","is","354","... ...."],["India","in","91",".....-....."],["Indonesia","id","62"],["Iran","ir","98","... ... ...."],["Iraq","iq","964"],["Ireland","ie","353",".. ......."],["Israel","il","972","... ... ...."],["Italy","it","39","... .......",0],["Jamaica","jm","1876"],["Japan","jp","81",".. .... ...."],["Jordan","jo","962"],["Kazakhstan","kz","7","... ...-..-..",0],["Kenya","ke","254"],["Kiribati","ki","686"],["Kosovo","xk","383"],["Kuwait","kw","965"],["Kyrgyzstan","kg","996","... ... ..."],["Laos","la","856"],["Latvia","lv","371",".. ... ..."],["Lebanon","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya","ly","218"],["Liechtenstein","li","423"],["Lithuania","lt","370"],["Luxembourg","lu","352"],["Macau","mo","853"],["Macedonia","mk","389"],["Madagascar","mg","261"],["Malawi","mw","265"],["Malaysia","my","60","..-....-...."],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596"],["Mauritania","mr","222"],["Mauritius","mu","230"],["Mexico","mx","52","... ... ....",0],["Micronesia","fm","691"],["Moldova","md","373","(..) ..-..-.."],["Monaco","mc","377"],["Mongolia","mn","976"],["Montenegro","me","382"],["Morocco","ma","212"],["Mozambique","mz","258"],["Myanmar","mm","95"],["Namibia","na","264"],["Nauru","nr","674"],["Nepal","np","977"],["Netherlands","nl","31",".. ........"],["New Caledonia","nc","687"],["New Zealand","nz","64","...-...-...."],["Nicaragua","ni","505"],["Niger","ne","227"],["Nigeria","ng","234"],["North Korea","kp","850"],["Norway","no","47","... .. ..."],["Oman","om","968"],["Pakistan","pk","92","...-......."],["Palau","pw","680"],["Palestine","ps","970"],["Panama","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru","pe","51"],["Philippines","ph","63",".... ......."],["Poland","pl","48","...-...-..."],["Portugal","pt","351"],["Puerto Rico","pr","1","",3],["Qatar","qa","974"],["R\xE9union","re","262"],["Romania","ro","40"],["Russia","ru","7","(...) ...-..-..",1],["Rwanda","rw","250"],["Saint Kitts and Nevis","kn","1869"],["Saint Lucia","lc","1758"],["Saint Vincent and the Grenadines","vc","1784"],["Samoa","ws","685"],["San Marino","sm","378"],["S\xE3o Tom\xE9 and Pr\xEDncipe","st","239"],["Saudi Arabia","sa","966"],["Senegal","sn","221"],["Serbia","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65","....-...."],["Slovakia","sk","421"],["Slovenia","si","386"],["Solomon Islands","sb","677"],["Somalia","so","252"],["South Africa","za","27"],["South Korea","kr","82","... .... ...."],["South Sudan","ss","211"],["Spain","es","34","... ... ..."],["Sri Lanka","lk","94"],["Sudan","sd","249"],["Suriname","sr","597"],["Swaziland","sz","268"],["Sweden","se","46","(...) ...-..."],["Switzerland","ch","41",".. ... .. .."],["Syria","sy","963"],["Taiwan","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tonga","to","676"],["Trinidad and Tobago","tt","1868"],["Tunisia","tn","216"],["Turkey","tr","90","... ... .. .."],["Turkmenistan","tm","993"],["Tuvalu","tv","688"],["Uganda","ug","256"],["Ukraine","ua","380","(..) ... .. .."],["United Arab Emirates","ae","971"],["United Kingdom","gb","44",".... ......"],["United States","us","1","(...) ...-....",0],["Uruguay","uy","598"],["Uzbekistan","uz","998",".. ... .. .."],["Vanuatu","vu","678"],["Vatican City","va","39",".. .... ....",1],["Venezuela","ve","58"],["Vietnam","vn","84"],["Yemen","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"]];var ge="react-international-phone-",ne=(...t)=>t.filter(e=>!!e).join(" ").trim(),be=(...t)=>ne(...t).split(" ").map(e=>`${ge}${e}`).join(" "),w=({addPrefix:t,rawClassNames:e})=>ne(be(...t),...e);var ae=({value:t,mask:e,maskSymbol:r,offset:n=0,trimNonMaskCharsLeftover:a=!1})=>{if(t.length<n)return t;let i=t.slice(0,n),c=t.slice(n),o=i,l=0;for(let s of e.split("")){if(l>=c.length){if(!a&&s!==r){o+=s;continue}break}s===r?(o+=c[l],l+=1):o+=s}return o};var $=t=>t.replace(/\D/g,"");var ie=(t,e)=>{let r=t.style.display;r!=="block"&&(t.style.display="block");let n=t.getBoundingClientRect(),a=e.getBoundingClientRect(),i=a.top-n.top,c=n.bottom-a.bottom;i>=0&&c>=0||(Math.abs(i)<Math.abs(c)?t.scrollTop+=i:t.scrollTop-=c),t.style.display=r};var we=t=>{let{name:e,iso2:r,dialCode:n,format:a,priority:i,areaCodes:c}=t,o=[e,r,n,a,i,c];for(let l=0;l<o.length;l+=1){if(l===0)continue;let s=o[l-1],p=o[l];if(s===void 0&&p!==void 0){let u=JSON.stringify(o,(x,g)=>g===void 0?"__undefined":g).replace(/"__undefined"/g,"undefined");throw new Error(`[react-international-phone] invalid country values passed to buildCountryData. Check ${s} in: ${u}`)}}return o.filter(l=>l!==void 0)};var S=t=>{let[e,r,n,a,i,c]=t;return{name:e,iso2:r,dialCode:n,format:a,priority:i,areaCodes:c}};var ve=t=>`Field "${t}" is not supported`,T=({field:t,value:e,countries:r=I})=>{if(["priority"].includes(t))throw new Error(ve(t));let n=r.find(a=>{let i=S(a);return e===i[t]});if(n)return S(n)};var V=({phone:t,countries:e=I,currentCountryIso2:r})=>{let n={country:void 0,fullDialCodeMatch:!1};if(!t)return n;let a=$(t);if(!a)return n;let i=n,c=({country:o,fullDialCodeMatch:l})=>{let s=o.dialCode===i.country?.dialCode,p=(o.priority??0)<(i.country?.priority??0);(!s||p)&&(i={country:o,fullDialCodeMatch:l})};for(let o of e){let l=S(o),{dialCode:s,areaCodes:p}=l;if(a.startsWith(s)){let u=i.country?Number(s)>=Number(i.country.dialCode):!0;if(p){let x=a.substring(s.length);for(let g of p)if(x.startsWith(g))return{country:l,fullDialCodeMatch:!0}}(u||s===a||!i.fullDialCodeMatch)&&c({country:l,fullDialCodeMatch:!0})}i.fullDialCodeMatch||a.length<s.length&&s.startsWith(a)&&(!i.country||Number(s)<=Number(i.country.dialCode))&&c({country:l,fullDialCodeMatch:!1})}if(r){let o=T({value:r,field:"iso2",countries:e});if(!o)return i;let s=o?(u=>{if(!u?.areaCodes)return!1;let x=a.substring(u.dialCode.length);return u.areaCodes.some(g=>g.startsWith(x))})(o):!1;!!i&&i.country?.dialCode===o.dialCode&&i.country!==o&&i.fullDialCodeMatch&&(!o.areaCodes||s)&&(i={country:o,fullDialCodeMatch:!0})}return i};var q=({phone:t,dialCode:e,prefix:r="+",charAfterDialCode:n=" "})=>{if(!t||!e)return t;let a=t;return a.startsWith(r)&&(a=a.replace(r,"")),a.startsWith(e)?(a=a.replace(e,""),a.startsWith(n)&&(a=a.replace(n,"")),a):t};var se=({phone:t,dialCode:e,prefix:r="+",charAfterDialCode:n=" "})=>`${r}${e}${n}${q({phone:t,dialCode:e,charAfterDialCode:n,prefix:r})}`;var le=(t,e)=>{let r=e.disableDialCodeAndPrefix?!1:e.forceDialCode,n=e.disableDialCodeAndPrefix?!1:e.insertDialCodeOnEmpty,a=t,i=s=>e.trimNonDigitsEnd?s.trim():s;if(!a)return n&&!a.length||r?i(`${e.prefix}${e.dialCode}${e.charAfterDialCode}`):i(a);if(a=$(a),a===e.dialCode&&!e.disableDialCodeAndPrefix)return i(`${e.prefix}${e.dialCode}${e.charAfterDialCode}`);if(e.dialCode.startsWith(a)&&!e.disableDialCodeAndPrefix)return i(r?`${e.prefix}${e.dialCode}${e.charAfterDialCode}`:`${e.prefix}${a}`);if(!a.startsWith(e.dialCode)&&!e.disableDialCodeAndPrefix){if(r)return i(`${e.prefix}${e.dialCode}${e.charAfterDialCode}`);if(a.length<e.dialCode.length)return i(`${e.prefix}${a}`)}let c=()=>{let s=e.dialCode.length;e.disableDialCodeAndPrefix&&(s=0);let p=a.slice(0,s),u=a.slice(s);return{phoneLeftSide:p,phoneRightSide:u}},{phoneLeftSide:o,phoneRightSide:l}=c();return o=`${e.prefix}${o}${e.charAfterDialCode}`,l=ae({value:l,mask:e.mask,maskSymbol:e.maskChar,trimNonMaskCharsLeftover:e.trimNonDigitsEnd}),e.disableDialCodeAndPrefix&&(o=""),i(`${o}${l}`)};var H=t=>/\d/.test(t),de=({phoneBeforeInput:t,phoneAfterInput:e,phoneAfterFormatted:r,cursorPositionAfterInput:n,leftOffset:a=0,deletion:i})=>{if(n<a)return a;if(!t)return r.length;let c=i==="backward";if(n===0&&e.length>0&&r.length>0){if(c)return 0;for(let u=0;u<r.length;u+=1)if(H(r[u]))return u;return r.length}if(e.length<t.length&&e.length===1)return r.length;let o=null;for(let u=n-1;u>=0;u-=1)if(H(e[u])){o=u;break}if(o===null)return n!==0?n:r.length;let l=0;for(let u=0;u<o;u+=1)H(e[u])&&(l+=1);c&&(l-=1);let s=0,p=0;for(let u=0;u<r.length&&(s+=1,H(r[u])&&(p+=1),p!==l+1);u+=1);for(;!H(r[s])&&s<r.length;)s+=1;return c&&(s+=1),s};import ue from"react";var xe=(t,e)=>{let r=parseInt(t,16);return Number(r+e).toString(16)},De="abcdefghijklmnopqrstuvwxyz",Se="1f1e6",ce=De.split("").reduce((t,e,r)=>({...t,[e]:xe(Se,r)}),{}),Pe=t=>[ce[t[0]],ce[t[1]]].join("-"),K=({iso2:t,size:e,src:r,protocol:n="https",disableLazyLoading:a,className:i,style:c,...o})=>{if(!t)return ue.createElement("img",{className:w({addPrefix:["flag-emoji"],rawClassNames:[i]}),width:e,height:e,...o});let l=()=>{if(r)return r;let s=Pe(t);return`${n}://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/${s}.svg`};return ue.createElement("img",{className:w({addPrefix:["flag-emoji"],rawClassNames:[i]}),src:l(),width:e,height:e,draggable:!1,"data-country":t,loading:a?void 0:"lazy",style:{width:e,height:e,...c},alt:"",...o})};import O,{useCallback as J,useEffect as Z,useRef as Q,useState as ke}from"react";var Ne=1e3,X=({show:t,dialCodePrefix:e="+",selectedCountry:r,countries:n=I,flags:a,onSelect:i,onClose:c,...o})=>{let l=Q(null),s=Q(),p=Q({updatedAt:void 0,value:""}),u=d=>{let m=p.current.updatedAt&&new Date().getTime()-p.current.updatedAt.getTime()>Ne;p.current={value:m?d:`${p.current.value}${d}`,updatedAt:new Date};let C=n.findIndex(N=>S(N).name.toLowerCase().startsWith(p.current.value));C!==-1&&v(C)},x=J(d=>n.findIndex(m=>S(m).iso2===d),[n]),[g,v]=ke(x(r)),f=()=>{s.current!==r&&v(x(r))},y=J(d=>{v(x(d.iso2)),i?.(d)},[i,x]),P=d=>{let m=n.length-1,C=N=>d==="prev"?N-1:d==="next"?N+1:d==="last"?m:0;v(N=>{let k=C(N);return k<0?0:k>m?m:k})},L=d=>{if(d.stopPropagation(),d.key==="Enter"){d.preventDefault();let m=S(n[g]);y(m);return}if(d.key==="Escape"){c?.();return}if(d.key==="ArrowUp"){d.preventDefault(),P("prev");return}if(d.key==="ArrowDown"){d.preventDefault(),P("next");return}if(d.key==="PageUp"){d.preventDefault(),P("first");return}if(d.key==="PageDown"){d.preventDefault(),P("last");return}d.key===" "&&d.preventDefault(),d.key.length===1&&!d.altKey&&!d.ctrlKey&&!d.metaKey&&u(d.key.toLocaleLowerCase())},M=J(()=>{if(!l.current||g===void 0)return;let d=S(n[g]).iso2;if(d===s.current)return;let m=l.current.querySelector(`[data-country="${d}"]`);m&&(ie(l.current,m),s.current=d)},[g,n]);return Z(()=>{M()},[g,M]),Z(()=>{l.current&&(t?l.current.focus():f())},[t]),Z(()=>{f()},[r]),O.createElement("ul",{ref:l,role:"listbox",className:w({addPrefix:["country-selector-dropdown"],rawClassNames:[o.className]}),style:{display:t?"block":"none",...o.style},onKeyDown:L,onBlur:c,tabIndex:-1,"aria-activedescendant":`${S(n[g]).iso2}-option`},n.map((d,m)=>{let C=S(d),N=C.iso2===r,k=m===g,B=a?.find(U=>U.iso2===C.iso2);return O.createElement("li",{key:C.iso2,"data-country":C.iso2,role:"option","aria-selected":N,"aria-label":`${C.name} ${e}${C.dialCode}`,id:`${C.iso2}-option`,className:w({addPrefix:["country-selector-dropdown__list-item",N&&"country-selector-dropdown__list-item--selected",k&&"country-selector-dropdown__list-item--focused"],rawClassNames:[o.listItemClassName]}),onClick:()=>y(C),style:o.listItemStyle},O.createElement(K,{iso2:C.iso2,src:B?.src,className:w({addPrefix:["country-selector-dropdown__list-item-flag-emoji"],rawClassNames:[o.listItemFlagClassName]}),style:o.listItemFlagStyle}),O.createElement("span",{className:w({addPrefix:["country-selector-dropdown__list-item-country-name"],rawClassNames:[o.listItemCountryNameClassName]}),style:o.listItemCountryNameStyle},C.name),O.createElement("span",{className:w({addPrefix:["country-selector-dropdown__list-item-dial-code"],rawClassNames:[o.listItemDialCodeClassName]}),style:o.listItemDialCodeStyle},e,C.dialCode))}))};var Y=({selectedCountry:t,onSelect:e,disabled:r,hideDropdown:n,countries:a=I,flags:i,renderButtonWrapper:c,...o})=>{let[l,s]=Te(!1),p=Ie(()=>{if(t)return T({value:t,field:"iso2",countries:a})},[a,t]),u=Me(null),x=v=>{v.key&&["ArrowUp","ArrowDown"].includes(v.key)&&(v.preventDefault(),s(!0))},g=()=>{let v={title:p?.name,onClick:()=>s(y=>!y),onMouseDown:y=>y.preventDefault(),onKeyDown:x,disabled:n||r,role:"combobox","aria-label":"Country selector","aria-haspopup":"listbox","aria-expanded":l},f=j.createElement("div",{className:w({addPrefix:["country-selector-button__button-content"],rawClassNames:[o.buttonContentWrapperClassName]}),style:o.buttonContentWrapperStyle},j.createElement(K,{iso2:t,src:i?.find(y=>y.iso2===t)?.src,className:w({addPrefix:["country-selector-button__flag-emoji",r&&"country-selector-button__flag-emoji--disabled"],rawClassNames:[o.flagClassName]}),style:{visibility:t?"visible":"hidden",...o.flagStyle}}),!n&&j.createElement("div",{className:w({addPrefix:["country-selector-button__dropdown-arrow",r&&"country-selector-button__dropdown-arrow--disabled",l&&"country-selector-button__dropdown-arrow--active"],rawClassNames:[o.dropdownArrowClassName]}),style:o.dropdownArrowStyle}));return c?c({children:f,rootProps:v}):j.createElement("button",{...v,type:"button",className:w({addPrefix:["country-selector-button",l&&"country-selector-button--active",r&&"country-selector-button--disabled",n&&"country-selector-button--hide-dropdown"],rawClassNames:[o.buttonClassName]}),"data-country":t,style:o.buttonStyle},f)};return j.createElement("div",{className:w({addPrefix:["country-selector"],rawClassNames:[o.className]}),style:o.style,ref:u},g(),j.createElement(X,{show:l,countries:a,flags:i,onSelect:v=>{s(!1),e?.(v)},selectedCountry:t,onClose:()=>{s(!1)},...o.dropdownStyleProps}))};import Re from"react";var ee=({dialCode:t,prefix:e,disabled:r,style:n,className:a})=>Re.createElement("div",{className:w({addPrefix:["dial-code-preview",r&&"dial-code-preview--disabled"],rawClassNames:[a]}),style:n},`${e}${t}`);import W,{useMemo as Be}from"react";import{useEffect as _e,useRef as Ee}from"react";var pe=(t,e,r)=>{let n=Ee(void 0);(!n.current||!r(e,n.current))&&(n.current=e),_e(t,n.current)};import{useEffect as Ce,useMemo as Ae,useRef as ze,useState as $e}from"react";import{useState as te}from"react";import{useRef as me}from"react";var fe=()=>{let t=me(),e=me(Date.now());return{check:()=>{let n=Date.now(),a=t.current?n-e.current:void 0;return t.current=e.current,e.current=n,a}}};var Le={size:20,overrideLastItemDebounceMS:-1};function ye(t,e){let{size:r,overrideLastItemDebounceMS:n,onChange:a}={...Le,...e},[i,c]=te(t),[o,l]=te([i]),[s,p]=te(0),u=fe();return[i,(f,y)=>{if(typeof f=="object"&&Object.entries(f).toString()===Object.entries(i).toString()||f===i)return;let P=n>0,L=u.check(),M=P&&L!==void 0?L>n:!0;if(y?.overrideLastItem!==void 0?y.overrideLastItem:!M)l(m=>[...m.slice(0,s),f]);else{let m=o.length>=r;l(C=>[...C.slice(m?1:0,s+1),f]),m||p(C=>C+1)}c(f),a?.(f)},()=>{if(s<=0)return{success:!1};let f=o[s-1];return c(f),p(y=>y-1),a?.(f),{success:!0,value:f}},()=>{if(s+1>=o.length)return{success:!1};let f=o[s+1];return c(f),p(y=>y+1),a?.(f),{success:!0,value:f}}]}var je=".",R={defaultCountry:"us",value:"",prefix:"+",defaultMask:"............",charAfterDialCode:" ",historySaveDebounceMS:200,disableCountryGuess:!1,disableDialCodePrefill:!1,forceDialCode:!1,disableDialCodeAndPrefix:!1,countries:I},re=({defaultCountry:t=R.defaultCountry,value:e=R.value,countries:r=R.countries,prefix:n=R.prefix,defaultMask:a=R.defaultMask,charAfterDialCode:i=R.charAfterDialCode,historySaveDebounceMS:c=R.historySaveDebounceMS,disableCountryGuess:o=R.disableCountryGuess,disableDialCodePrefill:l=R.disableDialCodePrefill,forceDialCode:s=R.forceDialCode,disableDialCodeAndPrefix:p=R.disableDialCodeAndPrefix,onChange:u})=>{let x=p?!1:!o,g=ze(null),v=({value:h,country:b,trimNonDigitsEnd:D,insertDialCodeOnEmpty:_,forceDisableCountryGuess:E})=>{let G=!E&&x?V({phone:h,countries:r,currentCountryIso2:b.iso2}):void 0,z=G?.country??b;return{phone:z?le(h,{prefix:n,mask:z.format||a,maskChar:je,dialCode:z.dialCode,trimNonDigitsEnd:D,charAfterDialCode:i,forceDialCode:s,insertDialCodeOnEmpty:_,disableDialCodeAndPrefix:p}):h,countryGuessResult:G,formatCountry:z}},f=h=>{Promise.resolve().then(()=>{g.current?.setSelectionRange(h,h)})},[{phone:y,country:P},L,M,d]=ye(()=>{let b=(p?null:V({phone:e,countries:r,currentCountryIso2:t}))?.country||T({value:t,field:"iso2",countries:r});b||console.error(`[react-international-phone]: can not find a country with "${t}" iso2 code`);let D=b||S(r.find(E=>S(E).iso2==="us")),_=v({value:e,country:D,insertDialCodeOnEmpty:!l}).phone;return f(_.length),{phone:_,country:D.iso2}},{overrideLastItemDebounceMS:c,onChange:u}),m=Ae(()=>T({value:P,field:"iso2",countries:r}),[r,P]),C=(h,{deletion:b,cursorPosition:D,insertDialCodeOnEmpty:_,inserted:E}={})=>{let A=h,G=D;s&&!p&&m&&!$(h).startsWith(m.dialCode)&&h&&(E&&h.startsWith(n)&&h.length-(D??0)===0?A=h:(A=y,G=0));let{phone:z,countryGuessResult:F}=v({value:A,country:m,trimNonDigitsEnd:b==="backward",insertDialCodeOnEmpty:_,forceDisableCountryGuess:s&&!!b&&$(A).length<m.dialCode.length}),oe=m;x&&F?.country&&F.country.name!==P&&F.fullDialCodeMatch&&(oe=F.country);let he=de({cursorPositionAfterInput:G??0,phoneBeforeInput:y,phoneAfterInput:h,phoneAfterFormatted:z,leftOffset:s?n.length+(m?.dialCode?.length??0)+i.length:0,deletion:b});return L({phone:z,country:oe.iso2}),f(he),z};Ce(()=>{let h=g.current;if(!h)return;let b=D=>{if(!D.key)return;let _=D.ctrlKey,E=D.shiftKey,A=D.key.toLowerCase()==="z";!_||!A||(E?d():M())};return h.addEventListener("keydown",b),()=>{h.removeEventListener("keydown",b)}},[g,M,d]);let N=h=>{h.preventDefault();let b=h.nativeEvent.inputType,D=()=>{if(b?.toLocaleLowerCase().includes("delete")??!1)return b?.toLocaleLowerCase().includes("forward")?"forward":"backward"},_=b?.startsWith("insertFrom"),E=C(h.target.value,{deletion:D(),inserted:_,cursorPosition:h.target.selectionStart??0});return p&&m?se({phone:E,dialCode:m.dialCode,charAfterDialCode:i,prefix:n}):E},k=h=>{let b=T({value:h,field:"iso2",countries:r});if(!b)return;let D=p?"":`${n}${b.dialCode}${i}`;L({phone:D,country:b.iso2})},[B,U]=$e(!1);return Ce(()=>{if(!B){U(!0),e!==y&&u?.({phone:y,country:P});return}e!==y&&C(e)},[e]),{phone:y,country:P,setCountry:k,handlePhoneValueChange:N,inputRef:g}};var Ge=({hideDropdown:t,placeholder:e,disabled:r,showDisabledDialCodeAndPrefix:n,inputProps:a,flags:i,onChange:c,country:o,style:l,className:s,inputStyle:p,inputClassName:u,countrySelectorStyleProps:x,dialCodePreviewStyleProps:g,value:v,countries:f=I,...y})=>{let{phone:P,inputRef:L,country:M,setCountry:d,handlePhoneValueChange:m}=re({value:v,countries:f,...y,onChange:k=>{c?.(k.phone,k.country)}}),C=Be(()=>{if(M)return T({value:M,field:"iso2",countries:f})},[f,M]);pe(()=>{o&&d(o)},[o,d],([k],[B])=>k===B);let N=y.disableDialCodeAndPrefix&&n&&C?.dialCode;return W.createElement("div",{className:w({addPrefix:["input-container"],rawClassNames:[s]}),style:l},W.createElement(Y,{onSelect:k=>d(k.iso2),flags:i,selectedCountry:M,countries:f,disabled:r,hideDropdown:t,...x}),N&&W.createElement(ee,{dialCode:C.dialCode,prefix:y.prefix??"+",disabled:r,...g}),W.createElement("input",{onChange:m,value:P,type:"tel",ref:L,className:w({addPrefix:["input",r&&"input--disabled"],rawClassNames:[u]}),placeholder:e,disabled:r,style:p,...a}))};export{Y as CountrySelector,X as CountrySelectorDropdown,ee as DialCodePreview,K as FlagEmoji,Ge as PhoneInput,we as buildCountryData,I as defaultCountries,T as getCountry,V as guessCountryByPartialPhoneNumber,S as parseCountry,q as removeDialCode,re as usePhoneInput};
