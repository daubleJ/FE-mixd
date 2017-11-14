/**
*/
(function(){
	
	
	
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
	var ad_server = "http://127.0.0.1:3000/ads.html";//广告服务器地址
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
		var getCode = function(ads, width, height) {
		//width -> b
		//height->c
			var d = void 0 === d ? "" : d;
			var iframeElement = ["<iframe"];
			iframeElement.push("src = ");
			iframeElement.push('"'+ ad_server +'"');
			iframeElement.push('style="' + ("left:0;position:absolute;top:0;border:none;width:" + width + "px;height:" + height + "px;") + '"');
			iframeElement.push("></iframe>");
			a_id = ads.id;
			height = "border:none;height:" + height + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + width + "px;background-color:transparent;";
			return ['<ins id="', a_id + "_expand", '" style="display:inline-table;', height, void 0 === d ? "" : d, '"><ins id="', a_id + "_anchor", '" style="display:block;', height, '">', iframeElement.join(" "), "</ins></ins>"].join("")
	};


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
	//	fullDocument.write(text);
	console.log(text);
	elm[0].innerHTML = text;
	//elm.appendChild(fullDocument);
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
