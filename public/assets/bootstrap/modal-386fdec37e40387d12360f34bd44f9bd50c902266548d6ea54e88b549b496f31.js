"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),Modal=function(e){var t="modal",i="4.0.0-alpha.3",n="bs.modal",o="."+n,s=".data-api",a=e.fn[t],l=300,r=150,d=27,h={backdrop:!0,keyboard:!0,focus:!0,show:!0},c={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},_={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,FOCUSIN:"focusin"+o,RESIZE:"resize"+o,CLICK_DISMISS:"click.dismiss"+o,KEYDOWN_DISMISS:"keydown.dismiss"+o,MOUSEUP_DISMISS:"mouseup.dismiss"+o,MOUSEDOWN_DISMISS:"mousedown.dismiss"+o,CLICK_DATA_API:"click"+o+s},u={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",IN:"in"},f={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"},m=function(){function s(t,i){_classCallCheck(this,s),this._config=this._getConfig(i),this._element=t,this._dialog=e(t).find(f.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}return _createClass(s,[{key:"toggle",value:function(e){return this._isShown?this.hide():this.show(e)}},{key:"show",value:function(t){var i=this,n=e.Event(_.SHOW,{relatedTarget:t});e(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),e(document.body).addClass(u.OPEN),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on(_.CLICK_DISMISS,f.DATA_DISMISS,e.proxy(this.hide,this)),e(this._dialog).on(_.MOUSEDOWN_DISMISS,function(){e(i._element).one(_.MOUSEUP_DISMISS,function(t){e(t.target).is(i._element)&&(i._ignoreBackdropClick=!0)})}),this._showBackdrop(e.proxy(this._showElement,this,t)))}},{key:"hide",value:function(t){t&&t.preventDefault();var i=e.Event(_.HIDE);e(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()&&(this._isShown=!1,this._setEscapeEvent(),this._setResizeEvent(),e(document).off(_.FOCUSIN),e(this._element).removeClass(u.IN),e(this._element).off(_.CLICK_DISMISS),e(this._dialog).off(_.MOUSEDOWN_DISMISS),Util.supportsTransitionEnd()&&e(this._element).hasClass(u.FADE)?e(this._element).one(Util.TRANSITION_END,e.proxy(this._hideModal,this)).emulateTransitionEnd(l):this._hideModal())}},{key:"dispose",value:function(){e.removeData(this._element,n),e(window).off(o),e(document).off(o),e(this._element).off(o),e(this._backdrop).off(o),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._originalBodyPadding=null,this._scrollbarWidth=null}},{key:"_getConfig",value:function(i){return i=e.extend({},h,i),Util.typeCheckConfig(t,i,c),i}},{key:"_showElement",value:function(t){var i=this,n=Util.supportsTransitionEnd()&&e(this._element).hasClass(u.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&Util.reflow(this._element),e(this._element).addClass(u.IN),this._config.focus&&this._enforceFocus();var o=e.Event(_.SHOWN,{relatedTarget:t}),s=function(){i._config.focus&&i._element.focus(),e(i._element).trigger(o)};n?e(this._dialog).one(Util.TRANSITION_END,s).emulateTransitionEnd(l):s()}},{key:"_enforceFocus",value:function(){var t=this;e(document).off(_.FOCUSIN).on(_.FOCUSIN,function(i){document===i.target||t._element===i.target||e(t._element).has(i.target).length||t._element.focus()})}},{key:"_setEscapeEvent",value:function(){var t=this;this._isShown&&this._config.keyboard?e(this._element).on(_.KEYDOWN_DISMISS,function(e){e.which===d&&t.hide()}):this._isShown||e(this._element).off(_.KEYDOWN_DISMISS)}},{key:"_setResizeEvent",value:function(){this._isShown?e(window).on(_.RESIZE,e.proxy(this._handleUpdate,this)):e(window).off(_.RESIZE)}},{key:"_hideModal",value:function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden","true"),this._showBackdrop(function(){e(document.body).removeClass(u.OPEN),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger(_.HIDDEN)})}},{key:"_removeBackdrop",value:function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)}},{key:"_showBackdrop",value:function(t){var i=this,n=e(this._element).hasClass(u.FADE)?u.FADE:"";if(this._isShown&&this._config.backdrop){var o=Util.supportsTransitionEnd()&&n;if(this._backdrop=document.createElement("div"),this._backdrop.className=u.BACKDROP,n&&e(this._backdrop).addClass(n),e(this._backdrop).appendTo(document.body),e(this._element).on(_.CLICK_DISMISS,function(e){return i._ignoreBackdropClick?void(i._ignoreBackdropClick=!1):void(e.target===e.currentTarget&&("static"===i._config.backdrop?i._element.focus():i.hide()))}),o&&Util.reflow(this._backdrop),e(this._backdrop).addClass(u.IN),!t)return;if(!o)return void t();e(this._backdrop).one(Util.TRANSITION_END,t).emulateTransitionEnd(r)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass(u.IN);var s=function(){i._removeBackdrop(),t&&t()};Util.supportsTransitionEnd()&&e(this._element).hasClass(u.FADE)?e(this._backdrop).one(Util.TRANSITION_END,s).emulateTransitionEnd(r):s()}else t&&t()}},{key:"_handleUpdate",value:function(){this._adjustDialog()}},{key:"_adjustDialog",value:function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")}},{key:"_resetAdjustments",value:function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}},{key:"_checkScrollbar",value:function(){this._isBodyOverflowing=document.body.clientWidth<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()}},{key:"_setScrollbar",value:function(){var t=parseInt(e(f.FIXED_CONTENT).css("padding-right")||0,10);this._originalBodyPadding=document.body.style.paddingRight||"",this._isBodyOverflowing&&(document.body.style.paddingRight=t+this._scrollbarWidth+"px")}},{key:"_resetScrollbar",value:function(){document.body.style.paddingRight=this._originalBodyPadding}},{key:"_getScrollbarWidth",value:function(){var e=document.createElement("div");e.className=u.SCROLLBAR_MEASURER,document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}}],[{key:"_jQueryInterface",value:function(t,i){return this.each(function(){var o=e(this).data(n),a=e.extend({},s.Default,e(this).data(),"object"==typeof t&&t);if(o||(o=new s(this,a),e(this).data(n,o)),"string"==typeof t){if(void 0===o[t])throw new Error('No method named "'+t+'"');o[t](i)}else a.show&&o.show(i)})}},{key:"VERSION",get:function(){return i}},{key:"Default",get:function(){return h}}]),s}();return e(document).on(_.CLICK_DATA_API,f.DATA_TOGGLE,function(t){var i=this,o=void 0,s=Util.getSelectorFromElement(this);s&&(o=e(s)[0]);var a=e(o).data(n)?"toggle":e.extend({},e(o).data(),e(this).data());"A"===this.tagName&&t.preventDefault();var l=e(o).one(_.SHOW,function(t){t.isDefaultPrevented()||l.one(_.HIDDEN,function(){e(i).is(":visible")&&i.focus()})});m._jQueryInterface.call(e(o),a,this)}),e.fn[t]=m._jQueryInterface,e.fn[t].Constructor=m,e.fn[t].noConflict=function(){return e.fn[t]=a,m._jQueryInterface},m}(jQuery);