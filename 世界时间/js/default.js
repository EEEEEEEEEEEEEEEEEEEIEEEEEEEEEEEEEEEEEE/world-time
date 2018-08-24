(function(){
    var timer=document.querySelectorAll('span'),//span对象
        week=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],//星期数组
        timerStart=null;//定时器空对象
    star();//初始化
    function star(){//世界时间函数
        var date=new Date(),//时间对象
        UTC=date.getTime()+date.getTimezoneOffset()*60*1000;//UTC时间+时区时间转化毫秒数
        timeArr=[//世界各地时间数组
            changedate(UTC+1*60*60*1000),
            changedate(UTC+2*60*60*1000),
            changedate(UTC+3*60*60*1000),
            changedate(UTC+5*60*60*1000),
            changedate(UTC+8*60*60*1000),
            changedate(UTC+9*60*60*1000),
            changedate(UTC+10*60*60*1000),
            changedate(UTC+12*60*60*1000),
            changedate(UTC-4*60*60*1000),
            changedate(UTC-3*60*60*1000)
        ];

        // for(i=0,len=timeArr.length;i<len;i++){
        //     timer[i].innerHTML=timeArr[i];
        // };

        for(key in timeArr){//timerArr内容添加到span标签内
            timer[key].innerHTML=timeArr[key];
        }
    };

    function changedate(d){//获取时间对象
        var date=new Date(d),
        YY=addZero(date.getFullYear()),
        MM=addZero(date.getMonth()+1),
        DD=addZero(date.getDate()),
        hh=addZero(date.getHours()),
        mm=addZero(date.getMinutes()),
        ss=addZero(date.getSeconds()),
        ww=(date.getDay());
        return YY+' 年'+MM+' 月'+DD+' 日 '+week[ww]+': '+ hh +' 时'+mm+' 分'+ss+' 秒';//返回参数
    };

    function addZero(n){//数值小于10添加0两位数
        return n<10?'0'+n:n;
    };
    timerStart=setInterval(star,1000);//定时器开启1s
})();