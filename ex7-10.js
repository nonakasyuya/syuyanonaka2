function add710(){
var x =document.getElementById('input5').value;
var y =document.getElementById('input6').value;
var keisan710=Number(y)/Number(x*x)*10000;

 if(keisan710 <=18.5){
 alert(Number(y)/Number(x*x)*10000);
 alert('低体重');
 }
 else if(keisan710 <25){
 alert(Number(y)/Number(x*x)*10000);
 alert('普通');
 }
 else{
 alert(Number(y)/Number(x*x)*10000);
 alert('肥満');
 }
}

