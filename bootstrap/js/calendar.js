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
		  LANGUAGE_LIST,
		  en_DAYS,
		  en_MONTHS,
		  zh_CN_DAYS,
		  zh_CN_MONTHS, 
		  TEMPLATE,
		  DAYS,
		  MONTHS;

		  $ = jQuery;
		  
		  LANGUAGE_LIST = ['zh-CN','en'];
		  
		  zh_CN_DAYS = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

		  zh_CN_MONTHS = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

		  en_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

		  en_MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		   DAYS = zh_CN_DAYS,
		  MONTHS = zh_CN_MONTHS;
		 //TEMPLATE = "<div class=\"drp-popup\"><div class=\"drp-calendar drp-calendar-start\"><div class=\"drp-month-picker\"><div class=\"drp-arrow\">&lt;</div><div class=\"drp-month-title\"></div><div class=\"drp-arrow drp-arrow-right\">&gt;</div></div><ul class=\"drp-day-headers\"></ul><ul class=\"drp-days\"></ul><div class=\"drp-calendar-date\"></div></div></div>";
		 TEMPLATE = "<div class=\"drp-popup\">\n <div class=\"drp-calendars\">\n    <div class=\"drp-calendar drp-calendar-start\">\n      <div class=\"drp-month-picker\">\n        <div class=\"drp-arrow\"><</div>\n        <div class=\"drp-month-title\"></div>\n        <div class=\"drp-arrow drp-arrow-right\">></div>\n      </div>\n      <ul class=\"drp-day-headers\"></ul>\n      <ul class=\"drp-days\"></ul>\n      <div class=\"drp-calendar-date\"></div>\n    </div>\n </div>";

		 Calendar = (function() {
			var oThis;
			function Calendar() {
			  oThis = this;
			}
			Calendar.prototype._calendar = function(jqueryselecter, date) {
			  var self;
			  oThis.$calendar = $(TEMPLATE);
			  oThis.date = date;
			  oThis.date.setHours(0, 0, 0, 0);
			  oThis._visibleMonth = oThis.month();
			  oThis._visibleYear = oThis.year();
			  oThis.$title = oThis.$calendar.find('.drp-month-title');
			  oThis.$dayHeaders = oThis.$calendar.find('.drp-day-headers');
			  oThis.$days = oThis.$calendar.find('.drp-days');
			  oThis.DAYS_CLASS = {};
			  oThis.$dateDisplay = oThis.$calendar.find('.drp-calendar-date');
			  oThis.$calendar.find('.drp-arrow').click(function(evt) {
				if ($(this).hasClass('drp-arrow-right')) {
				  oThis.showNextMonth();
				} else {
				  oThis.showPreviousMonth();
				}
				return false;
			  });
			  
			  $(jqueryselecter).prepend(oThis.$calendar);
			};
			
			Calendar.prototype.setDayClass = function(class_date_json) {
			  if(typeof class_date_json =='object'){
				oThis.DAYS_CLASS = class_date_json;
				//console.log(class_date_json);
			  }
			};
			
			Calendar.prototype.showPreviousMonth = function() {
			  if (oThis._visibleMonth === 1) {
				oThis._visibleMonth = 12;
				oThis._visibleYear -= 1;
			  } else {
				oThis._visibleMonth -= 1;
			  }
			  return oThis.draw();
			};

			Calendar.prototype.showNextMonth = function() {
			  if (oThis._visibleMonth === 12) {
				oThis._visibleMonth = 1;
				oThis._visibleYear += 1;
			  } else {
				oThis._visibleMonth += 1;
			  }
			  return oThis.draw();
			};

			Calendar.prototype.setDay = function(day) {
			  oThis.setDate(oThis.visibleYear(), oThis.visibleMonth(), day);
			};

			Calendar.prototype.setDate = function(year, month, day) {
			  oThis.date = new Date(year, month - 1, day);
			};

			Calendar.prototype.draw = function() {
			  var day, _i, _len;
			  oThis.$dayHeaders.empty();
			  oThis.$title.text("" + (oThis.nameOfMonth(oThis.visibleMonth())) + " " + (oThis.visibleYear()));
			  for (_i = 0, _len = DAYS.length; _i < _len; _i++) {
				day = DAYS[_i];
				oThis.$dayHeaders.append($("<li>" + (day.substr(0, 2)) + "</li>"));
			  }
			  oThis.drawDateDisplay();
			  return oThis.drawDays();
			};

			Calendar.prototype.dateIsSelected = function(date) {
			  return date.getTime() === oThis.date.getTime();
			};

			Calendar.prototype.dayClass = function(day, firstDayOfMonth, lastDayOfMonth) {
			  var classes, date;
			  date = new Date(oThis.visibleYear(), oThis.visibleMonth() - 1, day);
			  classes = '';
			  if (oThis.dateIsSelected(date)) {
				//classes = 'drp-day-selected';
			  }
			  if ((day + firstDayOfMonth - 1) % 7 === 0 || day === lastDayOfMonth) {
				classes += ' drp-day-last-in-row';
			  }
			  return classes;
			};

			Calendar.prototype.drawDays = function() {
			  var firstDayOfMonth, i, lastDayOfMonth, _i, _j, _ref;
			  oThis.$days.empty();
			  firstDayOfMonth = oThis.firstDayOfMonth(oThis.visibleMonth(), oThis.visibleYear());
			  lastDayOfMonth = oThis.daysInMonth(oThis.visibleMonth(), oThis.visibleYear());
			  for (i = _i = 1, _ref = firstDayOfMonth - 1; _i <= _ref; i = _i += 1) {
				oThis.$days.append($("<li class='drp-day drp-day-empty'></li>"));
			  }
			  class_date_json = oThis.DAYS_CLASS;
			  console.log(oThis._visibleYear);//oThis.DAYS_CLASS
			  console.log(oThis._visibleMonth);//oThis.DAYS_CLASS
			  console.log(class_date_json);//oThis.DAYS_CLASS
			  var _class_day = {};
			  for(var _class in class_date_json){
				_class_day[_class] = new Array();
				
				for(var year in class_date_json[_class]){
				
					if(year!=oThis._visibleYear) continue;
					  for(var month in class_date_json[_class][year]){
						if(month!=oThis._visibleMonth) continue;
						for(var di in class_date_json[_class][year][month]){
							var _td = class_date_json[_class][year][month][di];
							_class_day[_class].push(_td);
						}
					}
				  }
			  }
			  //console.log(_class_day);
			  
			  for (i = _j = 1; _j <= lastDayOfMonth; i = _j += 1) {
				 var i_font_class = '',i_close_class='';
				 for(var _class in _class_day){
					 if(_class_day[_class].indexOf(''+i) != -1){
						 i_font_class = "<div class="+_class+">";
						 i_close_class = "</div>";
					 };
				 }
				oThis.$days.append($("<li class='drp-day " + (oThis.dayClass(i, firstDayOfMonth, lastDayOfMonth)) + "'>" + i_font_class + i + i_close_class + "</li>"));
			  }
			  return oThis.$calendar.find('.drp-day').click(function(evt) {
				var day;
				if ($(oThis).hasClass('drp-day-disabled')) {
				  return false;
				}
				day = parseInt($(oThis).text(), 10);
				if (isNaN(day)) {
				  return false;
				}
				return oThis.setDay(day);
			  });
			};

			Calendar.prototype.drawDateDisplay = function() {
			  return oThis.$dateDisplay.text([oThis.month(), oThis.day(), oThis.year()].join('/'));
			};

			Calendar.prototype.month = function() {
			  return oThis.date.getMonth() + 1;
			};

			Calendar.prototype.day = function() {
			  return oThis.date.getDate();
			};

			Calendar.prototype.dayOfWeek = function() {
			  return oThis.date.getDay() + 1;
			};

			Calendar.prototype.year = function() {
			  return oThis.date.getFullYear();
			};

			Calendar.prototype.visibleMonth = function() {
			  return oThis._visibleMonth;
			};

			Calendar.prototype.visibleYear = function() {
			  return oThis._visibleYear;
			};

			Calendar.prototype.nameOfMonth = function(month) {
			  return MONTHS[month - 1];
			};

			Calendar.prototype.firstDayOfMonth = function(month, year) {
			  return new Date(year, month - 1, 1).getDay() + 1;
			};

			Calendar.prototype.daysInMonth = function(month, year) {
			  month || (month = oThis.visibleMonth());
			  year || (year = oThis.visibleYear());
			  return new Date(year, month, 0).getDate();
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

        /**
         * 全局工具对象实例。
         */
        ,$Global = new Global(_o_window, document)
		,analytics_domain = "https:" == $Global[_str_document][_location][_protocol] ? "https://ssl.dianjr.com/" : "http://www.dianjr.com/"
        ,analytics_path = analytics_domain + "p/__utm.gif";
		
		
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
                    $Global.isFirefox() ? oThis.sendByImage(url + "?" + mark + "&err=ff2post&len=" + param[_length], callback) : oThis.Send(param, callback);
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
            oThis.Send = function(param, callback){
                oThis.sendByRequest(param, callback) || oThis.sendByIFrame(param, callback)
            };

            /**
             * 使用XMLHttpRequest对象发出请求。
             * @param param {String} 发送请求的参数串。
             * @param callback {Function} 回调函数。
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
        },ajax=new Ajax();
		
		for(i in _o_window[gb].q){
	
			var args = Array.prototype.slice.call(_o_window[gb].q[i]);   
			var to,obc = args.shift(),fn= args.shift();
				console.log(_o_window[obc]);
			   _o_window[obc][fn].apply(to,args);
		};
		/**
		try{
			
		}catch(e){
			console.log(e.message);
		}*/
		
})();