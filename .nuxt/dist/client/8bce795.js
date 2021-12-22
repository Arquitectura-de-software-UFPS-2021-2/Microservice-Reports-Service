/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{506:function(e,t,n){e.exports=function(){"use strict";function e(e){if(Array.isArray(e)){for(var i=0,t=Array(e.length);i<e.length;i++)t[i]=e[i];return t}return Array.from(e)}var t=Object.hasOwnProperty,n=Object.setPrototypeOf,r=Object.isFrozen,o=Object.getPrototypeOf,l=Object.getOwnPropertyDescriptor,c=Object.freeze,m=Object.seal,f=Object.create,d="undefined"!=typeof Reflect&&Reflect,h=d.apply,y=d.construct;h||(h=function(e,t,n){return e.apply(t,n)}),c||(c=function(e){return e}),m||(m=function(e){return e}),y||(y=function(t,n){return new(Function.prototype.bind.apply(t,[null].concat(e(n))))});var v=O(Array.prototype.forEach),T=O(Array.prototype.pop),N=O(Array.prototype.push),A=O(String.prototype.toLowerCase),E=O(String.prototype.match),k=O(String.prototype.replace),w=O(String.prototype.indexOf),x=O(String.prototype.trim),S=O(RegExp.prototype.test),_=C(TypeError);function O(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return h(e,t,r)}}function C(e){return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return y(e,n)}}function D(e,t){n&&n(e,null);for(var o=t.length;o--;){var element=t[o];if("string"==typeof element){var l=A(element);l!==element&&(r(t)||(t[o]=l),element=l)}e[element]=!0}return e}function M(object){var e=f(null),n=void 0;for(n in object)h(t,object,[n])&&(e[n]=object[n]);return e}function L(object,e){for(;null!==object;){var desc=l(object,e);if(desc){if(desc.get)return O(desc.get);if("function"==typeof desc.value)return O(desc.value)}object=o(object)}function t(element){return console.warn("fallback value for",element),null}return t}var html=c(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),svg=c(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),R=c(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),I=c(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),F=c(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),H=c(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),text=c(["#text"]),U=c(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),z=c(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),B=c(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),j=c(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),G=m(/\{\{[\s\S]*|[\s\S]*\}\}/gm),P=m(/<%[\s\S]*|[\s\S]*%>/gm),W=m(/^data-[\-\w.\u00B7-\uFFFF]/),Y=m(/^aria-[\-\w]+$/),K=m(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),V=m(/^(?:\w+script|data):/i),J=m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function $(e){if(Array.isArray(e)){for(var i=0,t=Array(e.length);i<e.length;i++)t[i]=e[i];return t}return Array.from(e)}var Z=function(){return"undefined"==typeof window?null:window},Q=function(e,t){if("object"!==(void 0===e?"undefined":X(e))||"function"!=typeof e.createPolicy)return null;var n=null,r="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(r)&&(n=t.currentScript.getAttribute(r));var o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};function ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z(),t=function(e){return ee(e)};if(t.version="2.3.4",t.removed=[],!e||!e.document||9!==e.document.nodeType)return t.isSupported=!1,t;var n=e.document,r=e.document,o=e.DocumentFragment,l=e.HTMLTemplateElement,m=e.Node,f=e.Element,d=e.NodeFilter,h=e.NamedNodeMap,y=void 0===h?e.NamedNodeMap||e.MozNamedAttrMap:h,O=e.HTMLFormElement,C=e.DOMParser,te=e.trustedTypes,ne=f.prototype,re=L(ne,"cloneNode"),oe=L(ne,"nextSibling"),ie=L(ne,"childNodes"),ae=L(ne,"parentNode");if("function"==typeof l){var template=r.createElement("template");template.content&&template.content.ownerDocument&&(r=template.content.ownerDocument)}var le=Q(te,n),ce=le&&Be?le.createHTML(""):"",se=r,ue=se.implementation,me=se.createNodeIterator,fe=se.createDocumentFragment,pe=se.getElementsByTagName,de=n.importNode,he={};try{he=M(r).documentMode?r.documentMode:{}}catch(e){}var ge={};t.isSupported="function"==typeof ae&&ue&&void 0!==ue.createHTMLDocument&&9!==he;var ye=G,ve=P,be=W,Te=Y,Ne=V,Ae=J,Ee=K,ke=null,we=D({},[].concat($(html),$(svg),$(R),$(F),$(text))),xe=null,Se=D({},[].concat($(U),$(z),$(B),$(j))),_e=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Oe=null,Ce=null,De=!0,Me=!0,Le=!1,Re=!1,Ie=!1,Fe=!1,He=!1,Ue=!1,ze=!1,Be=!1,je=!0,Ge=!0,Pe=!1,We={},qe=null,Ye=D({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Ke=null,Ve=D({},["audio","video","img","source","image","track"]),Je=null,Xe=D({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),$e="http://www.w3.org/1998/Math/MathML",Ze="http://www.w3.org/2000/svg",Qe="http://www.w3.org/1999/xhtml",et=Qe,tt=!1,nt=void 0,ot=["application/xhtml+xml","text/html"],it="text/html",at=void 0,lt=null,ct=r.createElement("form"),st=function(e){return e instanceof RegExp||e instanceof Function},ut=function(e){lt&&lt===e||(e&&"object"===(void 0===e?"undefined":X(e))||(e={}),e=M(e),ke="ALLOWED_TAGS"in e?D({},e.ALLOWED_TAGS):we,xe="ALLOWED_ATTR"in e?D({},e.ALLOWED_ATTR):Se,Je="ADD_URI_SAFE_ATTR"in e?D(M(Xe),e.ADD_URI_SAFE_ATTR):Xe,Ke="ADD_DATA_URI_TAGS"in e?D(M(Ve),e.ADD_DATA_URI_TAGS):Ve,qe="FORBID_CONTENTS"in e?D({},e.FORBID_CONTENTS):Ye,Oe="FORBID_TAGS"in e?D({},e.FORBID_TAGS):{},Ce="FORBID_ATTR"in e?D({},e.FORBID_ATTR):{},We="USE_PROFILES"in e&&e.USE_PROFILES,De=!1!==e.ALLOW_ARIA_ATTR,Me=!1!==e.ALLOW_DATA_ATTR,Le=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Re=e.SAFE_FOR_TEMPLATES||!1,Ie=e.WHOLE_DOCUMENT||!1,Ue=e.RETURN_DOM||!1,ze=e.RETURN_DOM_FRAGMENT||!1,Be=e.RETURN_TRUSTED_TYPE||!1,He=e.FORCE_BODY||!1,je=!1!==e.SANITIZE_DOM,Ge=!1!==e.KEEP_CONTENT,Pe=e.IN_PLACE||!1,Ee=e.ALLOWED_URI_REGEXP||Ee,et=e.NAMESPACE||Qe,e.CUSTOM_ELEMENT_HANDLING&&st(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(_e.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&st(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(_e.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(_e.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),nt=nt=-1===ot.indexOf(e.PARSER_MEDIA_TYPE)?it:e.PARSER_MEDIA_TYPE,at="application/xhtml+xml"===nt?function(e){return e}:A,Re&&(Me=!1),ze&&(Ue=!0),We&&(ke=D({},[].concat($(text))),xe=[],!0===We.html&&(D(ke,html),D(xe,U)),!0===We.svg&&(D(ke,svg),D(xe,z),D(xe,j)),!0===We.svgFilters&&(D(ke,R),D(xe,z),D(xe,j)),!0===We.mathMl&&(D(ke,F),D(xe,B),D(xe,j))),e.ADD_TAGS&&(ke===we&&(ke=M(ke)),D(ke,e.ADD_TAGS)),e.ADD_ATTR&&(xe===Se&&(xe=M(xe)),D(xe,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&D(Je,e.ADD_URI_SAFE_ATTR),e.FORBID_CONTENTS&&(qe===Ye&&(qe=M(qe)),D(qe,e.FORBID_CONTENTS)),Ge&&(ke["#text"]=!0),Ie&&D(ke,["html","head","body"]),ke.table&&(D(ke,["tbody"]),delete Oe.tbody),c&&c(e),lt=e)},mt=D({},["mi","mo","mn","ms","mtext"]),ft=D({},["foreignobject","desc","title","annotation-xml"]),pt=D({},svg);D(pt,R),D(pt,I);var ht=D({},F);D(ht,H);var gt=function(element){var e=ae(element);e&&e.tagName||(e={namespaceURI:Qe,tagName:"template"});var t=A(element.tagName),n=A(e.tagName);if(element.namespaceURI===Ze)return e.namespaceURI===Qe?"svg"===t:e.namespaceURI===$e?"svg"===t&&("annotation-xml"===n||mt[n]):Boolean(pt[t]);if(element.namespaceURI===$e)return e.namespaceURI===Qe?"math"===t:e.namespaceURI===Ze?"math"===t&&ft[n]:Boolean(ht[t]);if(element.namespaceURI===Qe){if(e.namespaceURI===Ze&&!ft[n])return!1;if(e.namespaceURI===$e&&!mt[n])return!1;var r=D({},["title","style","font","a","script"]);return!ht[t]&&(r[t]||!pt[t])}return!1},yt=function(e){N(t.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ce}catch(t){e.remove()}}},vt=function(e,n){try{N(t.removed,{attribute:n.getAttributeNode(e),from:n})}catch(e){N(t.removed,{attribute:null,from:n})}if(n.removeAttribute(e),"is"===e&&!xe[e])if(Ue||ze)try{yt(n)}catch(e){}else try{n.setAttribute(e,"")}catch(e){}},bt=function(e){var t=void 0,n=void 0;if(He)e="<remove></remove>"+e;else{var o=E(e,/^[\r\n\t ]+/);n=o&&o[0]}"application/xhtml+xml"===nt&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var l=le?le.createHTML(e):e;if(et===Qe)try{t=(new C).parseFromString(l,nt)}catch(e){}if(!t||!t.documentElement){t=ue.createDocument(et,"template",null);try{t.documentElement.innerHTML=tt?"":l}catch(e){}}var body=t.body||t.documentElement;return e&&n&&body.insertBefore(r.createTextNode(n),body.childNodes[0]||null),et===Qe?pe.call(t,Ie?"html":"body")[0]:Ie?t.documentElement:body},Tt=function(e){return me.call(e.ownerDocument||e,e,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT,null,!1)},Nt=function(e){return e instanceof O&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof y)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore)},At=function(object){return"object"===(void 0===m?"undefined":X(m))?object instanceof m:object&&"object"===(void 0===object?"undefined":X(object))&&"number"==typeof object.nodeType&&"string"==typeof object.nodeName},Et=function(e,n,data){ge[e]&&v(ge[e],(function(e){e.call(t,n,data,lt)}))},kt=function(e){var content=void 0;if(Et("beforeSanitizeElements",e,null),Nt(e))return yt(e),!0;if(E(e.nodeName,/[\u0080-\uFFFF]/))return yt(e),!0;var n=at(e.nodeName);if(Et("uponSanitizeElement",e,{tagName:n,allowedTags:ke}),!At(e.firstElementChild)&&(!At(e.content)||!At(e.content.firstElementChild))&&S(/<[/\w]/g,e.innerHTML)&&S(/<[/\w]/g,e.textContent))return yt(e),!0;if("select"===n&&S(/<template/i,e.innerHTML))return yt(e),!0;if(!ke[n]||Oe[n]){if(Ge&&!qe[n]){var r=ae(e)||e.parentNode,o=ie(e)||e.childNodes;if(o&&r)for(var i=o.length-1;i>=0;--i)r.insertBefore(re(o[i],!0),oe(e))}if(!Oe[n]&&xt(n)){if(_e.tagNameCheck instanceof RegExp&&S(_e.tagNameCheck,n))return!1;if(_e.tagNameCheck instanceof Function&&_e.tagNameCheck(n))return!1}return yt(e),!0}return e instanceof f&&!gt(e)?(yt(e),!0):"noscript"!==n&&"noembed"!==n||!S(/<\/no(script|embed)/i,e.innerHTML)?(Re&&3===e.nodeType&&(content=e.textContent,content=k(content,ye," "),content=k(content,ve," "),e.textContent!==content&&(N(t.removed,{element:e.cloneNode()}),e.textContent=content)),Et("afterSanitizeElements",e,null),!1):(yt(e),!0)},wt=function(e,t,n){if(je&&("id"===t||"name"===t)&&(n in r||n in ct))return!1;if(Me&&!Ce[t]&&S(be,t));else if(De&&S(Te,t));else if(!xe[t]||Ce[t]){if(!(xt(e)&&(_e.tagNameCheck instanceof RegExp&&S(_e.tagNameCheck,e)||_e.tagNameCheck instanceof Function&&_e.tagNameCheck(e))&&(_e.attributeNameCheck instanceof RegExp&&S(_e.attributeNameCheck,t)||_e.attributeNameCheck instanceof Function&&_e.attributeNameCheck(t))||"is"===t&&_e.allowCustomizedBuiltInElements&&(_e.tagNameCheck instanceof RegExp&&S(_e.tagNameCheck,n)||_e.tagNameCheck instanceof Function&&_e.tagNameCheck(n))))return!1}else if(Je[t]);else if(S(Ee,k(n,Ae,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==w(n,"data:")||!Ke[e])if(Le&&!S(Ne,k(n,Ae,"")));else if(n)return!1;return!0},xt=function(e){return e.indexOf("-")>0},St=function(e){var n=void 0,r=void 0,o=void 0,l=void 0;Et("beforeSanitizeAttributes",e,null);var c=e.attributes;if(c){var m={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:xe};for(l=c.length;l--;){var f=n=c[l],d=f.name,h=f.namespaceURI;if(r=x(n.value),o=at(d),m.attrName=o,m.attrValue=r,m.keepAttr=!0,m.forceKeepAttr=void 0,Et("uponSanitizeAttribute",e,m),r=m.attrValue,!m.forceKeepAttr&&(vt(d,e),m.keepAttr))if(S(/\/>/i,r))vt(d,e);else{Re&&(r=k(r,ye," "),r=k(r,ve," "));var y=at(e.nodeName);if(wt(y,o,r))try{h?e.setAttributeNS(h,d,r):e.setAttribute(d,r),T(t.removed)}catch(e){}}}Et("afterSanitizeAttributes",e,null)}},_t=function e(t){var n=void 0,r=Tt(t);for(Et("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)Et("uponSanitizeShadowNode",n,null),kt(n)||(n.content instanceof o&&e(n.content),St(n));Et("afterSanitizeShadowDOM",t,null)};return t.sanitize=function(r,l){var body=void 0,c=void 0,f=void 0,d=void 0,h=void 0;if((tt=!r)&&(r="\x3c!--\x3e"),"string"!=typeof r&&!At(r)){if("function"!=typeof r.toString)throw _("toString is not a function");if("string"!=typeof(r=r.toString()))throw _("dirty is not a string, aborting")}if(!t.isSupported){if("object"===X(e.toStaticHTML)||"function"==typeof e.toStaticHTML){if("string"==typeof r)return e.toStaticHTML(r);if(At(r))return e.toStaticHTML(r.outerHTML)}return r}if(Fe||ut(l),t.removed=[],"string"==typeof r&&(Pe=!1),Pe);else if(r instanceof m)1===(c=(body=bt("\x3c!----\x3e")).ownerDocument.importNode(r,!0)).nodeType&&"BODY"===c.nodeName||"HTML"===c.nodeName?body=c:body.appendChild(c);else{if(!Ue&&!Re&&!Ie&&-1===r.indexOf("<"))return le&&Be?le.createHTML(r):r;if(!(body=bt(r)))return Ue?null:ce}body&&He&&yt(body.firstChild);for(var y=Tt(Pe?r:body);f=y.nextNode();)3===f.nodeType&&f===d||kt(f)||(f.content instanceof o&&_t(f.content),St(f),d=f);if(d=null,Pe)return r;if(Ue){if(ze)for(h=fe.call(body.ownerDocument);body.firstChild;)h.appendChild(body.firstChild);else h=body;return xe.shadowroot&&(h=de.call(n,h,!0)),h}var v=Ie?body.outerHTML:body.innerHTML;return Re&&(v=k(v,ye," "),v=k(v,ve," ")),le&&Be?le.createHTML(v):v},t.setConfig=function(e){ut(e),Fe=!0},t.clearConfig=function(){lt=null,Fe=!1},t.isValidAttribute=function(e,t,n){lt||ut({});var r=at(e),o=at(t);return wt(r,o,n)},t.addHook=function(e,t){"function"==typeof t&&(ge[e]=ge[e]||[],N(ge[e],t))},t.removeHook=function(e){ge[e]&&T(ge[e])},t.removeHooks=function(e){ge[e]&&(ge[e]=[])},t.removeAllHooks=function(){ge={}},t}return ee()}()}}]);