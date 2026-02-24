/*let a = 61;
let b = 70;
let c = 80;

if (a>b && a>c){
console.log(a+" is greater");
} else {
    if( b > c){
        console.log(b+"is greater");
    }
    else{
        console.log(c+"is greater")
    }
    
}
*/
/*let day = 1;
switch(day){
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break; 

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;


}
*/
//let a = [2,"nil",232.45,true,"yash", 2:"nil"]
/* let b = [2, 23, 63, 32, 5, 24, 50];
let target = 5;

let found = false;

for (let i = 0; i < b.length; i++) {
    if (b[i] === target) {
        console.log("Element found at index:", i);
        found = true;
        break;
    }
}

if (!found) {
    console.log("Element not found");
}*/
//console.log(a)
/*let a =2;
console.log(a++);//2 --> 3
console.log(++a);
*/
/* function sum(a,b){
    console.log(a+break);
 }
  sum(2,3);
 */

/*function name(first, last){
    console.log(first +" "+ last);

  }

  name("Yash", "Kolwate");
  */

 /* const hello = function (){
    console.log("hello")
  }
   hello();
*/
// const summ = (a,c,b=5)=>{
//     return(a+c+b);
// }
// let add = summ(5,7);
// console.log(add);

// function sum(a,b){
//     console.log(a+b);
// }

// function sum(a,b,c){
//     console.log(a+b+c)
// }

// sum(4,10);
// sum(8,7,9);

//console.log(false || 2 || 3)
 
// let a = [1,2,2,3,4,4, function sum(){return a+b}]

// let a = "hello"
// let s = a.replace("h","H");
//  console.log(s);

//  let b = a.toLowerCase();
//  console.log(b);

//  b = a.toUpperCase();
//  console.log(b);

//  console.log(a.at(2));

//  console.log(a.slice(-3,-1));

//  let s = "welcome to devlaunchpad";
//  console.log(s.slice(3,-9));

// let a = [1,2,3,4,5];

//  let b =[15,18,...a];


//  b.push(6);

//  console.log(a);
//  console.log(b);

//    let a = [1,2,3,4,5];
// a.pop();
// console.log(a);

// a.unshift(0);
// console.log(a);

// a.shift();

// let b = [ 1,2,3,5,6];
// console.log(a.concat(b));

// let a = [ "hello","my","name","is","neil"];

// let b = [ "kolwate"];
// a.push(...b);

// console.log(b);
// console.log(a);

// for(i = 0; i < a.length; i++){
//     let upper = a[i].toUpperCase();
//     console.log(upper);
// }

// action items is map and filter check usability

let num = [2, 3, 4, 5, 6, 7];

for (let i = 0; i < num.length; i++) {
    let prime = true;

    for (let j = 2; j < num[i]; j++) {
        if (num[i] % j === 0) {
            prime = false;
            break;
        }
    }

    if (num[i] > 1 && prime) {
        console.log(num[i]);
    }
}