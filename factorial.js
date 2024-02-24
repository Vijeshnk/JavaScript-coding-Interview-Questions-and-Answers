const factorial = (n) => {
  if (n < 0 ) return 'please enter positive number'
  if(n===0) return 1 
  return n * factorial(n-1)
  
}

console.log(factorial(-3)); //please enter positive number
console.log(factorial(5));  //120
console.log(factorial(0));   //1