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
