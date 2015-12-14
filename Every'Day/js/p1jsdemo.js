/**
 * Created by lasty on 2015/9/9.
 */


// ----------------------------------------------------- P1数据交换 ----------------------------------------------------//
function activeOnclick(param){
    var loginfo = param;
    var x, y;
    x= document.getElementById("subSelect");
    y= document.getElementById("contactUs");
    $(x).removeClass("active");
    $(y).removeClass("active");

    if(loginfo == 1)
    {
        $(x).addClass("active");
    }
    else
    {
        $(y).addClass("active");
        //window.location.href="http://www.codesign.io/board/9zgY5y";
    }
}

//----------------------------------------
function replaceUserInfo(){
    var username = localStorage.getItem('username');
    var counttime = 100;
    var exp = localStorage.getItem('exp');
    var level = localStorage.getItem('level');
    var perdefeat = localStorage.getItem('perdefeat');
    console.log(username);
    document.getElementById("username").innerHTML =username;
    document.getElementById("p1counttime").innerHTML =counttime;
    document.getElementById("p1exp").innerHTML =exp;
    document.getElementById("p1level").innerHTML =level;
    document.getElementById("p1perdefeat").innerHTML =perdefeat;
}

function setnowPlanid(planid){
    localStorage.setItem("nowPlanid",planid);
    window.location.href="P2.html";
}

function writeAllPlan2P1(planid,planname,counttime,createdate,startdate,userid){
    var planlistdemo = document.getElementById("div4project");
    var refChild = document.getElementById("insertFlag");
    var latestplan = document.createElement("div");
    latestplan.innerHTML =
        "<a onclick='setnowPlanid(" + planid +")'>" +
        "<div class='col-xs-4'>" +
        "<p></p>" +
        "<p class='text-center' id='p1project'>" + planname +"</p>" +
        "<img src='../source/img/u14.jpg' class='img-responsive center-block' style='width:60px; height:60px;'>" +
        "</div>" +
        "</a><div class='col-xs-8'>" +
        "<div class='col-xs-5'><p></p><p class='text-left'>称谓：</p></div>" +
        "<div class='col-xs-7'><p></p><p class='text-center' id='p1projectlevel'><a href='#'></a></p></div>" +
        "<div class='col-xs-3'><p class='text-left' id='p1projectlv'></p></div>" +
        "<div class='col-xs-9'><div class='progress'><div class='progress-bar' role='progressbar' style='width: 1%;'> 0 % Complete</div></div></div>" +
        "<div class='col-xs-12'><p class='text-left'>距离下次成绩还有<a href='#'>9</a>小时</p></div><br/></div>" +
        "<div class='col-xs-12'><hr style='margin-top: 10px;margin-bottom: 0;'></div>";
    planlistdemo.insertBefore(latestplan,refChild.nextSibling);

}

function setPlanList4P1(data){
    var planlength = data.x.length;
    localStorage.setItem("planlength",planlength);
    for(var i=0;i<=planlength;i++){
        var planid=data.x[i].planid;
        var planname=data.x[i].planname;
        var counttime=data.x[i].counttime;
        var createdate=data.x[i].createdate;
        var startdate=data.x[i].startdate;
        writeAllPlan2P1(planid,planname,counttime,createdate,startdate,userid);
    }
}

