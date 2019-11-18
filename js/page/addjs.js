var yc = null, xc = null;
var uname=null;
//编译
function compile() {
    var j = {};
    var da, res;
    alert("请稍后");
    j.yc = document.getElementById("yuandaima").value;
    j.xc = document.getElementById("ace_content").value;
    da = JSON.stringify(j);
    res = Ajaxfun('', da);
    if (res == 'OK') {
        document.getElementById('result').innerHTML = 'OK';
    }
    if (res == 'No') {
        document.getElementById('result').innerHTML = 'Wrong\n' + res.data;
    }
}
//停止编译
//参数不明确
function  stopcomplie() {

}
//基本信息
// uname显示位置不明确且基本信息表单id 不明确
function Info() {
    var j = {};
    var da, res;
    j.uname=document.getElementById('top').value;
    da=JSON.stringify(j);
    res =Ajaxfun('',da);

}

//创建项目
function NewProject() {
    var j = {};
    var da, res;
    var pname=null,pd=null;
    j.pname=document.getElementById('').value;
    j.pd=document.getElementById('').value;
    da=JSON.stringify(j);
    res=Ajaxfun('',da);

}
//搜索
function search() {
    var j = {};
    var da, res;
    j.pk=document.getElementById('').value;
    da=JSON.stringify(j);
    res=Ajaxfun('',da);
    if(res!=null)
    {
        //格式显示Data
    }

}
