const form = document.reservationForm

form.addEventListener("submit" , function(event) {
    event.preventDefault()
    const firstName = form.firstname.value
    
    const lastName = form.lastname.value
    const lage = form.age.value
    const sex = form.gender.value
    const loc = form.ville.value


    const choice = []
    
    for(var i = 0; i < form.food.length; i++){
        
        if(form.food[i].checked){
            choice.push(form.food[i].value)
        }
    } 
    alert(`First name: ${form.firstname.value}\n Last name: ${form.lastname.value}\n Age: ${form.age.value}\n Gender: ${form.gender.value}\n Location: ${form.ville.value}\n Dietary restriction: ${choice}`)

    
    
    
})