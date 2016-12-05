/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-29 10:21:07
 * @version $Id$
 */


(function(){

$(document).ready(function () {
	//背景音乐 
	var audio = document.getElementById('audio');
	var music = document.getElementById('music');
	var span = music.getElementsByTagName('span');
	var main = document.getElementById('m_main');
	var ifstop = 0;

	main.style.webkitAnimation = main.style.animation = 'music 1s ease-out infinite';
	
	$("#music").on("click",function(){
	//music.addEventListener('touchstart',function(){
		if(ifstop == 0){
			audio.pause();
			main.style.webkitAnimation = main.style.animation = 'none';
			for(var i = 0; i < span.length; i++){
				span.item(i).style.display = 'none';
			}
			ifstop = 1;
		}else{
			audio.play();
			main.style.webkitAnimation = main.style.animation = 'music 1s ease-out infinite';
			for(var i = 0; i < span.length; i++){
				span.item(i).style.display = 'block';
			}	
			ifstop = 0;
		}
	//},false);
	});
	
});
})($)