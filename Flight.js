let min = prompt("Please Enter ur min-charge in USD");

while(isNaN(min) || min=="" || min==" "){
    alert("Please, Enter a Number");
    min = prompt("Please Enter ur min-charge in USD");}




let max = prompt("Please Enter ur max-charge in USD");

while(isNaN(max) || max=="" || max==" "){
    alert("Please, Enter a Number");
    max = prompt("Please Enter ur max-charge in USD");}




while(min==max || min>max){
    alert("Please, Let the max value greater than the min value");
     
        min = prompt("Please Enter ur min-charge in USD");
        while(isNaN(min) || min=="" || min==" "){
            alert("Please, Enter a Number");
            min = prompt("Please Enter ur min-charge in USD");}


         max = prompt("Please Enter ur max-charge in USD");
         while(isNaN(max) || max=="" || max==" "){
            alert("Please, Enter a Number");
            max = prompt("Please Enter ur max-charge in USD");}    
}


alert("We will show you the best today's hot offers depend on your max and min value that you insert");




let i=0,
  search = document.getElementById("search"),
   departure = document.getElementById("departure"),
    arrival = document.getElementById("arrival"),
    from = document.getElementById("from"),
    to = document.getElementById("to"),
    tn = document.getElementById("tn"),
    ps = document.getElementById("ps"),
    checkinbutton = document.getElementById("chknbut"),
    fn = document.getElementById("fn"),
    fdate = document.getElementById("fdate"),
    statusbutton = document.getElementById("statusbut"),
    booknowbutton = [document.getElementById("booknow0"),document.getElementById("booknow1"),document.getElementById("booknow2"),document.getElementById("booknow3"),document.getElementById("booknow4"),document.getElementById("booknow5"),document.getElementById("booknow6"),document.getElementById("booknow7")];


 search.onclick = function chkserch(){
     if(departure.value == "" || arrival.value == "" || to.value == "" || from.value == ""){
        alert("Check your fields, Maybe you forget one is empty");        
        }
     else alert("This option will come soon ...");
 };
 
 checkinbutton.onclick = function chkchk(){
     if(tn.value == "" || ps.value == ""){
        alert("Check your fields, Maybe you forget one is empty");}
         
     else if(isNaN(tn.value)===true ){
        alert("Check ticket number field, it must be just a number");}  
         
     else if(isNaN(ps.value)===false){
        alert("Check passenger surname field, it must be just a text");}
        
     else alert("This option will come soon ...");
 };

 statusbutton.onclick = function chkstt(){
     if(fn.value == "" || fdate.value == ""){
        alert("Check your fields, Maybe you forget one is empty");}
         
     else if(isNaN(fn.value)===true ){
        alert("Check flight number field, it must be just a number");}  
             
     else alert("This option will come soon ...");
 };
 
 function alerting(){alert("This option will come soon ...");}
 
(function soon (){for(i = 0; i<8 ; i++){booknowbutton[i].onclick = alerting ;}})();
     
         let z= (min/max);
let    disc= z.toFixed(2);
console.log(disc);
let    prices=[document.getElementById("p1"),document.getElementById("p11"),document.getElementById("p2"),document.getElementById("p22"),document.getElementById("p3"),document.getElementById("p33"),document.getElementById("p4"),document.getElementById("p44"),document.getElementById("p5"),document.getElementById("p55"),document.getElementById("p6"),document.getElementById("p66"),document.getElementById("p7"),document.getElementById("p77")];

let k=0;
(function discount (){for(k = 0; k<15 ; k++){ 
 prices[k].innerHTML= (disc * parseInt((prices[k].innerHTML)))+" $";}})();
         
           
     