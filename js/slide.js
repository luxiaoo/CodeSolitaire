//获取图片标签
var imgs=document.getElementById('imglist').getElementsByTagName('li');
//获取小圆点标签
var icons=document.getElementById('iconlist').getElementsByTagName('li');
//初始化图片位置
var left=0;
//设置一个计时器
var timer;
run();
function run() {

    if(left<=-1600) {
        imglist.style.marginLeft="0px";
        left=0;
        // changeimg();

    }
    //若为整张图片，暂停1s,借助变量
    var n=(left%400==0)?1000:10;
    changeimg();
    //计算图片的下标
    var m=Math.floor( -left/400);//向下取整
    changeicon(m);
    left -= 10;
    timer=setTimeout(run, n);//每隔10ms调用一次run
}
// setInterval(run,10);  //每隔10ms调用一次run
function  changeimg() {
    imglist.style.marginLeft=left+"px";
}
//小圆点随着图片更换更换样式
function changeicon(m) {
    for (var i=0;i<icons.length;i++) {
        icons[i].style.backgroundColor="";
    }
    icons[m].style.backgroundColor='#FA5A50';
}
//绑定图片事件，鼠标悬浮时相应图片停止，鼠标移走继续轮播

for(var i=0;i<imgs.length;i++){
    //因为外部变量内部也想用，存在作用域问题，闭包解决
    (function (i) {
        // 鼠标悬浮时
        imgs[i].onmousemove=function () {
            clearTimeout(timer);
            left=-i*400;
            changeimg();//图片
            changeicon(i);//小圆点
        }
        //鼠标移出时
        imgs[i].onmouseout=function () {
            run();
        }
    })(i)
}

//绑定小图标事件，鼠标悬浮时相应图片停止，鼠标移走继续轮播
for(var i=0;i<icons.length;i++){
    //因为外部变量内部也想用，存在作用域问题，闭包解决:格式()(i)
    (function (i) {
        // 鼠标悬浮时
        icons[i].onmousemove=function () {
            clearTimeout(timer);
            left=-i*500;
            changeimg();//图片
            changeicon(i);//小圆点
        }
        //鼠标移出时
        icons[i].onmouseout=function () {
            run();
        }
    })(i)
}
