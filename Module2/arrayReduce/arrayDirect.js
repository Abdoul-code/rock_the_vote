// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const sumNum = nums.reduce(function(currentTotal, currentNum){
//     return currentTotal + currentNum

// }, 0)
// console.log(sumNum)

// const users = [
//     {fName: "joe", lName: "smithy"},
//     {fName: "omar", lName: "sanchez"},
//     {fName: "rick", lName: "traore"},
// ]
// const familyName = users.reduce(function(finalName , currentName){
//     finalName.push(currentName.fName + " " + currentName.lName)
//      return finalName

// },[])
// console.log(familyName)

//exo 1
// const nums = [1,2,3]

// const total = nums.reduce(function(final,num){
//     return final + num
// },0)
// console.log(total)

//exo 2

// const nums = [1,2,3]
// const stringOfNumber = nums.reduce(function(final, currentNumber){
//     return final + currentNumber

// }, " ")
// console.log(stringOfNumber)

//exo 3
// const voters =  [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]

// const voterInfo = voters.reduce(function(final,currentVoter){
//     if(currentVoter.voted === true){
//         final++
//     }
//   return final
// },0)
// console.log(voterInfo)

//exo 4
// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];
// var sumWishList = wishlist.reduce(function(final, currentWish){
//     return final + currentWish.price
// }, 0)
// console.log(sumWishList)

//exo 5
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

var flatten = arrays.reduce((final, currentArray)=> [...final, ...currentArray],[])
console.log(flatten)