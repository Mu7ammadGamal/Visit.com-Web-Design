var signmeup=document.getElementById("button2");
     var money1=document.getElementById("money1");
     var money2=document.getElementById("money2");
     var money3=document.getElementById("money3");
     var inputjava1=document.getElementById("inputjava1");
     var book1=document.getElementById("book1");
     var book2=document.getElementById("book2");
     var book3=document.getElementById("book3");
     var search=document.getElementById("search");
  signmeup.onclick= function discount(){
   if(inputjava1.value=="amr@gmail.com"){
     alert("you got 50% discount");
     var x=money1.innerHTML;
    money1.innerHTML=x*0.5;
    var y=money2.innerHTML;
    money2.innerHTML=y*0.5;
    var z=money3.innerHTML;
    money3.innerHTML=z*0.5;
    }
    else if(inputjava1.value==""){
     alert("please fill email field");
    }
    else{
     alert("this email not existed");
    }
  };
  var count=0;
  book1.onclick=function book(){
   alert("booked!"+" "+"by"+" "+money1.innerHTML+" "+"thank"+" "+"you"+" "+"for"+" "+"using"+" "+"our"+" "+"site");
   count++;
  };
   book2.onclick=function book(){
   alert("booked!"+" "+"by"+" "+money2.innerHTML+" "+"thank"+" "+"you"+" "+"for"+" "+"using"+" "+"our"+" "+"site");
   count++;
  };
   book3.onclick=function book(){
   alert("booked!"+" "+"by"+" "+money3.innerHTML+" "+"thank"+" "+"you"+" "+"for"+" "+"using"+" "+"our"+" "+"site");
   count++;
  };
  var input0=document.getElementById("input0");
    
  var input1=document.getElementById("input1");
  search.onclick=function search(){
   if(input0.value==""||input1.value==""){
    alert("please choose the date");
   }
  
   else alert("searching......");
   
  };
  
  var collect=document.getElementById("collect");
  collect.onclick=function collect(){
   if(count==5){
    alert("congratulation  you got a free book");
   money2.innerHTML=0;
   alert("second hotel is now 0 dollar");
   }
   else{
    alert("you should first book" +" "+(5-count)+" "+"more"+" "+"to get one free");
   }
  };
  var subscribe=document.getElementById("subscribe");
  var inputemail=document.getElementById("inputemail");
  subscribe.onclick=function discount2(){
   if(inputemail.value==""){
    alert("please email fill this field");
   }
   else if(inputemail.value=="amr@gmail.com"){
    alert("thank you for subscribing");
    
   }else{
    alert("this email does not exist");
   }
   
  };
 function showDiv() {
   document.getElementById('welcomeDiv').style.display = "block";
}
