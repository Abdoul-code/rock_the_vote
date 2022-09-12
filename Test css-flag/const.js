function Person(name,age,gender, status = "officer",work,travail){
    this.name = name,
    this.age = age,
    this.gender = gender
    this.status = status
    this.work = work,
    this.travail = travail
    // this.travail = function(){
    //     console.log("cook at home")
    // }

}
 var employ = new Person("Abdoul", 28, "M","ttagsgdgd")
//  console.log(employ)
// employ.travail()

Person.prototype.parti = function(){
    console.log(this.work)      
}
employ.parti()