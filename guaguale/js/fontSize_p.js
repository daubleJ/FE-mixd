var designWidth = 640;
var body = document.documentElement || document.body;
var clientWidth = body.clientWidth;
clientWidth = clientWidth > 640 ? 640 : clientWidth;
body.style.fontSize=clientWidth/designWidth*100+'px';