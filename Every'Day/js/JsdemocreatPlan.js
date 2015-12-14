/**
 * Created by tidus on 2015/9/9.
 */
//----------------------------------------save  creation 4  project-------------------------------------------------//

//name
var projectName;


function selectone(obj){
    obj.class="active";
    projectName = "one";
    localStorage.setItem("creatprojectName",projectName);
}
function selecttwo(obj){
    obj.class="active";
    projectName = "two";
    localStorage.setItem("creatprojectName",projectName);
}
function selectthree(obj){
    obj.class="active";
    projectName = "three";
    localStorage.setItem("creatprojectName",projectName);
}
function selectfour(obj){
    obj.class="active";
    projectName = "four";
    localStorage.setItem("creatprojectName",projectName);
}
function selectfive(obj){
    obj.class="active";
    projectName = "five";
    localStorage.setItem("creatprojectName",projectName);
}
function selectsix(obj){
    obj.class="active";
    projectName = "six";
    localStorage.setItem("creatprojectName",projectName);
}
function selectseven(obj){
    obj.class="active";
    projectName = "seven";
    localStorage.setItem("creatprojectName",projectName);
}
function selecteight(obj){
    obj.class="active";
    projectName = "eight";
    localStorage.setItem("creatprojectName",projectName);
}
function selectnine(obj){
    obj.class="active";
    projectName = "nine";
    localStorage.setItem("creatprojectName",projectName);
}
function selectten(obj){
    obj.class="active";
    projectName = "ten";
    localStorage.setItem("creatprojectName",projectName);
}
function selecttenone(obj){
    obj.class="active";
    projectName = "tenone";
    localStorage.setItem("creatprojectName",projectName);
}
function selecttentwo(obj){
    obj.class="active";
    projectName = "tentwo";
    localStorage.setItem("creatprojectName",projectName);
}

//-------------------------------------------save project lv------------------------------------------//
//projectlvl
var projectlevel;

function resetBtn(){
    document.getElementsByName("button").className="btn btn-info btn-block";
}

function selectlv1(obj){
    resetBtn();
    obj.className="btn btn-primary btn-block";
    projectlevel = "one";
    localStorage.setItem("creatprojectLv", projectlevel);//包括各类信息
}
function selectlv2(obj){
    resetBtn();
    obj.className="btn btn-primary btn-block";
    projectlevel = "two";
    localStorage.setItem("creatprojectLv", projectlevel);//包括各类信息
}
function selectlv3(obj){
    resetBtn();
    obj.className="btn btn-primary btn-block";
    projectlevel = "three";
    localStorage.setItem("creatprojectLv", projectlevel);//包括各类信息
}
function selectlv4(obj){
    resetBtn();
    obj.className="btn btn-primary btn-block";
    projectlevel = "four";
    localStorage.setItem("creatprojectLv", projectlevel);//包括各类信息
}
function selectlv5(obj){
    resetBtn();
    obj.className="btn btn-primary btn-block";
    projectlevel = "five";
    localStorage.setItem("creatprojectLv", projectlevel);//包括各类信息
}


