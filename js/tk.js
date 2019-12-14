    $(window).ready(function () {

        $("#btn_center").click(function () {

            $('.mask').css('display', 'block');

            $('.mask').css('width', $(window).width())

            $('.mask').css('height', $(document).height())

            popCenterWindow();

        });

    });

//获取窗口的高度

var windowHeight;

//获取窗口的宽度

var windowWidth;

//获取弹窗的宽度

var popWidth;

//获取弹窗高度

var popHeight;



function init() {

    windowHeight = $(window).height();

    windowWidth = $(window).width();

    popHeight = $(".window").height();

    popWidth = $(".window").width();

}

//关闭窗口的方法

function closeWindow() {

    $(".close_btn").click(function () {

        $('.window').hide("slow");

        $('.mask').css('display', 'none');

    });
    $(".cancel").click(function () {

        $('.window').hide("slow");

        $('.mask').css('display', 'none');

    });

}

//定义弹出居中窗口的方法

function popCenterWindow() {

    init();

    //计算弹出窗口的左上角X的偏移量

    var popX = (windowWidth - popWidth) / 2;

    // 计算弹出窗口的左上角Y的偏移量为窗口的高度 - 弹窗高度 / 2 + 被卷去的页面的top

    var popY = (windowHeight - popHeight) / 2 + $(document).scrollTop();

    //设定窗口的位置

    $("#center").css("top", popY).css("left", popX).slideToggle("fast");

    closeWindow();

}

function op() {
    document.write()

}

