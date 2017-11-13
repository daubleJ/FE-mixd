/**
*/
(function(){
	
	var ji = function() {
		var a = document.createElement("ins");
		a.className = "adsbygoojo";
		a.style.display = "none";
		return a
	};
	var je = function(a) {
			var b = ["adsbygoogle-placeholder"];
			a = a.className ? a.className.split(/\s+/) : [];
			for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
			for (d = 0; d < b.length; ++d) if (!c[b[d]]) return !1;
			return !0
		};
	var Yh = function(a, b, c) {
			Xh(a, b, c, function(a, b, f) {
				a = a.document;
				for (var d = b.id, e = 0; !d || a.getElementById(d);) d = "aswift_" + e++;
				b.id = d;
				b.name = d;
				d = Number(f.google_ad_width);
				e = Number(f.google_ad_height);
				16 == f.google_reactive_ad_format ? (f = a.createElement("div"), a = dg(b, d, e), f.innerHTML = a, c.appendChild(f.firstChild)) : (f = dg(b, d, e), c.innerHTML = f);
				return b.id
			})
	};
	
	var kc = function(a, b) {
			for (var c = 1, d = arguments.length; c < d; ++c) a.push(arguments[c])
	};
	
	var getCode = function(ads, width, height) {
		//width -> b
		//height->c
			var d = void 0 === d ? "" : d;
			var iframeElement = ["<iframe"],
				f;
			iframeElement.push('style="' + ("left:0;position:absolute;top:0;width:" + width + "px;height:" + height + "px;") + '"');
			iframeElement.push("></iframe>");
			a_id = ads.id;
			height = "border:none;height:" + height + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + width + "px;background-color:transparent;";
			return ['<ins id="', a_id + "_expand", '" style="display:inline-table;', height, void 0 === d ? "" : d, '"><ins id="', a_id + "_anchor", '" style="display:block;', height, '">', iframeElement.join(" "), "</ins></ins>"].join("")
	};

	
	
	var VERSION = "0.0.1"
		,_v = VERSION
		,_length = "length"
		,_o_window = window
		,_str_window = "window"
		,_location = "location"
		,emptyFunction = function(){}
		,_str_document = "document"
		,_true = true
		,_false = false
		,_protocol = "protocol"
		,_substring = "substring"
		,_str_indexOf = "indexOf"
		,_push = "push"
		,Q = 'q'
		,_replace = "replace"
		/**
		 * 添加监听事件。
		 * @param element {Element} 注册方法的对象。
		 * @param type {String} 要注册方法的事件。
		 * @param listener {Function} 面加载完毕的回调方法。
		 * @param useCapture {Boolean} 
		 */
		,AddListener = function(element, type, listener, useCapture){
			if(element.addEventListener){
				element.addEventListener(type, listener, !!useCapture);
			}else{
				element.attachEvent && element.attachEvent("on" + type, listener);
			}
		};
		
		/** 
	     * 插件部分代码
		 */
		  var $,
		  Calendar,
		 Calendar = (function() {
			var oThis;
			function Calendar() {
			  oThis = this;
			}
			Calendar.prototype.day = function() {
			};

			return Calendar;

		  })(),calendar = new Calendar();
		 
		var qa = function (a) {
			return void 0 != a && -1 < (a.constructor + "")[_str_indexOf]("String")
		}, sa = function (a) {
			return a ? a[_replace](/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
		};
	
		var gb = qa(_o_window.AnalyticsObject) && sa(_o_window.AnalyticsObject) || "CA";
		/**
		 * 全局工具对象。
		 * @param win {Window} 窗口对象。
		 * @param doc {Document} 文档对象。
		 */
		var Global = function(win, doc){
				var oThis = this;
				oThis.window = win;
				oThis.document = doc;

				/**
				 * 定时执行指定的回调函数。
				 * @param callback {Function} 需要执行的回调函数。
				 * @param delay {Int} 延时的间隔（以毫秒计）。
				 */
				oThis.setTimeout = function(callback, delay){
					setTimeout(callback, delay);
				};
				
				/**
				 * 用户代理头的字符串表示(就是包括浏览器版本信息等的字符串)是否包含指定的字符串。
				 * @param key {String} 指定的字符串。
				 * @return {Boolean} 是否包含。
				 */
				oThis.contains = function(key){
					return navigator.userAgent[_str_indexOf](key) >= 0;
				};

				/**
				 * 判断浏览器是否是Firefox浏览器。
				 * @return {Boolean} 是否是Firefox浏览器。
				 */
				oThis.isFirefox = function(){
					return oThis.contains("Firefox") && ![].reduce;
				};

				/**
				 * 处理网页来源页面的URL地址。
				 * @return {String} 处理过的URL地址。
				 */
				oThis.processSource = function(source){
					if(!source || !oThis.contains("Firefox")){
						return source;
					}
					source = source.replace(/\n|\r/g, " ");
					for(var i = 0, len = source[_length]; i < len; ++i){
						var charCode = source.charCodeAt(i)&255;
						if(charCode == 10 || charCode == 13){
							source = source[_substring](0, i) + "?" + source[_substring](i + 1);
						}
					}
					return source;
				}
			}
	try{
		for(i in _o_window[gb].q){
	
			var args = Array.prototype.slice.call(_o_window[gb].q[i]);   
			var to,obc = args.shift(),fn= args.shift();
				console.log(_o_window[obc]);
			   _o_window[obc][fn].apply(to,args);
		};
	}catch(e){
		console.log("error");
	}
	elm = _o_window[_str_document].getElementsByClassName('adsbygoojo');
	console.log(elm);
	text = getCode({"id":"10e1"},100,100);
	fullDocument = _o_window[_str_document];
	fullDocument.createElement(text);
	elm.appendChild(fullDocument);
/*
	f = document.createElement('div');
	g = a.style;
	g.textAlign = "center";
	g.width = "100%";
	g.height = "auto";
	g.clear = h.va ? "both" : "none";
	h.xa && ke(g, h.xa);
	f = f.createElement("ins");
	g = f.style;
	g.display = "block";
	g.margin = "auto";
	g.backgroundColor = "transparent";
	h.na && (g.marginTop = h.na);
	h.aa && (g.marginBottom = h.aa);
	h.ua && ke(g, h.ua);
	a.appendChild(f);
	f.setAttribute("data-ad-format", "auto");
*/
		/**
		try{
			
		}catch(e){
			console.log(e.message);
		}*/
		
})();
