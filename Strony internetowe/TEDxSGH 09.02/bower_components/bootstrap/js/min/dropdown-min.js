+function($){"use strict";function t(t){var e=t.attr("data-target");e||(e=t.attr("href"),e=e&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var o=e&&$(e);return o&&o.length?o:t.parent()}function e(e){e&&3===e.which||($(n).remove(),$(r).each(function(){var o=$(this),n=t(o),r={relatedTarget:this};n.hasClass("open")&&(e&&"click"==e.type&&/input|textarea/i.test(e.target.tagName)&&$.contains(n[0],e.target)||(n.trigger(e=$.Event("hide.bs.dropdown",r)),e.isDefaultPrevented()||(o.attr("aria-expanded","false"),n.removeClass("open").trigger($.Event("hidden.bs.dropdown",r)))))}))}function o(t){return this.each(function(){var e=$(this),o=e.data("bs.dropdown");o||e.data("bs.dropdown",o=new a(this)),"string"==typeof t&&o[t].call(e)})}var n=".dropdown-backdrop",r='[data-toggle="dropdown"]',a=function(t){$(t).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.7",a.prototype.toggle=function(o){var n=$(this);if(!n.is(".disabled, :disabled")){var r=t(n),a=r.hasClass("open");if(e(),!a){"ontouchstart"in document.documentElement&&!r.closest(".navbar-nav").length&&$(document.createElement("div")).addClass("dropdown-backdrop").insertAfter($(this)).on("click",e);var d={relatedTarget:this};if(r.trigger(o=$.Event("show.bs.dropdown",d)),o.isDefaultPrevented())return;n.trigger("focus").attr("aria-expanded","true"),r.toggleClass("open").trigger($.Event("shown.bs.dropdown",d))}return!1}},a.prototype.keydown=function(e){if(/(38|40|27|32)/.test(e.which)&&!/input|textarea/i.test(e.target.tagName)){var o=$(this);if(e.preventDefault(),e.stopPropagation(),!o.is(".disabled, :disabled")){var n=t(o),a=n.hasClass("open");if(!a&&27!=e.which||a&&27==e.which)return 27==e.which&&n.find(r).trigger("focus"),o.trigger("click");var d=" li:not(.disabled):visible a",i=n.find(".dropdown-menu"+d);if(i.length){var s=i.index(e.target);38==e.which&&s>0&&s--,40==e.which&&s<i.length-1&&s++,~s||(s=0),i.eq(s).trigger("focus")}}}};var d=$.fn.dropdown;$.fn.dropdown=o,$.fn.dropdown.Constructor=a,$.fn.dropdown.noConflict=function(){return $.fn.dropdown=d,this},$(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",r,a.prototype.toggle).on("keydown.bs.dropdown.data-api",r,a.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",a.prototype.keydown)}(jQuery);
