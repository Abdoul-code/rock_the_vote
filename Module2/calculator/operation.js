const addForm = document.addition

const finalResult = document.getElementById("addResult")

addForm.addEventListener("submit" , function(event){
    event.preventDefault()
    
        const firstNumber = parseInt(addForm.num1.value)
        const secondNumber = parseInt(addForm.num2.value)

       
        addResult.innerText = firstNumber + secondNumber
})


const sustractForm = document.substraction
 const sustractResult = document.getElementById("sustractResult")

sustractForm.addEventListener("submit" , function(event){
    event.preventDefault()

    const susNumber1 = parseInt(sustractForm.num3.value)
    const susNumber2 = parseInt(sustractForm.num4.value)

    sustractResult.innerText = susNumber1 - susNumber2

})


const multiplyForm = document.Multiplication 
 const multiplyResult = document.getElementById("multiplyResult")

multiplyForm.addEventListener("submit" ,function(event){
    event.preventDefault()

    const number1 = parseInt(multiplyForm.num5.value)
    const number2 = parseInt(multiplyForm.num6.value)

    multiplyResult.innerText = number1 * number2

})
