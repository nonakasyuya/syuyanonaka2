function add711(){
var x =document.getElementById('nen711').value;
var keisan711=Number(x)%Number('4');
var keisan712=Number(x)%Number('100');
var keisan713=Number(x)%Number('400');

 if(keisan712==0&&keisan713!=0){
 alert('平年');
 }
 else if(keisan711==0){
 alert('うるう年');
}
 else{
 alert('平年');
 }
}
