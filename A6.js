$(function(){
	$('#year').val('2020');
	$('#month').val('1');
	$('#day').val('25');

	$('#tYear').text('2020');
	$('#tMonth').text('1');
	$('#tDay').text('25');

	$('.in').blur(function(){
		var y = $('#year').val();
	    var m = $('#month').val();
	    var d = $('#day').val();

	    $('#tYear').text(y);
	    $('#tMonth').text(m);
	    $('#tDay').text(d);

	})

	var tm=null;

	$('#start').click(function(){
		tm=setInterval(upDateTime,1000);
		upDateTime();


	});


    function upDateTime(){

        // 1获取目标时间
        var target_y = $('#tYear').text();
	    var target_m = $('#tMonth').text()-1;
	    var target_d = $('#tDay').text();

	    var target_date = new Date(target_y,target_m,target_d);
	    var now_date = new Date();

	   // 2求时间差
	    var i_Time = (target_date.getTime()-now_date.getTime())/1000;

        if (i_Time<=0) {
        	i_Time=0;
        	alert('日期已过！');
        	if (tm!=null) {
        		clearInterval(tm);
        	}
        }


		// 3转化为某天某小时某分某秒
	    var over_d = parseInt(i_Time/86400);
	    i_Time = i_Time%86400;

	    var over_h = parseInt(i_Time/3600);
	    i_Time = i_Time%3600;

	    var over_m = parseInt(i_Time/60);
	    i_Time = i_Time%60;

	    var over_s = parseInt(i_Time);
	    

		// 4更新时间值
	    $('#iDay').text(fillZero(over_d,3));
	    $('#iHour').text(fillZero(over_h,2));
	    $('#iMin').text(fillZero(over_m,2));
	    $('#iSec').text(fillZero(over_s,2));
	    
    }
	
// 补0
    function fillZero(time,digit){

    	time=time + '';
    	while(time.length<digit){
    		time = '0' + time;
    	}
        return time;

    }

})




// window.onload=function () {
//     setInterval(function () {
//         var  s1 = new Date();
//         // 多少毫秒
//         var  s0 =s1.getMilliseconds();
//         var  szz=s1.getSeconds()+s0/1000;
//         var  mzz=s1.getMinutes()+szz/60;
//         var  hzz=s1.getHours()%12+mzz/60;
//         // '+h*30+(m/60)*30+'+'deg';
//         $("sz").style.transform='rotate('+hzz*30+'deg)';
//         $("fz").style.transform='rotate('+mzz*6+'deg)';
//         $("mz").style.transform='rotate('+szz*6+'deg)';
//     },10);
// };

// function $(name) {
//     return typeof name==='string'?document.getElementById(name):null;
// }