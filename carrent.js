
var day=document.getElementById("day");
var b=document.getElementById("b");
var one=document.getElementById("1");
var two=document.getElementById("2");
var three=document.getElementById("3");
var four=document.getElementById("4");
var five=document.getElementById("5");
var input1=document.getElementById("mytext");
var input2=document.getElementById("input2");


b1.onclick=function discount(){
if(day.value!=0){
 alert("reserved by"+day.value*one.innerHTML+" "+"dollar for"+" "+day.value+"days");
}
else{
 alert("you cant enter 0")
}
};
b2.onclick=function discount(){

if(day.value!=0){
 alert("reserved by"+day.value*two.innerHTML+" "+"dollar for"+" "+day.value+"days");
}
else{
 alert("you cant enter 0");
}
};
b3.onclick=function discount(){
if(day.value!=0){

 alert("reserved by"+day.value*three.innerHTML+" "+"dollar for"+" "+day.value+"days");
}
else{
 alert("toy cant enter 0");
}
};
b4.onclick=function discount(){

if(day.value!=0){
 alert("reserved by"+day.value*four.innerHTML+" "+"dollar for"+" "+day.value+"days");
}
else{
 alert("you cant enter 0");
}
};
b5.onclick=function discount(){
if(day.value!=0){

 alert("reserved by"+day.value*five.innerHTML+" "+"dollar for"+" "+day.value+"days");
}
else{
 alert("you cant 0");
}
};

