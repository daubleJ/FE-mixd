var express = require('express')  ;  //加载express模块
var app = express();
	var port = process.env.PORT || 3000 ; //监听的端口
app.use(express.static(__dirname + '/static'));
app.get('/loader', function (req, res) {
   console.log("/loader");
   res.sendfile('./static/loader.js');
});
app.use(function (req , res){
   res.sendfile('./static/index.html')
});

app.listen(port,function(){
		console.log('TechNode is on port' + port + '!' ) 
});
