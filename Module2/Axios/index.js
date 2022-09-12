
function createTodo(){
    axios.get("https://api.vschool.io/abdoul/todo")
    .then(response => todoInfo(response.data))
    .catch(error => console.log(error))
}

createTodo()

function todoInfo(data){
    const todoList = document.getElementById('real-list1')
    wipeList()
    for(let i = 0; i < data.length; i++){
        const container = document.createElement('div')
        const title = document.createElement('h1')
        title.textContent = data[i].title 
        const price = document.createElement('h2')
        price.textContent = data[i].price
        const desc = document.createElement('p')
        desc.textContent = data[i].description
        const image = document.createElement('img')
        image.src = data[i].imgUrl
        container.className = "todo"
        
        

        const button = document.createElement('button')
        button.innerText="Delete"
        button.addEventListener('click', function(){
            const id = data[i].id
            axios.delete(`https://api.vschool.io/abdoul/todo/${data[i]._id}`)
            .then(response => {
                console.log("delete")
                createTodo()
                })
            .catch(err => console.log(err))
        })
        

       const checkbox = document.createElement('input')
       checkbox.type = 'checkbox'
       checkbox.className = 'checkbox'
       checkbox.addEventListener('change', function(){
           if(checkbox.checked === true){
               title.style.textDecoration = 'line-through'
               axios.put(`https://api.vschool.io/abdoul/todo/${data[i]._id}`,{completed: true})
                .then(response => response.data)
                .catch(error => console.log(error))   
           }else{
            checkbox.checked === false
            title.style.textDecoration = 'none'
            axios.put(`https://api.vschool.io/abdoul/todo/${data[i]._id}`,{completed: false})
                .then(response => response.data)
                .catch(error => console.log(error)) 
           }

       })

    container.appendChild(title)
    container.appendChild(price)
    container.appendChild(desc)
    container.appendChild(image)
    container.appendChild(button)
    container.appendChild(checkbox) 

    todoList.appendChild(container)
    document.getElementById('real-list1').style.position = "absolute";

    }
}

function wipeList(){
    const efface = document.getElementById('real-list1')
    while(efface.firstChild){
        console.log("cleared a list")
        efface.removeChild(efface.firstChild)
    }
}

const  myForm = document.todoForm
myForm.addEventListener("submit", event => {
    event.preventDefault()

    const todoList = {
        title: myForm.title.value,
        price: myForm.price.value,
        description: myForm.description.value,
        imgUrl: myForm.img.value
    }
    myForm.title.value=""
    myForm.price.value=""
    myForm.description.value=""
    myForm.img.value=""
    
    axios.post("https://api.vschool.io/abdoul/todo", todoList)
        .then(response => createTodo())
        .catch(error => console.log(error))
})



