const isPrime=(n)=>{
    if(n<2 || !Number.isInteger(n)){
        return false
    }
    for(let i=2;i<= Math.sqrt(n);i++){
        if(n%i ===0){
            return false
        }
    }
    return true
}

console.log(isPrime(6));
console.log(isPrime(2)); // true
console.log(isPrime(11)); // true
console.log(isPrime(4)); // false
console.log(isPrime(18)); 