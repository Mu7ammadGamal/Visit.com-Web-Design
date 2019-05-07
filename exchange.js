let choose=document.getElementById("choose");
             let choose2=document.getElementById("choose2");
             let letters = /^[A-Za-z]+$/;
             let input=document.getElementById("input");
             let output=document.getElementById("output");
             let button=document.getElementById("button");
             
   button.onclick=function change(){
            if(choose.value==choose2.value){
                input.value=output.value;
                }
                else if(input.value==""){
                    alert("This Field Must Not Be Empty");
                }
                else if(input.value=="0"){
                    alert("This Field Must Not Be Equal Zero");
                }
                else if(input.value==letters){
                    alert("This Field Must Not Contain Letters");
                }
                
            else if(choose.value==1&&choose2.value==2){
                output.value=input.value*0.058;
            }
                  else if(choose.value==1&&choose2.value==3){
                output.value=input.value*0.22;
            }
               else if(choose.value==1&&choose2.value==4){
                output.value=input.value*0.052;
            }
              else if(choose.value==2&&choose2.value==1){
                output.value=input.value*(1/0.058);
            }
              else if(choose.value==2&&choose2.value==3){
                output.value=input.value*3.75;
            }
              else if(choose.value==2&&choose2.value==4){
                output.value=input.value*0.24;
            }
             else if(choose.value==3&&choose2.value==1){
                output.value=input.value*4.85;
            }
             else if(choose.value==3&&choose2.value==2){
                output.value=input.value*0.27;
            }
             else if(choose.value==3&&choose2.value==4){
                output.value=input.value*0.24;
            }
             else if(choose.value==4&&choose2.value==1){
                output.value=input.value*19.21;
            }
             else if(choose.value==4&&choose2.value==2){
                output.value=input.value*1.12;
            }
             else if(choose.value==4&&choose2.value==3){
                output.value=input.value*4.19;
            }
         };
             let button2=document.getElementById("button2");
            button2.onclick=function replace(){
            let x=input.value;
            input.value=output.value;
            output.value=x;
            let y=choose.value;
            choose.value=choose2.value;
            choose2.value=y;
            };