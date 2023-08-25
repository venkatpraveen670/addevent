console.log("hii");


// let ajax=()=>{

// let xttp= new XMLHttpRequest();

// xttp.onload=function(){

// if(this.status === 200 && this.readyState === 4){
// document.getElementById("click").innerHTML;
// }
// else{

//     document.getElementById("click").innerHTML ="not found";
// }




// xttp.open("get",".html");
// xttp.send();

// }
// };

function loaddoc() {


    let xhttp=new XMLHttpRequest();

    xhttp.onload=function(){

        document.getElementById("click").innerHTML=this.responseText;   
    }

    xhttp.open("GET","arrayfunction.html");
    xhttp.send();
    
}

let ajax = ()=> {


    let xhttp= new XMLHttpRequest();

    xhttp.onload= function(){

        document.getElementById("table").innerHTML=this.responseText;
    }

xhttp.open("GET","table.html");
xhttp.send();


}

let pressure=() =>{

let xttp=new XMLHttpRequest();

xttp.onload = function  (){

     if(this.status ===201 && this.readyState === 4){

    document.getElementById("press").innerHTML=this.responseText;
 }


 else{
         document.getElementById("press").innerHTML="not found";
        
    }

}

xttp.open("GET","table.html")

xttp.send();


}

let result =() =>{

let xttp= new XMLHttpRequest();

xttp.onload=function(){

    if (this.status === 200  && this.readyState === 4) 
    {
        
        document.getElementById("result").innerHTML=this.responseText;
    }
else{

   document.getElementById("result") .innerHTML="server busy";
}

}

xttp.open("GET","result.html");

xttp.send();

}


console.log(window.innerHeight,window.innerWidth);


// window.moveTo(1000,300);


// for(initilexpression;condtion;step){

//    console.log(); 
// }

for( let i=5; i<=15; i++){

    console.log(i);
}


console.log("whilelopp results");


let i=5;

while(i<=15){

    console.log(i);

    i++
}

