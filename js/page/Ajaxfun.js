function Ajaxfun(url,data) {
    var da;
    $.ajax({
        url:url,
        type:"post",
        data:data,
        async:false,
        dataType:"json",
        success:function (data) {
            da=data;
            console.log(data);
            // da=JSON.stringify(data);
            return da;
        },
        error:function (error) {
            alert(url+error);
        }
    })
    return da;
}

function getAjaxfun(url) {
    $.ajax({
        url:url,
        type:"get",
        dataType:"json",
        success:function (data) {
            data=JSON.parse(data);
            return data;
        },
        error:function (error) {
            alert(url+error);
        }
    })}
