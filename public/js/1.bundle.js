!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([,,function(e,t){e.exports=window.jQuery},,,function(e,t,n){var i,o;
/*!
 * baguetteBox.js
 * @author  feimosi
 * @version 1.11.0
 * @url https://github.com/feimosi/baguetteBox.js
 */!function(l,a){"use strict";void 0===(o="function"==typeof(i=function(){var e,t,n,i,o,l={},a={captions:!0,buttons:"auto",fullScreen:!1,noScrollbars:!1,bodyClass:"baguetteBox-open",titleTag:!1,async:!1,preload:2,animation:"slideIn",afterShow:null,afterHide:null,onChange:null,overlayBackgroundColor:"rgba(0,0,0,.8)"},r={},s=[],d=0,u=!1,c={},f=!1,g=/.+\.(gif|jpe?g|png|webp)/i,h={},v=[],p=null,m=function(e){-1!==e.target.id.indexOf("baguette-img")&&H()},b=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,I()},y=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,N()},S=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,H()},C=function(e){c.count++,1<c.count&&(c.multitouch=!0),c.startX=e.changedTouches[0].pageX,c.startY=e.changedTouches[0].pageY},w=function(e){if(!f&&!c.multitouch){e.preventDefault?e.preventDefault():e.returnValue=!1;var t=e.touches[0]||e.changedTouches[0];40<t.pageX-c.startX?(f=!0,I()):t.pageX-c.startX<-40?(f=!0,N()):100<c.startY-t.pageY&&H()}},x=function(){c.count--,c.count<=0&&(c.multitouch=!1),f=!1},T=function(){x()},M=function(t){"block"===e.style.display&&e.contains&&!e.contains(t.target)&&(t.stopPropagation(),W())};function k(e){if(h.hasOwnProperty(e)){var t=h[e].galleries;[].forEach.call(t,function(e){[].forEach.call(e,function(e){j(e.imageElement,"click",e.eventHandler)}),s===e&&(s=[])}),delete h[e]}}function E(e){switch(e.keyCode){case 37:I();break;case 39:N();break;case 27:H();break;case 36:!function(e){e&&e.preventDefault(),q(0)}(e);break;case 35:!function(e){e&&e.preventDefault(),q(s.length-1)}(e)}}function P(o,r){if(s!==o){for(s=o,function(o){for(var r in o||(o={}),a)l[r]=a[r],void 0!==o[r]&&(l[r]=o[r]);t.style.transition=t.style.webkitTransition="fadeIn"===l.animation?"opacity .4s ease":"slideIn"===l.animation?"":"none","auto"===l.buttons&&("ontouchstart"in window||1===s.length)&&(l.buttons=!1),n.style.display=i.style.display=l.buttons?"":"none";try{e.style.backgroundColor=l.overlayBackgroundColor}catch(e){}}(r);t.firstChild;)t.removeChild(t.firstChild);for(var d,u=[],c=[],f=v.length=0;f<o.length;f++)(d=V("div")).className="full-image",d.id="baguette-img-"+f,v.push(d),u.push("baguetteBox-figure-"+f),c.push("baguetteBox-figcaption-"+f),t.appendChild(v[f]);e.setAttribute("aria-labelledby",u.join(" ")),e.setAttribute("aria-describedby",c.join(" "))}}function B(t){l.noScrollbars&&(document.documentElement.style.overflowY="hidden",document.body.style.overflowY="scroll"),"block"!==e.style.display&&(X(document,"keydown",E),c={count:0,startX:null,startY:null},A(d=t,function(){D(d),Y(d)}),L(),e.style.display="block",l.fullScreen&&(e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.mozRequestFullScreen&&e.mozRequestFullScreen()),setTimeout(function(){e.className="visible",l.bodyClass&&document.body.classList&&document.body.classList.add(l.bodyClass),l.afterShow&&l.afterShow()},50),l.onChange&&l.onChange(d,v.length),p=document.activeElement,W(),u=!0)}function W(){l.buttons?n.focus():o.focus()}function H(){l.noScrollbars&&(document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto"),"none"!==e.style.display&&(j(document,"keydown",E),e.className="",setTimeout(function(){e.style.display="none",document.fullscreen&&(document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()),l.bodyClass&&document.body.classList&&document.body.classList.remove(l.bodyClass),l.afterHide&&l.afterHide(),p&&p.focus(),u=!1},500))}function A(e,t){var n=v[e],i=s[e];if(void 0!==n&&void 0!==i)if(n.getElementsByTagName("img")[0])t&&t();else{var o=i.imageElement,a=o.getElementsByTagName("img")[0],r="function"==typeof l.captions?l.captions.call(s,o):o.getAttribute("data-caption")||o.title,d=function(e){var t=e.href;if(e.dataset){var n=[];for(var i in e.dataset)"at-"!==i.substring(0,3)||isNaN(i.substring(3))||(n[i.replace("at-","")]=e.dataset[i]);for(var o=Object.keys(n).sort(function(e,t){return parseInt(e,10)<parseInt(t,10)?-1:1}),l=window.innerWidth*window.devicePixelRatio,a=0;a<o.length-1&&o[a]<l;)a++;t=n[o[a]]||t}return t}(o),u=V("figure");if(u.id="baguetteBox-figure-"+e,u.innerHTML='<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>',l.captions&&r){var c=V("figcaption");c.id="baguetteBox-figcaption-"+e,c.innerHTML=r,u.appendChild(c)}n.appendChild(u);var f=V("img");f.onload=function(){var n=document.querySelector("#baguette-img-"+e+" .baguetteBox-spinner");u.removeChild(n),!l.async&&t&&t()},f.setAttribute("src",d),f.alt=a&&a.alt||"",l.titleTag&&r&&(f.title=r),u.appendChild(f),l.async&&t&&t()}}function N(){return q(d+1)}function I(){return q(d-1)}function q(e,t){return!u&&0<=e&&e<t.length?(P(t,l),B(e),!0):e<0?(l.animation&&O("left"),!1):e>=v.length?(l.animation&&O("right"),!1):(A(d=e,function(){D(d),Y(d)}),L(),l.onChange&&l.onChange(d,v.length),!0)}function O(e){t.className="bounce-from-"+e,setTimeout(function(){t.className=""},400)}function L(){var e=100*-d+"%";"fadeIn"===l.animation?(t.style.opacity=0,setTimeout(function(){r.transforms?t.style.transform=t.style.webkitTransform="translate3d("+e+",0,0)":t.style.left=e,t.style.opacity=1},400)):r.transforms?t.style.transform=t.style.webkitTransform="translate3d("+e+",0,0)":t.style.left=e}function D(e){e-d>=l.preload||A(e+1,function(){D(e+1)})}function Y(e){d-e>=l.preload||A(e-1,function(){Y(e-1)})}function X(e,t,n,i){e.addEventListener?e.addEventListener(t,n,i):e.attachEvent("on"+t,function(e){(e=e||window.event).target=e.target||e.srcElement,n(e)})}function j(e,t,n,i){e.removeEventListener?e.removeEventListener(t,n,i):e.detachEvent("on"+t,n)}function F(e){return document.getElementById(e)}function V(e){return document.createElement(e)}return[].forEach||(Array.prototype.forEach=function(e,t){for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),[].filter||(Array.prototype.filter=function(e,t,n,i,o){for(n=this,i=[],o=0;o<n.length;o++)e.call(t,n[o],o,n)&&i.push(n[o]);return i}),{run:function(l,a){return r.transforms=function(){var e=V("div");return void 0!==e.style.perspective||void 0!==e.style.webkitPerspective}(),r.svg=function(){var e=V("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"===(e.firstChild&&e.firstChild.namespaceURI)}(),r.passiveEvents=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e}(),function(){if(e=F("baguetteBox-overlay"))return t=F("baguetteBox-slider"),n=F("previous-button"),i=F("next-button"),void(o=F("close-button"));var l;(e=V("div")).setAttribute("role","dialog"),e.id="baguetteBox-overlay",document.getElementsByTagName("body")[0].appendChild(e),(t=V("div")).id="baguetteBox-slider",e.appendChild(t),(n=V("button")).setAttribute("type","button"),n.id="previous-button",n.setAttribute("aria-label","Previous"),n.innerHTML=r.svg?'<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>':"&lt;",e.appendChild(n),(i=V("button")).setAttribute("type","button"),i.id="next-button",i.setAttribute("aria-label","Next"),i.innerHTML=r.svg?'<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>':"&gt;",e.appendChild(i),(o=V("button")).setAttribute("type","button"),o.id="close-button",o.setAttribute("aria-label","Close"),o.innerHTML=r.svg?'<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>':"&times;",e.appendChild(o),n.className=i.className=o.className="baguetteBox-button",l=r.passiveEvents?{passive:!0}:null,X(e,"click",m),X(n,"click",b),X(i,"click",y),X(o,"click",S),X(t,"contextmenu",T),X(e,"touchstart",C,l),X(e,"touchmove",w,l),X(e,"touchend",x),X(document,"focus",M,!0)}(),k(l),function(e,t){var n=document.querySelectorAll(e),i={galleries:[],nodeList:n};return h[e]=i,[].forEach.call(n,function(e){t&&t.filter&&(g=t.filter);var n=[];if(n="A"===e.tagName?[e]:e.getElementsByTagName("a"),0!==(n=[].filter.call(n,function(e){if(-1===e.className.indexOf(t&&t.ignoreClass))return g.test(e.href)})).length){var o=[];[].forEach.call(n,function(e,n){var i=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,P(o,t),B(n)},l={eventHandler:i,imageElement:e};X(e,"click",i),o.push(l)}),i.galleries.push(o)}}),i.galleries}(l,a)},show:q,showNext:N,showPrevious:I,hide:H,destroy:function(){!function(){var l=r.passiveEvents?{passive:!0}:null;j(e,"click",m),j(n,"click",b),j(i,"click",y),j(o,"click",S),j(t,"contextmenu",T),j(e,"touchstart",C,l),j(e,"touchmove",w,l),j(e,"touchend",x),j(document,"focus",M,!0)}(),function(){for(var e in h)h.hasOwnProperty(e)&&k(e)}(),j(document,"keydown",E),document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")),h={},s=[],d=0}}})?i.call(t,n,t,e):i)||(e.exports=o)}()},function(e,t,n){"use strict";n.r(t),function(e){n(2);var t=n(5),i=n.n(t);n(7),n(8),n(9),n(10);window.addEventListener("load",function(){i.a.run(".autoblog-gallery"),e("#imageGallery").length&&e("#imageGallery").lightSlider({gallery:!0,item:1,loop:!1,thumbItem:6,enableDrag:!1,adaptiveHeight:!1,galleryMargin:5,thumbMargin:5,onBeforeStart:function(t){t.children("li").each(function(t,n){var i=e(n);i.find("img").attr("src",i.data("src"))})}})})}.call(this,n(2))},function(e,t,n){(function(e){
/*! lightslider - v1.1.6 - 2016-10-25
* https://github.com/sachinchoolur/lightslider
* Copyright (c) 2016 Sachin N; Licensed MIT */
!function(e,t){"use strict";var n={item:3,autoWidth:!1,slideMove:1,slideMargin:10,addClass:"",mode:"slide",useCSS:!0,cssEasing:"ease",easing:"linear",speed:400,auto:!1,pauseOnHover:!1,loop:!1,slideEndAnimation:!0,pause:2e3,keyPress:!1,controls:!0,prevHtml:"",nextHtml:"",rtl:!1,adaptiveHeight:!1,vertical:!1,verticalHeight:500,vThumbWidth:100,thumbItem:10,pager:!0,gallery:!1,galleryMargin:5,thumbMargin:5,currentPagerPosition:"middle",enableTouch:!0,enableDrag:!0,freeMove:!0,swipeThreshold:40,responsive:[],onBeforeStart:function(e){},onSliderLoad:function(e){},onBeforeSlide:function(e,t){},onAfterSlide:function(e,t){},onBeforeNextSlide:function(e,t){},onBeforePrevSlide:function(e,t){}};e.fn.lightSlider=function(t){if(0===this.length)return this;if(this.length>1)return this.each(function(){e(this).lightSlider(t)}),this;var i={},o=e.extend(!0,{},n,t),l={},a=this;i.$el=this,"fade"===o.mode&&(o.vertical=!1);var r=a.children(),s=e(window).width(),d=null,u=0,c=0,f=!1,g=0,h="",v=0,p=!0===o.vertical?"height":"width",m=!0===o.vertical?"margin-bottom":"margin-right",b=0,y=0,S=0,C=0,w=null,x="ontouchstart"in document.documentElement,T={chbreakpoint:function(){if(s=e(window).width(),o.responsive.length){var t;if(!1===o.autoWidth&&(t=o.item),s<o.responsive[0].breakpoint)for(var n=0;n<o.responsive.length;n++)s<o.responsive[n].breakpoint&&(o.responsive[n].breakpoint,d=o.responsive[n]);if(null!=d)for(var i in d.settings)d.settings.hasOwnProperty(i)&&(void 0!==l[i]&&null!==l[i]||(l[i]=o[i]),o[i]=d.settings[i]);if(!e.isEmptyObject(l)&&s>o.responsive[0].breakpoint)for(var a in l)l.hasOwnProperty(a)&&(o[a]=l[a]);!1===o.autoWidth&&b>0&&S>0&&t!==o.item&&(v=Math.round(b/((S+o.slideMargin)*o.slideMove)))}},calSW:function(){!1===o.autoWidth&&(S=(g-(o.item*o.slideMargin-o.slideMargin))/o.item)},calWidth:function(e){var t=!0===e?h.find(".lslide").length:r.length;if(!1===o.autoWidth)c=t*(S+o.slideMargin);else{c=0;for(var n=0;n<t;n++)c+=parseInt(r.eq(n).width())+o.slideMargin}return c}};return(i={doCss:function(){return!(!o.useCSS||!function(){for(var e=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],t=document.documentElement,n=0;n<e.length;n++)if(e[n]in t.style)return!0}())},keyPress:function(){o.keyPress&&e(document).on("keyup.lightslider",function(t){e(":focus").is("input, textarea")||(t.preventDefault?t.preventDefault():t.returnValue=!1,37===t.keyCode?a.goToPrevSlide():39===t.keyCode&&a.goToNextSlide())})},controls:function(){o.controls&&(a.after('<div class="lSAction"><a class="lSPrev">'+o.prevHtml+'</a><a class="lSNext">'+o.nextHtml+"</a></div>"),o.autoWidth?T.calWidth(!1)<g&&h.find(".lSAction").hide():u<=o.item&&h.find(".lSAction").hide(),h.find(".lSAction a").on("click",function(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,"lSPrev"===e(this).attr("class")?a.goToPrevSlide():a.goToNextSlide(),!1}))},initialStyle:function(){var e=this;"fade"===o.mode&&(o.autoWidth=!1,o.slideEndAnimation=!1),o.auto&&(o.slideEndAnimation=!1),o.autoWidth&&(o.slideMove=1,o.item=1),o.loop&&(o.slideMove=1,o.freeMove=!1),o.onBeforeStart.call(this,a),T.chbreakpoint(),a.addClass("lightSlider").wrap('<div class="lSSlideOuter '+o.addClass+'"><div class="lSSlideWrapper"></div></div>'),h=a.parent(".lSSlideWrapper"),!0===o.rtl&&h.parent().addClass("lSrtl"),o.vertical?(h.parent().addClass("vertical"),g=o.verticalHeight,h.css("height",g+"px")):g=a.outerWidth(),r.addClass("lslide"),!0===o.loop&&"slide"===o.mode&&(T.calSW(),T.clone=function(){if(T.calWidth(!0)>g){for(var t=0,n=0,i=0;i<r.length&&(n++,!((t+=parseInt(a.find(".lslide").eq(i).width())+o.slideMargin)>=g+o.slideMargin));i++);var l=!0===o.autoWidth?n:o.item;if(l<a.find(".clone.left").length)for(var s=0;s<a.find(".clone.left").length-l;s++)r.eq(s).remove();if(l<a.find(".clone.right").length)for(var d=r.length-1;d>r.length-1-a.find(".clone.right").length;d--)v--,r.eq(d).remove();for(var u=a.find(".clone.right").length;u<l;u++)a.find(".lslide").eq(u).clone().removeClass("lslide").addClass("clone right").appendTo(a),v++;for(var c=a.find(".lslide").length-a.find(".clone.left").length;c>a.find(".lslide").length-l;c--)a.find(".lslide").eq(c-1).clone().removeClass("lslide").addClass("clone left").prependTo(a);r=a.children()}else r.hasClass("clone")&&(a.find(".clone").remove(),e.move(a,0))},T.clone()),T.sSW=function(){u=r.length,!0===o.rtl&&!1===o.vertical&&(m="margin-left"),!1===o.autoWidth&&r.css(p,S+"px"),r.css(m,o.slideMargin+"px"),c=T.calWidth(!1),a.css(p,c+"px"),!0===o.loop&&"slide"===o.mode&&!1===f&&(v=a.find(".clone.left").length)},T.calL=function(){r=a.children(),u=r.length},this.doCss()&&h.addClass("usingCss"),T.calL(),"slide"===o.mode?(T.calSW(),T.sSW(),!0===o.loop&&(b=e.slideValue(),this.move(a,b)),!1===o.vertical&&this.setHeight(a,!1)):(this.setHeight(a,!0),a.addClass("lSFade"),this.doCss()||(r.fadeOut(0),r.eq(v).fadeIn(0))),!0===o.loop&&"slide"===o.mode?r.eq(v).addClass("active"):r.first().addClass("active")},pager:function(){var e=this;if(T.createPager=function(){C=(g-(o.thumbItem*o.thumbMargin-o.thumbMargin))/o.thumbItem;var t=h.find(".lslide"),n=h.find(".lslide").length,i=0,l="",r=0;for(i=0;i<n;i++){"slide"===o.mode&&(o.autoWidth?r+=(parseInt(t.eq(i).width())+o.slideMargin)*o.slideMove:r=i*((S+o.slideMargin)*o.slideMove));var s=t.eq(i*o.slideMove).attr("data-thumb");if(!0===o.gallery?l+='<li style="width:100%;'+p+":"+C+"px;"+m+":"+o.thumbMargin+'px"><a href="#"><img src="'+s+'" /></a></li>':l+='<li><a href="#">'+(i+1)+"</a></li>","slide"===o.mode&&r>=c-g-o.slideMargin){i+=1;var d=2;o.autoWidth&&(l+='<li><a href="#">'+(i+1)+"</a></li>",d=1),i<d?(l=null,h.parent().addClass("noPager")):h.parent().removeClass("noPager");break}}var u=h.parent();u.find(".lSPager").html(l),!0===o.gallery&&(!0===o.vertical&&u.find(".lSPager").css("width",o.vThumbWidth+"px"),y=i*(o.thumbMargin+C)+.5,u.find(".lSPager").css({property:y+"px","transition-duration":o.speed+"ms"}),!0===o.vertical&&h.parent().css("padding-right",o.vThumbWidth+o.galleryMargin+"px"),u.find(".lSPager").css(p,y+"px"));var f=u.find(".lSPager").find("li");f.first().addClass("active"),f.on("click",function(){return!0===o.loop&&"slide"===o.mode?v+=f.index(this)-u.find(".lSPager").find("li.active").index():v=f.index(this),a.mode(!1),!0===o.gallery&&e.slideThumb(),!1})},o.pager){var t="lSpg";o.gallery&&(t="lSGallery"),h.after('<ul class="lSPager '+t+'"></ul>');var n=o.vertical?"margin-left":"margin-top";h.parent().find(".lSPager").css(n,o.galleryMargin+"px"),T.createPager()}setTimeout(function(){T.init()},0)},setHeight:function(e,t){var n=null,i=this;n=o.loop?e.children(".lslide ").first():e.children().first();var l=function(){var i=n.outerHeight(),o=0,l=i;t&&(i=0,o=100*l/g),e.css({height:i+"px","padding-bottom":o+"%"})};l(),n.find("img").length?n.find("img")[0].complete?(l(),w||i.auto()):n.find("img").on("load",function(){setTimeout(function(){l(),w||i.auto()},100)}):w||i.auto()},active:function(e,t){this.doCss()&&"fade"===o.mode&&h.addClass("on");var n,i,l=0;v*o.slideMove<u?(e.removeClass("active"),this.doCss()||"fade"!==o.mode||!1!==t||e.fadeOut(o.speed),l=!0===t?v:v*o.slideMove,!0===t&&(i=(n=e.length)-1,l+1>=n&&(l=i)),!0===o.loop&&"slide"===o.mode&&(l=!0===t?v-a.find(".clone.left").length:v*o.slideMove,!0===t&&(i=(n=e.length)-1,l+1===n?l=i:l+1>n&&(l=0))),this.doCss()||"fade"!==o.mode||!1!==t||e.eq(l).fadeIn(o.speed),e.eq(l).addClass("active")):(e.removeClass("active"),e.eq(e.length-1).addClass("active"),this.doCss()||"fade"!==o.mode||!1!==t||(e.fadeOut(o.speed),e.eq(l).fadeIn(o.speed)))},move:function(e,t){!0===o.rtl&&(t=-t),this.doCss()?!0===o.vertical?e.css({transform:"translate3d(0px, "+-t+"px, 0px)","-webkit-transform":"translate3d(0px, "+-t+"px, 0px)"}):e.css({transform:"translate3d("+-t+"px, 0px, 0px)","-webkit-transform":"translate3d("+-t+"px, 0px, 0px)"}):!0===o.vertical?e.css("position","relative").animate({top:-t+"px"},o.speed,o.easing):e.css("position","relative").animate({left:-t+"px"},o.speed,o.easing);var n=h.parent().find(".lSPager").find("li");this.active(n,!0)},fade:function(){this.active(r,!1);var e=h.parent().find(".lSPager").find("li");this.active(e,!0)},slide:function(){var e=this;T.calSlide=function(){c>g&&(b=e.slideValue(),e.active(r,!1),b>c-g-o.slideMargin?b=c-g-o.slideMargin:b<0&&(b=0),e.move(a,b),!0===o.loop&&"slide"===o.mode&&(v>=u-a.find(".clone.left").length/o.slideMove&&e.resetSlide(a.find(".clone.left").length),0===v&&e.resetSlide(h.find(".lslide").length)))},T.calSlide()},resetSlide:function(e){var t=this;h.find(".lSAction a").addClass("disabled"),setTimeout(function(){v=e,h.css("transition-duration","0ms"),b=t.slideValue(),t.active(r,!1),i.move(a,b),setTimeout(function(){h.css("transition-duration",o.speed+"ms"),h.find(".lSAction a").removeClass("disabled")},50)},o.speed+100)},slideValue:function(){var e=0;if(!1===o.autoWidth)e=v*((S+o.slideMargin)*o.slideMove);else{e=0;for(var t=0;t<v;t++)e+=parseInt(r.eq(t).width())+o.slideMargin}return e},slideThumb:function(){var e;switch(o.currentPagerPosition){case"left":e=0;break;case"middle":e=g/2-C/2;break;case"right":e=g-C}var t=v-a.find(".clone.left").length,n=h.parent().find(".lSPager");"slide"===o.mode&&!0===o.loop&&(t>=n.children().length?t=0:t<0&&(t=n.children().length));var i=t*(C+o.thumbMargin)-e;i+g>y&&(i=y-g-o.thumbMargin),i<0&&(i=0),this.move(n,i)},auto:function(){o.auto&&(clearInterval(w),w=setInterval(function(){a.goToNextSlide()},o.pause))},pauseOnHover:function(){var t=this;o.auto&&o.pauseOnHover&&(h.on("mouseenter",function(){e(this).addClass("ls-hover"),a.pause(),o.auto=!0}),h.on("mouseleave",function(){e(this).removeClass("ls-hover"),h.find(".lightSlider").hasClass("lsGrabbing")||t.auto()}))},touchMove:function(e,t){if(h.css("transition-duration","0ms"),"slide"===o.mode){var n=b-(e-t);if(n>=c-g-o.slideMargin)if(!1===o.freeMove)n=c-g-o.slideMargin;else{var i=c-g-o.slideMargin;n=i+(n-i)/5}else n<0&&(!1===o.freeMove?n=0:n/=5);this.move(a,n)}},touchEnd:function(e){if(h.css("transition-duration",o.speed+"ms"),"slide"===o.mode){var t=!1,n=!0;(b-=e)>c-g-o.slideMargin?(b=c-g-o.slideMargin,!1===o.autoWidth&&(t=!0)):b<0&&(b=0);var i=function(e){var n=0;if(t||e&&(n=1),o.autoWidth)for(var i=0,l=0;l<r.length&&(i+=parseInt(r.eq(l).width())+o.slideMargin,v=l+n,!(i>=b));l++);else{var a=b/((S+o.slideMargin)*o.slideMove);v=parseInt(a)+n,b>=c-g-o.slideMargin&&a%1!=0&&v++}};e>=o.swipeThreshold?(i(!1),n=!1):e<=-o.swipeThreshold&&(i(!0),n=!1),a.mode(n),this.slideThumb()}else e>=o.swipeThreshold?a.goToPrevSlide():e<=-o.swipeThreshold&&a.goToNextSlide()},enableDrag:function(){var t=this;if(!x){var n=0,i=0,l=!1;h.find(".lightSlider").addClass("lsGrab"),h.on("mousedown",function(t){if(c<g&&0!==c)return!1;"lSPrev"!==e(t.target).attr("class")&&"lSNext"!==e(t.target).attr("class")&&(n=!0===o.vertical?t.pageY:t.pageX,l=!0,t.preventDefault?t.preventDefault():t.returnValue=!1,h.scrollLeft+=1,h.scrollLeft-=1,h.find(".lightSlider").removeClass("lsGrab").addClass("lsGrabbing"),clearInterval(w))}),e(window).on("mousemove",function(e){l&&(i=!0===o.vertical?e.pageY:e.pageX,t.touchMove(i,n))}),e(window).on("mouseup",function(a){if(l){h.find(".lightSlider").removeClass("lsGrabbing").addClass("lsGrab"),l=!1;var r=(i=!0===o.vertical?a.pageY:a.pageX)-n;Math.abs(r)>=o.swipeThreshold&&e(window).on("click.ls",function(t){t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopImmediatePropagation(),t.stopPropagation(),e(window).off("click.ls")}),t.touchEnd(r)}})}},enableTouch:function(){var e=this;if(x){var t={},n={};h.on("touchstart",function(e){n=e.originalEvent.targetTouches[0],t.pageX=e.originalEvent.targetTouches[0].pageX,t.pageY=e.originalEvent.targetTouches[0].pageY,clearInterval(w)}),h.on("touchmove",function(i){if(c<g&&0!==c)return!1;var l=i.originalEvent;n=l.targetTouches[0];var a=Math.abs(n.pageX-t.pageX),r=Math.abs(n.pageY-t.pageY);!0===o.vertical?(3*r>a&&i.preventDefault(),e.touchMove(n.pageY,t.pageY)):(3*a>r&&i.preventDefault(),e.touchMove(n.pageX,t.pageX))}),h.on("touchend",function(){if(c<g&&0!==c)return!1;var i;i=!0===o.vertical?n.pageY-t.pageY:n.pageX-t.pageX,e.touchEnd(i)})}},build:function(){var t=this;t.initialStyle(),this.doCss()&&(!0===o.enableTouch&&t.enableTouch(),!0===o.enableDrag&&t.enableDrag()),e(window).on("focus",function(){t.auto()}),e(window).on("blur",function(){clearInterval(w)}),t.pager(),t.pauseOnHover(),t.controls(),t.keyPress()}}).build(),T.init=function(){T.chbreakpoint(),!0===o.vertical?(g=o.item>1?o.verticalHeight:r.outerHeight(),h.css("height",g+"px")):g=h.outerWidth(),!0===o.loop&&"slide"===o.mode&&T.clone(),T.calL(),"slide"===o.mode&&a.removeClass("lSSlide"),"slide"===o.mode&&(T.calSW(),T.sSW()),setTimeout(function(){"slide"===o.mode&&a.addClass("lSSlide")},1e3),o.pager&&T.createPager(),!0===o.adaptiveHeight&&!1===o.vertical&&a.css("height",r.eq(v).outerHeight(!0)),!1===o.adaptiveHeight&&("slide"===o.mode?!1===o.vertical?i.setHeight(a,!1):i.auto():i.setHeight(a,!0)),!0===o.gallery&&i.slideThumb(),"slide"===o.mode&&i.slide(),!1===o.autoWidth?r.length<=o.item?h.find(".lSAction").hide():h.find(".lSAction").show():T.calWidth(!1)<g&&0!==c?h.find(".lSAction").hide():h.find(".lSAction").show()},a.goToPrevSlide=function(){if(v>0)o.onBeforePrevSlide.call(this,a,v),v--,a.mode(!1),!0===o.gallery&&i.slideThumb();else if(!0===o.loop){if(o.onBeforePrevSlide.call(this,a,v),"fade"===o.mode)v=parseInt((u-1)/o.slideMove);a.mode(!1),!0===o.gallery&&i.slideThumb()}else!0===o.slideEndAnimation&&(a.addClass("leftEnd"),setTimeout(function(){a.removeClass("leftEnd")},400))},a.goToNextSlide=function(){var e=!0;"slide"===o.mode&&(e=i.slideValue()<c-g-o.slideMargin);v*o.slideMove<u-o.slideMove&&e?(o.onBeforeNextSlide.call(this,a,v),v++,a.mode(!1),!0===o.gallery&&i.slideThumb()):!0===o.loop?(o.onBeforeNextSlide.call(this,a,v),v=0,a.mode(!1),!0===o.gallery&&i.slideThumb()):!0===o.slideEndAnimation&&(a.addClass("rightEnd"),setTimeout(function(){a.removeClass("rightEnd")},400))},a.mode=function(e){!0===o.adaptiveHeight&&!1===o.vertical&&a.css("height",r.eq(v).outerHeight(!0)),!1===f&&("slide"===o.mode?i.doCss()&&(a.addClass("lSSlide"),""!==o.speed&&h.css("transition-duration",o.speed+"ms"),""!==o.cssEasing&&h.css("transition-timing-function",o.cssEasing)):i.doCss()&&(""!==o.speed&&a.css("transition-duration",o.speed+"ms"),""!==o.cssEasing&&a.css("transition-timing-function",o.cssEasing))),e||o.onBeforeSlide.call(this,a,v),"slide"===o.mode?i.slide():i.fade(),h.hasClass("ls-hover")||i.auto(),setTimeout(function(){e||o.onAfterSlide.call(this,a,v)},o.speed),f=!0},a.play=function(){a.goToNextSlide(),o.auto=!0,i.auto()},a.pause=function(){o.auto=!1,clearInterval(w)},a.refresh=function(){T.init()},a.getCurrentSlideCount=function(){var e=v;if(o.loop){var t=h.find(".lslide").length,n=a.find(".clone.left").length;e=v<=n-1?t+(v-n):v>=t+n?v-t-n:v-n}return e+1},a.getTotalSlideCount=function(){return h.find(".lslide").length},a.goToSlide=function(e){v=o.loop?e+a.find(".clone.left").length-1:e,a.mode(!1),!0===o.gallery&&i.slideThumb()},a.destroy=function(){a.lightSlider&&(a.goToPrevSlide=function(){},a.goToNextSlide=function(){},a.mode=function(){},a.play=function(){},a.pause=function(){},a.refresh=function(){},a.getCurrentSlideCount=function(){},a.getTotalSlideCount=function(){},a.goToSlide=function(){},a.lightSlider=null,T={init:function(){}},a.parent().parent().find(".lSAction, .lSPager").remove(),a.removeClass("lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right").removeAttr("style").unwrap().unwrap(),a.children().removeAttr("style"),r.removeClass("lslide active"),a.find(".clone").remove(),r=null,w=null,f=!1,v=0)},setTimeout(function(){o.onSliderLoad.call(this,a)},10),e(window).on("resize orientationchange",function(e){setTimeout(function(){e.preventDefault?e.preventDefault():e.returnValue=!1,T.init()},200)}),this}}(e)}).call(this,n(2))},function(e,t,n){},function(e,t,n){},function(e,t){e.exports="../images/controls.png"}]);