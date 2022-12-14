//function imgchange3(){
//document.getElementById('logo2').src=
//'./image/城西大学ロゴ.png';
//}
function imgchange4(){
 var cfn14=document.timer14.hyoji14.src;
 if(cfn14=="./image/城西大学ロゴ.png"){
 document.getElementById('logo2').src="./image/城西大学野球部.jpg";}
 else{
 setTimeout("imgchange5()",3000);}
 }
 
function imgchange5(){
document.getElementById('logo2').src="./image/城西大学ロゴ.png"
}

function startfnc14(){
setInterval("imgchange4",1000)
}

//function imagchange5(){
  //document.getElementById('logo2').src=
//'./image/城西大学ロゴ.png';
// setTimeout("imgchange6,200")
//}




//function hyoji14(){
//var image14='./image/城西大学野球部.jpg'
//setTimeout(0,3000)
//}
