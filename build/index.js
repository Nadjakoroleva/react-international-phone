"use strict";function e(e,r){if(r==null||r>e.length)r=e.length;for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function r(e){if(Array.isArray(e))return e}function t(r){if(Array.isArray(r))return e(r)}function n(e,r,t){if(r in e){Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true})}else{e[r]=t}return e}function a(e){if(typeof Symbol!=="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function o(e,r){var t=e==null?null:typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(t==null)return;var n=[];var a=true;var o=false;var i,u;try{for(t=t.call(e);!(a=(i=t.next()).done);a=true){n.push(i.value);if(r&&n.length===r)break}}catch(e){o=true;u=e}finally{try{if(!a&&t["return"]!=null)t["return"]()}finally{if(o)throw u}}return n}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};var a=Object.keys(t);if(typeof Object.getOwnPropertySymbols==="function"){a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))}a.forEach(function(r){n(e,r,t[r])})}return e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);if(r){n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})}t.push.apply(t,n)}return t}function s(e,r){r=r!=null?r:{};if(Object.getOwnPropertyDescriptors){Object.defineProperties(e,Object.getOwnPropertyDescriptors(r))}else{c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function d(e,r){if(e==null)return{};var t=f(e,r);var n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++){n=o[a];if(r.indexOf(n)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,n))continue;t[n]=e[n]}}return t}function f(e,r){if(e==null)return{};var t={};var n=Object.keys(e);var a,o;for(o=0;o<n.length;o++){a=n[o];if(r.indexOf(a)>=0)continue;t[a]=e[a]}return t}function v(e,t){return r(e)||o(e,t)||p(e,t)||i()}function y(e){return t(e)||a(e)||p(e)||u()}function p(r,t){if(!r)return;if(typeof r==="string")return e(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor)n=r.constructor.name;if(n==="Map"||n==="Set")return Array.from(n);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(r,t)}var m=Object.create;var h=Object.defineProperty;var C=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var g=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty;var D=function(e,r){for(var t in r)h(e,t,{get:r[t],enumerable:!0})},S=function(e,r,t,n){var a=true,o=false,i=undefined;if(r&&typeof r=="object"||typeof r=="function")try{var u=function(){var a=c.value;!w.call(e,a)&&a!==t&&h(e,a,{get:function(){return r[a]},enumerable:!(n=C(r,a))||n.enumerable})};for(var l=b(r)[Symbol.iterator](),c;!(a=(c=l.next()).done);a=true)u()}catch(e){o=true;i=e}finally{try{if(!a&&l.return!=null){l.return()}}finally{if(o){throw i}}}return e};var P=function(e,r,t){return t=e!=null?m(g(e)):{},S(r||!e||!e.__esModule?h(t,"default",{value:e,enumerable:!0}):t,e)},N=function(e){return S(h({},"__esModule",{value:!0}),e)};var x={};D(x,{CountrySelector:function(){return et},CountrySelectorDropdown:function(){return er},DialCodePreview:function(){return ea},FlagEmoji:function(){return $},PhoneInput:function(){return eh},buildCountryData:function(){return _},defaultCountries:function(){return A},getCountry:function(){return G},guessCountryByPartialPhoneNumber:function(){return T},parseCountry:function(){return B},removeDialCode:function(){return q},usePhoneInput:function(){return em}});module.exports=N(x);var k=P(require("react"));var A=[["Afghanistan","af","93"],["Albania","al","355"],["Algeria","dz","213"],["Andorra","ad","376"],["Angola","ao","244"],["Antigua and Barbuda","ag","1268"],["Argentina","ar","54","(..) ........",0],["Armenia","am","374",".. ......"],["Aruba","aw","297"],["Australia","au","61",". .... ....",0],["Austria","at","43"],["Azerbaijan","az","994","(..) ... .. .."],["Bahamas","bs","1242"],["Bahrain","bh","973"],["Bangladesh","bd","880"],["Barbados","bb","1246"],["Belarus","by","375","(..) ... .. .."],["Belgium","be","32","... .. .. .."],["Belize","bz","501"],["Benin","bj","229"],["Bhutan","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina","ba","387"],["Botswana","bw","267"],["Brazil","br","55","(..) ........."],["British Indian Ocean Territory","io","246"],["Brunei","bn","673"],["Bulgaria","bg","359"],["Burkina Faso","bf","226"],["Burundi","bi","257"],["Cambodia","kh","855"],["Cameroon","cm","237"],["Canada","ca","1","(...) ...-....",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde","cv","238"],["Caribbean Netherlands","bq","599","",1],["Central African Republic","cf","236"],["Chad","td","235"],["Chile","cl","56"],["China","cn","86","... .... ...."],["Colombia","co","57","... ... ...."],["Comoros","km","269"],["Congo","cd","243"],["Congo","cg","242"],["Costa Rica","cr","506","....-...."],["C\xf4te d'Ivoire","ci","225",".. .. .. .. .."],["Croatia","hr","385"],["Cuba","cu","53"],["Cura\xe7ao","cw","599","",0],["Cyprus","cy","357",".. ......"],["Czech Republic","cz","420","... ... ..."],["Denmark","dk","45",".. .. .. .."],["Djibouti","dj","253"],["Dominica","dm","1767"],["Dominican Republic","do","1","",2],["Ecuador","ec","593"],["Egypt","eg","20"],["El Salvador","sv","503","....-...."],["Equatorial Guinea","gq","240"],["Eritrea","er","291"],["Estonia","ee","372",".... ......"],["Ethiopia","et","251"],["Fiji","fj","679"],["Finland","fi","358",".. ... .. .."],["France","fr","33",". .. .. .. .."],["French Guiana","gf","594"],["French Polynesia","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia","ge","995"],["Germany","de","49",".... ........"],["Ghana","gh","233"],["Greece","gr","30"],["Grenada","gd","1473"],["Guadeloupe","gp","590","",0],["Guam","gu","1671"],["Guatemala","gt","502","....-...."],["Guinea","gn","224"],["Guinea-Bissau","gw","245"],["Guyana","gy","592"],["Haiti","ht","509","....-...."],["Honduras","hn","504"],["Hong Kong","hk","852",".... ...."],["Hungary","hu","36"],["Iceland","is","354","... ...."],["India","in","91",".....-....."],["Indonesia","id","62"],["Iran","ir","98","... ... ...."],["Iraq","iq","964"],["Ireland","ie","353",".. ......."],["Israel","il","972","... ... ...."],["Italy","it","39","... .......",0],["Jamaica","jm","1876"],["Japan","jp","81",".. .... ...."],["Jordan","jo","962"],["Kazakhstan","kz","7","... ...-..-..",0],["Kenya","ke","254"],["Kiribati","ki","686"],["Kosovo","xk","383"],["Kuwait","kw","965"],["Kyrgyzstan","kg","996","... ... ..."],["Laos","la","856"],["Latvia","lv","371",".. ... ..."],["Lebanon","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya","ly","218"],["Liechtenstein","li","423"],["Lithuania","lt","370"],["Luxembourg","lu","352"],["Macau","mo","853"],["Macedonia","mk","389"],["Madagascar","mg","261"],["Malawi","mw","265"],["Malaysia","my","60","..-....-...."],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596"],["Mauritania","mr","222"],["Mauritius","mu","230"],["Mexico","mx","52","... ... ....",0],["Micronesia","fm","691"],["Moldova","md","373","(..) ..-..-.."],["Monaco","mc","377"],["Mongolia","mn","976"],["Montenegro","me","382"],["Morocco","ma","212"],["Mozambique","mz","258"],["Myanmar","mm","95"],["Namibia","na","264"],["Nauru","nr","674"],["Nepal","np","977"],["Netherlands","nl","31",".. ........"],["New Caledonia","nc","687"],["New Zealand","nz","64","...-...-...."],["Nicaragua","ni","505"],["Niger","ne","227"],["Nigeria","ng","234"],["North Korea","kp","850"],["Norway","no","47","... .. ..."],["Oman","om","968"],["Pakistan","pk","92","...-......."],["Palau","pw","680"],["Palestine","ps","970"],["Panama","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru","pe","51"],["Philippines","ph","63",".... ......."],["Poland","pl","48","...-...-..."],["Portugal","pt","351"],["Puerto Rico","pr","1","",3],["Qatar","qa","974"],["R\xe9union","re","262"],["Romania","ro","40"],["Russia","ru","7","(...) ...-..-..",1],["Rwanda","rw","250"],["Saint Kitts and Nevis","kn","1869"],["Saint Lucia","lc","1758"],["Saint Vincent and the Grenadines","vc","1784"],["Samoa","ws","685"],["San Marino","sm","378"],["S\xe3o Tom\xe9 and Pr\xedncipe","st","239"],["Saudi Arabia","sa","966"],["Senegal","sn","221"],["Serbia","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65","....-...."],["Slovakia","sk","421"],["Slovenia","si","386"],["Solomon Islands","sb","677"],["Somalia","so","252"],["South Africa","za","27"],["South Korea","kr","82","... .... ...."],["South Sudan","ss","211"],["Spain","es","34","... ... ..."],["Sri Lanka","lk","94"],["Sudan","sd","249"],["Suriname","sr","597"],["Swaziland","sz","268"],["Sweden","se","46","(...) ...-..."],["Switzerland","ch","41",".. ... .. .."],["Syria","sy","963"],["Taiwan","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tonga","to","676"],["Trinidad and Tobago","tt","1868"],["Tunisia","tn","216"],["Turkey","tr","90","... ... .. .."],["Turkmenistan","tm","993"],["Tuvalu","tv","688"],["Uganda","ug","256"],["Ukraine","ua","380","(..) ... .. .."],["United Arab Emirates","ae","971"],["United Kingdom","gb","44",".... ......"],["United States","us","1","(...) ...-....",0],["Uruguay","uy","598"],["Uzbekistan","uz","998",".. ... .. .."],["Vanuatu","vu","678"],["Vatican City","va","39",".. .... ....",1],["Venezuela","ve","58"],["Vietnam","vn","84"],["Yemen","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"]];var j="react-international-phone-",E=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++){r[t]=arguments[t]}return r.filter(function(e){return!!e}).join(" ").trim()},O=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++){r[t]=arguments[t]}return E.apply(void 0,y(r)).split(" ").map(function(e){return"".concat(j).concat(e)}).join(" ")},M=function(e){var r=e.addPrefix,t=e.rawClassNames;return E.apply(void 0,[O.apply(void 0,y(r))].concat(y(t)))};var I=function(e){var r=e.value,t=e.mask,n=e.maskSymbol,a=e.offset,o=a===void 0?0:a,i=e.trimNonMaskCharsLeftover,u=i===void 0?!1:i;if(r.length<o)return r;var l=r.slice(0,o),c=r.slice(o),s=l,d=0;var f=true,v=false,y=undefined;try{for(var p=t.split("")[Symbol.iterator](),m;!(f=(m=p.next()).done);f=true){var h=m.value;if(d>=c.length){if(!u&&h!==n){s+=h;continue}break}h===n?(s+=c[d],d+=1):s+=h}}catch(e){v=true;y=e}finally{try{if(!f&&p.return!=null){p.return()}}finally{if(v){throw y}}}return s};var L=function(e){return e.replace(/\D/g,"")};var z=function(e,r){var t=e.style.display;t!=="block"&&(e.style.display="block");var n=e.getBoundingClientRect(),a=r.getBoundingClientRect(),o=a.top-n.top,i=n.bottom-a.bottom;o>=0&&i>=0||(Math.abs(o)<Math.abs(i)?e.scrollTop+=o:e.scrollTop-=i),e.style.display=t};var _=function(e){var r=e.name,t=e.iso2,n=e.dialCode,a=e.format,o=e.priority,i=e.areaCodes,u=[r,t,n,a,o,i];for(var l=0;l<u.length;l+=1){if(l===0)continue;var c=u[l-1],s=u[l];if(c===void 0&&s!==void 0){var d=JSON.stringify(u,function(e,r){return r===void 0?"__undefined":r}).replace(/"__undefined"/g,"undefined");throw new Error("[react-international-phone] invalid country values passed to buildCountryData. Check ".concat(c," in: ").concat(d))}}return u.filter(function(e){return e!==void 0})};var B=function(e){var r=v(e,6),t=r[0],n=r[1],a=r[2],o=r[3],i=r[4],u=r[5];return{name:t,iso2:n,dialCode:a,format:o,priority:i,areaCodes:u}};var R=function(e){return'Field "'.concat(e,'" is not supported')},G=function(e){var r=e.field,t=e.value,n=e.countries,a=n===void 0?A:n;if(["priority"].includes(r))throw new Error(R(r));var o=a.find(function(e){var n=B(e);return t===n[r]});if(o)return B(o)};var T=function(e){var r=e.phone,t=e.countries,n=t===void 0?A:t,a=e.currentCountryIso2;var o={country:void 0,fullDialCodeMatch:!1};if(!r)return o;var i=L(r);if(!i)return o;var u=o,l=function(e){var r=e.country,t=e.fullDialCodeMatch;var n,a;var o,i;var l=r.dialCode===((n=u.country)===null||n===void 0?void 0:n.dialCode),c=((o=r.priority)!==null&&o!==void 0?o:0)<((i=(a=u.country)===null||a===void 0?void 0:a.priority)!==null&&i!==void 0?i:0);(!l||c)&&(u={country:r,fullDialCodeMatch:t})};var c=true,s=false,d=undefined;try{for(var f=n[Symbol.iterator](),v;!(c=(v=f.next()).done);c=true){var y=v.value;var p=B(y),m=p.dialCode,h=p.areaCodes;if(i.startsWith(m)){var C=u.country?Number(m)>=Number(u.country.dialCode):!0;if(h){var b=i.substring(m.length);var g=true,w=false,D=undefined;try{for(var S=h[Symbol.iterator](),P;!(g=(P=S.next()).done);g=true){var N=P.value;if(b.startsWith(N))return{country:p,fullDialCodeMatch:!0}}}catch(e){w=true;D=e}finally{try{if(!g&&S.return!=null){S.return()}}finally{if(w){throw D}}}}(C||m===i||!u.fullDialCodeMatch)&&l({country:p,fullDialCodeMatch:!0})}u.fullDialCodeMatch||i.length<m.length&&m.startsWith(i)&&(!u.country||Number(m)<=Number(u.country.dialCode))&&l({country:p,fullDialCodeMatch:!1})}}catch(e){s=true;d=e}finally{try{if(!c&&f.return!=null){f.return()}}finally{if(s){throw d}}}if(a){var x;var k=G({value:a,field:"iso2",countries:n});if(!k)return u;var j=k?function(e){if(!(e===null||e===void 0?void 0:e.areaCodes))return!1;var r=i.substring(e.dialCode.length);return e.areaCodes.some(function(e){return e.startsWith(r)})}(k):!1;!!u&&((x=u.country)===null||x===void 0?void 0:x.dialCode)===k.dialCode&&u.country!==k&&u.fullDialCodeMatch&&(!k.areaCodes||j)&&(u={country:k,fullDialCodeMatch:!0})}return u};var q=function(e){var r=e.phone,t=e.dialCode,n=e.prefix,a=n===void 0?"+":n,o=e.charAfterDialCode,i=o===void 0?" ":o;if(!r||!t)return r;var u=r;return u.startsWith(a)&&(u=u.replace(a,"")),u.startsWith(t)?(u=u.replace(t,""),u.startsWith(i)&&(u=u.replace(i,"")),u):r};var K=function(e){var r=e.phone,t=e.dialCode,n=e.prefix,a=n===void 0?"+":n,o=e.charAfterDialCode,i=o===void 0?" ":o;return"".concat(a).concat(t).concat(i).concat(q({phone:r,dialCode:t,charAfterDialCode:i,prefix:a}))};var W=function(e,r){var t=r.disableDialCodeAndPrefix?!1:r.forceDialCode,n=r.disableDialCodeAndPrefix?!1:r.insertDialCodeOnEmpty,a=e,o=function(e){return r.trimNonDigitsEnd?e.trim():e};if(!a)return n&&!a.length||t?o("".concat(r.prefix).concat(r.dialCode).concat(r.charAfterDialCode)):o(a);if(a=L(a),a===r.dialCode&&!r.disableDialCodeAndPrefix)return o("".concat(r.prefix).concat(r.dialCode).concat(r.charAfterDialCode));if(r.dialCode.startsWith(a)&&!r.disableDialCodeAndPrefix)return o(t?"".concat(r.prefix).concat(r.dialCode).concat(r.charAfterDialCode):"".concat(r.prefix).concat(a));if(!a.startsWith(r.dialCode)&&!r.disableDialCodeAndPrefix){if(t)return o("".concat(r.prefix).concat(r.dialCode).concat(r.charAfterDialCode));if(a.length<r.dialCode.length)return o("".concat(r.prefix).concat(a))}var i=function(){var e=r.dialCode.length;r.disableDialCodeAndPrefix&&(e=0);var t=a.slice(0,e),n=a.slice(e);return{phoneLeftSide:t,phoneRightSide:n}},u=i(),l=u.phoneLeftSide,c=u.phoneRightSide;return l="".concat(r.prefix).concat(l).concat(r.charAfterDialCode),c=I({value:c,mask:r.mask,maskSymbol:r.maskChar,trimNonMaskCharsLeftover:r.trimNonDigitsEnd}),r.disableDialCodeAndPrefix&&(l=""),o("".concat(l).concat(c))};var F=function(e){return/\d/.test(e)},U=function(e){var r=e.phoneBeforeInput,t=e.phoneAfterInput,n=e.phoneAfterFormatted,a=e.cursorPositionAfterInput,o=e.leftOffset,i=o===void 0?0:o,u=e.deletion;if(a<i)return i;if(!r)return n.length;var l=u==="backward";if(a===0&&t.length>0&&n.length>0){if(l)return 0;for(var c=0;c<n.length;c+=1)if(F(n[c]))return c;return n.length}if(t.length<r.length&&t.length===1)return n.length;var s=null;for(var d=a-1;d>=0;d-=1)if(F(t[d])){s=d;break}if(s===null)return a!==0?a:n.length;var f=0;for(var v=0;v<s;v+=1)F(t[v])&&(f+=1);l&&(f-=1);var y=0,p=0;for(var m=0;m<n.length&&(y+=1,F(n[m])&&(p+=1),p!==f+1);m+=1);for(;!F(n[y])&&y<n.length;)y+=1;return l&&(y+=1),y};var V=P(require("react"));var H=function(e,r){var t=parseInt(e,16);return Number(t+r).toString(16)},J="abcdefghijklmnopqrstuvwxyz",Z="1f1e6",Q=J.split("").reduce(function(e,r,t){return s(l({},e),n({},r,H(Z,t)))},{}),Y=function(e){return[Q[e[0]],Q[e[1]]].join("-")},$=function(e){var r=e.iso2,t=e.size,n=e.src,a=e.protocol,o=a===void 0?"https":a,i=e.disableLazyLoading,u=e.className,c=e.style,s=d(e,["iso2","size","src","protocol","disableLazyLoading","className","style"]);if(!r)return V.default.createElement("img",l({className:M({addPrefix:["flag-emoji"],rawClassNames:[u]}),width:t,height:t},s));var f=function(){if(n)return n;var e=Y(r);return"".concat(o,"://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/").concat(e,".svg")};return V.default.createElement("img",l({className:M({addPrefix:["flag-emoji"],rawClassNames:[u]}),src:f(),width:t,height:t,draggable:!1,"data-country":r,loading:i?void 0:"lazy",style:l({width:t,height:t},c),alt:""},s))};var X=P(require("react"));var ee=1e3,er=function(e){var r=e.show,t=e.dialCodePrefix,n=t===void 0?"+":t,a=e.selectedCountry,o=e.countries,i=o===void 0?A:o,u=e.flags,c=e.onSelect,s=e.onClose,f=d(e,["show","dialCodePrefix","selectedCountry","countries","flags","onSelect","onClose"]);var y=(0,X.useRef)(null),p=(0,X.useRef)(),m=(0,X.useRef)({updatedAt:void 0,value:""}),h=function(e){var r=m.current.updatedAt&&new Date().getTime()-m.current.updatedAt.getTime()>ee;m.current={value:r?e:"".concat(m.current.value).concat(e),updatedAt:new Date};var t=i.findIndex(function(e){return B(e).name.toLowerCase().startsWith(m.current.value)});t!==-1&&w(t)},C=(0,X.useCallback)(function(e){return i.findIndex(function(r){return B(r).iso2===e})},[i]),b=v((0,X.useState)(C(a)),2),g=b[0],w=b[1],D=function(){p.current!==a&&w(C(a))},S=(0,X.useCallback)(function(e){w(C(e.iso2)),c===null||c===void 0?void 0:c(e)},[c,C]),P=function(e){var r=i.length-1,t=function(t){return e==="prev"?t-1:e==="next"?t+1:e==="last"?r:0};w(function(e){var n=t(e);return n<0?0:n>r?r:n})},N=function(e){if(e.stopPropagation(),e.key==="Enter"){e.preventDefault();var r=B(i[g]);S(r);return}if(e.key==="Escape"){s===null||s===void 0?void 0:s();return}if(e.key==="ArrowUp"){e.preventDefault(),P("prev");return}if(e.key==="ArrowDown"){e.preventDefault(),P("next");return}if(e.key==="PageUp"){e.preventDefault(),P("first");return}if(e.key==="PageDown"){e.preventDefault(),P("last");return}e.key===" "&&e.preventDefault(),e.key.length===1&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&h(e.key.toLocaleLowerCase())},x=(0,X.useCallback)(function(){if(!y.current||g===void 0)return;var e=B(i[g]).iso2;if(e===p.current)return;var r=y.current.querySelector('[data-country="'.concat(e,'"]'));r&&(z(y.current,r),p.current=e)},[g,i]);return(0,X.useEffect)(function(){x()},[g,x]),(0,X.useEffect)(function(){y.current&&(r?y.current.focus():D())},[r]),(0,X.useEffect)(function(){D()},[a]),X.default.createElement("ul",{ref:y,role:"listbox",className:M({addPrefix:["country-selector-dropdown"],rawClassNames:[f.className]}),style:l({display:r?"block":"none"},f.style),onKeyDown:N,onBlur:s,tabIndex:-1,"aria-activedescendant":"".concat(B(i[g]).iso2,"-option")},i.map(function(e,r){var t=B(e),o=t.iso2===a,i=r===g,l=u===null||u===void 0?void 0:u.find(function(e){return e.iso2===t.iso2});return X.default.createElement("li",{key:t.iso2,"data-country":t.iso2,role:"option","aria-selected":o,"aria-label":"".concat(t.name," ").concat(n).concat(t.dialCode),id:"".concat(t.iso2,"-option"),className:M({addPrefix:["country-selector-dropdown__list-item",o&&"country-selector-dropdown__list-item--selected",i&&"country-selector-dropdown__list-item--focused"],rawClassNames:[f.listItemClassName]}),onClick:function(){return S(t)},style:f.listItemStyle},X.default.createElement($,{iso2:t.iso2,src:l===null||l===void 0?void 0:l.src,className:M({addPrefix:["country-selector-dropdown__list-item-flag-emoji"],rawClassNames:[f.listItemFlagClassName]}),style:f.listItemFlagStyle}),X.default.createElement("span",{className:M({addPrefix:["country-selector-dropdown__list-item-country-name"],rawClassNames:[f.listItemCountryNameClassName]}),style:f.listItemCountryNameStyle},t.name),X.default.createElement("span",{className:M({addPrefix:["country-selector-dropdown__list-item-dial-code"],rawClassNames:[f.listItemDialCodeClassName]}),style:f.listItemDialCodeStyle},n,t.dialCode))}))};var et=function(e){var r=e.selectedCountry,t=e.onSelect,n=e.disabled,a=e.hideDropdown,o=e.countries,i=o===void 0?A:o,u=e.flags,c=e.renderButtonWrapper,f=d(e,["selectedCountry","onSelect","disabled","hideDropdown","countries","flags","renderButtonWrapper"]);var y=v((0,k.useState)(!1),2),p=y[0],m=y[1],h=(0,k.useMemo)(function(){if(r)return G({value:r,field:"iso2",countries:i})},[i,r]),C=(0,k.useRef)(null),b=function(e){e.key&&["ArrowUp","ArrowDown"].includes(e.key)&&(e.preventDefault(),m(!0))},g=function(){var e;var t={title:h===null||h===void 0?void 0:h.name,onClick:function(){return m(function(e){return!e})},onMouseDown:function(e){return e.preventDefault()},onKeyDown:b,disabled:a||n,role:"combobox","aria-label":"Country selector","aria-haspopup":"listbox","aria-expanded":p},o=k.default.createElement("div",{className:M({addPrefix:["country-selector-button__button-content"],rawClassNames:[f.buttonContentWrapperClassName]}),style:f.buttonContentWrapperStyle},k.default.createElement($,{iso2:r,src:u===null||u===void 0?void 0:(e=u.find(function(e){return e.iso2===r}))===null||e===void 0?void 0:e.src,className:M({addPrefix:["country-selector-button__flag-emoji",n&&"country-selector-button__flag-emoji--disabled"],rawClassNames:[f.flagClassName]}),style:l({visibility:r?"visible":"hidden"},f.flagStyle)}),!a&&k.default.createElement("div",{className:M({addPrefix:["country-selector-button__dropdown-arrow",n&&"country-selector-button__dropdown-arrow--disabled",p&&"country-selector-button__dropdown-arrow--active"],rawClassNames:[f.dropdownArrowClassName]}),style:f.dropdownArrowStyle}));return c?c({children:o,rootProps:t}):k.default.createElement("button",s(l({},t),{type:"button",className:M({addPrefix:["country-selector-button",p&&"country-selector-button--active",n&&"country-selector-button--disabled",a&&"country-selector-button--hide-dropdown"],rawClassNames:[f.buttonClassName]}),"data-country":r,style:f.buttonStyle}),o)};return k.default.createElement("div",{className:M({addPrefix:["country-selector"],rawClassNames:[f.className]}),style:f.style,ref:C},g(),k.default.createElement(er,l({show:p,countries:i,flags:u,onSelect:function(e){m(!1),t===null||t===void 0?void 0:t(e)},selectedCountry:r,onClose:function(){m(!1)}},f.dropdownStyleProps)))};var en=P(require("react"));var ea=function(e){var r=e.dialCode,t=e.prefix,n=e.disabled,a=e.style,o=e.className;return en.default.createElement("div",{className:M({addPrefix:["dial-code-preview",n&&"dial-code-preview--disabled"],rawClassNames:[o]}),style:a},"".concat(t).concat(r))};var eo=P(require("react"));var ei=require("react"),eu=function(e,r,t){var n=(0,ei.useRef)(void 0);(!n.current||!t(r,n.current))&&(n.current=r),(0,ei.useEffect)(e,n.current)};var el=require("react");var ec=require("react");var es=require("react"),ed=function(){var e=(0,es.useRef)(),r=(0,es.useRef)(Date.now());return{check:function(){var t=Date.now(),n=e.current?t-r.current:void 0;return e.current=r.current,r.current=t,n}}};var ef={size:20,overrideLastItemDebounceMS:-1};function ev(e,r){var t=l({},ef,r),n=t.size,a=t.overrideLastItemDebounceMS,o=t.onChange,i=v((0,ec.useState)(e),2),u=i[0],c=i[1],s=v((0,ec.useState)([u]),2),d=s[0],f=s[1],p=v((0,ec.useState)(0),2),m=p[0],h=p[1],C=ed();return[u,function(e,r){if(typeof e=="object"&&Object.entries(e).toString()===Object.entries(u).toString()||e===u)return;var t=a>0,i=C.check(),l=t&&i!==void 0?i>a:!0;if((r===null||r===void 0?void 0:r.overrideLastItem)!==void 0?r.overrideLastItem:!l)f(function(r){return y(r.slice(0,m)).concat([e])});else{var s=d.length>=n;f(function(r){return y(r.slice(s?1:0,m+1)).concat([e])}),s||h(function(e){return e+1})}c(e),o===null||o===void 0?void 0:o(e)},function(){if(m<=0)return{success:!1};var e=d[m-1];return c(e),h(function(e){return e-1}),o===null||o===void 0?void 0:o(e),{success:!0,value:e}},function(){if(m+1>=d.length)return{success:!1};var e=d[m+1];return c(e),h(function(e){return e+1}),o===null||o===void 0?void 0:o(e),{success:!0,value:e}}]}var ey=".",ep={defaultCountry:"us",value:"",prefix:"+",defaultMask:"............",charAfterDialCode:" ",historySaveDebounceMS:200,disableCountryGuess:!1,disableDialCodePrefill:!1,forceDialCode:!1,disableDialCodeAndPrefix:!1,countries:A},em=function(e){var r=e.defaultCountry,t=r===void 0?ep.defaultCountry:r,n=e.value,a=n===void 0?ep.value:n,o=e.countries,i=o===void 0?ep.countries:o,u=e.prefix,l=u===void 0?ep.prefix:u,c=e.defaultMask,s=c===void 0?ep.defaultMask:c,d=e.charAfterDialCode,f=d===void 0?ep.charAfterDialCode:d,y=e.historySaveDebounceMS,p=y===void 0?ep.historySaveDebounceMS:y,m=e.disableCountryGuess,h=m===void 0?ep.disableCountryGuess:m,C=e.disableDialCodePrefill,b=C===void 0?ep.disableDialCodePrefill:C,g=e.forceDialCode,w=g===void 0?ep.forceDialCode:g,D=e.disableDialCodeAndPrefix,S=D===void 0?ep.disableDialCodeAndPrefix:D,P=e.onChange;var N=S?!1:!h,x=(0,el.useRef)(null),k=function(e){var r=e.value,t=e.country,n=e.trimNonDigitsEnd,a=e.insertDialCodeOnEmpty,o=e.forceDisableCountryGuess;var u;var c=!o&&N?T({phone:r,countries:i,currentCountryIso2:t.iso2}):void 0,d=(u=c===null||c===void 0?void 0:c.country)!==null&&u!==void 0?u:t;return{phone:d?W(r,{prefix:l,mask:d.format||s,maskChar:ey,dialCode:d.dialCode,trimNonDigitsEnd:n,charAfterDialCode:f,forceDialCode:w,insertDialCodeOnEmpty:a,disableDialCodeAndPrefix:S}):r,countryGuessResult:c,formatCountry:d}},A=function(e){Promise.resolve().then(function(){var r;(r=x.current)===null||r===void 0?void 0:r.setSelectionRange(e,e)})},j=v(ev(function(){var e;var r=((e=S?null:T({phone:a,countries:i,currentCountryIso2:t}))===null||e===void 0?void 0:e.country)||G({value:t,field:"iso2",countries:i});r||console.error('[react-international-phone]: can not find a country with "'.concat(t,'" iso2 code'));var n=r||B(i.find(function(e){return B(e).iso2==="us"})),o=k({value:a,country:n,insertDialCodeOnEmpty:!b}).phone;return A(o.length),{phone:o,country:n.iso2}},{overrideLastItemDebounceMS:p,onChange:P}),4),E=j[0],O=E.phone,M=E.country,I=j[1],z=j[2],_=j[3],R=(0,el.useMemo)(function(){return G({value:M,field:"iso2",countries:i})},[i,M]),q=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.deletion,n=r.cursorPosition,a=r.insertDialCodeOnEmpty,o=r.inserted;var i;var u=e,c=n;w&&!S&&R&&!L(e).startsWith(R.dialCode)&&e&&(o&&e.startsWith(l)&&e.length-(n!==null&&n!==void 0?n:0)===0?u=e:(u=O,c=0));var s=k({value:u,country:R,trimNonDigitsEnd:t==="backward",insertDialCodeOnEmpty:a,forceDisableCountryGuess:w&&!!t&&L(u).length<R.dialCode.length}),d=s.phone,v=s.countryGuessResult,y=R;N&&(v===null||v===void 0?void 0:v.country)&&v.country.name!==M&&v.fullDialCodeMatch&&(y=v.country);var p;var m=U({cursorPositionAfterInput:c!==null&&c!==void 0?c:0,phoneBeforeInput:O,phoneAfterInput:e,phoneAfterFormatted:d,leftOffset:w?l.length+((p=R===null||R===void 0?void 0:(i=R.dialCode)===null||i===void 0?void 0:i.length)!==null&&p!==void 0?p:0)+f.length:0,deletion:t});return I({phone:d,country:y.iso2}),A(m),d};(0,el.useEffect)(function(){var e=x.current;if(!e)return;var r=function(e){if(!e.key)return;var r=e.ctrlKey,t=e.shiftKey,n=e.key.toLowerCase()==="z";!r||!n||(t?_():z())};return e.addEventListener("keydown",r),function(){e.removeEventListener("keydown",r)}},[x,z,_]);var F=function(e){e.preventDefault();var r;var t=e.nativeEvent.inputType,n=function(){var e;if((e=t===null||t===void 0?void 0:t.toLocaleLowerCase().includes("delete"))!==null&&e!==void 0?e:!1)return(t===null||t===void 0?void 0:t.toLocaleLowerCase().includes("forward"))?"forward":"backward"},a=t===null||t===void 0?void 0:t.startsWith("insertFrom"),o=q(e.target.value,{deletion:n(),inserted:a,cursorPosition:(r=e.target.selectionStart)!==null&&r!==void 0?r:0});return S&&R?K({phone:o,dialCode:R.dialCode,charAfterDialCode:f,prefix:l}):o},V=function(e){var r=G({value:e,field:"iso2",countries:i});if(!r)return;var t=S?"":"".concat(l).concat(r.dialCode).concat(f);I({phone:t,country:r.iso2})},H=v((0,el.useState)(!1),2),J=H[0],Z=H[1];return(0,el.useEffect)(function(){if(!J){Z(!0),a!==O&&(P===null||P===void 0?void 0:P({phone:O,country:M}));return}a!==O&&q(a)},[a]),{phone:O,country:M,setCountry:V,handlePhoneValueChange:F,inputRef:x}};var eh=function(e){var r=e.hideDropdown,t=e.placeholder,n=e.disabled,a=e.showDisabledDialCodeAndPrefix,o=e.inputProps,i=e.flags,u=e.onChange,c=e.country,f=e.style,y=e.className,p=e.inputStyle,m=e.inputClassName,h=e.countrySelectorStyleProps,C=e.dialCodePreviewStyleProps,b=e.value,g=e.countries,w=g===void 0?A:g,D=d(e,["hideDropdown","placeholder","disabled","showDisabledDialCodeAndPrefix","inputProps","flags","onChange","country","style","className","inputStyle","inputClassName","countrySelectorStyleProps","dialCodePreviewStyleProps","value","countries"]);var S=em(s(l({value:b,countries:w},D),{onChange:function(e){u===null||u===void 0?void 0:u(e.phone,e.country)}})),P=S.phone,N=S.inputRef,x=S.country,k=S.setCountry,j=S.handlePhoneValueChange,E=(0,eo.useMemo)(function(){if(x)return G({value:x,field:"iso2",countries:w})},[w,x]);eu(function(){c&&k(c)},[c,k],function(e,r){var t=v(e,1),n=t[0],a=v(r,1),o=a[0];return n===o});var O=D.disableDialCodeAndPrefix&&a&&(E===null||E===void 0?void 0:E.dialCode);var I;return eo.default.createElement("div",{className:M({addPrefix:["input-container"],rawClassNames:[y]}),style:f},eo.default.createElement(et,l({onSelect:function(e){return k(e.iso2)},flags:i,selectedCountry:x,countries:w,disabled:n,hideDropdown:r},h)),O&&eo.default.createElement(ea,l({dialCode:E.dialCode,prefix:(I=D.prefix)!==null&&I!==void 0?I:"+",disabled:n},C)),eo.default.createElement("input",l({onChange:j,value:P,type:"tel",ref:N,className:M({addPrefix:["input",n&&"input--disabled"],rawClassNames:[m]}),placeholder:t,disabled:n,style:p},o)))};0&&(module.exports={CountrySelector:CountrySelector,CountrySelectorDropdown:CountrySelectorDropdown,DialCodePreview:DialCodePreview,FlagEmoji:FlagEmoji,PhoneInput:PhoneInput,buildCountryData:buildCountryData,defaultCountries:defaultCountries,getCountry:getCountry,guessCountryByPartialPhoneNumber:guessCountryByPartialPhoneNumber,parseCountry:parseCountry,removeDialCode:removeDialCode,usePhoneInput:usePhoneInput});