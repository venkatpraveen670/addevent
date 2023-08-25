let btn=document.querySelector("button");

let title=document.querySelector("h1")

btn.onclick=function (){

    details();
};

function details() {
    
let name=prompt("enter your nameeeeeeee");

// console.log("kk");

localStorage.setItem("user",name);

title.innerHTML="helloo"+""+name;
}





if(!localStorage.getItem("user")){

    details();

}
else{

    let name=localStorage.getItem("user");

    title.innerHTML="hello"+""+name;
}


let press=document.querySelector("button");


let result=document.querySelector("bu")










