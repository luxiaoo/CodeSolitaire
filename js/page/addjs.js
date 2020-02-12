var yc = null, xc = null;
var uname=null;
//编译----------------------------------------------------------------------yc.xc  ID查找
function compile() {
    var j = {};
    var da, res;
    alert("请稍后");

    j.yc = document.getElementById("yuandaima").value;
    j.xc = document.getElementsByClassName("ace_active-line").Text;
    da = JSON.stringify(j);
    console.log(j+'-------------------------------------------------------');
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
    var j = {};
    var da, res;
    j.yc = document.getElementById("yuandaima").value;
    j.xc = document.getElementById("ace_content").value;
    da=JSON.stringify(j);
     res =Ajaxfun('',da);
    console.log('res');
    if (res == 'OK') {
        document.getElementById('result').innerHTML = 'OK';
    }
    if (res == 'NO') {
        document.getElementById('result').innerHTML = 'Wrong\n' + res.data;
    }
    if(res=='err') {
        document.getElementById("stop").innerHTML = res.err;
    }
}
//基本信息
// uname显示位置不明确且基本信息表单id 不明确
function Info() {
    var j = {};
    var da, res;
    j.uname=document.getElementById('').value;
    da=JSON.stringify(j);
    res =Ajaxfun('',da);
    if(res!='null') {
        document.getElementById('user').value = 'res.uname';
        document.getElementById('tel').value = 'res.ph';
        document.getElementById('area').value = 'res.area';
        document.getElementById('lifetu').value = 'res.lag';
        var l=document.getElementById('fa');

        for(var x=0;x<=l.length;x++) {
        }
    }
    else {

    }
}

//创建过的项目----------------------------------------------复用MyCollection接口
function NewProjected() {
    var j = {};
    var da, res;
    var pname = null, pd = null;
    var l = 0;
    j.pname = document.getElementById('').value;
    j.pd = document.getElementById('').value;
    da = JSON.stringify(j);
    res = Ajaxfun('', da);
    l = res.length;
    if (res != null) {
        for (var i = 0; i <= res.length; i++) {
            //格式显示Data
        }

    } else {
        document.getElementById('MyCollection').innerHTML = '空空如也哦，去创建一个属于自己的项目吧'
    }
}
 //创建项目
function NewP() {
        var j = {};
        var da, res;
        var l=0;
        j.pname=document.getElementById('tit2').value;
        j.pd=document.getElementById('tit3').value;
        da=JSON.stringify(j);
        console.log(da);
        // res=Ajaxfun('',da);
    }
    //获取源码
function ycode() {
    var j = {};
    var da, res;
     j.yc=document.getElementsByClassName('ace-scroller').value;
    da=JSON.stringify(j);
    console.log(da);
}
//搜索-----------------复用
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
//发表评论
function AddMes() {
    var j = {};
    var da, res;
    j.uname=document.getElementById().value;
    j.onchate=document.getElementById().value;
    j.ontime=document.getElementById().value;
    da=JSON.stringify(j);
    res=Ajaxfun('',da);
    //返回数据放置位置

}
//续写按钮
function cntn() {
    var j = {};
    var da, res;
    j.td=document.getElementById('in').value;
    da=JSON.stringify(j);
    console.log(da);
    res=Ajaxfun('',da);
    //获取已有源码
}

