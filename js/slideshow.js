//图片轮播
let oSpan=document.getElementsByTagName('span');
let oLi=document.getElementsByTagName('li');
let i=0;
oSpan[0].onclick=function () {
    oLi[i].className='';
    i--;
    if(i<0){
        i=2;
    }
    oLi[i].className='on';
    console.log(i);
};
oSpan[1].onclick=function () {
    oLi[i].className='';
    i++;
    if(i>2){
        i=0;
    }
    oLi[i].className='on';
    console.log(i);
};