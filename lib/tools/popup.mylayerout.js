/**
 * 
 */
(function (){
	mylayerout = (function(){
		function mylayerout() {
			oThis = this;
			popup.call(this); 
		}
		mylayerout.prototype = new popup();
		/**
		 * @param string 
		 */
		mylayerout.prototype.stricture = function(data) { 
			var single_label = ['img','input'];
			(function (){
				
				var content = [];
				//console.log();
				//处理参数生成页面
				for(i in data.data.params){
					
					//console.log();
					var wgstr = new String(data.data.params[i].widget);
					console.log(data.data.params[i]);
					var widget_attr = wgstr.split('.');
					var label = widget_attr[0];
					
					var type = widget_attr[1] || '';
					
					if(-1 != single_label.indexOf(label))
						widget = '<'+data.data.params[i].widget+'></'+data.data.params[i].widget+'>';
					else
						widget = '<'+data.data.params[i].widget+'/>';
					
					if(type!=''){
						$(widget).find(label).attr('type',type);
					}
					
					//数据获取 
					content.push(widget);
				}

				layer.open({
			        type: 1,
			        area: ['800px', '560px'],
			        shadeClose: true, //点击遮罩关闭
			        content: '\<\div style="padding:20px;">'+content.join()+'\<\/div>'
			    });
				//layer.msg("My Stricut"); 
				
			})(); 
		};
		
		return mylayerout;
	})();
})();