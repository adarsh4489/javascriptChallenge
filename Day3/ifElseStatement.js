// ***************************        task 1         ****************************
// program to find a number wheather it is PromiseRejectionEvent,negative or zero

let number=45;
if(number>0)
    console.log("Number is  positive")
else if(number<0)
    console.log("Number is Negative")
else 
    console.log("Number is Zero")


    //***********************          Task 2        ********************************
    // program to check weather a person is eligible to vote or not

    const age=23;
    if(age>=18)
        console.log("You can Vote")
    else console.log("You can't vote")


   //***********************          Task 3        ********************************   

//    write a program to find the largest among three numbers  by this we can learn nested if else statements
const num1=23;
const num2=13;
const num3=43;
if(num1>num2)
{
    if(num1>num3)
        console.log("num1 is largest among all the three numbers")
    
}
if(num2>num1)
{
    if(num2>num3)
        console.log("num2 is largest among all the three numbers")
    
}
if(num3>num1)
{
    if(num3>num2)
        console.log("num3 is largest among all the three numbers")
    
}
    


// ***********************       task 4          ***********************
//  switch statement

let no=7;
switch(3)
{
  case 1:
    console.log("Monday")
    break;

  case 2:
    console.log("Tuesday")
    break;  
  case 3:
    console.log("Wednesday")
    break;  
      
  case 4:
    console.log("Thursday")
    break;

  case 5:
    console.log("Friday")
    break;  

    case 6:
        console.log("Saturday")
        break;

        default: console.log("sunday");
}


// task 5

let grade='';
switch(grade){

    case 'A':
        console.log("Excelent")
        break;
    case 'B':
        console.log("Very good")
        break;
    case 'C':
        console.log("Good")
        break;
    case 'D':
        console.log("Very Poor")
        break;
    case 'E':
        console.log("Fail")
        break;

        default: 
        console.log("Absent")
}

// *****************************      Task 6        ****************************

let temp=45;
temp%2===0?(console.log("temp is even")):(console.log("Temp is Odd"));



// *****************************      Task 7        ****************************

let ans=false;
let leap=2023;
  if ((leap % 4 === 0 && leap % 100 !== 0) || leap % 400 === 0) {
    ans=true;
  } else {
   ans=false;
  }



  if (ans==true) {
    console.log(leap + " is a leap year.");
  } else {
    console.log(leap + " is not a leap year.");
  }



