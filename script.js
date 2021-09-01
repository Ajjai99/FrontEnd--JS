
let digit = 0;
let factorial = 1;
let sum = 0; 
let number = prompt("please enter a number");
let temp = number;
let str = number.toString();

for(i=1;i<=str.length;i++)
{
    sum = sum + fact(); 
    temp = temp/10;
//     console.log("the number is " + sum);
}
console.log("the number is " + sum);
let temp1 = sum;
let add = 0;

// if(sum >= 10)

while(temp1 > 0)
{
  let remainder = temp1 % 10;
  add = Math.floor(add + remainder) ;
  temp1 = temp1 / 10 ;
}

console.log("the addition of numbers" +" " + add);

let temp2 = add;
let result = 0 ;

while(temp2 >= 10)
{
  let remain= temp2 % 10;
  result = Math.floor(result + remain) ;
  temp2 = temp2 / 10 ;
}

console.log("the addition of numbers" +" "+ result);



function fact()
{
    while(temp>0){
        digit = temp%10;
        factorial =1;
        for(x = 1;x<=digit;x++){
            factorial*=x;//factorial of digit
        } 
        return factorial;
    }
    // return factorial;
}
