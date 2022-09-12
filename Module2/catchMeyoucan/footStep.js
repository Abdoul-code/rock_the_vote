//exo 1

function sum(x,y){
    if(isNaN(x) || isNaN(y)){
    throw "Parameter is not a number"
    } else if(typeof x === "string" || y === "string"){
        throw "Paramter is a string"
    }else{
          return x + y;
    }
}
try{
    sum("a","b");
}
catch(err){
console.log(err)
}
finally{
    console.log(sum(2,5))
}

// function sum(num1,num2){
// return num1 + num2
// }
// const actual = sum(10,10)
// const expected = 20
// if(actual !== expected){
//     throw new Error (`Fail Test: Expected ${expected}, but received ${actual} `)
// }else{
//     console.log(`Test Passed: Expected ${expected} === ${actual}`)
// }
