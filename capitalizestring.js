const capitalize =(str)=>{

    // return str[0].toUpperCase()
   let first = str[0].toUpperCase()
   let last = str.slice(1)

   let result = first +last
   return result


}

console.log(capitalize('bye'))