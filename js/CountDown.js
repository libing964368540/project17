function countDown(end_time,el,fn){
	 var sys_second = end_time-new Date().getTime(); 
//  var sys_second = time;
	var timer = setInterval(function(){
		  sys_second = end_time-new Date().getTime(); 
		if (sys_second > 0) {
//			sys_second -= 10;
			var day = Math.floor((sys_second /1000/ 3600) / 24);
			var hour = Math.floor((sys_second /1000/ 3600) % 24);
			var minute = Math.floor((sys_second /1000/ 60) % 60);
			var second = Math.floor(sys_second/1000 % 60);
			var haomiao = Math.floor(sys_second%1000/10);
              minute=minute>=10?minute:'0'+minute
              second=second>=10?second:'0'+second
              haomiao=haomiao>=10?haomiao:'0'+haomiao
            var arr = [minute,second,haomiao]
             if(sys_second>1200000){
                 el.text('20:00:00'); 
            }else{ 
            	el.text(arr.join(':'))
                
            }
          
		} else { 
			clearInterval(timer);
			el.text('00:00:00')
			fn();
		}
	}, 10)
}

//弹框

//答题结束后倒计时10秒的函数
function DownEnd(el,fn){
	var num = 10;
	var DownEndTime = setInterval(function(){
		if(num>0){
			num--;
			el.text('结束'+num+'s');
		}else{
			clearInterval(DownEndTime);
			fn();
			el.text('结束'+num+'s');
		}
		
	},1000)
}
