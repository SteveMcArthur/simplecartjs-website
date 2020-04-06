
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
  }
};

// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());


// place any jQuery/helper plugins in here, instead of separate, slower script files.
/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 *
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 *
 * Version: 1.3.4 (11/11/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(a){var l,q,r,e,y,k,z,g,v,w,o=0,d={},m=[],n=0,c={},j=[],B=null,s=new Image,D=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,O=/[^\.]\.(swf)\s*$/i,E,F=1,u=0,t="",p,h,i=false,x=a.extend(a("<div/>")[0],{prop:0}),G=a.browser.msie&&a.browser.version<7&&!window.XMLHttpRequest,H=function(){q.hide();s.onerror=s.onload=null;B&&B.abort();l.empty()},I=function(){false===d.onError(m,o,d)?(q.hide(),i=false):(d.titleShow=false,d.width="auto",d.height="auto",l.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>'),
A())},C=function(){var b=m[o],f,c,e,h,j,g;H();d=a.extend({},a.fn.fancybox.defaults,typeof a(b).data("fancybox")=="undefined"?d:a(b).data("fancybox"));g=d.onStart(m,o,d);if(g===false)i=false;else{typeof g=="object"&&(d=a.extend(d,g));e=d.title||(b.nodeName?a(b).attr("title"):b.title)||"";if(b.nodeName&&!d.orig)d.orig=a(b).children("img:first").length?a(b).children("img:first"):a(b);e===""&&d.orig&&d.titleFromAlt&&(e=d.orig.attr("alt"));f=d.href||(b.nodeName?a(b).attr("href"):b.href)||null;if(/^(?:javascript)/i.test(f)||
f=="#")f=null;if(d.type){if(c=d.type,!f)f=d.content}else d.content?c="html":f&&(c=f.match(D)?"image":f.match(O)?"swf":a(b).hasClass("iframe")?"iframe":f.indexOf("#")===0?"inline":"ajax");if(c){c=="inline"&&(b=f.substr(f.indexOf("#")),c=a(b).length>0?"inline":"ajax");d.type=c;d.href=f;d.title=e;if(d.autoDimensions)d.type=="html"||d.type=="inline"||d.type=="ajax"?(d.width="auto",d.height="auto"):d.autoDimensions=false;if(d.modal)d.overlayShow=true,d.hideOnOverlayClick=false,d.hideOnContentClick=false,
d.enableEscapeButton=false,d.showCloseButton=false;d.padding=parseInt(d.padding,10);d.margin=parseInt(d.margin,10);l.css("padding",d.padding+d.margin);a(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){a(this).replaceWith(k.children())});switch(c){case "html":l.html(d.content);A();break;case "inline":if(a(b).parent().is("#fancybox-content")===true){i=false;break}a('<div class="fancybox-inline-tmp" />').hide().insertBefore(a(b)).bind("fancybox-cleanup",function(){a(this).replaceWith(k.children())}).bind("fancybox-cancel",
function(){a(this).replaceWith(l.children())});a(b).appendTo(l);A();break;case "image":i=false;a.fancybox.showActivity();s=new Image;s.onerror=function(){I()};s.onload=function(){i=true;s.onerror=s.onload=null;d.width=s.width;d.height=s.height;a("<img />").attr({id:"fancybox-img",src:s.src,alt:d.title}).appendTo(l);J()};s.src=f;break;case "swf":d.scrolling="no";h='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+d.width+'" height="'+d.height+'"><param name="movie" value="'+f+
'"></param>';j="";a.each(d.swf,function(b,a){h+='<param name="'+b+'" value="'+a+'"></param>';j+=" "+b+'="'+a+'"'});h+='<embed src="'+f+'" type="application/x-shockwave-flash" width="'+d.width+'" height="'+d.height+'"'+j+"></embed></object>";l.html(h);A();break;case "ajax":i=false;a.fancybox.showActivity();d.ajax.win=d.ajax.success;B=a.ajax(a.extend({},d.ajax,{url:f,data:d.ajax.data||{},error:function(b){b.status>0&&I()},success:function(b,a,c){if((typeof c=="object"?c:B).status==200){if(typeof d.ajax.win==
"function")if(g=d.ajax.win(f,b,a,c),g===false){q.hide();return}else if(typeof g=="string"||typeof g=="object")b=g;l.html(b);A()}}}));break;case "iframe":J()}}else I()}},A=function(){var b=d.width,c=d.height,b=b.toString().indexOf("%")>-1?parseInt((a(window).width()-d.margin*2)*parseFloat(b)/100,10)+"px":b=="auto"?"auto":b+"px",c=c.toString().indexOf("%")>-1?parseInt((a(window).height()-d.margin*2)*parseFloat(c)/100,10)+"px":c=="auto"?"auto":c+"px";l.wrapInner('<div style="width:'+b+";height:"+c+";overflow: "+
(d.scrolling=="auto"?"auto":d.scrolling=="yes"?"scroll":"hidden")+';position:relative;"></div>');d.width=l.width();d.height=l.height();J()},J=function(){var b,f;q.hide();if(e.is(":visible")&&false===c.onCleanup(j,n,c))a.event.trigger("fancybox-cancel"),i=false;else{i=true;a(k.add(r)).unbind();a(window).unbind("resize.fb scroll.fb");a(document).unbind("keydown.fb");e.is(":visible")&&c.titlePosition!=="outside"&&e.css("height",e.height());j=m;n=o;c=d;if(c.overlayShow){if(r.css({"background-color":c.overlayColor,
opacity:c.overlayOpacity,cursor:c.hideOnOverlayClick?"pointer":"auto",height:a(document).height()}),!r.is(":visible")){if(G)a("select:not(#fancybox-tmp select)").filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one("fancybox-cleanup",function(){this.style.visibility="inherit"});r.show()}}else r.hide();h=P();t=c.title||"";u=0;g.empty().removeAttr("style").removeClass();if(c.titleShow!==false&&(t=a.isFunction(c.titleFormat)?c.titleFormat(t,j,n,c):t&&t.length?c.titlePosition==
"float"?'<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">'+t+'</td><td id="fancybox-title-float-right"></td></tr></table>':'<div id="fancybox-title-'+c.titlePosition+'">'+t+"</div>":false)&&t!=="")switch(g.addClass("fancybox-title-"+c.titlePosition).html(t).appendTo("body").show(),c.titlePosition){case "inside":g.css({width:h.width-c.padding*2,marginLeft:c.padding,marginRight:c.padding});u=g.outerHeight(true);
g.appendTo(y);h.height+=u;break;case "over":g.css({marginLeft:c.padding,width:h.width-c.padding*2,bottom:c.padding}).appendTo(y);break;case "float":g.css("left",parseInt((g.width()-h.width-40)/2,10)*-1).appendTo(e);break;default:g.css({width:h.width-c.padding*2,paddingLeft:c.padding,paddingRight:c.padding}).appendTo(e)}g.hide();if(e.is(":visible"))a(z.add(v).add(w)).hide(),b=e.position(),p={top:b.top,left:b.left,width:e.width(),height:e.height()},f=p.width==h.width&&p.height==h.height,k.fadeTo(c.changeFade,
0.3,function(){var b=function(){k.html(l.contents()).fadeTo(c.changeFade,1,K)};a.event.trigger("fancybox-change");k.empty().removeAttr("filter").css({"border-width":c.padding,width:h.width-c.padding*2,height:d.autoDimensions?"auto":h.height-u-c.padding*2});f?b():(x.prop=0,a(x).animate({prop:1},{duration:c.changeSpeed,easing:c.easingChange,step:L,complete:b}))});else if(e.removeAttr("style"),k.css("border-width",c.padding),c.transitionIn=="elastic"){p=N();k.html(l.contents());e.show();if(c.opacity)h.opacity=
0;x.prop=0;a(x).animate({prop:1},{duration:c.speedIn,easing:c.easingIn,step:L,complete:K})}else c.titlePosition=="inside"&&u>0&&g.show(),k.css({width:h.width-c.padding*2,height:d.autoDimensions?"auto":h.height-u-c.padding*2}).html(l.contents()),e.css(h).fadeIn(c.transitionIn=="none"?0:c.speedIn,K)}},Q=function(){(c.enableEscapeButton||c.enableKeyboardNav)&&a(document).bind("keydown.fb",function(b){if(b.keyCode==27&&c.enableEscapeButton)b.preventDefault(),a.fancybox.close();else if((b.keyCode==37||
b.keyCode==39)&&c.enableKeyboardNav&&b.target.tagName!=="INPUT"&&b.target.tagName!=="TEXTAREA"&&b.target.tagName!=="SELECT")b.preventDefault(),a.fancybox[b.keyCode==37?"prev":"next"]()});c.showNavArrows?((c.cyclic&&j.length>1||n!==0)&&v.show(),(c.cyclic&&j.length>1||n!=j.length-1)&&w.show()):(v.hide(),w.hide())},K=function(){a.support.opacity||(k.get(0).style.removeAttribute("filter"),e.get(0).style.removeAttribute("filter"));d.autoDimensions&&k.css("height","auto");e.css("height","auto");t&&t.length&&
g.show();c.showCloseButton&&z.show();Q();c.hideOnContentClick&&k.bind("click",a.fancybox.close);c.hideOnOverlayClick&&r.bind("click",a.fancybox.close);a(window).bind("resize.fb",a.fancybox.resize);c.centerOnScroll&&a(window).bind("scroll.fb",a.fancybox.center);c.type=="iframe"&&a('<iframe id="fancybox-frame" name="fancybox-frame'+(new Date).getTime()+'" frameborder="0" hspace="0" '+(a.browser.msie?'allowtransparency="true""':"")+' scrolling="'+d.scrolling+'" src="'+c.href+'"></iframe>').appendTo(k);
e.show();i=false;a.fancybox.center();c.onComplete(j,n,c);var b,f;if(j.length-1>n&&(b=j[n+1].href,typeof b!=="undefined"&&b.match(D)))f=new Image,f.src=b;if(n>0&&(b=j[n-1].href,typeof b!=="undefined"&&b.match(D)))f=new Image,f.src=b},L=function(b){var a={width:parseInt(p.width+(h.width-p.width)*b,10),height:parseInt(p.height+(h.height-p.height)*b,10),top:parseInt(p.top+(h.top-p.top)*b,10),left:parseInt(p.left+(h.left-p.left)*b,10)};if(typeof h.opacity!=="undefined")a.opacity=b<0.5?0.5:b;e.css(a);k.css({width:a.width-
c.padding*2,height:a.height-u*b-c.padding*2})},M=function(){return[a(window).width()-c.margin*2,a(window).height()-c.margin*2,a(document).scrollLeft()+c.margin,a(document).scrollTop()+c.margin]},P=function(){var b=M(),a={},e=c.autoScale,g=c.padding*2;a.width=c.width.toString().indexOf("%")>-1?parseInt(b[0]*parseFloat(c.width)/100,10):c.width+g;a.height=c.height.toString().indexOf("%")>-1?parseInt(b[1]*parseFloat(c.height)/100,10):c.height+g;if(e&&(a.width>b[0]||a.height>b[1]))if(d.type=="image"||
d.type=="swf"){e=c.width/c.height;if(a.width>b[0])a.width=b[0],a.height=parseInt((a.width-g)/e+g,10);if(a.height>b[1])a.height=b[1],a.width=parseInt((a.height-g)*e+g,10)}else a.width=Math.min(a.width,b[0]),a.height=Math.min(a.height,b[1]);a.top=parseInt(Math.max(b[3]-20,b[3]+(b[1]-a.height-40)*0.5),10);a.left=parseInt(Math.max(b[2]-20,b[2]+(b[0]-a.width-40)*0.5),10);return a},N=function(){var b=d.orig?a(d.orig):false,f={};b&&b.length?(f=b.offset(),f.top+=parseInt(b.css("paddingTop"),10)||0,f.left+=
parseInt(b.css("paddingLeft"),10)||0,f.top+=parseInt(b.css("border-top-width"),10)||0,f.left+=parseInt(b.css("border-left-width"),10)||0,f.width=b.width(),f.height=b.height(),f={width:f.width+c.padding*2,height:f.height+c.padding*2,top:f.top-c.padding-20,left:f.left-c.padding-20}):(b=M(),f={width:c.padding*2,height:c.padding*2,top:parseInt(b[3]+b[1]*0.5,10),left:parseInt(b[2]+b[0]*0.5,10)});return f},R=function(){q.is(":visible")?(a("div",q).css("top",F*-40+"px"),F=(F+1)%12):clearInterval(E)};a.fn.fancybox=
function(b){if(!a(this).length)return this;a(this).data("fancybox",a.extend({},b,a.metadata?a(this).metadata():{})).unbind("click.fb").bind("click.fb",function(b){b.preventDefault();i||(i=true,a(this).blur(),m=[],o=0,b=a(this).attr("rel")||"",!b||b==""||b==="nofollow"?m.push(this):(m=a("a[rel="+b+"], area[rel="+b+"]"),o=m.index(this)),C())});return this};a.fancybox=function(b,c){var d;if(!i){i=true;d=typeof c!=="undefined"?c:{};m=[];o=parseInt(d.index,10)||0;if(a.isArray(b)){for(var e=0,g=b.length;e<
g;e++)typeof b[e]=="object"?a(b[e]).data("fancybox",a.extend({},d,b[e])):b[e]=a({}).data("fancybox",a.extend({content:b[e]},d));m=jQuery.merge(m,b)}else typeof b=="object"?a(b).data("fancybox",a.extend({},d,b)):b=a({}).data("fancybox",a.extend({content:b},d)),m.push(b);if(o>m.length||o<0)o=0;C()}};a.fancybox.showActivity=function(){clearInterval(E);q.show();E=setInterval(R,66)};a.fancybox.hideActivity=function(){q.hide()};a.fancybox.next=function(){return a.fancybox.pos(n+1)};a.fancybox.prev=function(){return a.fancybox.pos(n-
1)};a.fancybox.pos=function(a){i||(a=parseInt(a),m=j,a>-1&&a<j.length?(o=a,C()):c.cyclic&&j.length>1&&(o=a>=j.length?0:j.length-1,C()))};a.fancybox.cancel=function(){i||(i=true,a.event.trigger("fancybox-cancel"),H(),d.onCancel(m,o,d),i=false)};a.fancybox.close=function(){function b(){r.fadeOut("fast");g.empty().hide();e.hide();a.event.trigger("fancybox-cleanup");k.empty();c.onClosed(j,n,c);j=d=[];n=o=0;c=d={};i=false}if(!i&&!e.is(":hidden"))if(i=true,c&&false===c.onCleanup(j,n,c))i=false;else if(H(),
a(z.add(v).add(w)).hide(),a(k.add(r)).unbind(),a(window).unbind("resize.fb scroll.fb"),a(document).unbind("keydown.fb"),k.find("iframe").attr("src",G&&/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank"),c.titlePosition!=="inside"&&g.empty(),e.stop(),c.transitionOut=="elastic"){p=N();var f=e.position();h={top:f.top,left:f.left,width:e.width(),height:e.height()};if(c.opacity)h.opacity=1;g.empty().hide();x.prop=1;a(x).animate({prop:0},{duration:c.speedOut,easing:c.easingOut,
step:L,complete:b})}else e.fadeOut(c.transitionOut=="none"?0:c.speedOut,b)};a.fancybox.resize=function(){r.is(":visible")&&r.css("height",a(document).height());a.fancybox.center(true)};a.fancybox.center=function(a){var d,g;if(!i&&(g=a===true?1:0,d=M(),g||!(e.width()>d[0]||e.height()>d[1])))e.stop().animate({top:parseInt(Math.max(d[3]-20,d[3]+(d[1]-k.height()-40)*0.5-c.padding)),left:parseInt(Math.max(d[2]-20,d[2]+(d[0]-k.width()-40)*0.5-c.padding))},typeof a=="number"?a:200)};a.fancybox.init=function(){a("#fancybox-wrap").length||
(a("body").append(l=a('<div id="fancybox-tmp"></div>'),q=a('<div id="fancybox-loading"><div></div></div>'),r=a('<div id="fancybox-overlay"></div>'),e=a('<div id="fancybox-wrap"></div>')),y=a('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(e),
y.append(k=a('<div id="fancybox-content"></div>'),z=a('<a id="fancybox-close"></a>'),g=a('<div id="fancybox-title"></div>'),v=a('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),w=a('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')),z.click(a.fancybox.close),q.click(a.fancybox.cancel),v.click(function(b){b.preventDefault();a.fancybox.prev()}),w.click(function(b){b.preventDefault();a.fancybox.next()}),
a.fn.mousewheel&&e.bind("mousewheel.fb",function(b,c){if(i)b.preventDefault();else if(a(b.target).get(0).clientHeight==0||a(b.target).get(0).scrollHeight===a(b.target).get(0).clientHeight)b.preventDefault(),a.fancybox[c>0?"prev":"next"]()}),a.support.opacity||e.addClass("fancybox-ie"),G&&(q.addClass("fancybox-ie6"),e.addClass("fancybox-ie6"),a('<iframe id="fancybox-hide-sel-frame" src="'+(/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank")+'" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(y)))};
a.fn.fancybox.defaults={padding:10,margin:40,opacity:false,modal:false,cyclic:false,scrolling:"auto",width:560,height:340,autoScale:true,autoDimensions:true,centerOnScroll:false,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:true,hideOnContentClick:false,overlayShow:true,overlayOpacity:0.7,overlayColor:"#777",titleShow:true,titlePosition:"float",titleFormat:null,titleFromAlt:false,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",
easingOut:"swing",showCloseButton:true,showNavArrows:true,enableEscapeButton:true,enableKeyboardNav:true,onStart:function(){},onCancel:function(){},onComplete:function(){},onCleanup:function(){},onClosed:function(){},onError:function(){}};a(document).ready(function(){a.fancybox.init()})})(jQuery);

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
//eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('h.i[\'1a\']=h.i[\'z\'];h.O(h.i,{y:\'D\',z:9(x,t,b,c,d){6 h.i[h.i.y](x,t,b,c,d)},17:9(x,t,b,c,d){6 c*(t/=d)*t+b},D:9(x,t,b,c,d){6-c*(t/=d)*(t-2)+b},13:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t+b;6-c/2*((--t)*(t-2)-1)+b},X:9(x,t,b,c,d){6 c*(t/=d)*t*t+b},U:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t+1)+b},R:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t+b;6 c/2*((t-=2)*t*t+2)+b},N:9(x,t,b,c,d){6 c*(t/=d)*t*t*t+b},M:9(x,t,b,c,d){6-c*((t=t/d-1)*t*t*t-1)+b},L:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t+b;6-c/2*((t-=2)*t*t*t-2)+b},K:9(x,t,b,c,d){6 c*(t/=d)*t*t*t*t+b},J:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t*t*t+1)+b},I:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t*t+b;6 c/2*((t-=2)*t*t*t*t+2)+b},G:9(x,t,b,c,d){6-c*8.C(t/d*(8.g/2))+c+b},15:9(x,t,b,c,d){6 c*8.n(t/d*(8.g/2))+b},12:9(x,t,b,c,d){6-c/2*(8.C(8.g*t/d)-1)+b},Z:9(x,t,b,c,d){6(t==0)?b:c*8.j(2,10*(t/d-1))+b},Y:9(x,t,b,c,d){6(t==d)?b+c:c*(-8.j(2,-10*t/d)+1)+b},W:9(x,t,b,c,d){e(t==0)6 b;e(t==d)6 b+c;e((t/=d/2)<1)6 c/2*8.j(2,10*(t-1))+b;6 c/2*(-8.j(2,-10*--t)+2)+b},V:9(x,t,b,c,d){6-c*(8.o(1-(t/=d)*t)-1)+b},S:9(x,t,b,c,d){6 c*8.o(1-(t=t/d-1)*t)+b},Q:9(x,t,b,c,d){e((t/=d/2)<1)6-c/2*(8.o(1-t*t)-1)+b;6 c/2*(8.o(1-(t-=2)*t)+1)+b},P:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6-(a*8.j(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b},H:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6 a*8.j(2,-10*t)*8.n((t*d-s)*(2*8.g)/p)+c+b},T:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d/2)==2)6 b+c;e(!p)p=d*(.3*1.5);e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);e(t<1)6-.5*(a*8.j(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b;6 a*8.j(2,-10*(t-=1))*8.n((t*d-s)*(2*8.g)/p)*.5+c+b},F:9(x,t,b,c,d,s){e(s==u)s=1.l;6 c*(t/=d)*t*((s+1)*t-s)+b},E:9(x,t,b,c,d,s){e(s==u)s=1.l;6 c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},16:9(x,t,b,c,d,s){e(s==u)s=1.l;e((t/=d/2)<1)6 c/2*(t*t*(((s*=(1.B))+1)*t-s))+b;6 c/2*((t-=2)*t*(((s*=(1.B))+1)*t+s)+2)+b},A:9(x,t,b,c,d){6 c-h.i.v(x,d-t,0,c,d)+b},v:9(x,t,b,c,d){e((t/=d)<(1/2.k)){6 c*(7.q*t*t)+b}m e(t<(2/2.k)){6 c*(7.q*(t-=(1.5/2.k))*t+.k)+b}m e(t<(2.5/2.k)){6 c*(7.q*(t-=(2.14/2.k))*t+.11)+b}m{6 c*(7.q*(t-=(2.18/2.k))*t+.19)+b}},1b:9(x,t,b,c,d){e(t<d/2)6 h.i.A(x,t*2,0,c,d)*.5+b;6 h.i.v(x,t*2-d,0,c,d)*.5+c*.5+b}});',62,74,'||||||return||Math|function|||||if|var|PI|jQuery|easing|pow|75|70158|else|sin|sqrt||5625|asin|||undefined|easeOutBounce|abs||def|swing|easeInBounce|525|cos|easeOutQuad|easeOutBack|easeInBack|easeInSine|easeOutElastic|easeInOutQuint|easeOutQuint|easeInQuint|easeInOutQuart|easeOutQuart|easeInQuart|extend|easeInElastic|easeInOutCirc|easeInOutCubic|easeOutCirc|easeInOutElastic|easeOutCubic|easeInCirc|easeInOutExpo|easeInCubic|easeOutExpo|easeInExpo||9375|easeInOutSine|easeInOutQuad|25|easeOutSine|easeInOutBack|easeInQuad|625|984375|jswing|easeInOutBounce'.split('|'),0,{}))

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */


/*
 * jQuery css bezier animation support -- Jonah Fox
 * version 0.0.1
 * Released under the MIT license.
 */
/*
  var path = $.path.bezier({
    start: {x:10, y:10, angle: 20, length: 0.3},
    end:   {x:20, y:30, angle: -20, length: 0.2}
  })
  $("myobj").animate({path: path}, duration)

*/

;(function($){

  $.path = {}


  var V = {
    rotate: function(p, degrees) {
      var radians = degrees * 3.141592654 / 180
      var c = Math.cos(radians), s = Math.sin(radians)
      return [c*p[0] - s*p[1], s*p[0] + c*p[1] ]
    },
    scale: function(p, n) {
      return [n*p[0], n*p[1]]
    },
    add: function(a, b) {
      return [a[0]+b[0], a[1]+b[1]]
    },
    minus: function(a, b) {
      return [a[0]-b[0], a[1]-b[1]]
    }
  }

   $.path.bezier = function( params ) { 
     	params.start = $.extend({angle: 0, length: 0.3333}, params.start )
     	params.end   = $.extend({angle: 0, length: 0.3333}, params.end )

     this.p1 = [params.start.x, params.start.y];
     this.p4 = [params.end.x, params.end.y];

     var v14 = V.minus(this.p4, this.p1)
     var v12 = V.scale(v14, params.start.length)
     v12 = V.rotate(v12, params.start.angle)
     this.p2 = V.add(this.p1, v12)

     var v41 = V.scale(v14, -1)
     var v43 = V.scale(v41, params.end.length)     
     v43 = V.rotate(v43, params.end.angle)
     this.p3 = V.add(this.p4, v43)

     this.f1 = function(t) { return (t*t*t); }
     this.f2 = function(t) { return (3*t*t*(1-t)); } 
     this.f3 = function(t) { return (3*t*(1-t)*(1-t)); }
     this.f4 = function(t) { return ((1-t)*(1-t)*(1-t)); }

     /* p from 0 to 1 */
     this.css = function(p) {
       var f1 = this.f1(p), f2 = this.f2(p), f3 = this.f3(p), f4=this.f4(p)
       var x = this.p1[0]*f1 + this.p2[0]*f2 +this.p3[0]*f3 + this.p4[0]*f4;
       var y = this.p1[1]*f1 + this.p2[1]*f2 +this.p3[1]*f3 + this.p4[1]*f4;
       return {top: y + "px", left: x + "px"}
     }
   }

   $.path.arc = function(params) {
     for(var i in params)
       this[i] = params[i]

     this.dir = this.dir || 1

     while(this.start > this.end && this.dir > 0)
       this.start -= 360

     while(this.start < this.end && this.dir < 0)
       this.start += 360


     this.css = function(p) {
       var a = this.start * (p ) + this.end * (1-(p ))  
       a = a * 3.1415927 / 180 // to radians

       var x = Math.sin(a) * this.radius + this.center[0]
       var y = Math.cos(a) * this.radius + this.center[1]
       return {top: y + "px", left: x + "px"}
     } 

   };


  $.fx.step.path = function(fx){
    var css = fx.end.css(1 - fx.pos)
    for(var i in css) 
      fx.elem.style[i] = css[i];
  }
})(jQuery);


jQuery.fn.animateStep = function( options ) {
	
	var settings = {
		css : {},
		speed: 200,
		limit: null,
		after: function(){},
		delay: 50
	};
	
	if ( options )  
		$.extend( settings, options );
		
	return this.each(function(x,item){
		if( x === settings.limit ) 
			return false;
		
		var me = $(item);
		
		if( x < options.limit-1 )
			me.delay(x*settings.delay).animate(settings.css,settings.speed);
		else 
			me.delay(x*settings.delay).animate(settings.css,settings.speed,settings.after);
	});
 };



/*********************************
***********************************
Uniform.js
************************************/
(function(a){a.uniform={options:{selectClass:"selector",radioClass:"radio",checkboxClass:"checker",fileClass:"uploader",filenameClass:"filename",fileBtnClass:"action",fileDefaultText:"No file selected",fileBtnText:"Choose File",checkedClass:"checked",focusClass:"focus",disabledClass:"disabled",buttonClass:"button",activeClass:"active",hoverClass:"hover",useID:true,idPrefix:"uniform",resetSelector:false,autoHide:true},elements:[]};if(a.browser.msie&&a.browser.version<7){a.support.selectOpacity=false}else{a.support.selectOpacity=true}a.fn.uniform=function(k){k=a.extend(a.uniform.options,k);var d=this;if(k.resetSelector!=false){a(k.resetSelector).mouseup(function(){function l(){a.uniform.update(d)}setTimeout(l,10)})}function j(l){$el=a(l);$el.addClass($el.attr("type"));b(l)}function g(l){a(l).addClass("uniform");b(l)}function i(o){var m=a(o);var p=a("<div>"),l=a("<span>");p.addClass(k.buttonClass);if(k.useID&&m.attr("id")!=""){p.attr("id",k.idPrefix+"-"+m.attr("id"))}var n;if(m.is("a")||m.is("button")){n=m.text()}else{if(m.is(":submit")||m.is(":reset")||m.is("input[type=button]")){n=m.attr("value")}}n=n==""?m.is(":reset")?"Reset":"Submit":n;l.html(n);m.css("opacity",0);m.wrap(p);m.wrap(l);p=m.closest("div");l=m.closest("span");if(m.is(":disabled")){p.addClass(k.disabledClass)}p.bind({"mouseenter.uniform":function(){p.addClass(k.hoverClass)},"mouseleave.uniform":function(){p.removeClass(k.hoverClass);p.removeClass(k.activeClass)},"mousedown.uniform touchbegin.uniform":function(){p.addClass(k.activeClass)},"mouseup.uniform touchend.uniform":function(){p.removeClass(k.activeClass)},"click.uniform touchend.uniform":function(r){if(a(r.target).is("span")||a(r.target).is("div")){if(o[0].dispatchEvent){var q=document.createEvent("MouseEvents");q.initEvent("click",true,true);o[0].dispatchEvent(q)}else{o[0].click()}}}});o.bind({"focus.uniform":function(){p.addClass(k.focusClass)},"blur.uniform":function(){p.removeClass(k.focusClass)}});a.uniform.noSelect(p);b(o)}function e(o){var m=a(o);var p=a("<div />"),l=a("<span />");if(!m.css("display")=="none"&&k.autoHide){p.hide()}p.addClass(k.selectClass);if(k.useID&&o.attr("id")!=""){p.attr("id",k.idPrefix+"-"+o.attr("id"))}var n=o.find(":selected:first");if(n.length==0){n=o.find("option:first")}l.html(n.html());o.css("opacity",0);o.wrap(p);o.before(l);p=o.parent("div");l=o.siblings("span");o.bind({"change.uniform":function(){l.text(o.find(":selected").html());p.removeClass(k.activeClass)},"focus.uniform":function(){p.addClass(k.focusClass)},"blur.uniform":function(){p.removeClass(k.focusClass);p.removeClass(k.activeClass)},"mousedown.uniform touchbegin.uniform":function(){p.addClass(k.activeClass)},"mouseup.uniform touchend.uniform":function(){p.removeClass(k.activeClass)},"click.uniform touchend.uniform":function(){p.removeClass(k.activeClass)},"mouseenter.uniform":function(){p.addClass(k.hoverClass)},"mouseleave.uniform":function(){p.removeClass(k.hoverClass);p.removeClass(k.activeClass)},"keyup.uniform":function(){l.text(o.find(":selected").html())}});if(a(o).attr("disabled")){p.addClass(k.disabledClass)}a.uniform.noSelect(l);b(o)}function f(n){var m=a(n);var o=a("<div />"),l=a("<span />");if(!m.css("display")=="none"&&k.autoHide){o.hide()}o.addClass(k.checkboxClass);if(k.useID&&n.attr("id")!=""){o.attr("id",k.idPrefix+"-"+n.attr("id"))}a(n).wrap(o);a(n).wrap(l);l=n.parent();o=l.parent();a(n).css("opacity",0).bind({"focus.uniform":function(){o.addClass(k.focusClass)},"blur.uniform":function(){o.removeClass(k.focusClass)},"click.uniform touchend.uniform":function(){if(!a(n).attr("checked")){l.removeClass(k.checkedClass)}else{l.addClass(k.checkedClass)}},"mousedown.uniform touchbegin.uniform":function(){o.addClass(k.activeClass)},"mouseup.uniform touchend.uniform":function(){o.removeClass(k.activeClass)},"mouseenter.uniform":function(){o.addClass(k.hoverClass)},"mouseleave.uniform":function(){o.removeClass(k.hoverClass);o.removeClass(k.activeClass)}});if(a(n).attr("checked")){l.addClass(k.checkedClass)}if(a(n).attr("disabled")){o.addClass(k.disabledClass)}b(n)}function c(n){var m=a(n);var o=a("<div />"),l=a("<span />");if(!m.css("display")=="none"&&k.autoHide){o.hide()}o.addClass(k.radioClass);if(k.useID&&n.attr("id")!=""){o.attr("id",k.idPrefix+"-"+n.attr("id"))}a(n).wrap(o);a(n).wrap(l);l=n.parent();o=l.parent();a(n).css("opacity",0).bind({"focus.uniform":function(){o.addClass(k.focusClass)},"blur.uniform":function(){o.removeClass(k.focusClass)},"click.uniform touchend.uniform":function(){if(!a(n).attr("checked")){l.removeClass(k.checkedClass)}else{var p=k.radioClass.split(" ")[0];a("."+p+" span."+k.checkedClass+":has([name='"+a(n).attr("name")+"'])").removeClass(k.checkedClass);l.addClass(k.checkedClass)}},"mousedown.uniform touchend.uniform":function(){if(!a(n).is(":disabled")){o.addClass(k.activeClass)}},"mouseup.uniform touchbegin.uniform":function(){o.removeClass(k.activeClass)},"mouseenter.uniform touchend.uniform":function(){o.addClass(k.hoverClass)},"mouseleave.uniform":function(){o.removeClass(k.hoverClass);o.removeClass(k.activeClass)}});if(a(n).attr("checked")){l.addClass(k.checkedClass)}if(a(n).attr("disabled")){o.addClass(k.disabledClass)}b(n)}function h(q){var o=a(q);var r=a("<div />"),p=a("<span>"+k.fileDefaultText+"</span>"),m=a("<span>"+k.fileBtnText+"</span>");if(!o.css("display")=="none"&&k.autoHide){r.hide()}r.addClass(k.fileClass);p.addClass(k.filenameClass);m.addClass(k.fileBtnClass);if(k.useID&&o.attr("id")!=""){r.attr("id",k.idPrefix+"-"+o.attr("id"))}o.wrap(r);o.after(m);o.after(p);r=o.closest("div");p=o.siblings("."+k.filenameClass);m=o.siblings("."+k.fileBtnClass);if(!o.attr("size")){var l=r.width();o.attr("size",l/10)}var n=function(){var s=o.val();if(s===""){s=k.fileDefaultText}else{s=s.split(/[\/\\]+/);s=s[(s.length-1)]}p.text(s)};n();o.css("opacity",0).bind({"focus.uniform":function(){r.addClass(k.focusClass)},"blur.uniform":function(){r.removeClass(k.focusClass)},"mousedown.uniform":function(){if(!a(q).is(":disabled")){r.addClass(k.activeClass)}},"mouseup.uniform":function(){r.removeClass(k.activeClass)},"mouseenter.uniform":function(){r.addClass(k.hoverClass)},"mouseleave.uniform":function(){r.removeClass(k.hoverClass);r.removeClass(k.activeClass)}});if(a.browser.msie){o.bind("click.uniform.ie7",function(){setTimeout(n,0)})}else{o.bind("change.uniform",n)}if(o.attr("disabled")){r.addClass(k.disabledClass)}a.uniform.noSelect(p);a.uniform.noSelect(m);b(q)}a.uniform.restore=function(l){if(l==undefined){l=a(a.uniform.elements)}a(l).each(function(){if(a(this).is(":checkbox")){a(this).unwrap().unwrap()}else{if(a(this).is("select")){a(this).siblings("span").remove();a(this).unwrap()}else{if(a(this).is(":radio")){a(this).unwrap().unwrap()}else{if(a(this).is(":file")){a(this).siblings("span").remove();a(this).unwrap()}else{if(a(this).is("button, :submit, :reset, a, input[type='button']")){a(this).unwrap().unwrap()}}}}}a(this).unbind(".uniform");a(this).css("opacity","1");var m=a.inArray(a(l),a.uniform.elements);a.uniform.elements.splice(m,1)})};function b(l){l=a(l).get();if(l.length>1){a.each(l,function(m,n){a.uniform.elements.push(n)})}else{a.uniform.elements.push(l)}}a.uniform.noSelect=function(l){function m(){return false}a(l).each(function(){this.onselectstart=this.ondragstart=m;a(this).mousedown(m).css({MozUserSelect:"none"})})};a.uniform.update=function(l){if(l==undefined){l=a(a.uniform.elements)}l=a(l);l.each(function(){var n=a(this);if(n.is("select")){var m=n.siblings("span");var p=n.parent("div");p.removeClass(k.hoverClass+" "+k.focusClass+" "+k.activeClass);m.html(n.find(":selected").html());if(n.is(":disabled")){p.addClass(k.disabledClass)}else{p.removeClass(k.disabledClass)}}else{if(n.is(":checkbox")){var m=n.closest("span");var p=n.closest("div");p.removeClass(k.hoverClass+" "+k.focusClass+" "+k.activeClass);m.removeClass(k.checkedClass);if(n.is(":checked")){m.addClass(k.checkedClass)}if(n.is(":disabled")){p.addClass(k.disabledClass)}else{p.removeClass(k.disabledClass)}}else{if(n.is(":radio")){var m=n.closest("span");var p=n.closest("div");p.removeClass(k.hoverClass+" "+k.focusClass+" "+k.activeClass);m.removeClass(k.checkedClass);if(n.is(":checked")){m.addClass(k.checkedClass)}if(n.is(":disabled")){p.addClass(k.disabledClass)}else{p.removeClass(k.disabledClass)}}else{if(n.is(":file")){var p=n.parent("div");var o=n.siblings(k.filenameClass);btnTag=n.siblings(k.fileBtnClass);p.removeClass(k.hoverClass+" "+k.focusClass+" "+k.activeClass);o.text(n.val());if(n.is(":disabled")){p.addClass(k.disabledClass)}else{p.removeClass(k.disabledClass)}}else{if(n.is(":submit")||n.is(":reset")||n.is("button")||n.is("a")||l.is("input[type=button]")){var p=n.closest("div");p.removeClass(k.hoverClass+" "+k.focusClass+" "+k.activeClass);if(n.is(":disabled")){p.addClass(k.disabledClass)}else{p.removeClass(k.disabledClass)}}}}}}})};return this.each(function(){if(a.support.selectOpacity){var l=a(this);if(l.is("select")){if(l.attr("multiple")!=true){if(l.attr("size")==undefined||l.attr("size")<=1){e(l)}}}else{if(l.is(":checkbox")){f(l)}else{if(l.is(":radio")){c(l)}else{if(l.is(":file")){h(l)}else{if(l.is(":text, :password, input[type='email']")){j(l)}else{if(l.is("textarea")){g(l)}else{if(l.is("a")||l.is(":submit")||l.is(":reset")||l.is("button")||l.is("input[type=button]")){i(l)}}}}}}}}})}})(jQuery);

