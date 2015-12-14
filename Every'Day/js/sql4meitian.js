/**
 * Created by lasty on 2015/9/9.
 */



//----------------------------------------------------项目数据库 javascript -----------------------------------------//

//创建一个数据库对象
//4个参数分别是 数据库名,版本号，数据库的描述，数据库大小

//---------数据库创建--------//
var db = openDatabase('sql4meitian','1.0','userPlanList',1024000);

//if (!db) {
//    alert("数据库创建失败！");
//} else {
//    alert("数据库创建成功！");
//}

//---------数据表创建--------//
function createPlanTable(){
    db.transaction( function(tx) {
        tx.executeSql(
            "create table if not exists planlist (planid TEXT,planname TEXT,counttime TEXT,createdate INTEGER,startdate TEXT,userid TEXT)",[],
            function(tx,result){ alert('创建成功'); },
            function(tx, error){ alert('创建失败:' + error.message);
            });
    });
}


//---------数据表操作--------//
//增
function insertSql(a,b,c,d,e,f) {
    db.transaction(function (tx) {
        tx.executeSql(
            "insert into planlist (planid,planname,counttime,createdate,startdate,userid) values(?,?,?,?,?,?)",
            [a, b, c, d, e, f],
            function () {
                alert('添加数据成功');
            },
            function (tx, error) {
                alert('添加数据失败: ' + error.message);
            }
        );
    });
}


//删
function deleteSql(a){
    db.transaction(function (tx) {
        tx.executeSql(
            "delete from planlist where planid= ?",
            [a],
            function (tx, result) {},
            function (tx, error) {
                alert('删除失败: ' + error.message);
            }
        );
    });
}

//改
function updateSql(a,b,c,d,e,f) {
    dataBase.transaction(function (tx) {
        tx.executeSql(
            "update planlist set planid=? where planname=? where counttime=? where,createdate=? where startdate=? where userid=?",
            [a,b,c,d,e,f],
            function (tx, result) {},
            function (tx, error) {
                alert('更新失败: ' + error.message);
            }
        );
    });
}


//查
function querySql(){
    db.transaction(function (tx) {
        tx.executeSql(
            "select * from planlist", [],
            function (tx, result) { //执行成功的回调函数
                var planlength = localStorage.getItem("planlength");
                for(var i=0;i<=planlength;i++){
                    var a= result.rows[i].item[fieldname];
                }
            },
            function (tx, error) {
                alert('查询失败: ' + error.message);
            }
        );
    });
}
