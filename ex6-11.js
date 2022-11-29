function timer(){
//表示する文字
var str="こんにちは、こんばんは";
//テキストボックスの文字数
var cnt=document.itimoji.hyouji.value.length;
//文字が全部表示されているか確認
if(cnt<11){
//現在より１文字多く切り出して表示
document.itimoji.hyouji.value=str.substr(0,cnt+1);}
else{
//すべて表示されたら、空文字に戻す
document.itimoji.hyouji.value="";}}
function startfnc(){
//関数hyoji()を1000ミリ秒間隔で呼び出す
setInterval("timer()",500);
}
function mes(){
alert("3秒経ちました！")
}
