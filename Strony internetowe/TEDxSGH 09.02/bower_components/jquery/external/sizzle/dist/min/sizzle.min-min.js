!function(e){function t(e,t,n,r){var o,i,u,l,a,c,s,d=t&&t.ownerDocument,h=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==h&&9!==h&&11!==h)return n;if(!r&&((t?t.ownerDocument||t:j)!==R&&B(t),t=t||R,z)){if(11!==h&&(a=ve.exec(e)))if(o=a[1]){if(9===h){if(!(u=t.getElementById(o)))return n;if(u.id===o)return n.push(u),n}else if(d&&(u=d.getElementById(o))&&F(t,u)&&u.id===o)return n.push(u),n}else{if(a[2])return _.apply(n,t.getElementsByTagName(e)),n;if((o=a[3])&&N.getElementsByClassName&&t.getElementsByClassName)return _.apply(n,t.getElementsByClassName(o)),n}if(N.qsa&&!J[e+" "]&&(!H||!H.test(e))){if(1!==h)d=t,s=e;else if("object"!==t.nodeName.toLowerCase()){for((l=t.getAttribute("id"))?l=l.replace(xe,Ne):t.setAttribute("id",l=O),c=S(e),i=c.length;i--;)c[i]="#"+l+" "+p(c[i]);s=c.join(","),d=$.test(e)&&f(t.parentNode)||t}if(s)try{return _.apply(n,d.querySelectorAll(s)),n}catch(g){}finally{l===O&&t.removeAttribute("id")}}}return A(e.replace(ae,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>C.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[O]=!0,e}function o(e){var t=R.createElement("fieldset");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function i(e,t){for(var n=e.split("|"),r=n.length;r--;)C.attrHandle[n[r]]=t}function u(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function l(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function a(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function c(e){return function(t){return"label"in t&&t.disabled===e||"form"in t&&t.disabled===e||"form"in t&&t.disabled===!1&&(t.isDisabled===e||t.isDisabled!==!e&&("label"in t||!Ee(t))!==e)}}function s(e){return r(function(t){return t=+t,r(function(n,r){for(var o,i=e([],n.length,t),u=i.length;u--;)n[o=i[u]]&&(n[o]=!(r[o]=n[o]))})})}function f(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function d(){}function p(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function h(e,t,n){var r=t.dir,o=t.next,i=o||r,u=n&&"parentNode"===i,l=U++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||u)return e(t,n,o)}:function(t,n,a){var c,s,f,d=[G,l];if(a){for(;t=t[r];)if((1===t.nodeType||u)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||u)if(f=t[O]||(t[O]={}),s=f[t.uniqueID]||(f[t.uniqueID]={}),o&&o===t.nodeName.toLowerCase())t=t[r]||t;else{if((c=s[i])&&c[0]===G&&c[1]===l)return d[2]=c[2];if(s[i]=d,d[2]=e(t,n,a))return!0}}}function g(e){return e.length>1?function(t,n,r){for(var o=e.length;o--;)if(!e[o](t,n,r))return!1;return!0}:e[0]}function m(e,n,r){for(var o=0,i=n.length;i>o;o++)t(e,n[o],r);return r}function y(e,t,n,r,o){for(var i,u=[],l=0,a=e.length,c=null!=t;a>l;l++)(i=e[l])&&(!n||n(i,r,o))&&(u.push(i),c&&t.push(l));return u}function v(e,t,n,o,i,u){return o&&!o[O]&&(o=v(o)),i&&!i[O]&&(i=v(i,u)),r(function(r,u,l,a){var c,s,f,d=[],p=[],h=u.length,g=r||m(t||"*",l.nodeType?[l]:l,[]),v=!e||!r&&t?g:y(g,d,e,l,a),w=n?i||(r?e:h||o)?[]:u:v;if(n&&n(v,w,l,a),o)for(c=y(w,p),o(c,[],l,a),s=c.length;s--;)(f=c[s])&&(w[p[s]]=!(v[p[s]]=f));if(r){if(i||e){if(i){for(c=[],s=w.length;s--;)(f=w[s])&&c.push(v[s]=f);i(null,w=[],c,a)}for(s=w.length;s--;)(f=w[s])&&(c=i?te(r,f):d[s])>-1&&(r[c]=!(u[c]=f))}}else w=y(w===u?w.splice(h,w.length):w),i?i(null,u,w,a):_.apply(u,w)})}function w(e){for(var t,n,r,o=e.length,i=C.relative[e[0].type],u=i||C.relative[" "],l=i?1:0,a=h(function(e){return e===t},u,!0),c=h(function(e){return te(t,e)>-1},u,!0),s=[function(e,n,r){var o=!i&&(r||n!==L)||((t=n).nodeType?a(e,n,r):c(e,n,r));return t=null,o}];o>l;l++)if(n=C.relative[e[l].type])s=[h(g(s),n)];else{if(n=C.filter[e[l].type].apply(null,e[l].matches),n[O]){for(r=++l;o>r&&!C.relative[e[r].type];r++);return v(l>1&&g(s),l>1&&p(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(ae,"$1"),n,r>l&&w(e.slice(l,r)),o>r&&w(e=e.slice(r)),o>r&&p(e))}s.push(n)}return g(s)}function b(e,n){var o=n.length>0,i=e.length>0,u=function(r,u,l,a,c){var s,f,d,p=0,h="0",g=r&&[],m=[],v=L,w=r||i&&C.find.TAG("*",c),b=G+=null==v?1:Math.random()||.1,x=w.length;for(c&&(L=u===R||u||c);h!==x&&null!=(s=w[h]);h++){if(i&&s){for(f=0,u||s.ownerDocument===R||(B(s),l=!z);d=e[f++];)if(d(s,u||R,l)){a.push(s);break}c&&(G=b)}o&&((s=!d&&s)&&p--,r&&g.push(s))}if(p+=h,o&&h!==p){for(f=0;d=n[f++];)d(g,m,u,l);if(r){if(p>0)for(;h--;)g[h]||m[h]||(m[h]=Y.call(a));m=y(m)}_.apply(a,m),c&&!r&&m.length>0&&p+n.length>1&&t.uniqueSort(a)}return c&&(G=b,L=v),g};return o?r(u):u}var x,N,C,E,D,S,T,A,L,I,q,B,R,P,z,H,M,k,F,O="sizzle"+1*new Date,j=e.document,G=0,U=0,V=n(),X=n(),J=n(),K=function(e,t){return e===t&&(q=!0),0},Q={}.hasOwnProperty,W=[],Y=W.pop,Z=W.push,_=W.push,ee=W.slice,te=function(e,t){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n;return-1},ne="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",re="[\\x20\\t\\r\\n\\f]",oe="(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",ie="\\["+re+"*("+oe+")(?:"+re+"*([*^$|!~]?=)"+re+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+oe+"))|)"+re+"*\\]",ue=":("+oe+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ie+")*)|.*)\\)|)",le=new RegExp(re+"+","g"),ae=new RegExp("^"+re+"+|((?:^|[^\\\\])(?:\\\\.)*)"+re+"+$","g"),ce=new RegExp("^"+re+"*,"+re+"*"),se=new RegExp("^"+re+"*([>+~]|"+re+")"+re+"*"),fe=new RegExp("="+re+"*([^\\]'\"]*?)"+re+"*\\]","g"),de=new RegExp(ue),pe=new RegExp("^"+oe+"$"),he={ID:new RegExp("^#("+oe+")"),CLASS:new RegExp("^\\.("+oe+")"),TAG:new RegExp("^("+oe+"|[*])"),ATTR:new RegExp("^"+ie),PSEUDO:new RegExp("^"+ue),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+re+"*(even|odd|(([+-]|)(\\d*)n|)"+re+"*(?:([+-]|)"+re+"*(\\d+)|))"+re+"*\\)|)","i"),bool:new RegExp("^(?:"+ne+")$","i"),needsContext:new RegExp("^"+re+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+re+"*((?:-\\d)?\\d*)"+re+"*\\)|)(?=[^-]|$)","i")},ge=/^(?:input|select|textarea|button)$/i,me=/^h\d$/i,ye=/^[^{]+\{\s*\[native \w/,ve=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,we=new RegExp("\\\\([\\da-f]{1,6}"+re+"?|("+re+")|.)","ig"),be=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},xe=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,Ne=function(e,t){return t?"\x00"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},Ce=function(){B()},Ee=h(function(e){return e.disabled===!0},{dir:"parentNode",next:"legend"});try{_.apply(W=ee.call(j.childNodes),j.childNodes),W[j.childNodes.length].nodeType}catch(De){_={apply:W.length?function(e,t){Z.apply(e,ee.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}N=t.support={},D=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},B=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:j;return r!==R&&9===r.nodeType&&r.documentElement?(R=r,P=R.documentElement,z=!D(R),j!==R&&(n=R.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",Ce,!1):n.attachEvent&&n.attachEvent("onunload",Ce)),N.attributes=o(function(e){return e.className="i",!e.getAttribute("className")}),N.getElementsByTagName=o(function(e){return e.appendChild(R.createComment("")),!e.getElementsByTagName("*").length}),N.getElementsByClassName=ye.test(R.getElementsByClassName),N.getById=o(function(e){return P.appendChild(e).id=O,!R.getElementsByName||!R.getElementsByName(O).length}),N.getById?(C.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&z){var n=t.getElementById(e);return n?[n]:[]}},C.filter.ID=function(e){var t=e.replace(we,be);return function(e){return e.getAttribute("id")===t}}):(delete C.find.ID,C.filter.ID=function(e){var t=e.replace(we,be);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),C.find.TAG=N.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):N.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],o=0,i=t.getElementsByTagName(e);if("*"===e){for(;n=i[o++];)1===n.nodeType&&r.push(n);return r}return i},C.find.CLASS=N.getElementsByClassName&&function(e,t){return"undefined"!=typeof t.getElementsByClassName&&z?t.getElementsByClassName(e):void 0},M=[],H=[],(N.qsa=ye.test(R.querySelectorAll))&&(o(function(e){P.appendChild(e).innerHTML="<a id='"+O+"'></a><select id='"+O+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&H.push("[*^$]="+re+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||H.push("\\["+re+"*(?:value|"+ne+")"),e.querySelectorAll("[id~="+O+"-]").length||H.push("~="),e.querySelectorAll(":checked").length||H.push(":checked"),e.querySelectorAll("a#"+O+"+*").length||H.push(".#.+[+~]")}),o(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=R.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&H.push("name"+re+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&H.push(":enabled",":disabled"),P.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&H.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),H.push(",.*:")})),(N.matchesSelector=ye.test(k=P.matches||P.webkitMatchesSelector||P.mozMatchesSelector||P.oMatchesSelector||P.msMatchesSelector))&&o(function(e){N.disconnectedMatch=k.call(e,"*"),k.call(e,"[s!='']:x"),M.push("!=",ue)}),H=H.length&&new RegExp(H.join("|")),M=M.length&&new RegExp(M.join("|")),t=ye.test(P.compareDocumentPosition),F=t||ye.test(P.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},K=t?function(e,t){if(e===t)return q=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!N.sortDetached&&t.compareDocumentPosition(e)===n?e===R||e.ownerDocument===j&&F(j,e)?-1:t===R||t.ownerDocument===j&&F(j,t)?1:I?te(I,e)-te(I,t):0:4&n?-1:1)}:function(e,t){if(e===t)return q=!0,0;var n,r=0,o=e.parentNode,i=t.parentNode,l=[e],a=[t];if(!o||!i)return e===R?-1:t===R?1:o?-1:i?1:I?te(I,e)-te(I,t):0;if(o===i)return u(e,t);for(n=e;n=n.parentNode;)l.unshift(n);for(n=t;n=n.parentNode;)a.unshift(n);for(;l[r]===a[r];)r++;return r?u(l[r],a[r]):l[r]===j?-1:a[r]===j?1:0},R):R},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==R&&B(e),n=n.replace(fe,"='$1']"),N.matchesSelector&&z&&!J[n+" "]&&(!M||!M.test(n))&&(!H||!H.test(n)))try{var r=k.call(e,n);if(r||N.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(o){}return t(n,R,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==R&&B(e),F(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==R&&B(e);var n=C.attrHandle[t.toLowerCase()],r=n&&Q.call(C.attrHandle,t.toLowerCase())?n(e,t,!z):void 0;return void 0!==r?r:N.attributes||!z?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.escape=function(e){return(e+"").replace(xe,Ne)},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,o=0;if(q=!N.detectDuplicates,I=!N.sortStable&&e.slice(0),e.sort(K),q){for(;t=e[o++];)t===e[o]&&(r=n.push(o));for(;r--;)e.splice(n[r],1)}return I=null,e},E=t.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=E(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=E(t);return n},C=t.selectors={cacheLength:50,createPseudo:r,match:he,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(we,be),e[3]=(e[3]||e[4]||e[5]||"").replace(we,be),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return he.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&de.test(n)&&(t=S(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(we,be).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=V[e+" "];return t||(t=new RegExp("(^|"+re+")"+e+"("+re+"|$)"))&&V(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(o){var i=t.attr(o,e);return null==i?"!="===n:n?(i+="","="===n?i===r:"!="===n?i!==r:"^="===n?r&&0===i.indexOf(r):"*="===n?r&&i.indexOf(r)>-1:"$="===n?r&&i.slice(-r.length)===r:"~="===n?(" "+i.replace(le," ")+" ").indexOf(r)>-1:"|="===n?i===r||i.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,o){var i="nth"!==e.slice(0,3),u="last"!==e.slice(-4),l="of-type"===t;return 1===r&&0===o?function(e){return!!e.parentNode}:function(t,n,a){var c,s,f,d,p,h,g=i!==u?"nextSibling":"previousSibling",m=t.parentNode,y=l&&t.nodeName.toLowerCase(),v=!a&&!l,w=!1;if(m){if(i){for(;g;){for(d=t;d=d[g];)if(l?d.nodeName.toLowerCase()===y:1===d.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[u?m.firstChild:m.lastChild],u&&v){for(d=m,f=d[O]||(d[O]={}),s=f[d.uniqueID]||(f[d.uniqueID]={}),c=s[e]||[],p=c[0]===G&&c[1],w=p&&c[2],d=p&&m.childNodes[p];d=++p&&d&&d[g]||(w=p=0)||h.pop();)if(1===d.nodeType&&++w&&d===t){s[e]=[G,p,w];break}}else if(v&&(d=t,f=d[O]||(d[O]={}),s=f[d.uniqueID]||(f[d.uniqueID]={}),c=s[e]||[],p=c[0]===G&&c[1],w=p),w===!1)for(;(d=++p&&d&&d[g]||(w=p=0)||h.pop())&&((l?d.nodeName.toLowerCase()!==y:1!==d.nodeType)||!++w||(v&&(f=d[O]||(d[O]={}),s=f[d.uniqueID]||(f[d.uniqueID]={}),s[e]=[G,w]),d!==t)););return w-=o,w===r||w%r===0&&w/r>=0}}},PSEUDO:function(e,n){var o,i=C.pseudos[e]||C.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return i[O]?i(n):i.length>1?(o=[e,e,"",n],C.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,o=i(e,n),u=o.length;u--;)r=te(e,o[u]),e[r]=!(t[r]=o[u])}):function(e){return i(e,0,o)}):i}},pseudos:{not:r(function(e){var t=[],n=[],o=T(e.replace(ae,"$1"));return o[O]?r(function(e,t,n,r){for(var i,u=o(e,null,r,[]),l=e.length;l--;)(i=u[l])&&(e[l]=!(t[l]=i))}):function(e,r,i){return t[0]=e,o(t,null,i,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(we,be),function(t){return(t.textContent||t.innerText||E(t)).indexOf(e)>-1}}),lang:r(function(e){return pe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(we,be).toLowerCase(),function(t){var n;do if(n=z?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===P},focus:function(e){return e===R.activeElement&&(!R.hasFocus||R.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:c(!1),disabled:c(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!C.pseudos.empty(e)},header:function(e){return me.test(e.nodeName)},input:function(e){return ge.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:s(function(){return[0]}),last:s(function(e,t){return[t-1]}),eq:s(function(e,t,n){return[0>n?n+t:n]}),even:s(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:s(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:s(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:s(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},C.pseudos.nth=C.pseudos.eq;for(x in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})C.pseudos[x]=l(x);for(x in{submit:!0,reset:!0})C.pseudos[x]=a(x);d.prototype=C.filters=C.pseudos,C.setFilters=new d,S=t.tokenize=function(e,n){var r,o,i,u,l,a,c,s=X[e+" "];if(s)return n?0:s.slice(0);for(l=e,a=[],c=C.preFilter;l;){(!r||(o=ce.exec(l)))&&(o&&(l=l.slice(o[0].length)||l),a.push(i=[])),r=!1,(o=se.exec(l))&&(r=o.shift(),i.push({value:r,type:o[0].replace(ae," ")}),l=l.slice(r.length));for(u in C.filter)!(o=he[u].exec(l))||c[u]&&!(o=c[u](o))||(r=o.shift(),i.push({value:r,type:u,matches:o}),l=l.slice(r.length));if(!r)break}return n?l.length:l?t.error(e):X(e,a).slice(0)},T=t.compile=function(e,t){var n,r=[],o=[],i=J[e+" "];if(!i){for(t||(t=S(e)),n=t.length;n--;)i=w(t[n]),i[O]?r.push(i):o.push(i);i=J(e,b(o,r)),i.selector=e}return i},A=t.select=function(e,t,n,r){var o,i,u,l,a,c="function"==typeof e&&e,s=!r&&S(e=c.selector||e);if(n=n||[],1===s.length){if(i=s[0]=s[0].slice(0),i.length>2&&"ID"===(u=i[0]).type&&N.getById&&9===t.nodeType&&z&&C.relative[i[1].type]){if(t=(C.find.ID(u.matches[0].replace(we,be),t)||[])[0],!t)return n;c&&(t=t.parentNode),e=e.slice(i.shift().value.length)}for(o=he.needsContext.test(e)?0:i.length;o--&&(u=i[o],!C.relative[l=u.type]);)if((a=C.find[l])&&(r=a(u.matches[0].replace(we,be),$.test(i[0].type)&&f(t.parentNode)||t))){if(i.splice(o,1),e=r.length&&p(i),!e)return _.apply(n,r),n;break}}return(c||T(e,s))(r,t,!z,n,!t||$.test(e)&&f(t.parentNode)||t),n},N.sortStable=O.split("").sort(K).join("")===O,N.detectDuplicates=!!q,B(),N.sortDetached=o(function(e){return 1&e.compareDocumentPosition(R.createElement("fieldset"))}),o(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||i("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),N.attributes&&o(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||i("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),o(function(e){return null==e.getAttribute("disabled")})||i(ne,function(e,t,n){var r;return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null});var Se=e.Sizzle;t.noConflict=function(){return e.Sizzle===t&&(e.Sizzle=Se),t},"function"==typeof define&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?module.exports=t:e.Sizzle=t}(window);