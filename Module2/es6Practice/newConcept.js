//Exo 1
const name = "John"
let age = 101
function runForLoop(pets) {
    
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
        
       return petObjects

    } 
console.log("man name: ", name)
}
runForLoop(["cat", "dog"])


//Exo 2

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(carrot =>  ({type: "carrot", name: "carrot" }))
// }
// console.log(carrots)

// Exo 3
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => person.friendly )
}

Exo4 
 const doMathSum = (a, b) => a + b;

var produceProduct = (a, b)=>  a * b

//Exo 5
// let firstName;
// let lastName;
// let age
// function printString(firstName, lastName, age){
//          firstName = "Kat" ;
//         lastName = "Stark";
//         age = 40;
//      console.log(`Hi ${firstName} ${lastName}, how does it feel to be ${age}`)  
//     }
//     return printString()
   


