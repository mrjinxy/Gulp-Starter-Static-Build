 /*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

 (function(c,n){var l="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";c.fn.imagesLoaded=function(f){function m(){var b=c(i),a=c(h);d&&(h.length?d.reject(e,b,a):d.resolve(e));c.isFunction(f)&&f.call(g,e,b,a)}function j(b,a){b.src===l||-1!==c.inArray(b,k)||(k.push(b),a?h.push(b):i.push(b),c.data(b,"imagesLoaded",{isBroken:a,src:b.src}),o&&d.notifyWith(c(b),[a,e,c(i),c(h)]),e.length===k.length&&(setTimeout(m),e.unbind(".imagesLoaded")))}var g=this,d=c.isFunction(c.Deferred)?c.Deferred():
 0,o=c.isFunction(d.notify),e=g.find("img").add(g.filter("img")),k=[],i=[],h=[];c.isPlainObject(f)&&c.each(f,function(b,a){if("callback"===b)f=a;else if(d)d[b](a)});e.length?e.bind("load.imagesLoaded error.imagesLoaded",function(b){j(b.target,"error"===b.type)}).each(function(b,a){var d=a.src,e=c.data(a,"imagesLoaded");if(e&&e.src===d)j(a,e.isBroken);else if(a.complete&&a.naturalWidth!==n)j(a,0===a.naturalWidth||0===a.naturalHeight);else if(a.readyState||a.complete)a.src=l,a.src=d}):m();return d?d.promise(g):
 g}})(jQuery);


//IMAGE  fill 
!function(t){t.fn.imagefill=function(i){function e(){s=0,r=0,o.each(function(){n=t(this).find(u.target).width()/t(this).find(u.target).height();var i=t(this).outerWidth(),e=t(this).outerHeight();s+=t(this).outerHeight(),r+=t(this).outerWidth();var h=i/e;t(this).find(u.target).css(n>h?{width:"auto",height:e,top:0,left:-(e*n-i)/2}:{width:i,height:"auto",top:-(i/n-e)/2,left:0})})}function h(){var i=0,n=0;o.each(function(){n+=t(this).outerHeight(),i+=t(this).outerWidth()}),(s!==n||r!==i)&&e(),setTimeout(h,u.throttle)}var o=this,n=1,s=0,r=0,a={runOnce:!1,target:"img",throttle:200},u=t.extend({},a,i),d=o.find(u.target).addClass("loading").css({position:"absolute"}),c=o.css("position");return o.css({overflow:"hidden",position:"static"===c?"relative":c}),o.each(function(){s+=t(this).outerHeight(),r+=t(this).outerWidth()}),o.imagesLoaded().done(function(){n=d.width()/d.height(),d.removeClass("loading"),e(),u.runOnce||h()}),this}}(jQuery);

