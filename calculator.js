let names=[1,2,"praveen","venkat"]

for(let i=0;i<names.length;i++)

console.log(names[i]);


let number=[10,25,35,45,34,333]

number.filter((v)=>{

    if(v % 5 !==0 )
    console.log(v);

}

)


let fun = () =>{

let xhttp = new XMLHttpRequest();

xhttp.onload= function(){

    document.getElementById("bb").innerHTML=this.responseText;
}

xhttp.open("GET","list.html");

xhttp.send();

}

// let fun = ()=> {


//     let xhttp= new XMLHttpRequest();

//     xhttp.onload= function(){

//         document.getElementById("bb").innerHTML=this.responseText;
//     }

// xhttp.open("GET","table.html");
// xhttp.send();


// }

console.log("map1 method result");

let total=[12,24,34,5,67];

let tt=total.map((v)=>{

if(v %2 ===0 )

console.log(v);
}



)


console.log("map2 method result");


let divideby3=[3,33,99,30,27,44,77,88]

let dd=divideby3.map((v)=>{

if(v % 3 ===0)

console.log(v);


}

)

let numberr=[5,10,15,20,25,30,33,55,78]


console.log("map3 method result");

let nn=numberr.map((mapmethod)=>{

if(mapmethod >=20)

console.log(mapmethod);

}



)



console.log("filter method result");

let totall=[12,24,34,5,67];

let ttt=total.filter((v)=>{

if(v %2 ===0 )

console.log(v);
}

)


let mark=124;

switch(true){

    case mark  <25 :
 console.log("fail");
break;

case mark >=25 && mark <=100 :
 console.log("pass");
break

default:
 console.log("unknown");

}

let id=118;

switch(true){

    case id <18:
        console.log("not voting age");
        break;

        case id >=18  && id <=100:
            console.log(" voting age");
            break;
    
default:
    console.log("no voter");

}

let idd=118;

if(idd <18)
console.log(" not voting age");

else if(idd >=18 && idd<=100)
console.log("voting age");

else
console.log("no voter");


let numbr=22;

console.log("my name is \n parhipan");

console.log(`my name       is  
parhipan`);
     