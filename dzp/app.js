var express = require('express')    //加载express模块
var app = express()
	var port = process.env.PORT || 3080 //监听的端口
app.use(express.static(__dirname + '/'))
app.get('/dzp', function (req, res) {
   console.log("/dzp");
   res.sendfile('./index.html');
})
app.listen(port,function(){
	console.log('着陆页面 is on port' + port + '!' )
})
