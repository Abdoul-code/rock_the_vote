function isAnagram(word1,word2){
    let len1 = word1.length;
    let len2 = word2.length;
    if (len1 !== len2){
     console.log('Invalid input')
      return
    }
    let str1 = word1.split('').sort().join('');
    let str2 = word2.split('').sort().join('');
    if(str1 === str2){
      console.log("true")
    }else{
      console.log("false")
    }
    
  }
  isAnagram("listen" , "silent")
  isAnagram("pickle", "monkey")