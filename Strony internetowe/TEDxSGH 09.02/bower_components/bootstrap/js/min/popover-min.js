+function($){"use strict";function t(t){return this.each(function(){var e=$(this),n=e.data("bs.popover"),r="object"==typeof t&&t;!n&&/destroy|hide/.test(t)||(n||e.data("bs.popover",n=new o(this,r)),"string"==typeof t&&n[t]())})}var o=function(t,o){this.init("popover",t,o)};if(!$.fn.tooltip)throw new Error("Popover requires tooltip.js");o.VERSION="3.3.7",o.DEFAULTS=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),o.prototype=$.extend({},$.fn.tooltip.Constructor.prototype),o.prototype.constructor=o,o.prototype.getDefaults=function(){return o.DEFAULTS},o.prototype.setContent=function(){var t=this.tip(),o=this.getTitle(),e=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](o),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof e?"html":"append":"text"](e),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},o.prototype.hasContent=function(){return this.getTitle()||this.getContent()},o.prototype.getContent=function(){var t=this.$element,o=this.options;return t.attr("data-content")||("function"==typeof o.content?o.content.call(t[0]):o.content)},o.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var e=$.fn.popover;$.fn.popover=t,$.fn.popover.Constructor=o,$.fn.popover.noConflict=function(){return $.fn.popover=e,this}}(jQuery);
