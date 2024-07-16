// NOTE:  Variables declared by let are only available inside the block where they’re defined.
//        Variables declared by var are available throughout the function in which they’re declared.


let a = "My name is Adarsh";  //string variable
let b = [1,2,3];  //creating object
console.log(typeof(b));     //object
 
console.log(a);
console.log(b);

var x = "I am Learning javascript";
var y=true;
console.log([x,y]);
y=false;


const i="This is day 1 of learning javascript"   //we can not change the value of i
const j=23;

console.table([{a,b,i,j,x,y}]);    //another way of displaying the values

