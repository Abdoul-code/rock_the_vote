//Exo 1
// function collectAnimals(...animals) {  
//     console.log(animals) 
// }

//   collectAnimals("dog", "cat", "mouse", "jackolope", "platypus","giraff","lion"); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//Exo3
// const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   };
  
//   function parseSentence({location, duration}){
//     return `We're going to have a good time in ${location} for ${duration}`
//   }
//   console.log(parseSentence(vacation))

//Exo 2
function combineFruit(...combineFruits){
    const [fruit,sweets,vegetables] = combineFruits;
    return {fruit,sweets,vegetables}
}
console.log(combineFruit(combineFruits))
combineFruits(["apple", "pear"],
["cake", "pie"],
["carrot"])


//Exo 5
// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     const [firstFav, secondFav, thirdFav] = arr;
//     return (`My top three favorite activities are, ${firstFav} , ${secondFav}, and ${thirdFav}`);
// }


// console.log(returnFavorites(favoriteActivities))
