const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const numberArray = [12,324,213,4,2,3,45,4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
function slice(start,end)
{
   let modifiedFood=[];
   for(let i=start;i<end-1;i++)
   {
      modifiedFood.push(foods[i]);
   }
return modifiedFood;
}
//console.log(slice(1,5))


// Progression 2:
function spliced(){
   foods.splice(2,0,"noodles","icecream");
   return foods;
}
//console.log(spliced())

// Progression 3:
function isEven(number)
{
   return number%2===0;
}
function isPrime(number)
{
   if (number <= 1) return false; 

    for (let i = 2; i < number; i++) {

        if (number % i === 0) {

            return false; 

        }

    }

    return true;
}
function checkNumber(numberArray,operation){
   //console.log(operation);
   return  numberArray.filter(operation);
   
}
//console.log(checkNumber(numberArray,isEven))

//console.log(checkNumber(numberArray,isPrime))
// Progression 4:
function nonPrime(numberArray){
  
      return reject(numberArray);

}

function reject(numberArray){
   let result=numberArray.filter((number)=>{
      return !isPrime(number)
   })
   return result;
}
//console.log(nonPrime(numberArray))

// Progression 5:
let isEvenUsingLambda = (number)=> number%2===0;


//console.log(isEvenUsingLamda(numberArray));

// Progression 6:
function findSquareOfNumbers(myArray){
   return myArray.map((number)=>{
      return Math.pow(number,2);
   })
}
//console.log(findSquareOfNumbers(myArray))
// Progression 7:

function multiply(myArray){
   return myArray.reduce((acc,val)=>{
      return acc*val;
   },1);

}
function sumOfSquares(myArray){
   let squarednumbers = findSquareOfNumbers(myArray);
   return squarednumbers.reduce((acc,val)=>{
      return acc+val;
   },0);

}
