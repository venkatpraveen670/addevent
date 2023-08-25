// Map,filter,array.forEach method:::


let studentmark=[10,15,20,30,40,50,"praveen"]

studentmark.map((abbb)=>{

    if(abbb === 20)

    console.log(abbb+":praveen");
    
}

)


let grade=[10,15,20,45,56,78]

 grade.forEach((grad)=>{
 
if(grad ===56)
console.log(grad);


 }


 )

let passmark=[78,65,54,33,58,35,87.23,99];

let ps=passmark.filter((va)=>{

if(va %3 ===0)
console.log(va);

}


)



