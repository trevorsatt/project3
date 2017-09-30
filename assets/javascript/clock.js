var clockEl = document.querySelector("#clock")

var time = function (){
	var today = new Date()
	var timeNow = today.toLocaleTimeString()
	clock.innerHTML = timeNow
}
setInterval(time, 1)