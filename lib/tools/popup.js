/**
 * 
 */
(function (){
	popup = (function(){
		function popup() { 
			oThis = this; 
			$B.call(this); 
		}
		
		popup.prototype == new $B();
		/**
		 * @param string 
		 */
		popup.prototype.stricture = function(data) { 
			(function (){ 
				var content = [];
//				
//				var element = document.createElement('a');
//				  parentElement.appendChild(element);
//				  element.innerHTML = anchorText;
//				  element.className = anchorClass;
//				content = document.createElement('div');
//				
				
				layer.open({
			        type: 1,
			        area: ['600px', '360px'],
			        shadeClose: true, //点击遮罩关闭
			        content: '\<\div style="padding:20px;">'+content.join()+'\<\/div>'
			    });
		
			})(); 
		};
		return popup;
	})();
})();