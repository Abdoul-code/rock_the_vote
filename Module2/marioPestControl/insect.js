var form = document.firstForm
const finalResult = document.getElementById("addResult")
form.addEventListener("submit",function(event){
    event.preventDefault()
    const firstInsect = form.goomBas.value
    const SecondInsect = form.bobOmbs.value
    const thirdInsect = form.cheep.value
    

    finalResult.innerText = (firstInsect*5) + (SecondInsect*7) + (thirdInsect*11)

})




