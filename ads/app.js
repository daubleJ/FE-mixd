var express = require('express')    //加载express模块
var app = express()
	var port = process.env.PORT || 8008  //监听的端口
app.use(express.static(__dirname + '/static'))
app.get('/adx', function (req, res) {
   console.log("/ads");
   res.sendfile('./ads.html');
})
app.get('/ad.jpeg', function (req, res) {
   console.log("/jpeg");
   res.sendfile('./ad.jpeg');
})
	app.use(function (req , res){
			  res.sendfile('./no_ad.html')
			  })

app.listen(port,function(){
		console.log('TechNode is on port' + port + '!' ) 
})
