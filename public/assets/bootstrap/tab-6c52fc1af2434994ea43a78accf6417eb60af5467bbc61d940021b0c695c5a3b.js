"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),Tab=function(e){var t="tab",n="4.0.0-alpha.3",a="bs.tab",r="."+a,i=".data-api",o=e.fn[t],s=150,l={HIDE:"hide"+r,HIDDEN:"hidden"+r,SHOW:"show"+r,SHOWN:"shown"+r,CLICK_DATA_API:"click"+r+i},d={DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active",FADE:"fade",IN:"in"},u={A:"a",LI:"li",DROPDOWN:".dropdown",UL:"ul:not(.dropdown-menu)",FADE_CHILD:"> .nav-item .fade, > .fade",ACTIVE:".active",ACTIVE_CHILD:"> .nav-item > .active, > .active",DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"]',DROPDOWN_TOGGLE:".dropdown-toggle",DROPDOWN_ACTIVE_CHILD:"> .dropdown-menu .active"},c=function(){function t(e){_classCallCheck(this,t),this._element=e}return _createClass(t,[{key:"show",value:function(){var t=this;if(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE||!e(this._element).hasClass(d.ACTIVE)){var n=void 0,a=void 0,r=e(this._element).closest(u.UL)[0],i=Util.getSelectorFromElement(this._element);r&&(a=e.makeArray(e(r).find(u.ACTIVE)),a=a[a.length-1]);var o=e.Event(l.HIDE,{relatedTarget:this._element}),s=e.Event(l.SHOW,{relatedTarget:a});if(a&&e(a).trigger(o),e(this._element).trigger(s),!s.isDefaultPrevented()&&!o.isDefaultPrevented()){i&&(n=e(i)[0]),this._activate(this._element,r);var c=function(){var n=e.Event(l.HIDDEN,{relatedTarget:t._element}),r=e.Event(l.SHOWN,{relatedTarget:a});e(a).trigger(n),e(t._element).trigger(r)};n?this._activate(n,n.parentNode,c):c()}}}},{key:"dispose",value:function(){e.removeClass(this._element,a),this._element=null}},{key:"_activate",value:function(t,n,a){var r=e(n).find(u.ACTIVE_CHILD)[0],i=a&&Util.supportsTransitionEnd()&&(r&&e(r).hasClass(d.FADE)||Boolean(e(n).find(u.FADE_CHILD)[0])),o=e.proxy(this._transitionComplete,this,t,r,i,a);r&&i?e(r).one(Util.TRANSITION_END,o).emulateTransitionEnd(s):o(),r&&e(r).removeClass(d.IN)}},{key:"_transitionComplete",value:function(t,n,a,r){if(n){e(n).removeClass(d.ACTIVE);var i=e(n).find(u.DROPDOWN_ACTIVE_CHILD)[0];i&&e(i).removeClass(d.ACTIVE),n.setAttribute("aria-expanded",!1)}if(e(t).addClass(d.ACTIVE),t.setAttribute("aria-expanded",!0),a?(Util.reflow(t),e(t).addClass(d.IN)):e(t).removeClass(d.FADE),t.parentNode&&e(t.parentNode).hasClass(d.DROPDOWN_MENU)){var o=e(t).closest(u.DROPDOWN)[0];o&&e(o).find(u.DROPDOWN_TOGGLE).addClass(d.ACTIVE),t.setAttribute("aria-expanded",!0)}r&&r()}}],[{key:"_jQueryInterface",value:function(n){return this.each(function(){var r=e(this),i=r.data(a);if(i||(i=i=new t(this),r.data(a,i)),"string"==typeof n){if(void 0===i[n])throw new Error('No method named "'+n+'"');i[n]()}})}},{key:"VERSION",get:function(){return n}}]),t}();return e(document).on(l.CLICK_DATA_API,u.DATA_TOGGLE,function(t){t.preventDefault(),c._jQueryInterface.call(e(this),"show")}),e.fn[t]=c._jQueryInterface,e.fn[t].Constructor=c,e.fn[t].noConflict=function(){return e.fn[t]=o,c._jQueryInterface},c}(jQuery);