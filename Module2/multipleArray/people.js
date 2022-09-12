var  peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

const groupAge = peopleArray.filter(ageCheck=> ageCheck.age > 18)
groupAge.sort((a,b)=>{
    if(a.lastName < b.lastName){return -1;}
    if(a.lastName > b.lastName){return 1;}
    return 0;
});
const newString = groupAge.map(arrayTest =>"<li>" + arrayTest.firstName + " "+ arrayTest.lastName+ " "+ "is" +" "+ arrayTest.age+ "</li>"
)
console.log(newString)