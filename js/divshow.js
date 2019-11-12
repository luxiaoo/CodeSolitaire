
function jump() {

        var td1= document.getElementById("t1");

       var mnav=document.getElementById("mnav");
        td1.onclick=function () {
            $("#mnav").load("information2.html");
        }
}
         /*   alert("hhh");
            document.getElementById('mnav').innerHTML="http://localhost:63342/CodeSolitaire/html/information2.html?_ijt=7fggrstrnorijjbu37d4fdvros";
*/






// function jump() {
//     var js=require('fs')
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     fs.readFile('information2.html', function (err, data) {
//         if (err) {
//             return console.error(err);
//         }
//         console.log("异步读取: " + data);
//         response.end(data);})
// }
