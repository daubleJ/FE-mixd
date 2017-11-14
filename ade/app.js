var express = require('express')    //加载express模块
var app = express()
	var port = process.env.PORT || 3000  //监听的端口
app.use(express.static(__dirname + '/'))
app.get('/loader', function (req, res) {
   console.log("/loader");
   res.sendfile('./loader.js');
})

app.listen(port,function(){
                console.log('ADE Node is on port' + port + '!' )
})
