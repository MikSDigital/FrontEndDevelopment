define(["../core"],function(n){"use strict";var l=function(e,r,t,c,i,u,o){var f=0,a=e.length,s=null==t;if("object"===n.type(t)){i=!0;for(f in t)l(e,r,f,t[f],!0,u,o)}else if(void 0!==c&&(i=!0,n.isFunction(c)||(o=!0),s&&(o?(r.call(e,c),r=null):(s=r,r=function(l,e,r){return s.call(n(l),r)})),r))for(;a>f;f++)r(e[f],t,o?c:c.call(e[f],f,r(e[f],t)));return i?e:s?r.call(e):a?r(e[0],t):u};return l});
