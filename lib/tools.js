/**
 * Tools
 * 
 */
(function (){ var oThis; $B = (function(){  function $B() { oThis = this; this.magic = function(data) { return this.stricture(data);  };}; return $B; })(); })();
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
		  Tfactory,
		  Tools,
		  REF_READY = 1,
		  REF_DOWN = 0,
		  ERROR_CODE = {
				 "1000":"没有找到类！"
				,"1001":"没找到类方法！"
				,"1002":"您使用的类无法被反射！"
		  };
		  
		  $ = jQuery;
		  Tfactory = (function(){
			  var oThis;
				function Tfactory( fClass ) {
				  oThis = this;
				  return new _o_window[fClass]();
				}
				return Tfactory;
		  })();
		  Tools = (function() {
			var oThis;
			function Tools() {
			  oThis = this;
			  oThis.data = null;
			}
			/**
			 * 载入数据
			 * @param jsonObject json对象
			 */
			Tools.prototype.load = function(data) {
				  oThis.data = data;
			};
			/**
			 * 弹出消息
			 * @param string 消息内容
			 */
			Tools.prototype.message = function(message) {
				(function (){ layer.msg(message); })(); 
			};
			/**
			 * 弹出页面
			 * @params 弹出页面内容
			 */
			Tools.prototype.popup = function(content) {
				(function (){
					  layer.open({
					        type: 1,
					        area: ['600px', '360px'],
					        shadeClose: true, //点击遮罩关闭
					        content: '\<\div style="padding:20px;">'+content+'\<\/div>'
					    });
				})(); 
			};
			/**
			 * 错误提示函数。
			 * @param void 无参数。
			 * @return {void} 无返回值。
			 */
			Tools.prototype.error = function() {
			    
				if(ERROR_CODE[oThis.data.code])
					  oThis.message(ERROR_CODE[oThis.data.code]);
				else
					  oThis.message("未知错误");
				
				console.log(oThis.data);
				
			};
			/**
			 * 构建操作界面方法。
			 * @param void 无参数。
			 * @return {Boolean} 是否构建成功。
			 */
			Tools.prototype.bulid = function() {
				
				/**
				 * 状态不为0所有返回均为错误消息
				 */
				if(oThis.data.status!=0){
					oThis.error();
					return false;
				}
				/**
				 * 当发现服务端处理结果为准备数据的时候
				 */
				if(oThis.data.REF!=REF_READY){
					var interactive = oThis.data.data.interactive || "";
					var cl = interactive.split('.');
					var rc = cl.pop(); //最终的实现类
					
					var lambda = function (lcl,cb){
						var lc = lcl.join('.');
						jsimport(lc,function(){
								lcl.pop();
								if(lcl.length!=0){
									lambda(lcl,cb);
								}else{
									cb && cb();
								}
						});
					}; 
					
					lambda(cl,function(){
						if(interactive!=''){
							jsimport(interactive,function(){
								tfactory = new Tfactory(rc);
								tfactory.magic(oThis.data);
							});
						}
					});
					
					return true;
				}
				/**
				 * 当发现服务端处理结果为完成的时候
				 */
				if(oThis.data.REF!=REF_DOWN){
					
					return true;
				}
				
			};

			return Tools;
		  })(),tools = new Tools();
		 
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

        /**
         * 全局工具对象实例。
         */
        ,$Global = new Global(_o_window, document)
		,asynchronous_domain = "https:" == $Global[_str_document][_location][_protocol] ? "https://work.medbanks.cn/" : "http://work.medbanks.cn/"
		,asynchronous_path = asynchronous_domain + '/asynchronous.gif';
		;
		
		
        /**
         * 用于向服务器发出请求的对象。
         */
        var Ajax = function(){
            var oThis = this;
            /**
             * 发送请求。
             * @param url {String} 发送请求的地址。
             * @param param {String} 发送请求的参数串。
             * @param mark {String} 请求的标识（包括版本号、随机整数ID、UA账号、域名哈希值）。
             * @param callback {Function} 回调函数。
             * @param _ioo {Boolean}
             */
            oThis.send = function(url, param, mark, callback, _ioo){
                if(param[_length] <= 2036 || _ioo){
                    oThis.sendByImage(url + "?" + param, callback);
                }else if(param[_length] <= 8192){
                    $Global.isFirefox() ? oThis.sendByImage(url + "?" + mark + "&err=ff2post&len=" + param[_length], callback) : oThis.Send( url, param, callback);
                }else{
                    oThis.sendByImage(url + "?" + mark + "&err=len&max=8192&len=" + param[_length], callback);
                }
            };

            /**
             * 使用图片对象发出请求。
             * @param src {String} 组装完毕的图片的地址。
             * @param callback {Function} 回调函数。
             */
            oThis.sendByImage = function(src, callback){
                var image = new Image(1, 1);
                image.src = src;
                image.onload = function(){
                    image.onload = null;
                    (callback || emptyFunction)()
                }
            };

            /**
             * 根据情况使用XMLHttpRequest或iframe对象发出请求。
             * @param param {String} 发送请求的参数串。
             * @param callback {Function} 回调函数。
             */
            oThis.Send = function(url ,param, callback){
                oThis.sendByRequest(url,param, callback) || oThis.sendByIFrame(param, callback)
            };

            /**
             * 使用XMLHttpRequest对象发出请求。
             * @param param {String} 发送请求的参数串。
             * @param callback {Function} 回调函数。
             */
            oThis.sendByRequest = function(url,param, callback){
                var request,
                    Request = $Global[_str_window].XDomainRequest;
                if(Request){
                    request = new Request;
                    request.open("POST", url);
                }else if(Request = $Global[_str_window].XMLHttpRequest){
                    Request = new Request;
                    if("withCredentials"in Request){
                        request = Request;
                        request.open("POST", url, _true);
                        request.setRequestHeader("Content-Type", "text/plain");
                    }
                }
                if(request){
                    request.onreadystatechange = function(){
                        if(request.readyState == 4){
                            callback && callback();
                            request = null;
                        }
                    };
                    request.send(param);
                    return _true;
                }
                return _false;
            };

            /**
             * 使用iframe对象发出请求。
             * @param param {String} 发送请求的参数串。
             * @param callback {Function} 回调函数。
             */
            
            oThis.sendByIFrame = function(param, callback){
                var doc = $Global[_str_document];
                if(doc.body){
                    param = _encodeURI(param);
                    try{
                        var fra = doc.createElement('<iframe name="' + param + '"></iframe>');
                    }catch(ex){
                        fra = doc.createElement("iframe");
                        fra.name = param;
                    }
                    fra.height = "0";
                    fra.width = "0";
                    fra.style.display = "none";
                    fra.style.visibility = "hidden";
                    var _loca = doc[_location];
                    _loca = _loca[_protocol] + "//" + _loca.host + "/favicon.ico";
                    _loca =  + asynchronous_path + "?asynchronous=1#" + _encodeURI(_loca);
                    var setFra = function(){
                        fra.src = "";
                        fra.parentNode && fra.parentNode.removeChild(fra);
                    };

                    AddListener($Global[_str_window], "beforeunload", setFra);
                    var succes = _false,
                        i = 0,
                        fraLoad = function(){
                            if(!succes){
                                try{
                                    if(i > 9 || fra.contentWindow[_location].host == doc[_location].host){
                                        succes = _true;
                                        setFra();
                                        var win = $Global[_str_window],
                                            _beforeunload = "beforeunload",
                                            _setFra = setFra;
                                        if(win.removeEventListener){
                                            win.removeEventListener(_beforeunload, _setFra, _false); }
                                        else{
                                            win.detachEvent && win.detachEvent("on" + _beforeunload, _setFra);
                                        }
                                        callback && callback();
                                        return
                                    }
                                }catch(ex){}
                                i++;
                                $Global.setTimeout(fraLoad, 200)
                            }
                        };
                    AddListener(fra, "load", fraLoad);
                    doc.body.appendChild(fra);
                    fra.src = _loca;
                }else{
                    $Global.setTimeout(function(){
                            oThis.sendByIFrame(param, callback);
                        }, 100)
                }
            }
        },ajax=new Ajax();
        (function(){
        	var origin = _o_window[_location].origin+'/statistic/js/tools/';
            if(typeof _o_window.jsimport != "undefined") return; 
            function jsimport(sf,cb) {
            	if(sf=='') return false;
            	var path_array = [];
            	path_array.push(origin);
            	path_array.push(sf);
            	path_array.push('.js');
            	var script = document.getElementsByTagName("head")[0].appendChild(document.createElement("script"));  
            	script.type = "text/javascript";  
            	script.src = path_array.join('');
            	if(cb){
            		script.onload = cb;
            	}
            };
            _o_window.jsimport = jsimport;
      })();
		for(i in _o_window[gb].q){
			var args = Array.prototype.slice.call(_o_window[gb].q[i]);   
			var to,obc = args.shift(),fn= args.shift();
			   _o_window[obc][fn].apply(to,args);
		};_o_window[gb].q = [];
})();