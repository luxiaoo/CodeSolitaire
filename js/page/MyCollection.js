var URL = 'localhost'
var addElement = (parent, child, className, content) => {
    var Element = document.createElement(child);
    Element.className = className;
    Element.innerHTML = content;
    parent.appendChild(Element);
}

let root = document.getElementById("MyCollection");
var addCollectionDiv = (i, imgSrc, name, time, area, title, content) => {
    addElement(root, 'div', 'childDiv', null);
    let _childDiv = document.getElementsByClassName('childDiv')[i];
    addElement(_childDiv, 'div', 'DivTitle', null);
    addElement(_childDiv, 'div', 'title', title);
    addElement(_childDiv, 'div', 'content', content);
    addElement(_childDiv, 'div', 'showAll', null);
    let _DivTitle = document.getElementsByClassName('DivTitle')[i];
    addElement(_DivTitle, 'img', 'touxiang', null);
    addElement(_DivTitle, 'a', 'username', name);
    addElement(_DivTitle, 'span', 'current', time);
    addElement(_DivTitle, 'span', 'area', area);
    let _touxiang = document.getElementsByClassName('touxiang')[i];
    _touxiang.src = imgSrc;
    let _showAll = document.getElementsByClassName('showAll')[i];
    addElement(_showAll, 'a', 'read', '阅读全文');
    let _read = document.getElementsByClassName('read')[i];
    _read.setAttribute('href', '../html/CntnMainproject.html');
}


//假接口


const msg = [
    {
        "src": '../img/微信图片_20190807191224.jpg',
        "uesrp": "张三",
        "ptime": "2019年9月10日",
        "area": "天津",
        "title": "0-1背包问题",
        "content": "详细内容"

    },
    {
        "src": '../img/微信图片_20190807191224.jpg',
        "uesrp": "lisa",
        "ptime": "2019年9月10日",
        "area": "天津",
        "title": "0-1背包问题",
        "content": "详细内容"

    },
    {
        "src": '../img/微信图片_20190807191224.jpg',
        "uesrp": "王斌",
        "ptime": "2019年9月11日",
        "area": "天津",
        "title": "0-1背包问题",
        "content": "详细内容"

    },
]


msg.map((item, index) => {
    addCollectionDiv(index, item.src, item.uesrp, item.ptime, item.area, item.title, item.content)
})


//请求数据
fetch(URL + '/')
    .then(res => {
        res.msg.map((item, index) => {
            addCollectionDiv(index, item.src, item.uesrp, item.ptime, item.area, item.title, item.content)
        })
    })
    // .catch(() => {
    //     alert("网络请求失败")
    // })


