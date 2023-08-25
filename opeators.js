// five operators RE available:::
// a=5 b=10




// 1.arithmetic operators(a+b, a-b, a*b,a/b,increment,decrement)
// 2.comparsion operators(=== ==  !=,&& || )
// 3.assignment operators(x=6)
// 4.logical operators
// 5.bitwise operators


// arithmetic operators::


let a=10

let b=2000

console.log(a+b);

function number(){

let a=10

b=20

console.log(a-b);

}

number()

let div=25
let div1=34

console.log(div*div1);

console.log(div/div1);

console.log(div1%div);

console.log(++div);

console.log(div++);


// assigment operators:

z=234

x=344

result=z+x;

console.log(result);



  d=15
 g=16

 s=d+g;


console.log(s);


// comparsion operators

types:

// 1.relation operators
    // *less than <  
    // *less than are equal too <=
    // *greater than >
    // *greater than are equal too  >=
    
    
// less than :?

x=5
console.log(x<4);
console.log(x<6);
// less than are equal too 

x=5
console.log(x<=4);
console.log(x<=6);

x=6

console.log(x>4);

console.log(x>=5);


// 2. equality operators 
    // *equal ===       (three equal code varumm)
  //  *not equal !==     ( oru exlamatory double == varumm)


  // equal::

 x= 12;

console.log(x===13);

console.log(x===12);

// not equal too !== 

x= 13;

console.log(x!==13);  
// (same value kodutha mattum false varum)


console.log(x!==11);
//  ( vera value kodutha true varum)



// string comparsion::::::: 

console.log('abc'<'acb');
//  (dictonary mode compare pannum )

console.log('abc'>'acb');




// comparsion of diference typee::::::

console.log('45'<32); 
console.log('45'>32);

// binary operator:
// 0-false
// 1-true
// 0-false
// 1-true
// 0-false
// 1-true
//  (double equal varumm ==)

console.log(true == 0);

console.log(true == 1);

console.log(false == 0);

console.log(false == 1);



// 21 videoo:

// equality operators:
  //  *strictly equality ===
  //  *loses equality ==


  // strictly equal example:::


  console.log(1 === 1);
  console.log(1 === 3);
  console.log('1' === 1);
  console.log('1'=== '1');
  console.log('1'=== '34');
  
console.log('hsri'=== 1);

console.log(true === true);



// loses example :::

console.log(1 == 1);
  console.log(1 == 3);
  console.log('1' ==1);
  console.log('1'== '1');
  console.log('1'== '34');
  
console.log('hsri'== 1);

console.log(true == true);



// teranory operatorss::::


// ticket examlpee:::


let age= 18;


let ticket=age > 18 ? "adult ticket" : "child ticket"

console.log(ticket);


let passmark=35;

let output= passmark > 35 ? "pass" : "fail"


console.log(output);


let submark=35;

let output1= submark >= 35 ? "pass" : "fail"

console.log(output1);


let voteridage= 18;

let output3= voteridage <= 18 ? "eligible" : "not eligible"

console.log(output3);

let voteridage1= 18;

let output4= voteridage <= 17 ? "eligible" : "not eligible"

console.log(output4);




// logical operatorss :::::::::::::::
    //  * &&
    //  * ||
    //  * not (!)



// logical && operators na operands same erukanumm ( true va errukanum)
 
// if return  if true if both operands are true
// 
// simple && and operators true= true mattum than true matha ellam false:

console.log("&& operators result");
console.log(true && true );
console.log(false && false);
console.log( true && false);
console.log(false && true);

// example:
// loan status : cibilscore && good salary


console.log( "|| operatos result");
// logical || operands ethavathu onnu true va  pothumm 


// in or || operators return anyone true it is truee":
// or operators || false = false ,false matham ellam   true

console.log(true || true);
console.log( true || false);
console.log(false || true);
console.log( false || false);


console.log("example && operators try panuvomm");

// and &&&&&&&&  operators try panuvomm 

let cibillscore= true
let annualincome=true

console.log(cibillscore && annualincome);

let cibillscore1= true
let annualincome2=false

console.log(cibillscore1  && annualincome2);


//  orr || operators tyry panuvomm

console.log(" or || operators try panuvomm" );

 
let allsubject=true
let english=false

console.log(allsubject || english);


let allsubject1=false
let english2=true

let tota=(allsubject || english2)
console.log (tota);

console.log( " in or || operators ethavathu onu true answer correct varum ");



// not operators(!)
//  not operators opposite work agum for example:::

console.log("not !!!!!!!!!!! operators example papomm");
console.log( !true);
console.log(!false);


let highincome=true;
let cibilscore=false;

let eligibileperson= highincome || cibillscore

let applicationstatus= !eligibileperson

console.log("loan staus:"+ eligibileperson);

console.log("applicationstatus:"+ applicationstatus);



let rannk1=true;
let rank2=false;
let rank3=true;

let allow=rannk1 || rank2 || rank3

let notallow=! rank3

console.log("allow:"+ allow );

console.log("notallow:"+ rank3);


let person1=300;
let person2=200;

totalperson=(person1 && person2)

console.log(totalperson);
















































 


