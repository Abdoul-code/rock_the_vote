// const num = [2, 5, 100]
// const doubleNumber = num.map(function(arr){
//     return arr * 2
    
//   })
  
//   console.log(doubleNumber)

//exo 2
// const numero = [2, 5, 100]
// const letter = numero.map((item)=>item.toString());
// console.log(letter)

//exo3

// const name = ["john", "jacob", "jinGleHeimer", "schmidt"]
// const capitalizeNames = name.map(capital => capital[0].toUpperCase() + capital.slice(1))
// console.log(capitalizeNames)

//exo4

// const familyName = [    {
//   name: "Angelina Jolie",
//   age: 80
// },
// {
//   name: "Eric Jones",
//   age: 2
// },
// {
//   name: "Paris Hilton",
//   age: 5
// },
// {
//   name: "Kayne West",
//   age: 16
// },
// {
//   name: "Bob Ziroll",
//   age: 100
// }]
// const namesOnly = familyName.map((arr)=> arr.name)
// console.log(namesOnly)

//exo5

// const permission = [    {
//   name: "Angelina Jolie",
//   age: 80
// },
// {
//   name: "Eric Jones",
//   age: 2
// },
// {
//   name: "Paris Hilton",
//   age: 5
// },
// {
//   name: "Kayne West",
//   age: 16
// },
// {
//   name: "Bob Ziroll",
//   age: 100
// }]
// const makeString = permission.map(function(arrString){
//   if(arrString.age >= 80){
//     return arrString.name + " can go to the Matrix"
//   }
//   else {
//     return arrString.name + "is under age !!"
//   }

// })
// console.log(makeString)

//exo 6
const differentSize = [    {
  name: "Angelina Jolie",
  age: 80
},
{
  name: "Eric Jones",
  age: 2
},
{
  name: "Paris Hilton",
  age: 5
},
{
  name: "Kayne West",
  age: 16
},
{
  name: "Bob Ziroll",
  age: 100
}]

const readyToPutInTheDOM = differentSize.map(function(grandLetter){
  return "<h1>" + grandLetter.name + "<h1>" + "<h2>" + grandLetter.age + "<h2"
})
console.log(readyToPutInTheDOM)




  



