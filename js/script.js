var data=['iphone5','ipad','三星笔记本','惠普打印机','50元充值卡','100元超市购物券'];
    timer=null;
    flag=0;
window.onload=function(){
	var play=document.getElementById('play'),
	    stop=document.getElementById('stop');
	// 开始抽奖
	play.onclick=playFun;
	stop.onclick=stopFun;
	// 键盘事件
	document.onkeyup=function(event){
		// 首先判断按下的是不是回车键event对象keyCode属性是键盘的按键编码
		event=event || window.event;
		console.log(event.keyCode);
		if (event.keyCode == 13) {
			if (flag ==0) {
				playFun();
				flag=1;
			} else {
				stopFun();
				flag=0;
			}
		}
		// 
		
	}

}
function playFun(){
	var title=document.getElementById('title');
	clearInterval(timer);
	timer=setInterval(function(){
		var random=Math.floor(Math.random()*data.length);
		// console.log(random);
		title.innerHTML=data[random];
	}, 50);
    play.style.background="#999";
}

function stopFun(){
	clearInterval(timer);
	play.style.background='#036';
}