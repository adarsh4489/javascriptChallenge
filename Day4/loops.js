// in this module we will learn loops 

// **************      task 1        *******************


for(let i=1;i<11;i++)
{
    console.log(i)+" ";
}

// **************      task 2        *******************

for(let i=1;i<=10;i++)
{
    console.log("5 * "+i+" = "+ 5*i);
}


// *************       task 3      ***************

let n=1;
let sum=0;
while(n<21)
{
sum+=n;
n++;
}
console.log(sum);


// *************       task 4      ***************

let x=10;
while(x>=0)
{
    console.log(x);
    x--;
}

// *************       task 5      ***************

let i=1;
do{
console.log(i);
i++;
}
while(i<=5)




// *************       task 6      ***************

let fact=1;
let y=5;
do{
fact=fact*y;
y--;
}
while(y>0)

console.log(fact);


// *************       task 7      ***************

 for (let i = 1; i <= 5; i++) {
   let rowPattern = "";
   for (let j = 1; j <= i; j++) {
     rowPattern += "* ";
   }
   console.log(rowPattern);
 }

// *************       task 7      ***************
for(let i=1;i<=10;i++)
{
    if(i==5)
        continue;
    else
    console.log(i);
}

// *************       task 7      ***************

for (let i = 1; i <= 10; i++) {
  if (i == 7) break;
  else console.log(i);
}