const isPalindrome = (str) => {

    const cleanStr = str.replace(/[\W_]/g,'').toLowerCase()

    const reverseStr = cleanStr.split('').reverse().join('')

    return cleanStr === reverseStr


}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
