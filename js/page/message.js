// <div class="p1">
//     <img src="../img/微信图片_20190807191220.jpg" class="p2" />
//     <m>这是我的评论！！！！</m>
// <img src="../img/like.png" class="p3">
//     <t> 2019年8月1日</t>
//
// <hr style="border: 1px gainsboro dashed">
//     </div>
function messages() {

    var num=8;
    var imgsrc="../img/微信图片_20190807191220.jpg";
    var chat="这是我的评论";
    var ptime=" 2019年8月1日";
    var h=document.getElementById("message");
    for(var i=1;i<=num;i++) {
        var div1 = document.createElement("div");
        var img1 = document.createElement("img");
        var scan1 = document.createElement("scan");
        var img2 = document.createElement("img");
        var scan2 = document.createElement("scan");
        var hr = document.createElement("hr");
        h.appendChild(div1);
        div1.style = "padding-top: 5px;position: relative;height: 50px;  width:95% ;margin: 0 auto;"
        div1.appendChild(img1);
        img1.src = imgsrc;
        img1.style = "width: 30px;height: 30px;border-radius: 90%;";
        div1.appendChild(scan1);
        scan1.style = "padding-left: 10px;font-family:黑体";
        scan1.innerHTML = chat;
        div1.appendChild(img2);
        img2.src = "../img/like.png";
        img2.style = " width: 20px;height: 20px;float: right;padding-right: 50px;padding-top: 20px;";
        div1.appendChild(scan2);
        scan2.style = "float: right; padding-right: 10px; padding-top: 20px; color: #bbbbbb; font-size: 15px;";
        scan2.innerHTML = ptime;
        div1.appendChild(hr);
        hr.style = "border: 1px gainsboro dashed";
        document.body.appendChild(h);
    }
        // <div style="text-align: center ;align-content: center;font-family: 楷体">
        //         <p> 没有更多了<a href="#start" style="text-decoration:none;">回到顶部</a>
        //         </p>

    var div3=document.createElement("div");
    div3.style="text-align: center ;align-content: center;font-family: 楷体;margin-bottom: 50px;";
    h.appendChild(div3);
    var p1=document.createElement("p");

    p1.innerHTML="没有更多了";
    div3.appendChild(p1);
    var a=document.createElement("a");
    a.href="#start";
    a.style="text-decoration:none";
    a.innerHTML="回到顶部"
    p1.appendChild(a);
    document.body.appendChild(h);
}
