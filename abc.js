let obj={

name:"vijay",
data:[1,2,3,],

print:()=>{

  return`student_name: ${ this.name}`;


}

}

console.log(obj.data);
console.log(obj.name);





function data(){

console.log(this);


}

let object={

name:"n.praveen",
age:22,

}

let objec2={

main:"hari"

}

  data=data.bind(objec2);


data()


let objj={

power:"agri",
land:"paddy",

print:()=>{

return this.name;


},

};

console.log(objj.power);

function marksheet(){

console.log(this);

}

let cap={

name:"n.praveen",
age:28,
tamil:45,
english:55,
maths:65,
totalmark:210,

}

let cap2={

number:248

}

 ms=marksheet.bind(cap);

//  ms=marksheet.bind(cap);

ms()

marksheet.apply(cap2);

marksheet.call(cap);

marksheet.call(cap2);

function value(){

   let team=11
let players=110
let stadium=5

value=(team+players+stadium)

console.log(team+players+stadium);
}

value()


// function animals() {
  
// ani1:"lion",
// ani2:"tiger",
// ani3:"zebra",



// }

function forest() {

  console.log(this);
  
}


let forestss={


animal1:"lion",
animal2:"tiger",
animal3:"elaephant",
animal4:"zebra",

}

zoo=forest.bind(forestss);

zoo()

forest()

forest.call(forestss);

forest.apply(forestss.animal4);


// function hh(num1+num2){

// console.log(num1+num2);



// }

console.log("ffffffffffffffffffffffff");

let friuts={

    friuts1:"apple1",
    friuts2:"apple2",
    friuts3:"apple3",
    friuts4:"apple4",

}

console.log(friuts.friuts2);

console.log(friuts.friuts3);


 console.log(friuts.friuts4);

let brands={


  brand1:"apple",
  brand2:"samsung",
  brand3:"redmi",
  brand4:"moto",
  brand5:"lava",


}

// dot methods result:::::;;

console.log("dot method result");

console.log(brands.brand1);
console.log(brands.brand2);
console.log(brands.brand3);
console.log(brands.brand4);

// bracket method result:::::::::;

console.log("bracket method result");

console.log(brands["brand1"]);
console.log(brands["brand2"]);
console.log(brands["brand3"]);
console.log(brands["brand4"]);




  

