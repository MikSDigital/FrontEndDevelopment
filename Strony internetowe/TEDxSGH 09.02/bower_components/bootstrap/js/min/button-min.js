+function($){"use strict";function t(t){return this.each(function(){var n=$(this),s=n.data("bs.button"),i="object"==typeof t&&t;s||n.data("bs.button",s=new e(this,i)),"toggle"==t?s.toggle():t&&s.setState(t)})}var e=function(t,n){this.$element=$(t),this.options=$.extend({},e.DEFAULTS,n),this.isLoading=!1};e.VERSION="3.3.7",e.DEFAULTS={loadingText:"loading..."},e.prototype.setState=function(t){var e="disabled",n=this.$element,s=n.is("input")?"val":"html",i=n.data();t+="Text",null==i.resetText&&n.data("resetText",n[s]()),setTimeout($.proxy(function(){n[s](null==i[t]?this.options[t]:i[t]),"loadingText"==t?(this.isLoading=!0,n.addClass(e).attr(e,e).prop(e,!0)):this.isLoading&&(this.isLoading=!1,n.removeClass(e).removeAttr(e).prop(e,!1))},this),0)},e.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var n=this.$element.find("input");"radio"==n.prop("type")?(n.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==n.prop("type")&&(n.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),n.prop("checked",this.$element.hasClass("active")),t&&n.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var n=$.fn.button;$.fn.button=t,$.fn.button.Constructor=e,$.fn.button.noConflict=function(){return $.fn.button=n,this},$(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(e){var n=$(e.target).closest(".btn");t.call(n,"toggle"),$(e.target).is('input[type="radio"], input[type="checkbox"]')||(e.preventDefault(),n.is("input,button")?n.trigger("focus"):n.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){$(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery);
