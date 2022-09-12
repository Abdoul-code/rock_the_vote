
// function getCount(str){
//     let vowelsCount = 0
//     const vowels = ['a' ,'e','i','o','u']
//     for(let char of str){
//         if(vowels.includes(char)){
//            vowelsCount += 1
//         }  
//    } return vowelsCount
// }

// console.log(getCount("ami"))

function getVowels(str){
    var vowelsCount = 0
    const vowels = ['a' ,'e' , 'i', 'o' , 'u']
    for(let char of str){
      if(vowels.includes(char)){
        vowelsCount += 1
      }
    }return vowelsCount
  }
  console.log(getVowels("abdoultraore"))