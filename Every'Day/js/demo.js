/**
 * Created by tidus on 2015/8/21.
 */


//----------------------------------------------------封锁线-----------------------------------------------------------//
function getApiJson(){
    username = 'wangzheng';
    document.cookie="username="+ username;
}


function readCookies(){
    var x=document.cookie;
    var ti=x.split(';');
    for(var i=0; i<ti.length;i++)
    {
        var xy=ti[i].trim();
        if(xy.indexOf(username)==0)
            return xy.substring(username.length, xy.length);
    }
    return""
}


function clearCookies(){
    document.cookie = "expires=Thu, 01 Jan 1970 00:00:00 GMT";
}


function requestCookies() //找服务器请求。
{
    var xmlhttp;
    var xxx;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        console.log('dasda');
        console.log(xmlhttp.readyState);
        console.log(xmlhttp.status);
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            console.log('dasddsdasda');
            document.getElementById("xixi").innerHTML=xmlhttp.responseXML;
            console.log(xmlhttp.responseXML);
        }
    };
    xmlhttp.open("GET","http://172.16.87.175:5000/login",true);
    xmlhttp.send();
}


function requestCookies2(){
    $.getJSON("http://172.16.87.175:5000/login?callback=?", function(data) {

        var html = '<ul>';
        for(var i = 0; i < data.length; i++)
        {
            html += '<li>' + data[i] + '</li>';
        }
        html += '</ul>';

        $('#divCustomers').html(html);
    });
}

function add()
{
    var loginfo = 1;
    return function(){
        var x, y;
        x= document.getElementById("logout");
        y= document.getElementById("customer");

        if(loginfo == 1)
        {
            loginfo=0;
            x.style.display = "none";
            y.style.display = "block";
        }
        else
        {
            loginfo=1;
            x.style.display = "block";
            y.style.display = "none";
        }
    }
}
//----------------------------------------------------封锁线-----------------------------------------------------------//