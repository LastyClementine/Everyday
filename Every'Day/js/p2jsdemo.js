/**
 * Created by lasty on 2015/9/9.
 */

//------设置标志位，区分请求P2页面的路径------//
//var inflag;
//function CreatPage2setFlag(){
//    inflag=1;
//}
//
//function HomePage2setFlag(){
//    inflag=2;
//}
//
//function inwaycheck(){
//    if(inflag=1){
//        getSinglePlanInfo();
//    }
//    else if(inflag=2){
//        getSinglePlanInfo();
//    }
//    else{alert("err,返回主界面!")}
//}


//---------------------------------------------------- P2动画 ----------------------------------------------------------//
//秒表初始化设置
function indicatorContainerset(){

    var radialObj = $('#indicatorContainer').data('radialIndicator');
    radialObj.option('interpolate',false);
    radialObj.option('radius',55);
    radialObj.option('barWidth',15);
    radialObj.option('roundCorner',false);
    radialObj.option('frameTime',1000);
    radialObj.option('frameNum',500);
    radialObj.option('maxValue',60000);
    radialObj.value(0);
    radialObj.animate(0);
}

//秒表计时，动画ing
function indicatorContainerChange(valueT,animateV){

    var radialObj = $('#indicatorContainer').data('radialIndicator');
    radialObj.value(valueT);
    radialObj.animate(animateV);
}

//秒表归零，动画退回
function indicatorContainer2Zero(valueT){

    var radialObj = $('#indicatorContainer').data('radialIndicator');
    radialObj.option('frameTime',10);
    radialObj.value(valueT);
    radialObj.animate(0);
}


//计时器
var a = 0;
var s = 0;
var m = 0;
var h = 0;
var t;
var ms=0;
var state=0;

//秒表字符串补位
function checkNum(i)
{
    if (i<10)
    {i="0" + i}
    return i
}
//毫秒补位
function checkMs(i)
{
    if (i<10){i="00" + i}
    if (i<100){i="0" + i}
    return i
}

//毫秒换算，统一输出格式
function ms2more(ms) {
    s=parseInt(ms/1000);
    ms=ms%1000;
    m=parseInt(s/60);
    s=s%60;
    h=parseInt(m/60);
    m=m%60;

    h=checkNum(h);
    m=checkNum(m);
    s=checkNum(s);
    ms=checkMs(ms);
    return t= h+':'+m+':'+s;
}

//秒表开始/暂停切换
function startstop() {
    if (state == 0) {
        state = 1;
        document.getElementById("starstopbtn").innerHTML='暂停';
        PlanActionPost("run");
        then = new Date();
        then.setTime(then.getTime() - ms);
    } else {
        state = 0;
        now = new Date();
        ms = now.getTime() - then.getTime();
        t=ms2more(ms);
        document.getElementById("time").innerHTML=t;
        document.getElementById("starstopbtn").innerHTML='开始';
        PlanActionPost("pause");
        indicatorContainerChange(ms,ms);
    }
}
//秒表归零
function swreset() {
    indicatorContainer2Zero(ms);
    state = 0;
    ms = 0;
    t=ms2more(ms);
    document.getElementById("time").innerHTML=t;
    document.getElementById("starstopbtn").innerHTML='开始';
    PlanActionPost("stop");

}
//秒表数字跑动
function display() {
    setTimeout("display();", 30);
    if (state == 1)  {now = new Date();
        ms = now.getTime() - then.getTime();
        t=ms2more(ms);
        indicatorContainerChange(ms,60000);
        document.getElementById("time").innerHTML=t;
    }
}

function chgClr(m){
    var colorNum = m;
    if (colorNum ==1){}
    if (colorNum ==2){}
    if (colorNum ==3){}
    if (colorNum ==4){}
    if (colorNum ==5){}
    if (colorNum ==6){}
    if (colorNum ==7){}
    if (colorNum ==8){}
    if (colorNum ==9){}

}