define(["../core","../selector","../effects"],function(e){"use strict";e.expr.pseudos.animated=function(t){return e.grep(e.timers,function(e){return t===e.elem}).length}});
