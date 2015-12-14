/**
 * Created by lasty on 2015/9/9.
 */

//------------------------------------------------------Register Login Page----------------------------------------------//

//备用函数
//document.getElementById("tokeninfo").setAttribute("value" , data.username);


var token;
var userid;
//用户名密码提交获取token,post方式，

function identifyUserInfo(url,requestDataHandle,identify){
    (function($) {
        $.ajax({
            type: 'POST',
            url: url,
            async: true,
            contentType: "application/json",
            data:identify,
            dataType: 'json',
            success: function(data) {
                requestDataHandle(data);
            },
            error: function(e) {
                console.log(e.message);
                $('#data').html('the error was thrown');
            }
        });
    })(jQuery);
}

//附带token验证，获取用户相关信息公用接口
function requestUserInfoPost(url,requestDataHandle,token,param){
    (function($) {
        $.ajax({
            type: 'POST',
            url: url,
            async: true,
            headers:{"Authorization":'JWT '+ token},
            contentType: "application/json",
            data:param,
            dataType:'json',
            success: function(data) {
                requestDataHandle(data);
            },
            error: function(e) {
                console.log(e.message);
                $('#data').html('the error was thrown');
            }
        });
    })(jQuery);
}

//附带token验证，获取用户相关信息公用接口
function requestUserInfoGet(url,requestDataHandle,token,param){
    (function($) {
        $.ajax({
            type: 'GET',
            url: url,
            async: true,
            headers:{"Authorization":'JWT '+ token},
            data:param,
            dataType:'json',
            success: function(data) {
                requestDataHandle(data);
            },
            error: function(e) {
                console.log(e.message);
                $('#data').html('the error was thrown');
            }
        });
    })(jQuery);
}


//url的字符串拼装
function url2Callback(url){
    var host= "http://172.16.87.175:5000/api";
    return host + url;
}

//-------------------------------------------已授权，附带token请求,查询plan----------------------------------------------------//
function getSinglePlanInfo(){
    var requestDataHandle = function (data) {
        localStorage.setItem("requestPlanInfo", JSON.stringify(data));
        if(data.errcode){
            var errcode1 =  JSON.stringify(data.errcode);
            if(errcode1 =401001){}
        }
        else{
            var planid = JSON.parse(localStorage.getItem('requestPlanInfo')).planid;
            var planname = JSON.parse(localStorage.getItem('requestPlanInfo')).planname;
            var counttime = JSON.parse(localStorage.getItem('requestPlanInfo')).counttime;
            var createdate = JSON.parse(localStorage.getItem('requestPlanInfo')).createdate;
            var startdate = JSON.parse(localStorage.getItem('requestPlanInfo')).startdate;
            document.getElementById("planname").innerHTML =planname;
            document.getElementById("counttime").innerHTML =counttime;
            document.getElementById("p1level").innerHTML =level;
            document.getElementById("p1perdefeat").innerHTML =perdefeat;
        }
    };
    var planid = localStorage.getItem('nowPlanid');
    token = localStorage.getItem('token');
    userid = localStorage.getItem('userid');
    var param  = 'userid=' + userid+ '&'+ 'planid=' +  planid;
    var url ="/plan/show.json";
    url = url2Callback(url);
    requestUserInfoGet(url,requestDataHandle,token,param);
}
//-------------------------------------------已授权，附带token请求,查询allplan----------------------------------------------------//
function getAllPlanInfo(){
    var requestDataHandle = function (data) {
        localStorage.setItem("requestAllPlanInfo", JSON.stringify(data));
        setPlanList4P1(data);
        console.log(data);
    };
    token = localStorage.getItem('token');
    userid =  localStorage.getItem('userid');
    var param =   'userid=' + userid;
    var url ="/plan/showall.json";
    url = url2Callback(url);
    requestUserInfoGet(url,requestDataHandle,token,param);
}

//-------------------------------------------已授权，附带token请求,查询用户信息json----------------------------------------------------//
function getuserInfo(){
    var requestDataHandle = function (data) {
        if(data.errcode){
            var errcode1 =  JSON.stringify(data.errcode);
            if(errcode1 =401001){}
        }
        else{
            localStorage.setItem("userid", JSON.stringify(data.userid));
            localStorage.setItem("username", JSON.stringify(data.username));
            localStorage.setItem("perdefeat", JSON.stringify(data.perdefeat));
            localStorage.setItem("level", JSON.stringify(data.level));
            localStorage.setItem("exp", JSON.stringify(data.exp));
            localStorage.setItem("counttime", JSON.stringify(data.counttime));
            window.location.assign("P1.html");//页面跳转
        }
    };
    token =  localStorage.getItem('token');
    userid = localStorage.getItem('userid');
    var url ="/user/all.json";
    url = url2Callback(url);
    var param =   'userid=' + userid;
    requestUserInfoGet(url,requestDataHandle,token,param);
}

//-------------------------------------------------用户注册----------------------------------------------------//

function registerInfoPost(){
    var parta = document.identifyForm.userinfo.value;
    var partb = document.identifyForm.password1.value;
    var json = '{"username":'+ '"'+ parta + '"'+ ',' + '"password":' + '"'+ partb+ '"'+'}';

    var requestDataHandle = function (data) {
        if(!data.username){
            alert("注册失败！");
        }
        else
        {
            localStorage.setItem("username", JSON.stringify(data.username));
            window.location.href="login.html";//页面跳转
        }

    };
    var url ="/user/register";
    url = url2Callback(url);
    identifyUserInfo(url,requestDataHandle,json);
}

//-------------------------------------------------用户登录----------------------------------------------------//

function loginInfoPost(){
    var parta = document.identifyForm.userinfo.value;
    var partb = document.identifyForm.password.value;
    var json = '{"username":'+ '"'+ parta + '"'+ ',' + '"password":' + '"'+ partb+ '"'+'}';

    var requestDataHandle = function (data) {
        localStorage.setItem("userid", data.userid);
        localStorage.setItem("token",data.token);
        if(data.errcode){
            var errcode1 = data.errcode;
            if(errcode1 ==400001){}
            else if(errcode1 ==400002){}
            else if(errcode1 ==400003){}
        }
        else{
            getuserInfo();
        }
    };
    var url ="/user/auth";
    url = url2Callback(url);
    identifyUserInfo(url,requestDataHandle,json);
}



//------------------------------------------------login check-------------------------------------------------------//
function logincheck(){
    token = localStorage.getItem('token');
    userid = localStorage.getItem('userid');

    if(!token&&!userid) {
        var requestDataHandle = function (data) {
            if (data.errcode){
                var errcode1 =  data.errcode;
                if (errcode1 = 401001) {}
            }
            else {
                localStorage.setItem("userid", JSON.stringify(data.userid));
                localStorage.setItem("username", JSON.stringify(data.username));
                localStorage.setItem("perdefeat", JSON.stringify(data.perdefeat));
                localStorage.setItem("level", JSON.stringify(data.level));
                localStorage.setItem("exp", JSON.stringify(data.exp));
                localStorage.setItem("counttime", JSON.stringify(data.counttime));
                window.location.assign("P1.html");//页面跳转
            }
        };
        var url = "/user/all.json";
        url = url2Callback(url);
        var param = 'userid=' + userid;
        requestUserInfoGet(url, requestDataHandle, token, param);
    }
}


//-------------------------------------------已授权，附带token请求,创建plan----------------------------------------------------//
function postPlanCreation(){
    var requestDataHandle = function (data) {
        localStorage.setItem("createInfo", JSON.stringify(data));
        localStorage.setItem("nowPlanid", JSON.stringify(data.planid));
        //CreatPage2setFlag();
        window.location.href="P2.html";
    };
    planname = localStorage.getItem("creatprojectName");
    token = localStorage.getItem('token');
    userid =  localStorage.getItem("userid");
    var json  = '{"userid":'+ '"'+ userid + '"'+ ',' + '"planname":' + '"'+ planname+ '"' + '}';
    var url ="/plan/create";
    url = url2Callback(url);
    requestUserInfoPost(url,requestDataHandle,token,json);
}






//----------------------------------------------P2 单独项目 run, pause, stop操作------------------------------------------//

function PlanActionPost(act) {
    var requestDataHandle = function (data) {
        localStorage.setItem("requestPlanInfo", JSON.stringify(data));
        console.log(data);
        //区分三种操作，stop就在此更新界面。run和pause保持不变。

    };
    token = localStorage.getItem('token');
    userid = localStorage.getItem('userid');
    var planid = localStorage.getItem('nowPlanid');
    var action = act;
    var date = new Date();
    console.log(date);
    var M = date.getMonth() +1 ;
    M=checkNum(M);
    var D = date.getDate();
    D=checkNum(D);
    var H = date.getHours();
    H=checkNum(H);
    var MIN = date.getMinutes();
    MIN=checkNum(MIN);
    var S = date.getSeconds();
    S=checkNum(S);
    var actiontime = date.getFullYear()+'-'+ M +'-'+ D +' '+H+':'+MIN+':'+S;
    console.log(actiontime);
    var json  = '{"userid":'+ '"'+ userid + '"'+ ',' + '"planid":' + '"'+ planid+ '"'+ ',' +  '"action":' + '"'+ action+ '"'+ ',' +  '"actiontime":' + '"'+ actiontime+ '"' + '}';
    var url = "/dailymark/mark";
    url = url2Callback(url);
    requestUserInfoPost(url, requestDataHandle, token, json);
}