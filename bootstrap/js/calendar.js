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
		 * ��Ӽ����¼���
		 * @param element {Element} ע�᷽���Ķ���
		 * @param type {String} Ҫע�᷽�����¼���
		 * @param listener {Function} �������ϵĻص�������
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
	     * ������ִ���
		 */
		  var $, Calendar, DAYS, DateRangePicker, MONTHS, TEMPLATE;

		  $ = jQuery;

		  zh_CN_DAYS = ['����', '��һ', '�ܶ�', '����', '����', '����', '����'];

		  zh_CN_MONTHS = ['һ��', '����', '����', '����', '����', '����', '����', '����', '����', 'ʮ��', 'ʮһ��', 'ʮ����'];

		  en_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

		  en_MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		  TEMPLATE = "";
		  
		var qa = function (a) {
			return void 0 != a && -1 < (a.constructor + "")[_str_indexOf]("String")
		}, sa = function (a) {
			return a ? a[_replace](/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
		};
	
		var gb = qa(_o_window.AnalyticsObject) && sa(_o_window.AnalyticsObject) || "ya";
		/**
		 * ȫ�ֹ��߶���
		 * @param win {Window} ���ڶ���
		 * @param doc {Document} �ĵ�����
		 */
		var Global = function(win, doc){
				var oThis = this;
				oThis.window = win;
				oThis.document = doc;

				/**
				 * ��ʱִ��ָ���Ļص�������
				 * @param callback {Function} ��Ҫִ�еĻص�������
				 * @param delay {Int} ��ʱ�ļ�����Ժ���ƣ���
				 */
				oThis.setTimeout = function(callback, delay){
					setTimeout(callback, delay);
				};
				
				/**
				 * �û�����ͷ���ַ�����ʾ(���ǰ���������汾��Ϣ�ȵ��ַ���)�Ƿ����ָ�����ַ�����
				 * @param key {String} ָ�����ַ�����
				 * @return {Boolean} �Ƿ������
				 */
				oThis.contains = function(key){
					return navigator.userAgent[_str_indexOf](key) >= 0;
				};

				/**
				 * �ж�������Ƿ���Firefox�������
				 * @return {Boolean} �Ƿ���Firefox�������
				 */
				oThis.isFirefox = function(){
					return oThis.contains("Firefox") && ![].reduce;
				};

				/**
				 * ������ҳ��Դҳ���URL��ַ��
				 * @return {String} �������URL��ַ��
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
         * ȫ�ֹ��߶���ʵ����
         */
        ,$Global = new Global(_o_window, document)
		,analytics_domain = "https:" == $Global[_str_document][_location][_protocol] ? "https://ssl.dianjr.com/" : "http://www.dianjr.com/"
        ,analytics_path = analytics_domain + "p/__utm.gif";
		
		
        /**
         * �������������������Ķ���
         */
        Ajax = function(){
            var oThis = this;

            /**
             * ��������
             * @param url {String} ��������ĵ�ַ��
             * @param param {String} ��������Ĳ�������
             * @param mark {String} ����ı�ʶ�������汾�š��������ID��UA�˺š�������ϣֵ����
             * @param callback {Function} �ص�������
             * @param _ioo {Boolean}
             */
            oThis.send = function(url, param, mark, callback, _ioo){
                if(param[_length] <= 2036 || _ioo){
                    oThis.sendByImage(url + "?" + param, callback);
                }else if(param[_length] <= 8192){
                    $Global.isFirefox() ? oThis.sendByImage(url + "?" + mark + "&err=ff2post&len=" + param[_length], callback) : oThis.Send(param, callback);
                }else{
                    oThis.sendByImage(url + "?" + mark + "&err=len&max=8192&len=" + param[_length], callback);
                }
            };

            /**
             * ʹ��ͼƬ���󷢳�����
             * @param src {String} ��װ��ϵ�ͼƬ�ĵ�ַ��
             * @param callback {Function} �ص�������
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
             * �������ʹ��XMLHttpRequest��iframe���󷢳�����
             * @param param {String} ��������Ĳ�������
             * @param callback {Function} �ص�������
             */
            oThis.Send = function(param, callback){
                oThis.sendByRequest(param, callback) || oThis.sendByIFrame(param, callback)
            };

            /**
             * ʹ��XMLHttpRequest���󷢳�����
             * @param param {String} ��������Ĳ�������
             * @param callback {Function} �ص�������
             */
            oThis.sendByRequest = function(param, callback){
                var request,
                    Request = $Global[_str_window].XDomainRequest;
                if(Request){
                    request = new Request;
                    request.open("POST", analytics_path);
                }else if(Request = $Global[_str_window].XMLHttpRequest){
                    Request = new Request;
                    if("withCredentials"in Request){
                        request = Request;
                        request.open("POST", analytics_path, _true);
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
             * ʹ��iframe���󷢳�����
             * @param param {String} ��������Ĳ�������
             * @param callback {Function} �ص�������
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
                    _loca = analytics_domain + "u/post_iframe.html#" + _encodeURI(_loca);
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
        },_ajax=new Ajax();
		
		//console.log(gb)
		//console.log(_o_window[gb].q)
		_queue = [];
		for(i in _o_window[gb].q){
			// _queue.push();
			console.log(_o_window[gb].q[i]);
		};
		
})();