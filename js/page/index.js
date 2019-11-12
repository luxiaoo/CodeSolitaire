var BASE_URL = 'localhost'
var uname = null, pho = null;
//验证码
var iscode = null;
function yzm() {
    // spop({template:"登陆成功",aytoclose:2000});
    var j = {};
    var da, res;
    var id;
    j.pho = document.getElementById('denglu').value;
    // console.log(j);
    var reg = /^(((13[0-9])|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if (!reg.test(j.pho)) {
        alert('请输入有效的手机号码！');
    } else {
        da = JSON.stringify(j);
        // new Ajaxfun('http://47.94.18.218:8006/acceptsms/send1',da);
        res = Ajaxfun('http://47.94.18.218:8006/acceptsms/send1', da);
        setTime();
        if (res.state === 1) {
            // iscode=res.code;
            console.log("1111111111111111111")
        }
        else {
            alert("请查看网络连接，然后重试，(●'◡'●)")
        }
    }
}

// //60s倒计时显示
var countdown = 60;
function setTime() {
    // alert("ok")
    if (countdown == 0) {
        // obj.prop('disabled', false);
        document.getElementById("code").innerHTML = "点击获取验证码";
        countdown = 60;//60秒过后button上的文字初始化,计时器初始化;
        return;
    } else {
        // obj.prop('disabled', true);
        document.getElementById("code").innerHTML = countdown + "s" + "后重新发送"
        countdown = countdown - 1;
    }
    setTimeout(function () { setTime() }, 1000) //每1000毫秒执行一次        }// if()
}

//登陆接口
function denglu() {
    var j = {};
    var da, res;
    j.ph = document.getElementById("yzm").value;
    da = JSON.stringify(j);
    res = Ajaxfun('http://47.94.18.218:8006/Judge_login/judgelogin', da);
    if (res.state === 1) {
        //spop({ tempdir: "登陆成功", aytoclose: 2000 });
        alert("登陆成功")
    }
    else if (res.state === 0) {
        // document.getElementById("login").innerHTML = "注册成功，点击这里完善您的信息嗷，(●'◡'●)";
    }
}


//登陆弹窗
    $('#login').click(function () {
        $('.mypop').show();
    });
    $('.close, #cancel').click(function () {
        $('.mypop').hide();
    })

    
// //我的收藏
// function shoucang() {
//     var j={};
//     if(document.getElementById("login").innerHTML==="注册成功，点击这里完善您的信息嗷，(●'◡'●)"){
//         alert("您还没有收藏的项目嗷！");
//     }
//     if(name!=null){
//         var j={},da,res;
//         j.uname=name;
//         da=JSON.stringify(j);
//         res=Ajaxfun("我的收藏",da);
//         getfrom(res);
//     }
//     else
//     Ajaxfun("我的收藏url",)
//
// }
// function getpk() {
//     var a=new  Array(3);
//     // var a=new  Array(res.data.length());
//     var res,hot;
//     res=getAjaxfun("url");
//     document.getElementById("pk1").innerHTML="0";
//     document.getElementById("pk2").innerHTML="1";
//     document.getElementById("pk3").innerHTML="2";
//     // document.getElementById("pk1").innerHTML=res.pk[0];
//     // document.getElementById("pk2").innerHTML=res.pk[1];
//     // document.getElementById("pk3").innerHTML=res.pk[2];
//     hot=document.getElementById("hot");
//     sol=document.createElement("ol");
//     for(var i=0;i<res.data.length;i++){
//         sli=document.createElement("li");
//         sli.className=hot1;
//         sli.id="sli"+i;
//         hot.appendChild(sli);
//         a[i]="sli"+i;
//     }
//     for(var i=0;i<res.data.length;i++){
//         a[i]="sli"+i;
//         var nadiv=document.createElement("div");
//         nadiv.className="title";
//         nadiv.id="nadiv"+i;
//         document.getElementByI(a[i]).appendChildren(nadiv);
//         a[i]="nadiv"+i;
//         var na=document.createElement("a");
//         na.innerHTML=res.data.pname[i];
//         na.style.fontSize="25dp";
//         na.href="cntn0project.html";
//         na.class="a2";
//         document.getElementById(a[i]).appendChild(na);
//     }
//     for(var i=0;i<res.data.length;i++){
//         a[i]="sli"+i;
//         var dl=document.createElement("dl");
//         dl.className="other1";
//         dl.id="dl"+i;
//         document.getElementById(a[i]).appendChild(dl);
//         a[i]="dl"+i;
//         var dt=document.createElement("dt");
//         dt.className="a";
//         dt.id="dt"+i;
//         document.getElementById(a[i]).appendChild(dt);
//         a[i]="dt"+i;
//         var im=document.createElement("img");
//         im.src="../img/img1.jpg"
//         im.className="one";
//         document.getElementById(a[i]).appendChild(im);
//         a[i]="dl"+i;
//         var dd=document.createElement("dd");
//         dd.className="two";
//         dd.id="dd"+i;
//         document.getElementById(a[i]).appendChild(dt);
//         a[i]="dd"+i;
//         var aa=document.createElement("a");
//         aa.className="a1";
//         aa.innerHTML="voctory";
//         document.getElementById(a[i]).appendChild(aa);
//         a[i]="dl"+i;
//         var dt1=document.createElement("dt");
//         dt1.className="masg1";
//         dt1.id="dt1"+i;
//         document.getElementById(a[i]).appendChild(dt1);
//         a[i]="dl1"+i;
//         var aaa=document.createElement("a");
//         aaa.id="aaa"+i;
//         aaa.href="cntn0project.html";
//         document.getElementById(a[i]).appendChild(aaa);
//         a[i]="aaa"+i;
//         var img1=document.createElement("a");
//         img1.id="img1"+i;
//         img1.className="masg2";
//         img1.src="../img/消息2.png";
//         document.getElementById(a[i]).appendChild(img1);
//         a[i]="dl"+i;
//         var dt2=document.createElement("dt");
//         dt2.className="fire1";
//         dt2.id="dt2"+i;
//         document.getElementById(a[i]).appendChild(dt2);
//         a[i]="dt2"+i;
//         var but=document.createElement("button");
//         but.className="fire2";
//         but.type="button";
//         but.style.background="none";
//         but.style.border="0";
//         but.onclick="dowith()";
//         but.id="but"+i;
//         document.getElementById(a[i]).appendChild(but);
//         a[i]="but"+i;
//         var imm=document.createElement("img");
//         imm.className="fire2";
//         imm.id="imm"+i;
//         imm.src="../img/fire.png";
//         imm.border="0";
//         document.getElementById("a[i]").appendChild(imm);
//     }
//
// }
//
//
//

// addElement(recommend, "li", "child_spot", null)
// let _child_spot = document.getElementsByClassName("child_spot")[0];
// addElement(_child_spot, 'div', 'title', null);
// addElement(_child_spot, 'div', 'per', null);
// let _title = document.getElementsByClassName('title')[0];
// let _per = document.getElementsByClassName('per')[0];
// addElement(_title, 'a', 'subTitle', '回溯法求0-1背包问题');
// addElement(_child_spot, 'div', 'describle', '此处为热门推荐的描述');
// let _a = document.getElementsByClassName('subTitle')[0];
// _a.setAttribute('href', 'cntn0project.html')
// addElement(_per, 'img', 'avatar', null);
// addElement(_per, 'a', 'username', 'voctory');
// let _name = document.getElementsByClassName('voctory')[0];
// let img = document.getElementsByClassName('avatar')[0].src = "../img/img1.jpg";


//input 选中
$('#input_search').focus(function(){
    $("#tip").css('display','block');
})

$('#input_search').blur(function(){
    $("#tip").css('display','none');
})

$('#tip').focus(function(){
    $("#tip").css('display','block');
})
//热门推荐

let recommend = document.getElementById('recommend');

var addElement = (parent, child, className, content) => {
    var Element = document.createElement(child);
    Element.className = className;
    Element.innerHTML = content;
    parent.appendChild(Element);
}


//动态加载热门推荐
var addHotRecommend = (Title, Describe, ImgSrc, UserName, i) => {
    addElement(recommend, "li", "child_spot", null)
    let _child_spot = document.getElementsByClassName("child_spot")[i];
    addElement(_child_spot, 'div', 'title', null);
    addElement(_child_spot, 'div', 'describle', Describe);
    addElement(_child_spot, 'div', 'per', null);
    let _title = document.getElementsByClassName('title')[i];
    let _per = document.getElementsByClassName('per')[i];
    addElement(_title, 'a', 'subTitle', Title);
    let _a = document.getElementsByClassName('subTitle')[i];
    _a.setAttribute('href', 'CntnMainproject.html');
    addElement(_per, 'img', 'avatar', null);
    addElement(_per, 'a', 'username', UserName);
    document.getElementsByClassName('voctory')[0];
    document.getElementsByClassName('avatar')[0].src = ImgSrc;
}

// 假接口

var msg = [{
    title: '0-1背包问题',
    Describe: '解决最优解问题！',
    ImgSrc: '../img/img1.jpg',
    UserName: '张三'
},
{
    title: '最优解问题',
    Describe: '解决最优解问题！',
    ImgSrc: '../img/img1.jpg',
    UserName: '张三'
},
{
    title: '0-1背包问题',
    Describe: '解决最优解问题！',
    ImgSrc: '../img/img1.jpg',
    UserName: '张三'
}]

msg.map((item, index) => {
    addHotRecommend(item.title, item.Describe, item.ImgSrc, item.UserName, index)
})

//请求热门推荐
fetch(BASE_URL + "/1")
    .then(res => {
        res.formData.map((item,index) => {
            addHotRecommend(item.title, item.Describe, item.ImgSrc, item.UserName, index)
        })
    })
    // .catch(() => {
    //     alert("请求失败");
    // })










