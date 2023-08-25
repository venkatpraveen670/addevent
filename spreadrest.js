
// spread and rest operator try panuvom::

// spread and rest operator work enne let varibsle add panarathuu

let num1=[1,"hello",true,10.5];

let num2=[6,7,8,9];

let num3=[1,2,3,4,5]


let number=[...num1,...num2,...num3];

console.log(number);


let boys=["boys:","aravind","bala","mohan"]

let girls=["girls:","kavitha","abinaya","visjali"]

let student=[...boys,...girls]

console.log(student);


// concat methodd::::

let boyss=["boys:","aravind","bala","mohan"]

let girlss=["girls:","kavitha","abinaya","visjali"]

let students=[boys.concat(girls)]

console.log(student);




// spread& rest operator iss ... threee dot vaikanum


let list=[1,2,3,4,5]
let list1=[1,2,3,4,5]
let list2=[1,2,3,4,5]

let total=[...list,...list1,...list2]

console.log(total);



// concat method .concat() use pananum:::::

let hero=[ "actor:","vijay","surya","ajith","vikram"]

let heroine=["nayanthar","thirsa","thamana","kerthisuresh"]

let actor=[hero.concat(heroine)]

console.log(actor);

console.log(...hero,...heroine);

let numberr=[12,34,56,78,90,90]
let nn=[55,66,77,88,99]

let tt=[...numberr,...nn];

console.log(tt);

console.log(numberr.concat(nn));


let dd=("data")

let dt=("date",123)

let ttt=(`dd, date,${dt} `);

console.log(ttt);


// today pratice literal templatess"::::



let fun=()=>{

let num1=12

let num2=10

let total=(`number1:${num1+num2}, number2:${num1},number3:${num2}`)

console.log(total);
}

fun();



