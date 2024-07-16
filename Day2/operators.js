 // *********************   task 1   *************************
var a=123;
var b=122;
console.log(a+b);
let x=1,y=2;
console.log(x+y);

// **********************      task 2,3,4,5     ************************
let i=10,j=4;
console.log(i+j);
console.log(i-j);
console.log(i*j);
console.log(i/j);
console.log(i%j);   //gives reminder when i is divided by j ie 10/4=2


//  **********************      task 6,7,8,9.10            *************************

if(i>=j)
    console.log(true);
else console.log(false);
i=4;
j='4';
if(i==j)
    console.log("values are equal");
if(i===j)
    console.log("values along with data type are equal")
else
    console.log("values along with data type are not equal")


    // ****************************        task 11,12,13,14                 ********************************
    let number=23;
    let anotherNumber=42;
    if(number==23||number==42)
        console.log("number mathched")

    if(number==23&&anotherNumber==42)
        console.log("Perfect Match")

    if(number!=anotherNumber)
        console.log("Both the numbers are different")

    // ternary operator
        (number>0)
            ?console.log("number is positive"):
        console.log("number is negative");
    