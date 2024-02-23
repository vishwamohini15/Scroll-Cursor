var nm =document.querySelector('#name')
var dt= document.querySelector('#dot')

nm.addEventListener("mousemove",function(cli){
    console.log("hlo");
dt.style.left=cli.x+"px"
// dt.style.right=cli.x+"px"

dt.style.top=cli.y+"px"
// dt.style.bottom=cli.y+"px"


})





